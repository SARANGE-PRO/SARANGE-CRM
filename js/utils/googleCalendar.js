/* --- GOOGLE CALENDAR UTILITY (GIS / GAPI) --- */

const CLIENT_ID = "699593246334-05mr710cpof5efgbgra54mpoog2ghma7.apps.googleusercontent.com";
const API_KEY = "AIzaSyAFfQEdzncY0XpTfsuYikj7oVP6uLHj7PE";
const SCOPES = "https://www.googleapis.com/auth/calendar";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

let tokenClient;
let gapiInited = false;
let gisInited = false;

// Promise globale d'initialisation
let initPromise = null;

export const initCalendarClient = () => {
    if (initPromise) return initPromise;

    initPromise = new Promise((resolve, reject) => {
        const checkInterval = setInterval(() => {
            // Attendre que les scripts soient chargés via index.html
            if (window.gapi && window.google) {
                clearInterval(checkInterval);
                loadGapiClient();
                loadGisClient();
            }
        }, 100);

        // Timeout de sécurité (10s)
        setTimeout(() => {
            clearInterval(checkInterval);
            if (!gapiInited || !gisInited) {
                console.warn("⚠️ Scripts Google non chargés après 10s");
                // On ne reject pas forcément pour ne pas planter l'app, mais c'est suspect
            }
        }, 10000);

        function maybeResolve() {
            if (gapiInited && gisInited) {
                console.log("✅ Google Calendar API (GIS) : Prêt");
                resolve();
            }
        }

        async function loadGapiClient() {
            window.gapi.load('client', async () => {
                try {
                    await window.gapi.client.init({
                        apiKey: API_KEY,
                        discoveryDocs: DISCOVERY_DOCS,
                    });
                    gapiInited = true;
                    maybeResolve();
                } catch (err) {
                    console.error("Erreur init GAPI Client", err);
                    reject(err);
                }
            });
        }

        function loadGisClient() {
            try {
                tokenClient = window.google.accounts.oauth2.initTokenClient({
                    client_id: CLIENT_ID,
                    scope: SCOPES,
                    callback: '', // Défini dynamiquement lors de la demande
                });
                gisInited = true;
                maybeResolve();
            } catch (err) {
                console.error("Erreur init GIS Token Client", err);
                reject(err);
            }
        }
    });

    return initPromise;
};

/**
 * Fonction principale pour gérer l'événement
 */
export const manageGoogleEvent = async (chantier) => {
    // 1. S'assurer que tout est initialisé
    try {
        await initCalendarClient();
    } catch (e) {
        console.error("Impossible d'initialiser Google API", e);
        return null;
    }

    // 2. Vérifier si on a un token valide (Token Model)
    if (!window.gapi.client.getToken()) {
        console.log("🔒 Demande de permission Google...");
        try {
            await requestAccessToken();
        } catch (e) {
            console.warn("Auth refusée ou fermée", e);
            return null;
        }
    }

    // 3. Logique Métrage vs Pose
    const isMetrage = !chantier.datePose && (chantier.status !== 'POSE');
    const calendarName = isMetrage ? "Sarange - Métrages" : "Sarange - Pose";
    const colorId = isMetrage ? "5" : "10"; // 5=Jaune, 10=Vert
    const titre = `${isMetrage ? 'MÉTRAGE' : 'POSE'} : ${chantier.client}`;

    // 🔴 SAFETY CHECK : Pas de date = Pas de calendrier
    if (!chantier.dateIntervention) {
        console.log("ℹ️ Pas de date d'intervention définie, lecture/écriture Google Calendar annulée.");
        return null;
    }

    // 4. Récupérer l'agenda (Peut échouer si token expiré => Retry)
    let calendarId;
    try {
        calendarId = await getOrCreateCalendarId(calendarName);
    } catch (err) {
        if (err.status === 401) {
            console.log("🔄 Token expiré, renouvellement...");
            await requestAccessToken();
            calendarId = await getOrCreateCalendarId(calendarName); // Retry
        } else {
            console.error("Erreur Agenda", err);
            return null;
        }
    }

    // 5. Build Event
    const startDateTime = new Date(chantier.dateIntervention);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

    const eventResource = {
        summary: titre,
        location: chantier.adresse || '',
        description: `Client: ${chantier.client}\nTél: ${chantier.telephone || ''}\nLien GPS: https://waze.com/ul?q=${encodeURIComponent(chantier.adresse || '')}`,
        start: { dateTime: startDateTime.toISOString(), timeZone: 'Europe/Paris' },
        end: { dateTime: endDateTime.toISOString(), timeZone: 'Europe/Paris' },
        colorId: colorId,
        reminders: {
            useDefault: false,
            overrides: [
                { method: 'popup', minutes: 1440 }, // 24h
                { method: 'popup', minutes: 120 },  // 2h
                { method: 'popup', minutes: 10 }    // 10 min
            ]
        }
    };

    // 6. Execute (Insert or Update)
    try {
        let response;
        if (chantier.googleEventId) {
            // Update
            try {
                response = await window.gapi.client.calendar.events.update({
                    calendarId: calendarId,
                    eventId: chantier.googleEventId,
                    resource: eventResource
                });
            } catch (e) {
                if (e.status === 404) {
                    // Si supprimé, on recrée
                    response = await window.gapi.client.calendar.events.insert({
                        calendarId: calendarId,
                        resource: eventResource
                    });
                } else throw e;
            }
        } else {
            // Insert
            response = await window.gapi.client.calendar.events.insert({
                calendarId: calendarId,
                resource: eventResource
            });
        }

        console.log("✅ Synchro Google OK");
        return response.result.id;

    } catch (e) {
        if (e.status === 401) {
            console.error("❌ Erreur 401 sur Event (Token expiré ?)", e);
        } else {
            console.error("❌ Erreur Sync Event", e);
        }
        return null;
    }
};

/**
 * Supprime l'événement Google associé
 */
export const deleteGoogleEvent = async (chantier) => {
    if (!chantier.googleEventId) return;

    try {
        await initCalendarClient();

        if (!window.gapi.client.getToken()) {
            // Si pas de token, on ne force pas la popup à la suppression (trop intrusif)
            // On log juste et on abandonne (fail soft)
            console.warn("Pas de token, suppression GCal ignorée");
            return;
        }

        const isMetrage = !chantier.datePose && (chantier.status !== 'POSE');
        const calendarName = isMetrage ? "Sarange - Métrages" : "Sarange - Pose";

        const calendarId = await getOrCreateCalendarId(calendarName);

        await window.gapi.client.calendar.events.delete({
            calendarId: calendarId,
            eventId: chantier.googleEventId
        });

        console.log("🗑️ Événement Google supprimé");

    } catch (e) {
        console.error("Erreur suppression GCal", e);
    }
};


// --- HELPERS ---

function requestAccessToken() {
    return new Promise((resolve, reject) => {
        tokenClient.callback = (resp) => {
            if (resp.error) {
                reject(resp);
            } else {
                // CRUCIAL : On enregistre le token dans gapi pour éviter de leRedemander
                window.gapi.client.setToken(resp);
                resolve(resp);
            }
        };
        tokenClient.requestAccessToken({ prompt: '' });
    });
}

async function getOrCreateCalendarId(name) {
    const list = await window.gapi.client.calendar.calendarList.list();
    const existing = list.result.items.find(c => c.summary === name);
    if (existing) return existing.id;

    const created = await window.gapi.client.calendar.calendars.insert({
        resource: { summary: name, timeZone: 'Europe/Paris' }
    });
    return created.result.id;
}

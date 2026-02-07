/* --- GOOGLE CALENDAR UTILITY --- */
import { gapi } from 'gapi-script';

const CLIENT_ID = "699593246334-05mr710cpof5efgbgra54mpoog2ghma7.apps.googleusercontent.com";
const API_KEY = "AIzaSyAFfQEdzncY0XpTfsuYikj7oVP6uLHj7PE";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar";

// Variable pour suivre l'état de l'initialisation
let isGapiInitialized = false;

export const initCalendarClient = () => {
    return new Promise((resolve, reject) => {
        // Si déjà initialisé, on ne refait pas
        if (isGapiInitialized) return resolve(gapi.auth2.getAuthInstance());

        gapi.load('client:auth2', async () => {
            try {
                await gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                    plugin_name: "SarangePro" // Aide à éviter certaines erreurs de doublons
                });

                isGapiInitialized = true;
                console.log("📅 Google Calendar API : Initialisée avec succès");
                resolve(gapi.auth2.getAuthInstance());
            } catch (error) {
                console.error("❌ Erreur critique init Google:", error);
                // On ne reject pas forcément pour ne pas bloquer toute l'app, 
                // mais on marque comme non initialisé
                isGapiInitialized = false;
                reject(error);
            }
        });
    });
};

const getOrCreateCalendarId = async (calendarName) => {
    try {
        const response = await gapi.client.calendar.calendarList.list();
        const calendars = response.result.items;
        const existing = calendars.find(c => c.summary === calendarName);

        if (existing) return existing.id;

        const createResponse = await gapi.client.calendar.calendars.insert({
            resource: {
                summary: calendarName,
                description: "Agenda automatique SarangePro",
                timeZone: "Europe/Paris"
            }
        });
        return createResponse.result.id;
    } catch (e) {
        console.error("Erreur gestion agenda:", e);
        // Fallback : on utilise l'agenda principal si on n'arrive pas à créer le spécifique
        return 'primary';
    }
};

export const manageGoogleEvent = async (chantier) => {
    // 1. Vérification de sécurité : est-ce que gapi est prêt ?
    if (!gapi.auth2) {
        console.warn("⚠️ GAPI non chargé, tentative de ré-init...");
        await initCalendarClient();
    }

    const auth = gapi.auth2.getAuthInstance();

    if (!auth) {
        throw new Error("Impossible d'accéder à l'instance d'authentification Google.");
    }

    // 2. Connexion (si nécessaire)
    if (!auth.isSignedIn.get()) {
        console.log("🔒 Demande de connexion Google...");
        try {
            await auth.signIn();
        } catch (err) {
            // Si l'utilisateur ferme la popup ou erreur popup bloquée
            console.warn("Connexion annulée ou bloquée", err);
            return null; // On arrête là proprement sans crasher
        }
    }

    // 3. Logique Métrage vs Pose
    const isMetrage = !chantier.datePose && chantier.status !== 'POSE';
    const calendarName = isMetrage ? "Sarange - Métrages" : "Sarange - Pose";
    const colorId = isMetrage ? "5" : "10"; // 5=Jaune, 10=Vert
    const titre = `${isMetrage ? 'MÉTRAGE' : 'POSE'} : ${chantier.client}`;

    // 4. Récupérer l'ID Agenda
    const calendarId = await getOrCreateCalendarId(calendarName);

    // 5. Préparer l'événement
    const startDateTime = new Date(chantier.dateIntervention);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1h

    const eventResource = {
        summary: titre,
        location: chantier.adresse,
        description: `Client: ${chantier.client}\nTél: ${chantier.telephone}\nLien GPS: https://waze.com/ul?q=${encodeURIComponent(chantier.adresse)}`,
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

    // 6. Insert ou Update
    try {
        let response;
        if (chantier.googleEventId) {
            // UPDATE
            response = await gapi.client.calendar.events.update({
                calendarId: calendarId,
                eventId: chantier.googleEventId,
                resource: eventResource
            });
        } else {
            // INSERT
            response = await gapi.client.calendar.events.insert({
                calendarId: calendarId,
                resource: eventResource
            });
        }

        console.log("✅ Synchro Google OK");
        return response.result.id;

    } catch (error) {
        console.error("❌ Erreur API Calendar:", error);
        return null;
    }
};

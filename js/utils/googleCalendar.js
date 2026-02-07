/* --- GOOGLE CALENDAR UTILITY --- */
import { gapi } from 'gapi-script';

// CONFIGURATION
const CLIENT_ID = "699593246334-05mr710cpof5efgbgra54mpoog2ghma7.apps.googleusercontent.com";
const API_KEY = "AIzaSyAFfQEdzncY0XpTfsuYikj7oVP6uLHj7PE";
const SCOPES = "https://www.googleapis.com/auth/calendar";
const CALENDAR_NAME = "Sarange - Métrages";

let isInitialized = false;

/**
 * Initialisation du client Google API
 * À appeler au démarrage de l'app (App.js)
 */
export const initCalendarClient = () => {
    return new Promise((resolve, reject) => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
                scope: SCOPES,
            }).then(() => {
                isInitialized = true;
                console.log("📅 Google Calendar Client Initialized");
                resolve();
            }).catch((err) => {
                console.error("Erreur init Google Calendar", err);
                reject(err);
            });
        });
    });
};

/**
 * Fonction Principale : Gère la synchro (Création ou Mise à jour)
 * @param {Object} chantier - L'objet chantier complet
 * @returns {Promise<string>} - L'ID de l'événement Google (ou null si échec)
 */
export const manageGoogleEvent = async (chantier) => {
    if (!isInitialized) {
        console.warn("Client Calendar non initialisé. Tentative d'init...");
        try {
            await initCalendarClient();
        } catch (e) { return null; }
    }

    // 1. Authentification Silencieuse (ou demandée si nécessaire)
    const GoogleAuth = gapi.auth2.getAuthInstance();
    if (!GoogleAuth.isSignedIn.get()) {
        try {
            await GoogleAuth.signIn(); // Ouvre la popup si pas connecté
        } catch (e) {
            console.warn("Utilisateur a refusé la connexion Google Agenda");
            return null;
        }
    }

    // 2. Trouver ou Créer l'Agenda "Sarange - Métrages"
    let calendarId = await getSarangeCalendarId();
    if (!calendarId) {
        calendarId = await createSarangeCalendar();
    }

    if (!calendarId) return null; // Échec critique

    // 3. Préparer les données de l'événement
    const eventResource = createEventResource(chantier);

    try {
        let response;
        // 4. Update ou Insert
        if (chantier.googleEventId) {
            // Tentative de mise à jour
            try {
                response = await gapi.client.calendar.events.update({
                    calendarId: calendarId,
                    eventId: chantier.googleEventId,
                    resource: eventResource
                });
                console.log("📅 Événement mis à jour :", response.result.htmlLink);
            } catch (e) {
                // Si l'événement n'existe plus (404), on le recrée
                if (e.status === 404) {
                    console.warn("Événement introuvable, recréation...");
                    response = await gapi.client.calendar.events.insert({
                        calendarId: calendarId,
                        resource: eventResource
                    });
                } else { throw e; }
            }
        } else {
            // Création
            response = await gapi.client.calendar.events.insert({
                calendarId: calendarId,
                resource: eventResource
            });
            console.log("📅 Événement créé :", response.result.htmlLink);
        }

        return response.result.id;

    } catch (error) {
        console.error("Erreur Sychro Calendar :", error);
        return null;
    }
};

/**
 * Récupère l'ID de l'agenda dédié
 */
const getSarangeCalendarId = async () => {
    try {
        const response = await gapi.client.calendar.calendarList.list();
        const calendar = response.result.items.find(c => c.summary === CALENDAR_NAME);
        return calendar ? calendar.id : null;
    } catch (e) {
        console.error("Erreur lecture agendas", e);
        return null;
    }
};

/**
 * Crée l'agenda dédié si inexistant
 */
const createSarangeCalendar = async () => {
    try {
        const response = await gapi.client.calendar.calendars.insert({
            resource: { summary: CALENDAR_NAME }
        });
        return response.result.id;
    } catch (e) {
        console.error("Erreur création agenda", e);
        return null;
    }
};

/**
 * Formate l'objet événement pour l'API Google
 */
const createEventResource = (chantier) => {
    // Date de début (Métrage)
    const startDateTime = new Date(chantier.dateIntervention || new Date());
    // Durée par défaut : 1h
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

    // Construction de la description
    let description = `📞 Tél: ${chantier.telephone || 'Non renseigné'}\n`;
    description += `📄 Contrat: ${chantier.typeContrat || 'Standard'}\n`;
    if (chantier.address) {
        const q = encodeURIComponent(chantier.address);
        description += `🚗 Waze: https://waze.com/ul?q=${q}&navigate=yes\n`;
        description += `🗺️ Maps: https://www.google.com/maps/search/?api=1&query=${q}`;
    }

    return {
        summary: `MÉTRAGE : ${chantier.client || 'Client'}`,
        location: chantier.address || '',
        description: description,
        start: {
            dateTime: startDateTime.toISOString(),
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        end: {
            dateTime: endDateTime.toISOString(),
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        colorId: '5', // Jaune (Yellow)
        reminders: {
            useDefault: false,
            overrides: [
                { method: 'email', minutes: 24 * 60 }, // 1 jour avant
                { method: 'popup', minutes: 2 * 60 },  // 2 heures avant
                { method: 'popup', minutes: 0 }        // Au moment même
            ]
        }
    };
};

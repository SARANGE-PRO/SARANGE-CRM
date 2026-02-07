
/**
 * Vérifie l'urgence des chantiers (Creation > 5j sans date OU Date < Aujourd'hui sans être envoyé)
 */
export const checkUrgency = (chantiers) => {
    if (!chantiers) return 0;
    const now = new Date();
    return chantiers.filter(c => {
        if (c.sendStatus === 'SENT') return false;

        // Cas 1: Pas de date, créé il y a > 5 jours
        if (!c.dateIntervention) {
            const creation = new Date(c.date);
            const diffDays = (now - creation) / (1000 * 60 * 60 * 24);
            return diffDays > 5;
        }

        return false;
    }).length;
};

/**
 * Génère un fichier iCal (.ics) optimisé pour le temps de trajet (Apple) et les rappels
 */
export const generateSmartICS = (chantier) => {
    if (!chantier.dateIntervention) return null;

    const formatDate = (dateString) => {
        // Format requis : YYYYMMDDTHHmmssZ (UTC)
        const d = new Date(dateString);
        return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const start = formatDate(chantier.dateIntervention);
    // Durée par défaut 1h
    const end = formatDate(new Date(new Date(chantier.dateIntervention).getTime() + 60 * 60000));
    const now = formatDate(new Date());

    // Gestion du GPS pour le calcul d'itinéraire
    let locationString = chantier.adresse;
    let geoProp = '';
    let appleLocation = '';

    if (chantier.gps && chantier.gps.lat) {
        // Propriété standard
        geoProp = `GEO:${chantier.gps.lat};${chantier.gps.lon}`;
        // Propriété magique Apple pour "Temps de trajet"
        appleLocation = `X-APPLE-STRUCTURED-LOCATION;VALUE=URI;X-APPLE-RADIUS=100;X-TITLE="${chantier.adresse}":geo:${chantier.gps.lat},${chantier.gps.lon}`;
    }

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SarangePro//Métrage//FR
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:${chantier.id}@app.sarange.fr
DTSTAMP:${now}
DTSTART:${start}
DTEND:${end}
SUMMARY:Métré : ${chantier.client}
DESCRIPTION:Client: ${chantier.client}\\nTéléphone: ${chantier.telephone}\\nAdresse: ${chantier.adresse}
LOCATION:${locationString}
${geoProp}
${appleLocation}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Rappel J-1 : Métré demain (${chantier.client})
END:VALARM
BEGIN:VALARM
TRIGGER:-PT2H
ACTION:DISPLAY
DESCRIPTION:Rappel H-2 : Départ imminent ? Vérifiez le trafic.
END:VALARM
BEGIN:VALARM
TRIGGER:-PT0M
ACTION:DISPLAY
DESCRIPTION:C'est l'heure du métré !
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    return URL.createObjectURL(blob);
};

export const downloadICS = (chantier) => {
    const url = generateSmartICS(chantier);
    if (!url) return;

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Metre_${chantier.client.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const generateGoogleCalendarUrl = (chantier) => {
    if (!chantier.dateIntervention) return '';
    const title = encodeURIComponent(`Métré : ${chantier.client}`);
    const details = encodeURIComponent(`Client: ${chantier.client}\nTéléphone: ${chantier.telephone || ''}\nAdresse: ${chantier.adresse}\n\n${chantier.gps ? `GPS: ${chantier.gps.lat}, ${chantier.gps.lon}` : ''}`);
    const loc = encodeURIComponent(chantier.adresse);

    const d = new Date(chantier.dateIntervention);
    const start = d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const end = new Date(d.getTime() + 60 * 60000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${loc}`;
};

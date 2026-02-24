const D=e=>{if(!e)return 0;const n=new Date;return e.filter(t=>{if(!t||t.deleted||t.purged||t.archived||t.sendStatus==="SENT")return!1;if(!t.dateIntervention){const o=new Date(t.date);return(n-o)/(1e3*60*60*24)>5}return!1}).length},A=e=>{if(!e.dateIntervention)return null;const n=p=>new Date(p).toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",t=n(e.dateIntervention),o=n(new Date(new Date(e.dateIntervention).getTime()+60*6e4)),s=n(new Date);let r=e.adresse,l="",a="";e.gps&&e.gps.lat&&(l=`GEO:${e.gps.lat};${e.gps.lon}`,a=`X-APPLE-STRUCTURED-LOCATION;VALUE=URI;X-APPLE-RADIUS=100;X-TITLE="${e.adresse}":geo:${e.gps.lat},${e.gps.lon}`);const d=`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SarangePro//Métrage//FR
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:${e.id}@app.sarange.fr
DTSTAMP:${s}
DTSTART:${t}
DTEND:${o}
SUMMARY:Métré : ${e.client}
DESCRIPTION:Client: ${e.client}\\nTéléphone: ${e.telephone}\\nAdresse: ${e.adresse}
LOCATION:${r}
${l}
${a}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Rappel J-1 : Métré demain (${e.client})
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
END:VCALENDAR`,I=new Blob([d],{type:"text/calendar;charset=utf-8"});return URL.createObjectURL(I)},R=e=>{const n=A(e);if(!n)return;const t=document.createElement("a");t.href=n,t.setAttribute("download",`Metre_${e.client.replace(/\s+/g,"_")}.ics`),document.body.appendChild(t),t.click(),document.body.removeChild(t)},T=e=>{if(!e.dateIntervention)return"";const n=encodeURIComponent(`Métré : ${e.client}`),t=encodeURIComponent(`Client: ${e.client}
Téléphone: ${e.telephone||""}
Adresse: ${e.adresse}

${e.gps?`GPS: ${e.gps.lat}, ${e.gps.lon}`:""}`),o=encodeURIComponent(e.adresse),s=new Date(e.dateIntervention),r=s.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",l=new Date(s.getTime()+60*6e4).toISOString().replace(/[-:]/g,"").split(".")[0]+"Z";return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${n}&dates=${r}/${l}&details=${t}&location=${o}`};export{D as c,R as d,T as g};

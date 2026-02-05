export const generateUUID = () =>
    (typeof crypto !== "undefined" && crypto.randomUUID)
        ? crypto.randomUUID()
        : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

export const compressImage = (f) =>
    new Promise((r) => {
        const rd = new FileReader();
        rd.readAsDataURL(f);
        rd.onload = (e) => {
            const i = new Image();
            i.src = e.target.result;
            i.onload = () => {
                const c = document.createElement("canvas");
                const ctx = c.getContext("2d");
                const sc = Math.min(1, 1200 / i.width);
                c.width = i.width * sc;
                c.height = i.height * sc;
                ctx.drawImage(i, 0, 0, c.width, c.height);
                r(c.toDataURL("image/jpeg", 0.6));
            };
        };
    });

export const ValidationService = {
    isMeasureSuspicious: (v, m) => (m ? false : v !== undefined && v > 0 && v < 300),
    hasAdvancedOptions: (t) => ["FENETRE", "VOLET_ROULANT", "PORTE_ENTREE"].includes(t),
    validateProduct: (p) => {
        const e = [];
        if (p.type !== "AUTRE") {
            if (!p.largeurMm) e.push("largeurMm");
            if (!p.hauteurMm && !p.monobloc) e.push("hauteurMm");
        } else {
            if (!p.description) e.push("description");
        }

        if (["FENETRE", "BAIE_COULISSANTE", "PORTE_ENTREE", "PORTE_SERVICE"].includes(p.type)) {
            if (!p.matiere) e.push("matiere");
            if (!p.profil) e.push("profil");
            if (!p.couleur) e.push("couleur");
            if (p.couleur === "AUTRE" && !p.couleurAutre) e.push("couleurAutre");
            if (p.profil === "ISO" && !p.isoMm) e.push("isoMm");

            if (["FENETRE", "BAIE_COULISSANTE"].includes(p.type)) {
                const v = p.vitrageFlags || {};
                if (!Object.values(v).some(x => x === true)) e.push("vitrageFlags");
            }

            if (p.type === "PORTE_ENTREE") {
                if (!p.remplissage) e.push("remplissage");
            }
        }

        if (p.type === "VOLET_ROULANT") {
            if (!p.manoeuvre) e.push("manoeuvre");
            if ((p.manoeuvre === "FILAIRE" || p.manoeuvre === "RADIO") && !p.sortieCable && p.manoeuvre !== "SOLAIRE") e.push("sortieCable");
            if (p.monobloc && !p.coffreADeduireMm) e.push("coffreADeduireMm");
        }

        return { isValid: e.length === 0, errors: e };
    }
};

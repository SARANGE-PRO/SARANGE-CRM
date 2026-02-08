export const generateUUID = () =>
    (typeof crypto !== "undefined" && crypto.randomUUID)
        ? crypto.randomUUID()
        : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

/**
 * Échappe les caractères HTML pour éviter les failles XSS.
 */
export const escapeHTML = (str) => {
    if (!str || typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, (m) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[m]);
};

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
    hasAdvancedOptions: (t) => ["FENETRE", "PORTE_FENETRE", "VOLET_ROULANT", "PORTE_ENTREE"].includes(t),
    validateProduct: (p) => {
        const e = [];
        if (p.type !== "AUTRE") {
            if (!p.largeurMm) e.push("largeurMm");
            if (!p.hauteurMm && !p.monobloc) e.push("hauteurMm");
        } else {
            if (!p.description) e.push("description");
        }

        if (["FENETRE", "PORTE_FENETRE", "BAIE_COULISSANTE", "PORTE_ENTREE", "PORTE_SERVICE"].includes(p.type)) {
            if (!p.matiere) e.push("matiere");
            if (!p.profil) e.push("profil");
            if (!p.couleur) e.push("couleur");
            if (p.couleur === "AUTRE" && !p.couleurAutre) e.push("couleurAutre");
            if (p.profil === "ISO" && !p.isoMm) e.push("isoMm");

            if (["FENETRE", "PORTE_FENETRE", "BAIE_COULISSANTE"].includes(p.type)) {
                const v = p.vitrageFlags || {};
                if (!Object.values(v).some(x => x === true)) e.push("vitrageFlags");
            }

            if (p.type === "PORTE_ENTREE") {
                if (!p.remplissage) e.push("remplissage");
            }
        }

        if (p.type === "VOLET_ROULANT") {
            if (!p.couleur) e.push("couleur");
            if (p.couleur === "AUTRE" && !p.couleurAutre) e.push("couleurAutre");
            if (!p.manoeuvre) e.push("manoeuvre");
            if ((p.manoeuvre === "FILAIRE" || p.manoeuvre === "RADIO") && !p.sortieCable && p.manoeuvre !== "SOLAIRE") e.push("sortieCable");
            if (p.monobloc && !p.coffreADeduireMm) e.push("coffreADeduireMm");
        }

        return { isValid: e.length === 0, errors: e };
    }
};

/**
 * Construit une chaîne de texte avec toutes les options d'un produit
 * @param {Object} product - Le produit
 * @returns {string} - Options formatées séparées par des virgules
 */
export const buildOptionsString = (product) => {
    const opts = [];

    // Options fenêtres
    if (product.oscilloBattant) opts.push('Oscillo-battant');
    if (product.grilleVentilation) opts.push('Grille ventilation');
    if (product.poigneeCle) opts.push('Poignée à clé');
    if (product.ouvertureExterieure) opts.push('Ouverture extérieure');

    // Options portes
    if (product.tierceImposte) opts.push('Tierce/Imposte');
    if (product.tierce) opts.push(`Tierce (passage ${product.cotePassageMm}mm)`);

    // Options volets
    if (product.monobloc) opts.push(`Monobloc (coffre ${product.coffreADeduireMm}mm)`);
    if (product.boxDomotique) opts.push('Box domotique');
    if (product.manoeuvre) opts.push(`Manœuvre ${product.manoeuvre}`);
    if (product.sortieCable) opts.push(`Sortie câble ${product.sortieCable}`);
    if (product.coupleMoteur) opts.push(`Couple ${product.coupleMoteur}Nm`);
    if (product.pose) opts.push(`Pose ${product.pose}`);

    // Poignée personnalisée
    if (product.poigneeHauteur === 'AUTRE' && product.poigneeHauteurMm) {
        opts.push(`Poignée ${product.poigneeHauteurMm}mm`);
    }

    return opts.join(', ');
};

/**
 * Fusionne deux listes (Cloud et Local) en gardant TOUJOURS la version la plus récente
 * pour chaque élément individuellement.
 */
export const mergeArraysSecure = (cloudList = [], localList = []) => {
    const map = new Map();

    // 1. On met tout le Cloud dans une "Map"
    cloudList.forEach(item => {
        map.set(item.id, item);
    });

    // 2. On traite le Local
    localList.forEach(localItem => {
        const cloudItem = map.get(localItem.id);

        if (!cloudItem) {
            // Cas A : N'existe pas dans le Cloud => Nouveau local => On garde
            map.set(localItem.id, localItem);
        } else {
            // Cas B : Conflit => On compare les timestamps (updatedAt)
            // Règle d'Or : Le plus récent gagne toujours (même si c'est un "purged") sur la base de la date de modif.
            const localTime = new Date(localItem.updatedAt || 0).getTime();
            const cloudTime = new Date(cloudItem.updatedAt || 0).getTime();

            if (localTime > cloudTime) {
                // Local est plus récent : Il gagne (même si c'est une suppression logique)
                map.set(localItem.id, localItem);
            } else {
                // Cloud est plus récent ou égal : Il gagne
                // (Rien à faire, car cloudItem est déjà dans la Map)
            }
        }
    });

    // On retourne tout (Y COMPRIS les items purgés, ils seront filtrés par les Vues)
    return Array.from(map.values());
};

/**
 * Détermine l'étape courante du chantier (1 à 4)
 * @param {Object} chantier - Le chantier
 * @param {Array} products - La liste des produits (peut être null/undefined)
 * @returns {number} - 1 (Création), 2 (Planification), 3 (Métrage), 4 (Envoyé)
 */
export const getChantierStep = (chantier, products) => {
    if (!chantier) return 1;
    if (chantier.sendStatus === 'SENT') return 4;

    const hasProducts = products && Array.isArray(products) && products.length > 0;

    // Si on a une date
    if (chantier.dateIntervention) {
        // Et qu'on a au moins un produit -> Étape 3 (Métrage en cours)
        if (hasProducts) return 3;
        // Sinon -> Étape 2 (Planifié, prêt à métrer)
        return 2;
    }

    // Sinon -> Étape 1 (À planifier)
    return 1;
};

/**
 * Retourne le libellé d'une étape
 */
export const getStepLabel = (step) => {
    switch (step) {
        case 1: return 'Création';
        case 2: return 'Planification';
        case 3: return 'Métrage';
        case 4: return 'Envoyé';
        default: return 'Inconnu';
    }
};

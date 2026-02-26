/* --- ATELIER SERVICE (Firebase Realtime Database) --- */

import { db } from '../../src/firebase.js';
import { ref, onValue, get, push, update, remove } from 'firebase/database';

const COLLECTION = 'OrdresFabrication';

/**
 * Types de produit supportés.
 * - VOLET_ROULANT   : Formulaire dédié (fiche fab interne)
 * - FENETRE_PVC     : PDF importé (Proges)
 * - FENETRE_ALU     : PDF importé (Scal)
 * - PORTE_PVC       : PDF importé (Proges)
 * - PORTE_ALU       : PDF importé (Scal)
 */
export const TYPES_PRODUIT = {
    VOLET_ROULANT: 'VOLET_ROULANT',
    FENETRE_PVC: 'FENETRE_PVC',
    FENETRE_ALU: 'FENETRE_ALU',
    PORTE_PVC: 'PORTE_PVC',
    PORTE_ALU: 'PORTE_ALU'
};

export const TYPES_PRODUIT_LABELS = {
    VOLET_ROULANT: 'Volet Roulant',
    FENETRE_PVC: 'Fenêtre / Coulissant PVC',
    FENETRE_ALU: 'Fenêtre / Coulissant Alu',
    PORTE_PVC: "Porte d'Entrée PVC",
    PORTE_ALU: "Porte d'Entrée Alu"
};

/**
 * Statuts d'un Ordre de Fabrication.
 */
export const OF_STATUTS = {
    ATTENTE_VITRAGE: 'ATTENTE_VITRAGE',
    A_FABRIQUER: 'A_FABRIQUER',
    EN_COURS: 'EN_COURS',
    BLOQUE_ANOMALIE: 'BLOQUE_ANOMALIE',
    PRET_POUR_POSE: 'PRET_POUR_POSE'
};

/**
 * Écoute en temps réel tous les Ordres de Fabrication.
 * @param {function} callback - Appelé avec un tableau d'OF à chaque changement.
 * @returns {function} unsubscribe - Appeler pour couper l'écoute.
 */
export const getOrdresFabrication = (callback) => {
    const ordresRef = ref(db, COLLECTION);

    const unsubscribe = onValue(ordresRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) {
            callback([]);
            return;
        }
        const ordres = Object.entries(data).map(([id, value]) => ({
            id,
            ...value
        }));
        callback(ordres);
    }, (error) => {
        console.error('❌ Erreur getOrdresFabrication (onValue):', error);
        callback([]);
    });

    return unsubscribe;
};

/**
 * Lecture unique (one-shot) de tous les Ordres de Fabrication.
 * @returns {Promise<Array>} Liste des OF.
 */
export const getOrdresFabricationOnce = async () => {
    const ordresRef = ref(db, COLLECTION);
    try {
        const snapshot = await get(ordresRef);
        if (!snapshot.exists()) return [];

        const data = snapshot.val();
        return Object.entries(data).map(([id, value]) => ({
            id,
            ...value
        }));
    } catch (error) {
        console.error('❌ Erreur getOrdresFabricationOnce:', error);
        return [];
    }
};

/**
 * Crée un nouvel Ordre de Fabrication.
 * @param {object} data - Données de l'OF.
 * @param {string} data.id_projet
 * @param {string} data.client_nom
 * @param {string} data.type_produit - Une valeur de TYPES_PRODUIT
 * @param {object} [data.details_fabrication] - Champs spécifiques au type (volet: hauteur, largeur, etc.)
 * @param {string} [data.url_pdf_fabrication] - URL PDF importé (pour PVC/Alu)
 * @returns {Promise<string>} ID du nouvel OF créé.
 */
export const createOrdreFabrication = async (data) => {
    const ordresRef = ref(db, COLLECTION);
    const newRef = push(ordresRef);

    const newOF = {
        id_projet: data.id_projet || '',
        client_nom: data.client_nom || '',
        type_produit: data.type_produit || TYPES_PRODUIT.VOLET_ROULANT,
        statut: OF_STATUTS.A_FABRIQUER,
        date_creation: new Date().toISOString(),
        url_pdf_fabrication: data.url_pdf_fabrication || null,
        details_fabrication: data.details_fabrication || null,
        historique: {
            demarre_par: null,
            demarre_le: null,
            termine_par: null,
            termine_le: null
        },
        anomalie: {
            signalee: false,
            motif: '',
            date_signalement: null
        }
    };

    try {
        await update(newRef, newOF);
        console.log(`🏭 OF créé: ${newRef.key} — ${newOF.client_nom} (${newOF.type_produit})`);
        return newRef.key;
    } catch (error) {
        console.error('❌ Erreur createOrdreFabrication:', error);
        throw error;
    }
};

/**
 * Met à jour le statut d'un Ordre de Fabrication avec gestion de l'historique.
 * - EN_COURS       → historique.demarre_par + demarre_le
 * - PRET_POUR_POSE → historique.termine_par + termine_le
 *
 * @param {string} id - ID de l'OF.
 * @param {string} nouveauStatut - Nouveau statut.
 * @param {string} userId - Identifiant de l'utilisateur effectuant l'action.
 */
export const updateStatutOrdre = async (id, nouveauStatut, userId) => {
    const ordreRef = ref(db, `${COLLECTION}/${id}`);

    const updates = {
        statut: nouveauStatut
    };

    if (nouveauStatut === OF_STATUTS.EN_COURS) {
        updates['historique/demarre_par'] = userId;
        updates['historique/demarre_le'] = new Date().toISOString();
    }

    if (nouveauStatut === OF_STATUTS.PRET_POUR_POSE) {
        updates['historique/termine_par'] = userId;
        updates['historique/termine_le'] = new Date().toISOString();
    }

    try {
        await update(ordreRef, updates);
        console.log(`🔄 OF ${id} → ${nouveauStatut} (par ${userId})`);
    } catch (error) {
        console.error('❌ Erreur updateStatutOrdre:', error);
        throw error;
    }
};

/**
 * Signale une anomalie sur un OF.
 * Passe le statut à BLOQUE_ANOMALIE et remplit l'objet anomalie.
 *
 * @param {string} id - ID de l'OF.
 * @param {string} motif - Raison du blocage.
 */
export const signalerAnomalie = async (id, motif) => {
    const ordreRef = ref(db, `${COLLECTION}/${id}`);

    const updates = {
        statut: OF_STATUTS.BLOQUE_ANOMALIE,
        'anomalie/signalee': true,
        'anomalie/motif': motif,
        'anomalie/date_signalement': new Date().toISOString()
    };

    try {
        await update(ordreRef, updates);
        console.log(`⚠️ Anomalie signalée sur OF ${id}: ${motif}`);
    } catch (error) {
        console.error('❌ Erreur signalerAnomalie:', error);
        throw error;
    }
};

/**
 * Résout une anomalie — repasse l'OF en A_FABRIQUER et reset l'anomalie.
 */
export const resoudreAnomalie = async (id) => {
    const ordreRef = ref(db, `${COLLECTION}/${id}`);
    const updates = {
        statut: OF_STATUTS.A_FABRIQUER,
        'anomalie/signalee': false,
        'anomalie/motif': '',
        'anomalie/date_signalement': null
    };
    try {
        await update(ordreRef, updates);
        console.log(`✅ Anomalie résolue sur OF ${id} → A_FABRIQUER`);
    } catch (error) {
        console.error('❌ Erreur resoudreAnomalie:', error);
        throw error;
    }
};

/**
 * Supprime un Ordre de Fabrication.
 */
export const supprimerOF = async (id) => {
    const ordreRef = ref(db, `${COLLECTION}/${id}`);
    await remove(ordreRef);
    console.log(`🗑️ OF ${id} supprimé`);
};

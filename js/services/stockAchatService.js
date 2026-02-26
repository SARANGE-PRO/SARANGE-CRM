/* --- STOCK & ACHAT SERVICE (Firebase Realtime Database) --- */

import { db } from '../../src/firebase.js';
import { ref, onValue, get, push, update, remove, query, orderByChild, equalTo } from 'firebase/database';

const OC_COLLECTION = 'OrdresCommande';
const OF_COLLECTION = 'OrdresFabrication';

/**
 * Types de commande.
 */
export const TYPES_COMMANDE = {
    VITRAGE: 'VITRAGE',
    PROFILS: 'PROFILS',
    NEGOCE: 'NEGOCE',
    FOURNITURE: 'FOURNITURE'
};

export const TYPES_COMMANDE_LABELS = {
    VITRAGE: 'Vitrage',
    PROFILS: 'Profils',
    NEGOCE: 'Négoce',
    FOURNITURE: 'Fourniture'
};

/**
 * Statuts d'une commande.
 */
export const OC_STATUTS = {
    A_COMMANDER: 'A_COMMANDER',
    COMMANDE_PASSEE: 'COMMANDE_PASSEE',
    RECEPTIONNE: 'RECEPTIONNE'
};

/**
 * Écoute temps réel des Ordres de Commande.
 */
export const getOrdresCommande = (callback) => {
    const ocRef = ref(db, OC_COLLECTION);
    const unsubscribe = onValue(ocRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) { callback([]); return; }
        const ordres = Object.entries(data).map(([id, value]) => ({ id, ...value }));
        callback(ordres);
    }, (error) => {
        console.error('❌ Erreur getOrdresCommande:', error);
        callback([]);
    });
    return unsubscribe;
};

/**
 * Crée un nouvel Ordre de Commande.
 */
export const createOrdreCommande = async (data) => {
    const ocRef = ref(db, OC_COLLECTION);
    const newRef = push(ocRef);

    const newOC = {
        chantier_id: data.chantier_id || '',
        client_nom: data.client_nom || '',
        reference_devis: data.reference_devis || '',
        type_commande: data.type_commande || TYPES_COMMANDE.FOURNITURE,
        description: data.description || '',
        fournisseur: data.fournisseur || '',
        statut: OC_STATUTS.A_COMMANDER,
        date_creation: new Date().toISOString(),
        date_commande: null,
        date_reception: null,
        of_lie_id: data.of_lie_id || null
    };

    await update(newRef, newOC);
    console.log(`📦 OC créé: ${newRef.key} — ${newOC.client_nom} (${newOC.type_commande})`);
    return newRef.key;
};

/**
 * Met à jour le statut d'un OC.
 *
 * RÈGLE VITRAGE : si type_commande === VITRAGE et nouveau statut === COMMANDE_PASSEE,
 * on cherche l'OF lié (of_lie_id) en ATTENTE_VITRAGE et on le passe en A_FABRIQUER.
 */
export const updateStatutCommande = async (id, nouveauStatut) => {
    const ocRef = ref(db, `${OC_COLLECTION}/${id}`);

    const updates = {
        statut: nouveauStatut
    };

    if (nouveauStatut === OC_STATUTS.COMMANDE_PASSEE) {
        updates.date_commande = new Date().toISOString();
    }
    if (nouveauStatut === OC_STATUTS.RECEPTIONNE) {
        updates.date_reception = new Date().toISOString();
    }

    await update(ocRef, updates);
    console.log(`📦 OC ${id} → ${nouveauStatut}`);

    // --- RÈGLE DÉPENDANCE VITRAGE ---
    if (nouveauStatut === OC_STATUTS.COMMANDE_PASSEE) {
        try {
            // Lire l'OC pour récupérer type + of_lie_id
            const ocSnapshot = await get(ocRef);
            if (!ocSnapshot.exists()) return;
            const ocData = ocSnapshot.val();

            if (ocData.type_commande === TYPES_COMMANDE.VITRAGE && ocData.of_lie_id) {
                // Vérifier si l'OF lié est en ATTENTE_VITRAGE
                const ofRef = ref(db, `${OF_COLLECTION}/${ocData.of_lie_id}`);
                const ofSnapshot = await get(ofRef);

                if (ofSnapshot.exists()) {
                    const ofData = ofSnapshot.val();
                    if (ofData.statut === 'ATTENTE_VITRAGE') {
                        await update(ofRef, { statut: 'A_FABRIQUER' });
                        console.log(`🔓 OF ${ocData.of_lie_id} débloqué : ATTENTE_VITRAGE → A_FABRIQUER`);
                    }
                }
            }
        } catch (e) {
            console.error('❌ Erreur règle Vitrage:', e);
        }
    }
};

/**
 * Supprime un Ordre de Commande.
 */
export const supprimerCommande = async (id) => {
    const ocRef = ref(db, `${OC_COLLECTION}/${id}`);
    await remove(ocRef);
    console.log(`🗑️ OC ${id} supprimé`);
};

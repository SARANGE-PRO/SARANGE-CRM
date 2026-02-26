/* --- PRODUCTION SERVICE — Génération OF & OC --- */

import { db } from '../../src/firebase.js';
import { ref, push, update } from 'firebase/database';

const OF_COLLECTION = 'OrdresFabrication';
const OC_COLLECTION = 'OrdresCommande';

/**
 * Catégorise les produits d'un chantier par groupe matière.
 * @param {Array} produits - Liste des produits du chantier
 * @returns {{ pvc: Array, alu: Array, volets: Array, autres: Array }}
 */
export const grouperProduitsParMatiere = (produits) => {
    const groupes = { pvc: [], alu: [], volets: [], autres: [] };

    for (const p of produits) {
        if (p.deleted) continue;

        if (p.type === 'VOLET_ROULANT') {
            groupes.volets.push(p);
        } else if (p.matiere === 'ALU') {
            groupes.alu.push(p);
        } else if (['FENETRE', 'PORTE_FENETRE', 'BAIE_COULISSANTE', 'PORTE_ENTREE', 'PORTE_SERVICE'].includes(p.type)) {
            // PVC par défaut si pas ALU
            if (p.matiere === 'ALU') groupes.alu.push(p);
            else groupes.pvc.push(p);
        } else {
            // AUTRE : Velux, Portail, Porte Garage, etc.
            groupes.autres.push(p);
        }
    }

    return groupes;
};

/**
 * Génère les Ordres de Fabrication (OF) et Ordres de Commande (OC)
 * à partir d'un chantier validé par le Bureau des Méthodes.
 *
 * Logique de génération :
 * - VOLET_ROULANT     → OF { statut: A_FABRIQUER, details_volets }
 * - PVC (menuiseries) → OF { ATTENTE_VITRAGE } + OC { VITRAGE, A_COMMANDER }
 * - ALU (menuiseries) → OF { ATTENTE_VITRAGE } + OC { VITRAGE, A_COMMANDER }
 * - AUTRE (négoce)    → OC { NEGOCE, A_COMMANDER }
 *
 * @param {object} chantier - Données du chantier
 * @param {Array}  produits - Produits du chantier
 * @param {object} fichesData - Données des fiches fab
 * @param {string} [fichesData.pdfPVC]  - URL du PDF Proges
 * @param {string} [fichesData.pdfALU]  - URL du PDF Scal
 * @param {Array}  [fichesData.volets]  - Détails volets (depuis CreateVoletFabModal)
 * @returns {Promise<{ ofs: string[], ocs: string[] }>} IDs créés
 */
export const genererProductionEtAchats = async (chantier, produits, fichesData = {}) => {
    const now = new Date().toISOString();
    const groupes = grouperProduitsParMatiere(produits);
    const updates = {};
    const ofsCreated = [];
    const ocsCreated = [];

    const baseInfo = {
        chantier_id: chantier.id,
        client_nom: chantier.client || '',
        reference_devis: chantier.referenceDevis || '',
        date_creation: now
    };

    // --- VOLETS → OF A_FABRIQUER ---
    if (groupes.volets.length > 0) {
        const ofRef = push(ref(db, OF_COLLECTION));
        const ofId = ofRef.key;

        updates[`${OF_COLLECTION}/${ofId}`] = {
            ...baseInfo,
            groupe: 'VOLET',
            type_produit: 'VOLET_ROULANT',
            statut: 'A_FABRIQUER',
            produits: groupes.volets.map(p => ({
                type: p.type,
                largeur: p.largeurMm || 0,
                hauteur: p.hauteurMm || 0,
                description: p.description || p.notes || '',
                couleur: p.couleur || ''
            })),
            details_volets: fichesData.volets || [],
            url_pdf_fabrication: null,
            historique: { demarre_par: null, demarre_le: null, termine_par: null, termine_le: null },
            anomalie: { signalee: false, motif: '', date_signalement: null }
        };
        ofsCreated.push(ofId);
    }

    // --- PVC → OF ATTENTE_VITRAGE + OC VITRAGE ---
    if (groupes.pvc.length > 0) {
        const ofRef = push(ref(db, OF_COLLECTION));
        const ofId = ofRef.key;

        updates[`${OF_COLLECTION}/${ofId}`] = {
            ...baseInfo,
            groupe: 'PVC',
            type_produit: 'FENETRE_PVC',
            statut: 'ATTENTE_VITRAGE',
            produits: groupes.pvc.map(p => ({
                type: p.type,
                largeur: p.largeurMm || 0,
                hauteur: p.hauteurMm || 0,
                description: p.description || p.notes || '',
                couleur: p.couleur || '',
                matiere: 'PVC'
            })),
            details_volets: null,
            url_pdf_fabrication: fichesData.pdfPVC || null,
            historique: { demarre_par: null, demarre_le: null, termine_par: null, termine_le: null },
            anomalie: { signalee: false, motif: '', date_signalement: null }
        };
        ofsCreated.push(ofId);

        // OC Vitrage lié à cet OF
        const ocRef = push(ref(db, OC_COLLECTION));
        const ocId = ocRef.key;
        updates[`${OC_COLLECTION}/${ocId}`] = {
            ...baseInfo,
            type_commande: 'VITRAGE',
            description: `Vitrage PVC — ${groupes.pvc.length} menuiserie(s)`,
            fournisseur: '',
            statut: 'A_COMMANDER',
            date_commande: null,
            date_reception: null,
            of_lie_id: ofId
        };
        ocsCreated.push(ocId);
    }

    // --- ALU → OF ATTENTE_VITRAGE + OC VITRAGE ---
    if (groupes.alu.length > 0) {
        const ofRef = push(ref(db, OF_COLLECTION));
        const ofId = ofRef.key;

        updates[`${OF_COLLECTION}/${ofId}`] = {
            ...baseInfo,
            groupe: 'ALU',
            type_produit: 'FENETRE_ALU',
            statut: 'ATTENTE_VITRAGE',
            produits: groupes.alu.map(p => ({
                type: p.type,
                largeur: p.largeurMm || 0,
                hauteur: p.hauteurMm || 0,
                description: p.description || p.notes || '',
                couleur: p.couleur || '',
                matiere: 'ALU'
            })),
            details_volets: null,
            url_pdf_fabrication: fichesData.pdfALU || null,
            historique: { demarre_par: null, demarre_le: null, termine_par: null, termine_le: null },
            anomalie: { signalee: false, motif: '', date_signalement: null }
        };
        ofsCreated.push(ofId);

        const ocRef = push(ref(db, OC_COLLECTION));
        const ocId = ocRef.key;
        updates[`${OC_COLLECTION}/${ocId}`] = {
            ...baseInfo,
            type_commande: 'VITRAGE',
            description: `Vitrage ALU — ${groupes.alu.length} menuiserie(s)`,
            fournisseur: '',
            statut: 'A_COMMANDER',
            date_commande: null,
            date_reception: null,
            of_lie_id: ofId
        };
        ocsCreated.push(ocId);
    }

    // --- AUTRES → OC NEGOCE ---
    for (const p of groupes.autres) {
        const ocRef = push(ref(db, OC_COLLECTION));
        const ocId = ocRef.key;
        updates[`${OC_COLLECTION}/${ocId}`] = {
            ...baseInfo,
            type_commande: 'NEGOCE',
            description: `${p.type} — ${p.description || p.notes || ''}`.trim(),
            fournisseur: '',
            statut: 'A_COMMANDER',
            date_commande: null,
            date_reception: null,
            of_lie_id: null
        };
        ocsCreated.push(ocId);
    }

    // --- BATCH WRITE ---
    if (Object.keys(updates).length > 0) {
        await update(ref(db), updates);
        console.log(`🏭 Production générée: ${ofsCreated.length} OF, ${ocsCreated.length} OC pour ${chantier.client}`);
    }

    return { ofs: ofsCreated, ocs: ocsCreated };
};

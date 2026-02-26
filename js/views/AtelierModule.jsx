import React, { useState, useEffect, useMemo } from 'react';
import { Plus, Play, CheckCircle2, AlertTriangle, Printer, Factory, Clock, Shield, Truck, X, Trash2, RotateCcw, GripVertical } from 'lucide-react';
import { Button } from '../components/ui/Button.jsx';
import { Modal } from '../components/ui/Modal.jsx';
import { Input } from '../components/ui/Input.jsx';
import {
    getOrdresFabrication,
    createOrdreFabrication,
    updateStatutOrdre,
    signalerAnomalie,
    resoudreAnomalie,
    supprimerOF,
    TYPES_PRODUIT,
    TYPES_PRODUIT_LABELS,
    OF_STATUTS
} from '../services/atelierService.js';
import { CreateVoletFabModal } from '../components/modals/CreateVoletFabModal.jsx';
import { useApp } from '../context.js';

/**
 * Configuration des colonnes du Kanban Atelier (5 colonnes).
 */
const COLUMNS_CONFIG = [
    {
        id: OF_STATUTS.ATTENTE_VITRAGE,
        title: 'Attente Vitrage',
        shortTitle: 'Vitrage',
        icon: Clock,
        color: 'bg-purple-50/50 dark:bg-purple-900/10',
        headerColor: 'text-purple-700 dark:text-purple-300',
        dot: 'bg-purple-400',
        border: 'border-purple-200 dark:border-purple-800',
        ring: 'ring-purple-400'
    },
    {
        id: OF_STATUTS.A_FABRIQUER,
        title: 'À Fabriquer',
        shortTitle: 'À Faire',
        icon: Clock,
        color: 'bg-slate-100 dark:bg-slate-800/50',
        headerColor: 'text-slate-700 dark:text-slate-300',
        dot: 'bg-slate-400',
        border: 'border-slate-200 dark:border-slate-700',
        ring: 'ring-slate-400'
    },
    {
        id: OF_STATUTS.EN_COURS,
        title: 'En Cours',
        shortTitle: 'En Cours',
        icon: Factory,
        color: 'bg-brand-50/50 dark:bg-brand-900/10',
        headerColor: 'text-brand-700 dark:text-brand-300',
        dot: 'bg-brand-500',
        border: 'border-brand-100 dark:border-brand-900',
        ring: 'ring-brand-400'
    },
    {
        id: OF_STATUTS.BLOQUE_ANOMALIE,
        title: 'Bloqué (Anomalie)',
        shortTitle: 'Bloqué',
        icon: Shield,
        color: 'bg-rose-50/50 dark:bg-rose-900/10',
        headerColor: 'text-rose-700 dark:text-rose-300',
        dot: 'bg-rose-500',
        border: 'border-rose-100 dark:border-rose-900',
        ring: 'ring-rose-400'
    },
    {
        id: OF_STATUTS.PRET_POUR_POSE,
        title: 'Prêt pour Pose',
        shortTitle: 'Prêt',
        icon: Truck,
        color: 'bg-green-50/50 dark:bg-emerald-900/10',
        headerColor: 'text-green-700 dark:text-emerald-400',
        dot: 'bg-green-500',
        border: 'border-green-100 dark:border-green-900',
        ring: 'ring-green-400'
    }
];

/**
 * Badge couleur par type de produit / groupe.
 */
const TYPE_BADGES = {
    VOLET_ROULANT: { label: 'VR', bg: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' },
    FENETRE_PVC: { label: 'PVC', bg: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' },
    FENETRE_ALU: { label: 'ALU', bg: 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300' },
    PORTE_PVC: { label: 'P.PVC', bg: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
    PORTE_ALU: { label: 'P.ALU', bg: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' }
};

/**
 * Modale de sélection du type de produit pour un nouvel OF.
 */
const SelectProductTypeModal = ({ isOpen, onClose, onSelect }) => {
    const types = [
        { id: TYPES_PRODUIT.VOLET_ROULANT, icon: '🪟', label: 'Volet Roulant', desc: 'Fiche fabrication détaillée', highlight: true },
        { id: TYPES_PRODUIT.FENETRE_PVC, icon: '🏠', label: 'Fenêtre / Coulissant PVC', desc: 'Import PDF Proges' },
        { id: TYPES_PRODUIT.FENETRE_ALU, icon: '🔲', label: 'Fenêtre / Coulissant Alu', desc: 'Import PDF Scal' },
        { id: TYPES_PRODUIT.PORTE_PVC, icon: '🚪', label: "Porte d'Entrée PVC", desc: 'Import PDF Proges' },
        { id: TYPES_PRODUIT.PORTE_ALU, icon: '🚪', label: "Porte d'Entrée Alu", desc: 'Import PDF Scal' }
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Nouvel Ordre de Fabrication" size="md">
            <div className="flex flex-col gap-2">
                {types.map(t => (
                    <button
                        key={t.id}
                        onClick={() => onSelect(t.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left hover:scale-[1.01]
                            ${t.highlight
                                ? 'bg-brand-50 dark:bg-brand-900/20 border-brand-200 dark:border-brand-800 hover:border-brand-400 hover:shadow-md'
                                : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-300 hover:shadow-sm'
                            }`}
                    >
                        <span className="text-2xl">{t.icon}</span>
                        <div className="flex-1">
                            <p className="font-bold text-sm text-slate-800 dark:text-white">{t.label}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{t.desc}</p>
                        </div>
                        {t.highlight && (
                            <span className="text-[10px] font-bold uppercase bg-brand-500 text-white px-2 py-0.5 rounded-full">Fiche Fab</span>
                        )}
                    </button>
                ))}
            </div>
        </Modal>
    );
};

/**
 * Modale simplifiée pour créer un OF PVC/Alu.
 */
const CreateGenericOFModal = ({ isOpen, onClose, onSubmit, typeProduit }) => {
    const [client, setClient] = useState('');
    const [idProjet, setIdProjet] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!client.trim()) { alert('Renseignez le nom du client.'); return; }
        onSubmit({ client_nom: client.trim(), id_projet: idProjet.trim(), type_produit: typeProduit });
        setClient(''); setIdProjet('');
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`Nouvel OF — ${TYPES_PRODUIT_LABELS[typeProduit] || typeProduit}`} size="sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label className="text-xs font-semibold text-slate-500 block mb-1">Nom du Client <span className="text-rose-400">*</span></label>
                    <Input value={client} onChange={setClient} placeholder="Ex: Dupont" />
                </div>
                <div>
                    <label className="text-xs font-semibold text-slate-500 block mb-1">Réf. Projet / Chantier</label>
                    <Input value={idProjet} onChange={setIdProjet} placeholder="Ex: CH-2026-042" />
                </div>
                <p className="text-xs text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                    💡 La fiche de fabrication PDF pourra être attachée sur la carte dans le Kanban.
                </p>
                <div className="flex gap-3 pt-1">
                    <Button type="button" variant="secondary" className="flex-1" onClick={onClose}>Annuler</Button>
                    <Button type="submit" variant="primary" className="flex-1">Créer l'OF</Button>
                </div>
            </form>
        </Modal>
    );
};

/**
 * Modale pour signaler une anomalie.
 */
const AnomalieModal = ({ isOpen, onClose, onSubmit, of }) => {
    const [motif, setMotif] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!motif.trim()) { alert('Veuillez saisir le motif du problème.'); return; }
        onSubmit(of.id, motif.trim());
        setMotif('');
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="⚠️ Signaler un Problème" size="sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    OF : <strong>{of?.client_nom}</strong> — {TYPES_PRODUIT_LABELS[of?.type_produit] || of?.type_produit}
                </p>
                <div>
                    <label className="text-xs font-semibold text-slate-500 block mb-1">Motif du blocage <span className="text-rose-400">*</span></label>
                    <textarea
                        value={motif}
                        onChange={e => setMotif(e.target.value)}
                        className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-rose-500 text-sm h-24 resize-none"
                        placeholder="Ex: Mauvaise couleur reçue, cotes incorrectes..."
                        autoFocus
                    />
                </div>
                <div className="flex gap-3">
                    <Button type="button" variant="secondary" className="flex-1" onClick={onClose}>Annuler</Button>
                    <Button type="submit" variant="primary" className="flex-1 !bg-rose-600 hover:!bg-rose-700">Signaler</Button>
                </div>
            </form>
        </Modal>
    );
};


// ═══════════════════════════════════════════
// ████████ COMPOSANT PRINCIPAL ████████
// ═══════════════════════════════════════════

export const AtelierModule = () => {
    const { state } = useApp();
    const user = state?.user;

    const [ordres, setOrdres] = useState([]);
    const [mobileTab, setMobileTab] = useState(OF_STATUTS.A_FABRIQUER);
    const [draggedId, setDraggedId] = useState(null);

    // --- Modales ---
    const [showTypeSelector, setShowTypeSelector] = useState(false);
    const [showVoletModal, setShowVoletModal] = useState(false);
    const [genericModalType, setGenericModalType] = useState(null);
    const [anomalieOF, setAnomalieOF] = useState(null);

    // --- Données pour création volet ---
    const [voletClientInfo, setVoletClientInfo] = useState({ client_nom: '', id_projet: '' });
    const [showVoletClientStep, setShowVoletClientStep] = useState(false);

    // --- Chargement temps réel ---
    useEffect(() => {
        const unsubscribe = getOrdresFabrication((data) => setOrdres(data));
        return () => { if (typeof unsubscribe === 'function') unsubscribe(); };
    }, []);

    // --- Filtrage par statut ---
    const columns = useMemo(() => {
        return COLUMNS_CONFIG.map(col => ({
            ...col,
            items: ordres.filter(o => o.statut === col.id)
        }));
    }, [ordres]);

    // --- Drag & Drop ---
    const handleDragStart = (e, id) => {
        setDraggedId(id);
        e.dataTransfer.effectAllowed = 'move';
    };
    const handleDragOver = (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; };
    const handleDrop = async (e, columnId) => {
        e.preventDefault();
        if (!draggedId) return;
        const current = ordres.find(o => o.id === draggedId);
        if (current && current.statut !== columnId) {
            try { await updateStatutOrdre(current.id, columnId, getUserId()); }
            catch (err) { console.error('Drop error:', err); }
        }
        setDraggedId(null);
    };

    // --- Flow de création ---
    const handleTypeSelected = (type) => {
        setShowTypeSelector(false);
        if (type === TYPES_PRODUIT.VOLET_ROULANT) {
            setShowVoletClientStep(true);
        } else {
            setGenericModalType(type);
        }
    };

    const handleVoletClientSubmit = (e) => {
        e.preventDefault();
        if (!voletClientInfo.client_nom.trim()) { alert('Renseignez le nom du client.'); return; }
        setShowVoletClientStep(false);
        setShowVoletModal(true);
    };

    const handleVoletFabSubmit = async (detailsVolet) => {
        try {
            await createOrdreFabrication({
                client_nom: voletClientInfo.client_nom.trim(),
                id_projet: voletClientInfo.id_projet.trim(),
                type_produit: TYPES_PRODUIT.VOLET_ROULANT,
                details_fabrication: detailsVolet
            });
            setShowVoletModal(false);
            setVoletClientInfo({ client_nom: '', id_projet: '' });
        } catch (err) {
            console.error('Erreur création OF Volet:', err);
            alert("Erreur lors de la création de l'OF.");
        }
    };

    const handleGenericSubmit = async (data) => {
        try { await createOrdreFabrication(data); setGenericModalType(null); }
        catch (err) { console.error('Erreur création OF:', err); alert("Erreur lors de la création de l'OF."); }
    };

    // --- Actions sur les cartes ---
    const getUserId = () => user?.email || user?.name || 'Atelier';

    const handleDemarrer = async (of) => {
        try { await updateStatutOrdre(of.id, OF_STATUTS.EN_COURS, getUserId()); }
        catch (err) { console.error('Erreur démarrage:', err); }
    };
    const handleTerminer = async (of) => {
        try { await updateStatutOrdre(of.id, OF_STATUTS.PRET_POUR_POSE, getUserId()); }
        catch (err) { console.error('Erreur terminaison:', err); }
    };
    const handleSignalerSubmit = async (id, motif) => {
        try { await signalerAnomalie(id, motif); setAnomalieOF(null); }
        catch (err) { console.error('Erreur signalement:', err); }
    };
    const handleResoudre = async (of) => {
        try { await resoudreAnomalie(of.id); }
        catch (err) { console.error('Erreur résolution:', err); }
    };
    const handleSupprimer = async (of) => {
        if (!confirm(`Supprimer l'OF de ${of.client_nom} ?`)) return;
        try { await supprimerOF(of.id); }
        catch (err) { console.error('Erreur suppression:', err); }
    };
    const handleImprimer = (of) => {
        console.log('🖨️ Imprimer fiche OF:', of.id, of.client_nom);
        alert('Fonctionnalité d\'impression en cours de développement.');
    };

    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">

            {/* ═══ MODALES ═══ */}
            <SelectProductTypeModal isOpen={showTypeSelector} onClose={() => setShowTypeSelector(false)} onSelect={handleTypeSelected} />
            <CreateVoletFabModal isOpen={showVoletModal} onClose={() => { setShowVoletModal(false); setVoletClientInfo({ client_nom: '', id_projet: '' }); }} onSubmit={handleVoletFabSubmit} />
            {genericModalType && <CreateGenericOFModal isOpen={true} onClose={() => setGenericModalType(null)} onSubmit={handleGenericSubmit} typeProduit={genericModalType} />}
            {anomalieOF && <AnomalieModal isOpen={true} onClose={() => setAnomalieOF(null)} onSubmit={handleSignalerSubmit} of={anomalieOF} />}

            {/* Step intermédiaire : client info pour Volet */}
            {showVoletClientStep && (
                <Modal isOpen={true} onClose={() => setShowVoletClientStep(false)} title="🪟 Nouveau Volet Roulant" size="sm">
                    <form onSubmit={handleVoletClientSubmit} className="flex flex-col gap-4">
                        <div>
                            <label className="text-xs font-semibold text-slate-500 block mb-1">Nom du Client <span className="text-rose-400">*</span></label>
                            <Input value={voletClientInfo.client_nom} onChange={v => setVoletClientInfo(prev => ({ ...prev, client_nom: v }))} placeholder="Ex: Dupont" />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-slate-500 block mb-1">Réf. Projet / Chantier</label>
                            <Input value={voletClientInfo.id_projet} onChange={v => setVoletClientInfo(prev => ({ ...prev, id_projet: v }))} placeholder="Ex: CH-2026-042" />
                        </div>
                        <div className="flex gap-3 pt-1">
                            <Button type="button" variant="secondary" className="flex-1" onClick={() => setShowVoletClientStep(false)}>Annuler</Button>
                            <Button type="submit" variant="primary" className="flex-1">Suivant →</Button>
                        </div>
                    </form>
                </Modal>
            )}

            {/* ═══ HEADER ═══ */}
            <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 pt-[max(1rem,env(safe-area-inset-top))] pb-4 flex-shrink-0 flex items-center shadow-sm z-20">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2 mr-auto">
                    <Factory size={22} className="text-brand-600" />
                    Atelier & Fabrication
                </h2>
                <Button onClick={() => setShowTypeSelector(true)} icon={Plus} className="py-2 text-sm shadow-sm whitespace-nowrap px-4 hover:scale-[1.02] transition-transform">
                    Nouvel OF
                </Button>
            </div>

            {/* ═══ MOBILE NAV TILES ═══ */}
            <div className="md:hidden flex-none px-2 pt-4 pb-2 bg-slate-50 dark:bg-slate-900 w-full relative z-10 shrink-0">
                <div className="grid grid-cols-5 gap-1.5">
                    {columns.map(col => (
                        <button
                            key={`tile-${col.id}`}
                            onClick={() => setMobileTab(col.id)}
                            className={`p-2 rounded-xl border transition-all flex flex-col items-center justify-center text-center gap-1
                                ${mobileTab === col.id ? `ring-2 ring-offset-1 ${col.ring} border-transparent` : `${col.border}/30 opacity-90`}
                                ${col.color}`}
                        >
                            <div className="text-lg font-bold">{col.items.length}</div>
                            <div className="text-[9px] leading-tight font-bold uppercase w-full break-words">{col.shortTitle}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* ═══ KANBAN COLUMNS ═══ */}
            <main className="flex-1 min-h-0 overflow-y-auto pb-40 md:pb-0 w-full mx-auto bg-slate-50 dark:bg-slate-900">
                <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-5 gap-4 h-auto px-4 md:px-5 md:pt-5 pb-6 w-full mx-auto">
                    {columns.map(col => {
                        const Icon = col.icon;
                        return (
                            <div
                                key={col.id}
                                className={`flex flex-col h-full rounded-2xl border ${col.border}/60 ${col.color} ${mobileTab === col.id ? 'block' : 'hidden md:flex'}`}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, col.id)}
                            >
                                {/* Column Header (Desktop) */}
                                <div className="hidden md:flex items-center justify-between mb-0 p-3 shrink-0 border-b border-slate-200/50 dark:border-slate-700/50">
                                    <h3 className={`font-bold text-sm ${col.headerColor} flex items-center gap-1.5`}>
                                        <div className={`w-2 h-2 rounded-full ${col.dot}`}></div>
                                        {col.title}
                                        <span className="bg-white/50 dark:bg-slate-800/50 text-xs px-1.5 py-0.5 rounded-full shadow-sm ml-1">{col.items.length}</span>
                                    </h3>
                                </div>

                                {/* Cards */}
                                <div className="flex-1 p-0 pt-3 md:p-2 pb-0 md:pb-4 space-y-2.5">
                                    {col.items.length === 0 ? (
                                        <div className="h-24 md:h-full flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl text-slate-400 dark:text-slate-500 text-sm font-medium">
                                            Aucun OF
                                        </div>
                                    ) : (
                                        col.items.map(of => {
                                            const badge = TYPE_BADGES[of.type_produit] || TYPE_BADGES.VOLET_ROULANT;
                                            const det = of.details_fabrication;
                                            const prodCount = of.produits?.length;

                                            return (
                                                <div
                                                    key={of.id}
                                                    draggable
                                                    onDragStart={(e) => handleDragStart(e, of.id)}
                                                    className={`bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing ${draggedId === of.id ? 'opacity-50 scale-95' : ''}`}
                                                >
                                                    {/* Header : Client + Badge type */}
                                                    <div className="flex items-start justify-between gap-2 mb-2">
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-bold text-sm text-slate-800 dark:text-white truncate">
                                                                {of.client_nom || 'Client inconnu'}
                                                            </p>
                                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                                                                {of.groupe || TYPES_PRODUIT_LABELS[of.type_produit] || of.type_produit}
                                                                {prodCount && <span className="ml-1 text-slate-400">• {prodCount} prod.</span>}
                                                                {of.id_projet && <span className="ml-2 text-slate-400">#{of.id_projet}</span>}
                                                            </p>
                                                        </div>
                                                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${badge.bg}`}>
                                                            {badge.label}
                                                        </span>
                                                    </div>

                                                    {/* Détails volet (si applicable) */}
                                                    {of.type_produit === TYPES_PRODUIT.VOLET_ROULANT && det && (
                                                        <div className="mb-2 grid grid-cols-3 gap-1 text-[10px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-2">
                                                            <span>H: <strong className="text-slate-700 dark:text-slate-300">{det.hauteur}</strong></span>
                                                            <span>L: <strong className="text-slate-700 dark:text-slate-300">{det.largeur}</strong></span>
                                                            <span>{det.couleur}</span>
                                                            <span>{det.type_manoeuvre}</span>
                                                            <span>{det.sortie}</span>
                                                            {det.ref_client && <span>Réf: {det.ref_client}</span>}
                                                        </div>
                                                    )}

                                                    {/* Anomalie badge */}
                                                    {of.anomalie?.signalee && (
                                                        <div className="mb-2 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 text-xs font-medium p-2 rounded-lg flex items-center gap-1.5">
                                                            <AlertTriangle size={12} />
                                                            {of.anomalie.motif || 'Anomalie signalée'}
                                                        </div>
                                                    )}

                                                    {/* Action buttons */}
                                                    <div className="flex flex-wrap gap-1">
                                                        {of.statut === OF_STATUTS.A_FABRIQUER && (
                                                            <button onClick={() => handleDemarrer(of)} className="flex items-center gap-1 text-[11px] font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 dark:bg-brand-900/20 dark:hover:bg-brand-900/40 px-2 py-1.5 rounded-lg transition-colors">
                                                                <Play size={11} /> Démarrer
                                                            </button>
                                                        )}
                                                        {of.statut === OF_STATUTS.EN_COURS && (
                                                            <button onClick={() => handleTerminer(of)} className="flex items-center gap-1 text-[11px] font-semibold text-green-600 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 px-2 py-1.5 rounded-lg transition-colors">
                                                                <CheckCircle2 size={11} /> Terminer
                                                            </button>
                                                        )}
                                                        {of.statut === OF_STATUTS.BLOQUE_ANOMALIE && (
                                                            <button onClick={() => handleResoudre(of)} className="flex items-center gap-1 text-[11px] font-semibold text-green-600 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 px-2 py-1.5 rounded-lg transition-colors">
                                                                <RotateCcw size={11} /> Résoudre
                                                            </button>
                                                        )}
                                                        {of.statut !== OF_STATUTS.BLOQUE_ANOMALIE && of.statut !== OF_STATUTS.ATTENTE_VITRAGE && (
                                                            <button onClick={() => setAnomalieOF(of)} className="flex items-center gap-1 text-[11px] font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/20 dark:hover:bg-rose-900/40 px-2 py-1.5 rounded-lg transition-colors">
                                                                <AlertTriangle size={11} /> Problème
                                                            </button>
                                                        )}
                                                        {of.type_produit === TYPES_PRODUIT.VOLET_ROULANT && (
                                                            <button onClick={() => handleImprimer(of)} className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-300 px-2 py-1.5 rounded-lg transition-colors">
                                                                <Printer size={11} /> Fiche
                                                            </button>
                                                        )}
                                                        <button onClick={() => handleSupprimer(of)} className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-rose-600 bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/20 px-2 py-1.5 rounded-lg transition-colors ml-auto">
                                                            <Trash2 size={11} />
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

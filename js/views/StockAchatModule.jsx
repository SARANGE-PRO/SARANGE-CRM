import React, { useState, useEffect, useMemo } from 'react';
import { Plus, ShoppingCart, Package, CheckCircle2, Trash2, Truck } from 'lucide-react';
import { Button } from '../components/ui/Button.jsx';
import { Modal } from '../components/ui/Modal.jsx';
import { Input } from '../components/ui/Input.jsx';
import {
    getOrdresCommande,
    updateStatutCommande,
    supprimerCommande,
    TYPES_COMMANDE,
    TYPES_COMMANDE_LABELS,
    OC_STATUTS
} from '../services/stockAchatService.js';

const COLUMNS = [
    {
        id: OC_STATUTS.A_COMMANDER,
        title: 'À Commander',
        shortTitle: 'À Faire',
        icon: ShoppingCart,
        dot: 'bg-amber-500',
        color: 'bg-amber-50/50 dark:bg-amber-900/10',
        headerColor: 'text-amber-700 dark:text-amber-300',
        border: 'border-amber-100 dark:border-amber-900',
        ring: 'ring-amber-400'
    },
    {
        id: OC_STATUTS.COMMANDE_PASSEE,
        title: 'Commande Passée',
        shortTitle: 'Commandé',
        icon: Package,
        dot: 'bg-brand-500',
        color: 'bg-brand-50/50 dark:bg-brand-900/10',
        headerColor: 'text-brand-700 dark:text-brand-300',
        border: 'border-brand-100 dark:border-brand-900',
        ring: 'ring-brand-400'
    },
    {
        id: OC_STATUTS.RECEPTIONNE,
        title: 'Réceptionné',
        shortTitle: 'Reçu',
        icon: CheckCircle2,
        dot: 'bg-green-500',
        color: 'bg-green-50/50 dark:bg-green-900/10',
        headerColor: 'text-green-700 dark:text-green-300',
        border: 'border-green-100 dark:border-green-900',
        ring: 'ring-green-400'
    }
];

const TYPE_BADGES = {
    VITRAGE: { label: 'Vitrage', bg: 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300' },
    PROFILS: { label: 'Profils', bg: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
    NEGOCE: { label: 'Négoce', bg: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' },
    FOURNITURE: { label: 'Fourniture', bg: 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300' }
};

export const StockAchatModule = () => {
    const [ordres, setOrdres] = useState([]);
    const [mobileTab, setMobileTab] = useState(OC_STATUTS.A_COMMANDER);
    const [draggedId, setDraggedId] = useState(null);

    useEffect(() => {
        const unsub = getOrdresCommande(setOrdres);
        return () => { if (typeof unsub === 'function') unsub(); };
    }, []);

    const columns = useMemo(() => {
        return COLUMNS.map(col => ({
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
            try { await updateStatutCommande(draggedId, columnId); }
            catch (err) { console.error('Drop error:', err); }
        }
        setDraggedId(null);
    };

    // --- Actions ---
    const handleCommander = async (oc) => {
        try { await updateStatutCommande(oc.id, OC_STATUTS.COMMANDE_PASSEE); }
        catch (err) { console.error(err); }
    };
    const handleReceptionner = async (oc) => {
        try { await updateStatutCommande(oc.id, OC_STATUTS.RECEPTIONNE); }
        catch (err) { console.error(err); }
    };
    const handleSupprimer = async (oc) => {
        if (!confirm(`Supprimer la commande ${oc.client_nom} ?`)) return;
        try { await supprimerCommande(oc.id); }
        catch (err) { console.error(err); }
    };

    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
            {/* Header */}
            <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 pt-[max(1rem,env(safe-area-inset-top))] pb-4 flex-shrink-0 flex items-center shadow-sm z-20">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2 mr-auto">
                    <ShoppingCart size={22} className="text-brand-600" />
                    Stock & Achat
                </h2>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden flex-none px-2 pt-4 pb-2 bg-slate-50 dark:bg-slate-900 w-full z-10 shrink-0">
                <div className="grid grid-cols-3 gap-2">
                    {columns.map(col => (
                        <button
                            key={`tile-${col.id}`}
                            onClick={() => setMobileTab(col.id)}
                            className={`p-3 rounded-xl border transition-all flex flex-col items-center gap-1.5 text-center
                                ${mobileTab === col.id ? `ring-2 ring-offset-1 ${col.ring} border-transparent` : `${col.border}/30 opacity-90`}
                                ${col.color}`}
                        >
                            <div className="text-2xl font-bold">{col.items.length}</div>
                            <div className="text-[11px] font-bold uppercase">{col.shortTitle}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Kanban */}
            <main className="flex-1 min-h-0 overflow-y-auto pb-40 md:pb-0 w-full bg-slate-50 dark:bg-slate-900">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 md:pt-6 pb-6">
                    {columns.map(col => {
                        const Icon = col.icon;
                        return (
                            <div
                                key={col.id}
                                className={`flex flex-col rounded-2xl border ${col.border}/60 ${col.color} ${mobileTab === col.id ? 'block' : 'hidden md:flex'}`}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, col.id)}
                            >
                                <div className="hidden md:flex items-center justify-between p-4 border-b border-slate-200/50 dark:border-slate-700/50">
                                    <h3 className={`font-bold ${col.headerColor} flex items-center gap-2`}>
                                        <div className={`w-2.5 h-2.5 rounded-full ${col.dot}`}></div>
                                        {col.title}
                                        <span className="bg-white/50 dark:bg-slate-800/50 text-xs px-2 py-0.5 rounded-full shadow-sm ml-2">{col.items.length}</span>
                                    </h3>
                                </div>

                                <div className="flex-1 p-0 pt-4 md:p-3 pb-0 md:pb-6 space-y-3">
                                    {col.items.length === 0 ? (
                                        <div className="h-24 md:h-full flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl text-slate-400 text-sm font-medium">
                                            Aucune commande
                                        </div>
                                    ) : (
                                        col.items.map(oc => {
                                            const badge = TYPE_BADGES[oc.type_commande] || TYPE_BADGES.FOURNITURE;
                                            return (
                                                <div
                                                    key={oc.id}
                                                    draggable
                                                    onDragStart={(e) => handleDragStart(e, oc.id)}
                                                    className={`bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing ${draggedId === oc.id ? 'opacity-50 scale-95' : ''}`}
                                                >
                                                    <div className="flex items-start justify-between gap-2 mb-2">
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-bold text-sm text-slate-800 dark:text-white truncate">{oc.client_nom || 'Client'}</p>
                                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                                                                {oc.description || 'Commande'}
                                                                {oc.reference_devis && <span className="ml-2 text-slate-400">#{oc.reference_devis}</span>}
                                                            </p>
                                                        </div>
                                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${badge.bg}`}>{badge.label}</span>
                                                    </div>

                                                    {oc.fournisseur && (
                                                        <p className="text-xs text-slate-500 mb-2">
                                                            <Truck size={12} className="inline mr-1" />{oc.fournisseur}
                                                        </p>
                                                    )}

                                                    <div className="flex flex-wrap gap-1.5">
                                                        {oc.statut === OC_STATUTS.A_COMMANDER && (
                                                            <button onClick={() => handleCommander(oc)} className="flex items-center gap-1 text-xs font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 dark:bg-brand-900/20 dark:hover:bg-brand-900/40 px-2.5 py-1.5 rounded-lg transition-colors">
                                                                <Package size={12} /> Commander
                                                            </button>
                                                        )}
                                                        {oc.statut === OC_STATUTS.COMMANDE_PASSEE && (
                                                            <button onClick={() => handleReceptionner(oc)} className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 px-2.5 py-1.5 rounded-lg transition-colors">
                                                                <CheckCircle2 size={12} /> Réceptionner
                                                            </button>
                                                        )}
                                                        <button onClick={() => handleSupprimer(oc)} className="flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 px-2.5 py-1.5 rounded-lg transition-colors">
                                                            <Trash2 size={12} /> Suppr.
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

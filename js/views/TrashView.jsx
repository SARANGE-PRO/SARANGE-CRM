import React, { useState } from 'react';
import { ArrowLeft, Trash2, ArchiveRestore, AlertTriangle, AlertCircle, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button.jsx';
import { Card } from '../components/ui/Card.jsx';
import { StatusBanner } from '../components/ui/StatusBanner.jsx';

export const TrashView = ({ onBack, state, actions }) => {
    // SECURITY: Ensure array exists to avoid crash
    const safeChantiers = Array.isArray(state?.chantiers) ? state.chantiers : [];

    const deletedItems = safeChantiers
        .filter(c => c && c.deleted && !c.purged)
        .sort((a, b) => (b.deletedAt || 0) - (a.deletedAt || 0));

    const [confirmEmpty, setConfirmEmpty] = useState(false);

    // Calcul du temps restant avant suppression auto (approx)
    const getDaysRemaining = (deletedAt) => {
        if (!deletedAt) return 30;
        const days = 30 - Math.floor((Date.now() - deletedAt) / (1000 * 60 * 60 * 24));
        return Math.max(0, days);
    };

    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">

            {/* Header */}
            <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between safe-top-padding">
                <div className="flex items-center gap-3">
                    <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <ArrowLeft size={20} className="text-slate-600 dark:text-slate-300" />
                    </button>
                    <h1 className="text-xl font-bold dark:text-white flex items-center gap-2">
                        <Trash2 size={24} className="text-red-500" />
                        Corbeille
                        <span className="text-sm font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                            {deletedItems.length}
                        </span>
                    </h1>
                </div>

                {deletedItems.length > 0 && (
                    <Button
                        variant="danger"
                        className="py-2 px-4 text-sm font-bold flex items-center gap-2"
                        onClick={() => actions.emptyTrash()}
                    >
                        <Trash2 size={16} /> Vider
                    </Button>
                )}
            </div>

            {/* Info Banner */}
            <StatusBanner variant="warning" icon={AlertTriangle}>
                Les éléments sont définitivement supprimés après 30 jours.
            </StatusBanner>

            {/* Content */}
            <div className="flex-1 p-4 overflow-y-auto max-w-3xl mx-auto w-full">
                {deletedItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                            <Trash2 size={32} className="opacity-50" />
                        </div>
                        <p className="text-lg font-medium">La corbeille est vide</p>
                        <p className="text-sm">Tout est propre !</p>
                    </div>
                ) : (
                    <div className="space-y-3 pb-20">
                        {deletedItems.map(item => {
                            const daysLeft = getDaysRemaining(item.deletedAt);
                            return (
                                <Card key={item.id} className="p-4 group border-l-4 border-l-red-500 hover:border-l-red-600 transition-all">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-lg dark:text-white line-through decoration-slate-400 decoration-2 text-slate-500">{item.client}</h3>
                                            <p className="text-sm text-slate-500">{item.adresse}</p>
                                            <div className="mt-2 flex items-center gap-3 text-xs font-mono text-slate-400">
                                                <span>Supprimé le: {new Date(item.deletedAt || Date.now()).toLocaleDateString()}</span>
                                                {daysLeft <= 5 ? (
                                                    <span className="text-red-600 font-bold flex items-center gap-1">
                                                        <AlertCircle size={10} /> Expire dans {daysLeft}j
                                                    </span>
                                                ) : (
                                                    <span className="text-orange-500 flex items-center gap-1">
                                                        <Clock size={10} /> Expire dans {daysLeft}j
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <Button
                                                variant="secondary"
                                                className="p-3 h-14 w-14 !rounded-full shadow-sm"
                                                onClick={() => actions.restoreChantier(item.id)}
                                                title="Restaurer"
                                            >
                                                <ArchiveRestore size={28} className="text-green-600" />
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                className="p-3 h-14 w-14 !rounded-full shadow-sm border-red-100 hover:bg-red-50 dark:hover:bg-red-900/20"
                                                onClick={() => { if (confirm('Suppression définitive irréversible ?')) actions.hardDeleteChantier(item.id); }}
                                                title="Supprimer définitivement"
                                            >
                                                <Trash2 size={28} className="text-red-500" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                )}
            </div>
        </div >
    );
};

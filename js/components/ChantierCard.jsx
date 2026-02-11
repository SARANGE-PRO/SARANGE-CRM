import React, { useState } from 'react';
import { Calendar, Phone, Copy, Trash2, CheckCircle, AlertTriangle, MapPin, MoreVertical } from 'lucide-react';
import { SmartAddress } from "./ui/SmartAddress.jsx";
import { Button } from "./ui/Button.jsx";
import { useApp } from "../context.js";

export const ChantierCard = ({ c, isTodo = false, onClick, onPlanifier, compact = false }) => {
    const { selectChantier, deleteChantier, duplicateChantier, updateChantierDate } = useApp();
    const [menuOpen, setMenuOpen] = useState(false);

    const isUrgent = (!c.dateIntervention && c.sendStatus !== 'SENT') && (Date.now() - new Date(c.date).getTime() > 3 * 24 * 60 * 60 * 1000);

    const handlePlanifier = (e) => {
        e.stopPropagation();
        if (onPlanifier) onPlanifier(c.id);
    };

    const handleForceSync = (e) => {
        e.stopPropagation();
        updateChantierDate(c.id, c.dateIntervention);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        if (window.confirm('Supprimer ce dossier ?')) {
            deleteChantier(c.id);
        }
    };

    const handleDuplicate = (e) => {
        e.stopPropagation();
        duplicateChantier(c.id);
    };

    return (
        <div
            onClick={() => onClick ? onClick(c.id) : selectChantier(c.id)}
            className={`relative group bg-white dark:bg-slate-900 p-4 rounded-xl border shadow-sm hover:shadow-md active:scale-[0.99] transition-all cursor-pointer overflow-hidden mb-3
                ${c.sendStatus === 'SENT' ? 'border-green-200 dark:border-green-800 opacity-75 hover:opacity-100' :
                    isUrgent ? 'border-red-400 dark:border-red-500 ring-1 ring-red-400 dark:ring-red-500' :
                        'border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-600'}
            `}
        >
            {isUrgent && <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">URGENT</div>}

            <div className="flex justify-between items-start mb-2">
                <div className="font-bold text-lg dark:text-white truncate pr-2">{c.client}</div>
                {c.sendStatus === 'SENT' && <CheckCircle size={16} className="text-green-500" />}
            </div>

            <div className="text-sm text-slate-500 mb-3 ml-[-5px]">
                <SmartAddress address={c.adresse} gps={c.gps} />
            </div>

            {/* Info Date/Tel */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2.5 flex items-center justify-between mb-3 text-sm">
                {c.dateIntervention ? (
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Intervention</span>
                        <span className="font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(c.dateIntervention).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })}
                        </span>
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Créé le</span>
                        <span className="font-bold text-slate-600 dark:text-slate-300">
                            {new Date(c.date).toLocaleDateString('fr-FR')}
                        </span>
                    </div>
                )}
                <div className="flex items-center gap-1 ml-auto">
                    {/* GCal Status Indicator */}
                    {c.dateIntervention && (
                        <div title={c.googleEventId ? "Synchronisé Google Calendar" : "Non synchronisé Google Calendar"} className="ml-1">
                            {c.googleEventId ? (
                                <img src="https://www.gstatic.com/images/branding/product/1x/calendar_2020q4_48dp.png" alt="GCal OK" className="w-4 h-4 opacity-80" />
                            ) : (
                                <button
                                    onClick={handleForceSync}
                                    className="text-orange-400 hover:text-orange-600 animate-pulse"
                                    title="Cliquez pour forcer la synchro Google"
                                >
                                    <AlertTriangle size={14} />
                                </button>
                            )}
                        </div>
                    )}
                    {c.telephone && (
                        <a href={`tel:${c.telephone}`} onClick={e => e.stopPropagation()} className="bg-white dark:bg-slate-700 p-2 rounded-full text-slate-600 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-600 hover:text-brand-600 hover:border-brand-600 transition-colors">
                            <Phone size={16} />
                        </a>
                    )}
                </div>
            </div>

            {/* Actions Specific for TODO */}
            {isTodo && (
                <div className="flex gap-2 mt-2">
                    <Button
                        className="flex-1 py-2 text-xs bg-brand-600 text-white shadow-md hover:bg-brand-700 h-10"
                        onClick={handlePlanifier}
                        icon={Calendar}
                    >
                        PLANIFIER
                    </Button>
                </div>
            )}

            {!compact && (
                <div className="flex items-center justify-end pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 gap-2">
                    <button onClick={handleDuplicate} className="text-slate-400 hover:text-brand-500" title="Dupliquer"><Copy size={16} /></button>
                    <button onClick={handleDelete} className="text-slate-400 hover:text-red-500" title="Supprimer"><Trash2 size={16} /></button>
                </div>
            )}
        </div>
    );
};

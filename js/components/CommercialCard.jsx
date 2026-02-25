import React from 'react';
import { Phone, Mail, MapPin, Calendar, CheckCircle2, Clock, Send, Euro, Trash2, Copy, AlertCircle } from 'lucide-react';
import { Button } from "./ui/Button.jsx";
import { COMMERCIAL_STATUS } from "../utils.js";

export const CommercialCard = ({
    c,
    onClick,
    onDuplicate,
    onDelete,
    onPromoteToSent,
    onMarkForRelance,
    onMarkAsSigned,
    onTriggerRelanceAction // New prop for executing the specific relance level
}) => {

    const getDynamicDateInfo = () => {
        let dateVal = c.date; // Fallback to creation date
        let prefix = "Créé le";

        switch (c.status) {
            case COMMERCIAL_STATUS.LEAD:
                dateVal = c.dateCreation || c.date;
                prefix = "Créé le";
                break;
            case COMMERCIAL_STATUS.SENT:
                dateVal = c.dateEnvoi || c.updatedAt;
                prefix = "Envoyé le";
                break;
            case COMMERCIAL_STATUS.RELANCE:
                dateVal = c.dateRelance || c.updatedAt;
                prefix = "Relancé le";
                break;
            case COMMERCIAL_STATUS.SIGNED:
                dateVal = c.dateSignature || c.updatedAt;
                prefix = "Signé le";
                break;
        }

        const formattedDate = dateVal ? new Date(dateVal).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }) : 'N/A';
        return { prefix, formattedDate };
    };

    const dynamicDate = getDynamicDateInfo();

    // Status config for visual indicators
    const statusConfig = {
        [COMMERCIAL_STATUS.LEAD]: { color: 'bg-slate-100 text-slate-600', dot: 'bg-slate-400', label: 'Nouveau' },
        [COMMERCIAL_STATUS.SENT]: { color: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500', label: 'Envoyé' },
        [COMMERCIAL_STATUS.RELANCE]: { color: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-500', label: 'À Relancer' },
        [COMMERCIAL_STATUS.SIGNED]: { color: 'bg-green-50 text-green-700 border-green-200', dot: 'bg-green-500', label: 'Gagné' }
    };

    const sConf = statusConfig[c.status] || statusConfig[COMMERCIAL_STATUS.LEAD];

    // --- RELANCE LOGIC (J+3, J+10, J+30) ---
    const getRelanceInfo = () => {
        if (c.status !== COMMERCIAL_STATUS.SENT && c.status !== COMMERCIAL_STATUS.RELANCE) return null;

        const dateRepere = new Date(c.dateEnvoi || c.updatedAt);
        const diffTime = Math.abs(new Date() - dateRepere);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const level = c.relanceLevel || 0;

        if (diffDays >= 30 && level === 2) {
            return { type: 'R3', label: 'Relance 3 (Clôture) requise', days: diffDays, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-400', shadow: 'shadow-red-100' };
        }
        if (diffDays >= 10 && level === 1) {
            return { type: 'R2', label: 'Relance 2 (Urgence) requise', days: diffDays, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-400', shadow: 'shadow-orange-100' };
        }
        if (diffDays >= 3 && level === 0) {
            return { type: 'R1', label: 'Relance 1 requise', days: diffDays, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-400', shadow: 'shadow-amber-100' };
        }

        return null; // Pas de relance due
    };

    const relanceInfo = getRelanceInfo();

    return (
        <div
            className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm border ${relanceInfo ? `border-2 ${relanceInfo.border} ${relanceInfo.shadow}` : 'border-slate-200 dark:border-slate-700'} p-4 transition-all hover:shadow-md cursor-pointer group hover:border-brand-300 dark:hover:border-brand-700`}
            onClick={() => onClick(c.id)}
        >
            <div className="flex justify-between items-start mb-3">
                <div className="flex flex-col">
                    <span className="font-bold text-slate-800 dark:text-white line-clamp-1">{c.client}</span>
                </div>
                <div className={`text-xs px-2 py-1 rounded-full border border-transparent font-medium flex items-center gap-1.5 whitespace-nowrap ${sConf.color}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${sConf.dot}`}></div>
                    {sConf.label}
                </div>
            </div>

            <div className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
                {c.telephone && (
                    <a href={`tel:${c.telephone}`} className="flex items-center gap-2 hover:text-brand-600 transition-colors" onClick={e => e.stopPropagation()}>
                        <Phone size={14} className="text-slate-400" />
                        {c.telephone}
                    </a>
                )}
                {c.email && (
                    <a href={`mailto:${c.email}`} className="flex items-center gap-2 hover:text-brand-600 transition-colors line-clamp-1" onClick={e => e.stopPropagation()}>
                        <Mail size={14} className="text-slate-400 shrink-0" />
                        <span className="truncate">{c.email}</span>
                    </a>
                )}
                {c.adresse && (
                    <div className="flex items-start gap-2">
                        <MapPin size={14} className="text-slate-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2 text-xs leading-tight">{c.adresse}</span>
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-3 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-slate-400" />
                    <span>{dynamicDate.prefix} {dynamicDate.formattedDate}</span>
                </div>
                {c.montantTTC && c.status !== COMMERCIAL_STATUS.LEAD && (
                    <div className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-200">
                        <Euro size={13} className="text-slate-400" />
                        {parseFloat(c.montantTTC).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                    </div>
                )}
            </div>

            {/* QUICK ACTIONS FOOTER */}
            <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">

                {/* ALERTE RELANCE (Visible uniquement si relance requise) */}
                {relanceInfo && (
                    <div className={`w-full rounded-lg border ${relanceInfo.border} ${relanceInfo.bg} p-2 mb-1`}>
                        <div className={`text-xs font-bold mb-2 flex items-center gap-1.5 ${relanceInfo.color}`}>
                            <AlertCircle size={14} className="animate-pulse" /> {relanceInfo.label} (J+{relanceInfo.days})
                        </div>
                        <div className="flex flex-col gap-1.5 w-full">
                            {relanceInfo.type === 'R1' && (
                                <>
                                    <Button
                                        variant="secondary"
                                        className="w-full text-xs py-1.5 bg-white border border-amber-200 text-amber-700 hover:bg-amber-100 flex justify-center !px-2"
                                        onClick={(e) => { e.stopPropagation(); onTriggerRelanceAction(c, 1, 'phone'); }}
                                    >
                                        📞 Appelé (Sans Succès)
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className="w-full text-[11px] py-1.5 bg-amber-500 hover:bg-amber-600 border-none flex justify-center !px-2"
                                        icon={Mail}
                                        onClick={(e) => { e.stopPropagation(); onTriggerRelanceAction(c, 1, 'email'); }}
                                    >
                                        Envoyer Email R1
                                    </Button>
                                </>
                            )}
                            {relanceInfo.type === 'R2' && (
                                <Button
                                    variant="primary"
                                    className="w-full text-[11px] py-1.5 bg-orange-500 hover:bg-orange-600 border-none flex justify-center !px-2"
                                    icon={Mail}
                                    onClick={(e) => { e.stopPropagation(); onTriggerRelanceAction(c, 2, 'email'); }}
                                >
                                    Envoyer Email R2 (Urgence)
                                </Button>
                            )}
                            {relanceInfo.type === 'R3' && (
                                <Button
                                    variant="primary"
                                    className="w-full text-[11px] py-1.5 bg-red-600 hover:bg-red-700 border-none flex justify-center !px-2"
                                    icon={Trash2}
                                    onClick={(e) => { e.stopPropagation(); onTriggerRelanceAction(c, 3, 'email_archive'); }}
                                >
                                    Email de Clôture & Archiver
                                </Button>
                            )}
                        </div>
                    </div>
                )}

                <div className="flex items-center gap-2 w-full">
                    <div className="flex-1">
                        {c.status === COMMERCIAL_STATUS.LEAD && (
                            <Button
                                variant="primary"
                                className="w-full text-xs py-1.5 h-auto rounded-lg shadow-sm"
                                icon={Send}
                                onClick={(e) => { e.stopPropagation(); onPromoteToSent(c.id); }}
                            >
                                Chiffrer / Envoyer
                            </Button>
                        )}
                        {!relanceInfo && c.status === COMMERCIAL_STATUS.SENT && (
                            <Button
                                variant="secondary"
                                className="w-full text-[11px] py-1.5 h-auto rounded-lg shadow-sm bg-orange-100/50 text-orange-700 hover:bg-orange-100 border-none font-medium px-2"
                                icon={Clock}
                                onClick={(e) => { e.stopPropagation(); onMarkForRelance(c.id); }}
                            >
                                Forcer en Relance
                            </Button>
                        )}
                        {!relanceInfo && c.status === COMMERCIAL_STATUS.RELANCE && (
                            <Button
                                variant="secondary"
                                className="w-full text-xs py-1.5 h-auto rounded-lg shadow-sm bg-green-100/50 text-green-700 hover:bg-green-100 border-none font-bold"
                                icon={CheckCircle2}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onMarkAsSigned(c.id);
                                    onClick(c.id);
                                }}
                            >
                                Gagné / Signé
                            </Button>
                        )}
                        {c.status === COMMERCIAL_STATUS.SIGNED && (
                            <div className="w-full text-xs py-1.5 text-center font-bold text-green-600 bg-green-50 rounded-lg flex justify-center items-center gap-1">
                                <CheckCircle2 size={14} /> Signé
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-1 border-l border-slate-200 dark:border-slate-700 pl-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={(e) => { e.stopPropagation(); onDuplicate(c.id); }} className="p-1 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-md transition-colors" title="Dupliquer"><Copy size={16} /></button>
                        <button onClick={(e) => { e.stopPropagation(); onDelete(c.id); }} className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors" title="Supprimer"><Trash2 size={16} /></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

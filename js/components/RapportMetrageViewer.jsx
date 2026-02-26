import React, { useState, useEffect } from 'react';
import { FileText, ExternalLink, Loader2 } from 'lucide-react';
import { DB } from '../db.js';

/**
 * RapportMetrageViewer — Affiche un rapport de métrage HTML en lecture seule.
 *
 * Stratégie de chargement :
 * 1. Si `rapportMetrage` (string HTML) est fourni → utilise directement via srcDoc
 * 2. Si `rapportMetrageFileId` est fourni → charge depuis IndexedDB (puis Drive fallback)
 *
 * @param {object} props
 * @param {string} [props.rapportMetrage]       - HTML du rapport (stocké inline dans Firebase)
 * @param {string} [props.rapportMetrageFileId] - ID du fichier dans IndexedDB (pour HTML lourd)
 * @param {string} [props.title]                - Titre optionnel affiché au-dessus
 * @param {boolean} [props.collapsed]           - Démarrer replié
 */
export const RapportMetrageViewer = ({ rapportMetrage, rapportMetrageFileId, title, collapsed = false }) => {
    const [html, setHtml] = useState(rapportMetrage || null);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(!collapsed);

    // Charger depuis IndexedDB si pas de HTML inline
    useEffect(() => {
        if (rapportMetrage) {
            setHtml(rapportMetrage);
            return;
        }
        if (!rapportMetrageFileId) return;

        setLoading(true);
        DB.getFile(rapportMetrageFileId)
            .then(blob => {
                if (blob) {
                    const reader = new FileReader();
                    reader.onload = () => setHtml(reader.result);
                    reader.readAsText(blob);
                }
            })
            .catch(err => console.error('Erreur chargement rapport:', err))
            .finally(() => setLoading(false));
    }, [rapportMetrage, rapportMetrageFileId]);

    if (!html && !loading && !rapportMetrageFileId) return null;

    return (
        <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
            {/* Header cliquable */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
            >
                <div className="flex items-center gap-2">
                    <FileText size={18} className="text-brand-600" />
                    <span className="font-bold text-sm text-slate-800 dark:text-white">
                        {title || 'Rapport de Métrage'}
                    </span>
                </div>
                <span className={`text-xs text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {/* Contenu */}
            {isOpen && (
                <div className="border-t border-slate-200 dark:border-slate-700">
                    {loading ? (
                        <div className="flex items-center justify-center gap-2 p-8 text-slate-400">
                            <Loader2 size={20} className="animate-spin" />
                            <span className="text-sm">Chargement du rapport...</span>
                        </div>
                    ) : html ? (
                        <iframe
                            srcDoc={html}
                            sandbox="allow-same-origin"
                            className="w-full border-0 bg-white"
                            style={{ minHeight: '400px', height: '60vh', maxHeight: '800px' }}
                            title="Rapport de métrage"
                        />
                    ) : (
                        <div className="p-6 text-center text-slate-400 text-sm italic">
                            Rapport non disponible
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

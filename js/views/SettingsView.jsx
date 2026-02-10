import React, { useRef } from 'react';
import { ArrowLeft, Download, FileText, Trash2, RefreshCw } from 'lucide-react';
import { useApp } from "../context.js";
import { Card } from "../components/ui/Card.jsx";

/* SettingsView - Gestion des parametres */
export const SettingsView = ({ onBack, state, onImport }) => {
    const { forceSync } = useApp();
    const fileInputRef = useRef(null);

    const handleExport = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        const date = new Date().toISOString().split('T')[0];
        downloadAnchorNode.setAttribute("download", `sarange_backup_${date}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    const handleImportClick = () => fileInputRef.current.click();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                if (!importedData.chantiers || !importedData.products) { alert("Format invalide."); return; }
                if (confirm("Attention : L'importation va ecraser TOUTES les donnees. Continuer ?")) {
                    onImport(importedData);
                    alert("Restauration reussie !");
                }
            } catch (err) { console.error(err); alert("Erreur de lecture."); }
        };
        reader.readAsText(file);
    };

    const handleReset = () => {
        if (confirm("DANGER : Tout effacer ? Action irreversible.")) {
            onImport({ chantiers: [], products: [], currentChantierId: null });
        }
    };

    return (
        <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-950 animate-fade-in">
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 safe-top-padding flex items-center gap-3 sticky top-0 z-10">
                <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-200"><ArrowLeft size={24} /></button>
                <h1 className="text-xl font-bold dark:text-white">Parametres</h1>
            </div>
            <div className="p-4 max-w-2xl mx-auto w-full space-y-6">

                {/* Section Data */}
                <section>
                    <h2 className="text-sm font-bold text-slate-500 uppercase mb-3 ml-1">Donnees & Securite</h2>
                    <Card>
                        <div onClick={handleExport} className="p-4 border-b border-slate-100 dark:border-slate-800 cursor-pointer flex gap-3 items-center hover:bg-slate-50 dark:hover:bg-slate-800/50"><Download size={20} className="text-green-600" /><div className="flex-1"><div className="font-medium dark:text-white">Sauvegarder (Export)</div><div className="text-xs text-slate-500">Telecharger JSON</div></div></div>
                        <div onClick={handleImportClick} className="p-4 cursor-pointer flex gap-3 items-center hover:bg-slate-50 dark:hover:bg-slate-800/50"><FileText size={20} className="text-blue-600" /><div className="flex-1"><div className="font-medium dark:text-white">Restaurer (Import)</div><div className="text-xs text-slate-500">Charger JSON</div></div><input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".json" className="hidden" /></div>
                    </Card>
                </section>

                {/* Section Sychro Diagnostic */}
                <section>
                    <h2 className="text-sm font-bold text-brand-600 uppercase mb-3 ml-1">Synchronisation Cloud</h2>
                    <Card>
                        <div onClick={forceSync} className="p-4 cursor-pointer flex gap-3 items-center hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            <RefreshCw size={20} className="text-brand-600" />
                            <div className="flex-1">
                                <div className="font-medium dark:text-white">Forcer la synchronisation</div>
                                <div className="text-xs text-slate-500">Relancer la connexion et fusionner</div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Section Danger */}
                <section>
                    <h2 className="text-sm font-bold text-red-500 uppercase mb-3 ml-1">Danger</h2>
                    <Card className="border-red-200 dark:border-red-900"><div onClick={handleReset} className="p-4 cursor-pointer flex gap-3 items-center text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10"><Trash2 size={20} /><span className="font-medium">Tout reinitialiser</span></div></Card>
                </section>

                <div className="text-center mt-8 text-xs text-slate-400">Sarange Pro v1.1 • Local-First</div>
            </div>
        </div>
    );
};

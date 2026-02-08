import React, { useMemo, useRef, useState } from 'react';
import { Modal } from "../components/ui/Modal.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Checkbox } from "../components/ui/Checkbox.jsx";
import { Spinner } from "../components/ui/Spinner.jsx";
import { FileText, UploadCloud, AlertCircle, CheckCircle } from 'lucide-react';
import QuoteParserService from '../services/QuoteParserService.js';

export const QuoteImportModal = ({ onClose, onImport }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [parsedItems, setParsedItems] = useState([]);
    const [parsedMeta, setParsedMeta] = useState(null);
    const [currentFile, setCurrentFile] = useState(null);
    const [selectedIds, setSelectedIds] = useState(() => new Set());
    const [error, setError] = useState(null);

    const inputRef = useRef(null);

    const resetState = () => {
        setIsLoading(false);
        setParsedItems([]);
        setParsedMeta(null);
        setCurrentFile(null);
        setSelectedIds(new Set());
        setError(null);
        if (inputRef.current) {
            // Important : permet de re-sélectionner le même fichier
            inputRef.current.value = "";
        }
    };

    const isPdfFile = (file) => {
        if (!file) return false;
        const typeOk = file.type === 'application/pdf';
        const nameOk = typeof file.name === 'string' && file.name.toLowerCase().endsWith('.pdf');
        return typeOk || nameOk;
    };

    const handleFileChange = async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        // (optionnel) taille max : 25MB
        const MAX_MB = 25;
        const maxBytes = MAX_MB * 1024 * 1024;

        if (!isPdfFile(file)) {
            setError("Le fichier doit être un PDF.");
            // reset input pour permettre re-choix immédiat
            if (inputRef.current) inputRef.current.value = "";
            return;
        }
        if (file.size > maxBytes) {
            setError(`PDF trop volumineux (max ${MAX_MB} MB).`);
            if (inputRef.current) inputRef.current.value = "";
            return;
        }

        setIsLoading(true);
        setError(null);
        setParsedItems([]);
        setSelectedIds(new Set());

        try {
            const data = await QuoteParserService.parseQuote(file);

            setParsedItems(data.items);
            setParsedMeta(data.meta);
            setCurrentFile(file);

            // Sélection par défaut : tout sélectionner
            setSelectedIds(new Set(data.items.map((it) => it.id)));
        } catch (err) {
            console.error(err);
            setError("Erreur lors de l'analyse du PDF. Vérifiez qu'il n'est pas protégé.");
        } finally {
            setIsLoading(false);
        }
    };

    const toggleSelection = (id) => {
        setSelectedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const toggleAll = () => {
        setSelectedIds((prev) => {
            if (parsedItems.length === 0) return new Set();
            const allIds = parsedItems.map((it) => it.id);
            const isAll = prev.size === allIds.length;
            return isAll ? new Set() : new Set(allIds);
        });
    };

    const handleImportClick = () => {
        const selectedItems = parsedItems.filter((it) => selectedIds.has(it.id));
        onImport(selectedItems, currentFile, parsedMeta);
    };

    const isAllSelected = useMemo(() => {
        return parsedItems.length > 0 && selectedIds.size === parsedItems.length;
    }, [parsedItems.length, selectedIds.size]);

    return (
        <Modal isOpen={true} onClose={onClose} title="Importer depuis un devis PDF" size="lg">
            <div className="flex flex-col h-[600px]">

                {/* Zone d'Upload */}
                {parsedItems.length === 0 && !isLoading && (
                    <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900 m-4">
                        <input
                            ref={inputRef}
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={handleFileChange}
                            className="hidden"
                            id="pdf-upload"
                        />
                        <label htmlFor="pdf-upload" className="flex flex-col items-center cursor-pointer p-10">
                            <div className="bg-brand-100 dark:bg-brand-900/30 p-4 rounded-full text-brand-600 dark:text-brand-400 mb-4">
                                <UploadCloud size={48} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                                Cliquez pour sélectionner un devis
                            </h3>
                            <p className="text-slate-500 text-sm text-center max-w-xs">
                                Formats supportés : PDF uniquement.<br />
                                Nous analyserons le contenu pour extraire les menuiseries.
                            </p>
                        </label>

                        {error && (
                            <div className="mt-4 flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg">
                                <AlertCircle size={20} />
                                <span>{error}</span>
                            </div>
                        )}
                    </div>
                )}

                {/* Loading State */}
                {isLoading && (
                    <div className="flex-1 flex flex-col items-center justify-center" aria-live="polite">
                        <Spinner size={48} />
                        <p className="mt-4 text-slate-600 dark:text-slate-300 font-medium">Analyse du document en cours...</p>
                        <p className="text-xs text-slate-400 mt-2">Cela peut prendre quelques secondes.</p>
                    </div>
                )}

                {/* Preview Table */}
                {parsedItems.length > 0 && (
                    <div className="flex-1 overflow-hidden flex flex-col">
                        <div className="flex justify-between items-center px-4 py-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-2">
                                <FileText className="text-slate-500" size={20} />
                                <span className="font-bold text-slate-700 dark:text-slate-200">
                                    {parsedItems.length} élément(s) détecté(s)
                                </span>
                            </div>

                            <Button variant="ghost" size="sm" onClick={resetState}>
                                Changer de fichier
                            </Button>
                        </div>

                        <div className="overflow-y-auto flex-1 p-4">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-900 sticky top-0">
                                    <tr>
                                        <th className="px-4 py-3 rounded-tl-lg">
                                            <Checkbox checked={isAllSelected} onChange={toggleAll} />
                                        </th>
                                        <th className="px-4 py-3">Qté</th>
                                        <th className="px-4 py-3">Type</th>
                                        <th className="px-4 py-3">Dimensions</th>
                                        <th className="px-4 py-3">Détails</th>
                                        <th className="px-4 py-3 rounded-tr-lg">Source</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {parsedItems.map((item) => {
                                        const isSelected = selectedIds.has(item.id);
                                        return (
                                            <tr
                                                key={item.id || `${item.repere}-${item.originalLine}`}
                                                className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${!isSelected ? 'opacity-50' : ''
                                                    }`}
                                            >
                                                <td className="px-4 py-3">
                                                    <Checkbox checked={isSelected} onChange={() => toggleSelection(item.id)} />
                                                </td>
                                                <td className="px-4 py-3 font-bold text-brand-600 dark:text-brand-400">
                                                    x{item.quantity || 1}
                                                </td>
                                                <td className="px-4 py-3 font-medium text-slate-800 dark:text-white">
                                                    {item.type}
                                                    {item.kindHint ? (
                                                        <span className="text-xs text-slate-500 block">{item.kindHint}</span>
                                                    ) : null}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className="font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                                                        {item.width} x {item.height}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex flex-col">
                                                        <span>{item.material}</span>
                                                        <span className="text-xs text-slate-500">{item.color}</span>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3 text-xs text-slate-400 italic max-w-[200px] truncate"
                                                    title={item.originalLine}
                                                >
                                                    "{item.originalLine}"
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Footer Actions */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3 bg-white dark:bg-slate-950">
                    <Button variant="ghost" onClick={onClose}>Annuler</Button>
                    <Button
                        variant="primary"
                        disabled={parsedItems.length === 0 || selectedIds.size === 0}
                        onClick={handleImportClick}
                        icon={CheckCircle}
                    >
                        Importer {selectedIds.size} produit(s)
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

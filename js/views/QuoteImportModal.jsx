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

    const [importMode, setImportMode] = useState('PARSE'); // 'PARSE' | 'STORE'

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
        setCurrentFile(file);

        if (importMode === 'STORE') {
            setIsLoading(false);
            return;
        }

        try {
            const data = await QuoteParserService.parseQuote(file);

            setParsedItems(data.items);
            setParsedMeta(data.meta);

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

    const handleItemChange = (id, field, value) => {
        setParsedItems((prev) => prev.map((item) => {
            if (item.id === id) {
                return { ...item, [field]: value };
            }
            return item;
        }));
    };

    const handleImportClick = () => {
        if (importMode === 'STORE') {
            // Pass empty items, but file is present
            onImport([], currentFile, null);
        } else {
            const selectedItems = parsedItems.filter((it) => selectedIds.has(it.id));
            onImport(selectedItems, currentFile, parsedMeta);
        }
    };

    const isAllSelected = useMemo(() => {
        return parsedItems.length > 0 && selectedIds.size === parsedItems.length;
    }, [parsedItems.length, selectedIds.size]);

    // Helper to determine if we can import
    const canImport = useMemo(() => {
        if (!currentFile) return false;
        if (importMode === 'STORE') return true;
        return parsedItems.length > 0 && selectedIds.size > 0;
    }, [currentFile, importMode, parsedItems.length, selectedIds.size]);

    return (
        <Modal isOpen={true} onClose={onClose} title="Importer / Stocker un devis" size="lg">
            <div className="flex flex-col h-[600px]">

                {/* Mode Selection */}
                {!currentFile && (
                    <div className="px-6 pt-4 pb-2">
                        <div className="flex gap-4 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                            <button
                                onClick={() => setImportMode('PARSE')}
                                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${importMode === 'PARSE'
                                        ? 'bg-white dark:bg-slate-700 shadow-sm text-brand-600 dark:text-brand-400'
                                        : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                                    }`}
                            >
                                Analyser & Importer
                            </button>
                            <button
                                onClick={() => setImportMode('STORE')}
                                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${importMode === 'STORE'
                                        ? 'bg-white dark:bg-slate-700 shadow-sm text-brand-600 dark:text-brand-400'
                                        : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                                    }`}
                            >
                                Stocker uniquement
                            </button>
                        </div>
                        <p className="text-xs text-slate-500 mt-2 px-1">
                            {importMode === 'PARSE'
                                ? "Extrait les menuiseries du PDF pour créer les produits automatiquement."
                                : "Stocke simplement le fichier PDF dans le dossier (Consultable hors-ligne, pas de création de produits)."
                            }
                        </p>
                    </div>
                )}


                {/* Zone d'Upload */}
                {!currentFile && !isLoading && (
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
                                {importMode === 'PARSE' ? 'Analyse automatique des menuiseries.' : 'Stockage sécurisé locale.'}
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

                {/* STORE MODE: PREVIEW FILE ONLY */}
                {currentFile && importMode === 'STORE' && (
                    <div className="flex-1 flex flex-col items-center justify-center m-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm text-center">
                            <FileText size={64} className="text-brand-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                                {currentFile.name}
                            </h3>
                            <p className="text-slate-500 mb-6">
                                {(currentFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>

                            <Button variant="ghost" size="sm" onClick={resetState}>
                                Changer de fichier
                            </Button>
                        </div>
                        <div className="mt-8 text-center max-w-md text-slate-500 text-sm">
                            <CheckCircle className="inline-block text-green-500 mr-2" size={16} />
                            Le fichier sera stocké localement et lié à ce chantier.
                        </div>
                    </div>
                )}

                {/* PARSE MODE: PREVIEW TABLE */}
                {currentFile && importMode === 'PARSE' && parsedItems.length > 0 && (
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
                                                <td className="px-4 py-3">
                                                    <select
                                                        value={item.type}
                                                        onChange={(e) => handleItemChange(item.id, 'type', e.target.value)}
                                                        className="w-full p-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                                                    >
                                                        <option value="FENETRE">FENETRE</option>
                                                        <option value="PORTE_FENETRE">PORTE_FENETRE</option>
                                                        <option value="BAIE_COULISSANTE">BAIE_COULISSANTE</option>
                                                        <option value="PORTE_ENTREE">PORTE_ENTREE</option>
                                                        <option value="PORTE_SERVICE">PORTE_SERVICE</option>
                                                        <option value="VOLET_ROULANT">VOLET_ROULANT</option>
                                                        <option value="AUTRE">AUTRE</option>
                                                    </select>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-1">
                                                        <input
                                                            type="number"
                                                            value={item.width}
                                                            onChange={(e) => handleItemChange(item.id, 'width', parseInt(e.target.value) || 0)}
                                                            className="w-16 p-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded text-sm text-center focus:ring-2 focus:ring-brand-500 outline-none"
                                                        />
                                                        <span className="text-slate-400">x</span>
                                                        <input
                                                            type="number"
                                                            value={item.height}
                                                            onChange={(e) => handleItemChange(item.id, 'height', parseInt(e.target.value) || 0)}
                                                            className="w-16 p-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded text-sm text-center focus:ring-2 focus:ring-brand-500 outline-none"
                                                        />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex flex-col gap-1">
                                                        <input
                                                            type="text"
                                                            value={item.label || ''}
                                                            onChange={(e) => handleItemChange(item.id, 'label', e.target.value)}
                                                            placeholder="Désignation..."
                                                            className="w-full p-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                                                        />
                                                        <div className="text-xs text-slate-500 flex gap-2">
                                                            <span>{item.material}</span>
                                                            <span>{item.color}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3 text-xs text-slate-400 italic max-w-[150px] truncate"
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
                        disabled={!canImport}
                        onClick={handleImportClick}
                        icon={CheckCircle}
                    >
                        {importMode === 'STORE' ? "Stocker le fichier" : `Importer ${selectedIds.size} produit(s)`}
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

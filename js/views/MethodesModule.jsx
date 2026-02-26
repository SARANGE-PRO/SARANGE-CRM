import React, { useState, useMemo } from 'react';
import { ClipboardList, ChevronRight, Upload, FileText, Rocket, ArrowLeft, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button.jsx';
import { Modal } from '../components/ui/Modal.jsx';
import { useApp } from '../context.js';
import { genererProductionEtAchats, grouperProduitsParMatiere } from '../services/productionService.js';
import { CreateVoletFabModal } from '../components/modals/CreateVoletFabModal.jsx';
import { RapportMetrageViewer } from '../components/RapportMetrageViewer.jsx';

/**
 * Bureau des Méthodes — Édition des fiches de fabrication et lancement production.
 * Affiche les chantiers en assignation === 'METHODES'.
 */
export const MethodesModule = () => {
    const { state, updateChantier } = useApp();

    const [selectedId, setSelectedId] = useState(null);
    const [showVoletModal, setShowVoletModal] = useState(false);
    const [fichesData, setFichesData] = useState({ pdfPVC: null, pdfALU: null, volets: [] });
    const [pdfFileNamePVC, setPdfFileNamePVC] = useState('');
    const [pdfFileNameALU, setPdfFileNameALU] = useState('');
    const [isLaunching, setIsLaunching] = useState(false);
    const [toast, setToast] = useState(null);

    // Dossiers en METHODES
    const dossiers = useMemo(() => {
        return (state.chantiers || []).filter(c =>
            !c.deleted && !c.purged && c.assignation === 'METHODES'
        );
    }, [state.chantiers]);

    const selectedChantier = dossiers.find(c => c.id === selectedId);
    const selectedProducts = useMemo(() => {
        if (!selectedId) return [];
        return (state.products || []).filter(p => p.chantierId === selectedId && !p.deleted);
    }, [selectedId, state.products]);

    const groupes = useMemo(() => {
        return grouperProduitsParMatiere(selectedProducts);
    }, [selectedProducts]);

    // --- Upload PDF ---
    const handlePdfUpload = (groupe, e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        // Pour l'instant on stocke le nom — l'URL sera gérée plus tard via Drive
        if (groupe === 'PVC') {
            setFichesData(prev => ({ ...prev, pdfPVC: file.name }));
            setPdfFileNamePVC(file.name);
        } else {
            setFichesData(prev => ({ ...prev, pdfALU: file.name }));
            setPdfFileNameALU(file.name);
        }
    };

    // --- Volet fiche ---
    const handleVoletSubmit = (voletData) => {
        setFichesData(prev => ({ ...prev, volets: [...prev.volets, voletData] }));
        setShowVoletModal(false);
    };

    // --- Lancement Production ---
    const handleLancerProduction = async () => {
        if (!selectedChantier) return;
        setIsLaunching(true);
        try {
            const result = await genererProductionEtAchats(selectedChantier, selectedProducts, fichesData);
            updateChantier(selectedId, { assignation: 'PRODUCTION' });
            setToast(`✅ ${result.ofs.length} OF et ${result.ocs.length} OC créés pour ${selectedChantier.client}`);
            // Reset
            setSelectedId(null);
            setFichesData({ pdfPVC: null, pdfALU: null, volets: [] });
            setPdfFileNamePVC('');
            setPdfFileNameALU('');
        } catch (err) {
            console.error('Erreur lancement production:', err);
            setToast('❌ Erreur lors de la génération');
        } finally {
            setIsLaunching(false);
        }
    };

    // --- Toast auto-dismiss ---
    React.useEffect(() => {
        if (toast) {
            const t = setTimeout(() => setToast(null), 4000);
            return () => clearTimeout(t);
        }
    }, [toast]);

    // ═══════════════════════════════════════
    // VUE DÉTAIL D'UN DOSSIER
    // ═══════════════════════════════════════
    if (selectedChantier) {
        const hasPVC = groupes.pvc.length > 0;
        const hasALU = groupes.alu.length > 0;
        const hasVolets = groupes.volets.length > 0;
        const hasAutres = groupes.autres.length > 0;

        return (
            <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
                <CreateVoletFabModal
                    isOpen={showVoletModal}
                    onClose={() => setShowVoletModal(false)}
                    onSubmit={handleVoletSubmit}
                />

                {/* Header */}
                <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 pt-[max(1rem,env(safe-area-inset-top))] pb-4 flex-shrink-0 shadow-sm z-20">
                    <button onClick={() => { setSelectedId(null); setFichesData({ pdfPVC: null, pdfALU: null, volets: [] }); setPdfFileNamePVC(''); setPdfFileNameALU(''); }} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 mb-2">
                        <ArrowLeft size={16} /> Retour aux dossiers
                    </button>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                        <ClipboardList size={22} className="text-brand-600" />
                        {selectedChantier.client}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {selectedProducts.length} produit(s) • {selectedChantier.referenceDevis && `Devis ${selectedChantier.referenceDevis}`}
                    </p>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 pb-40">

                    {/* Rapport de Métrage (si disponible) */}
                    {(selectedChantier.rapportMetrage || selectedChantier.rapportMetrageFileId) && (
                        <RapportMetrageViewer
                            rapportMetrage={selectedChantier.rapportMetrage}
                            rapportMetrageFileId={selectedChantier.rapportMetrageFileId}
                            title="Rapport de Métrage (référence)"
                            collapsed={true}
                        />
                    )}

                    {/* Groupe PVC */}
                    {hasPVC && (
                        <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold px-2 py-0.5 rounded-full">PVC</span>
                                    Menuiseries PVC
                                    <span className="text-sm text-slate-400 font-normal">({groupes.pvc.length})</span>
                                </h3>
                                {fichesData.pdfPVC ? (
                                    <span className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 size={14} /> {pdfFileNamePVC}</span>
                                ) : null}
                            </div>
                            <ul className="space-y-2 mb-4">
                                {groupes.pvc.map((p, i) => (
                                    <li key={p.id || i} className="text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 px-3 py-2 rounded-lg">
                                        <strong>{p.type}</strong> — {p.largeurMm}×{p.hauteurMm}mm {p.couleur && `• ${p.couleur}`}
                                    </li>
                                ))}
                            </ul>
                            <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 dark:bg-brand-900/20 px-4 py-2.5 rounded-xl transition-colors">
                                <Upload size={16} />
                                {fichesData.pdfPVC ? 'Remplacer PDF Proges' : 'Importer PDF Proges'}
                                <input type="file" accept=".pdf" className="hidden" onChange={(e) => handlePdfUpload('PVC', e)} />
                            </label>
                        </section>
                    )}

                    {/* Groupe ALU */}
                    {hasALU && (
                        <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                    <span className="bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold px-2 py-0.5 rounded-full">ALU</span>
                                    Menuiseries Alu
                                    <span className="text-sm text-slate-400 font-normal">({groupes.alu.length})</span>
                                </h3>
                                {fichesData.pdfALU ? (
                                    <span className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 size={14} /> {pdfFileNameALU}</span>
                                ) : null}
                            </div>
                            <ul className="space-y-2 mb-4">
                                {groupes.alu.map((p, i) => (
                                    <li key={p.id || i} className="text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 px-3 py-2 rounded-lg">
                                        <strong>{p.type}</strong> — {p.largeurMm}×{p.hauteurMm}mm {p.couleur && `• ${p.couleur}`}
                                    </li>
                                ))}
                            </ul>
                            <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 dark:bg-brand-900/20 px-4 py-2.5 rounded-xl transition-colors">
                                <Upload size={16} />
                                {fichesData.pdfALU ? 'Remplacer PDF Scal' : 'Importer PDF Scal'}
                                <input type="file" accept=".pdf" className="hidden" onChange={(e) => handlePdfUpload('ALU', e)} />
                            </label>
                        </section>
                    )}

                    {/* Groupe Volets */}
                    {hasVolets && (
                        <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                    <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-bold px-2 py-0.5 rounded-full">VR</span>
                                    Volets Roulants
                                    <span className="text-sm text-slate-400 font-normal">({groupes.volets.length})</span>
                                </h3>
                                {fichesData.volets.length > 0 && (
                                    <span className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 size={14} /> {fichesData.volets.length} fiche(s)</span>
                                )}
                            </div>
                            <ul className="space-y-2 mb-4">
                                {groupes.volets.map((p, i) => (
                                    <li key={p.id || i} className="text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 px-3 py-2 rounded-lg">
                                        <strong>Volet</strong> — {p.largeurMm}×{p.hauteurMm}mm {p.couleur && `• ${p.couleur}`}
                                    </li>
                                ))}
                            </ul>
                            <Button onClick={() => setShowVoletModal(true)} variant="secondary" icon={FileText} className="text-sm">
                                Ajouter une fiche volet
                            </Button>
                        </section>
                    )}

                    {/* Groupe Autres */}
                    {hasAutres && (
                        <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                            <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-4">
                                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold px-2 py-0.5 rounded-full">Négoce</span>
                                Autres Produits
                                <span className="text-sm text-slate-400 font-normal">({groupes.autres.length})</span>
                            </h3>
                            <ul className="space-y-2">
                                {groupes.autres.map((p, i) => (
                                    <li key={p.id || i} className="text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 px-3 py-2 rounded-lg flex items-center gap-2">
                                        <AlertTriangle size={14} className="text-amber-500 shrink-0" />
                                        <strong>{p.type}</strong> — {p.description || p.notes || 'sans description'}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-slate-400 mt-3 italic">
                                → Sera créé comme Ordre de Commande (négoce) automatiquement.
                            </p>
                        </section>
                    )}

                    {/* Bouton Lancer */}
                    <div className="pt-4">
                        <Button
                            onClick={handleLancerProduction}
                            icon={Rocket}
                            className="w-full py-4 text-base shadow-lg hover:scale-[1.01] transition-transform"
                            disabled={isLaunching}
                        >
                            {isLaunching ? 'Génération en cours...' : '🚀 Lancer Production & Achats'}
                        </Button>
                    </div>
                </div>

                {/* Toast */}
                {toast && (
                    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-800 text-white px-6 py-3 rounded-xl shadow-2xl text-sm font-medium animate-fade-in">
                        {toast}
                    </div>
                )}
            </div>
        );
    }

    // ═══════════════════════════════════════
    // VUE LISTE DES DOSSIERS
    // ═══════════════════════════════════════
    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
            {/* Header */}
            <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 pt-[max(1rem,env(safe-area-inset-top))] pb-4 flex-shrink-0 shadow-sm z-20">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <ClipboardList size={22} className="text-brand-600" />
                    Bureau des Méthodes
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Édition des fiches de fabrication et lancement en production.
                </p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-40">
                {dossiers.length === 0 ? (
                    <div className="flex h-64 items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl text-slate-400 text-sm font-medium">
                        Aucun dossier en attente de fiches
                    </div>
                ) : (
                    <div className="space-y-3 max-w-2xl">
                        {dossiers.map(c => {
                            const prods = (state.products || []).filter(p => p.chantierId === c.id && !p.deleted);
                            const g = grouperProduitsParMatiere(prods);
                            return (
                                <button
                                    key={c.id}
                                    onClick={() => setSelectedId(c.id)}
                                    className="w-full text-left bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-sm hover:shadow-md transition-all hover:border-brand-300 hover:scale-[1.005] group"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-slate-800 dark:text-white truncate">{c.client}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                                {prods.length} produit(s)
                                                {c.referenceDevis && <span className="ml-2">• Devis {c.referenceDevis}</span>}
                                            </p>
                                            <div className="flex gap-1.5 mt-2">
                                                {g.pvc.length > 0 && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">PVC ({g.pvc.length})</span>}
                                                {g.alu.length > 0 && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200">ALU ({g.alu.length})</span>}
                                                {g.volets.length > 0 && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">VR ({g.volets.length})</span>}
                                                {g.autres.length > 0 && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">Autre ({g.autres.length})</span>}
                                            </div>
                                        </div>
                                        <ChevronRight size={20} className="text-slate-400 group-hover:text-brand-500 transition-colors shrink-0" />
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            {toast && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-800 text-white px-6 py-3 rounded-xl shadow-2xl text-sm font-medium animate-fade-in">
                    {toast}
                </div>
            )}
        </div>
    );
};

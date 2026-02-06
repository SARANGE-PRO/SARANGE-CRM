import React, { useState } from 'react';
import { ArrowLeft, Edit, Lock, UserCheck, AlertCircle, Plus, Send, Unlock, Trash2, Copy, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button, Modal, Checkbox, Input, StatusBanner, Toast, Spinner } from "../ui.jsx";
import { useApp } from "../context.js";
import { ProductEditor } from "../components/ProductEditor.jsx";
import { EditChantierModal } from "./DashboardView.jsx";
import { generateUUID, buildOptionsString } from "../utils.js";
import { generateReportHTML } from "../reports.js";
import { Logger } from "../db.js";

/**
 * Envoie les données de métrage vers Google Sheets via Apps Script
 * Version robuste avec timeout et gestion d'erreurs
 */
async function sendToGoogleSheets(chantier, products, htmlReport, onStatusChange) {
    const APPS_SCRIPT_URL = window.SARANGE_CONFIG?.APPS_SCRIPT_URL;
    const TIMEOUT_MS = 15000; // 15 secondes

    if (!APPS_SCRIPT_URL) {
        Logger.warn("URL Google Apps Script non configurée");
        return { success: false, error: "Configuration manquante" };
    }

    // Préparer le payload
    const payload = {
        timestamp: new Date().toISOString(),
        metrage_id: generateUUID(),
        htmlReport: htmlReport,
        chantier: {
            client: chantier.client,
            adresse: chantier.adresse,
            telephone: chantier.telephone || '',
            email: chantier.email || '',
            typeContrat: chantier.typeContrat
        },
        clientFinal: chantier.typeContrat === 'SOUS_TRAITANCE' ? {
            nom: chantier.clientFinal,
            adresse: chantier.adresseFinale
        } : null,
        produits: products.map(p => ({
            numero: p.index,
            type: p.type,
            quantite: p.quantity || 1,
            localisation: p.room || '',
            dimensions: `${p.largeurMm} x ${p.hauteurMm} mm`,
            matiere: p.matiere || '',
            profil: p.profil || '',
            couleur: p.couleur === 'AUTRE' ? p.couleurAutre : (p.couleur || ''),
            vitrage: p.vitrageFlags ? Object.entries(p.vitrageFlags)
                .filter(([k, v]) => v)
                .map(([k]) => {
                    if (k === 'standard') return '4/20/4';
                    if (k === 'g200') return 'G200';
                    if (k === 'feuillete1f') return 'Feuilleté 1F';
                    if (k === 'feuillete2f') return 'Feuilleté 2F';
                    return '';
                })
                .filter(Boolean)
                .join(', ') : '',
            options: buildOptionsString(p),
            notes: p.notes || '',
            isValid: p.isValid
        })),
        total_produits: products.reduce((a, b) => a + (b.quantity || 1), 0),
        produits_incomplets: products.filter(p => !p.isValid).length
    };

    // Setup timeout avec AbortController
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
        // Passer en SENDING
        onStatusChange?.({ sendStatus: 'SENDING', lastError: null });

        const response = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain' }, // Évite preflight CORS sur GAS
            body: JSON.stringify(payload),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        // Vérifier le status HTTP
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        // Parser la réponse JSON
        const data = await response.json();

        if (data.success === true) {
            // SUCCÈS â†’ Verrouillage
            const sentAt = new Date().toISOString();
            onStatusChange?.({
                sendStatus: 'SENT',
                sentAt: sentAt,
                lastError: null,
                dateFinalisation: sentAt
            });
            Logger.info("✅ Métrage envoyé avec succès", { metrage_id: payload.metrage_id, client: chantier.client });
            return { success: true };
        } else {
            throw new Error(data.error || "Réponse serveur invalide");
        }

    } catch (error) {
        clearTimeout(timeoutId);

        // Déterminer le message d'erreur
        let errorMessage;
        if (error.name === 'AbortError') {
            errorMessage = "Connexion trop lente (délai 15s dépassé)";
        } else if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            errorMessage = "Pas de connexion réseau";
        } else {
            errorMessage = error.message;
        }

        // Passer en ERROR
        onStatusChange?.({ sendStatus: 'ERROR', lastError: errorMessage });
        Logger.error("â Œ Échec envoi métrage", { error: errorMessage, client: chantier.client });

        return { success: false, error: errorMessage };
    }
}

const ConfirmSendModal = ({ chantier, products, incompleteCount, onClose, onStatusChange, onSuccess, onError }) => {
    const [checks, setChecks] = useState({ cotes: false, options: false });
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const allChecked = checks.cotes && checks.options;

    const handleSend = async () => {
        setIsSending(true);
        const htmlReport = generateReportHTML(chantier, products, new Date().toISOString());
        const result = await sendToGoogleSheets(chantier, products, htmlReport, onStatusChange);

        if (result.success) {
            setIsSending(false);
            setIsSuccess(true);

            // Animation de succès visible pendant 1.5s avant de fermer
            setTimeout(() => {
                onSuccess?.();
            }, 1500);
        } else {
            setIsSending(false);
            onError?.(result.error);
        }
    };

    return (
        <Modal isOpen={true} onClose={isSending || isSuccess ? undefined : onClose} title={isSuccess ? "✓ Envoyé !" : "Êtes-vous sûr ?"} size="md">

            {/* Container avec hauteur minimum pour éviter les sauts d'interface */}
            <div className="relative min-h-[360px] flex flex-col">

                {/* VUE SUCCÈS - Animation overlay */}
                {isSuccess && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in z-10">
                        <div className="relative mb-6">
                            {/* Background pulsant */}
                            <div className="absolute inset-0 bg-green-100 dark:bg-green-900/30 rounded-full scale-150 animate-pulse"></div>
                            {/* Icône centrale avec bounce */}
                            <div className="bg-green-500 text-white rounded-full p-6 shadow-xl shadow-green-500/40 relative z-10 animate-bounce">
                                <CheckCircle size={48} strokeWidth={3} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Dossier Envoyé !</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-center text-sm">
                            Le métrage a été transmis au bureau
                        </p>
                    </div>
                )}

                {/* VUE FORMULAIRE */}
                {!isSuccess && (
                    <div className="flex flex-col h-full">
                        {/* Checklist */}
                        <div className="space-y-3 mb-6">
                            <Checkbox checked={checks.cotes} onChange={v => setChecks(c => ({ ...c, cotes: v }))} label="J'ai vérifié toutes les cotes" />
                            <Checkbox checked={checks.options} onChange={v => setChecks(c => ({ ...c, options: v }))} label="J'ai vérifié les options" />
                        </div>

                        {/* Alerte verrouillage */}
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-4 flex items-start gap-3">
                            <div className="bg-red-100 dark:bg-red-900/50 p-2 rounded-lg shrink-0">
                                <AlertTriangle className="text-red-600 dark:text-red-400" size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-red-700 dark:text-red-300 text-sm">Action irréversible</p>
                                <p className="text-red-600 dark:text-red-400 text-xs mt-1 leading-relaxed">
                                    Le dossier sera verrouillé après envoi.
                                </p>
                            </div>
                        </div>

                        {/* Résumé */}
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 mb-6 border border-slate-100 dark:border-slate-700">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-600 dark:text-slate-400">Total Produits</span>
                                <span className="font-bold text-slate-800 dark:text-white bg-white dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600">
                                    {products.reduce((a, p) => a + (p.quantity || 1), 0)}
                                </span>
                            </div>
                            {incompleteCount > 0 && (
                                <div className="flex justify-between text-sm mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                                    <span className="text-amber-600 dark:text-amber-400 flex items-center gap-2">
                                        <AlertTriangle size={16} /> Incomplets
                                    </span>
                                    <span className="font-bold text-white bg-amber-500 px-2 py-0.5 rounded text-xs">
                                        {incompleteCount}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="mt-auto space-y-3">
                            <Button
                                onClick={handleSend}
                                disabled={!allChecked || isSending}
                                className={`w-full py-4 text-base transition-all duration-300 ${allChecked ? 'translate-y-0 opacity-100' : 'opacity-80'}`}
                                icon={isSending ? null : Send}
                            >
                                {isSending ? (
                                    <span className="flex items-center justify-center gap-3">
                                        <Spinner size={20} />
                                        <span>Transmission en cours...</span>
                                    </span>
                                ) : "Confirmer l'envoi"}
                            </Button>

                            <Button onClick={onClose} variant="ghost" className="w-full py-3" disabled={isSending}>
                                Annuler
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    );
};

const UnlockModal = ({ onClose, onUnlock }) => {
    const [input, setInput] = useState('');
    const isValid = input.toUpperCase() === 'MODIFIER';

    return (
        <Modal isOpen={true} onClose={onClose} title="Déverrouiller le dossier" size="sm">
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                Pour modifier un dossier déjà  envoyé, saisissez <strong className="text-slate-800 dark:text-white">MODIFIER</strong> ci-dessous.
            </p>
            <Input value={input} onChange={setInput} placeholder="Tapez MODIFIER" className="mb-6" />
            <div className="space-y-3">
                <Button onClick={onUnlock} disabled={!isValid} variant={isValid ? 'danger' : 'secondary'} className="w-full py-4" icon={Unlock}>Déverrouiller</Button>
                <Button onClick={onClose} variant="ghost" className="w-full">Annuler</Button>
            </div>
        </Modal>
    );
};

export const ChantierDetailView = () => {
    const { state, selectChantier, deleteProduct, saveProduct, updateChantier } = useApp();
    const [edt, setEdt] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showUnlock, setShowUnlock] = useState(false);
    const [ied, setIed] = useState(false);
    const [toast, setToast] = useState(null);

    const ch = state.chantiers.find(c => c.id === state.currentChantierId);
    if (ch && ch.deleted) return null; // Sécurité si le chantier courant vient d'être supprimé (synchro)

    const prds = (state.products || []).filter(p => p.chantierId === ch?.id && !p.deleted).sort((a, b) => a.index - b.index);

    // État du chantier (fallback DRAFT pour anciens chantiers)
    const sendStatus = ch?.sendStatus || 'DRAFT';
    const isLocked = sendStatus === 'SENT';
    const isSending = sendStatus === 'SENDING';
    const hasError = sendStatus === 'ERROR';

    const addP = () => {
        if (isLocked) return;
        const l = prds[prds.length - 1];
        const d = l ? { matiere: l.matiere, profil: l.profil, couleur: l.couleur, couleurAutre: l.couleurAutre, isoMm: l.isoMm } : {};
        setEdt({ id: generateUUID(), chantierId: ch.id, index: prds.length + 1, type: 'FENETRE', quantity: 1, dateCreation: new Date().toISOString(), photos: [], isValid: false, validationErrors: [], ...d });
    };

    const dup = (e, p) => {
        e.stopPropagation();
        if (isLocked) return;
        saveProduct({ ...p, id: generateUUID(), index: prds.length + 1, dateCreation: new Date().toISOString() });
    };

    const handleStatusChange = (updates) => updateChantier(ch.id, updates);

    const handleSendSuccess = () => {
        setShowConfirm(false);
        // Toast supprimé car l'animation de succès dans la modal suffit
    };

    const handleSendError = (error) => {
        setShowConfirm(false);
        setToast({ message: `Échec : ${error}`, type: 'error' });
    };

    const handleUnlock = () => {
        updateChantier(ch.id, { sendStatus: 'DRAFT', sentAt: null, lastError: null });
        setShowUnlock(false);
        setToast({ message: 'Dossier déverrouillé', type: 'info' });
    };

    if (!ch) return null;
    if (edt) return <ProductEditor product={edt} onSave={p => { saveProduct(p); setEdt(null) }} onCancel={() => setEdt(null)} isReadOnly={isLocked} />;

    const tot = prds.reduce((a, p) => a + (p.quantity || 1), 0);
    const incompleteCount = prds.filter(p => !p.isValid).length;

    return (
        <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-950">
            {/* Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pb-3 pt-3 safe-top-padding flex items-center justify-between sticky top-0 z-10 shadow-sm">
                <div className="flex items-center flex-1 min-w-0">
                    <button onClick={() => selectChantier(null)} className="mr-3 p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-200"><ArrowLeft size={24} /></button>
                    <div className="truncate flex-1 cursor-pointer" onClick={() => !isLocked && setIed(true)}>
                        <div className="flex items-center gap-2">
                            <h2 className="font-bold text-lg dark:text-white truncate">{ch.client}</h2>
                            {isLocked ? <Lock size={16} className="text-green-600" /> : <Edit size={16} className="text-slate-400" />}
                        </div>
                        <div className="text-xs text-slate-500 flex items-center gap-2">
                            <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{tot} Produit(s)</span>
                            <span>• {ch.typeContrat === 'FOURNITURE_ET_POSE' ? 'Pose' : ch.typeContrat === 'SOUS_TRAITANCE' ? 'Sous-traitance' : 'Fourn. Seule'}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Banners */}
            {isLocked && <StatusBanner variant="success" icon={Lock} action="Modifier" onAction={() => setShowUnlock(true)}>Dossier verrouillé le {new Date(ch.sentAt).toLocaleDateString('fr-FR')} à  {new Date(ch.sentAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</StatusBanner>}
            {hasError && <StatusBanner variant="error" icon={AlertCircle}>Échec de l'envoi : {ch.lastError}</StatusBanner>}

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-4 max-w-5xl mx-auto w-full pb-32">
                {ch.typeContrat === 'SOUS_TRAITANCE' && <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 mb-4 flex items-start"><UserCheck className="text-amber-600 mt-1 mr-3 shrink-0" size={20} /><div><div className="text-xs font-bold text-amber-800 dark:text-amber-200 uppercase">Client Final</div><div className="font-medium text-amber-900 dark:text-amber-100">{ch.clientFinal}</div><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ch.adresseFinale)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-800 dark:text-amber-300 hover:underline flex items-center"><MapPin size={12} className="mr-1" />{ch.adresseFinale}</a></div></div>}

                {/* Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {prds.map(p => (
                        <div key={p.id} onClick={() => setEdt(p)} className={`bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border-l-[6px] cursor-pointer hover:shadow-md transition-all relative group ${p.type.includes('FENETRE') ? 'border-l-orange-500' : p.type.includes('PORTE') ? 'border-l-green-500' : 'border-l-orange-500'} border-t border-r border-b border-slate-200 dark:border-slate-800 ${isLocked ? 'opacity-75' : ''}`}>
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-bold text-lg dark:text-white">#{String(p.index).padStart(2, '0')}</span>
                                {p.quantity > 1 && <span className="bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300 text-xs font-bold px-2 py-1 rounded-full">x{p.quantity}</span>}
                            </div>
                            <div className="text-slate-800 dark:text-slate-200 font-medium mb-1">{p.type}</div>
                            <div className="text-sm text-slate-500 mb-3">{p.largeurMm} x {p.hauteurMm} mm {p.room && `• ${p.room}`}</div>
                            {!p.isValid && <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-2 py-1 rounded text-xs inline-flex items-center mb-2"><AlertTriangle size={12} className="mr-1" /> Incomplet</div>}
                            {!isLocked && <div className="flex justify-end gap-3 mt-2 pt-3 border-t border-slate-100 dark:border-slate-800"><button onClick={e => dup(e, p)} className="text-slate-400 hover:text-brand-600 p-1"><Copy size={18} /></button><button onClick={e => { e.stopPropagation(); if (confirm('Supprimer ?')) deleteProduct(p.id) }} className="text-slate-400 hover:text-red-600 p-1"><Trash2 size={18} /></button></div>}
                        </div>
                    ))}
                    {!isLocked && <button onClick={addP} className="min-h-[160px] border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-brand-400 transition-colors"><div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full mb-2"><Plus size={24} /></div><span className="font-medium">Ajouter</span></button>}
                </div>
            </div>

            {/* Sticky Footer - Action Button */}
            {!isLocked && (
                <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 safe-pb z-40 shadow-lg">
                    <Button onClick={() => setShowConfirm(true)} disabled={isSending} className="w-full py-4 text-base font-bold" icon={isSending ? null : Send}>
                        {isSending ? <span className="flex items-center justify-center gap-3"><Spinner size={20} />Transmission en cours...</span> : 'ENVOYER AU BUREAU'}
                    </Button>
                </div>
            )}

            {/* Locked Footer */}
            {isLocked && (
                <div className="fixed bottom-0 left-0 right-0 bg-green-50 dark:bg-green-900/20 border-t border-green-200 dark:border-green-800 p-4 safe-pb z-40">
                    <div className="flex items-center justify-center gap-2 text-green-700 dark:text-green-300">
                        <Lock size={16} /><span className="text-sm font-medium">Dossier verrouillé le {new Date(ch.sentAt).toLocaleDateString('fr-FR')}</span>
                    </div>
                </div>
            )}

            {/* Modals */}
            {showConfirm && <ConfirmSendModal chantier={ch} products={prds} incompleteCount={incompleteCount} onClose={() => setShowConfirm(false)} onStatusChange={handleStatusChange} onSuccess={handleSendSuccess} onError={handleSendError} />}
            {showUnlock && <UnlockModal onClose={() => setShowUnlock(false)} onUnlock={handleUnlock} />}
            {ied && <EditChantierModal chantier={ch} onClose={() => setIed(false)} onUpdate={d => updateChantier(ch.id, d)} />}

            {/* Toast */}
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </div>
    );
};

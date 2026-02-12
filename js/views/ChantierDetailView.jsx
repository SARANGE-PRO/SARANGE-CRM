import React, { useState } from 'react';
import { ArrowLeft, Edit, Lock, UserCheck, AlertCircle, Plus, Send, Unlock, Trash2, Copy, AlertTriangle, CheckCircle, CheckCircle2, CalendarX, Clock, Calendar, MapPin, FileText, ExternalLink } from 'lucide-react';
import { Button } from "../components/ui/Button.jsx";
import { Modal } from "../components/ui/Modal.jsx";
import { Checkbox } from "../components/ui/Checkbox.jsx";
import { Input } from "../components/ui/Input.jsx";
import { StatusBanner } from "../components/ui/StatusBanner.jsx";
import { Toast } from "../components/ui/Toast.jsx";
import { Spinner } from "../components/ui/Spinner.jsx";
import { SmartAddress } from "../components/ui/SmartAddress.jsx";
import { StepsHeader } from "../components/StepsHeader.jsx";
import { useApp } from "../context.js";
import { ProductEditor } from "../components/ProductEditor.jsx";
import { EditChantierModal } from "../components/EditChantierModal.jsx";
import { QuoteImportModal } from "./QuoteImportModal.jsx";
import { PDFViewerModal } from "../components/PDFViewerModal.jsx";
import { generateUUID, buildOptionsString, getChantierStep } from "../utils.js";

// Mapping Centralisé Sarange Parser V5 -> App Types
const mapQuoteTypeToAppType = (quoteType, subtype) => {
    switch (quoteType) {
        case 'VOLET_ROULANT':
            return { type: 'VOLET_ROULANT', profil: 'ALU' }; // Default profil ?
        case 'BAIE_COULISSANTE':
            // Baie est souvent Alu
            return { type: 'BAIE_COULISSANTE', profil: 'ALU' };
        case 'PORTE_ENTREE':
            return { type: 'PORTE_ENTREE', profil: 'ALU_80' }; // Default high quality
        case 'PORTE_FENETRE':
            return { type: 'PORTE_FENETRE', profil: 'RENO_40' };
        case 'FENETRE':
            return { type: 'FENETRE', profil: 'RENO_40' };
        case 'PORTE_SERVICE':
            return { type: 'PORTE_SERVICE', profil: 'RENO_40' };
        case 'AUTRE':
            return { type: 'AUTRE', profil: 'AUTRE' };
        case 'PORTE_INTERIEURE':
            // Pas de type natif, fallback sur Porte Entrée ou Autre ?
            // On peut utiliser 'PORTE_ENTREE' avec note
            return { type: 'PORTE_ENTREE', notes: 'Type : Porte Intérieure détectée' };
        default:
            return { type: 'FENETRE', notes: 'Type inconnu, importé comme fenêtre par défaut' };
    }
};
import { generateReportHTML } from "../reports.js";
import { Logger, DB } from "../db.js";
import { uploadQuoteToDrive, getChantierQuotes, downloadFileAsBlob } from "../services/googleDrive.js";

const HistorySection = ({ history }) => {
    if (!history?.length) return null;

    // Tri décroissant pour avoir le plus récent en haut
    const sorted = [...history].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6 animate-fade-in">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <Clock size={20} className="text-slate-400" />
                Historique du dossier
            </h3>
            <div className="space-y-3">
                {sorted.map((log, i) => (
                    <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700 text-sm">
                        <div className="flex justify-between text-slate-500 dark:text-slate-400 text-xs mb-1">
                            <span>{new Date(log.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                            <span className="font-medium bg-slate-200 dark:bg-slate-700 px-1.5 rounded">{log.user || 'Système'}</span>
                        </div>
                        <div className="text-slate-800 dark:text-slate-200">
                            <span className="font-bold uppercase text-xs mr-2 text-brand-600 dark:text-brand-400">{log.action === 'UNLOCK' ? 'DÉVERROUILLAGE' : log.action}</span>
                            <span>{log.reason}</span>
                        </div>
                        {log.details && (
                            <div className="mt-1 pl-3 border-l-2 border-slate-300 dark:border-slate-600 italic text-slate-600 dark:text-slate-400 text-xs">
                                "{log.details}"
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * Envoie les données de métrage vers Google Sheets via Apps Script
 * Version robuste avec timeout et gestion d'erreurs
 */
async function sendToGoogleSheets(chantier, products, htmlReport, onStatusChange) {
    const APPS_SCRIPT_URL = window.SARANGE_CONFIG?.APPS_SCRIPT_URL;
    const TIMEOUT_MS = 15000; // 15 secondes

    if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('your-script-id')) {
        Logger.warn("URL Google Apps Script non configurée ou invalide");
        return { success: false, error: "Configuration email manquante" };
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
    const [reason, setReason] = useState('');
    const [customReason, setCustomReason] = useState('');
    const { user } = useApp();

    const isValid = reason && (reason !== 'Autre' || customReason.trim().length > 0);

    const handleConfirm = () => {
        if (!isValid) return;
        onUnlock({
            reason,
            details: reason === 'Autre' ? customReason : null,
            user: user?.email || 'Inconnu'
        });
    };

    return (
        <Modal isOpen={true} onClose={onClose} title="Déverrouiller le dossier" size="sm">
            <div className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800 flex gap-3">
                    <AlertTriangle className="text-amber-600 shrink-0" size={20} />
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                        Cette action sera enregistrée dans l'historique du dossier.
                    </p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Motif du déverrouillage
                    </label>
                    <select
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    >
                        <option value="" disabled>Sélectionnez un motif...</option>
                        <option value="Erreur de métrage">Erreur de métrage</option>
                        <option value="Changement client">Changement client</option>
                        <option value="Ajout oublié">Ajout oublié</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>

                {reason === 'Autre' && (
                    <div className="animate-fade-in">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Précisez la raison
                        </label>
                        <Input
                            value={customReason}
                            onChange={setCustomReason}
                            placeholder="Ex: Demande architecte..."
                            autoFocus
                        />
                    </div>
                )}

                <div className="pt-2 flex flex-col gap-2">
                    <Button
                        onClick={handleConfirm}
                        disabled={!isValid}
                        variant={isValid ? 'danger' : 'secondary'}
                        className="w-full py-3"
                        icon={Unlock}
                    >
                        Déverrouiller
                    </Button>
                    <Button onClick={onClose} variant="ghost" className="w-full">
                        Annuler
                    </Button>
                </div>
            </div>
        </Modal>
    );
};


export const ChantierDetailView = () => {
    const { state, selectChantier, deleteProduct, saveProduct, updateChantier, updateChantierDate, navigate, setReturnView } = useApp();
    const [edt, setEdt] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showUnlock, setShowUnlock] = useState(false);
    const [showImport, setShowImport] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [ied, setIed] = useState(false);
    const [toast, setToast] = useState(null);
    const [showUnverifiedWarning, setShowUnverifiedWarning] = useState(false);
    const [pdfBlob, setPdfBlob] = useState(null);
    const [driveQuotes, setDriveQuotes] = useState([]);
    const [loadingDriveQuotes, setLoadingDriveQuotes] = useState(false);
    const [showPDFModal, setShowPDFModal] = useState(false);
    const [pdfBlobUrl, setPdfBlobUrl] = useState(null);

    const ch = state.chantiers.find(c => c.id === state.currentChantierId);
    if (ch && ch.deleted) return null; // Sécurité si le chantier courant vient d'être supprimé (synchro)

    // Preload PDF blob from IndexedDB when chantier changes
    React.useEffect(() => {
        const loadPdfFromIndexedDB = async () => {
            if (ch?.quoteFileId && !pdfBlob) {
                try {
                    const file = await DB.getFile(ch.quoteFileId);
                    if (file) {
                        setPdfBlob(file);
                        console.log("📄 PDF preloaded from IndexedDB");
                    }
                } catch (err) {
                    console.warn("Failed to preload PDF from IndexedDB:", err);
                }
            }
        };
        loadPdfFromIndexedDB();
    }, [ch?.id, ch?.quoteFileId]);

    const prds = (state.products || []).filter(p => p.chantierId === ch?.id && !p.deleted).sort((a, b) => a.index - b.index);

    // État du chantier 
    const sendStatus = ch?.sendStatus || 'DRAFT';
    const isLocked = sendStatus === 'SENT';
    const isSending = sendStatus === 'SENDING';
    const hasError = sendStatus === 'ERROR';

    // Logic for Quick Action Alert
    const needsPlanning = !ch.dateIntervention && !isLocked;

    // CALCUL DU STEP COURANT
    const currentStep = getChantierStep(ch, prds);

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
    };

    const handleSendError = (error) => {
        setShowConfirm(false);
        setToast({ message: `Échec : ${error}`, type: 'error' });
    };

    // Auto-hide unverified warning after 4 seconds
    React.useEffect(() => {
        if (showUnverifiedWarning) {
            const timer = setTimeout(() => setShowUnverifiedWarning(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [showUnverifiedWarning]);

    // Load PDF from DB if exists
    React.useEffect(() => {
        if (ch?.quoteFileId) {
            DB.getFile(ch.quoteFileId).then(blob => {
                if (blob) setPdfBlob(blob);
            }).catch(console.error);
        } else {
            setPdfBlob(null);
        }
    }, [ch?.quoteFileId]);

    const handleUnlock = ({ reason, details, user }) => {
        const logEntry = {
            date: new Date().toISOString(),
            action: 'UNLOCK',
            reason,
            details,
            user
        };

        updateChantier(ch.id, {
            sendStatus: 'DRAFT',
            sentAt: null,
            lastError: null,
            history: [...(ch.history || []), logEntry],
            updatedAt: new Date().toISOString()
        });

        setShowUnlock(false);
        setToast({ message: 'Dossier déverrouillé (Action enregistrée)', type: 'info' });
    };

    const handleRemoveQuote = async () => {
        if (!confirm("Voulez-vous supprimer le devis lié à ce chantier ? Les produits importés seront conservés mais ne seront plus liés au fichier source.")) return;

        if (ch.quoteFileId) {
            await DB.deleteFile(ch.quoteFileId);
        }

        updateChantier(ch.id, {
            quoteFileId: null, // New field
            quoteFile: null,   // Legacy cleanup
            quoteFileName: null,
            referenceDevis: null,
            updatedAt: new Date().toISOString()
        });
        setPdfBlob(null);
        setToast({ message: "Lien avec le devis supprimé", type: "info" });
    };

    /**
     * Handles viewing the PDF quote
     * Priority: IndexedDB (local) → Drive API (cloud fallback)
     */
    const handleViewPdf = async () => {
        try {
            let blob = null;

            // 1. Priority: Try IndexedDB first (local storage)
            if (ch.quoteFileId) {
                try {
                    blob = await DB.getFile(ch.quoteFileId);
                    if (blob) {
                        console.log("📄 PDF loaded from IndexedDB");
                    }
                } catch (err) {
                    console.warn("Failed to load from IndexedDB:", err);
                }
            }

            // 2. Fallback: Try Drive API if local not found
            if (!blob) {
                // Check if we have Drive quotes
                const quotes = await getChantierQuotes(ch);

                if (quotes && quotes.length > 0) {
                    const driveFileId = quotes[0].id;
                    console.log(`📥 Downloading PDF from Drive (${driveFileId})...`);

                    try {
                        blob = await downloadFileAsBlob(driveFileId);
                        console.log("✅ PDF downloaded from Drive");

                        // Optionally: Store in IndexedDB for next time
                        if (ch.quoteFileId) {
                            await DB.storeFile(ch.quoteFileId, blob);
                            console.log("💾 PDF cached locally");
                        }
                    } catch (driveErr) {
                        console.error("Drive download failed:", driveErr);
                        throw new Error("Impossible de télécharger le fichier depuis Drive");
                    }
                } else {
                    throw new Error("Fichier non disponible (ni local, ni Drive)");
                }
            }

            // 3. Create Blob URL and show modal
            if (blob) {
                const blobUrl = URL.createObjectURL(blob);
                setPdfBlobUrl(blobUrl);
                setShowPDFModal(true);
            } else {
                throw new Error("Aucun fichier disponible");
            }
        } catch (error) {
            console.error("Error viewing PDF:", error);
            setToast({
                message: error.message || "Erreur lors de l'ouverture du PDF",
                type: "error"
            });
        }
    };

    /**
     * Gère l'importation des items du devis.
     * Mappe les QuoteItems vers le format Product de la BDD.
     */
    /**
     * Gère l'importation des items du devis.
     * Mappe les QuoteItems vers le format Product de la BDD.
     */
    const handleImport = async (quoteItems, file, meta) => {
        // Support "Store Only" mode where quoteItems is empty but file is present
        if ((!quoteItems || quoteItems.length === 0) && !file) return;

        const timestamp = new Date().toISOString();
        const startIdx = prds.length + 1;

        // 1. Store File locally
        let fileId = null;
        if (file) {
            fileId = generateUUID();
            await DB.storeFile(fileId, file);
        }

        // 2. Process Items (if any)
        const newProducts = (quoteItems || []).map((item, idx) => {
            // Utilisation du Mapping Centralisé V5
            const mapping = mapQuoteTypeToAppType(item.type, item.subtype);

            // Mapping Matière (Conserve si explicite, sinon default du mapping)
            let matiere = 'PVC'; // Default global
            if (item.material === 'ALU') matiere = 'ALU';
            else if (item.material === 'BOIS') matiere = 'BOIS';
            else if (item.material === 'ACIER') matiere = 'ACIER';

            // Mapping Couleur
            let couleur = 'BLANC';
            let couleurAutre = '';
            if (item.color === 'GRIS_7016') couleur = 'GRIS_7016';
            else if (item.color !== 'BLANC' && item.color !== 'Standard') {
                couleur = 'AUTRE';
                couleurAutre = item.color;
            }

            return {
                id: generateUUID(),
                chantierId: ch.id,
                index: startIdx + idx,
                type: mapping.type,
                subtype: item.subtype || '',
                largeurMm: item.width || 0,
                hauteurMm: item.height || 0,
                quantity: item.quantity || 1,
                matiere: matiere,
                profil: mapping.profil || 'RENO_40',
                couleur: couleur,
                couleurAutre: couleurAutre,
                description: item.label || '',
                notes: item.label || '', // Libellé original
                dateCreation: timestamp,
                updatedAt: timestamp,
                isValid: item.isValid,
                source: 'QUOTE',
                isVerified: false
            };
        });

        // Mise à jour du chantier avec le fichier ID et la réf
        // IMPORTANT: On ne stocke PLUS le blob 'quoteFile' dans l'objet chantier pour éviter les pb de synchro
        const updatedChantier = {
            ...ch,
            quoteFileId: fileId || ch.quoteFileId,
            quoteFileName: file?.name || ch.quoteFileName,
            referenceDevis: meta?.number || ch.referenceDevis,
            updatedAt: timestamp
        };
        // Cleanup legacy blob if exists
        delete updatedChantier.quoteFile;

        updateChantier(ch.id, updatedChantier);

        // Batch Update / Save
        newProducts.forEach(p => saveProduct(p));

        if (fileId) {
            // Update local view immediately
            setPdfBlob(file);

            // 🚀 AUTO-UPLOAD TO DRIVE (Silent Background)
            uploadQuoteToDrive(ch, file, file.name)
                .then(result => {
                    console.log(`✅ Quote auto-uploaded to Drive: ${result.filename}`);
                    loadDriveQuotes();
                })
                .catch(error => {
                    console.error("Drive auto-upload failed:", error);
                    // Silent fail - local storage is primary
                });
        }

        setShowImport(false);
        setToast({ message: `${newProducts.length} menuiseries importées avec succès !`, type: 'success' });
    };

    // Load Drive quotes
    const loadDriveQuotes = async () => {
        if (!ch) return;

        setLoadingDriveQuotes(true);
        try {
            const quotes = await getChantierQuotes(ch);
            setDriveQuotes(quotes);
        } catch (error) {
            console.error("Failed to load Drive quotes:", error);
        } finally {
            setLoadingDriveQuotes(false);
        }
    };

    React.useEffect(() => {
        if (ch && !isLocked) {
            loadDriveQuotes();
        }
    }, [ch?.id]);

    const handleStepNavigation = (stepId) => {
        let targetId = '';
        if (stepId === 1) targetId = 'step-top';
        else if (stepId === 2) targetId = needsPlanning ? 'step-planning' : 'step-top';
        else if (stepId === 3) targetId = 'step-metrage';
        else if (stepId === 4) targetId = 'step-envoi';

        if (targetId) {
            const el = document.getElementById(targetId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    if (!ch) return null;
    if (edt) return (
        <ProductEditor
            product={edt}
            onSave={p => {
                // LOGIQUE DE VALIDATION :
                // Si le produit vient d'un devis, on valide qu'il a été vérifié lors de la sauvegarde
                const isQuoteProduct = p.source === 'QUOTE' || edt.source === 'QUOTE';
                const finalProduct = isQuoteProduct ? { ...p, source: 'QUOTE', isVerified: true } : p;

                saveProduct(finalProduct);
                setEdt(null);
            }}
            onCancel={() => setEdt(null)}
            isReadOnly={isLocked}
        />
    );

    const tot = prds.reduce((a, p) => a + (p.quantity || 1), 0);
    const incompleteCount = prds.filter(p => !p.isValid).length;
    const unverifiedCount = prds.filter(p => p.source === 'QUOTE' && !p.isVerified).length;
    const hasUnverified = unverifiedCount > 0;

    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950">
            {/* ... Header remains همان ... */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 shadow-sm min-h-[64px] pt-[max(env(safe-area-inset-top),20px)] pb-2 flex flex-col justify-center overflow-hidden">
                <div className="px-4 flex items-center justify-between w-full">
                    <div className="flex items-center flex-1 min-w-0">
                        <button onClick={() => {
                            if (state.returnView) {
                                navigate(state.returnView);
                                setReturnView(null);
                            } else {
                                selectChantier(null);
                            }
                        }} className="mr-3 p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-200"><ArrowLeft size={24} /></button>
                        <div className="truncate flex-1 cursor-pointer py-1" onClick={() => !isLocked && setIed(true)}>
                            <div className="flex items-center gap-2">
                                <h2 className="font-bold text-lg dark:text-white truncate leading-tight">{ch.client}</h2>
                                {isLocked ? <Lock size={16} className="text-green-600" /> : <Edit size={16} className="text-slate-400" />}
                            </div>
                            <div className="text-xs text-slate-500 flex flex-col gap-1 mt-0.5">
                                <SmartAddress address={ch.adresse} gps={ch.gps} className="text-slate-500 hover:text-brand-600" />
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{tot} Produit(s)</span>
                                    <span>• {ch.typeContrat === 'FOURNITURE_ET_POSE' ? 'Pose' : ch.typeContrat === 'SOUS_TRAITANCE' ? 'Sous-traitance' : 'Fourn. Seule'}</span>
                                    {ch.referenceDevis && (
                                        <span className="flex items-center gap-1 bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 px-1.5 py-0.5 rounded font-bold border border-brand-100 dark:border-brand-800">
                                            <FileText size={12} /> {ch.referenceDevis}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Le bouton est conditionné par le fichier du chantier, indépendamment des produits */}
                    {/* Le bouton est conditionné par le fichier du chantier, indépendamment des produits */}
                    {(ch.quoteFileId || pdfBlob || ch.quoteFile) && (
                        <div className="flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-200"
                                icon={FileText}
                                onClick={handleViewPdf}
                            >
                                <span className="hidden sm:inline">Voir le Devis</span>
                            </Button>
                            {!isLocked && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                                    icon={Trash2}
                                    onClick={handleRemoveQuote}
                                />
                            )}
                        </div>
                    )}
                </div>

                <StepsHeader currentStep={currentStep} onStepClick={handleStepNavigation} />
            </div>

            {isLocked && <StatusBanner variant="success" icon={Lock} action="Modifier" onAction={() => setShowUnlock(true)}>Dossier verrouillé le {new Date(ch.sentAt).toLocaleDateString('fr-FR')} à  {new Date(ch.sentAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</StatusBanner>}
            {hasError && <StatusBanner variant="error" icon={AlertCircle}>Échec de l'envoi : {ch.lastError}</StatusBanner>}

            <div className={`flex-1 overflow-y-auto p-4 max-w-5xl mx-auto w-full scroll-smooth ${isLocked ? 'pb-24' : hasUnverified ? 'pb-48' : 'pb-32'}`}>
                <div id="step-top"></div>

                {needsPlanning && (
                    <div id="step-planning" className="mb-6 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border-2 border-brand-500 animate-fade-in">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                            <div className="bg-brand-100 dark:bg-brand-900/30 p-3 rounded-full text-brand-600 dark:text-brand-400 shrink-0">
                                <Calendar size={32} />
                            </div>
                            <div className="flex-1 w-full">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                                    Ce dossier n'est pas planifié !
                                </h3>
                                <p className="text-slate-500 text-sm mb-4">
                                    Sélectionnez la date d'intervention pour passer à l'étape suivante.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="datetime-local"
                                        className="flex-1 p-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-brand-500 outline-none font-bold text-slate-700 transition-colors"
                                        id={`date-picker-${ch.id}`}
                                    />
                                    <Button
                                        variant="primary"
                                        className="font-bold uppercase w-full sm:w-auto"
                                        onClick={() => {
                                            const input = document.getElementById(`date-picker-${ch.id}`);
                                            const val = input?.value;
                                            if (!val) return alert("Veuillez sélectionner une date !");
                                            updateChantierDate(ch.id, val);
                                        }}
                                    >
                                        Valider
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {ch.dateIntervention && !isLocked && (
                    <div id="step-planning" className="mb-6 bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 dark:bg-green-800 p-2 rounded-full text-green-700 dark:text-green-300">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-green-800 dark:text-green-200 uppercase tracking-wide">Intervention planifiée</p>
                                <p className="text-lg font-bold text-slate-800 dark:text-white flex flex-col sm:flex-row sm:items-center gap-2">
                                    {new Date(ch.dateIntervention).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })}

                                    {ch.googleEventId ? (
                                        <span className="bg-white/80 dark:bg-green-800/50 px-2 py-0.5 rounded-full text-xs flex items-center gap-1 border border-green-200 dark:border-green-700 w-fit">
                                            <img src="https://www.gstatic.com/images/branding/product/1x/calendar_2020q4_48dp.png" alt="GCal" className="w-3 h-3" />
                                            Synchronisé
                                        </span>
                                    ) : (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateChantierDate(ch.id, ch.dateIntervention);
                                            }}
                                            className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded-full text-xs flex items-center gap-1 animate-pulse border border-orange-200 dark:border-orange-800 hover:bg-orange-200 transition-colors w-fit"
                                        >
                                            <AlertTriangle size={12} />
                                            Non Synchronisé (Forcer)
                                        </button>
                                    )}
                                </p>
                            </div>
                        </div>
                        <Button
                            variant="danger"
                            icon={CalendarX}
                            onClick={() => {
                                if (confirm("Confirmer l'annulation du rendez-vous ? Le dossier repassera en 'À Planifier'.")) {
                                    updateChantierDate(ch.id, null);
                                    setToast({ message: "Rendez-vous annulé", type: "info" });
                                }
                            }}
                        >
                            Annuler le RDV
                        </Button>
                    </div>
                )}

                {ch.typeContrat === 'SOUS_TRAITANCE' && (
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 mb-4 flex items-start">
                        <UserCheck className="text-amber-600 mt-1 mr-3 shrink-0" size={20} />
                        <div>
                            <div className="text-xs font-bold text-amber-800 dark:text-amber-200 uppercase">Client Final</div>
                            <div className="font-medium text-amber-900 dark:text-amber-100">
                                <div className="text-sm text-amber-800 dark:text-amber-300 flex items-center">
                                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ch.adresseFinale)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1 -ml-1 mr-1 rounded-full hover:bg-amber-100 dark:hover:bg-amber-800 text-amber-600 dark:text-amber-400 transition-colors"
                                        title="Ouvrir dans Maps">
                                        <MapPin size={12} />
                                    </a>
                                    {ch.adresseFinale}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div id="step-metrage" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {prds.map(p => {
                        const isFromQuote = p.source === 'QUOTE';
                        const needsVerification = isFromQuote && !p.isVerified;
                        const isVerified = isFromQuote && p.isVerified;
                        const cardBgClass = needsVerification ? 'bg-amber-50 dark:bg-amber-900/20' : 'bg-white dark:bg-slate-900';
                        const borderLeftClass = needsVerification ? 'border-l-amber-500' : (p.type.includes('FENETRE') ? 'border-l-orange-500' : p.type.includes('PORTE') ? 'border-l-green-500' : 'border-l-brand-500');

                        return (
                            <div
                                key={p.id}
                                onClick={() => setEdt(p)}
                                className={`${cardBgClass} ${borderLeftClass} rounded-xl p-4 shadow-sm border-l-4 cursor-pointer hover:shadow-md transition-all relative group border-t border-r border-b border-slate-200 dark:border-slate-800 ${isLocked ? 'opacity-75' : ''}`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-lg dark:text-white">#{String(p.index).padStart(2, '0')}</span>
                                    <div className="flex items-center gap-2">
                                        {needsVerification && (
                                            <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase animate-pulse flex items-center gap-1 border border-amber-200 dark:border-amber-800">
                                                <AlertTriangle size={10} /> Cotes Devis
                                            </span>
                                        )}
                                        {isVerified && (
                                            <span className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase flex items-center gap-1 border border-green-200 dark:border-green-800">
                                                <CheckCircle2 size={10} /> Cotes Validées
                                            </span>
                                        )}
                                        {p.quantity > 1 && <span className="bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300 text-xs font-bold px-2 py-1 rounded-full">x{p.quantity}</span>}
                                    </div>
                                </div>
                                <div className="text-slate-800 dark:text-slate-200 font-medium mb-1">{p.type}</div>
                                <div className="text-sm text-slate-500 mb-2">
                                    <span>{p.largeurMm} x {p.hauteurMm} mm {p.room && `• ${p.room}`}</span>
                                </div>
                                {!p.isValid && <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-2 py-1 rounded text-xs inline-flex items-center mb-2"><AlertCircle size={12} className="mr-1" /> Incomplet</div>}
                                {!isLocked && (
                                    <div className="flex justify-end gap-3 mt-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                                        <button onClick={e => dup(e, p)} className="text-slate-400 hover:text-brand-600 p-1"><Copy size={18} /></button>
                                        <button onClick={e => { e.stopPropagation(); if (confirm('Supprimer ?')) deleteProduct(p.id) }} className="text-slate-400 hover:text-red-600 p-1"><Trash2 size={18} /></button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    {!isLocked && (
                        <div className="flex flex-col gap-4">
                            <button onClick={addP} className="flex-1 min-h-[120px] border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-brand-400 transition-colors">
                                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full mb-2"><Plus size={24} /></div>
                                <span className="font-medium">Ajouter Manuellement</span>
                            </button>
                            <button onClick={() => setShowImport(true)} className="h-[60px] border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <FileText size={20} />
                                <span className="font-medium text-sm">Importer Devis (PDF)</span>
                            </button>
                        </div>
                    )}
                </div>
                <HistorySection history={ch.history} />
                <div id="step-envoi"></div>
            </div>

            {/* Sticky Footer - Action Button */}
            {!isLocked && (
                <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 safe-pb z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                    {showUnverifiedWarning && hasUnverified && (
                        <div className="mb-4 flex flex-col items-center animate-bounce-short">
                            <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 px-4 py-1.5 rounded-full flex items-center gap-2 border border-amber-200 dark:border-amber-800 shadow-sm transition-all">
                                <AlertTriangle size={16} />
                                <span className="text-sm font-bold">
                                    {unverifiedCount} cote{unverifiedCount > 1 ? 's' : ''} devis à vérifier
                                </span>
                            </div>
                            <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-2 font-bold">Action requise avant envoi</p>
                        </div>
                    )}
                    <Button
                        onClick={() => {
                            if (hasUnverified) {
                                setShowUnverifiedWarning(true);
                            } else {
                                setShowConfirm(true);
                            }
                        }}
                        disabled={isSending}
                        className={`w-full py-4 text-base font-bold transition-all duration-300 shadow-lg ${hasUnverified && showUnverifiedWarning ? 'ring-2 ring-amber-500' : 'bg-brand-600 hover:bg-brand-700 active:scale-[0.98]'}`}
                        icon={isSending ? null : Send}
                    >
                        {isSending ? (
                            <span className="flex items-center justify-center gap-3"><Spinner size={20} />Transmission...</span>
                        ) : 'ENVOYER AU BUREAU'}
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
            {showImport && <QuoteImportModal onClose={() => setShowImport(false)} onImport={handleImport} />}
            {ied && <EditChantierModal chantier={ch} onClose={() => setIed(false)} onUpdate={d => updateChantier(ch.id, d)} />}

            {/* PDF Viewer Modal */}
            {showPDFModal && pdfBlobUrl && (
                <PDFViewerModal
                    isOpen={showPDFModal}
                    onClose={() => {
                        setShowPDFModal(false);
                        setPdfBlobUrl(null);
                    }}
                    blobUrl={pdfBlobUrl}
                    title={`Devis - ${ch.referenceDevis || ch.client}`}
                />
            )}

            {/* Toast */}
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </div>
    );
};

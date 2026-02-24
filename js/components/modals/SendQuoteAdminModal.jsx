import React, { useState, useEffect } from 'react';
import {
    X, FileText, User, Mail, MapPin, Euro, Plus, Loader2, Send, CheckCircle2, AlertCircle
} from 'lucide-react';
import { Modal } from "../ui/Modal.jsx";
import { Button } from "../ui/Button.jsx";
import { Input } from "../ui/Input.jsx";
import { useApp } from "../../context.js";
import { COMMERCIAL_STATUS } from "../../utils.js";
import QuoteParserService from "../../services/QuoteParserService.js";
import { ensureValidToken } from "../../utils/googleAuth.js";
import { initCalendarClient } from "../../utils/googleCalendar.js";
import { DB } from "../../db.js";

export const SendQuoteAdminModal = ({ file, chantierId, onClose, onSuccess }) => {
    const { state, updateChantier } = useApp();
    const chantier = state.chantiers.find(x => x.id === chantierId);

    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [driveUrl, setDriveUrl] = useState('');

    const [devis, setDevis] = useState('');
    const [client, setClient] = useState('');
    const [email, setEmail] = useState('');
    const [cc, setCc] = useState('');
    const [showCc, setShowCc] = useState(false);
    const [total, setTotal] = useState('');
    const [address, setAddress] = useState('');
    const [tvaReduced, setTvaReduced] = useState(false);

    useEffect(() => {
        if (!file || !chantier) return;

        const parseFile = async () => {
            try {
                setLoading(true);
                const info = await QuoteParserService.extractQuoteData(file);

                const newDevis = info.number || chantier.extractedQuoteNumber || '';
                const newClient = info.name || chantier.client || '';
                const newEmail = info.email || chantier.email || '';
                const newTotal = info.totalTTC ? info.totalTTC.toString() : (chantier.montantTTC || '');
                const newAddress = info.address || chantier.adresse || '';
                const newTva = info.tvaReduced || chantier.tvaReduced || false;

                setDevis(newDevis);
                setClient(newClient);
                setEmail(newEmail);
                setTotal(newTotal);
                setAddress(newAddress);
                setTvaReduced(newTva);

                // Auto-fill the main Chantier object if any fields were empty and now have data
                const updates = {};
                let hasUpdates = false;

                if (!chantier.extractedQuoteNumber && newDevis) { updates.extractedQuoteNumber = newDevis; hasUpdates = true; }
                if (!chantier.client && newClient) { updates.client = newClient; hasUpdates = true; }
                if (!chantier.email && newEmail) { updates.email = newEmail; hasUpdates = true; }
                if (!chantier.adresse && newAddress) { updates.adresse = newAddress; hasUpdates = true; }
                if (!chantier.montantTTC && newTotal) { updates.montantTTC = newTotal; hasUpdates = true; }
                if (chantier.tvaReduced === undefined && newTva !== undefined) { updates.tvaReduced = newTva; hasUpdates = true; }

                if (hasUpdates) {
                    updateChantier(chantier.id, updates);
                }

            } catch (err) {
                console.error("Erreur parsing PDF", err);
                setError("Impossible de lire le PDF. Veuillez vérifier le fichier.");
            } finally {
                setLoading(false);
            }
        };

        parseFile();
    }, [file, chantier]);

    const handleSend = async () => {
        if (!devis || !client || !email) {
            setError("Les champs N° Devis, Client et Email sont obligatoires.");
            return;
        }

        setSending(true);
        setError(null);

        try {
            // 1. Init Google Auth & getToken
            await initCalendarClient();
            await ensureValidToken();
            const tokenResponse = window.gapi.client.getToken();
            const token = tokenResponse.access_token;

            // 2. Upload to Drive directly
            const metadata = {
                name: file.name,
                parents: ['1TslssfhTFaJ_I2-Hr2mqgtT8a7plnXZCt9_K00Zc8Nur6kjnEr8zJlC5nc8vSz-wZoBML0jb'], // Dossier devis
                mimeType: 'application/pdf',
            };
            const form = new FormData();
            form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
            form.append('file', file, file.name);

            const uploadResp = await fetch(
                'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink',
                {
                    method: 'POST',
                    headers: { Authorization: 'Bearer ' + token },
                    body: form,
                }
            );

            if (!uploadResp.ok) {
                const errTxt = await uploadResp.text();
                throw new Error("Erreur upload Drive: " + uploadResp.status + " " + errTxt);
            }
            const driveData = await uploadResp.json();
            const fileId = driveData.id;
            const driveUrlResult = driveData.webViewLink;

            // 3. Update File Permissions
            await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ role: 'reader', type: 'anyone' }),
            });

            // 4. Send to GAS (Sheet + Mail)
            const ADMIN_API_URL = 'https://script.google.com/macros/s/AKfycbzTS1SgE9Lg3WlFHrC5q-jsfVUXMlk0fGStJQOw2yQGM1AIssJ8-hEtKls5cJTiEvxw/exec';
            const payload = {
                action: "admin_devis",
                horodateur: new Date().toLocaleString('fr-FR'),
                devis: devis.trim(),
                client: client.trim(),
                email: email.trim(),
                cc: cc.trim(),
                fileId: fileId,
                driveUrl: driveUrlResult,
                totalTTC: parseFloat(total) || 0,
                tvaReduced: tvaReduced
            };

            const gasResp = await fetch(ADMIN_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                redirect: 'follow',
                body: JSON.stringify(payload),
            });

            const gasText = await gasResp.text();
            let result;
            try { result = JSON.parse(gasText); } catch { throw new Error("Réponse inattendue du serveur."); }

            if (result.status === "success") {
                // 5. Save the file in local DB (IndexedDB) and update Chantier
                const localFileId = crypto.randomUUID();
                await DB.storeFile(localFileId, file);

                const newAttachments = [...(chantier.attachments || []), {
                    id: localFileId,
                    name: file.name,
                    type: file.type,
                    date: new Date().toISOString()
                }];

                let newNotes = chantier.notes || '';
                if (!newNotes.includes(devis)) {
                    newNotes = newNotes ? `${newNotes}\nDevis N° ${devis}` : `Devis N° ${devis}`;
                }

                updateChantier(chantier.id, {
                    status: COMMERCIAL_STATUS.SENT,
                    dateEnvoi: new Date().toISOString(),
                    extractedQuoteNumber: devis,
                    tvaReduced: tvaReduced,
                    montantTTC: payload.totalTTC,
                    client: client,
                    email: email,
                    notes: newNotes,
                    attachments: newAttachments,
                    updatedAt: new Date().toISOString()
                });

                setSuccess(true);
                setDriveUrl(driveUrlResult);

                // Let the UI breathe, then alert success or auto-close
                setTimeout(() => {
                    if (onSuccess) onSuccess();
                    onClose();
                }, 2500);

            } else {
                throw new Error(result.message || "Erreur serveur inconnue.");
            }

        } catch (err) {
            console.error("Erreur envoi devis admin", err);
            setError(err.message);
        } finally {
            setSending(false);
        }
    };

    if (!chantier) return null;

    return (
        <Modal isOpen={true} onClose={onClose} title="Extraction & Envoi Devis" size="md">

            {loading ? (
                <div className="py-12 flex flex-col items-center justify-center text-slate-500">
                    <Loader2 size={32} className="animate-spin text-brand-500 mb-4" />
                    <p className="font-medium text-sm">Analyse du PDF en cours...</p>
                </div>
            ) : success ? (
                <div className="py-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Devis envoyé avec succès !</h3>
                    <p className="text-sm text-slate-500 max-w-sm mb-6">
                        Le PDF est sur Drive, la ligne est dans le Sheet interne et le mail de demande de signature a été envoyé au client.
                    </p>
                    {driveUrl && (
                        <a href={driveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-600 hover:text-brand-700 underline">
                            Voir le PDF sur Google Drive
                        </a>
                    )}
                </div>
            ) : (
                <div className="flex flex-col gap-5">

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start gap-3">
                            <AlertCircle size={16} className="mt-0.5 shrink-0" />
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-green-500" />
                            Données extraites
                        </h4>
                        {tvaReduced && (
                            <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                                TVA Réduite
                            </span>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mb-1.5">
                                <FileText size={12} /> N° Devis
                            </label>
                            <Input value={devis} onChange={setDevis} placeholder="001804" />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mb-1.5">
                                <User size={12} /> Nom du client
                            </label>
                            <Input value={client} onChange={setClient} placeholder="DA TRAVAUX" />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1.5">
                            <label className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                                <Mail size={12} /> Email du client
                            </label>
                            {!showCc && (
                                <button
                                    onClick={() => setShowCc(true)}
                                    className="text-[11px] font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1 transition-colors"
                                >
                                    <Plus size={10} /> Ajouter CC
                                </button>
                            )}
                        </div>
                        <Input value={email} onChange={setEmail} type="email" placeholder="client@example.com" />
                    </div>

                    {showCc && (
                        <div className="animate-in fade-in slide-in-from-top-2 duration-200">
                            <label className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mb-1.5">
                                <Mail size={12} /> Email en copie (CC)
                            </label>
                            <Input value={cc} onChange={setCc} type="email" placeholder="architecte@example.com" />
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mb-1.5">
                                <MapPin size={12} /> Adresse
                            </label>
                            <Input
                                value={address}
                                onChange={setAddress}
                                placeholder="Adresse du client"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mb-1.5">
                                <Euro size={12} /> Total TTC
                            </label>
                            <Input
                                value={total}
                                onChange={setTotal}
                                placeholder="35207.10"
                                type="number" step="0.01"
                            />
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 p-3 rounded-lg text-xs flex items-center gap-2 mt-2">
                        <Loader2 size={14} className="text-blue-500" />
                        <span>Le PDF sera uploadé automatiquement sur Google Drive</span>
                    </div>

                    <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <Button variant="secondary" onClick={onClose} disabled={sending}>
                            Annuler
                        </Button>
                        <Button
                            variant="primary"
                            onClick={handleSend}
                            disabled={sending}
                            isLoading={sending}
                            icon={Send}
                            className={sending ? 'opacity-80' : ''}
                        >
                            {sending ? 'Envoi en cours...' : 'Envoyer vers Sheet + Mail'}
                        </Button>
                    </div>

                </div>
            )}
        </Modal>
    );
};

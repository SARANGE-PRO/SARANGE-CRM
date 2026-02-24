import React, { useState, useEffect } from 'react';
import {
    X, User, Phone, Mail, MapPin, Euro, FileText, ArrowRight,
    Save, Trash2, Tag, Calendar, Truck, Send, Clock,
    CheckCircle2, UploadCloud, Image as ImageIcon, Loader2, Paperclip
} from 'lucide-react';
import { Modal } from "../ui/Modal.jsx";
import { Button } from "../ui/Button.jsx";
import { Input } from "../ui/Input.jsx";
import { AddressInput } from "../ui/AddressInput.jsx";
import { useApp } from "../../context.js";
import { COMMERCIAL_STATUS } from "../../utils.js";
import { DB } from "../../db.js";
import { SendQuoteAdminModal } from "./SendQuoteAdminModal.jsx";

export const CommercialDetailModal = ({ chantierId, onClose }) => {
    const { state, updateChantier, deleteChantier, promoteLeadToSent, markForRelance, markAsSigned } = useApp();
    const [c, setC] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [uploading, setUploading] = useState(false);

    // Pour la gestion du Devis (Admin Modal)
    const [isDraggingQuote, setIsDraggingQuote] = useState(false);
    const [pendingQuoteFile, setPendingQuoteFile] = useState(null);

    useEffect(() => {
        if (chantierId) {
            const current = state.chantiers.find(x => x.id === chantierId);
            if (current) setC({ ...current });
        }
    }, [chantierId, state.chantiers]);

    if (!c) return null;

    const handleSavePrimaryInfo = () => {
        updateChantier(c.id, {
            client: c.client,
            telephone: c.telephone,
            email: c.email,
            adresse: c.adresse,
            montantTTC: c.montantTTC,
            notes: c.notes,
            dateEnvoiDevis: c.dateEnvoiDevis,
            updatedAt: new Date().toISOString()
        });
        onClose();
    };

    const handleFilesUpload = async (files) => {
        if (!files || files.length === 0) return;
        setUploading(true);
        const newAttachments = [...(c.attachments || [])];
        let parsedData = {};

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const id = crypto.randomUUID();
            const attachmentMeta = { id, name: file.name, type: file.type, date: new Date().toISOString() };
            try {
                await DB.storeFile(id, file);
                newAttachments.push(attachmentMeta);

                // --- Parsing du premier PDF trouvé ---
                if (file.type === "application/pdf" && !parsedData.number) {
                    try {
                        const info = await QuoteParserService.extractQuoteData(file);
                        if (info) {
                            parsedData = info;
                        }
                    } catch (err) {
                        console.error("Erreur parsing PDF", err);
                    }
                }
            } catch (err) {
                console.error("Erreur lors de l'enregistrement du fichier", err);
                alert("Erreur lors de l'enregistrement de " + file.name);
            }
        }

        setC(prev => {
            const updated = {
                ...prev,
                attachments: newAttachments,
                montantTTC: parsedData.totalTTC || prev.montantTTC,
                tvaReduced: parsedData.tvaReduced !== undefined ? parsedData.tvaReduced : prev.tvaReduced,
                extractedQuoteNumber: parsedData.number || prev.extractedQuoteNumber
            };
            if (parsedData.number && (!updated.notes || !updated.notes.includes(parsedData.number))) {
                updated.notes = updated.notes ? `${updated.notes}\nDevis N° ${parsedData.number}` : `Devis N° ${parsedData.number}`;
            }
            updateChantier(updated.id, {
                attachments: newAttachments,
                montantTTC: updated.montantTTC,
                tvaReduced: updated.tvaReduced,
                extractedQuoteNumber: updated.extractedQuoteNumber,
                notes: updated.notes,
                updatedAt: new Date().toISOString()
            });
            return updated;
        });

        setUploading(false);
        setIsDragging(false);
    };

    const handleDrop = (e) => { e.preventDefault(); e.stopPropagation(); setIsDragging(false); handleFilesUpload(e.dataTransfer.files); };
    const handleDragOver = (e) => { e.preventDefault(); e.stopPropagation(); setIsDragging(true); };
    const handleDragLeave = (e) => { e.preventDefault(); e.stopPropagation(); setIsDragging(false); };
    const handleFileInput = (e) => handleFilesUpload(e.target.files);

    const handleDownloadAttachment = async (att) => {
        try {
            const blob = await DB.getFile(att.id);
            if (!blob) { alert("Ce fichier est introuvable sur cet appareil."); return; }
            const url = URL.createObjectURL(blob);
            window.open(url, "_blank");
            setTimeout(() => URL.revokeObjectURL(url), 10000);
        } catch (err) { console.error("Download error", err); }
    };

    const handleDeleteAttachment = async (att) => {
        if (!window.confirm(`Voulez-vous vraiment supprimer "${att.name}" ?`)) return;
        try { await DB.deleteFile(att.id); } catch (err) { console.error("Delete DB file error", err); }
        const newAttachments = (c.attachments || []).filter(a => a.id !== att.id);
        setC(prev => {
            const updated = { ...prev, attachments: newAttachments };
            updateChantier(updated.id, { attachments: newAttachments, updatedAt: new Date().toISOString() });
            return updated;
        });
    };

    const handleDelete = () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce dossier ?")) {
            deleteChantier(c.id);
            onClose();
        }
    };

    const handleQuoteDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDraggingQuote(false);
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            if (files[0].type === "application/pdf") {
                setPendingQuoteFile(files[0]);
            } else {
                alert("Veuillez sélectionner un fichier PDF valide.");
            }
        }
    };

    const handleQuoteDragOver = (e) => { e.preventDefault(); e.stopPropagation(); setIsDraggingQuote(true); };
    const handleQuoteDragLeave = (e) => { e.preventDefault(); e.stopPropagation(); setIsDraggingQuote(false); };
    const handleQuoteFileInput = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setPendingQuoteFile(files[0]);
        }
    };

    return (
        <>
            {/* Modal Principale */}
            <Modal isOpen={!pendingQuoteFile} onClose={onClose} title="Détails du Dossier Commercial" size="lg">
                <div className="flex flex-col gap-5 md:flex-row md:gap-6">

                    {/* ══════════════ COLONNE GAUCHE : INFOS ══════════════ */}
                    <div className="flex-1 flex flex-col gap-4">

                        {/* CONTACT */}
                        <section className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 p-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <User size={14} /> Contact & Coordonnées
                            </h4>
                            <div className="flex flex-col gap-3">

                                {/* Nom */}
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 block mb-1">Nom du Client / Société</label>
                                    <Input value={c.client} onChange={v => setC({ ...c, client: v })} placeholder="Ex: Jean Dupont" className="font-bold text-slate-800" />
                                </div>

                                {/* Tél + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-xs font-semibold text-slate-500 flex items-center gap-1 mb-1"><Phone size={11} /> Téléphone</label>
                                        <Input value={c.telephone || ''} onChange={v => setC({ ...c, telephone: v })} placeholder="06..." type="tel" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-slate-500 flex items-center gap-1 mb-1"><Mail size={11} /> Email</label>
                                        <Input value={c.email || ''} onChange={v => setC({ ...c, email: v })} placeholder="contact@..." type="email" />
                                    </div>
                                </div>

                                {/* Adresse */}
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 flex items-center gap-1 mb-1"><MapPin size={11} /> Adresse</label>
                                    <AddressInput
                                        value={c.adresse || ''}
                                        onChange={(newAddr, zip, city, lat, lng) => setC({ ...c, adresse: newAddr, gps: { lat, lng } })}
                                    />
                                </div>

                                {/* Notes */}
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 flex items-center gap-1 mb-1"><FileText size={11} /> Notes internes</label>
                                    <textarea
                                        value={c.notes || ''}
                                        onChange={e => setC({ ...c, notes: e.target.value })}
                                        className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 text-sm h-28 resize-none"
                                        placeholder="Budget approximatif, horaires pour appeler, compte-rendu..."
                                    />
                                </div>
                            </div>
                        </section>

                        {/* PIÈCES JOINTES */}
                        <section className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 p-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Paperclip size={14} /> Pièces jointes
                                {c.attachments?.length > 0 && (
                                    <span className="ml-auto bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold px-2 py-0.5 rounded-full">
                                        {c.attachments.length}
                                    </span>
                                )}
                            </h4>

                            {/* Drop zone */}
                            <div
                                className={`relative border-2 border-dashed rounded-xl p-5 text-center transition-all ${isDragging
                                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20 scale-[1.01]'
                                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600'
                                    }`}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                            >
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*,.pdf"
                                    onChange={handleFileInput}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    title="Cliquez ou glissez vos fichiers ici"
                                />
                                {uploading ? (
                                    <Loader2 size={28} className="mx-auto text-brand-500 mb-2 animate-spin" />
                                ) : (
                                    <UploadCloud size={28} className={`mx-auto mb-2 transition-colors ${isDragging ? 'text-brand-500' : 'text-slate-300'}`} />
                                )}
                                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                                    {isDragging ? "Relâchez pour ajouter" : "Glissez ou cliquez pour ajouter"}
                                </p>
                                <p className="text-xs text-slate-400 mt-0.5">Photos du chantier, plans, PDF…</p>
                            </div>

                            {/* Liste fichiers */}
                            {c.attachments && c.attachments.length > 0 && (
                                <ul className="mt-3 flex flex-col gap-2">
                                    {c.attachments.map(att => (
                                        <li key={att.id} className="group flex items-center justify-between gap-2 p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                            <button
                                                onClick={() => handleDownloadAttachment(att)}
                                                className="flex items-center gap-2.5 flex-1 text-left hover:text-brand-600 dark:hover:text-brand-400 transition-colors overflow-hidden"
                                            >
                                                <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-md shrink-0">
                                                    {att.type.startsWith('image/') ? <ImageIcon size={14} className="text-blue-500" /> : <FileText size={14} className="text-orange-500" />}
                                                </div>
                                                <div className="overflow-hidden">
                                                    <p className="text-sm font-semibold truncate" title={att.name}>{att.name}</p>
                                                    <p className="text-xs text-slate-400">{new Date(att.date).toLocaleDateString('fr-FR')}</p>
                                                </div>
                                            </button>
                                            <button
                                                onClick={() => handleDeleteAttachment(att)}
                                                className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors shrink-0 opacity-0 group-hover:opacity-100 focus:opacity-100"
                                                title="Supprimer"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>

                        {/* BOUTON ENREGISTRER */}
                        <Button
                            variant="secondary"
                            className="w-full gap-2 text-sm font-semibold text-brand-700 bg-brand-50 border-brand-100 hover:bg-brand-100"
                            onClick={handleSavePrimaryInfo}
                        >
                            <Save size={15} /> Enregistrer les modifications
                        </Button>
                    </div>

                    {/* ══════════════ COLONNE DROITE : DEVIS & ACTIONS ══════════════ */}
                    <div className="flex-1 flex flex-col gap-4">

                        {/* CHIFFRAGE */}
                        <section className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 p-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Euro size={14} /> Chiffrage & Devis
                            </h4>

                            <div className="mb-4">
                                <label className="text-xs font-semibold text-slate-500 block mb-1">Montant Estimé ou Final (TTC)</label>
                                <div className="relative">
                                    <Euro className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-500 pointer-events-none" size={17} />
                                    <input
                                        type="number"
                                        value={c.montantTTC || ''}
                                        onChange={e => setC({ ...c, montantTTC: e.target.value })}
                                        className="w-full pl-9 pr-4 py-2.5 text-lg font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
                                        placeholder="0,00"
                                    />
                                </div>
                            </div>

                            {/* Date d'envoi du devis (Modifiable manuellement) */}
                            {c.status !== COMMERCIAL_STATUS.LEAD && (
                                <div className="mb-5 bg-blue-50/50 hover:bg-blue-50 dark:bg-blue-900/10 dark:hover:bg-blue-900/20 transition-colors border border-blue-100 dark:border-blue-800/50 p-3 rounded-xl">
                                    <label className="text-xs font-semibold text-blue-700 dark:text-blue-400 block mb-1 flex items-center gap-1.5">
                                        <Calendar size={13} /> Date d'envoi (Déclenche les relances)
                                    </label>
                                    <input
                                        type="date"
                                        value={c.dateEnvoiDevis ? c.dateEnvoiDevis.substring(0, 10) : ''}
                                        onChange={e => setC({ ...c, dateEnvoiDevis: new Date(e.target.value).toISOString() })}
                                        className="w-full p-2 text-sm font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 dark:text-slate-300"
                                    />
                                    <p className="text-[10px] text-slate-500 mt-1.5 leading-tight">
                                        Modifiez cette date si vous avez envoyé le devis à la main sans utiliser le bouton d'envoi du CRM. Les relances (J+3, 10, 30) se basent sur ce jour.
                                    </p>
                                </div>
                            )}

                            {/* Quote Drop Zone */}
                            <div
                                className={`relative border-2 border-dashed rounded-xl p-5 text-center transition-all cursor-pointer ${isDraggingQuote
                                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20 scale-[1.01]'
                                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600'
                                    }`}
                                onDrop={handleQuoteDrop}
                                onDragOver={handleQuoteDragOver}
                                onDragLeave={handleQuoteDragLeave}
                            >
                                <input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={handleQuoteFileInput}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    title="Cliquez ou glissez le devis PDF ici"
                                />
                                <FileText size={28} className={`mx-auto mb-2 transition-colors ${isDraggingQuote ? 'text-brand-500' : 'text-slate-300'}`} />
                                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                                    {isDraggingQuote ? "Relâchez le devis ici" : "Aucun devis lié. Glissez un PDF ici"}
                                </p>
                                <p className="text-xs text-slate-400 mt-0.5">ou cliquez pour importer</p>
                                <Button variant="secondary" className="mt-3 text-xs pointer-events-none">
                                    Importer un devis
                                </Button>
                            </div>
                        </section>

                        {/* AVANCEMENT DU DOSSIER */}
                        {c.status !== COMMERCIAL_STATUS.SIGNED && (
                            <section className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 p-4">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    Faire avancer le dossier
                                </h4>
                                <div className="flex flex-col gap-2">
                                    {c.status === COMMERCIAL_STATUS.LEAD && (
                                        <Button
                                            variant="primary"
                                            className="w-full text-sm"
                                            icon={Send}
                                            onClick={() => promoteLeadToSent(c.id, c.montantTTC)}
                                        >
                                            Passer en "Devis Envoyé" (Manuel)
                                        </Button>
                                    )}
                                    {c.status === COMMERCIAL_STATUS.SENT && (
                                        <Button
                                            variant="secondary"
                                            className="w-full text-sm bg-orange-50 text-orange-700 hover:bg-orange-100 border-orange-100 font-medium"
                                            icon={Clock}
                                            onClick={() => markForRelance(c.id)}
                                        >
                                            Passer en "Relance"
                                        </Button>
                                    )}
                                    {(c.status === COMMERCIAL_STATUS.SENT || c.status === COMMERCIAL_STATUS.RELANCE) && (
                                        <Button
                                            variant="secondary"
                                            className="w-full text-sm bg-green-50 text-green-700 hover:bg-green-100 border-green-100 font-bold"
                                            icon={CheckCircle2}
                                            onClick={() => markAsSigned(c.id)}
                                        >
                                            ✨ Marquer comme "Gagné / Signé"
                                        </Button>
                                    )}
                                </div>
                            </section>
                        )}

                        {/* DEAL SIGNÉ */}
                        {c.status === COMMERCIAL_STATUS.SIGNED && (
                            <section className="relative overflow-hidden bg-green-50 dark:bg-green-900/20 rounded-xl border-2 border-green-400 dark:border-green-600 p-5">
                                {/* Décoration */}
                                <div className="absolute top-0 right-0 w-36 h-36 bg-green-100 dark:bg-green-800/20 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h4 className="text-lg font-bold text-green-800 dark:text-green-300">🎉 Deal Gagné !</h4>
                                        <span className="shrink-0 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Signé</span>
                                    </div>
                                    <p className="text-sm text-green-700 dark:text-green-400 mb-4">
                                        Le devis est signé. Où souhaitez-vous envoyer ce dossier ?
                                    </p>

                                    <div className="flex flex-col gap-3">
                                        <Button
                                            variant="primary"
                                            className="w-full justify-start h-auto py-3 px-4"
                                            onClick={() => { updateChantier(c.id, { assignation: 'METRAGE' }); onClose(); }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="bg-white/20 p-2 rounded-full shrink-0"><MapPin size={17} /></div>
                                                <div className="text-left">
                                                    <p className="font-bold text-white text-sm">Bureau d'Études</p>
                                                    <p className="text-xs text-green-100 font-normal">Un métreur doit se rendre sur place avant fabrication.</p>
                                                </div>
                                            </div>
                                        </Button>

                                        <Button
                                            variant="secondary"
                                            className="w-full justify-start h-auto py-3 px-4 bg-white border-slate-200 dark:border-slate-600"
                                            onClick={() => { updateChantier(c.id, { assignation: 'ATELIER' }); onClose(); }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full shrink-0"><Truck size={17} className="text-slate-500" /></div>
                                                <div className="text-left">
                                                    <p className="font-bold text-slate-700 dark:text-slate-200 text-sm">Directement à l'Atelier</p>
                                                    <p className="text-xs text-slate-500 font-normal">Métrage déjà fourni. Prêt pour la fabrication.</p>
                                                </div>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* ZONE DESTRUCTIVE */}
                        <div className="mt-auto pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                            <button
                                onClick={handleDelete}
                                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-500 transition-colors py-1 px-2 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20"
                            >
                                <Trash2 size={12} /> Supprimer ce dossier
                            </button>
                        </div>
                    </div>

                </div>
            </Modal>

            {/* Modal SendQuoteAdminModal quand un fichier est lâché */}
            {pendingQuoteFile && (
                <SendQuoteAdminModal
                    file={pendingQuoteFile}
                    chantierId={c.id}
                    onClose={() => setPendingQuoteFile(null)}
                    onSuccess={() => {
                        setPendingQuoteFile(null);
                        onClose(); // Ferme aussi la modale principale si c'est un succès
                    }}
                />
            )}
        </>
    );
};

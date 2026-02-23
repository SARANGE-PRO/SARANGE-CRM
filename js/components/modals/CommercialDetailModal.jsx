import React, { useState, useEffect } from 'react';
import { X, User, Phone, Mail, MapPin, Euro, FileText, ArrowRight, Save, Trash2, Tag, Calendar, Truck, Send, Clock, CheckCircle2 } from 'lucide-react';
import { Modal } from "../ui/Modal.jsx";
import { Button } from "../ui/Button.jsx";
import { Input } from "../ui/Input.jsx";
import { AddressInput } from "../ui/AddressInput.jsx";
import { useApp } from "../../context.js";
import { COMMERCIAL_STATUS } from "../../utils.js";

export const CommercialDetailModal = ({ chantierId, onClose }) => {
    const { state, updateChantier, deleteChantier, promoteLeadToSent, markForRelance, markAsSigned } = useApp();
    const [c, setC] = useState(null);

    useEffect(() => {
        if (chantierId) {
            const current = state.chantiers.find(x => x.id === chantierId);
            if (current) setC({ ...current }); // Copy for local editing
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
            updatedAt: new Date().toISOString()
        });
        // Feedback could be a toast here, assuming global toast exists, otherwise modal closes.
        onClose();
    };

    const handleDelete = () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce dossier ?")) {
            deleteChantier(c.id);
            onClose();
        }
    };

    return (
        <Modal isOpen={true} onClose={onClose} title="Détails du Dossier Commercial" size="lg">
            <div className="flex flex-col gap-6 md:flex-row">

                {/* LEFT COL: INFO */}
                <div className="flex-1 space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h4 className="text-sm font-bold text-slate-500 mb-3 flex items-center gap-2 uppercase tracking-wide">
                            <User size={16} /> Contact & Coordonnées
                        </h4>

                        <div className="space-y-3">
                            <div>
                                <label className="text-xs font-semibold text-slate-500 ml-1">Nom du Client / Société</label>
                                <Input value={c.client} onChange={v => setC({ ...c, client: v })} placeholder="Ex: Jean Dupont" className="font-bold text-slate-800" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 ml-1 flex items-center gap-1"><Phone size={12} /> Téléphone</label>
                                    <Input value={c.telephone || ''} onChange={v => setC({ ...c, telephone: v })} placeholder="06..." type="tel" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 ml-1 flex items-center gap-1"><Mail size={12} /> Email</label>
                                    <Input value={c.email || ''} onChange={v => setC({ ...c, email: v })} placeholder="@" type="email" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-500 ml-1 flex items-center gap-1"><MapPin size={12} /> Adresse</label>
                                <AddressInput
                                    value={c.adresse || ''}
                                    onChange={(newAddr, zip, city, lat, lng) => setC({ ...c, adresse: newAddr, gps: { lat, lng } })}
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-slate-500 ml-1 flex items-center gap-1"><Tag size={12} /> Origine du Lead (Source)</label>
                                <select
                                    className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
                                    value={c.source || 'Autre'}
                                    onChange={e => setC({ ...c, source: e.target.value })}
                                >
                                    <option value="Site Web">Site Web</option>
                                    <option value="Téléphone">Téléphone</option>
                                    <option value="Email">Email</option>
                                    <option value="Bouche à oreille">Bouche à oreille</option>
                                    <option value="Réseaux Sociaux">Réseaux Sociaux</option>
                                    <option value="Autre">Autre</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-slate-500 ml-1 flex items-center gap-1"><Calendar size={12} /> Historique & Notes Internes</label>
                                <textarea
                                    value={c.notes || ''}
                                    onChange={e => setC({ ...c, notes: e.target.value })}
                                    className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 text-sm h-32 resize-none"
                                    placeholder="Budget approximatif, horaires pour appeler, compte-rendu d'appel..."
                                />
                            </div>
                        </div>

                        <Button variant="secondary" className="w-full mt-4 gap-2 text-sm text-brand-700 bg-brand-50 border-brand-100 hover:bg-brand-100" onClick={handleSavePrimaryInfo}>
                            <Save size={16} /> Enregistrer les infos
                        </Button>
                    </div>
                </div>

                {/* RIGHT COL: DEVIS & ACTIONS */}
                <div className="flex-1 space-y-4">

                    {/* ENCART CHIFFRAGE */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h4 className="text-sm font-bold text-slate-500 mb-3 flex items-center gap-2 uppercase tracking-wide">
                            <Euro size={16} /> Chiffrage & Devis
                        </h4>

                        <div className="mb-4">
                            <label className="text-xs font-semibold text-slate-500 ml-1">Montant Estimé ou Final (TTC)</label>
                            <div className="relative mt-1">
                                <Euro className="absolute left-3 top-3 text-brand-500" size={18} />
                                <input
                                    type="number"
                                    value={c.montantTTC || ''}
                                    onChange={e => setC({ ...c, montantTTC: e.target.value })}
                                    className="w-full pl-10 pr-4 py-2.5 text-lg font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500"
                                    placeholder="0,00"
                                />
                            </div>
                        </div>

                        {/* ZONE PLACEHOLDER POUR L'UPLOAD PDF (PROGES25/PRODEV) */}
                        <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center bg-white dark:bg-slate-900">
                            <FileText size={32} className="mx-auto text-slate-300 mb-2" />
                            <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Aucun devis lié</p>
                            <p className="text-xs text-slate-400 mt-1">L'import Proges25 sera disponible ici.</p>
                            <Button variant="secondary" className="mt-3 text-xs opacity-50 cursor-not-allowed">Importer un devis</Button>
                        </div>
                    </div>

                    {/* CHANGEMENT DE STATUT RAPIDE */}
                    {c.status !== COMMERCIAL_STATUS.SIGNED && (
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                            <h4 className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wide">
                                Faire avancer le dossier
                            </h4>
                            <div className="flex flex-col gap-2">
                                {c.status === COMMERCIAL_STATUS.LEAD && (
                                    <Button
                                        variant="primary"
                                        className="w-full text-sm shadow-sm"
                                        icon={Send}
                                        onClick={() => {
                                            promoteLeadToSent(c.id, c.montantTTC);
                                            // onClose(); Optional: you can choose to keep it open or close it
                                        }}
                                    >
                                        Marquer comme "Devis Envoyé"
                                    </Button>
                                )}
                                {c.status === COMMERCIAL_STATUS.SENT && (
                                    <Button
                                        variant="secondary"
                                        className="w-full text-sm bg-orange-100/50 text-orange-700 hover:bg-orange-100 border-none font-medium"
                                        icon={Clock}
                                        onClick={() => {
                                            markForRelance(c.id);
                                        }}
                                    >
                                        Passer en "Relance"
                                    </Button>
                                )}
                                {(c.status === COMMERCIAL_STATUS.SENT || c.status === COMMERCIAL_STATUS.RELANCE) && (
                                    <Button
                                        variant="secondary"
                                        className="w-full text-sm bg-green-100/50 text-green-700 hover:bg-green-100 border-none mt-2 font-bold"
                                        icon={CheckCircle2}
                                        onClick={() => {
                                            markAsSigned(c.id);
                                        }}
                                    >
                                        ✨ Afficher "Gagné / Signé" ! ✨
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* ACTIONS GLOBALES - BIFURCATION WORKFLOW */}
                    {c.status === COMMERCIAL_STATUS.SIGNED && (
                        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-2 border-green-400 dark:border-green-600 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 dark:bg-green-800/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <h4 className="text-lg font-bold text-green-800 dark:text-green-300 mb-1 relative z-10">🎉 Deal Gagné !</h4>
                            <p className="text-sm text-green-700 dark:text-green-400 mb-4 relative z-10">Le devis est signé. Où souhaitez-vous envoyer ce dossier pour la suite de la production ?</p>

                            <div className="space-y-3 relative z-10">
                                <Button
                                    variant="primary"
                                    className="w-full justify-start text-left h-auto py-3 px-4 shadow-sm"
                                    onClick={() => {
                                        updateChantier(c.id, { assignation: 'METRAGE' });
                                        onClose();
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-full"><MapPin size={18} /></div>
                                        <div>
                                            <div className="font-bold text-white">Option A : Bureau d'Études</div>
                                            <div className="text-xs text-green-100 font-normal">Un métreur doit se rendre sur place avant fabrication.</div>
                                        </div>
                                    </div>
                                </Button>

                                <Button
                                    variant="secondary"
                                    className="w-full justify-start text-left h-auto py-3 px-4 shadow-sm border-slate-300 dark:border-slate-600 bg-white"
                                    onClick={() => {
                                        updateChantier(c.id, { assignation: 'ATELIER' });
                                        onClose();
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full text-slate-500"><Truck size={18} /></div>
                                        <div>
                                            <div className="font-bold text-slate-700 dark:text-slate-200">Option B : Directement à l'Atelier</div>
                                            <div className="text-xs text-slate-500 font-normal">Métrage déjà fourni. Prêt pour la fabrication.</div>
                                        </div>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    )}

                    <div className="pt-4 flex justify-end">
                        <button onClick={handleDelete} className="text-xs text-slate-400 hover:text-red-500 flex items-center gap-1 transition-colors">
                            <Trash2 size={12} /> Supprimer ce dossier
                        </button>
                    </div>

                </div>
            </div>
        </Modal>
    );
};

import React, { useState } from 'react';
import { UserCheck } from 'lucide-react';
import { Button } from "./ui/Button.jsx"; // Adjusted path
import { Input } from "./ui/Input.jsx"; // Adjusted path
import { SelectToggle } from "./ui/SelectToggle.jsx"; // Adjusted path
import { Card } from "./ui/Card.jsx"; // Adjusted path
import { AddressInput } from "./ui/AddressInput.jsx"; // Adjusted path
// AddToCalendarBtn path: js/components/AddToCalendarBtn.jsx
// This file is in js/components/EditChantierModal.jsx ? No, I'll put it in js/components/
import AddToCalendarBtn from "./AddToCalendarBtn.jsx";
import { manageGoogleEvent } from "../utils/googleCalendar.js";

export const EditChantierModal = ({ chantier, onClose, onUpdate }) => {
    const [f, setF] = useState({ ...chantier });
    const setAddr = (v, field = 'adresse') => {
        if (typeof v === 'object') setF({ ...f, [field]: v.address, gps: v.gps });
        else setF({ ...f, [field]: v });
    };

    const sub = async () => {
        if (!f.client) return alert('Nom requis');
        if (f.typeContrat === 'SOUS_TRAITANCE' && (!f.clientFinal || !f.adresseFinale)) return alert('Client final requis');

        // 1. Mise à jour Locale (Immédiate)
        onUpdate(f);
        onClose();

        // 2. Synchro Google Calendar (Arrière-plan silencieux)
        if (f.dateIntervention) {
            try {
                const eventId = await manageGoogleEvent(f);
                if (eventId && eventId !== f.googleEventId) {
                    onUpdate({ ...f, googleEventId: eventId });
                }
            } catch (e) {
                console.error("Silent GCal Sync Fail", e);
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-0 md:p-4 animate-fade-in">
            <Card className="w-full max-w-md p-6 shadow-2xl rounded-t-2xl md:rounded-2xl max-h-[95vh] overflow-y-auto animate-slide-up md:animate-fade-in">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-xl font-bold dark:text-white">Modifier le dossier</h2>
                        <p className="text-xs text-slate-400 mt-1">ID : {f.id.slice(0, 8)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <AddToCalendarBtn chantier={f} />
                        <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 dark:bg-slate-800 rounded-full transition-colors">✕</button>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                        <label className="block text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-wider">Planification</label>
                        <Input
                            label="Date d'intervention"
                            type="datetime-local"
                            value={f.dateIntervention || ''}
                            onChange={v => setF({ ...f, dateIntervention: v })}
                        />
                        <p className="text-[10px] font-medium text-slate-400 mt-2">
                            {f.dateIntervention
                                ? "✅ Ce dossier passera en PLANNING"
                                : "⚠️ Sans date, ce dossier reste en À PLANIFIER"}
                        </p>
                    </div>

                    <Input label="Nom Client" value={f.client} onChange={v => setF({ ...f, client: v })} />
                    <AddressInput value={f.adresse} onChange={v => typeof v === 'object' ? setF({ ...f, adresse: v.address, gps: v.gps }) : setF({ ...f, adresse: v })} />

                    <div className="grid grid-cols-2 gap-4">
                        <Input label="Tél" value={f.telephone} onChange={v => setF({ ...f, telephone: v })} type="tel" inputMode="tel" pattern="[0-9]*" />
                        <Input label="Email" value={f.email} onChange={v => setF({ ...f, email: v })} type="email" inputMode="email" />
                    </div>

                    <SelectToggle
                        label="Contrat"
                        value={f.typeContrat}
                        onChange={v => setF({ ...f, typeContrat: v })}
                        options={[
                            { label: 'Fourniture Seule', value: 'FOURNITURE_SEULE' },
                            { label: 'Fourniture & Pose', value: 'FOURNITURE_ET_POSE' },
                            { label: 'Sous-traitance', value: 'SOUS_TRAITANCE' }
                        ]}
                    />

                    {f.typeContrat === 'SOUS_TRAITANCE' && (
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800 animate-fade-in">
                            <h3 className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-2 uppercase flex items-center"><UserCheck size={14} className="mr-1" /> Client Final</h3>
                            <Input label="Nom Final" value={f.clientFinal} onChange={v => setF({ ...f, clientFinal: v })} />
                            <AddressInput value={f.adresseFinale} onChange={v => setAddr(v, 'adresseFinale')} />
                        </div>
                    )}
                </div>

                <div className="flex gap-3 mt-8 pb-4">
                    <Button variant="secondary" onClick={onClose} className="flex-1">Annuler</Button>
                    <Button onClick={sub} className="flex-1">Enregistrer</Button>
                </div>
            </Card>
        </div>
    );
};

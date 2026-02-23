import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import { Button } from "./ui/Button.jsx";
import { Input } from "./ui/Input.jsx";
import { SelectToggle } from "./ui/SelectToggle.jsx";
import { Card } from "./ui/Card.jsx";
import { AddressInput } from "./ui/AddressInput.jsx";

export const NewLeadModal = ({ onClose, onSubmit }) => {
    const [f, setF] = useState({ client: '', telephone: '', email: '', adresse: '', source: 'Site Web', notes: '' });

    const handleAddressChange = (v) => {
        if (typeof v === 'object') setF({ ...f, adresse: v.address });
        else setF({ ...f, adresse: v });
    };

    const handleSubmit = () => {
        if (!f.client.trim()) return alert('Le nom du client est requis pour un lead.');
        onSubmit(f);
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-end md:items-center justify-center p-0 md:p-4 animate-fade-in">
            <Card className="w-full max-w-md p-6 shadow-2xl rounded-t-2xl md:rounded-2xl max-h-[95vh] overflow-y-auto animate-slide-up md:animate-fade-in">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-xl font-bold dark:text-white flex items-center gap-2">
                            <Zap className="text-brand-500" size={24} />
                            Nouveau Lead
                        </h2>
                        <p className="text-xs text-slate-400 mt-1">Saisie rapide pour un premier contact</p>
                    </div>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 dark:bg-slate-800 rounded-full transition-colors">✕</button>
                </div>

                <div className="space-y-4">
                    <Input label="Nom / Prénom Client *" value={f.client} onChange={v => setF({ ...f, client: v })} autoFocus />

                    <div className="grid grid-cols-2 gap-4">
                        <Input label="Tél" value={f.telephone} onChange={v => setF({ ...f, telephone: v })} type="tel" inputMode="tel" pattern="[0-9]*" />
                        <Input label="Email" value={f.email} onChange={v => setF({ ...f, email: v })} type="email" inputMode="email" />
                    </div>

                    <AddressInput value={f.adresse} onChange={handleAddressChange} />

                    <SelectToggle
                        label="Source du Lead"
                        value={f.source}
                        onChange={v => setF({ ...f, source: v })}
                        options={[
                            { label: 'Site Web', value: 'Site Web' },
                            { label: 'Téléphone', value: 'Téléphone' },
                            { label: 'Bouche-a-oreille', value: 'Bouche-à-oreille' },
                            { label: 'Autre', value: 'Autre' }
                        ]}
                    />

                    <div className="relative">
                        <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">Description / Projet</label>
                        <textarea
                            className="w-full p-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-brand-500 transition-colors text-sm min-h-[100px] resize-none text-slate-800 dark:text-slate-200"
                            placeholder="Quels sont les besoins du client ?"
                            value={f.notes}
                            onChange={e => setF({ ...f, notes: e.target.value })}
                        />
                    </div>
                </div>

                <div className="flex gap-3 mt-8 pb-4">
                    <Button variant="secondary" onClick={onClose} className="flex-1 py-3 text-base">Annuler</Button>
                    <Button onClick={handleSubmit} variant="primary" className="flex-1 py-3 text-base">Créer le Lead</Button>
                </div>
            </Card>
        </div>
    );
};

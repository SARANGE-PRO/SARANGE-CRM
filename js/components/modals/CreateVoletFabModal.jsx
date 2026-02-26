import React, { useState, useMemo } from 'react';
import { Modal } from '../ui/Modal.jsx';
import { Input } from '../ui/Input.jsx';
import { Button } from '../ui/Button.jsx';

/**
 * Formulaire de fabrication Volet Roulant — Fidèle à la fiche Excel existante.
 * 
 * Champs auto-calculés (Excel) :
 * - Largeur coffre = Largeur - 10
 * - Axe            = Largeur - 85
 * - Largeur lame   = Largeur - 65
 * - Nombre lames   = PLAFOND(Hauteur / 43)
 *
 * @param {boolean} props.isOpen
 * @param {function} props.onClose
 * @param {function} props.onSubmit - reçoit les données du volet
 */
export const CreateVoletFabModal = ({ isOpen, onClose, onSubmit }) => {
    const [form, setForm] = useState({
        ref_client: '',
        hauteur: '',
        largeur: '',
        couleur: 'Blanc',
        sortie: 'Droite',
        type_manoeuvre: 'Filaire'
    });

    const handleChange = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    // --- Champs auto-calculés (formules Excel) ---
    const computed = useMemo(() => {
        const h = parseFloat(form.hauteur) || 0;
        const l = parseFloat(form.largeur) || 0;
        return {
            largeur_coffre: l > 0 ? l - 10 : '',
            axe: l > 0 ? l - 85 : '',
            largeur_lame: l > 0 ? l - 65 : '',
            nombre_lame: h > 0 ? Math.ceil(h / 43) : ''
        };
    }, [form.hauteur, form.largeur]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.hauteur || !form.largeur) {
            alert('Veuillez renseigner au minimum la Hauteur et la Largeur.');
            return;
        }
        onSubmit({
            ref_client: form.ref_client,
            hauteur: Number(form.hauteur),
            largeur: Number(form.largeur),
            largeur_coffre: computed.largeur_coffre,
            axe: computed.axe,
            largeur_lame: computed.largeur_lame,
            nombre_lame: computed.nombre_lame,
            couleur: form.couleur,
            sortie: form.sortie,
            type_manoeuvre: form.type_manoeuvre
        });
        // Reset
        setForm({ ref_client: '', hauteur: '', largeur: '', couleur: 'Blanc', sortie: 'Droite', type_manoeuvre: 'Filaire' });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="🏭 Fiche Fabrication — Volet Roulant" size="md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Référence client */}
                <section className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 p-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                        📋 Référence
                    </h4>
                    <div>
                        <label className="text-xs font-semibold text-slate-500 block mb-1">Réf. Client / Repère</label>
                        <Input
                            value={form.ref_client}
                            onChange={v => handleChange('ref_client', v)}
                            placeholder="Ex: VR-01, Cuisine, Repère 3..."
                        />
                    </div>
                </section>

                {/* Dimensions (saisie + auto-calculés) */}
                <section className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 p-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                        📐 Dimensions (mm)
                    </h4>

                    {/* Champs de saisie */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="text-xs font-semibold text-slate-500 block mb-1">
                                Hauteur <span className="text-rose-400">*</span>
                            </label>
                            <Input
                                type="number"
                                value={form.hauteur}
                                onChange={v => handleChange('hauteur', v)}
                                placeholder="mm"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-slate-500 block mb-1">
                                Largeur <span className="text-rose-400">*</span>
                            </label>
                            <Input
                                type="number"
                                value={form.largeur}
                                onChange={v => handleChange('largeur', v)}
                                placeholder="mm"
                            />
                        </div>
                    </div>

                    {/* Champs auto-calculés (lecture seule, affichés en temps réel) */}
                    {(form.hauteur || form.largeur) && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-brand-50 dark:bg-brand-900/10 rounded-lg border border-brand-100 dark:border-brand-800/50">
                            <div className="text-center">
                                <p className="text-[10px] font-bold text-brand-500 uppercase tracking-wide">Larg. Coffre</p>
                                <p className="text-lg font-bold text-brand-700 dark:text-brand-300">
                                    {computed.largeur_coffre || '—'}
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-bold text-brand-500 uppercase tracking-wide">Axe</p>
                                <p className="text-lg font-bold text-brand-700 dark:text-brand-300">
                                    {computed.axe || '—'}
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-bold text-brand-500 uppercase tracking-wide">Larg. Lame</p>
                                <p className="text-lg font-bold text-brand-700 dark:text-brand-300">
                                    {computed.largeur_lame || '—'}
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-bold text-brand-500 uppercase tracking-wide">Nb Lames</p>
                                <p className="text-lg font-bold text-brand-700 dark:text-brand-300">
                                    {computed.nombre_lame || '—'}
                                </p>
                            </div>
                        </div>
                    )}
                </section>

                {/* Options Fabrication */}
                <section className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 p-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                        🎨 Options Fabrication
                    </h4>
                    <div className="flex flex-col gap-4">
                        {/* Couleur */}
                        <div>
                            <label className="text-xs font-semibold text-slate-500 block mb-1">Couleur</label>
                            <select
                                value={form.couleur}
                                onChange={e => handleChange('couleur', e.target.value)}
                                className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-700 dark:text-slate-300"
                            >
                                <option value="Blanc">Blanc</option>
                                <option value="Gris 7016">Gris 7016</option>
                                <option value="Chêne doré">Chêne doré</option>
                                <option value="Noir">Noir</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>

                        {/* Sortie + Manœuvre */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs font-semibold text-slate-500 block mb-1">Sortie Câble</label>
                                <select
                                    value={form.sortie}
                                    onChange={e => handleChange('sortie', e.target.value)}
                                    className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-700 dark:text-slate-300"
                                >
                                    <option value="Droite">Droite</option>
                                    <option value="Gauche">Gauche</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-500 block mb-1">Type Manœuvre</label>
                                <select
                                    value={form.type_manoeuvre}
                                    onChange={e => handleChange('type_manoeuvre', e.target.value)}
                                    className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-700 dark:text-slate-300"
                                >
                                    <option value="Filaire">Filaire</option>
                                    <option value="Radio">Radio</option>
                                    <option value="Manuel">Manuel</option>
                                    <option value="Solaire">Solaire</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Boutons */}
                <div className="flex gap-3 pt-1">
                    <Button
                        type="button"
                        variant="secondary"
                        className="flex-1"
                        onClick={onClose}
                    >
                        Annuler
                    </Button>
                    <Button
                        type="submit"
                        variant="primary"
                        className="flex-1"
                    >
                        Créer l'OF Volet
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

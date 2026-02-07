import React, { useState, useEffect, useRef } from 'react';
import { X, Save, Lock, AlertCircle, AlertTriangle, ChevronUp, ChevronDown, Camera, Droplets } from 'lucide-react';
import { compressImage, ValidationService } from "../utils.js";
import { Button } from "./ui/Button.jsx";
import { Input } from "./ui/Input.jsx";
import { SelectToggle } from "./ui/SelectToggle.jsx";
import { DrawingCanvas } from "./DrawingCanvas.jsx";
import { useApp } from "../context.js";

export const ProductEditor = ({ product: init, onSave, onCancel, isReadOnly = false }) => {
    const [p, setP] = useState(init), [err, setErr] = useState([]), [adv, setAdv] = useState(false), [stG200, setStG200] = useState(false), fRef = useRef(null), { state } = useApp();

    // Disable updates if readOnly
    const up = (k, v) => { if (isReadOnly) return; setP(x => ({ ...x, [k]: v })); };
    const upN = (par, k, v) => { if (isReadOnly) return; setP(x => ({ ...x, [par]: { ...(x[par] || {}), [k]: v } })); };

    const hRm = v => { if (isReadOnly) return; up('room', v); if (/sdb|salle\s?de\s?bain|toilette|wc|douche/i.test(v.toLowerCase()) && ['FENETRE', 'BAIE_COULISSANTE'].includes(p.type) && !p.vitrageFlags?.g200) { setP(prev => ({ ...prev, vitrageFlags: { ...prev.vitrageFlags, standard: true, g200: true } })); setStG200(true); setTimeout(() => setStG200(false), 3000) } };
    useEffect(() => { if (p.type === 'FENETRE' && p.hauteurMm > 2200) setP(x => ({ ...x, oscilloBattant: false })) }, [p.hauteurMm]);
    const sv = () => { if (isReadOnly) return; const c = ValidationService.validateProduct(p); if (!c.isValid) { setErr(c.errors); setTimeout(() => { const el = document.getElementById(`field-${c.errors[0]}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }) }, 100); return } onSave({ ...p, isValid: true, validationErrors: [] }) };
    const hPh = async e => { if (isReadOnly) return; if (e.target.files && e.target.files[0]) { const c = await compressImage(e.target.files[0]); up('photos', [...(p.photos || []), c]) } };
    const isE = f => err.includes(f);

    const lockedInput = isReadOnly ? 'opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-800' : '';

    return (
        <div className="fixed inset-0 bg-slate-50 dark:bg-slate-950 z-50 flex flex-col h-full animate-fade-in">
            {/* Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pb-3 pt-3 safe-top-padding flex justify-between items-center shadow-sm shrink-0">
                <button onClick={onCancel} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                    <X size={24} className="text-slate-500" />
                </button>
                <div className="text-center">
                    <h2 className="font-bold dark:text-white">Produit #{String(p.index).padStart(2, '0')}</h2>
                    {isReadOnly && <span className="text-xs text-green-600 font-medium flex items-center justify-center gap-1"><Lock size={12} /> Consultation</span>}
                </div>
                {isReadOnly ? (
                    <div className="w-[76px]" /> /* Same width as Save button for centering */
                ) : (
                    <Button onClick={sv} className="px-5 py-2 rounded-full" icon={Save}>Valider</Button>
                )}
            </div>

            {/* Read-only banner */}
            {isReadOnly && (
                <div className="bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800 px-4 py-2 text-center">
                    <span className="text-sm text-green-700 dark:text-green-300 font-medium flex items-center justify-center gap-2">
                        <Lock size={14} /> Dossier verrouillé — consultation seule
                    </span>
                </div>
            )}

            <div className="flex-1 overflow-y-auto p-4 pb-20 max-w-3xl mx-auto w-full">
                {err.length > 0 && <div className="mb-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300 p-3 rounded-lg flex items-center"><AlertCircle size={20} className="mr-2" /><span>Champs manquants</span></div>}

                <div className="space-y-4">
                    {/* Type & Quantity */}
                    <div className={`bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 ${lockedInput}`}>
                        <SelectToggle label="Type" value={p.type} onChange={v => up('type', v)} disabled={isReadOnly} options={[{ label: 'Fenêtre', value: 'FENETRE' }, { label: 'Porte-fenêtre', value: 'PORTE_FENETRE' }, { label: 'Coulissant', value: 'BAIE_COULISSANTE' }, { label: 'Porte Entrée', value: 'PORTE_ENTREE' }, { label: 'Porte Service', value: 'PORTE_SERVICE' }, { label: 'Volet', value: 'VOLET_ROULANT' }, { label: 'Autre', value: 'AUTRE' }]} />
                        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-3 rounded-lg mb-4 border border-slate-100 dark:border-slate-700">
                            <span className="font-medium text-slate-700 dark:text-slate-300">Quantité</span>
                            <div className="flex items-center gap-4">
                                <button className={`w-8 h-8 rounded-full bg-white dark:bg-slate-700 shadow text-brand-600 font-bold ${isReadOnly ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => up('quantity', Math.max(1, (p.quantity || 1) - 1))} disabled={isReadOnly}>-</button>
                                <span className="font-bold text-xl w-6 text-center dark:text-white">{p.quantity || 1}</span>
                                <button className={`w-8 h-8 rounded-full bg-white dark:bg-slate-700 shadow text-brand-600 font-bold ${isReadOnly ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => up('quantity', (p.quantity || 1) + 1)} disabled={isReadOnly}>+</button>
                            </div>
                        </div>
                        <Input label="Localisation" value={p.room} onChange={hRm} placeholder="Ex: Cuisine" disabled={isReadOnly} />
                        {p.type === 'AUTRE' && <Input id="field-description" label="Description" value={p.description} onChange={v => up('description', v)} error={isE('description')} disabled={isReadOnly} />}
                        <div className="grid grid-cols-2 gap-4">
                            <Input id="field-largeurMm" label="Largeur (mm)" type="number" inputMode="decimal" step="any" pattern="[0-9]*" value={p.largeurMm} onChange={v => up('largeurMm', parseInt(v))} error={isE('largeurMm')} disabled={isReadOnly} />
                            <Input id="field-hauteurMm" label="Hauteur (mm)" type="number" inputMode="decimal" step="any" pattern="[0-9]*" value={p.hauteurMm} onChange={v => up('hauteurMm', parseInt(v))} error={isE('hauteurMm')} disabled={isReadOnly} />
                        </div>
                        {(ValidationService.isMeasureSuspicious(p.largeurMm, p.monobloc) || ValidationService.isMeasureSuspicious(p.hauteurMm, p.monobloc)) && <div className="text-orange-500 text-xs flex items-center mt-[-10px] mb-4"><AlertTriangle size={12} className="mr-1" /> Attention: Cotes &lt;300mm</div>}
                    </div>

                    {/* Caractéristiques */}
                    {['FENETRE', 'PORTE_FENETRE', 'BAIE_COULISSANTE', 'PORTE_ENTREE', 'PORTE_SERVICE'].includes(p.type) && (
                        <div className={`bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 ${lockedInput}`}>
                            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider">Caractéristiques</h3>
                            <SelectToggle id="field-matiere" label="Matière" value={p.matiere} onChange={v => up('matiere', v)} error={isE('matiere')} disabled={isReadOnly} options={[{ label: 'PVC', value: 'PVC' }, { label: 'Alu', value: 'ALU' }]} />
                            {p.matiere && <SelectToggle id="field-profil" label="Profil" value={p.profil} onChange={v => up('profil', v)} error={isE('profil')} disabled={isReadOnly} options={p.matiere === 'PVC' ? [{ label: 'Réno 40', value: 'RENO_40' }, { label: 'Réno 60', value: 'RENO_60' }, { label: 'Neuf', value: 'NEUF' }, { label: 'ISO', value: 'ISO' }, { label: 'Autre', value: 'AUTRE' }] : [{ label: 'Réno', value: 'RENO' }, { label: 'Neuf', value: 'NEUF' }, { label: 'Autre', value: 'AUTRE' }]} />}
                            {p.profil === 'ISO' && <Input id="field-isoMm" label="Aile ISO (mm)" type="number" inputMode="decimal" step="any" pattern="[0-9]*" value={p.isoMm} onChange={v => up('isoMm', parseInt(v))} error={isE('isoMm')} disabled={isReadOnly} />}
                            {p.profil === 'AUTRE' && <Input id="field-profilAutre" label="Profil personnalisé" placeholder="Préciser le profil..." value={p.profilAutre} onChange={v => up('profilAutre', v)} error={isE('profilAutre')} disabled={isReadOnly} />}
                            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                <SelectToggle id="field-couleur" label="Couleur" value={p.couleur} onChange={v => up('couleur', v)} error={isE('couleur')} disabled={isReadOnly} options={p.matiere === 'PVC' ? [{ label: 'Blanc', value: 'BLANC' }, { label: 'Bicolor 7016', value: 'BICOLOR_7016' }, { label: 'Autre', value: 'AUTRE' }] : [{ label: 'Blanc', value: 'BLANC' }, { label: 'Gris 7016', value: 'GRIS_7016' }, { label: 'Autre', value: 'AUTRE' }]} />
                                {p.couleur === 'AUTRE' && <Input id="field-couleurAutre" placeholder="Préciser..." value={p.couleurAutre} onChange={v => up('couleurAutre', v)} error={isE('couleurAutre')} disabled={isReadOnly} />}
                            </div>
                        </div>
                    )}

                    {/* Vitrage */}
                    {(p.type === 'FENETRE' || p.type === 'PORTE_FENETRE' || p.type === 'BAIE_COULISSANTE') && (
                        <div id="field-vitrageFlags" className={`bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border ${isE('vitrageFlags') ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 dark:border-slate-800'} ${lockedInput}`}>
                            <h3 className={`text-xs font-bold uppercase mb-3 tracking-wider ${isE('vitrageFlags') ? 'text-red-500' : 'text-slate-400'}`}>Vitrage {isE('vitrageFlags') && '*'}</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {[['standard', '4/20/4'], ['g200', 'G200'], ['feuillete1f', 'Feuilleté 1F'], ['feuillete2f', 'Feuilleté 2F']].map(([k, l]) => (
                                    <label key={k} className={`flex items-center p-3 rounded-lg border transition-all ${isReadOnly ? 'cursor-not-allowed' : 'cursor-pointer'} ${p.vitrageFlags?.[k] ? 'bg-brand-50 border-brand-500 text-brand-700 dark:bg-brand-900/30' : 'border-slate-200 dark:border-slate-700 dark:text-white'}`}>
                                        <input type="checkbox" className="w-5 h-5 rounded text-brand-600 focus:ring-brand-500" checked={!!p.vitrageFlags?.[k]} onChange={e => upN('vitrageFlags', k, e.target.checked)} disabled={isReadOnly} />
                                        <span className="ml-2 text-sm font-medium">{l}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Fenêtre Options */}
                    {p.type === 'FENETRE' && (
                        <div className={`bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4 ${lockedInput}`}>
                            <h3 className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">Options</h3>
                            <div className="flex items-center gap-4">
                                <label className={`flex-1 flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                    <span className="dark:text-white font-medium text-sm">Oscillo-Battant</span>
                                    <input type="checkbox" className="w-6 h-6 accent-brand-600" checked={!!p.oscilloBattant} onChange={e => up('oscilloBattant', e.target.checked)} disabled={isReadOnly || p.hauteurMm > 2200} />
                                </label>
                                <label className={`flex-1 flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                    <span className="dark:text-white font-medium text-sm">Grille Ventil.</span>
                                    <input type="checkbox" className="w-6 h-6 accent-brand-600" checked={!!p.grilleVentilation} onChange={e => up('grilleVentilation', e.target.checked)} disabled={isReadOnly} />
                                </label>
                            </div>
                            <div className="pt-2">
                                <label className="text-sm dark:text-slate-300 font-medium mb-2 block">Hauteur Poignée</label>
                                <div className="flex gap-2">
                                    <button onClick={() => up('poigneeHauteur', 'CENTREE')} disabled={isReadOnly} className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium ${isReadOnly ? 'opacity-50 cursor-not-allowed' : ''} ${p.poigneeHauteur !== 'AUTRE' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}>Centrée</button>
                                    <button onClick={() => up('poigneeHauteur', 'AUTRE')} disabled={isReadOnly} className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium ${isReadOnly ? 'opacity-50 cursor-not-allowed' : ''} ${p.poigneeHauteur === 'AUTRE' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}>Autre</button>
                                </div>
                                {p.poigneeHauteur === 'AUTRE' && <input type="number" inputMode="numeric" pattern="[0-9]*" className={`mt-2 w-full p-3 border rounded-lg dark:bg-slate-900 dark:text-white dark:border-slate-700 ${isReadOnly ? 'opacity-50 cursor-not-allowed' : ''}`} placeholder="mm" value={p.poigneeHauteurMm || ''} onChange={e => up('poigneeHauteurMm', parseInt(e.target.value))} disabled={isReadOnly} />}
                            </div>
                        </div>
                    )}

                    {/* Porte-fenêtre Options */}
                    {p.type === 'PORTE_FENETRE' && (
                        <div className={`bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4 ${lockedInput}`}>
                            <h3 className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">Options Porte-fenêtre</h3>
                            <div className="flex items-center gap-4">
                                <label className={`flex-1 flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                    <span className="dark:text-white font-medium text-sm">Grille Ventil.</span>
                                    <input type="checkbox" className="w-6 h-6 accent-brand-600" checked={!!p.grilleVentilation} onChange={e => up('grilleVentilation', e.target.checked)} disabled={isReadOnly} />
                                </label>
                                <label className={`flex-1 flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                    <div className="flex flex-col">
                                        <span className="dark:text-white font-medium text-sm">Serrure</span>
                                        {p.matiere === 'PVC' && <span className="text-xs text-slate-400">(gros profil)</span>}
                                    </div>
                                    <input type="checkbox" className="w-6 h-6 accent-brand-600" checked={!!p.serrure} onChange={e => up('serrure', e.target.checked)} disabled={isReadOnly} />
                                </label>
                            </div>
                            <div className="flex items-center gap-4">
                                <label className={`flex-1 flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                    <span className="dark:text-white font-medium text-sm">Seuil PMR</span>
                                    <input type="checkbox" className="w-6 h-6 accent-brand-600" checked={!!p.seuilPMR} onChange={e => up('seuilPMR', e.target.checked)} disabled={isReadOnly} />
                                </label>
                                <label className={`flex-1 flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                    <span className="dark:text-white font-medium text-sm">Soubassement</span>
                                    <input type="checkbox" className="w-6 h-6 accent-brand-600" checked={!!p.soubassement} onChange={e => up('soubassement', e.target.checked)} disabled={isReadOnly} />
                                </label>
                            </div>
                            {p.soubassement && <Input id="field-soubassementHauteurMm" label="Hauteur Soubassement (mm)" type="number" inputMode="decimal" step="any" pattern="[0-9]*" value={p.soubassementHauteurMm} onChange={v => up('soubassementHauteurMm', parseInt(v))} placeholder="Ex: 400" disabled={isReadOnly} />}
                            <div className="pt-2">
                                <label className="text-sm dark:text-slate-300 font-medium mb-2 block">Hauteur Poignée</label>
                                <div className="flex gap-2">
                                    <button onClick={() => up('poigneeHauteur', 'CENTREE')} disabled={isReadOnly} className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium ${isReadOnly ? 'opacity-50 cursor-not-allowed' : ''} ${p.poigneeHauteur !== 'AUTRE' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}>Centrée</button>
                                    <button onClick={() => up('poigneeHauteur', 'AUTRE')} disabled={isReadOnly} className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium ${isReadOnly ? 'opacity-50 cursor-not-allowed' : ''} ${p.poigneeHauteur === 'AUTRE' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}>Autre</button>
                                </div>
                                {p.poigneeHauteur === 'AUTRE' && <input type="number" inputMode="numeric" pattern="[0-9]*" className={`mt-2 w-full p-3 border rounded-lg dark:bg-slate-900 dark:text-white dark:border-slate-700 ${isReadOnly ? 'opacity-50 cursor-not-allowed' : ''}`} placeholder="mm" value={p.poigneeHauteurMm || ''} onChange={e => up('poigneeHauteurMm', parseInt(e.target.value))} disabled={isReadOnly} />}
                            </div>
                        </div>
                    )}

                    {/* Volet Roulant */}
                    {p.type === 'VOLET_ROULANT' && (
                        <div className={`bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 ${lockedInput}`}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Lier à </label>
                                <select className={`w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white ${isReadOnly ? 'opacity-50 cursor-not-allowed' : ''}`} value={p.lieAProduitId || ''} onChange={e => up('lieAProduitId', e.target.value)} disabled={isReadOnly}>
                                    <option value="">-- Indépendant --</option>
                                    {state.products.filter(x => ['FENETRE', 'BAIE_COULISSANTE'].includes(x.type)).map(x => <option key={x.id} value={x.id}>#{x.index} {x.type}</option>)}
                                </select>
                            </div>
                            <SelectToggle id="field-manoeuvre" label="Manoeuvre" value={p.manoeuvre} onChange={v => up('manoeuvre', v)} error={isE('manoeuvre')} disabled={isReadOnly} options={[{ label: 'Filaire', value: 'FILAIRE' }, { label: 'Radio', value: 'RADIO' }, { label: 'Solaire', value: 'SOLAIRE' }]} />
                            {p.manoeuvre && p.manoeuvre !== 'SOLAIRE' && <SelectToggle id="field-sortieCable" label="Sortie Câble" value={p.sortieCable} onChange={v => up('sortieCable', v)} error={isE('sortieCable')} disabled={isReadOnly} options={[{ label: 'Gauche', value: 'GAUCHE' }, { label: 'Droite', value: 'DROITE' }]} />}
                            {p.manoeuvre !== 'FILAIRE' && (
                                <label className={`flex items-center p-3 border rounded-lg bg-slate-50 dark:bg-slate-800 dark:border-slate-700 mt-4 mb-4 ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                    <input type="checkbox" className="w-5 h-5 accent-brand-600" checked={!!p.boxDomotique} onChange={e => up('boxDomotique', e.target.checked)} disabled={isReadOnly} />
                                    <span className="ml-3 font-medium dark:text-white">Box Domotique</span>
                                </label>
                            )}
                            <div className="my-4" id="field-coffreADeduireMm">
                                <label className={`flex items-center justify-between p-3 border rounded-lg bg-slate-50 dark:bg-slate-800 dark:border-slate-700 ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                    <span className="font-medium dark:text-white">Monobloc ?</span>
                                    <input type="checkbox" className="w-6 h-6 accent-brand-600" checked={!!p.monobloc} onChange={e => up('monobloc', e.target.checked)} disabled={isReadOnly} />
                                </label>
                                {p.monobloc && (
                                    <div className="mt-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                                        <Input label="Hauteur Coffre" type="number" inputMode="decimal" step="any" pattern="[0-9]*" value={p.coffreADeduireMm} onChange={v => up('coffreADeduireMm', parseInt(v))} error={isE('coffreADeduireMm')} disabled={isReadOnly} />
                                        <div className="text-right text-sm font-bold text-brand-600">Passage: {p.hauteurMm && p.coffreADeduireMm ? p.hauteurMm - p.coffreADeduireMm : '-'} mm</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Options Avancées */}
                    {ValidationService.hasAdvancedOptions(p.type) && (
                        <div className={`bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden ${lockedInput}`}>
                            <button onClick={() => setAdv(!adv)} className="w-full flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800/50 font-medium text-slate-700 dark:text-slate-300">
                                <span>Options Avancées</span>
                                {adv ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>
                            {adv && (
                                <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                                    {(p.type.includes('FENETRE') || p.type.includes('PORTE')) && (
                                        <div className="space-y-3">
                                            <label className={`flex items-center justify-between ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                                <span className="dark:text-white">Ouverture Extérieure</span>
                                                <input type="checkbox" className="w-5 h-5 accent-brand-600" checked={!!p.ouvertureExterieure} onChange={e => up('ouvertureExterieure', e.target.checked)} disabled={isReadOnly} />
                                            </label>
                                            {p.type === 'FENETRE' && (
                                                <>
                                                    <label className={`flex items-center justify-between ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                                        <span className="dark:text-white">Poignée à  clé</span>
                                                        <input type="checkbox" className="w-5 h-5 accent-brand-600" checked={!!p.poigneeCle} onChange={e => up('poigneeCle', e.target.checked)} disabled={isReadOnly} />
                                                    </label>
                                                    <label className={`flex items-center justify-between ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                                        <span className="dark:text-white">Pièce d'appui</span>
                                                        <input type="checkbox" className="w-5 h-5 accent-brand-600" checked={!!p.pieceAppui} onChange={e => up('pieceAppui', e.target.checked)} disabled={isReadOnly} />
                                                    </label>
                                                    {p.pieceAppui && <Input id="field-pieceAppuiDescription" label="Description Pièce d'appui" value={p.pieceAppuiDescription} onChange={v => up('pieceAppuiDescription', v)} placeholder="Préciser..." disabled={isReadOnly} />}
                                                </>
                                            )}
                                            {p.type === 'PORTE_FENETRE' && (
                                                <label className={`flex items-center justify-between ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                                    <span className="dark:text-white">Poignée à  clé</span>
                                                    <input type="checkbox" className="w-5 h-5 accent-brand-600" checked={!!p.poigneeCle} onChange={e => up('poigneeCle', e.target.checked)} disabled={isReadOnly} />
                                                </label>
                                            )}
                                            {p.type === 'PORTE_ENTREE' && (
                                                <label className={`flex items-center justify-between ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                                    <span className="dark:text-white font-bold">Tierce / Imposte ?</span>
                                                    <input type="checkbox" className="w-6 h-6 accent-brand-600" checked={!!p.tierceImposte} onChange={e => up('tierceImposte', e.target.checked)} disabled={isReadOnly} />
                                                </label>
                                            )}
                                        </div>
                                    )}
                                    {p.type === 'VOLET_ROULANT' && (
                                        <div>
                                            <SelectToggle label="Couple" value={p.coupleMoteur || 10} onChange={v => up('coupleMoteur', v)} disabled={isReadOnly} options={[{ label: '10 Nm', value: 10 }, { label: '20 Nm', value: 20 }]} />
                                            <SelectToggle label="Pose" value={p.pose || 'RENO'} onChange={v => up('pose', v)} disabled={isReadOnly} options={[{ label: 'Rénov', value: 'RENO' }, { label: 'Tradi', value: 'TRADI' }, { label: 'Tunnel', value: 'TUNNEL' }]} />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Porte Entrée */}
                    {p.type === 'PORTE_ENTREE' && (
                        <div className={`bg-white dark:bg-slate-900 p-5 rounded-xl border dark:border-slate-800 ${lockedInput}`}>
                            <SelectToggle id="field-remplissage" label="Remplissage" value={p.remplissage} onChange={v => up('remplissage', v)} error={isE('remplissage')} disabled={isReadOnly} options={[{ label: 'Panneau Déco Alu', value: 'PANNEAU_DECORATIF_ALU' }, { label: 'Sandwich', value: 'PANNEAU_SANDWICH' }, { label: 'Vitrée', value: 'VITREE' }]} />
                            {p.largeurMm > 1000 && (
                                <div className="mt-3 pt-3 border-t dark:border-slate-700">
                                    <label className={`flex items-center justify-between mb-3 ${isReadOnly ? 'cursor-not-allowed' : ''}`}>
                                        <span className="dark:text-white font-medium">Tierce ?</span>
                                        <input type="checkbox" className="w-6 h-6 accent-brand-600" checked={!!p.tierce} onChange={e => up('tierce', e.target.checked)} disabled={isReadOnly} />
                                    </label>
                                    {p.tierce && <Input id="field-cotePassageMm" label="Cote Passage (mm)" type="number" inputMode="decimal" step="any" pattern="[0-9]*" value={p.cotePassageMm} onChange={v => up('cotePassageMm', v)} error={isE('cotePassageMm')} disabled={isReadOnly} />}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Drawing & Photos */}
                    <div className={`bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 ${lockedInput}`}>
                        <DrawingCanvas data={p.dessin} onChange={d => up('dessin', d)} disabled={isReadOnly} />
                        <div className="mt-6">
                            <label className="block text-sm font-medium mb-3 text-slate-700 dark:text-slate-300">Photos</label>
                            <div className="grid grid-cols-4 gap-2">
                                {(p.photos || []).map((src, i) => (
                                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 group">
                                        <img src={src} className="w-full h-full object-cover" />
                                        {!isReadOnly && <button onClick={() => up('photos', p.photos.filter((_, idx) => idx !== i))} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow-md opacity-80 hover:opacity-100"><X size={12} /></button>}
                                    </div>
                                ))}
                                {!isReadOnly && (
                                    <button onClick={() => fRef.current?.click()} className="aspect-square rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center text-slate-400 hover:text-brand-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <Camera size={24} /><span className="text-[10px] mt-1">Ajouter</span>
                                    </button>
                                )}
                                <input type="file" ref={fRef} accept="image/*" className="hidden" onChange={hPh} disabled={isReadOnly} />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Notes techniques</label>
                            <textarea className={`w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 dark:text-white h-24 text-sm focus:border-brand-500 outline-none ${isReadOnly ? 'opacity-50 cursor-not-allowed' : ''}`} placeholder="Contraintes..." value={p.notes || ''} onChange={e => up('notes', e.target.value)} disabled={isReadOnly} />
                        </div>
                    </div>
                </div>
            </div>

            {/* G200 Toast */}
            {stG200 && <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl flex items-center animate-slide-up"><Droplets size={20} className="text-blue-400 mr-2" /> Vitrage G200 activé (Intimité)</div>}

        </div>
    );
};

import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Settings, Search, Plus, MapPin, Phone, Mail, UserCheck, CheckCircle, AlertCircle, Clock, Copy, Trash2, Archive, Menu, LogOut, Cloud, CloudOff } from 'lucide-react';
import { Button, Input, SelectToggle, Card } from "../ui.jsx";
import { useApp } from "../context.js";

// Helper Internal Components
export const AddressInput = ({ value, onChange }) => {
    const [s, setS] = useState([]), [o, setO] = useState(false), r = useRef(null), d = useRef(null);
    useEffect(() => { const h = e => { if (r.current && !r.current.contains(e.target)) setO(false) }; document.addEventListener("mousedown", h); return () => document.removeEventListener("mousedown", h) }, []);
    const fA = async q => { try { const res = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(q)}&limit=5`); if (res.ok) { const j = await res.json(); setS(j.features || []); setO(true) } } catch { } };
    const h = (e) => { const v = e.target.value; onChange(v); if (d.current) clearTimeout(d.current); if (v.length > 3) d.current = setTimeout(() => fA(v), 300); else setO(false) };
    const g = () => {
        if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') { alert("Connexion non sécurisée : Localisation indisponible."); return }
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(async p => { try { const rs = await fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${p.coords.longitude}&lat=${p.coords.latitude}`); const j = await rs.json(); if (j.features?.length) onChange(j.features[0].properties.label) } catch { } }, e => alert("Erreur GPS."))
    };
    return <div className="relative mb-4" ref={r}><label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Adresse</label><div className="relative"><input className="w-full p-3 pl-10 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-brand-500 dark:bg-slate-900 dark:text-white" placeholder="Adresse..." value={value} onChange={h} /><MapPin size={18} className="absolute left-3 top-3.5 text-slate-400" /><button onClick={g} className="absolute right-2 top-2 p-1.5 text-brand-600 hover:bg-brand-50 rounded"><MapPin size={18} /></button></div>{o && s.length > 0 && <ul className="suggestions-list">{s.map(i => <li key={i.properties.id} onClick={() => { onChange(i.properties.label); setO(false) }} className="p-3 border-b dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-800 cursor-pointer flex flex-col group"><span className="font-medium text-sm text-slate-800 dark:text-slate-200">{i.properties.name}</span><span className="text-xs text-slate-500">{i.properties.postcode} {i.properties.city}</span></li>)}</ul>}</div>;
};

export const NewChantierModal = ({ onClose }) => {
    const { addChantier } = useApp(), [f, setF] = useState({ client: '', adresse: '', typeContrat: 'FOURNITURE_SEULE', telephone: '', email: '', clientFinal: '', adresseFinale: '' });
    const sub = () => { if (!f.client) return alert('Nom requis'); if (f.typeContrat === 'SOUS_TRAITANCE' && (!f.clientFinal || !f.adresseFinale)) return alert('Client final requis'); addChantier({ ...f, date: new Date().toISOString() }); onClose() };
    return <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4 animate-fade-in"><Card className="w-full max-w-md p-6 shadow-2xl"><h2 className="text-xl font-bold mb-6 dark:text-white">Nouveau Dossier</h2><Input label="Nom Client" value={f.client} onChange={v => setF({ ...f, client: v })} placeholder="Ex: Entreprise BTP" /><AddressInput value={f.adresse} onChange={v => setF({ ...f, adresse: v })} /><div className="grid grid-cols-2 gap-4"><Input label="Tél" value={f.telephone} onChange={v => setF({ ...f, telephone: v })} type="tel" inputMode="tel" pattern="[0-9]*" /><Input label="Email" value={f.email} onChange={v => setF({ ...f, email: v })} type="email" inputMode="email" /></div><SelectToggle label="Contrat" value={f.typeContrat} onChange={v => setF({ ...f, typeContrat: v })} options={[{ label: 'Fourniture Seule', value: 'FOURNITURE_SEULE' }, { label: 'Fourniture & Pose', value: 'FOURNITURE_ET_POSE' }, { label: 'Sous-traitance', value: 'SOUS_TRAITANCE' }]} />{f.typeContrat === 'SOUS_TRAITANCE' && <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 mb-4 animate-fade-in"><h3 className="text-sm font-bold text-slate-500 mb-2 uppercase flex items-center"><UserCheck size={14} className="mr-1" /> Client Final</h3><Input label="Nom Final" value={f.clientFinal} onChange={v => setF({ ...f, clientFinal: v })} placeholder="Ex: Mme Michu" /><AddressInput value={f.adresseFinale} onChange={v => setF({ ...f, adresseFinale: v })} /></div>}<div className="flex gap-3 mt-6"><Button variant="secondary" onClick={onClose} className="flex-1">Annuler</Button><Button onClick={sub} className="flex-1">Créer</Button></div></Card></div>;
};

export const EditChantierModal = ({ chantier, onClose, onUpdate }) => {
    const [f, setF] = useState({ ...chantier });
    const sub = () => { if (!f.client) return alert('Nom requis'); if (f.typeContrat === 'SOUS_TRAITANCE' && (!f.clientFinal || !f.adresseFinale)) return alert('Client final requis'); onUpdate(f); onClose() };
    return <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4 animate-fade-in"><Card className="w-full max-w-md p-6 shadow-2xl"><h2 className="text-xl font-bold mb-6 dark:text-white">Modifier</h2><Input label="Nom Client" value={f.client} onChange={v => setF({ ...f, client: v })} /><AddressInput value={f.adresse} onChange={v => setF({ ...f, adresse: v })} /><div className="grid grid-cols-2 gap-4"><Input label="Tél" value={f.telephone} onChange={v => setF({ ...f, telephone: v })} type="tel" inputMode="tel" pattern="[0-9]*" /><Input label="Email" value={f.email} onChange={v => setF({ ...f, email: v })} type="email" inputMode="email" /></div><SelectToggle label="Contrat" value={f.typeContrat} onChange={v => setF({ ...f, typeContrat: v })} options={[{ label: 'Fourniture Seule', value: 'FOURNITURE_SEULE' }, { label: 'Fourniture & Pose', value: 'FOURNITURE_ET_POSE' }, { label: 'Sous-traitance', value: 'SOUS_TRAITANCE' }]} />{f.typeContrat === 'SOUS_TRAITANCE' && <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 mb-4 animate-fade-in"><h3 className="text-sm font-bold text-slate-500 mb-2 uppercase flex items-center"><UserCheck size={14} className="mr-1" /> Client Final</h3><Input label="Nom Final" value={f.clientFinal} onChange={v => setF({ ...f, clientFinal: v })} /><AddressInput value={f.adresseFinale} onChange={v => setF({ ...f, adresseFinale: v })} /></div>}<div className="flex gap-3 mt-6"><Button variant="secondary" onClick={onClose} className="flex-1">Annuler</Button><Button onClick={sub} className="flex-1">Enregistrer</Button></div></Card></div>;
};

export const DashboardView = ({ onNew, isDark, toggleDark, onOpenSettings, isOnline }) => {
    const { state, selectChantier, deleteChantier, duplicateChantier } = useApp();
    const [s, setS] = useState('');
    const [m, setM] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const [filter, setFilter] = useState('all'); // 'all', 'draft', 'sent', 'archived'

    // Compteurs
    const countAll = state.chantiers.filter(c => !c.archived).length;
    const countDraft = state.chantiers.filter(c => !c.archived && (!c.sendStatus || c.sendStatus === 'DRAFT' || c.sendStatus === 'ERROR')).length;
    const countSent = state.chantiers.filter(c => !c.archived && c.sendStatus === 'SENT').length;
    const countArchived = state.chantiers.filter(c => c.archived).length;

    // Filtrage combiné (recherche + filtre statut)
    const filt = state.chantiers
        .filter(c =>
            c.client.toLowerCase().includes(s.toLowerCase()) ||
            c.adresse.toLowerCase().includes(s.toLowerCase()) ||
            (c.telephone && c.telephone.includes(s)) ||
            (c.email && c.email.toLowerCase().includes(s.toLowerCase()))
        )
        .filter(c => {
            if (filter === 'archived') return c.archived;
            if (c.archived) return false;
            if (filter === 'draft') return !c.sendStatus || c.sendStatus === 'DRAFT' || c.sendStatus === 'ERROR';
            if (filter === 'sent') return c.sendStatus === 'SENT';
            return true; // 'all'
        });

    // Helper pour afficher le badge de statut
    const StatusBadge = ({ chantier }) => {
        const status = chantier.sendStatus || 'DRAFT';
        if (status === 'SENT') {
            const d = chantier.sentAt ? new Date(chantier.sentAt) : null;
            const dateStr = d ? `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}` : '';
            return <div className="flex flex-col items-center gap-0.5"><CheckCircle size={20} className="text-green-500" /><span className="text-[10px] font-bold text-green-600 dark:text-green-400">{dateStr}</span></div>;
        }
        if (status === 'ERROR') return <div className="flex flex-col items-center gap-0.5"><AlertCircle size={20} className="text-red-500" /><span className="text-[10px] font-bold text-red-600 dark:text-red-400">Erreur</span></div>;
        return <Clock size={20} className="text-orange-400" />;
    };

    // Tile cliquable
    const FilterTile = ({ active, onClick, count, label, colorClass }) => (
        <button
            onClick={onClick}
            className={`p-4 rounded-xl border transition-all text-left ${colorClass} ${active ? 'ring-2 ring-offset-2 ring-brand-500' : 'hover:scale-[1.02]'}`}
        >
            <div className="text-2xl font-bold">{count}</div>
            <div className="text-xs font-medium">{label}</div>
        </button>
    );

    return (
        <>
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20 px-4 pb-3 safe-top-padding">
                <div className="flex justify-between items-center mb-4 max-w-5xl mx-auto">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
                        <h1 className="text-xl font-bold tracking-tight">Sarange<span className="text-brand-600">Pro</span></h1>
                    </div>
                    <div className="flex gap-2 relative" ref={wrapperRef}>
                        {/* Indicateur Firebase */}
                        {isOnline ? (
                            <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-full" title="Synchronisé">
                                <Cloud size={20} className="text-green-500" />
                            </div>
                        ) : (
                            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full" title="Hors ligne">
                                <CloudOff size={20} className="text-slate-400" />
                            </div>
                        )}

                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <Menu size={20} />
                        </button>

                        {menuOpen && (
                            <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50 animate-fade-in origin-top-right">
                                <div className="p-2 space-y-1">
                                    <button
                                        onClick={() => { toggleDark(); }}
                                        className="w-full flex items-center px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                    >
                                        {isDark ? <Sun size={16} className="mr-3 text-orange-400" /> : <Moon size={16} className="mr-3 text-brand-600" />}
                                        {isDark ? 'Mode Clair' : 'Mode Sombre'}
                                    </button>
                                    <button
                                        onClick={() => { setFilter('archived'); setMenuOpen(false); }}
                                        className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${filter === 'archived' ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                                    >
                                        <Archive size={16} className="mr-3" />
                                        Archives
                                        <span className="ml-auto text-xs bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded-full">{countArchived}</span>
                                    </button>
                                    <div className="h-px bg-slate-100 dark:bg-slate-700 my-1"></div>
                                    <button
                                        onClick={() => { onOpenSettings(); setMenuOpen(false); }}
                                        className="w-full flex items-center px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                    >
                                        <Settings size={16} className="mr-3" />
                                        Paramètres
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="max-w-5xl mx-auto relative">
                    <Search className="absolute left-3 top-3 text-slate-400" size={20} />
                    <input className="w-full pl-10 p-2.5 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all" placeholder="Rechercher..." value={s} onChange={e => setS(e.target.value)} />
                </div>
            </header>
            <main className="flex-1 p-4 max-w-5xl mx-auto w-full">
                {/* Filtres cliquables */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    <FilterTile
                        active={filter === 'all'}
                        onClick={() => setFilter('all')}
                        count={countAll}
                        label="Dossiers"
                        colorClass="bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400"
                    />
                    <FilterTile
                        active={filter === 'draft'}
                        onClick={() => setFilter('draft')}
                        count={countDraft}
                        label="En cours"
                        colorClass="bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-900/30 text-orange-600 dark:text-orange-400"
                    />
                    <FilterTile
                        active={filter === 'sent'}
                        onClick={() => setFilter('sent')}
                        count={countSent}
                        label="Envoyés"
                        colorClass="bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-900/30 text-green-600 dark:text-green-400"
                    />
                </div>

                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-slate-700 dark:text-slate-300">
                        {filter === 'all' ? 'Tous les dossiers' : filter === 'draft' ? 'Dossiers en cours' : filter === 'sent' ? 'Dossiers envoyés' : 'Archives'}
                    </h2>
                    <Button onClick={() => setM(true)} icon={Plus} className="py-2 text-sm shadow-sm">Nouveau</Button>
                </div>

                <div className="space-y-3">
                    {filt.length === 0 && (
                        <div className="text-center py-12 text-slate-400">
                            <span className="text-4xl">📂</span>
                            <p className="mt-2">Aucun dossier {filter !== 'all' ? 'dans cette catégorie' : ''}</p>
                        </div>
                    )}
                    {filt.map(c => (
                        <div
                            key={c.id}
                            onClick={() => selectChantier(c.id)}
                            className={`group bg-white dark:bg-slate-900 p-4 rounded-xl border ${c.sendStatus === 'SENT' ? 'border-green-400 dark:border-green-600' : c.sendStatus === 'ERROR' ? 'border-red-400 dark:border-red-600' : c.typeContrat === 'SOUS_TRAITANCE' ? 'border-amber-400 dark:border-amber-600' : 'border-slate-200 dark:border-slate-800'} shadow-sm active:scale-[0.99] transition-all cursor-pointer hover:border-brand-400 dark:hover:border-brand-600 relative overflow-hidden`}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-lg dark:text-white group-hover:text-brand-600 transition-colors">{c.client}</h3>
                                    <div className="text-sm text-slate-500 flex items-center mt-1">
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.adresse)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            className="hover:text-brand-600 mr-1"
                                        >
                                            <MapPin size={14} />
                                        </a>
                                        <span>{c.adresse}</span>
                                    </div>
                                    {(c.telephone || c.email) && (
                                        <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                                            {c.telephone && (
                                                <div className="flex items-center">
                                                    <a href={`tel:${c.telephone}`} onClick={e => e.stopPropagation()} className="hover:text-brand-600 mr-1">
                                                        <Phone size={12} />
                                                    </a>
                                                    <span>{c.telephone}</span>
                                                </div>
                                            )}
                                            {c.email && (
                                                <div className="flex items-center">
                                                    <a href={`mailto:${c.email}`} onClick={e => e.stopPropagation()} className="hover:text-brand-600 mr-1">
                                                        <Mail size={12} />
                                                    </a>
                                                    <span>{c.email}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {c.typeContrat === 'SOUS_TRAITANCE' && (
                                        <div className="mt-2 text-xs bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 px-2 py-1 rounded inline-flex items-center">
                                            <UserCheck size={12} className="mr-1" /> Client Final : {c.clientFinal}
                                        </div>
                                    )}
                                </div>
                                <StatusBadge chantier={c} />
                            </div>
                            <div className="mt-4 flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-3">
                                <span className="text-xs font-mono text-slate-400">{new Date(c.date).toLocaleDateString()}</span>
                                <div className="flex gap-3">
                                    <button onClick={(e) => { e.stopPropagation(); duplicateChantier(c.id) }} className="text-slate-400 hover:text-brand-500"><Copy size={18} /></button>
                                    <button onClick={(e) => { e.stopPropagation(); if (confirm('Supprimer ?')) deleteChantier(c.id) }} className="text-slate-400 hover:text-red-500"><Trash2 size={18} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            {m && <NewChantierModal onClose={() => setM(false)} />}
        </>
    );
};

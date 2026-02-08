import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Settings, Search, Plus, MapPin, Phone, Mail, UserCheck, CheckCircle, AlertCircle, Clock, Copy, Trash2, Archive, Menu, LogOut, Cloud, CloudOff, Calendar, ArrowRight } from 'lucide-react';
import { manageGoogleEvent } from "../utils/googleCalendar.js";
import { Button } from "../components/ui/Button.jsx";
import { Input } from "../components/ui/Input.jsx";
import { SelectToggle } from "../components/ui/SelectToggle.jsx";
import { Card } from "../components/ui/Card.jsx";
import { StatusBanner } from "../components/ui/StatusBanner.jsx";
import { AddressInput } from "../components/ui/AddressInput.jsx";
import { SmartAddress } from "../components/ui/SmartAddress.jsx";
import { useApp } from "../context.js";
import AddToCalendarBtn from "../components/AddToCalendarBtn.jsx";
import { checkUrgency, downloadICS } from "../utils/calendar.js";
import { PlanningModal } from "../components/PlanningModal.jsx";

// --- COMPONENTS ---

const MobileNavTiles = ({ activeTab, onTabChange, counts }) => {
    // CORRECTION ICI : Suppression de 'sticky top-[130px] z-30' et ajout de 'shrink-0'
    // Cela permet au menu de rester fixe en haut du conteneur flex, tandis que la liste défile dessous proprement.
    return (
        <div className="lg:hidden grid grid-cols-3 gap-2 mb-4 shrink-0">
            <button
                onClick={() => onTabChange('TODO')}
                className={`p-3 rounded-xl border transition-all flex flex-col items-center justify-center text-center gap-1
                    ${activeTab === 'TODO' ? 'ring-2 ring-offset-1 ring-red-400 dark:ring-red-500 border-transparent' : 'border-red-100 dark:border-red-900/30'}
                    bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400`}
            >
                <div className="text-2xl font-bold">{counts.todo}</div>
                <div className="text-[10px] font-bold uppercase truncate w-full">À PLANIFIER</div>
            </button>

            <button
                onClick={() => onTabChange('PLANNING')}
                className={`p-3 rounded-xl border transition-all flex flex-col items-center justify-center text-center gap-1
                      ${activeTab === 'PLANNING' ? 'ring-2 ring-offset-1 ring-brand-400 dark:ring-brand-500 border-transparent' : 'border-brand-100 dark:border-brand-900/30'}
                      bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-400`}
            >
                <div className="text-2xl font-bold">{counts.planning}</div>
                <div className="text-[10px] font-bold uppercase truncate w-full">PLANNING</div>
            </button>

            <button
                onClick={() => onTabChange('DONE')}
                className={`p-3 rounded-xl border transition-all flex flex-col items-center justify-center text-center gap-1
                      ${activeTab === 'DONE' ? 'ring-2 ring-offset-1 ring-green-400 dark:ring-green-500 border-transparent' : 'border-green-100 dark:border-green-900/30'}
                      bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400`}
            >
                <div className="text-2xl font-bold">{counts.done}</div>
                <div className="text-[10px] font-bold uppercase truncate w-full">ENVOYÉS</div>
            </button>
        </div>
    );
};

export const DashboardView = ({ onNew, isDark, toggleDark, onOpenSettings, onOpenTrash, isOnline }) => {
    const { state, selectChantier, deleteChantier, duplicateChantier, updateChantier, addChantier } = useApp();
    const [s, setS] = useState('');
    const [m, setM] = useState(false); // New Modal
    const [menuOpen, setMenuOpen] = useState(false);
    const wrapperRef = useRef(null);
    const [activeTab, setActiveTab] = useState('TODO'); // 'TODO', 'PLANNING', 'DONE'

    // Planning logic
    const [planningId, setPlanningId] = useState(null);
    const handlePlanifier = async (date) => {
        if (planningId) {
            // 1. Mise à jour locale immédiate
            updateChantier(planningId, { dateIntervention: date });

            const chant = state.chantiers.find(c => c.id === planningId);
            if (chant) {
                // 2. Synchro Google Calendar (Background)
                try {
                    /* On garde l'ICS pour l'instant si l'utilisateur y tient, 
                       mais on ajoute surtout la synchro API */
                    // downloadICS({ ...chant, dateIntervention: date }); 

                    const updatedChantier = { ...chant, dateIntervention: date };
                    const eventId = await manageGoogleEvent(updatedChantier);
                    if (eventId) {
                        updateChantier(planningId, { googleEventId: eventId });
                    }
                } catch (e) {
                    console.error("Auto-sync GCal blocked", e);
                }
            }
            setPlanningId(null);
        }
    };

    // Filter & Sort
    const [showArchived, setShowArchived] = useState(false);
    const allChantiers = (state.chantiers || []).filter(c => !c.deleted && !c.purged);
    const countArchived = allChantiers.filter(c => c.archived).length;

    // Urgency Check
    const [urgencyCount, setUrgencyCount] = useState(0);
    useEffect(() => { setUrgencyCount(checkUrgency(state.chantiers || [])); }, [state.chantiers]);

    const filt = allChantiers
        .filter(c =>
            c.client.toLowerCase().includes(s.toLowerCase()) ||
            c.adresse.toLowerCase().includes(s.toLowerCase()) ||
            (c.telephone && c.telephone.includes(s)) ||
            (c.email && c.email.toLowerCase().includes(s.toLowerCase()))
        )
        .filter(c => showArchived ? c.archived : !c.archived);

    // --- COLUMNS DATA ---

    // 1. TODO: No date, Not sent
    const todoChantiers = filt.filter(c => (!c.dateIntervention) && c.sendStatus !== 'SENT')
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // 2. PLANNING: Date defined, Not sent
    const plannedChantiers = filt.filter(c => c.dateIntervention && c.sendStatus !== 'SENT')
        .sort((a, b) => new Date(a.dateIntervention).getTime() - new Date(b.dateIntervention).getTime());

    // Grouping Logic for Planning
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const tomorrow = today + 86400000;
    const nextWeek = today + (7 * 86400000);

    const groups = {
        today: [],
        tomorrow: [],
        week: [],
        later: []
    };

    plannedChantiers.forEach(c => {
        const d = new Date(c.dateIntervention).getTime();
        if (d >= today && d < tomorrow) groups.today.push(c);
        else if (d >= tomorrow && d < tomorrow + 86400000) groups.tomorrow.push(c);
        else if (d >= tomorrow + 86400000 && d < nextWeek) groups.week.push(c);
        else groups.later.push(c);
    });

    // 3. DONE: Sent
    const doneChantiers = filt.filter(c => c.sendStatus === 'SENT')
        .sort((a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime());


    // --- RENDER HELPERS ---

    const ChantierCard = ({ c, isTodo = false }) => {
        const isUrgent = (!c.dateIntervention && c.sendStatus !== 'SENT') && (Date.now() - new Date(c.date).getTime() > 5 * 24 * 60 * 60 * 1000);
        return (
            <div
                onClick={() => selectChantier(c.id)}
                className={`relative group bg-white dark:bg-slate-900 p-4 rounded-xl border shadow-sm hover:shadow-md active:scale-[0.99] transition-all cursor-pointer overflow-hidden mb-3
                    ${c.sendStatus === 'SENT' ? 'border-green-200 dark:border-green-800 opacity-75 hover:opacity-100' :
                        isUrgent ? 'border-red-400 dark:border-red-500 ring-1 ring-red-400 dark:ring-red-500' :
                            'border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-600'}
                `}
            >
                {isUrgent && <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">URGENT</div>}

                <div className="flex justify-between items-start mb-2">
                    <div className="font-bold text-lg dark:text-white truncate pr-2">{c.client}</div>
                    {c.sendStatus === 'SENT' && <CheckCircle size={16} className="text-green-500" />}
                </div>

                <div className="text-sm text-slate-500 mb-3 ml-[-5px]">
                    <SmartAddress address={c.adresse} gps={c.gps} />
                </div>

                {/* Info Date/Tel */}
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2.5 flex items-center justify-between mb-3 text-sm">
                    {c.dateIntervention ? (
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 uppercase font-bold">Intervention</span>
                            <span className="font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1">
                                <Calendar size={14} />
                                {new Date(c.dateIntervention).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })}
                            </span>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 uppercase font-bold">Créé le</span>
                            <span className="font-bold text-slate-600 dark:text-slate-300">
                                {new Date(c.date).toLocaleDateString('fr-FR')}
                            </span>
                        </div>
                    )}
                    {c.telephone && (
                        <a href={`tel:${c.telephone}`} onClick={e => e.stopPropagation()} className="bg-white dark:bg-slate-700 p-2 rounded-full text-slate-600 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-600 hover:text-brand-600 hover:border-brand-600 transition-colors">
                            <Phone size={16} />
                        </a>
                    )}
                </div>

                {/* Actions Specific for TODO */}
                {isTodo && (
                    <div className="flex gap-2 mt-2">
                        <Button
                            className="flex-1 py-2 text-xs bg-brand-600 text-white shadow-md hover:bg-brand-700 h-10"
                            onClick={(e) => { e.stopPropagation(); setPlanningId(c.id); }}
                            icon={Calendar}
                        >
                            PLANIFIER
                        </Button>
                    </div>
                )}

                <div className="flex items-center justify-end pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 gap-2">
                    <button onClick={(e) => { e.stopPropagation(); duplicateChantier(c.id) }} className="text-slate-400 hover:text-brand-500"><Copy size={16} /></button>
                    <button onClick={(e) => { e.stopPropagation(); if (confirm('Supprimer ?')) deleteChantier(c.id) }} className="text-slate-400 hover:text-red-500"><Trash2 size={16} /></button>
                </div>
            </div>
        );
    };

    const PlanningGroup = ({ title, items, color }) => {
        if (items.length === 0) return null;
        return (
            <div className="mb-4">
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${color}`}>{title}</h4>
                {items.map(c => <ChantierCard key={c.id} c={c} />)}
            </div>
        );
    };

    // --- MAIN RENDER ---

    return (
        <>
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 px-4 pb-3 safe-top-padding shadow-sm">
                <div className="flex justify-between items-center mb-4 max-w-[1400px] mx-auto pt-2">
                    <div className="flex items-center gap-2">
                        <img src="/favicon-512.png" alt="Logo" className="w-8 h-8 object-contain rounded-lg" />
                        <h1 className="text-xl font-bold tracking-tight">Sarange<span className="text-brand-600">Metrage</span></h1>
                    </div>
                    <div className="flex gap-2 relative" ref={wrapperRef}>
                        {isOnline ? (<div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-full"><Cloud size={20} className="text-green-500" /></div>) : (<div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full"><CloudOff size={20} className="text-slate-400" /></div>)}
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <Menu size={20} />
                        </button>
                        {menuOpen && (
                            <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50 animate-fade-in origin-top-right">
                                <div className="p-2 space-y-1">
                                    <button onClick={toggleDark} className="w-full flex items-center px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">{isDark ? <Sun size={16} className="mr-3 text-orange-400" /> : <Moon size={16} className="mr-3 text-brand-600" />}{isDark ? 'Mode Clair' : 'Mode Sombre'}</button>
                                    <div className="h-px bg-slate-100 dark:bg-slate-700 my-1"></div>
                                    <button onClick={() => { setShowArchived(!showArchived); setMenuOpen(false); }} className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${showArchived ? 'bg-brand-50 text-brand-700' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50'}`}><Archive size={16} className="mr-3" />{showArchived ? 'Voir Dossiers Actifs' : 'Voir Archives'}<span className="ml-auto text-xs bg-slate-100 px-1.5 rounded-full">{countArchived}</span></button>
                                    <button onClick={() => { onOpenTrash(); setMenuOpen(false); }} className="w-full flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"><Trash2 size={16} className="mr-3 text-red-500" />Corbeille</button>
                                    <button onClick={() => { onOpenSettings(); setMenuOpen(false); }} className="w-full flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"><Settings size={16} className="mr-3" />Paramètres</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="max-w-[1400px] mx-auto relative flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 text-slate-400" size={20} />
                        <input className="w-full pl-10 p-2.5 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all shadow-inner" placeholder="Rechercher un dossier..." value={s} onChange={e => setS(e.target.value)} />
                    </div>
                    <Button onClick={() => setM(true)} icon={Plus} className="py-2 text-sm shadow-sm whitespace-nowrap px-4">Nouveau</Button>
                </div>
            </header>

            <main className="flex-1 p-4 max-w-[1400px] mx-auto w-full h-[calc(100vh-140px)] overflow-hidden flex flex-col">

                {/* Banner Notification Urgency */}
                {urgencyCount > 0 && (
                    <div className="mb-4 shrink-0">
                        <StatusBanner variant="warning" icon={AlertCircle}>
                            {urgencyCount} dossiers en attente de planification depuis +3 jours !
                        </StatusBanner>
                    </div>
                )}

                {/* MOBILE TILE NAVIGATION */}
                <MobileNavTiles
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    counts={{ todo: todoChantiers.length, planning: plannedChantiers.length, done: doneChantiers.length }}
                />

                {/* KANBAN GRID */}
                <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">

                    {/* COL 1: À PLANIFIER */}
                    <div className={`flex flex-col h-full ${activeTab === 'TODO' ? 'block' : 'hidden lg:flex'}`}>
                        <div className="flex items-center justify-between mb-4 px-2 shrink-0">
                            <h3 className="font-bold text-red-600 flex items-center gap-2">
                                <AlertCircle size={20} />
                                À PLANIFIER
                                <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full">{todoChantiers.length}</span>
                            </h3>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 pb-20 custom-scrollbar">
                            {todoChantiers.length === 0 ? (
                                <div className="text-center p-8 text-slate-400 italic bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200">Aucun dossier en attente</div>
                            ) : (
                                todoChantiers.map(c => <ChantierCard key={c.id} c={c} isTodo={true} />)
                            )}
                        </div>
                    </div>

                    {/* COL 2: PLANNING */}
                    <div className={`flex flex-col h-full ${activeTab === 'PLANNING' ? 'block' : 'hidden lg:flex'} lg:border-l lg:border-r lg:border-slate-100 lg:dark:border-slate-800 lg:px-6`}>
                        <div className="flex items-center justify-between mb-4 px-2 shrink-0">
                            <h3 className="font-bold text-brand-600 flex items-center gap-2">
                                <Calendar size={20} />
                                PLANNING
                                <span className="bg-brand-100 text-brand-700 text-xs px-2 py-0.5 rounded-full">{plannedChantiers.length}</span>
                            </h3>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 pb-20 custom-scrollbar">
                            {plannedChantiers.length === 0 ? (
                                <div className="text-center p-8 text-slate-400 italic bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200">Planning vide</div>
                            ) : (
                                <>
                                    <PlanningGroup title="Aujourd'hui" items={groups.today} color="text-green-600" />
                                    <PlanningGroup title="Demain" items={groups.tomorrow} color="text-blue-600" />
                                    <PlanningGroup title="Cette semaine" items={groups.week} color="text-brand-600" />
                                    <PlanningGroup title="Plus tard" items={groups.later} color="text-slate-500" />
                                </>
                            )}
                        </div>
                    </div>

                    {/* COL 3: ENVOYÉS */}
                    <div className={`flex flex-col h-full ${activeTab === 'DONE' ? 'block' : 'hidden lg:flex'}`}>
                        <div className="flex items-center justify-between mb-4 px-2 shrink-0">
                            <h3 className="font-bold text-green-600 flex items-center gap-2">
                                <CheckCircle size={20} />
                                ENVOYÉS
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">{doneChantiers.length}</span>
                            </h3>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 pb-20 custom-scrollbar">
                            {doneChantiers.length === 0 ? (
                                <div className="text-center p-8 text-slate-400 italic bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200">Aucun dossier envoyé</div>
                            ) : (
                                doneChantiers.map(c => <ChantierCard key={c.id} c={c} />)
                            )}
                        </div>
                    </div>

                </div>
            </main>

            {m && <NewChantierModal onClose={() => setM(false)} />}
            {planningId && <PlanningModal onClose={() => setPlanningId(null)} onConfirm={handlePlanifier} />}
        </>
    );
};

// Re-integrate Modals with new features
export const NewChantierModal = ({ onClose }) => {
    const { addChantier } = useApp();
    const [f, setF] = useState({
        client: '',
        adresse: '',
        gps: null,
        typeContrat: 'FOURNITURE_SEULE',
        telephone: '',
        email: '',
        clientFinal: '',
        adresseFinale: ''
    });

    const setAddr = (v, field = 'adresse') => {
        if (typeof v === 'object') setF({ ...f, [field]: v.address, gps: v.gps });
        else setF({ ...f, [field]: v });
    };

    const sub = async () => {
        if (!f.client) return alert('Nom requis');
        if (f.typeContrat === 'SOUS_TRAITANCE' && (!f.clientFinal || !f.adresseFinale)) return alert('Client final requis');

        // 1. Création Locale (Immédiate)
        const newChantier = { ...f, date: new Date().toISOString() };
        addChantier(newChantier);
        onClose();

        // 2. Synchro Google Calendar (Arrière-plan silencieux)
        // Note : NewChantierModal n'a pas de champ dateIntervention actuellement.
        // On ne tente la synchro que si une date est définie (futur support)
        if (newChantier.dateIntervention) {
            try {
                const eventId = await manageGoogleEvent(newChantier);
                if (eventId) {
                    // Possibilité de MAJ state si besoin
                }
            } catch (e) {
                console.error("Silent GCal Sync Fail", e);
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-0 md:p-4 animate-fade-in">
            <Card className="w-full max-w-md p-6 shadow-2xl rounded-t-2xl md:rounded-2xl max-h-[95vh] overflow-y-auto animate-slide-up md:animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold dark:text-white">Nouveau Dossier</h2>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 dark:bg-slate-800 rounded-full transition-colors">✕</button>
                </div>

                <div className="space-y-4">
                    <Input label="Nom Client" value={f.client} onChange={v => setF({ ...f, client: v })} placeholder="Ex: Entreprise BTP" />
                    <AddressInput value={f.adresse} onChange={v => setAddr(v, 'adresse')} />

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
                        <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 animate-fade-in">
                            <h3 className="text-sm font-bold text-slate-500 mb-2 uppercase flex items-center"><UserCheck size={14} className="mr-1" /> Client Final</h3>
                            <Input label="Nom Final" value={f.clientFinal} onChange={v => setF({ ...f, clientFinal: v })} placeholder="Ex: Mme Michu" />
                            <AddressInput value={f.adresseFinale} onChange={v => setAddr(v, 'adresseFinale')} />
                        </div>
                    )}
                </div>

                <div className="flex gap-3 mt-8 pb-4">
                    <Button variant="secondary" onClick={onClose} className="flex-1">Annuler</Button>
                    <Button onClick={sub} className="flex-1">Créer</Button>
                </div>
            </Card>
        </div>
    );
};


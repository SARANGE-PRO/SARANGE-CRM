import React, { useState, useRef, useEffect } from 'react';
import { Plus, AlertCircle, Search, CheckCircle, Calendar, Phone, Copy, Trash2, ArrowRight, UserCheck } from 'lucide-react';
import { AppHeader } from "../components/AppHeader.jsx";
import { Button } from "../components/ui/Button.jsx";
import { checkUrgency } from "../utils/calendar.js";
import { Input } from "../components/ui/Input.jsx";
import { SelectToggle } from "../components/ui/SelectToggle.jsx";
import { Card } from "../components/ui/Card.jsx";
import { ChantierCard } from "../components/ChantierCard.jsx";
import { StatusBanner } from "../components/ui/StatusBanner.jsx";
import { AddressInput } from "../components/ui/AddressInput.jsx";
import { SmartAddress } from "../components/ui/SmartAddress.jsx";
import { useApp } from "../context.js";
import AddToCalendarBtn from "../components/AddToCalendarBtn.jsx";
import { PlanningModal } from "../components/PlanningModal.jsx";
import { DB } from "../db.js";
import { generateUUID } from "../utils.js";

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

export const DashboardView = ({ onNew, isDark, toggleDark, onOpenSettings, onOpenTrash, isOnline, firebaseConnected }) => {
    const { state, selectChantier, deleteChantier, duplicateChantier, updateChantier, addChantier, updateChantierDate } = useApp();
    const [s, setS] = useState('');
    const [m, setM] = useState(false); // New Modal
    const [menuOpen, setMenuOpen] = useState(false);
    const wrapperRef = useRef(null);
    const [activeTab, setActiveTab] = useState('TODO'); // 'TODO', 'PLANNING', 'DONE'

    // Planning logic
    const [planningId, setPlanningId] = useState(null);
    const handlePlanifier = async (date) => {
        if (planningId) {
            // 1. Fermeture Modale IMMÉDIATE
            setPlanningId(null);

            // 2. Mise à jour centralisée (Locale + Google)
            if (date) updateChantierDate(planningId, date);
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

    const PlanningGroup = ({ title, items, color }) => {
        if (items.length === 0) return null;
        return (
            <div className="mb-4">
                {/* ChantierCard imports its own onClick handlers from props or defaults to context if not provided */}
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${color}`}>{title}</h4>
                {items.map(c => <ChantierCard key={c.id} c={c} onClick={() => selectChantier(c.id)} />)}
            </div>
        );
    };

    // --- MAIN RENDER ---

    return (
        <div className="flex flex-col h-full w-full bg-slate-50 dark:bg-slate-900 overflow-hidden">
            {/* HEADER (Sticky Removed -> Flex Item) */}
            <AppHeader
                isDark={isDark}
                toggleDark={toggleDark}
                onOpenSettings={onOpenSettings}
                onOpenTrash={onOpenTrash}
                showArchived={showArchived}
                setShowArchived={setShowArchived}
                countArchived={countArchived}
                isOnline={isOnline}
                firebaseConnected={firebaseConnected}
            />

            {/* SEARCH BAR (Distinct from Header in Dashboard) */}
            <div className="flex-none bg-white dark:bg-slate-900 px-4 pt-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-full mx-auto relative flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 text-slate-400" size={20} />
                        <input className="w-full pl-10 p-2.5 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all shadow-inner" placeholder="Rechercher un dossier..." value={s} onChange={e => setS(e.target.value)} />
                    </div>
                    <Button onClick={() => setM(true)} icon={Plus} className="py-2 text-sm shadow-sm whitespace-nowrap px-4">Nouveau</Button>
                </div>
            </div>

            {/* MAIN CONTENT AREA (Flex Grow) */}
            <main className="flex-1 min-h-0 overflow-y-auto pb-40 lg:pb-0 w-full mx-auto">

                {/* Banner Notification Urgency (Fixed Top) */}
                {urgencyCount > 0 && (
                    <div className="flex-none px-4 pt-4 mb-2">
                        <StatusBanner variant="warning" icon={AlertCircle}>
                            {urgencyCount} dossiers en attente de planification depuis +3 jours !
                        </StatusBanner>
                    </div>
                )}

                {/* MOBILE NAV TILES (Fixed Top Mobile) */}
                <div className="flex-none px-4 pt-2 z-10 w-full relative">
                    <MobileNavTiles
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                        counts={{ todo: todoChantiers.length, planning: plannedChantiers.length, done: doneChantiers.length }}
                    />
                </div>

                {/* SCROLLABLE COLUMNS WRAPPER */}
                <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-full px-4 pb-0">

                    {/* COL 1: À PLANIFIER */}
                    <div className={`flex flex-col h-auto lg:h-full ${activeTab === 'TODO' ? 'block' : 'hidden lg:flex'}`}>
                        <div className="flex items-center justify-between mb-4 px-2 shrink-0">
                            <h3 className="font-bold text-red-600 flex items-center gap-2">
                                <AlertCircle size={20} />
                                À PLANIFIER
                                <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full">{todoChantiers.length}</span>
                            </h3>
                        </div>
                        {/* SCROLL AREA with Padding Bottom for Mobile Fab/Safe Area */}
                        <div className="flex-1 lg:overflow-y-auto overscroll-contain pr-2 pb-0 lg:pb-32 custom-scrollbar">
                            {todoChantiers.length === 0 ? (
                                <div className="text-center p-8 text-slate-400 italic bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200">Aucun dossier en attente</div>
                            ) : (
                                todoChantiers.map(c => <ChantierCard key={c.id} c={c} isTodo={true} onPlanifier={(id) => setPlanningId(id)} />)
                            )}
                        </div>
                    </div>

                    {/* COL 2: PLANNING */}
                    <div className={`flex flex-col h-auto lg:h-full ${activeTab === 'PLANNING' ? 'block' : 'hidden lg:flex'} lg:border-l lg:border-r lg:border-slate-100 lg:dark:border-slate-800 lg:px-6`}>
                        <div className="flex items-center justify-between mb-4 px-2 shrink-0">
                            <h3 className="font-bold text-brand-600 flex items-center gap-2">
                                <Calendar size={20} />
                                PLANNING
                                <span className="bg-brand-100 text-brand-700 text-xs px-2 py-0.5 rounded-full">{plannedChantiers.length}</span>
                            </h3>
                        </div>
                        {/* SCROLL AREA */}
                        <div className="flex-1 lg:overflow-y-auto overscroll-contain pr-2 pb-0 lg:pb-32 custom-scrollbar">
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
                    <div className={`flex flex-col h-auto lg:h-full ${activeTab === 'DONE' ? 'block' : 'hidden lg:flex'}`}>
                        <div className="flex items-center justify-between mb-4 px-2 shrink-0">
                            <h3 className="font-bold text-green-600 flex items-center gap-2">
                                <CheckCircle size={20} />
                                ENVOYÉS
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">{doneChantiers.length}</span>
                            </h3>
                        </div>
                        {/* SCROLL AREA */}
                        <div className="flex-1 lg:overflow-y-auto overscroll-contain pr-2 pb-0 lg:pb-32 custom-scrollbar">
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
        </div>
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
        adresseFinale: '',
        notes: ''
    });
    const [file, setFile] = useState(null);

    const setAddr = (v, field = 'adresse') => {
        if (typeof v === 'object') setF({ ...f, [field]: v.address, gps: v.gps });
        else setF({ ...f, [field]: v });
    };

    const sub = async () => {
        if (!f.client) return alert('Nom requis');
        if (f.typeContrat === 'SOUS_TRAITANCE' && (!f.clientFinal || !f.adresseFinale)) return alert('Client final requis');

        // 1. Création Locale (Immédiate)
        let quoteFileId = null;
        if (file) {
            quoteFileId = generateUUID();
            await DB.storeFile(quoteFileId, file);
        }

        const newChantier = {
            ...f,
            date: new Date().toISOString(),
            quoteFileId,
            quoteFileName: file ? file.name : null
        };
        const createdChantier = addChantier(newChantier);
        onClose();

        // 2. Auto-upload to Drive (background)
        if (file && quoteFileId) {
            const { uploadQuoteToDrive } = await import("../services/googleDrive.js");
            uploadQuoteToDrive(createdChantier || newChantier, file, file.name)
                .then(result => {
                    console.log(`✅ Quote auto-uploaded to Drive: ${result.filename}`);
                })
                .catch(error => {
                    console.error("Drive auto-upload failed:", error);
                    // Silent fail - local storage is primary
                });
        }

        // 3. Synchro Google Calendar (Arrière-plan silencieux)
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-end md:items-center justify-center p-0 md:p-4 animate-fade-in">
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

                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                        <label className="block text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-wider">Devis PDF (Optionnel)</label>
                        <input
                            type="file"
                            accept=".pdf,application/pdf"
                            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100"
                            onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
                        />
                        {file && <p className="text-xs text-brand-600 mt-1">Fichier sélectionné : {file.name}</p>}
                    </div>

                    <div className="relative">
                        <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">Infos supplémentaires</label>
                        <textarea
                            className="w-full p-3 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm min-h-[80px]"
                            placeholder="Codes d'accès, instructions particulières..."
                            value={f.notes}
                            onChange={e => setF({ ...f, notes: e.target.value })}
                        />
                    </div>
                </div>

                <div className="flex gap-3 mt-8 pb-4">
                    <Button variant="secondary" onClick={onClose} className="flex-1">Annuler</Button>
                    <Button onClick={sub} className="flex-1">Créer</Button>
                </div>
            </Card>
        </div>
    );
};

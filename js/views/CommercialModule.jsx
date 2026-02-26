import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Plus, GripVertical, Cloud, CloudOff, AlertCircle, Menu, Sun, Moon, Archive, Trash2, Settings, Search } from 'lucide-react';
import { Button } from "../components/ui/Button.jsx";
import { CommercialCard } from "../components/CommercialCard.jsx";
import { NewLeadModal } from "../components/NewLeadModal.jsx";
import { CommercialDetailModal } from "../components/modals/CommercialDetailModal.jsx";
import { useApp } from "../context.js";
import { COMMERCIAL_STATUS } from "../utils.js";

export const CommercialModule = ({
    onNew,
    isDark,
    toggleDark,
    onOpenSettings,
    onOpenTrash,
    isOnline,
    firebaseConnected
}) => {
    const { state, selectChantier, updateChantier, promoteLeadToSent, markForRelance, markAsSigned, createNewLead, duplicateChantier, deleteChantier } = useApp();
    const [draggedId, setDraggedId] = useState(null);
    const [showNewLeadModal, setShowNewLeadModal] = useState(false);
    const [detailChantierId, setDetailChantierId] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [s, setS] = useState('');
    const [mobileTab, setMobileTab] = useState('leads'); // Added for mobile filtering

    // We filter out deleted/purged chantiers and only show COMMERCIAL assignments
    const chantiers = useMemo(() => {
        return (state.chantiers || []).filter(c =>
            !c.deleted &&
            !c.purged &&
            c.assignation === 'COMMERCIAL' &&
            (
                c.client?.toLowerCase().includes(s.toLowerCase()) ||
                c.adresse?.toLowerCase().includes(s.toLowerCase()) ||
                c.telephone?.includes(s) ||
                c.email?.toLowerCase().includes(s.toLowerCase())
            )
        );
    }, [state.chantiers, s]);

    // Derived filtered lists for the Kanban columns
    const columns = useMemo(() => {
        // LEAD: Not SENT/RELANCE/SIGNED (includes undefined/legacy DRAFT)
        const leads = chantiers.filter(c => (!c.status || c.status === COMMERCIAL_STATUS.LEAD || c.status === 'DRAFT') && c.status !== COMMERCIAL_STATUS.SENT && c.status !== COMMERCIAL_STATUS.SIGNED && !c.commercialRelance);

        // DEVIS_ENVOYE: Sent status, not relance
        const envoyes = chantiers.filter(c => c.status === COMMERCIAL_STATUS.SENT && !c.commercialRelance);

        // EN_RELANCE: Sent status AND relance flag (Or explicit RELANCE status)
        const enRelance = chantiers.filter(c => c.status === COMMERCIAL_STATUS.RELANCE || (c.status === COMMERCIAL_STATUS.SENT && c.commercialRelance === true));

        // SIGNE: Won / Signed
        const signes = chantiers.filter(c => c.status === COMMERCIAL_STATUS.SIGNED);

        return [
            { id: 'leads', title: 'Nouveaux Leads', shortTitle: 'Leads', items: leads, color: 'bg-slate-100 dark:bg-slate-800/50', headerColor: 'text-slate-700 dark:text-slate-300', dot: 'bg-slate-400', border: 'border-slate-200 dark:border-slate-700', ring: 'ring-slate-400' },
            { id: 'envoyes', title: 'Devis Envoyés', shortTitle: 'Envoyés', items: envoyes, color: 'bg-brand-50/50 dark:bg-brand-900/10', headerColor: 'text-brand-700 dark:text-brand-300', dot: 'bg-brand-500', border: 'border-brand-100 dark:border-brand-900', ring: 'ring-brand-400' },
            { id: 'relance', title: 'En Relance', shortTitle: 'Relances', items: enRelance, color: 'bg-rose-50/50 dark:bg-rose-900/10', headerColor: 'text-rose-700 dark:text-rose-300', dot: 'bg-rose-500', border: 'border-rose-100 dark:border-rose-900', ring: 'ring-rose-400' },
            { id: 'signes', title: 'Gagnés / Signés', shortTitle: 'Gagnés', items: signes, color: 'bg-green-50/50 dark:bg-emerald-900/10', headerColor: 'text-green-700 dark:text-emerald-400', dot: 'bg-green-500', border: 'border-green-100 dark:border-green-900', ring: 'ring-green-400' }
        ];
    }, [chantiers]);

    // --- AUTO-SIGNATURE CHECKING LOGIC ---
    // We only want to check the server periodically so we don't spam it.
    // We use a ref to prevent overlapping checks if one takes too long.
    const isCheckingSignatures = useRef(false);

    useEffect(() => {
        const checkSignatures = async () => {
            if (isCheckingSignatures.current || !isOnline) return;
            isCheckingSignatures.current = true;

            try {
                // Find all active sent quotes that have a quote number
                const envoyesToCheck = chantiers.filter(c =>
                    (c.status === COMMERCIAL_STATUS.SENT || c.status === COMMERCIAL_STATUS.RELANCE) &&
                    c.extractedQuoteNumber
                );

                if (envoyesToCheck.length === 0) {
                    isCheckingSignatures.current = false;
                    return;
                }

                // Use the main GAS Webhook URL (Make sure it's the exact one deployed)
                const ADMIN_API_URL = 'https://script.google.com/macros/s/AKfycbzTS1SgE9Lg3WlFHrC5q-jsfVUXMlk0fGStJQOw2yQGM1AIssJ8-hEtKls5cJTiEvxw/exec';

                // Check them one by one to avoid overwhelming Apps Script quotas
                for (const chantier of envoyesToCheck) {
                    try {
                        console.log(`[Auto-Sync] Vérification du devis ${chantier.extractedQuoteNumber}...`);

                        // Sécurité: forcer la chaîne de caractères et enlever les espaces
                        const devisNumTreated = String(chantier.extractedQuoteNumber).trim();

                        const response = await fetch(`${ADMIN_API_URL}?check=${devisNumTreated}`);
                        if (response.ok) {
                            const data = await response.json();

                            // Afficher l'objet sous forme de texte pour qu'il soit bien lisible d'un coup dans la console
                            console.log(`[Auto-Sync] Réponse pour devis ${devisNumTreated}:`, JSON.stringify(data));

                            if (data.signed === true || data.signed === 'true') {
                                console.log(`[Auto-Sync] 🎉 Devis ${chantier.extractedQuoteNumber} détecté comme signé ! Mise à jour...`);
                                updateChantier(chantier.id, {
                                    status: COMMERCIAL_STATUS.SIGNED,
                                    dateSignature: new Date().toISOString()
                                });
                            }
                        }
                    } catch (err) {
                        console.error('Erreur vérification signature auto pour', chantier.extractedQuoteNumber, err);
                    }
                    // Small delay between checks
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            } finally {
                isCheckingSignatures.current = false;
            }
        };

        // Run immediately on mount
        checkSignatures();

        // Then check every 3 minutes (180000 ms)
        const intervalId = setInterval(checkSignatures, 180000);

        return () => clearInterval(intervalId);
    }, [chantiers, updateChantier, isOnline]);
    // --- END AUTO-SIGNATURE CHECKING LOGIC ---

    // Drag and Drop Handlers
    const handleDragStart = (e, chantierId) => {
        setDraggedId(chantierId);
        // Required for Firefox
        e.dataTransfer.setData('text/plain', chantierId);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e, columnId) => {
        e.preventDefault();
        if (!draggedId) return;

        switch (columnId) {
            case 'leads':
                updateChantier(draggedId, { status: COMMERCIAL_STATUS.LEAD, commercialRelance: false });
                break;
            case 'envoyes':
                promoteLeadToSent(draggedId, null);
                break;
            case 'relance':
                markForRelance(draggedId);
                break;
            case 'signes':
                markAsSigned(draggedId);
                setDetailChantierId(draggedId); // Force le modal à s'ouvrir pour la bifurcation
                break;
        }

        setDraggedId(null);
    };

    // --- RELANCE ACTION HANDLER ---
    const handleRelanceAction = async (chantier, level, actionType) => {
        if (!chantier) return;

        const ADMIN_API_URL = 'https://script.google.com/macros/s/AKfycbzTS1SgE9Lg3WlFHrC5q-jsfVUXMlk0fGStJQOw2yQGM1AIssJ8-hEtKls5cJTiEvxw/exec';

        try {
            // If the user just clicked "Appelé", we only update the local state to pause the alert.
            if (actionType === 'phone') {
                updateChantier(chantier.id, {
                    relanceLevel: level,
                    status: COMMERCIAL_STATUS.RELANCE,
                    dateRelance: new Date().toISOString()
                });
                return;
            }

            // If it's an email action, call the webhook
            if (actionType === 'email' || actionType === 'email_archive') {
                // Extract the driveFileId if available (we take the first one found, assuming the quote PDF is the most recent or the only one)
                let driveFileId = '';
                if (chantier.attachments && chantier.attachments.length > 0) {
                    const pdfAttach = chantier.attachments.filter(a => a.type === 'application/pdf' && a.driveFileId);
                    if (pdfAttach.length > 0) {
                        driveFileId = pdfAttach[pdfAttach.length - 1].driveFileId; // latest pdf
                    }
                }

                // Show some feedback (could be a toast in a fuller app, here we rely on the card updating)
                const payload = {
                    action: 'relance_devis',
                    devis: chantier.extractedQuoteNumber || '',
                    client: chantier.client || '',
                    email: chantier.email || '',
                    fileId: driveFileId,
                    relanceLevel: level
                };

                const response = await fetch(ADMIN_API_URL, {
                    method: 'POST',
                    body: JSON.stringify(payload)
                });

                const result = await response.json();

                if (result.status === 'success') {
                    // Update state on success
                    const updates = {
                        relanceLevel: level,
                        dateRelance: new Date().toISOString()
                    };

                    // For level 3, we move to Archive. Since we don't have an Archive status yet in COMMERCIAL_STATUS, 
                    // we'll set a flag or create a new status if supported. Assuming we reuse PERDU or just filter it out.
                    // Let's add archived flag so the dashboard can hide it if needed, or simply let it be LOST.
                    if (actionType === 'email_archive') {
                        // Assuming you have a LOST or ARCHIVED status. If not, we can just set status to a custom string for now
                        updates.status = 'ARCHIVED';
                    } else {
                        updates.status = COMMERCIAL_STATUS.RELANCE;
                    }

                    updateChantier(chantier.id, updates);
                } else {
                    alert('Erreur lors de l\'envoi de l\'email de relance : ' + (result.message || 'Erreur inconnue'));
                }
            }
        } catch (error) {
            console.error('Erreur handleRelanceAction:', error);
            alert('Impossible de joindre le serveur pour la relance.');
        }
    };


    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
            {showNewLeadModal && (
                <NewLeadModal
                    onClose={() => setShowNewLeadModal(false)}
                    onSubmit={(data) => {
                        createNewLead(data);
                        setShowNewLeadModal(false);
                    }}
                />
            )}

            {detailChantierId && (
                <CommercialDetailModal
                    chantierId={detailChantierId}
                    onClose={() => setDetailChantierId(null)}
                />
            )}

            {/* Header */}
            <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 pt-[max(1rem,env(safe-area-inset-top))] pb-4 flex-shrink-0 flex items-center shadow-sm z-20 pl-16 md:pl-6">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white mr-auto">Commercial</h2>

                {/* RIGHT ACTIONS (From AppHeader) */}
                <div className="flex gap-2 relative">
                    {/* SYNC STATUS ICON */}
                    {isOnline ? (
                        firebaseConnected ? (
                            <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-full" title="Connecté au Cloud">
                                <Cloud size={20} className="text-green-500" />
                            </div>
                        ) : (
                            <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-full animate-pulse" title="Problème de connexion Firebase (Quota/Réseau)">
                                <AlertCircle size={20} className="text-orange-500" />
                            </div>
                        )
                    ) : (
                        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full" title="Hors Connexion">
                            <CloudOff size={20} className="text-slate-400" />
                        </div>
                    )}

                    {/* MENU BURGER */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center justify-center min-w-[44px] min-h-[44px] bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                        <Menu size={20} />
                    </button>

                    {/* DROPDOWN MENU */}
                    {menuOpen && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)}></div>
                            <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50 animate-fade-in origin-top-right">
                                <div className="p-2 space-y-1">
                                    <button onClick={() => { toggleDark(); setMenuOpen(false); }} className="w-full flex items-center px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                                        {isDark ? <Sun size={16} className="mr-3 text-orange-400" /> : <Moon size={16} className="mr-3 text-brand-600" />}
                                        {isDark ? 'Mode Clair' : 'Mode Sombre'}
                                    </button>

                                    <div className="h-px bg-slate-100 dark:bg-slate-700 my-1"></div>

                                    {onOpenTrash && (
                                        <button onClick={() => { onOpenTrash(); setMenuOpen(false); }} className="w-full flex items-center px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                                            <Trash2 size={16} className="mr-3 text-red-500" />
                                            Corbeille
                                        </button>
                                    )}

                                    {onOpenSettings && (
                                        <button onClick={() => { onOpenSettings(); setMenuOpen(false); }} className="w-full flex items-center px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                                            <Settings size={16} className="mr-3 text-slate-400" />
                                            Paramètres...
                                        </button>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* SEARCH BAR & NOUVEAU LEAD */}
            <div className="flex-none bg-white dark:bg-slate-900 px-4 pt-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-full mx-auto relative flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 text-slate-400" size={20} />
                        <input className="w-full pl-10 p-2.5 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all shadow-inner" placeholder="Rechercher un dossier..." value={s} onChange={e => setS(e.target.value)} />
                    </div>
                    <Button onClick={() => setShowNewLeadModal(true)} icon={Plus} className="py-2 text-sm shadow-sm whitespace-nowrap px-4 hover:scale-[1.02] transition-transform">Nouveau Lead</Button>
                </div>
            </div>

            {/* MOBILE NAV TILES (Fixed Top Mobile) */}
            <div className="md:hidden flex-none px-2 pt-4 pb-2 bg-slate-50 dark:bg-slate-900 w-full relative z-10 shrink-0">
                <div className="grid grid-cols-4 gap-2 lg:gap-3">
                    {columns.map(col => (
                        <button
                            key={`tile-${col.id}`}
                            onClick={() => setMobileTab(col.id)}
                            className={`p-3 lg:p-4 rounded-xl border transition-all flex flex-col items-center justify-center text-center gap-1.5
                                ${mobileTab === col.id ? `ring-2 ring-offset-1 ${col.ring} border-transparent scale-100` : `${col.border.replace('border-', 'border-')}/30 opacity-90`}
                                ${col.color}`}
                        >
                            <div className="text-2xl font-bold">{col.items.length}</div>
                            <div className="text-[11px] leading-tight font-bold uppercase w-full break-words">{col.shortTitle}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* SCROLLABLE COLUMNS WRAPPER (Like DashboardView) */}
            <main className="flex-1 min-h-0 overflow-y-auto pb-40 md:pb-0 w-full mx-auto bg-slate-50 dark:bg-slate-900">
                <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-4 gap-6 h-auto px-4 md:px-6 md:pt-6 pb-6 w-full mx-auto">
                    {columns.map(col => (
                        <div
                            key={col.id}
                            className={`flex flex-col h-full rounded-2xl border ${col.border}/60 ${col.color} ${mobileTab === col.id ? 'block' : 'hidden md:flex'}`}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, col.id)}
                        >
                            {/* Column Header (Desktop Only to remove duplicate text on Mobile) */}
                            <div className="hidden md:flex items-center justify-between mb-4 md:mb-0 md:p-4 shrink-0 border-b border-transparent md:border-slate-200/50 dark:md:border-slate-700/50">
                                <h3 className={`font-bold ${col.headerColor} flex items-center gap-2`}>
                                    <div className={`hidden md:block w-2.5 h-2.5 rounded-full ${col.dot}`}></div>
                                    {col.title}
                                    <span className="bg-white/50 dark:bg-slate-800/50 text-xs px-2 py-0.5 rounded-full shadow-sm ml-2">
                                        {col.items.length}
                                    </span>
                                </h3>
                            </div>

                            {/* Column Cards (Flow naturally on PC and Mobile) */}
                            <div className="flex-1 p-0 pt-4 md:p-3 pb-0 md:pb-6 space-y-3">
                                {col.items.length === 0 ? (
                                    <div className="h-24 md:h-full flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl text-slate-400 dark:text-slate-500 text-sm font-medium">
                                        Vide
                                    </div>
                                ) : (
                                    col.items.map(chantier => (
                                        <div
                                            key={chantier.id}
                                            className={`group relative ${draggedId === chantier.id ? 'opacity-50' : ''}`}
                                            draggable="true"
                                            onDragStart={(e) => handleDragStart(e, chantier.id)}
                                            onDragEnd={() => setDraggedId(null)}
                                        >
                                            {/* Drag Handle Indicator (PC only) */}
                                            <div className="hidden md:block absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10 cursor-grab active:cursor-grabbing text-slate-300 dark:text-slate-600">
                                                <GripVertical size={16} />
                                            </div>
                                            <div className="md:group-hover:translate-x-3 transition-transform duration-200">
                                                <CommercialCard
                                                    c={chantier}
                                                    onClick={(id) => setDetailChantierId(id)}
                                                    onDuplicate={(id) => duplicateChantier(id)}
                                                    onDelete={(id) => { if (window.confirm('Supprimer ce lead ?')) deleteChantier(id); }}
                                                    onPromoteToSent={promoteLeadToSent}
                                                    onMarkForRelance={markForRelance}
                                                    onMarkAsSigned={markAsSigned}
                                                    onTriggerRelanceAction={handleRelanceAction}
                                                />
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

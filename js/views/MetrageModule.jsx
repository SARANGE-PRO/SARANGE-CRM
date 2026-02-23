import React, { useState, Suspense } from 'react';
import { Spinner } from "../components/ui/Spinner.jsx";
import { Cloud, CloudOff, AlertCircle, Menu, Sun, Moon, Archive, Trash2, Settings } from 'lucide-react';
import { useApp } from "../context.js";

// Import existing views that are now under MetrageModule
const DashboardView = React.lazy(() => import("./DashboardView.jsx").then(m => ({ default: m.DashboardView })));
const CalendarView = React.lazy(() => import("./CalendarView.jsx"));
const MapView = React.lazy(() => import("./MapView.jsx"));

export const MetrageModule = ({
    onNew,
    onNavigate,
    viewMode,
    isDark,
    toggleDark,
    onOpenSettings,
    onOpenTrash,
    isOnline,
    firebaseConnected
}) => {
    const { state } = useApp();
    const [activeTab, setActiveTab] = useState('accueil');
    const [menuOpen, setMenuOpen] = useState(false);
    const [showArchived, setShowArchived] = useState(false);

    const allChantiers = (state.chantiers || []).filter(c => !c.deleted && !c.purged);
    const countArchived = allChantiers.filter(c => c.archived).length;

    const tabs = [
        { id: 'accueil', label: 'Tableau de bord' },
        { id: 'calendrier', label: 'Planning Métreur' },
        { id: 'carte', label: 'Carte' }
    ];

    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
            {/* Module Header / Tabs and Utilities */}
            <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 pt-4 px-4 md:px-6 flex-shrink-0 shadow-sm z-20">
                <div className="flex items-center justify-between mb-2">
                    {/* Added mr-auto pl-12 on mobile to make room for the absolute Hamburger Menu from App.jsx */}
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white pl-12 md:pl-0">Bureau d'Études</h2>

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
                            className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
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

                                        {activeTab === 'accueil' && (
                                            <button onClick={() => { setShowArchived(!showArchived); setMenuOpen(false); }} className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${showArchived ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'}`}>
                                                <Archive size={16} className="mr-3" />
                                                {showArchived ? 'Voir Dossiers Actifs' : 'Voir Archives'}
                                                {countArchived > 0 && <span className="ml-auto text-xs bg-slate-100 dark:bg-slate-600 px-1.5 rounded-full font-medium">{countArchived}</span>}
                                            </button>
                                        )}

                                        {onOpenTrash && (
                                            <button onClick={() => { onOpenTrash(); setMenuOpen(false); }} className="w-full flex items-center px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                                                <Trash2 size={16} className="mr-3 text-red-500" />
                                                Corbeille
                                            </button>
                                        )}

                                        {onOpenSettings && (
                                            <button onClick={() => { onOpenSettings(); setMenuOpen(false); }} className="w-full flex items-center px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                                                <Settings size={16} className="mr-3" />
                                                Paramètres
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* TABS */}
                <div className="flex items-center gap-6">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id
                                ? 'border-brand-600 text-brand-600'
                                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-auto relative">
                <Suspense fallback={<div className="flex items-center justify-center h-full"><Spinner size={40} className="text-brand-600" /></div>}>
                    {activeTab === 'accueil' && (
                        <DashboardView
                            onNew={onNew}
                            viewMode={viewMode || 'dashboard'}
                            setViewMode={onNavigate}
                            isDark={isDark}
                            toggleDark={toggleDark}
                            onOpenSettings={onOpenSettings}
                            onOpenTrash={onOpenTrash}
                            isOnline={isOnline}
                            firebaseConnected={firebaseConnected}
                            showArchived={showArchived}
                        />
                    )}

                    {activeTab === 'calendrier' && (
                        <CalendarView
                            isDark={isDark}
                            toggleDark={toggleDark}
                            onOpenSettings={onOpenSettings}
                            onOpenTrash={onOpenTrash}
                            isOnline={isOnline}
                            firebaseConnected={firebaseConnected}
                        />
                    )}

                    {activeTab === 'carte' && (
                        <MapView
                            isDark={isDark}
                            toggleDark={toggleDark}
                            onOpenSettings={onOpenSettings}
                            onOpenTrash={onOpenTrash}
                            isOnline={isOnline}
                            firebaseConnected={firebaseConnected}
                        />
                    )}
                </Suspense>
            </div>
        </div>
    );
};

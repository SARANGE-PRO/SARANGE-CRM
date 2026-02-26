import React, { useState } from 'react';
import { Cloud, CloudOff, AlertCircle, Menu, Sun, Moon, Archive, Trash2, Settings } from 'lucide-react';
import { useApp } from '../context.js';

export const AppHeader = ({
    title,
    subtitle,
    isDark,
    toggleDark,
    onOpenSettings,
    onOpenTrash,
    showArchived,
    setShowArchived,
    countArchived,
    isOnline,     // Passé depuis App.jsx ou via context si dispo
    firebaseConnected // Passé depuis App.jsx ou via context
}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex-none z-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-[env(safe-area-inset-top)] h-[calc(64px+env(safe-area-inset-top))] flex flex-col justify-center shadow-sm">
            <div className="flex justify-between items-center w-full mx-auto max-w-7xl">
                {/* LOGO / TITLE */}
                <div className="flex items-center gap-2">
                    <img src="/favicon-512.png" alt="Logo" className="w-8 h-8 object-contain rounded-lg" />
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                            {title || <>Sarange<span className="text-brand-600">Metrage</span></>}
                        </h1>
                        {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{subtitle}</p>}
                    </div>
                </div>

                {/* RIGHT ACTIONS */}
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
                                    <button onClick={toggleDark} className="w-full flex items-center px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                                        {isDark ? <Sun size={16} className="mr-3 text-orange-400" /> : <Moon size={16} className="mr-3 text-brand-600" />}
                                        {isDark ? 'Mode Clair' : 'Mode Sombre'}
                                    </button>

                                    <div className="h-px bg-slate-100 dark:bg-slate-700 my-1"></div>

                                    {setShowArchived && (
                                        <button onClick={() => { setShowArchived(!showArchived); setMenuOpen(false); }} className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${showArchived ? 'bg-brand-50 text-brand-700' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50'}`}>
                                            <Archive size={16} className="mr-3" />
                                            {showArchived ? 'Voir Dossiers Actifs' : 'Voir Archives'}
                                            {countArchived !== undefined && <span className="ml-auto text-xs bg-slate-100 px-1.5 rounded-full">{countArchived}</span>}
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
        </header>
    );
};

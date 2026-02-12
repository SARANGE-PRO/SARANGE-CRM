import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Calendar, Map, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../context.js';

/**
 * AppLayout - Responsive Navigation Wrapper
 * 
 * Mobile: Bottom Tab Bar (fixed at bottom, 64px + safe area)
 * Desktop: Sidebar (left side, collapsible, 280px / 80px)
 * 
 * Focus Mode: Hides navigation when currentView === 'chantier'
 */
export const AppLayout = ({ currentView, onNavigate, children }) => {
    const { selectChantier } = useApp();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    // Navigation items configuration
    const navItems = [
        { id: 'dashboard', label: 'Accueil', icon: LayoutDashboard },
        { id: 'calendar', label: 'Calendrier', icon: Calendar },
        { id: 'map', label: 'Carte', icon: Map }
    ];

    // Focus Mode: Hide navigation for detail views
    const isFocusMode = ['chantier', 'settings', 'trash'].includes(currentView);

    // Persist sidebar state
    useEffect(() => {
        const saved = localStorage.getItem('sarange_sidebar_collapsed');
        if (saved !== null) {
            setSidebarCollapsed(saved === 'true');
        }
    }, []);

    const toggleSidebar = () => {
        const newState = !sidebarCollapsed;
        setSidebarCollapsed(newState);
        localStorage.setItem('sarange_sidebar_collapsed', String(newState));
    };

    const handleNavClick = (id) => {
        selectChantier(null);
        onNavigate(id);
    };

    // NavItem component
    const NavItem = ({ item, isMobile = false }) => {
        const Icon = item.icon;
        const isActive = currentView === item.id;

        if (isMobile) {
            return (
                <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex flex-col items-center justify-center gap-1 flex-1 py-2 transition-all
            ${isActive
                            ? 'text-brand-600 dark:text-brand-400'
                            : 'text-slate-500 dark:text-slate-400 active:scale-95'
                        }`}
                >
                    <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                    <span className={`text-[10px] font-bold uppercase tracking-wide ${isActive ? 'text-brand-700 dark:text-brand-300' : ''}`}>
                        {item.label}
                    </span>
                </button>
            );
        }

        // Desktop sidebar item
        return (
            <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all group
          ${isActive
                        ? 'bg-brand-600 text-white shadow-md'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
            >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                {!sidebarCollapsed && (
                    <span className="font-medium">{item.label}</span>
                )}
            </button>
        );
    };

    return (
        <div className="flex h-screen lg:h-screen supports-[height:100dvh]:h-[100dvh] overflow-hidden bg-slate-50 dark:bg-slate-900">
            {/* DESKTOP SIDEBAR */}
            {!isFocusMode && (
                <aside
                    className={`hidden lg:flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out ${sidebarCollapsed ? 'w-20' : 'w-72'
                        }`}
                >
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
                        {!sidebarCollapsed && (
                            <div className="flex items-center gap-2">
                                <img src="/favicon-512.png" alt="Logo" className="w-8 h-8 rounded-lg" />
                                <h1 className="font-bold text-lg">
                                    Sarange<span className="text-brand-600">Pro</span>
                                </h1>
                            </div>
                        )}
                        <button
                            onClick={toggleSidebar}
                            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 ml-auto"
                            title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                        >
                            {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex-1 p-4 space-y-2">
                        {navItems.map(item => (
                            <NavItem key={item.id} item={item} />
                        ))}
                    </nav>

                    {/* Sidebar Footer */}
                    {!sidebarCollapsed && (
                        <div className="p-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 text-center">
                            SarangePro v2.0
                        </div>
                    )}
                </aside>
            )}

            {/* MAIN CONTENT */}
            <main className="flex-1 overflow-hidden">
                {children}
            </main>

            {/* MOBILE BOTTOM TAB BAR */}
            {!isFocusMode && (
                <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <div className="flex items-center justify-around h-16 px-2 pb-safe">
                        {navItems.map(item => (
                            <NavItem key={item.id} item={item} isMobile />
                        ))}
                    </div>
                    {/* Safe Area Bottom Padding */}
                    <div className="h-[env(safe-area-inset-bottom)] bg-transparent" />
                </nav>
            )}
        </div>
    );
};

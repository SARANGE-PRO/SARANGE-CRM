import React from 'react';
import {
    LayoutDashboard,
    Briefcase,
    PencilRuler,
    Factory,
    Package,
    Truck,
    CreditCard,
    X
} from 'lucide-react';

export const Sidebar = ({ currentView, onNavigate, onClose }) => {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'commercial', label: 'Commercial', icon: Briefcase },
        { id: 'metrage', label: "Bureau d'Études", icon: PencilRuler },
        { id: 'atelier', label: 'Atelier & Fab', icon: Factory },
        { id: 'stocks', label: 'Stocks', icon: Package },
        { id: 'terrain', label: 'Planning & Pose', icon: Truck },
        { id: 'finances', label: 'Facturation', icon: CreditCard }
    ];

    return (
        <aside className="w-64 bg-slate-900 text-slate-300 h-screen flex flex-col flex-shrink-0 z-50">
            <div className="p-6 pt-[calc(max(1.5rem,env(safe-area-inset-top))+8px)] flex items-center justify-between">
                <div className="flex-1 max-w-[160px]">
                    <svg viewBox="0 0 350 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <defs>
                            <linearGradient id="textGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#FFFFFF" />
                                <stop offset="100%" stopColor="#CBD5E1" />
                            </linearGradient>
                        </defs>
                        <text x="0" y="45" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="48" fill="url(#textGradDark)" letterSpacing="-0.05em">SARANGE</text>
                        <circle cx="232" cy="40" r="5" fill="#F97316" />
                    </svg>
                </div>
                {onClose && (
                    <button onClick={onClose} className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">
                        <X size={20} />
                    </button>
                )}
            </div>

            <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
                {navItems.map(item => {
                    const Icon = item.icon;
                    const isActive = currentView === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                ? 'bg-brand-600 text-white'
                                : 'hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <Icon size={20} />
                            <span className="font-medium text-sm">{item.label}</span>
                        </button>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
                SarangePro ERP
            </div>
        </aside>
    );
};

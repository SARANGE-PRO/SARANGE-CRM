import React, { useState } from 'react';
import { Calendar, Download, ExternalLink } from 'lucide-react';
import { Button } from "../ui.jsx";
import { generateGoogleCalendarUrl, downloadICS } from "../utils/calendar.js";

const AddToCalendarBtn = ({ chantier }) => {
    const [showOptions, setShowOptions] = useState(false);

    if (!chantier || !chantier.dateIntervention) return null;

    const handleGoogle = () => {
        window.open(generateGoogleCalendarUrl(chantier), '_blank');
        setShowOptions(false);
    };

    const handleICS = () => {
        downloadICS(chantier);
        setShowOptions(false);
    };

    return (
        <div className="relative inline-block">
            <Button
                variant="secondary"
                onClick={() => setShowOptions(!showOptions)}
                className="py-2 px-3 text-sm flex items-center gap-2"
                title="Ajouter à l'agenda"
            >
                <Calendar size={16} />
                <span className="hidden sm:inline">Agenda</span>
            </Button>

            {showOptions && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-50 animate-fade-in overflow-hidden flex flex-col p-1">
                    <button
                        onClick={handleGoogle}
                        className="flex items-center w-full px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 rounded-lg transition-colors text-left"
                    >
                        <ExternalLink size={14} className="mr-2" /> Google Calendar
                    </button>
                    <button
                        onClick={handleICS}
                        className="flex items-center w-full px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors text-left"
                    >
                        <Download size={14} className="mr-2" /> Outlook / Apple
                    </button>
                </div>
            )}

            {/* Backdrop to close */}
            {showOptions && (
                <div className="fixed inset-0 z-40" onClick={() => setShowOptions(false)}></div>
            )}
        </div>
    );
};

export default AddToCalendarBtn;

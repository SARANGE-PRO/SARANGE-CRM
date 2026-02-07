import React, { useState } from 'react';
import { Modal, Button, Input } from '../ui.jsx';
import { Calendar, Clock, ArrowRight, Sun, Moon } from 'lucide-react';

export const PlanningModal = ({ onClose, onConfirm }) => {
    // Dates par défaut : Demain 9h
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const defaultDate = tomorrow.toISOString().split('T')[0];

    const [dateDay, setDateDay] = useState(defaultDate);
    const [dateTime, setDateTime] = useState('09:00');

    const handleQuickDate = (daysToAdd) => {
        const d = new Date();
        d.setDate(d.getDate() + daysToAdd);
        setDateDay(d.toISOString().split('T')[0]);
    };

    const handleQuickTime = (time) => {
        setDateTime(time);
    };

    const handleSubmit = () => {
        if (!dateDay || !dateTime) return alert("Veuillez choisir une date et une heure");
        const combinedDate = `${dateDay}T${dateTime}`;
        onConfirm(combinedDate);
        onClose();
    };

    const QuickBadge = ({ label, onClick, active }) => (
        <button
            onClick={onClick}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${active ? 'bg-brand-100 text-brand-700 border-brand-200' : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300'}`}
        >
            {label}
        </button>
    );

    return (
        <Modal isOpen={true} onClose={onClose} title="Planifier l'intervention" size="sm">
            <div className="p-4">

                {/* Section Date */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                            <Calendar size={16} /> Date
                        </label>
                        <div className="flex gap-2">
                            <QuickBadge label="Demain" onClick={() => handleQuickDate(1)} active={false} />
                            <QuickBadge label="+2j" onClick={() => handleQuickDate(2)} active={false} />
                            <QuickBadge label="+7j" onClick={() => handleQuickDate(7)} active={false} />
                        </div>
                    </div>
                    <Input
                        type="date"
                        value={dateDay}
                        onChange={setDateDay} // Input passe directement la value
                        className="font-bold text-lg"
                        min={new Date().toISOString().split('T')[0]}
                    />
                </div>

                {/* Section Heure */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                            <Clock size={16} /> Heure
                        </label>
                        <div className="flex gap-2">
                            <QuickBadge label="09:00" onClick={() => handleQuickTime('09:00')} active={dateTime === '09:00'} />
                            <QuickBadge label="14:00" onClick={() => handleQuickTime('14:00')} active={dateTime === '14:00'} />
                        </div>
                    </div>
                    <Input
                        type="time"
                        value={dateTime}
                        onChange={setDateTime} // Input passe directement la value
                        className="font-bold text-lg text-center"
                    />
                </div>

                {/* Validation */}
                <Button onClick={handleSubmit} className="w-full py-4 text-lg shadow-lg" icon={ArrowRight}>
                    Valider le rendez-vous
                </Button>
            </div>
        </Modal>
    );
};

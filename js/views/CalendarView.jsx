import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, CheckCircle, Phone, ArrowRight, User, Clock, AlertTriangle, X } from 'lucide-react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay, addMonths, subMonths, startOfWeek, endOfWeek, isSameMonth, isToday } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useApp } from '../context.js';
import { Button } from "../components/ui/Button.jsx";
import { ChantierCard } from "../components/ChantierCard.jsx";

export const CalendarView = ({ isDark, toggleDark }) => {
    const { state, selectChantier, navigate, setReturnView } = useApp();
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(new Date());
    const [selectedChantierId, setSelectedChantierId] = useState(null); // Pour le détail à droite

    // Get all chantiers with intervention dates
    const chantiersWithDates = useMemo(() => {
        return (state.chantiers || [])
            .filter(c => !c.deleted && !c.purged && c.dateIntervention)
            .map(c => ({
                ...c,
                interventionDate: new Date(c.dateIntervention)
            }));
    }, [state.chantiers]);

    // Get chantiers for a specific day
    const getChantiersForDay = (day) => {
        return chantiersWithDates.filter(c =>
            isSameDay(c.interventionDate, day)
        );
    };

    // Generate calendar days
    const calendarDays = useMemo(() => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(currentMonth);
        const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 }); // Lundi
        const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

        return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
    }, [currentMonth]);

    // Selected day chantiers & Selected Single Chantier
    const selectedDayChantiers = selectedDay ? getChantiersForDay(selectedDay) : [];
    const selectedChantier = selectedChantierId ? state.chantiers.find(c => c.id === selectedChantierId) : null;

    const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const handleToday = () => {
        const today = new Date();
        setCurrentMonth(today);
        setSelectedDay(today);
        setSelectedChantierId(null);
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
        setSelectedChantierId(null); // Reset detail view on day change
    };

    const handleChantierClick = (id) => {
        setReturnView('calendar');
        selectChantier(id);
        navigate('dashboard');
    };

    return (
        <div className="flex flex-col h-full lg:h-full supports-[height:100dvh]:h-[100dvh] bg-slate-50 dark:bg-slate-900 overflow-hidden">
            {/* Desktop Navigation Bar */}
            <div className="flex-none bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-2">
                <div className="w-full flex items-center justify-between">
                    <button
                        onClick={handleToday}
                        className="px-3 py-1.5 text-xs font-medium bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300 rounded-lg hover:bg-brand-100 dark:hover:bg-brand-900/40 transition-colors"
                    >
                        Aujourd'hui
                    </button>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handlePrevMonth}
                            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNextMonth}
                            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Grid - REMOVED MAX-WIDTH CONSTRAINT */}
            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-24 lg:pb-6">
                <div className="w-full">
                    <div className="flex flex-col lg:flex-row gap-6">

                        {/* Calendar Left Column */}
                        <div className="flex-1 min-w-0">
                            {/* Weekday Headers */}
                            <div className="grid grid-cols-7 gap-1 mb-2">
                                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, idx) => (
                                    <div
                                        key={idx}
                                        className="text-center text-xs font-bold text-slate-500 dark:text-slate-400 uppercase py-2"
                                    >
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar Days */}
                            <div className="grid grid-cols-7 gap-1 auto-rows-fr">
                                {calendarDays.map((day, idx) => {
                                    const dayChantiers = getChantiersForDay(day);
                                    const isCurrentMonth = isSameMonth(day, currentMonth);
                                    const isDayToday = isToday(day);
                                    const isSelected = selectedDay && isSameDay(day, selectedDay);
                                    const hasChantiers = dayChantiers.length > 0;

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleDayClick(day)}
                                            className={`
                                                relative flex flex-col items-start justify-start p-1 lg:p-2 rounded-lg border transition-all text-sm
                                                min-h-[4rem] h-auto lg:h-24 w-full
                                                ${!isCurrentMonth ? 'text-slate-300 dark:text-slate-700 bg-slate-50 dark:bg-slate-900/50' : ''}
                                                ${isCurrentMonth && !isDayToday ? 'text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-slate-600' : ''}
                                                ${isDayToday ? 'text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/20 border-brand-500 dark:border-brand-500 font-bold shadow-sm' : ''}
                                                ${isSelected ? 'ring-2 ring-brand-500 dark:ring-brand-400 ring-offset-1 z-10' : ''}
                                                ${hasChantiers && isCurrentMonth ? 'cursor-pointer' : ''}
                                            `}
                                        >
                                            <span className={`
                                                flex items-center justify-center w-6 h-6 rounded-full text-xs mb-1
                                                ${isDayToday ? 'bg-brand-600 text-white' : ''}
                                            `}>
                                                {format(day, 'd')}
                                            </span>

                                            {/* Desktop Content (Dots/List) */}
                                            <div className="flex-1 w-full flex flex-col gap-0.5 overflow-hidden">
                                                {/* Mobile Dots */}
                                                <div className="lg:hidden flex gap-0.5 flex-wrap content-start h-full w-full pt-1">
                                                    {dayChantiers.map((c, i) => (
                                                        <div key={i} className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.googleEventId ? 'bg-green-500' : 'bg-brand-400'}`} />
                                                    ))}
                                                </div>

                                                {/* Desktop Bars */}
                                                <div className="hidden lg:flex flex-col gap-1 w-full">
                                                    {dayChantiers.slice(0, 3).map((c, i) => (
                                                        <div key={i} className={`
                                                            h-1.5 w-full rounded-full 
                                                            ${c.googleEventId ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'}
                                                        `} title={c.client} />
                                                    ))}
                                                    {dayChantiers.length > 3 && (
                                                        <span className="text-[9px] text-slate-400 leading-none pl-1">+{dayChantiers.length - 3}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Details Right Column (Desktop) */}
                        <div className="lg:w-96 flex-none mt-6 lg:mt-0">
                            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col lg:h-full lg:max-h-[calc(100vh-140px)] lg:sticky lg:top-0 transition-all">

                                {selectedChantier ? (
                                    // MODE DÉTAIL SINGLE (Via ChantierCard)
                                    <div className="flex flex-col h-full animate-fade-in p-2">
                                        <div className="flex justify-between items-center mb-2 px-2">
                                            <h3 className="font-bold text-slate-700 dark:text-slate-300">Détails</h3>
                                            <button onClick={() => setSelectedChantierId(null)} className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors">
                                                <X size={18} className="text-slate-500" />
                                            </button>
                                        </div>
                                        <ChantierCard c={selectedChantier} />
                                    </div>
                                ) : (
                                    // MODE LISTE DU JOUR
                                    <>
                                        <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 rounded-t-xl">
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                                <CalendarIcon size={18} className="text-brand-600" />
                                                <span className="capitalize">
                                                    {selectedDay ? format(selectedDay, 'EEEE d MMM', { locale: fr }) : 'Sélectionnez une date'}
                                                </span>
                                            </h3>
                                        </div>

                                        <div className="flex-1 lg:overflow-y-auto p-3 space-y-2">
                                            {!selectedDay ? (
                                                <div className="flex flex-col items-center justify-center h-40 text-slate-400 text-center p-4">
                                                    <CalendarIcon size={32} className="mb-2 opacity-50" />
                                                    <p className="text-sm">Cliquez sur un jour du calendrier</p>
                                                </div>
                                            ) : selectedDayChantiers.length === 0 ? (
                                                <div className="flex flex-col items-center justify-center h-40 text-slate-400 text-center p-4">
                                                    <p className="italic text-sm">Aucune intervention</p>
                                                    <p className="text-xs mt-1">Sélectionnez une autre date</p>
                                                </div>
                                            ) : (
                                                selectedDayChantiers.map(chantier => (
                                                    <button
                                                        key={chantier.id}
                                                        onClick={() => handleChantierClick(chantier.id)}
                                                        className="w-full text-left p-3 from-white to-slate-50 bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-lg hover:to-white hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 group relative overflow-hidden"
                                                    >
                                                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${chantier.googleEventId ? 'bg-green-500' : 'bg-slate-300'}`} />
                                                        <div className="pl-2">
                                                            <div className="font-bold text-slate-800 dark:text-white mb-0.5 flex items-center justify-between text-sm">
                                                                <span className="truncate">{chantier.client}</span>
                                                                <span className="text-xs font-mono bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-300">
                                                                    {format(new Date(chantier.dateIntervention), 'HH:mm', { locale: fr })}
                                                                </span>
                                                            </div>
                                                            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1 mb-1">
                                                                <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                                                                <span className="line-clamp-2 leading-tight">{chantier.adresse}</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-[10px] text-brand-600 font-medium mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                            Voir le détail
                                                            <ArrowRight size={10} />
                                                        </div>
                                                    </button>
                                                ))
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarView;

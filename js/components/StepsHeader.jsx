import React from 'react';
import { CheckCircle, Circle, Clock, Loader } from 'lucide-react';

export const StepsHeader = ({ currentStep }) => {
    // Steps: 1. Création, 2. Planification, 3. Métrage, 4. Envoyé
    const steps = [
        { id: 1, label: 'Création' },
        { id: 2, label: 'Planification' },
        { id: 3, label: 'Métrage' },
        { id: 4, label: 'Envoyé' }
    ];

    return (
        <div className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4">
            <div className="flex items-center justify-between relative max-w-3xl mx-auto">
                {/* Progress Bar Background */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 dark:bg-slate-800 -z-0 rounded-full"></div>

                {/* Active Progress Bar */}
                <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-600 transition-all duration-500 -z-0 rounded-full"
                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                ></div>

                {steps.map((step) => {
                    const isCompleted = step.id < currentStep;
                    const isCurrent = step.id === currentStep;

                    return (
                        <div key={step.id} className="relative z-10 flex flex-col items-center group cursor-default">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isCompleted ? 'bg-brand-600 border-brand-600 text-white' :
                                        isCurrent ? 'bg-white dark:bg-slate-900 border-brand-600 text-brand-600 scale-110 shadow-lg' :
                                            'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-300'
                                    }`}
                            >
                                {isCompleted ? <CheckCircle size={16} /> :
                                    isCurrent ? <Loader size={16} className="animate-spin-slow" /> :
                                        <span className="text-xs font-bold">{step.id}</span>
                                }
                            </div>
                            <span
                                className={`absolute top-full mt-2 text-xs font-bold whitespace-nowrap transition-colors duration-300 ${isCurrent ? 'text-brand-600 dark:text-brand-400' :
                                        isCompleted ? 'text-slate-700 dark:text-slate-300' :
                                            'text-slate-400 dark:text-slate-600'
                                    }`}
                            >
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

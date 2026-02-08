import React from 'react';
import { Check, Loader2 } from 'lucide-react';

export const StepsHeader = ({ currentStep, onStepClick }) => {
    // Steps: 1. Création, 2. Planification, 3. Métrage, 4. Envoyé
    const steps = [
        { id: 1, label: 'Création' },
        { id: 2, label: 'Planification' },
        { id: 3, label: 'Métrage' },
        { id: 4, label: 'Envoyé' }
    ];

    const progress = Math.min(100, Math.max(0, ((currentStep - 1) / (steps.length - 1)) * 100));

    return (
        <div className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
            <div className="max-w-2xl mx-auto px-4 py-4">
                <div className="relative flex items-center justify-between">

                    {/* Progress Bar Background */}
                    <div className="absolute top-[15px] left-0 w-full h-[3px] bg-slate-100 dark:bg-slate-800 rounded-full -z-0"></div>

                    {/* Active Progress Bar */}
                    <div
                        className="absolute top-[15px] left-0 h-[3px] bg-gradient-to-r from-brand-500 to-brand-600 dark:from-brand-600 dark:to-brand-500 transition-all duration-500 ease-out rounded-full -z-0"
                        style={{ width: `${progress}%` }}
                    ></div>

                    {/* Steps */}
                    {steps.map((step) => {
                        const isCompleted = step.id < currentStep;
                        const isCurrent = step.id === currentStep;
                        const isInteractive = step.id <= currentStep; // Allow clicking past steps logic

                        return (
                            <div
                                key={step.id}
                                onClick={() => isInteractive && onStepClick && onStepClick(step.id)}
                                className={`
                                    relative flex flex-col items-center group
                                    ${isInteractive ? 'cursor-pointer' : 'cursor-default'}
                                `}
                            >
                                {/* Circle Indicator */}
                                <div
                                    className={`
                                        w-8 h-8 rounded-full flex items-center justify-center border-2 text-sm font-bold z-10 transition-all duration-300 transform
                                        ${isCompleted
                                            ? 'bg-brand-600 border-brand-600 text-white shadow-md scale-100'
                                            : isCurrent
                                                ? 'bg-white dark:bg-slate-900 border-brand-600 text-brand-600 shadow-lg scale-110 ring-4 ring-brand-50 dark:ring-brand-900/20'
                                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600 scale-95'
                                        }
                                        ${isInteractive && !isCurrent ? 'group-hover:border-brand-300 dark:group-hover:border-brand-700' : ''}
                                    `}
                                >
                                    {isCompleted ? (
                                        <Check className="w-4 h-4" strokeWidth={3} />
                                    ) : isCurrent ? (
                                        <Loader2 className="w-4 h-4 animate-spin text-brand-600" />
                                    ) : (
                                        <span>{step.id}</span>
                                    )}
                                </div>

                                {/* Label */}
                                <span
                                    className={`
                                        mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide transition-colors duration-300 text-center px-1
                                        ${isCurrent
                                            ? 'text-brand-600 dark:text-brand-400 translate-y-0 opacity-100'
                                            : isCompleted
                                                ? 'text-slate-600 dark:text-slate-400 translate-y-0 opacity-100'
                                                : 'text-slate-400 dark:text-slate-600 translate-y-0 opacity-100' // Keeping visible for layout stability
                                        }
                                    `}
                                >
                                    {step.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

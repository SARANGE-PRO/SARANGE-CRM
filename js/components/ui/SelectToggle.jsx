import React from 'react';

const cn = (...parts) => parts.filter(Boolean).join(' ');

export const SelectToggle = ({ options, value, onChange, label, error, id, className = '', disabled = false }) =>
    React.createElement(
        'div',
        { className: cn('mb-4', className), id },
        label
            ? React.createElement(
                'label',
                { className: 'block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300' },
                label,
            )
            : null,
        React.createElement(
            'div',
            { className: 'flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl' },
            options.map((option) =>
                React.createElement(
                    'button',
                    {
                        key: option.value,
                        type: 'button',
                        onClick: () => !disabled && onChange(option.value),
                        disabled: disabled,
                        className: cn(
                            'flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-all',
                            value === option.value
                                ? 'bg-white dark:bg-slate-700 text-brand-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200',
                            disabled && 'opacity-50 cursor-not-allowed'
                        ),
                    },
                    option.label,
                ),
            ),
        ),
        error
            ? React.createElement('span', { className: 'text-xs text-red-500 mt-1 block' }, 'Requis')
            : null,
    );

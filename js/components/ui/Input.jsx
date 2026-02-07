import React from 'react';

const cn = (...parts) => parts.filter(Boolean).join(' ');

export const Input = ({
    label,
    value,
    onChange,
    placeholder,
    type = 'text',
    error,
    inputMode,
    pattern,
    id,
    className = '',
    disabled = false,
    min,
    step
}) =>
    React.createElement(
        'div',
        { className: cn('mb-4', className), id },
        label
            ? React.createElement(
                'label',
                {
                    className: cn(
                        'block text-sm font-medium mb-1.5',
                        error ? 'text-red-600' : 'text-slate-700 dark:text-slate-300',
                    ),
                },
                `${label}${error ? ' *' : ''}`,
            )
            : null,
        React.createElement('input', {
            type,
            value: value || '',
            onChange: (e) => onChange && onChange(e.target.value),
            placeholder,
            inputMode,
            pattern,
            disabled,
            min,
            step,
            className: cn(
                'w-full p-3 rounded-xl bg-white dark:bg-slate-900 border outline-none transition-all dark:text-white focus:ring-4',
                error
                    ? 'border-red-500 focus:ring-red-200 focus:border-red-500'
                    : 'border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-brand-200',
                disabled && 'opacity-50 cursor-not-allowed',
            ),
        }),
        error
            ? React.createElement('span', { className: 'text-xs text-red-500 mt-1 block' }, 'Requis')
            : null,
    );

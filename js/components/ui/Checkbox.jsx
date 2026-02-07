import React from 'react';
import { cn } from './Button.jsx';

export const Checkbox = ({ label, checked, onChange, disabled }) => {
    return React.createElement(
        'label',
        { className: cn('flex items-center gap-3 cursor-pointer group', disabled && 'opacity-50 cursor-not-allowed') },
        React.createElement(
            'div',
            {
                className: cn(
                    'w-5 h-5 rounded border flex items-center justify-center transition-all',
                    checked
                        ? 'bg-brand-600 border-brand-600 text-white'
                        : 'bg-white border-slate-300 group-hover:border-brand-400',
                ),
            },
            checked && React.createElement(
                'svg',
                {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '3',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    className: 'w-3.5 h-3.5',
                },
                React.createElement('polyline', { points: '20 6 9 17 4 12' }),
            )
        ),
        React.createElement(
            'input',
            {
                type: 'checkbox',
                className: 'hidden',
                checked,
                onChange: (e) => !disabled && onChange(e.target.checked),
                disabled,
            }
        ),
        React.createElement('span', { className: 'text-sm text-slate-700 dark:text-slate-300 select-none' }, label)
    );
};

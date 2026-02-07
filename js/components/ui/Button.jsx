import React from 'react';

export const cn = (...parts) => parts.filter(Boolean).join(' ');

export const Button = ({
    onClick,
    variant = 'primary',
    children,
    icon: Icon,
    disabled = false,
    className = '',
    type = 'button',
}) => {
    const variants = {
        primary: 'bg-brand-600 text-white hover:bg-brand-700 disabled:bg-brand-300 shadow-lg shadow-brand-500/25 focus-visible:ring-brand-300',
        whatsapp: 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/20 focus-visible:ring-green-300',
        secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 focus-visible:ring-brand-200',
        danger: 'bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 dark:bg-red-900/20 dark:border-red-900/30 focus-visible:ring-red-200',
        ghost: 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:ring-brand-200',
    };

    const content = [];
    if (Icon) {
        content.push(
            React.createElement(Icon, {
                key: 'icon',
                size: 18,
                className: children ? 'mr-2' : undefined,
            }),
        );
    }
    content.push(children);

    return React.createElement(
        'button',
        {
            type,
            onClick,
            disabled,
            className: cn(
                'inline-flex items-center justify-center px-4 py-3 rounded-full font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-4',
                variants[variant] || variants.primary,
                className,
            ),
        },
        content,
    );
};

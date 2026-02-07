import React from 'react';
import { cn } from './Button.jsx';

export const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
    if (!isOpen) return null;

    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-xl',
        lg: 'max-w-3xl',
        full: 'max-w-full m-4',
    };

    return React.createElement(
        'div',
        { className: 'fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in' },
        React.createElement(
            'div',
            {
                className: cn(
                    'bg-white dark:bg-slate-900 rounded-t-2xl md:rounded-2xl shadow-2xl w-full flex flex-col max-h-[90vh] animate-slide-up md:animate-fade-in',
                    sizes[size],
                ),
            },
            React.createElement(
                'div',
                { className: 'px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center' },
                React.createElement('h3', { className: 'font-bold text-lg dark:text-white' }, title),
                React.createElement(
                    'button',
                    {
                        onClick: onClose,
                        className: 'p-2 -mr-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-50 dark:bg-slate-800 rounded-full transition-colors',
                    },
                    '✕',
                ),
            ),
            React.createElement('div', { className: 'overflow-y-auto p-4' }, children),
        ),
    );
};

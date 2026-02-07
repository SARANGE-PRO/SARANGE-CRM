import React from 'react';
import { cn } from './Button.jsx';

export const StatusBanner = ({ variant = 'info', icon: Icon, children, action, onAction }) => {
    const styles = {
        info: 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-900/30',
        success: 'bg-green-50 text-green-700 border-green-100 dark:bg-green-900/20 dark:text-green-300 dark:border-green-900/30',
        warning: 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-900/30',
        error: 'bg-red-50 text-red-700 border-red-100 dark:bg-red-900/20 dark:text-red-300 dark:border-red-900/30',
    };

    return React.createElement(
        'div',
        { className: cn('px-4 py-3 border-b flex justify-between items-center text-sm font-medium', styles[variant]) },
        React.createElement(
            'div',
            { className: 'flex items-center gap-2' },
            Icon && React.createElement(Icon, { size: 16 }),
            React.createElement('span', null, children),
        ),
        action &&
        React.createElement(
            'button',
            {
                onClick: onAction,
                className: 'text-xs bg-white/50 hover:bg-white/80 px-2 py-1 rounded font-bold uppercase tracking-wider transition-colors',
            },
            action,
        ),
    );
};

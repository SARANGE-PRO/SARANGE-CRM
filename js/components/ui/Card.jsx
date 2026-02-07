import React from 'react';
import { cn } from './Button.jsx';

export const Card = ({ children, className = '', onClick }) =>
    React.createElement(
        'div',
        {
            onClick,
            className: cn(
                'bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden',
                className,
            ),
        },
        children,
    );

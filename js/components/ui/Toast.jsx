import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const cn = (...parts) => parts.filter(Boolean).join(' ');

export const Toast = ({ message, type = 'success', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const bg = type === 'error' ? 'bg-red-500' : 'bg-slate-800';

    return React.createElement(
        'div',
        { className: cn('fixed bottom-4 right-4 text-white px-6 py-3 rounded-xl shadow-xl z-50 animate-slide-up flex items-center gap-3', bg) },
        type === 'success' && React.createElement(CheckCircle, { size: 20, className: 'text-green-400' }),
        React.createElement('span', { className: 'font-medium' }, message)
    );
};

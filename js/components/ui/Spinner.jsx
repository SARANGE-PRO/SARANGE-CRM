import React from 'react';

const cn = (...parts) => parts.filter(Boolean).join(' ');

export const Spinner = ({ size = 'md', className = '' }) => {
    const sizes = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12' };
    return React.createElement('div', { className: cn('animate-spin rounded-full border-2 border-brand-600 border-t-transparent', sizes[size], className) });
};

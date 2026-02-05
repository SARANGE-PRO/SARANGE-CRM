import React from 'https://esm.sh/react@18.2.0';

const cn = (...parts) => parts.filter(Boolean).join(' ');

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

export const SelectToggle = ({ options, value, onChange, label, error, id, className = '', disabled = false }) =>
  React.createElement(
    'div',
    { className: cn('mb-4', className), id },
    React.createElement(
      'label',
      {
        className: cn(
          'block text-sm font-medium mb-2',
          error ? 'text-red-600' : 'text-slate-700 dark:text-slate-300',
        ),
      },
      `${label}${error ? ' *' : ''}`,
    ),
    React.createElement(
      'div',
      {
        className: cn(
          'flex flex-wrap gap-2 p-1 rounded-xl',
          error ? 'border border-red-200 bg-red-50' : '',
        ),
      },
      options.map((option) =>
        React.createElement(
          'button',
          {
            key: option.value,
            type: 'button',
            onClick: () => !disabled && onChange(option.value),
            disabled,
            className: cn(
              'px-3 py-2 rounded-xl text-sm font-medium border transition-all',
              value === option.value
                ? 'bg-brand-600 text-white border-brand-600 shadow-lg shadow-brand-500/25'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
              disabled && 'opacity-50 cursor-not-allowed',
            ),
          },
          option.label,
        ),
      ),
    ),
  );

export const Card = ({ className = '', children, ...rest }) =>
  React.createElement(
    'div',
    {
      className: cn('bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm', className),
      ...rest,
    },
    children,
  );

// Spinner - Indicateur de chargement
export const Spinner = ({ size = 20, className = '' }) =>
  React.createElement('div', {
    className: cn('animate-spin rounded-full border-2 border-current border-t-transparent', className),
    style: { width: size, height: size }
  });

// Modal - Bottom Sheet sur mobile, Centrée sur tablette/desktop
export const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    full: 'max-w-full'
  };

  return React.createElement(
    'div',
    {
      className: 'fixed inset-0 z-50 flex items-end md:items-center justify-center',
      onClick: (e) => e.target === e.currentTarget && onClose?.()
    },
    // Overlay
    React.createElement('div', {
      className: 'absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in'
    }),
    // Modal Content
    React.createElement(
      'div',
      {
        className: cn(
          'relative w-full bg-white dark:bg-slate-900 shadow-2xl',
          'rounded-t-3xl md:rounded-2xl',
          'max-h-[90vh] overflow-y-auto',
          'animate-slide-up md:animate-fade-in',
          sizes[size] || sizes.md,
          'md:mx-4'
        )
      },
      // Header avec titre et bouton fermer
      title && React.createElement(
        'div',
        { className: 'sticky top-0 bg-white dark:bg-slate-900 px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center' },
        React.createElement('h2', { className: 'text-xl font-bold dark:text-white' }, title),
        onClose && React.createElement(
          'button',
          {
            onClick: onClose,
            className: 'p-2 -mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400'
          },
          '✕'
        )
      ),
      // Body
      React.createElement('div', { className: 'p-6' }, children)
    )
  );
};

// StatusBanner - Bandeau d'état (header)
export const StatusBanner = ({ variant = 'info', icon: Icon, children, action, onAction }) => {
  const variants = {
    success: 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800',
    error: 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800',
    warning: 'bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800',
    info: 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800'
  };

  return React.createElement(
    'div',
    { className: cn('px-4 py-3 border-b flex items-center justify-between', variants[variant]) },
    React.createElement(
      'div',
      { className: 'flex items-center gap-2' },
      Icon && React.createElement(Icon, { size: 18, className: 'shrink-0' }),
      React.createElement('span', { className: 'text-sm font-medium' }, children)
    ),
    action && React.createElement(
      'button',
      { onClick: onAction, className: 'text-xs font-bold uppercase opacity-80 hover:opacity-100 underline' },
      action
    )
  );
};

// Toast - Notification temporaire
export const Toast = ({ message, type = 'success', onClose }) => {
  const types = {
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-slate-800 text-white',
    warning: 'bg-amber-500 text-white'
  };

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠'
  };

  React.useEffect(() => {
    const timer = setTimeout(() => onClose?.(), 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return React.createElement(
    'div',
    {
      className: cn(
        'fixed bottom-24 left-1/2 -translate-x-1/2 z-[60]',
        'px-5 py-3 rounded-full shadow-xl',
        'flex items-center gap-3',
        'animate-slide-up',
        types[type]
      )
    },
    React.createElement('span', { className: 'text-lg' }, icons[type]),
    React.createElement('span', { className: 'font-medium' }, message)
  );
};

// Checkbox - Case à cocher stylisée pour checklist
export const Checkbox = ({ checked, onChange, label, className = '' }) =>
  React.createElement(
    'label',
    {
      className: cn(
        'flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all min-h-[56px]',
        checked
          ? 'bg-brand-50 dark:bg-brand-900/20 border-brand-500 text-brand-700 dark:text-brand-300'
          : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
        className
      )
    },
    React.createElement('input', {
      type: 'checkbox',
      checked: checked,
      onChange: (e) => onChange?.(e.target.checked),
      className: 'w-6 h-6 rounded-md accent-brand-600'
    }),
    React.createElement('span', { className: 'font-medium dark:text-white' }, label)
  );

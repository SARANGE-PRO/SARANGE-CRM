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
      className: cn(
        'w-full p-3 rounded-xl bg-white dark:bg-slate-900 border outline-none transition-all dark:text-white focus:ring-4',
        error
          ? 'border-red-500 focus:ring-red-200 focus:border-red-500'
          : 'border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-brand-200',
      ),
    }),
    error
      ? React.createElement('span', { className: 'text-xs text-red-500 mt-1 block' }, 'Requis')
      : null,
  );

export const SelectToggle = ({ options, value, onChange, label, error, id, className = '' }) =>
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
            onClick: () => onChange(option.value),
            className: cn(
              'px-3 py-2 rounded-xl text-sm font-medium border transition-all',
              value === option.value
                ? 'bg-brand-600 text-white border-brand-600 shadow-lg shadow-brand-500/25'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
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

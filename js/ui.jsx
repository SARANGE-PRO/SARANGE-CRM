import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, CheckCircle, AlertCircle, AlertTriangle, Lock, Unlock, Edit, Calendar, Clock, Plus, Trash2, Copy, Send, UserCheck, Search, Settings, Archive, Cloud, CloudOff, Sun, Moon, Menu } from 'lucide-react';

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
  min
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
    label
      ? React.createElement(
        'label',
        { className: 'block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300' },
        label,
      )
      : null,
    React.createElement(
      'div',
      { className: 'flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl' },
      options.map((option) =>
        React.createElement(
          'button',
          {
            key: option.value,
            type: 'button',
            onClick: () => !disabled && onChange(option.value),
            disabled: disabled,
            className: cn(
              'flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-all',
              value === option.value
                ? 'bg-white dark:bg-slate-700 text-brand-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200',
              disabled && 'opacity-50 cursor-not-allowed'
            ),
          },
          option.label,
        ),
      ),
    ),
    error
      ? React.createElement('span', { className: 'text-xs text-red-500 mt-1 block' }, 'Requis')
      : null,
  );

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
    { className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in' },
    React.createElement(
      'div',
      {
        className: cn(
          'bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full flex flex-col max-h-[90vh]',
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
      React.createElement('div', { className: 'overflow-y-auto' }, children),
    ),
  );
};

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

export const Spinner = ({ size = 'md', className = '' }) => {
  const sizes = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12' };
  return React.createElement('div', { className: cn('animate-spin rounded-full border-2 border-brand-600 border-t-transparent', sizes[size], className) });
};

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

/* --- NOUVEAU COMPOSANT : SmartAddress --- */
export const SmartAddress = ({ address, gps, className = "" }) => {
  const handleClick = (e) => {
    e.stopPropagation(); // Empêche le clic de traverser vers la carte parent

    let url = "";
    // Si on a le GPS précis -> Lien qui force le point exact (Waze/Maps adorent)
    if (gps && gps.lat && gps.lon) {
      url = `https://www.google.com/maps/search/?api=1&query=${gps.lat},${gps.lon}`;
    } else {
      // Sinon recherche texte classique
      url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    }

    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`text-left hover:text-brand-600 hover:underline flex items-start group transition-colors ${className}`}
      title="Ouvrir le GPS"
    >
      <MapPin size={14} className="mr-1 mt-0.5 shrink-0 text-slate-400 group-hover:text-brand-500" />
      <span>{address}</span>
    </button>
  );
};

/* --- MISE À JOUR : AddressInput (Capture GPS) --- */
export const AddressInput = ({ value, onChange }) => {
  const [s, setS] = useState([]);
  const [o, setO] = useState(false);
  const r = useRef(null);
  const d = useRef(null);

  useEffect(() => {
    const h = e => { if (r.current && !r.current.contains(e.target)) setO(false) };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h)
  }, []);

  const fA = async q => {
    try {
      // On demande les coordonnées géométriques
      const res = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(q)}&limit=5`);
      if (res.ok) {
        const j = await res.json();
        setS(j.features || []);
        setO(true);
      }
    } catch { }
  };

  const h = (e) => {
    const v = e.target.value;
    // Si l'utilisateur tape manuellement, on envoie juste le texte (pas de GPS)
    // Pour garder la compatibilité avec l'ancien code qui attendait juste un string :
    // On vérifie si onChange attend un objet ou un string, mais pour la rétrocompatibilité
    // on va ruser : on envoie le string, mais le parent devra gérer l'objet via la sélection
    onChange(v);

    if (d.current) clearTimeout(d.current);
    if (v.length > 3) d.current = setTimeout(() => fA(v), 300);
    else setO(false);
  };

  const handleSelect = (item) => {
    const label = item.properties.label;
    const coords = item.geometry.coordinates; // [long, lat] attention !

    // On construit l'objet complet
    const locationData = {
      address: label,
      gps: {
        lon: coords[0],
        lat: coords[1]
      }
    };

    // IMPORTANT : On passe l'objet complet au parent.
    // Le parent (NewChantierModal) devra détecter si c'est un objet ou string.
    onChange(locationData);
    setO(false);
  };

  return (
    <div className="relative mb-4" ref={r}>
      <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Adresse</label>
      <div className="relative">
        <input
          className="w-full p-3 pl-10 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-brand-500 dark:bg-slate-900 dark:text-white"
          placeholder="Saisir l'adresse..."
          value={typeof value === 'object' ? value.address : value} // Gère le cas où value est un objet
          onChange={h}
        />
        <MapPin size={18} className="absolute left-3 top-3.5 text-slate-400" />
      </div>
      {o && s.length > 0 && (
        <ul className="absolute z-50 w-full bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-lg shadow-xl mt-1 max-h-60 overflow-auto">
          {s.map(i => (
            <li
              key={i.properties.id}
              onClick={() => handleSelect(i)}
              className="p-3 border-b dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700 cursor-pointer flex flex-col group"
            >
              <span className="font-medium text-sm text-slate-800 dark:text-slate-200">{i.properties.name}</span>
              <span className="text-xs text-slate-500">{i.properties.postcode} {i.properties.city}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

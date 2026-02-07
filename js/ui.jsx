import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, CheckCircle, AlertCircle, AlertTriangle, Lock, Unlock, Edit, Calendar, Clock, Plus, Trash2, Copy, Send, UserCheck, Search, Settings, Archive, Cloud, CloudOff, Sun, Moon, Menu, Loader2, X, ExternalLink } from 'lucide-react';

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
/* --- SMART ADDRESS : OUVRE DIRECTEMENT LE GPS --- */
export const SmartAddress = ({ address, gps, className = "" }) => {
  if (!address) return <span className="text-slate-400 italic text-xs">Pas d'adresse</span>;

  const openGPS = (e) => {
    e.stopPropagation(); // Empêche le clic de traverser (ex: ouverture modal chantier)

    const query = encodeURIComponent(address);
    const lat = gps?.lat;
    const lon = gps?.lon;

    // Détection simple iOS (iPhone/iPad)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isIOS) {
      // iOS : Apple Maps est le standard qui gère le mieux l'intention "Y aller"
      // Si l'utilisateur a Google Maps, iOS peut proposer le choix ou ouvrir Apple Maps par défaut.
      if (lat && lon) {
        window.location.href = `http://maps.apple.com/?ll=${lat},${lon}&q=${query}`;
      } else {
        window.location.href = `http://maps.apple.com/?q=${query}`;
      }
    } else {
      // Android / Autres : Le protocole GEO est le standard pour déclencher le choix d'app (Maps, Waze, CityMapper...)
      // On force le mode "geo:" qui est une intention système
      if (lat && lon) {
        window.location.href = `geo:${lat},${lon}?q=${lat},${lon}(${query})`;
      } else {
        // Fallback recherche texte si pas de coordonnées
        window.location.href = `geo:0,0?q=${query}`;
      }
    }
  };

  return (
    <button
      onClick={openGPS}
      className={`text-left hover:text-brand-600 hover:underline flex items-start group transition-colors ${className}`}
      title="Ouvrir dans le GPS"
    >
      <MapPin size={14} className="mr-1 mt-0.5 shrink-0 text-slate-400 group-hover:text-brand-500" />
      <span className="truncate">{address}</span>
      <ExternalLink size={10} className="ml-1 mt-1 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};

/* --- INPUT ADRESSE "INTELLIGENT" (AUTOCOMPLETION + GPS PRÉCIS) --- */
export const AddressInput = ({ value, onChange }) => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  // Fermer les suggestions si on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  // Fonction de recherche d'adresse (Autocomplete)
  const searchAddress = async (query) => {
    if (!query || query.length < 3) return;
    try {
      const res = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=5`);
      const data = await res.json();
      if (data && data.features) {
        setSuggestions(data.features);
        setShowSuggestions(true);
      }
    } catch (e) {
      console.error("Erreur recherche adresse", e);
    }
  };

  // Gestion de la saisie manuelle avec "Debounce"
  useEffect(() => {
    const query = typeof value === 'object' ? value.address : value;
    const timer = setTimeout(() => {
      if (query && showSuggestions) {
        searchAddress(query);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [value, showSuggestions]);

  // 📍 GÉOLOCALISATION AMÉLIORÉE
  const handleLocate = () => {
    if (!navigator.geolocation) return alert("Géolocalisation non supportée");

    setLoading(true);
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const res = await fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${pos.coords.longitude}&lat=${pos.coords.latitude}`);
          const data = await res.json();

          if (data && data.features && data.features.length > 0) {
            const bestMatch = data.features[0];

            // On propose l'adresse trouvée ET ses voisins
            const locationData = {
              address: bestMatch.properties.label,
              gps: { lat: pos.coords.latitude, lon: pos.coords.longitude }
            };

            onChange(locationData);
            setSuggestions(data.features);
            setShowSuggestions(true);
          } else {
            alert("Adresse introuvable à cette position.");
          }
        } catch (e) {
          console.error(e);
          alert("Erreur réseau API Adresse");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setLoading(false);
        console.warn("Erreur GPS:", err);
        alert("Impossible de vous localiser précisément. Vérifiez que le GPS est activé.");
      },
      options
    );
  };

  const handleSelect = (feature) => {
    const locationData = {
      address: feature.properties.label,
      gps: {
        lon: feature.geometry.coordinates[0],
        lat: feature.geometry.coordinates[1]
      }
    };
    onChange(locationData);
    setShowSuggestions(false);
  };

  const displayValue = typeof value === 'object' ? value.address : (value || '');

  return (
    <div className="mb-4 relative" ref={wrapperRef}>
      <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">Adresse du chantier</label>

      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={displayValue}
            onChange={(e) => {
              onChange(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => displayValue && displayValue.length > 3 && setShowSuggestions(true)}
            placeholder="Saisir ou cliquer sur le pin..."
            className="w-full p-3 pl-10 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all shadow-sm"
            autoComplete="off"
          />
          <MapPin size={18} className="absolute left-3 top-3.5 text-slate-400" />

          {displayValue && (
            <button
              type="button"
              onClick={() => { onChange(''); setSuggestions([]); }}
              className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={handleLocate}
          disabled={loading}
          className="shrink-0 w-12 flex items-center justify-center bg-brand-50 dark:bg-brand-900/20 text-brand-600 border border-brand-200 dark:border-brand-800 rounded-xl hover:bg-brand-100 transition-colors disabled:opacity-50 active:scale-95"
          title="Utiliser ma position actuelle"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : <MapPin size={20} />}
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-[100] left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-xl max-h-60 overflow-y-auto animate-fade-in divide-y divide-slate-100 dark:divide-slate-700">
          {suggestions.map((item, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => handleSelect(item)}
                className="w-full text-left px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
              >
                <MapPin size={14} className="text-slate-400 shrink-0" />
                <div>
                  <div className="font-bold">{item.properties.name}</div>
                  <div className="text-xs text-slate-400">{item.properties.postcode} {item.properties.city}</div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="text-[10px] text-slate-400 mt-1 ml-1 flex justify-between">
        <span>Le bouton utilise le GPS haute précision.</span>
        {loading && <span className="text-brand-500 font-bold">Localisation en cours...</span>}
      </p>
    </div>
  );
};


import React, { useState, useEffect, useRef } from 'react';
import { MapPin, X, Loader2 } from 'lucide-react';

export const AddressInput = ({ value, onChange }) => {
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

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

    useEffect(() => {
        const query = typeof value === 'object' ? value.address : value;
        const timer = setTimeout(() => {
            if (query && showSuggestions) {
                searchAddress(query);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [value, showSuggestions]);

    const handleLocate = () => {
        if (!navigator.geolocation) return alert("Géolocalisation non supportée");
        setLoading(true);
        const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };

        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                try {
                    const res = await fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${pos.coords.longitude}&lat=${pos.coords.latitude}`);
                    const data = await res.json();
                    if (data && data.features && data.features.length > 0) {
                        const bestMatch = data.features[0];
                        const locationData = { address: bestMatch.properties.label, gps: { lat: pos.coords.latitude, lon: pos.coords.longitude } };
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
        const locationData = { address: feature.properties.label, gps: { lon: feature.geometry.coordinates[0], lat: feature.geometry.coordinates[1] } };
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
                        onChange={(e) => { onChange(e.target.value); setShowSuggestions(true); }}
                        onFocus={() => displayValue && displayValue.length > 3 && setShowSuggestions(true)}
                        placeholder="Saisir ou cliquer sur le pin..."
                        className="w-full p-3 pl-10 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all shadow-sm"
                        autoComplete="off"
                    />
                    <MapPin size={18} className="absolute left-3 top-3.5 text-slate-400" />
                    {displayValue && (
                        <button type="button" onClick={() => { onChange(''); setSuggestions([]); }} className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600">
                            <X size={16} />
                        </button>
                    )}
                </div>
                <button type="button" onClick={handleLocate} disabled={loading} className="shrink-0 w-12 flex items-center justify-center bg-brand-50 dark:bg-brand-900/20 text-brand-600 border border-brand-200 dark:border-brand-800 rounded-xl hover:bg-brand-100 transition-colors disabled:opacity-50 active:scale-95">
                    {loading ? <Loader2 className="animate-spin" size={20} /> : <MapPin size={20} />}
                </button>
            </div>
            {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute z-[100] left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-xl max-h-60 overflow-y-auto animate-fade-in divide-y divide-slate-100 dark:divide-slate-700">
                    {suggestions.map((item, index) => (
                        <li key={index}>
                            <button type="button" onClick={() => handleSelect(item)} className="w-full text-left px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
                                <MapPin size={14} className="text-slate-400 shrink-0" />
                                <div><div className="font-bold">{item.properties.name}</div><div className="text-xs text-slate-400">{item.properties.postcode} {item.properties.city}</div></div>
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

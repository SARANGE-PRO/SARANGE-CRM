import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

export const SmartAddress = ({ address, gps, className = "" }) => {
    if (!address) return <span className="text-slate-400 italic text-xs">Pas d'adresse</span>;

    const openGPS = (e) => {
        e.stopPropagation();
        const query = encodeURIComponent(address);
        const lat = gps?.lat;
        const lon = gps?.lon;
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

        if (isIOS) {
            if (lat && lon) {
                window.location.href = `http://maps.apple.com/?ll=${lat},${lon}&q=${query}`;
            } else {
                window.location.href = `http://maps.apple.com/?q=${query}`;
            }
        } else {
            if (lat && lon) {
                window.location.href = `geo:${lat},${lon}?q=${lat},${lon}(${query})`;
            } else {
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

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
        <div className={`flex items-start group ${className}`}>
            <button
                onClick={openGPS}
                className="p-1 -m-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-brand-600 transition-colors shrink-0"
                title="Ouvrir dans le GPS"
            >
                <MapPin size={14} className="mt-0.5" />
            </button>
            <span className="truncate ml-1">{address}</span>
            <ExternalLink size={10} className="ml-1 mt-1 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </div>
    );
};

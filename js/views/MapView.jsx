import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Map as MapIcon, MapPin, ExternalLink } from 'lucide-react';
import { useApp } from '../context.js';

// Fix pour les icônes Leaflet avec Vite/Webpack
// Utilisation d'un divIcon personnalisé au lieu de l'icône par défaut
const createCustomIcon = (color = '#3b82f6') => {
    return L.divIcon({
        className: 'custom-marker-icon',
        html: `
      <div class="marker-pin" style="background: ${color};">
        <div class="marker-pulse"></div>
      </div>
    `,
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -40]
    });
};

export const MapView = ({ isDark, toggleDark }) => {
    const { state, selectChantier, navigate, setReturnView } = useApp();

    // Filtrer les chantiers avec coordonnées GPS
    const chantiersWithGPS = useMemo(() => {
        return (state.chantiers || [])
            .filter(c => !c.deleted && !c.purged && c.gps && c.gps.lat && c.gps.lon)
            .map(c => ({
                ...c,
                position: [c.gps.lat, c.gps.lon]
            }));
    }, [state.chantiers]);

    // Calculer le centre de la carte (moyenne des positions ou Paris par défaut)
    const mapCenter = useMemo(() => {
        if (chantiersWithGPS.length === 0) {
            return [48.8566, 2.3522]; // Paris par défaut
        }

        const avgLat = chantiersWithGPS.reduce((sum, c) => sum + c.gps.lat, 0) / chantiersWithGPS.length;
        const avgLng = chantiersWithGPS.reduce((sum, c) => sum + c.gps.lon, 0) / chantiersWithGPS.length;
        return [avgLat, avgLng];
    }, [chantiersWithGPS]);

    const handleChantierClick = (id) => {
        setReturnView('map');
        selectChantier(id);
        navigate('dashboard');
    };

    // Déterminer la couleur du marker selon le statut
    const getMarkerColor = (chantier) => {
        if (chantier.sendStatus === 'SENT') return '#10b981'; // Vert - Envoyé
        if (chantier.dateIntervention) return '#3b82f6'; // Bleu - Planifié
        return '#f59e0b'; // Orange - À planifier
    };

    return (
        <div className="flex flex-col h-full lg:h-full supports-[height:100dvh]:h-[100dvh] bg-slate-50 dark:bg-slate-900 overflow-hidden">
            {/* Legend Sub-header */}
            <div className="flex-none bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-2">
                <div className="flex gap-4 text-xs justify-center">
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span className="text-slate-600 dark:text-slate-400">À planifier</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-slate-600 dark:text-slate-400">Planifié</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-slate-600 dark:text-slate-400">Envoyé</span>
                    </div>
                </div>
            </div>

            {/* Map Container */}
            <div className="flex-1 relative pb-24 lg:pb-0">
                {chantiersWithGPS.length === 0 ? (
                    <div className="flex items-center justify-center h-full p-8">
                        <div className="text-center max-w-md">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-4">
                                <MapPin size={32} className="text-slate-400" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                                Aucun chantier géolocalisé
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Les chantiers avec une adresse géolocalisée apparaîtront sur cette carte.
                            </p>
                        </div>
                    </div>
                ) : (
                    <MapContainer
                        center={mapCenter}
                        zoom={chantiersWithGPS.length === 1 ? 13 : 11}
                        className="h-full w-full z-0"
                        style={{ height: '100%', width: '100%', minHeight: '400px' }}
                        zoomControl={true}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {chantiersWithGPS.map(chantier => {
                            const openGPS = (e) => {
                                e.stopPropagation();
                                const query = encodeURIComponent(chantier.adresse);
                                const lat = chantier.gps?.lat;
                                const lon = chantier.gps?.lon;
                                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

                                if (isIOS) {
                                    window.location.href = `http://maps.apple.com/?ll=${lat},${lon}&q=${query}`;
                                } else {
                                    // Universal Google Maps URL (Works on Desktop & Android)
                                    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`, '_blank');
                                }
                            };

                            return (
                                <Marker
                                    key={chantier.id}
                                    position={chantier.position}
                                    icon={createCustomIcon(getMarkerColor(chantier))}
                                >
                                    <Popup>
                                        <div className="p-2 min-w-[200px]">
                                            <h4 className="font-bold text-slate-800 mb-1 text-sm">
                                                {chantier.client}
                                            </h4>
                                            <p className="text-xs text-slate-600 mb-2 flex items-start gap-1">
                                                <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                                                <span>{chantier.adresse}</span>
                                            </p>
                                            {chantier.dateIntervention && (
                                                <p className="text-xs text-brand-600 mb-2 font-medium">
                                                    📅 {new Date(chantier.dateIntervention).toLocaleDateString('fr-FR', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </p>
                                            )}
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={openGPS}
                                                    className="flex-1 mt-2 px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-1"
                                                >
                                                    <MapPin size={12} />
                                                    GPS
                                                </button>
                                                <button
                                                    onClick={() => handleChantierClick(chantier.id)}
                                                    className="flex-1 mt-2 px-3 py-1.5 bg-brand-600 text-white text-xs font-medium rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-1"
                                                >
                                                    Voir
                                                    <ExternalLink size={12} />
                                                </button>
                                            </div>
                                        </div>
                                    </Popup>
                                </Marker>
                            );
                        })}
                    </MapContainer>
                )}
            </div>
        </div>
    );
};

export default MapView;

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
            manifest: {
                name: 'Sarange Pro',
                short_name: 'SarangePro',
                description: 'Application de métrage professionnelle pour Sarange',
                theme_color: '#ffffff',
                background_color: '#ffffff',
                display: 'standalone',
                scope: '/',
                start_url: '/',
                icons: [
                    {
                        src: 'icon-192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'icon-512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/api-adresse\.data\.gouv\.fr\/.*/i,
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'api-adresse-cache',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 60 * 60 * 24 // 1 jour
                            },
                            networkTimeoutSeconds: 5
                        }
                    },
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 an
                            }
                        }
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': '/js'
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'lucide-react'],
                    utils: ['./js/utils.js', './js/db.js', './js/reports.js']
                }
            }
        }
    }
});

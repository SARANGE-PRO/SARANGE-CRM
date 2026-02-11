import React from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Modal } from './ui/Modal.jsx';
import { Button } from './ui/Button.jsx';

/**
 * PDFViewerModal - In-App PDF Viewer with Iframe
 * Displays PDF using Blob URL in iframe, with fallback to open in new tab
 * 
 * @param {boolean} isOpen - Modal visibility
 * @param {function} onClose - Close handler (cleans up Blob URL)
 * @param {string} blobUrl - Blob URL for the PDF
 * @param {string} title - Modal title
 */
export const PDFViewerModal = ({ isOpen, onClose, blobUrl, title = 'Devis' }) => {
    const handleClose = () => {
        // Cleanup Blob URL to prevent memory leaks
        if (blobUrl) {
            URL.revokeObjectURL(blobUrl);
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={title}
            size="6xl"
        >
            <div className="flex flex-col h-[85vh]">
                {/* Header Actions */}
                <div className="flex justify-between items-center p-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        📄 Aperçu en ligne • Google bloque parfois l'affichage direct
                    </p>
                    <Button
                        variant="ghost"
                        size="sm"
                        icon={ExternalLink}
                        onClick={() => window.open(blobUrl, '_blank')}
                        className="text-brand-600 dark:text-brand-400 font-bold"
                    >
                        Ouvrir dans un nouvel onglet
                    </Button>
                </div>

                {/* PDF Iframe Container */}
                <div
                    className="flex-1 w-full bg-slate-100 dark:bg-slate-800 rounded-b-lg overflow-auto"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    <iframe
                        src={blobUrl}
                        className="w-full h-full border-0"
                        title="Aperçu du Devis"
                    />
                </div>
            </div>
        </Modal>
    );
};

import React, { useState } from 'react';
import { Modal } from '../ui/Modal.jsx';
import { Button } from '../ui/Button.jsx';
import { Input } from '../ui/Input.jsx';
import { AlertTriangle, RotateCcw } from 'lucide-react';

/**
 * Modale demandant le motif de retour au commercial.
 * @param {object} props
 * @param {boolean} props.isOpen
 * @param {function} props.onClose
 * @param {function} props.onConfirm - (motif: string) => void
 * @param {string}  props.clientName
 */
export const RetourCommercialModal = ({ isOpen, onClose, onConfirm, clientName }) => {
    const [reason, setReason] = useState('');
    const [customReason, setCustomReason] = useState('');
    const [isSending, setIsSending] = useState(false);

    const finalMotif = reason === 'Autre' ? customReason.trim() : reason;
    const isValid = finalMotif.length > 0;

    const handleConfirm = async () => {
        if (!isValid) return;
        setIsSending(true);
        try {
            await onConfirm(finalMotif);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={isSending ? undefined : onClose} title="↩ Retour Commercial" size="sm">
            <div className="space-y-4">
                {/* Alerte */}
                <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800 flex gap-3">
                    <AlertTriangle className="text-amber-600 shrink-0" size={20} />
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                        Le dossier <strong>{clientName}</strong> retournera au commercial avec le rapport de métrage et le motif. Le commercial pourra refaire son chiffrage.
                    </p>
                </div>

                {/* Sélection motif */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Motif du retour
                    </label>
                    <select
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all text-sm"
                    >
                        <option value="" disabled>Sélectionnez un motif...</option>
                        <option value="Cotes terrain trop différentes du devis">Cotes terrain trop différentes du devis</option>
                        <option value="Produit non réalisable">Produit non réalisable</option>
                        <option value="Support non conforme">Support non conforme</option>
                        <option value="Accès impossible">Accès impossible</option>
                        <option value="Client souhaite modification">Client souhaite modification</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>

                {reason === 'Autre' && (
                    <div className="animate-fade-in">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Précisez la raison
                        </label>
                        <Input
                            value={customReason}
                            onChange={setCustomReason}
                            placeholder="Ex: Accès trop étroit pour la baie..."
                            autoFocus
                        />
                    </div>
                )}

                {/* Actions */}
                <div className="pt-2 flex flex-col gap-2">
                    <Button
                        onClick={handleConfirm}
                        disabled={!isValid || isSending}
                        variant={isValid ? 'primary' : 'secondary'}
                        className="w-full py-3 !bg-amber-600 hover:!bg-amber-700"
                        icon={RotateCcw}
                    >
                        {isSending ? 'Envoi en cours...' : 'Confirmer le retour'}
                    </Button>
                    <Button onClick={onClose} variant="ghost" className="w-full" disabled={isSending}>
                        Annuler
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

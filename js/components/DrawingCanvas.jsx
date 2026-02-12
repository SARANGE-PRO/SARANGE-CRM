import React, { useState, useEffect, useRef } from 'react';
import { PenTool, Maximize, X, Check, Trash2, Undo, Minus, Square } from 'lucide-react';

const DrawingCanvas = ({ data, onChange, disabled = false }) => {
    const r = useRef(null);      // Canvas ref (small)
    const fsR = useRef(null);    // Canvas ref (fullscreen)

    // State
    const [lines, setLines] = useState(data?.lines || []);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isFS, setIsFS] = useState(false); // Fullscreen mode
    const [tool, setTool] = useState('free'); // 'free', 'line', 'rect'
    const [startPt, setStartPt] = useState(null); // {x,y} pour Line/Rect
    const [currentPt, setCurrentPt] = useState(null); // {x,y} pour preview

    const BW = 350, BH = 250; // Base dimensions

    // Propagation des changements vers le parent
    useEffect(() => {
        onChange({ lines: lines, width: BW, height: BH });
    }, [lines]);

    // --- MOTEUR DE RENDU ---
    const rnd = (cvs, sc = 1, ox = 0, oy = 0) => {
        if (!cvs) return;
        const c = cvs.getContext('2d');

        // Reset
        c.clearRect(0, 0, cvs.width, cvs.height);
        c.save();
        c.translate(ox, oy);
        c.scale(sc, sc);

        // Fond blanc
        c.fillStyle = "white";
        c.fillRect(0, 0, BW, BH);

        // Styles
        c.lineCap = 'round';
        c.lineJoin = 'round';
        c.lineWidth = 3;
        c.strokeStyle = '#2563EB'; // Brand Blue

        // 1. Dessiner les formes validées
        lines.forEach(line => {
            if (line.length < 1) return;
            c.beginPath();
            c.moveTo(line[0].x, line[0].y);
            for (let i = 1; i < line.length; i++) c.lineTo(line[i].x, line[i].y);
            c.stroke();
        });

        // 2. Dessiner la forme en cours (Preview)
        if (isDrawing && startPt && currentPt) {
            c.strokeStyle = '#93C5FD'; // Bleu plus clair pour le preview
            c.beginPath();

            if (tool === 'free') {
                // Pour le freehand, on dessine juste le trait en cours (géré par lines temporaires habituellement, 
                // mais ici on peut simplifier en ne dessinant rien de spécial car freehand ajoute direct aux lines)
            } else if (tool === 'line') {
                c.moveTo(startPt.x, startPt.y);
                c.lineTo(currentPt.x, currentPt.y);
            } else if (tool === 'rect') {
                const w = currentPt.x - startPt.x;
                const h = currentPt.y - startPt.y;
                c.rect(startPt.x, startPt.y, w, h);
            }
            c.stroke();
        }

        c.restore();
    };

    // Redessiner quand l'état change
    useEffect(() => { rnd(r.current); }, [lines, isDrawing, currentPt, tool]);

    // Gestion Fullscreen Redraw
    const [fsLayout, setFsLayout] = useState({ s: 1, x: 0, y: 0 });
    useEffect(() => {
        if (!isFS || !fsR.current) return;
        const c = fsR.current;
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        const s = Math.min(c.width / BW, c.height / BH) * 0.95;
        const x = (c.width - BW * s) / 2;
        const y = (c.height - BH * s) / 2;
        setFsLayout({ s, x, y });
        rnd(c, s, x, y);
    }, [isFS, lines, isDrawing, currentPt]);

    // --- LOGIQUE SOURIS / TOUCH ---
    const getPos = (e, sc = 1, ox = 0, oy = 0) => {
        const rect = e.target.getBoundingClientRect();
        const t = e.touches ? e.touches[0] : e;
        return {
            x: (t.clientX - rect.left - ox) / sc,
            y: (t.clientY - rect.top - oy) / sc
        };
    };

    const handleStart = (e, mode) => {
        if (disabled) return;
        if (e.cancelable) e.preventDefault(); // Empêche le scroll sur mobile

        const cv = mode === 'fs' ? fsR.current : r.current;
        const { s, x, y } = mode === 'fs' ? fsLayout : { s: 1, x: 0, y: 0 };
        const pt = getPos(e, s, x, y);

        setIsDrawing(true);
        setStartPt(pt);
        setCurrentPt(pt);

        if (tool === 'free') {
            // Freehand commence immédiatement une nouvelle ligne
            setLines(prev => [...prev, [pt]]);
        }
    };

    const handleMove = (e, mode) => {
        if (disabled || !isDrawing) return;
        if (e.cancelable) e.preventDefault();

        const { s, x, y } = mode === 'fs' ? fsLayout : { s: 1, x: 0, y: 0 };
        const pt = getPos(e, s, x, y);
        setCurrentPt(pt);

        if (tool === 'free') {
            // Freehand ajoute des points en continu à la dernière ligne
            setLines(prev => {
                const copy = [...prev];
                const lastLine = copy[copy.length - 1];
                if (lastLine) copy[copy.length - 1] = [...lastLine, pt];
                return copy;
            });
        }
    };

    const handleEnd = () => {
        if (!isDrawing) return;
        setIsDrawing(false);

        if (startPt && currentPt) {
            if (tool === 'line') {
                // Valider la ligne (2 points)
                setLines(prev => [...prev, [startPt, currentPt]]);
            } else if (tool === 'rect') {
                // Valider le rectangle (5 points pour fermer la boucle)
                // A -> B -> C -> D -> A
                const p1 = startPt;
                const p3 = currentPt;
                const p2 = { x: p3.x, y: p1.y };
                const p4 = { x: p1.x, y: p3.y };
                setLines(prev => [...prev, [p1, p2, p3, p4, p1]]);
            }
        }

        setStartPt(null);
        setCurrentPt(null);
    };

    // --- RENDER UI ---
    return (
        <>
            <div className={`bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 relative group ${disabled ? 'opacity-70' : ''}`}>

                {/* Header & Toolbar */}
                <div className="flex flex-col gap-2 mb-2">
                    <div className="flex justify-between items-center text-xs text-slate-500 uppercase font-bold tracking-wide">
                        <span className="flex items-center">
                            <PenTool size={14} className="mr-1" /> Croquis <span className="ml-2 text-brand-600 dark:text-brand-400 font-bold">— VUE INTÉRIEUR</span>
                        </span>
                        {!disabled && (
                            <div className="flex gap-1">
                                <button onClick={() => setLines(p => p.slice(0, -1))} className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400" title="Annuler"><Undo size={16} /></button>
                                <button onClick={() => confirm("Effacer tout ?") && setLines([])} className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded text-red-500" title="Effacer"><Trash2 size={16} /></button>
                            </div>
                        )}
                    </div>

                    {/* Outils de dessin */}
                    {!disabled && (
                        <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                            <button
                                onClick={() => setTool('free')}
                                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${tool === 'free' ? 'bg-brand-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}`}
                            >
                                <PenTool size={14} /> Crayon
                            </button>
                            <button
                                onClick={() => setTool('line')}
                                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${tool === 'line' ? 'bg-brand-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}`}
                            >
                                <Minus size={14} /> Ligne
                            </button>
                            <button
                                onClick={() => setTool('rect')}
                                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${tool === 'rect' ? 'bg-brand-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}`}
                            >
                                <Square size={14} /> Rect
                            </button>
                        </div>
                    )}
                </div>

                {/* Canvas Area */}
                <div className="relative">
                    <canvas
                        ref={r}
                        width={BW}
                        height={BH}
                        className={`w-full h-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded touch-none shadow-inner ${disabled ? 'cursor-not-allowed' : 'cursor-crosshair'}`}
                        onMouseDown={e => handleStart(e, 'sm')}
                        onMouseMove={e => handleMove(e, 'sm')}
                        onMouseUp={handleEnd}
                        onMouseLeave={handleEnd}
                        onTouchStart={e => handleStart(e, 'sm')}
                        onTouchMove={e => handleMove(e, 'sm')}
                        onTouchEnd={handleEnd}
                    />
                    {!disabled && (
                        <button
                            onClick={() => setIsFS(true)}
                            className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-full shadow border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-brand-600"
                        >
                            <Maximize size={20} />
                        </button>
                    )}
                </div>
            </div>

            {/* Fullscreen Overlay */}
            {isFS && !disabled && (
                <div className="fixed inset-0 z-[60] bg-slate-950 flex items-center justify-center touch-none">
                    <canvas
                        ref={fsR}
                        className="block cursor-crosshair"
                        onMouseDown={e => handleStart(e, 'fs')}
                        onMouseMove={e => handleMove(e, 'fs')}
                        onMouseUp={handleEnd}
                        onMouseLeave={handleEnd}
                        onTouchStart={e => handleStart(e, 'fs')}
                        onTouchMove={e => handleMove(e, 'fs')}
                        onTouchEnd={handleEnd}
                    />

                    {/* Controls Overlay */}
                    <div className="absolute top-[calc(16px+env(safe-area-inset-top))] left-4 flex gap-2 bg-slate-800/90 backdrop-blur p-2 rounded-lg border border-slate-700 shadow-xl">
                        <button onClick={() => setTool('free')} className={`p-3 rounded-md ${tool === 'free' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}><PenTool size={24} /></button>
                        <button onClick={() => setTool('line')} className={`p-3 rounded-md ${tool === 'line' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}><Minus size={24} /></button>
                        <button onClick={() => setTool('rect')} className={`p-3 rounded-md ${tool === 'rect' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}><Square size={24} /></button>
                    </div>

                    <div className="absolute top-[calc(16px+env(safe-area-inset-top))] right-4">
                        <button onClick={() => setIsFS(false)} className="p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-500"><X size={24} /></button>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-slate-800/90 backdrop-blur p-2 rounded-full border border-slate-700 shadow-xl">
                        <button onClick={() => setLines(p => p.slice(0, -1))} className="px-6 py-3 bg-slate-700 text-white rounded-full font-bold hover:bg-slate-600 flex items-center"><Undo size={20} className="mr-2" /> Annuler</button>
                        <button onClick={() => confirm("Tout effacer ?") && setLines([])} className="px-6 py-3 bg-red-900/50 text-red-200 rounded-full font-bold hover:bg-red-900/70 flex items-center"><Trash2 size={20} className="mr-2" /> Effacer</button>
                        <button onClick={() => setIsFS(false)} className="px-8 py-3 bg-green-600 text-white rounded-full font-bold hover:bg-green-500 flex items-center"><Check size={20} className="mr-2" /> OK</button>
                    </div>
                </div>
            )}
        </>
    );
};

export { DrawingCanvas };

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { AlertCircle, Loader, Cloud, CloudOff } from 'lucide-react';
import { Spinner } from "./ui.jsx";

// Firebase imports
import { db } from "../src/firebase.js";
import { ref, set, get, child } from "firebase/database";

import { DB, Logger } from "./db.js";
import { generateUUID } from "./utils.js";
import { Button } from "./ui.jsx";
import { AppContext } from "./context.js";

// Vues
const DashboardView = React.lazy(() => import("./views/DashboardView.jsx").then(m => ({ default: m.DashboardView })));
const ChantierDetailView = React.lazy(() => import("./views/ChantierDetailView.jsx").then(m => ({ default: m.ChantierDetailView })));
const SettingsView = React.lazy(() => import("./views/SettingsView.jsx").then(m => ({ default: m.SettingsView })));


/* --- BOOT SCREEN COMPONENT --- */
const BootScreen = ({ step, error, onRetry }) => {
  const [showLogs, setShowLogs] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50 dark:bg-slate-900 absolute inset-0 z-50 p-4">
      <div className="text-4xl mb-6 animate-bounce">🏗️</div>
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Sarange Pro</h1>

      {error ? (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl max-w-sm w-full text-center animate-fade-in">
          <AlertCircle size={48} className="mx-auto text-red-500 mb-4" />
          <h3 className="font-bold text-lg text-red-700 dark:text-red-300 mb-2">Erreur de démarrage</h3>
          <p className="text-sm text-red-600 dark:text-red-400 mb-6">{error.message}</p>
          <div className="space-y-3">
            <Button onClick={onRetry} variant="primary" className="w-full">Réessayer</Button>
            <div className="flex gap-2">
              <Button onClick={() => setShowLogs(!showLogs)} variant="secondary" className="flex-1 text-xs">Logs</Button>
              <Button onClick={() => { const u = URL.createObjectURL(Logger.getBlob()); window.open(u) }} variant="secondary" className="flex-1 text-xs">Download</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-64">
          <div className="flex justify-between text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">
            <span>Chargement...</span>
            <span>{step}</span>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-brand-600 animate-pulse w-full origin-left-right"></div>
          </div>
        </div>
      )}

      {showLogs && (<div className="mt-8 w-full max-w-lg bg-black text-green-400 font-mono text-xs p-4 rounded h-48 overflow-auto border border-slate-700 shadow-2xl">{Logger.logs.map((l, i) => <div key={i}><span className="opacity-50">[{l.ts.split('T')[1].split('.')[0]}]</span> <span className={l.level === 'error' ? 'text-red-400' : l.level === 'warn' ? 'text-amber-400' : ''}>{l.msg}</span></div>)}</div>)}
    </div>
  );
};

// Fonction de fusion intelligente par ID
const mergeArrays = (cloudList = [], localList = []) => {
  const merged = [...cloudList]; // On commence avec la base Cloud
  const cloudIds = new Set(cloudList.map(item => item.id));

  // On ajoute uniquement les items locaux qui NE SONT PAS dans le cloud
  localList.forEach(item => {
    if (!cloudIds.has(item.id)) {
      merged.push(item);
    }
  });

  return merged;
};

const App = () => {
  const [st, setSt] = useState({ chantiers: [], products: [], currentChantierId: null });
  const [boot, setBoot] = useState({ loading: true, step: 'Init', error: null });
  const [view, setView] = useState('list');
  const [dark, setDark] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const runBoot = async () => {
    try {
      setBoot({ loading: true, step: 'DB', error: null });
      await DB.init();

      setBoot(b => ({ ...b, step: 'Données' }));

      // 1. Charger données locales
      const localData = await DB.get('sarange_root');

      // 2. Normalisation / Fallback
      let finalData = localData || { chantiers: [], products: [] };
      finalData.chantiers = finalData.chantiers || [];
      finalData.products = finalData.products || [];

      // 3. Vérification Cloud (Sync au démarrage avec Fusion)
      if (navigator.onLine) {
        try {
          Logger.info("Vérification Cloud...");
          const snapshot = await get(child(ref(db), 'sarange_root'));
          if (snapshot.exists()) {
            const cloudData = snapshot.val();
            // Normalisation cloud
            cloudData.chantiers = cloudData.chantiers || [];
            cloudData.products = cloudData.products || [];

            Logger.info("🔄 Fusion Cloud + Local...");

            finalData = {
              ...localData, // Settings locaux
              lastWriteTime: Math.max(localData?.lastWriteTime || 0, cloudData.lastWriteTime || 0),

              // Fusion des listes : Last Write Wins per Item
              chantiers: mergeArraysSecure(cloudData.chantiers, finalData.chantiers),
              products: mergeArraysSecure(cloudData.products, finalData.products)
            };

            // Mise à jour immédiate pour sauvegarder la fusion
            await DB.set('sarange_root', finalData);
            Logger.info(`Fusion terminée : ${finalData.chantiers.length} chantiers`);
          }
        } catch (e) {
          Logger.error("Erreur check cloud", e);
        }
      }

      // Auto-archive logic (sur la donnée finale)
      const TEN_DAYS = 10 * 24 * 60 * 60 * 1000;
      const now = Date.now();
      let changed = false;
      if (finalData.chantiers) {
        finalData.chantiers = finalData.chantiers.map(c => {
          const d = new Date(c.date).getTime();
          if (!c.archived && (now - d > TEN_DAYS)) {
            changed = true;
            return { ...c, archived: true };
          }
          return c;
        });
      }
      if (changed) Logger.info("Auto-archived old chantiers");

      setSt(finalData);

      Logger.info("App Ready");
      setBoot({ loading: false, step: 'Ready', error: null });
    } catch (e) {
      console.error(e);
      Logger.error("Boot Failed", e);
      setBoot({ loading: true, step: 'Erreur', error: e });
    }
  };

  useEffect(() => { runBoot() }, []);

  // Online/Offline listeners
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Suppression du listener temps réel (Optimisation bande passante)
  // La synchro se fait désormais au démarrage (runBoot) et à la sauvegarde (AutoSave)

  // Auto-save logic (Local + Cloud Push)
  const saveTimeout = useRef(null);
  useEffect(() => {
    if (boot.loading) return;
    if (saveTimeout.current) clearTimeout(saveTimeout.current);

    saveTimeout.current = setTimeout(async () => {
      // 1. Ajouter Timestamp pour la prochaine comparaison
      const dataToSave = { ...st, lastWriteTime: Date.now() };

      // 2. Sauvegarde Locale (Toujours)
      try {
        await DB.set('sarange_root', dataToSave);
      } catch (e) { Logger.error("AutoSave Local Fail", e); }

      // 3. Sauvegarde Cloud (Si online)
      if (navigator.onLine) {
        set(ref(db, 'sarange_root'), dataToSave)
          .then(() => Logger.info("☁️ Synchro Cloud OK"))
          .catch(e => console.error("Firebase Sync Fail", e));
      }
    }, 1000); // Debounce 1s
  }, [st, boot.loading]);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  const act = {
    addChantier: c => setSt(s => ({ ...s, chantiers: [{ ...c, id: generateUUID(), updatedAt: new Date().toISOString() }, ...s.chantiers] })),
    updateChantier: (id, d) => setSt(s => ({ ...s, chantiers: s.chantiers.map(x => x.id === id ? { ...x, ...d, updatedAt: new Date().toISOString() } : x) })),
    deleteChantier: id => setSt(s => ({ ...s, chantiers: s.chantiers.filter(x => x.id !== id), products: s.products.filter(x => x.chantierId !== id) })),
    selectChantier: id => setSt(s => ({ ...s, currentChantierId: id })),
    saveProduct: p => setSt(s => { const now = new Date().toISOString(); const ex = s.products.find(x => x.id === p.id); return { ...s, products: ex ? s.products.map(x => x.id === p.id ? { ...p, dateMaj: now, updatedAt: now } : x) : [...s.products, { ...p, updatedAt: now }] } }),
    deleteProduct: id => setSt(s => ({ ...s, products: s.products.filter(x => x.id !== id) })),
    duplicateChantier: id => { const c = st.chantiers.find(x => x.id === id); if (!c) return; const nId = generateUUID(), nC = { ...c, id: nId, client: c.client + " (Copie)", date: new Date().toISOString(), updatedAt: new Date().toISOString(), dateFinalisation: null, sendStatus: 'DRAFT', sentAt: null, lastError: null }, cP = st.products.filter(p => p.chantierId === id).map(p => ({ ...p, id: generateUUID(), chantierId: nId, updatedAt: new Date().toISOString() })); setSt(s => ({ ...s, chantiers: [nC, ...s.chantiers], products: [...s.products, ...cP] })) },
    importData: (newData) => { setSt(newData); DB.set('sarange_root', newData).catch(e => console.error(e)); }
  };

  if (boot.loading) return <BootScreen step={boot.step} error={boot.error} onRetry={runBoot} />;

  // Fallback component
  const LoadingScreen = () => <div className="h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900"><Spinner size={40} className="text-brand-600" /></div>;

  return (
    <AppContext.Provider value={{ state: st, ...act }}>
      <div className="min-h-screen flex flex-col safe-pb">
        <Suspense fallback={<LoadingScreen />}>
          {view === 'settings' ? <SettingsView onBack={() => setView('list')} state={st} onImport={act.importData} /> : !st.currentChantierId ? <DashboardView onNew={() => setView('new')} viewMode={view} setViewMode={setView} isDark={dark} toggleDark={() => setDark(!dark)} onOpenSettings={() => setView('settings')} isOnline={isOnline} /> : <ChantierDetailView />}
        </Suspense>
      </div>
    </AppContext.Provider>
  );
};

const root = createRoot(document.getElementById('root')); root.render(<App />);

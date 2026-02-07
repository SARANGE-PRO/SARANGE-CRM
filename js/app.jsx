import React, { useState, useEffect, useRef, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { AlertCircle, Loader, Lock, LogOut } from 'lucide-react';
import { Spinner } from "./components/ui/Spinner.jsx";

// Firebase imports
import { db, auth, googleProvider } from "../src/firebase.js";
import { ref, set, get, child, update, remove } from "firebase/database";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

import { DB, Logger } from "./db.js";
import { generateUUID, mergeArraysSecure } from "./utils.js";
import { Button } from "./components/ui/Button.jsx"
import { Toast } from "./components/ui/Toast.jsx";
import { AppContext } from "./context.js";
import { initCalendarClient, deleteGoogleEvent } from "./utils/googleCalendar.js";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";

// Vues
const DashboardView = React.lazy(() => import("./views/DashboardView.jsx").then(m => ({ default: m.DashboardView })));
const ChantierDetailView = React.lazy(() => import("./views/ChantierDetailView.jsx").then(m => ({ default: m.ChantierDetailView })));
const SettingsView = React.lazy(() => import("./views/SettingsView.jsx").then(m => ({ default: m.SettingsView })));
const TrashView = React.lazy(() => import("./views/TrashView.jsx").then(m => ({ default: m.TrashView })));

const ALLOWED_EMAILS = ['contact@sarange.fr'];

/* --- LOGIN SCREEN COMPONENT --- */
const LoginScreen = ({ error }) => {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.error("Login Error", e);
      alert("Erreur de connexion : " + e.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50 dark:bg-slate-900 p-4">
      <img src="/favicon-512.png" alt="Sarange Metrage" className="w-32 h-auto mb-6" />
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Sarange Metrage</h1>
      <p className="text-slate-500 mb-8">Application de Métrage Professionnelle</p>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 max-w-sm text-center border border-red-200">
          <AlertCircle className="inline-block mb-1" />
          <p className="font-bold">{error}</p>
          <button onClick={() => signOut(auth)} className="text-sm underline mt-2">Se déconnecter</button>
        </div>
      )}

      {!error && (
        <Button onClick={handleLogin} className="w-full max-w-xs py-3 text-lg shadow-lg">
          Connexion Google
        </Button>
      )}
      <p className="mt-8 text-xs text-slate-400">Accès restreint au personnel autorisé.</p>
    </div>
  );
};

/* --- BOOT SCREEN COMPONENT --- */
const BootScreen = ({ step, error, onRetry }) => {
  const [showLogs, setShowLogs] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50 dark:bg-slate-900 absolute inset-0 z-50 p-4">
      <img src="/favicon-512.png" alt="Sarange Metrage" className="w-24 h-auto mb-6 animate-pulse" />
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Sarange Metrage</h1>

      {error ? (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-800 p-6 rounded-xl max-w-sm w-full text-center animate-fade-in">
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

const App = () => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [st, setSt] = useState({ chantiers: [], products: [], currentChantierId: null });
  const [boot, setBoot] = useState({ loading: true, step: 'Init', error: null });
  const [view, setView] = useState('list');
  const [dark, setDark] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'success') => setToast({ message: msg, type });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  // Init Google Calendar
  useEffect(() => {
    initCalendarClient().catch(console.error);
  }, []);

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
            let cloudData = snapshot.val();
            // Normalisation cloud
            cloudData.chantiers = cloudData.chantiers ? Object.values(cloudData.chantiers) : [];
            cloudData.products = cloudData.products ? Object.values(cloudData.products) : [];

            Logger.info("🔄 Fusion Cloud + Local (Secure)...");

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

      // --- MAINTENANCE TASK : GARBAGE COLLECTOR (TOMBSTONES) ---
      const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
      const now = Date.now();
      let changed = false;

      if (finalData.chantiers) {
        // 1. Auto-Archive (Ancien code conservé tel quel)
        finalData.chantiers = finalData.chantiers.map(c => {
          const d = new Date(c.date).getTime();
          if (!c.deleted && !c.archived && (now - d > (10 * 24 * 60 * 60 * 1000))) {
            changed = true;
            return { ...c, archived: true };
          }
          return c;
        });

        // 2. GARBAGE COLLECTOR (Suppression Physique des Tombstones > 30j)
        if (navigator.onLine) {
          const keptChantiers = [];
          for (const c of finalData.chantiers) {
            const lastUpdate = new Date(c.updatedAt || 0).getTime();

            // Si marqué PURGED et vieux de 30 jours => ON SUPPRIME POUR DE VRAI
            if (c.purged && (now - lastUpdate > THIRTY_DAYS)) {
              remove(ref(db, 'sarange_root/chantiers/' + c.id))
                .then(() => Logger.info(`💀 GC: Deleted physically ${c.id}`))
                .catch(e => Logger.error("GC Fail", e));
              changed = true;
              // On ne l'ajoute pas à keptChantiers
            } else {
              keptChantiers.push(c);
            }
          }
          finalData.chantiers = keptChantiers;
        }
      }

      if (changed) {
        Logger.info("Auto-maintenance (GC) performed");
        // On sauvegarde le résultat du nettoyage
        await DB.set('sarange_root', finalData);
      }

      setSt(finalData);

      Logger.info("App Ready");
      setBoot({ loading: false, step: 'Ready', error: null });
    } catch (e) {
      console.error(e);
      Logger.error("Boot Failed", e);
      setBoot({ loading: true, step: 'Erreur', error: e });
    }
  };

  useEffect(() => {
    if (user && ALLOWED_EMAILS.includes(user.email)) {
      runBoot();
    }
  }, [user]);

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
    // Only autosave if logged in and allowed
    if (!user || !ALLOWED_EMAILS.includes(user.email)) return;
    if (boot.loading) return;
    if (saveTimeout.current) clearTimeout(saveTimeout.current);

    saveTimeout.current = setTimeout(async () => {
      // 1. Ajouter Timestamp pour la prochaine comparaison
      const dataToSave = { ...st, lastWriteTime: Date.now() };

      // 2. Sauvegarde Locale (Toujours)
      try {
        await DB.set('sarange_root', dataToSave);
      } catch (e) { Logger.error("AutoSave Local Fail", e); }

      // 3. Sauvegarde Cloud (Si online) - UPDATE GRANULAIRE (SAFE)
      if (navigator.onLine) {
        const updates = {};
        // Pour chaque chantier, on crée une entrée à son ID
        st.chantiers.forEach(c => {
          updates['sarange_root/chantiers/' + c.id] = c;
        });
        // Idem pour les produits
        st.products.forEach(p => {
          updates['sarange_root/products/' + p.id] = p;
        });
        // On ajoute le timestamp global
        updates['sarange_root/lastWriteTime'] = Date.now();

        update(ref(db), updates)
          .then(() => Logger.info("☁️ Synchro Cloud OK (Granular)"))
          .catch(e => console.error("Firebase Sync Fail", e));
      }
    }, 1000); // Debounce 1s
  }, [st, boot.loading, user]);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  const act = React.useMemo(() => ({
    addChantier: c => {
      setSt(s => ({ ...s, chantiers: [{ ...c, id: generateUUID(), updatedAt: new Date().toISOString() }, ...s.chantiers] }));
      showToast("Dossier créé");
    },
    updateChantier: (id, d) => setSt(s => ({ ...s, chantiers: s.chantiers.map(x => x.id === id ? { ...x, ...d, updatedAt: new Date().toISOString() } : x) })),

    // Soft Delete (Corbeille)
    deleteChantier: id => {
      setSt(s => {
        const target = s.chantiers.find(c => c.id === id);
        if (target && target.googleEventId) {
          // Suppression asynchrone Google Calendar (Silent)
          deleteGoogleEvent(target).catch(console.error);
        }

        const newState = {
          ...s,
          chantiers: s.chantiers.map(x => x.id === id ? { ...x, deleted: true, deletedAt: Date.now(), updatedAt: new Date().toISOString() } : x),
          lastWriteTime: Date.now()
        };

        // 🚨 CRITICAL: Force Save immediately (bypass debounce) to avoid data loss if app closed
        DB.set('sarange_root', newState).catch(e => console.error("Force Save Local Fail", e));

        if (navigator.onLine && user && ALLOWED_EMAILS.includes(user.email)) {
          const updates = {};
          updates['sarange_root/chantiers/' + id] = newState.chantiers.find(c => c.id === id);
          updates['sarange_root/lastWriteTime'] = newState.lastWriteTime;
          update(ref(db), updates).catch(e => console.error("Force Save Cloud Fail", e));
        }

        return newState;
      });
      showToast("Dossier mis à la corbeille");
    },

    // Modifié : Rétablissement avec reset des flags
    restoreChantier: id => {
      setSt(s => ({
        ...s,
        chantiers: s.chantiers.map(x => x.id === id ? {
          ...x,
          deleted: false,
          purged: false, // On enlève le flag purged au cas où (sécurité)
          deletedAt: null,
          updatedAt: new Date().toISOString()
        } : x)
      }));
      showToast("Dossier restauré");
    },

    // Hard Delete (Définitif) => DEVIENT DU SOFT DELETE "PURGED"
    hardDeleteChantier: async id => {
      const now = new Date().toISOString();
      const updates = { purged: true, deleted: true, updatedAt: now };

      // 1. Mise à jour Optimiste (State Local)
      // On le garde dans le state mais marqué purged, pour que l'UI puisse filtrer.
      // NOTE: L'UI doit filtrer !c.purged
      setSt(s => ({
        ...s,
        chantiers: s.chantiers.map(x => x.id === id ? { ...x, ...updates } : x)
      }));

      // 2. Propagation Firebase (Pas de remove() !)
      try {
        await update(ref(db, 'sarange_root/chantiers/' + id), updates);
        // Force update local DB
        const newState = {
          ...st,
          chantiers: st.chantiers.map(x => x.id === id ? { ...x, ...updates } : x),
          lastWriteTime: Date.now()
        };
        await DB.set('sarange_root', newState);

        showToast("Dossier supprimé définitivement");
      } catch (e) {
        console.error(e);
        showToast("Erreur suppression", "error");
      }
    },

    // Vide toute la corbeille => MARK ALL AS PURGED
    emptyTrash: async () => {
      const toDelete = st.chantiers.filter(c => c.deleted && !c.purged);
      if (toDelete.length === 0) return;

      if (!confirm(`Supprimer définitivement ${toDelete.length} dossiers ?`)) return;

      const nowIso = new Date().toISOString();

      // 1. Optimistic UI
      setSt(s => ({
        ...s,
        chantiers: s.chantiers.map(c =>
          (c.deleted && !c.purged)
            ? { ...c, purged: true, updatedAt: nowIso }
            : c
        )
      }));

      // 2. Background Updates
      let success = 0;
      const updates = {};

      for (const c of toDelete) {
        updates['sarange_root/chantiers/' + c.id] = { ...c, purged: true, updatedAt: nowIso };
        success++;
      }

      try {
        // Batch update
        await update(ref(db), updates);
        showToast(`${success} dossiers supprimés`);
      } catch (e) {
        console.error("Empty Trash Fail", e);
      }
    },

    selectChantier: id => setSt(s => ({ ...s, currentChantierId: id })),
    saveProduct: p => setSt(s => { const now = new Date().toISOString(); const ex = s.products.find(x => x.id === p.id); return { ...s, products: ex ? s.products.map(x => x.id === p.id ? { ...p, dateMaj: now, updatedAt: now } : x) : [...s.products, { ...p, updatedAt: now }] } }),
    deleteProduct: id => setSt(s => ({ ...s, products: s.products.map(x => x.id === id ? { ...x, deleted: true, updatedAt: new Date().toISOString() } : x) })),
    duplicateChantier: id => { const c = st.chantiers.find(x => x.id === id); if (!c) return; const nId = generateUUID(), nC = { ...c, id: nId, client: c.client + " (Copie)", date: new Date().toISOString(), updatedAt: new Date().toISOString(), dateFinalisation: null, sendStatus: 'DRAFT', sentAt: null, lastError: null }, cP = st.products.filter(p => p.chantierId === id && !p.deleted).map(p => ({ ...p, id: generateUUID(), chantierId: nId, updatedAt: new Date().toISOString() })); setSt(s => ({ ...s, chantiers: [nC, ...s.chantiers], products: [...s.products, ...cP] })); showToast("Dossier dupliqué"); },
    importData: (newData) => { setSt(newData); DB.set('sarange_root', newData).catch(e => console.error(e)); }
  }), [st, user]);

  if (authLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900"><Spinner size={40} className="text-brand-600" /></div>;

  if (!user) return <LoginScreen />;

  if (!ALLOWED_EMAILS.includes(user.email)) {
    return <LoginScreen error={`Accès Refusé : Le compte ${user.email} n'est pas autorisé.`} />;
  }

  if (boot.loading) return <BootScreen step={boot.step} error={boot.error} onRetry={runBoot} />;


  // Fallback component
  const LoadingScreen = () => <div className="h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900"><Spinner size={40} className="text-brand-600" /></div>;

  return (
    <AppContext.Provider value={{ state: st, ...act }}>
      <div className="min-h-screen flex flex-col safe-pb">
        <ErrorBoundary>
          <Suspense fallback={<LoadingScreen />}>
            {view === 'settings' ?
              <SettingsView onBack={() => setView('list')} state={st} onImport={act.importData} /> :
              view === 'trash' ?
                /* Lazy loading du TrashView qui sera créé juste après */
                <TrashView onBack={() => setView('list')} state={st} actions={act} /> :
                !st.currentChantierId ?
                  <DashboardView onNew={() => setView('new')} viewMode={view} setViewMode={setView} isDark={dark} toggleDark={() => setDark(!dark)} onOpenSettings={() => setView('settings')} onOpenTrash={() => setView('trash')} isOnline={isOnline} /> :
                  <ChantierDetailView />}
          </Suspense>
        </ErrorBoundary>
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      </div>
    </AppContext.Provider>
  );
};

const root = createRoot(document.getElementById('root')); root.render(<App />);

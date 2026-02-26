import React, { useState, useEffect, useRef, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { AlertCircle, Loader, Lock, LogOut, Menu } from 'lucide-react';
import { Spinner } from "./components/ui/Spinner.jsx";

// Firebase imports
import { db, auth, googleProvider } from "../src/firebase.js";
import { ref, set, get, child, update, remove, onValue } from "firebase/database";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

import { DB, Logger } from "./db.js";
import { generateUUID, mergeArraysSecure, sanitizeForFirebase, COMMERCIAL_STATUS } from "./utils.js";
import { Button } from "./components/ui/Button.jsx"
import { Toast } from "./components/ui/Toast.jsx";
import { AppContext } from "./context.js";
import { initCalendarClient, deleteGoogleEvent, manageGoogleEvent } from "./utils/googleCalendar.js";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";

const MetrageModule = React.lazy(() => import("./views/MetrageModule.jsx").then(m => ({ default: m.MetrageModule })));
const CommercialModule = React.lazy(() => import("./views/CommercialModule.jsx").then(m => ({ default: m.CommercialModule })));
const ChantierDetailView = React.lazy(() => import("./views/ChantierDetailView.jsx").then(m => ({ default: m.ChantierDetailView })));
const SettingsView = React.lazy(() => import("./views/SettingsView.jsx").then(m => ({ default: m.SettingsView })));
const TrashView = React.lazy(() => import("./views/TrashView.jsx").then(m => ({ default: m.TrashView })));

// Layout
import { Sidebar } from "./components/Sidebar.jsx";

export const APP_USERS = {
  "contact@sarange.fr": { role: "ADMIN", name: "Direction" },
  "commercial@sarange.fr": { role: "COMMERCIAL", name: "Commercial" },
  "metreur@sarange.fr": { role: "METREUR", name: "Bureau d'Études" },
  "atelier@sarange.fr": { role: "ATELIER", name: "Atelier & Fab" },
  "terrain@sarange.fr": { role: "TERRAIN", name: "Planning & Pose" },
  "compta@sarange.fr": { role: "COMPTA", name: "Facturation" }
};

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
      <img src="/favicon-512.png" alt="SarangePro" className="w-32 h-auto mb-6" />
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">SarangePro</h1>
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
      <img src="/favicon-512.png" alt="SarangePro" className="w-24 h-auto mb-6 animate-pulse" />
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">SarangePro</h1>

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

  // --- SMART RESTORE SESSION INITIALIZATION ---
  const getInitialSession = () => {
    try {
      const saved = localStorage.getItem('sarange_session_v1');
      if (saved) {
        const session = JSON.parse(saved);
        // Règle : < 1h (3600000 ms)
        if (Date.now() - session.lastActive < 3600000) {
          if (session.view === 'chantier' && session.activeChantierId) {
            return { view: 'chantier', currentChantierId: session.activeChantierId };
          }
        }
      }
      // Restore last navigation tab (calendar, map, dashboard)
      const lastTab = localStorage.getItem('sarange_last_nav_tab');
      if (lastTab && ['dashboard', 'commercial', 'metrage', 'atelier', 'stocks', 'terrain', 'finances'].includes(lastTab)) {
        return { view: lastTab, currentChantierId: null };
      }
    } catch (e) {
      console.warn("Session Restore Fail", e);
    }
    return { view: 'metrage', currentChantierId: null };
  };

  const initialSession = getInitialSession();

  const [st, setSt] = useState({ chantiers: [], products: [], currentChantierId: initialSession.currentChantierId });
  const [boot, setBoot] = useState({ loading: true, step: 'Init', error: null });
  const [view, setView] = useState(initialSession.view);
  const [dark, setDark] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [firebaseConnected, setFirebaseConnected] = useState(false);
  const [toast, setToast] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- SWIPE GESTURE LOGIC ---
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isSwiping = useRef(false);

  // --- SESSION PERSISTENCE ---
  useEffect(() => {
    const sessionData = {
      view,
      activeChantierId: st.currentChantierId,
      lastActive: Date.now()
    };
    localStorage.setItem('sarange_session_v1', JSON.stringify(sessionData));

    // Persist last navigation tab (for main nav views only)
    if (['dashboard', 'commercial', 'metrage', 'atelier', 'stocks', 'terrain', 'finances'].includes(view)) {
      localStorage.setItem('sarange_last_nav_tab', view);
    }
  }, [view, st.currentChantierId]);

  const showToast = (msg, type = 'success') => setToast({ message: msg, type });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  // Init Google Calendar + Silent Token Refresh
  useEffect(() => {
    const initAuth = async () => {
      try {
        await initCalendarClient();
        // Attempt silent token refresh to restore session
        // This prevents re-login popup if user has active Google session
        const { refreshAuthToken } = await import("./utils/googleAuth.js");
        await refreshAuthToken(true).catch(err => {
          // Silent fail - user will authenticate when needed
          console.log("Silent refresh skipped (no active session)");
        });
      } catch (err) {
        console.error("Auth init error:", err);
      }
    };
    initAuth();
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
        // 1. Auto-Archive (SENT + 60 jours)
        const SIXTY_DAYS = 60 * 24 * 60 * 60 * 1000;
        finalData.chantiers = finalData.chantiers.map(c => {
          // Utiliser sentAt en priorité, sinon updatedAt
          const refDateStr = c.sentAt || c.updatedAt;
          const refTime = refDateStr ? new Date(refDateStr).getTime() : 0;
          const isOldEnough = (now - refTime) > SIXTY_DAYS;

          if (!c.deleted && !c.archived && c.sendStatus === 'SENT' && isOldEnough) {
            changed = true;
            Logger.info(`📂 Auto-Archive: ${c.client} (${c.id})`);
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
        await DB.set('sarange_root', finalData);
      }

      if (changed) {
        Logger.info("Auto-maintenance (GC) performed");
        await DB.set('sarange_root', finalData);
      }

      // CRITICAL : Enforce Session Decision (Smart Restore)
      // Whether it is a restored ID or null (Dashboard forced), we must respect the initialization
      // and NOT let the stale ID from IndexedDB take over.
      finalData.currentChantierId = st.currentChantierId;

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
    if (user && APP_USERS[user.email]) {
      runBoot();
    }
  }, [user]);

  // Online/Offline listeners (Navigator)
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

  // NEW: Firebase Realtime Connection Listener (.info/connected)
  useEffect(() => {
    const connectedRef = ref(db, ".info/connected");
    const unsubscribe = onValue(connectedRef, (snap) => {
      const isConnected = snap.val() === true;
      setFirebaseConnected(isConnected);
      if (isConnected) Logger.info("✅ Firebase Connected");
      else Logger.warn("❌ Firebase Disconnected (Offline or Blocking)");
    });
    return () => unsubscribe();
  }, []);

  // Suppression du listener temps réel (Optimisation bande passante)
  // La synchro se fait désormais au démarrage (runBoot) et à la sauvegarde (AutoSave)

  // Auto-save logic (Local + Cloud Push)
  const saveTimeout = useRef(null);
  useEffect(() => {
    // Only autosave if logged in and allowed
    if (!user || !APP_USERS[user.email]) return;
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

        // 🚨 IMPORTANT : Nettoyage préventif pour éviter "undefined" (Crash Firebase)
        const cleanUpdates = sanitizeForFirebase(updates);

        update(ref(db), cleanUpdates)
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
      const newChantier = { ...c, id: generateUUID(), assignation: 'METRAGE', updatedAt: new Date().toISOString() };
      setSt(s => ({ ...s, chantiers: [newChantier, ...s.chantiers] }));
      showToast("Dossier créé");
      return newChantier;
    },
    createNewLead: data => {
      const now = new Date().toISOString();
      const newLead = {
        id: generateUUID(),
        client: data.client,
        telephone: data.telephone || '',
        email: data.email || '',
        adresse: data.adresse,
        source: data.source || 'Autre',
        notes: data.notes || '',
        status: COMMERCIAL_STATUS.LEAD,
        assignation: 'COMMERCIAL',
        date: now,
        dateCreation: now,
        updatedAt: now
      };
      setSt(s => ({ ...s, chantiers: [newLead, ...s.chantiers] }));
      showToast("Nouveau Lead créé");
      return newLead;
    },
    promoteLeadToSent: (id, montantTTC) => {
      const now = new Date().toISOString();
      setSt(s => ({
        ...s,
        chantiers: s.chantiers.map(x => x.id === id ? {
          ...x,
          status: COMMERCIAL_STATUS.SENT,
          ...(montantTTC !== null && montantTTC !== undefined ? { montantTTC } : {}),
          dateEnvoi: now,
          updatedAt: now
        } : x)
      }));
      showToast("Lead passé en Devis Envoyé");
    },
    markForRelance: id => {
      const now = new Date().toISOString();
      setSt(s => ({
        ...s,
        chantiers: s.chantiers.map(x => x.id === id ? {
          ...x,
          status: COMMERCIAL_STATUS.RELANCE,
          dateRelance: now,
          updatedAt: now
        } : x)
      }));
      showToast("Dossier marqué pour Relance");
    },
    markAsSigned: id => {
      const now = new Date().toISOString();
      setSt(s => ({
        ...s,
        chantiers: s.chantiers.map(x => x.id === id ? {
          ...x,
          status: COMMERCIAL_STATUS.SIGNED,
          dateSignature: now,
          updatedAt: now
        } : x)
      }));
      showToast("Dossier gagné !");
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
          chantiers: s.chantiers.map(x => x.id === id ? { ...x, deleted: true, deletedAt: new Date().toISOString(), updatedAt: new Date().toISOString() } : x),
          lastWriteTime: Date.now()
        };

        // 🚨 CRITICAL: Force Save immediately (bypass debounce) to avoid data loss if app closed
        DB.set('sarange_root', newState).catch(e => console.error("Force Save Local Fail", e));

        if (navigator.onLine && user && APP_USERS[user.email]) {
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

      // 0. Supprimer événement Google si existe
      const target = st.chantiers.find(c => c.id === id);
      if (target && target.googleEventId) {
        deleteGoogleEvent(target).catch(console.error);
      }

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
    // Centralized Date Update + GCal Sync
    updateChantierDate: async (id, date) => {
      // 1. Optimistic Update
      const previousState = { ...st };
      const target = st.chantiers.find(c => c.id === id);
      if (!target) return;

      const updatedChantier = { ...target, dateIntervention: date, updatedAt: new Date().toISOString() };

      setSt(s => ({
        ...s,
        chantiers: s.chantiers.map(c => c.id === id ? updatedChantier : c)
      }));

      // 2. Google Calendar Sync (Fire & Forget)
      try {
        if (!date && target.googleEventId) {
          // Cas Annulation : On supprime l'événement
          deleteGoogleEvent(target).catch(console.error);
          setSt(s => ({ ...s, chantiers: s.chantiers.map(c => c.id === id ? { ...c, googleEventId: null } : c) }));
          DB.set('sarange_root', { ...st, chantiers: st.chantiers.map(c => c.id === id ? { ...c, googleEventId: null } : c) }).catch(console.error);
        } else if (date) {
          const eventId = await manageGoogleEvent(updatedChantier);
          if (eventId) {
            // Si l'ID a changé (création) ou confirmé, on le sauvegarde
            setSt(s => ({
              ...s,
              chantiers: s.chantiers.map(c => c.id === id ? { ...c, googleEventId: eventId } : c)
            }));
            // Persist Google ID change immediately
            DB.set('sarange_root', { ...st, chantiers: st.chantiers.map(c => c.id === id ? { ...c, googleEventId: eventId } : c) }).catch(console.error);
          }
        }
      } catch (e) {
        console.error("Centralized GCal Sync Fail", e);
        // Optionnel : Rollback ou Toast erreur
        showToast("Erreur synchro Google Calendar", "error");
      }
    },

    importData: (newData) => { setSt(newData); DB.set('sarange_root', newData).catch(e => console.error(e)); },

    // NEW: Smart Force Sync (Fetch -> Merge -> Push)
    forceSync: async () => {
      if (!navigator.onLine) {
        showToast("Impossible : Pas de connexion internet", "error");
        return;
      }

      showToast("Synchronisation en cours...", "info");
      try {
        // 1. Fetch Cloud
        const snapshot = await get(child(ref(db), 'sarange_root'));
        let cloudData = snapshot.exists() ? snapshot.val() : { chantiers: {}, products: {} };

        // Normalisation
        const cloudChantiers = cloudData.chantiers ? Object.values(cloudData.chantiers) : [];
        const cloudProducts = cloudData.products ? Object.values(cloudData.products) : [];

        // 2. Merge (Smart)
        const mergedChantiers = mergeArraysSecure(cloudChantiers, st.chantiers);
        const mergedProducts = mergeArraysSecure(cloudProducts, st.products);
        const newMaxTime = Math.max(cloudData.lastWriteTime || 0, st.lastWriteTime || 0, Date.now());

        const mergedState = {
          ...st,
          chantiers: mergedChantiers,
          products: mergedProducts,
          lastWriteTime: newMaxTime
        };

        // 3. Update Local
        setSt(mergedState);
        await DB.set('sarange_root', mergedState);

        // 4. Push Back to Cloud (Full Sync to ensure consistency)
        // Note: We use granular updates to be safe, but here we want to ensure everything is in sync
        const updates = {};
        mergedChantiers.forEach(c => updates['sarange_root/chantiers/' + c.id] = c);
        mergedProducts.forEach(p => updates['sarange_root/products/' + p.id] = p);
        updates['sarange_root/lastWriteTime'] = newMaxTime;

        await update(ref(db), updates);

        showToast("Synchronisation terminée avec succès !", "success");
        Logger.info("🔄 Force Sync Complete");

      } catch (e) {
        console.error("Force Sync Fail", e);
        showToast("Erreur Sync : " + e.message, "error");
        Logger.error("Force Sync Fail", e);
      }
    }
  }), [st, user]);

  if (authLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900"><Spinner size={40} className="text-brand-600" /></div>;

  if (!user) return <LoginScreen />;

  if (!APP_USERS[user.email]) {
    return <LoginScreen error={`Accès Refusé : Le compte ${user.email} n'est pas autorisé.`} />;
  }

  if (boot.loading) return <BootScreen step={boot.step} error={boot.error} onRetry={runBoot} />;


  // Fallback component
  const LoadingScreen = () => <div className="h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900"><Spinner size={40} className="text-brand-600" /></div>;

  const isFocusMode = Boolean(st.currentChantierId) || ['settings', 'trash'].includes(view);

  // Helper to ensure Sidebar closes on navigation in mobile
  const handleNavigate = (newView) => {
    setView(newView);
    setIsMobileMenuOpen(false);
  };

  // --- SWIPE GESTURE LOGIC ---
  const handleTouchStart = (e) => {
    // Ne détecter que le premier doigt
    if (e.touches.length > 1) return;

    // Si on est en mode focus (chantier ouvert, settings, etc.), pas de menu latéral global (ou du moins il est caché)
    if (isFocusMode) return;

    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;

    // Détection d'ouverture : le swipe doit commencer proche du bord gauche (< 20px)
    // Sauf si le menu est DÉJÀ ouvert, auquel cas on veut capter le swipe n'importe où pour fermer
    if (!isMobileMenuOpen && touchStartX.current > 20) {
      touchStartX.current = null;
      touchStartY.current = null;
    } else {
      isSwiping.current = true;
    }
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current || touchStartX.current === null || touchStartY.current === null) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = currentX - touchStartX.current;
    const diffY = currentY - touchStartY.current;

    // Si on scrolle verticalement plus qu'on ne swipe horizontalement, on annule le swipe
    if (Math.abs(diffY) > Math.abs(diffX)) {
      isSwiping.current = false;
      return;
    }

    // Bloquer le scroll natif si on swipe vraiment horizontalement
    if (Math.abs(diffX) > 10 && e.cancelable) {
      // e.preventDefault(); // Attention, peut causer des soucis de scroll passif dans react 18+, à utiliser avec précaution ou via ref ref.current.addEventListener(..., { passive: false })
    }
  };

  const handleTouchEnd = (e) => {
    if (!isSwiping.current || touchStartX.current === null) {
      isSwiping.current = false;
      return;
    }

    const currentX = e.changedTouches[0].clientX;
    const diffX = currentX - touchStartX.current;

    const THRESHOLD = 60; // minimum pixels to trigger

    if (isMobileMenuOpen) {
      // Menu est ouvert -> swipe GAUCHE (diffX négatif) pour fermer
      if (diffX < -THRESHOLD) {
        setIsMobileMenuOpen(false);
      }
    } else {
      // Menu est fermé -> swipe DROITE (diffX positif) pour ouvrir
      if (diffX > THRESHOLD) {
        setIsMobileMenuOpen(true);
        // Haptic feedback best-effort (Feature Detect)
        if (navigator.vibrate) {
          try {
            navigator.vibrate(15);
          } catch (e) { }
        }
      }
    }

    // Reset
    touchStartX.current = null;
    touchStartY.current = null;
    isSwiping.current = false;
  };

  return (
    <AppContext.Provider value={{ state: st, ...act, navigate: setView, setReturnView: (v) => setSt(s => ({ ...s, returnView: v })) }}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <div
            className="flex bg-slate-50 dark:bg-slate-900 overflow-hidden w-full h-screen lg:h-screen supports-[height:100dvh]:h-[100dvh] relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {!isFocusMode && (
              <>
                {/* Mobile Backdrop Overlay */}
                {isMobileMenuOpen && (
                  <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                )}
                {/* Sidebar Container */}
                <div className={`
                  fixed md:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-out
                  ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                `}>
                  <Sidebar currentView={view} onNavigate={handleNavigate} onClose={() => setIsMobileMenuOpen(false)} />
                </div>
              </>
            )}
            <main className="flex-1 overflow-hidden relative">

              {/* Swipe Edge Hint - Micro visuel glow pour indiquer le comportement natif du swipe */}
              {!isFocusMode && !isMobileMenuOpen && (
                <div className="md:hidden absolute top-0 left-0 bottom-0 w-2 pointer-events-none bg-gradient-to-r from-slate-900/5 to-transparent dark:from-white/5 z-20"></div>
              )}

              {view === 'settings' ?
                <SettingsView onBack={() => setView('dashboard')} state={st} onImport={act.importData} /> :
                view === 'trash' ?
                  <TrashView onBack={() => setView('dashboard')} state={st} actions={act} /> :
                  st.currentChantierId ?
                    <ChantierDetailView /> :
                    ['metrage', 'new'].includes(view) ?
                      <MetrageModule
                        onNew={() => setView('new')}
                        onNavigate={setView}
                        viewMode={view}
                        isDark={dark}
                        toggleDark={() => setDark(!dark)}
                        onOpenSettings={() => setView('settings')}
                        onOpenTrash={() => setView('trash')}
                        isOnline={isOnline}
                        firebaseConnected={firebaseConnected}
                      /> :
                      view === 'commercial' ?
                        <CommercialModule
                          state={st}
                          selectChantier={act.selectChantier}
                          onNew={() => setView('new')}
                          isDark={dark}
                          toggleDark={() => setDark(!dark)}
                          onOpenSettings={() => setView('settings')}
                          onOpenTrash={() => setView('trash')}
                          isOnline={isOnline}
                          firebaseConnected={firebaseConnected}
                        /> :
                        ['dashboard', 'atelier', 'stocks', 'terrain', 'finances'].includes(view) ?
                          <div className="flex h-full items-center justify-center p-8 bg-white dark:bg-slate-800 m-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <div className="text-center">
                              <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-300 mb-4">Module en construction...</h2>
                              <p className="text-slate-500 dark:text-slate-400 text-lg">Cette vue de l'ERP sera bientôt disponible.</p>
                            </div>
                          </div> :
                          null
              }
            </main>
          </div>
        </Suspense>
      </ErrorBoundary>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </AppContext.Provider>
  );
};

const root = createRoot(document.getElementById('root')); root.render(<App />);

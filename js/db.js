export const Logger = {
    logs: [],
    add(level, msg, data) {
        const log = { ts: new Date().toISOString(), level, msg, data };
        this.logs.push(log);

        // évite crash si console[level] n'existe pas
        const fn = console[level] ? console[level] : console.log;
        fn(`[Sarange] ${msg}`, data || "");

        if (this.logs.length > 1000) this.logs.shift();
    },
    info(msg, data) { this.add("info", msg, data); },
    warn(msg, data) { this.add("warn", msg, data); },
    error(msg, data) { this.add("error", msg, data); },
    getBlob() { return new Blob([JSON.stringify(this.logs, null, 2)], { type: "application/json" }); }
};

const DB_NAME = "SarangeDB_V2";
const DB_VERSION = 1;

export const DB = {
    db: null,
    async init() {
        Logger.info("Connexion DB...");
        return new Promise((resolve, reject) => {
            const t = setTimeout(() => reject(new Error("Timeout connexion DB")), 3000);
            try {
                // Upgrade DB Version 1 -> 2 for 'files' store
                const r = indexedDB.open(DB_NAME, 2);

                r.onerror = (e) => { clearTimeout(t); reject(e.target.error); };
                r.onsuccess = (e) => {
                    clearTimeout(t);
                    this.db = e.target.result;
                    Logger.info("DB Connectée");
                    resolve(this.db);
                };
                r.onupgradeneeded = (e) => {
                    Logger.info("Migration DB...");
                    const d = e.target.result;
                    if (!d.objectStoreNames.contains("data")) d.createObjectStore("data", { keyPath: "key" });

                    // V2: Add 'files' store for PDF Blob storage
                    if (!d.objectStoreNames.contains("files")) {
                        Logger.info("Creating 'files' store...");
                        d.createObjectStore("files", { keyPath: "id" });
                    }
                };
                r.onblocked = () => Logger.warn("DB bloquée (autre onglet ?)");
            } catch (e) { clearTimeout(t); reject(e); }
        });
    },
    async get(key) {
        if (!this.db) await this.init();
        return new Promise((r, j) => {
            try {
                const tx = this.db.transaction("data", "readonly").objectStore("data").get(key);
                tx.onsuccess = () => r(tx.result ? tx.result.value : null);
                tx.onerror = () => j(tx.error);
            } catch (e) { j(e); }
        });
    },
    async set(key, value) {
        if (!this.db) await this.init();
        return new Promise((r, j) => {
            try {
                const tx = this.db.transaction("data", "readwrite").objectStore("data").put({ key, value });
                tx.onsuccess = () => r();
                tx.onerror = () => {
                    if (tx.error && tx.error.name === 'QuotaExceededError') {
                        Logger.error("CRITICAL: IndexedDB Quota Exceeded! Storage is full.");
                    }
                    j(tx.error);
                };
            } catch (e) { j(e); }
        });
    },
    // --- FILES API (V2) ---
    async storeFile(id, blob) {
        if (!this.db) await this.init();
        return new Promise((r, j) => {
            try {
                const tx = this.db.transaction("files", "readwrite").objectStore("files").put({ id, blob, date: new Date().toISOString() });
                tx.onsuccess = () => r();
                tx.onerror = () => j(tx.error);
            } catch (e) { j(e); }
        });
    },
    async getFile(id) {
        if (!this.db) await this.init();
        return new Promise((r, j) => {
            try {
                const tx = this.db.transaction("files", "readonly").objectStore("files").get(id);
                tx.onsuccess = () => r(tx.result ? tx.result.blob : null);
                tx.onerror = () => j(tx.error);
            } catch (e) { j(e); }
        });
    },
    async deleteFile(id) {
        if (!this.db) await this.init();
        return new Promise((r, j) => {
            try {
                const tx = this.db.transaction("files", "readwrite").objectStore("files").delete(id);
                tx.onsuccess = () => r();
                tx.onerror = () => j(tx.error);
            } catch (e) { j(e); }
        });
    }
};

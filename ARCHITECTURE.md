> ⚠️ **IMPORTANT** : Ce document est la source de vérité. Avant toute génération de code, lis et respecte les modèles de données et les règles de synchronisation définis ici.

# 🏗️ Architecture & Documentation Technique - SarangePro

> **Version** : 2.1.0
> **Dernière mise à jour** : 2026-02-11
> **Statut** : REFERENCE_ABSOLUE

Ce document est la **source de vérité technique** pour le projet SarangePro. Toute modification du code doit respecter les principes, schémas et architectures décrits ci-dessous.

## Sommaire

* [1. Arborescence & Rôles](#1-arborescence--rôles)
* [2. Data Models (JSON Schemas)](#2-data-models-json-schemas)
* [3. Logique Métier Critique](#3-logique-métier-critique)
* [4. Pipeline de Synchronisation (Sync Engine)](#4-pipeline-de-synchronisation-sync-engine)
* [5. Système de Design & UI](#5-système-de-design--ui)
* [6. Guide de Contribution (How-To)](#6-guide-de-contribution-how-to)
* [7. Sécurité & Permissions](#7-sécurité--permissions)

---

## 1. Arborescence & Rôles

```text
sarange-app/
├── public/                 # Assets statiques (PWA icons, manifest)
├── src/
│   ├── firebase.js         # Singleton Firebase (Auth + DB)
│   └── index.css           # Global Styles & Tailwind Directives
├── js/
│   ├── app.jsx             # [CORE] Entry Point, Auth, Sync Loop, Routing
│   ├── db.js               # [DATA] IndexedDB Wrapper + Logger
│   ├── context.js          # [STATE] React Context (Global Store)
│   ├── reports.js          # [OUTPUT] Générateur HTML/PDF & SVG Engine
│   ├── utils.js            # [LOGIC] Pure Functions (Sync, Validation, Math, Etas Calculés)
│   ├── components/
│   │   ├── ui/             # [DESIGN] Composants atomiques (Input, Button...)
│   │   ├── ProductEditor.jsx   # [LOGIC] Éditeur Menuiserie (The Brain)
│   │   ├── DrawingCanvas.jsx   # [UI] Zone de dessin vectoriel
│   │  ### 3.2. Hiérarchie des Composants
`App.jsx` agit comme contrôleur principal et routeur.

*   `App.jsx`
    *   `Layout` (Sidebar + Main Content)
        *   `AppHeader` (Nouveau : Header unifié avec menu, mode sombre, synchro)
    *   `Views`
        *   `DashboardView` (Vue principale, liste des chantiers)
            *   *Utilise `ChantierCard` pour l'affichage des dossiers*
        *   `CalendarView` (Vue calendrier)
            *   *Utilise `ChantierCard` pour le détail des RDV*
        *   `MapView` (Vue carte Leaflet)
        *   `TrashView` (Corbeille)
        *   `SettingsView` (Paramètres, Synchro)
        *   `ChantierDetailView` (Détail d'un chantier, lazy-loaded)
    *   `Modals` (Portals)
       *   `NewChantierModal`
       *   `PlanningModal`

### 3.3. Composants Réutilisables (`js/components/`)
*   `AppHeader.jsx` : En-tête global responsive.
*   `ChantierCard.jsx` : Carte de présentation d'un dossier (utilisée dans Dashboard et Calendrier).
*   `PlanningModal.jsx` : Modale de planification de date.
*   `SmartAddress.jsx` : Affichage intelligent d'adresse avec lien GPS.
*   `SignatureCanvas.jsx` : Zone de signature tactile. Devis (PDF OCR/Parser)
│   │       └── googleDrive.js    # [SERVICE] Google Drive API Integration
│   ├── utils/
│   │       ├── googleAuth.js     # [AUTH] Silent Token Refresh Management
│   │       └── googleCalendar.js # [SERVICE] Google Calendar Integration
├── index.html              # Entry Point Web
├── vite.config.js          # Build & PWA Configuration
└── tailwind.config.js      # Design System Tokens
```

---

## 2. Data Models (JSON Schemas)

Les données sont stockées sous forme d'objets JSON dans **IndexedDB** (local) et **Firebase** (cloud).

> **Nouveauté v2.1 (Stockage Hybride)** :
>
> * **Données Métier (JSON)** : Sync bidirectionnelle Firebase/IndexedDB.
> * **Fichiers Lourds (PDF)** : Stockage **LOCAL** dans IndexedDB (Store `files`) + **CLOUD** Google Drive pour partage multi-utilisateurs.

> **Nouveauté v2.2 (Google Drive Sync)** :
>
> * **Devis PDF** : Auto-upload vers Google Drive (`SarangePro/[Client]/`) lors de l'import.
> * **Partage Multi-Users** : Tous les utilisateurs (bureau + terrain) voient les mêmes devis via Drive API.
> * **Stockage Dual** : Local (IndexedDB) + Cloud (Drive) pour robustesse offline/online.

### 🏠 `Chantier` (Dossier Client)

| Clé | Type | Obligatoire ? | Description |
| :--- | :--- | :---: | :--- |
| `id` | `UUID` (string) | ✅ | Identifiant unique (v4). |
| `date` | `ISO8601` (string) | ✅ | Date de création. |
| `updatedAt` | `ISO8601` (string) | ✅ | **CRITIQUE**. Timestamp de dernière modif pour la Sync. |
| `client` | `string` | ✅ | Nom du client. |
| `telephone` | `string` | ✅ | Format libre. |
| `adresse` | `string` | ✅ | Adresse complète. |
| `email` | `string` | ❌ | Email optionnel. |
| `typeContrat` | `enum` | ✅ | `'FOURNITURE_SEULE'`, `'FOURNITURE_ET_POSE'`, `'SOUS_TRAITANCE'` |
| `clientFinal` | `string` | ❌ | Requis si `SOUS_TRAITANCE`. |
| `adresseFinale` | `string` | ❌ | Requis si `SOUS_TRAITANCE`. |
| `status` | `enum` | ✅ | `'DRAFT'` (Brouillon), `'SENT'` (Envoyé), `'SIGNED'` (Signé). |
| `archived` | `boolean` | ❌ | `true` si > 10 jours sans modif (Auto-Archive). |
| `deleted` | `boolean` | ❌ | `true` si mis à la corbeille (Soft Delete). |
| `purged` | `boolean` | ❌ | `true` si supprimé définitivement (attente GC). |
| `deletedAt` | `number` (ts) | ❌ | Timestamp de la suppression (pour GC). |
| `history` | `object[]` | ❌ | Traceabilité. `{ date: ISO, action: 'UNLOCK', reason: string, details?: string, user: string }` |
| `quoteFileId` | `UUID` | ❌ | ID du fichier PDF stocké dans le store local `files`. |
| `quoteFileName` | `string` | ❌ | Nom du fichier original. |
| `referenceDevis` | `string` | ❌ | Numéro de devis extrait (ex: "12345"). |
| `notes` | `string` | ❌ | Infos supplémentaires (Code d'accès, etc.). Synchro GCal. |

### 🪟 `Product` (Menuiserie)

| Clé | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | ID unique du produit. |
| `chantierId` | `UUID` | Foreign Key vers le parent. |
| `index` | `number` | Numéro d'ordre (1, 2, 3...) affiché. |
| `type` | `enum` | `'FENETRE'`, `'PORTE_FENETRE'`, `'BAIE_COULISSANTE'`, `'PORTE_ENTREE'`, `'PORTE_SERVICE'`, `'VOLET_ROULANT'`, `'AUTRE'` |
| `room` | `string` | Localisation (ex: "Cuisine"). |
| `description` | `string` | Libellé libre (ex: "Porte de garage 2 vantaux"). |
| `largeurMm` | `number` | Largeur en mm. |
| `hauteurMm` | `number` | Hauteur en mm. |
| `quantity` | `number` | Quantité (défaut: 1). |
| `matiere` | `enum` | `'PVC'`, `'ALU'`. |
| `profil` | `enum` | `'RENO_40'`, `'RENO_60'`, `'NEUF'`, `'ISO'`, `'AUTRE'`. |
| `couleur` | `enum` | `'BLANC'`, `'GRIS_7016'`, `'BICOLOR_7016'`, `'AUTRE'`. |
| `vitrageFlags` | `object` | `{ standard: bool, g200: bool, feuillete1f: bool... }` |
| `oscilloBattant`| `boolean`| Option Fenêtre. |
| `grilleVentilation`| `boolean`| Option. |
| `voletRoulant` | `object` | Pour VR: `{ manoeuvre: 'FILAIRE'/'RADIO'/'SOLAIRE', ... }` |
| `dessin` | `object` | `{ lines: [{x,y}[]], width: 350, height: 250 }` (Vecteurs). |
| `photos` | `string[]` | **⚠️ ATTENTION** : Actuellement stocké en **Base64** dans IndexedDB (Peut alourdir la sync). *Recommandation future : Stocker sur Firebase Storage et ne garder que l'URL.* |
| `notes` | `string` | Texte libre. |
| `isValid` | `boolean`| Calculated. `true` si aucune erreur de validation. |
| `source` | `enum` | `'MANUAL'`, `'QUOTE'` (Indique si importé). |
| `isVerified` | `boolean` | `false` par défaut si source `QUOTE`. Requiert validation métreur. |
| `updatedAt` | `ISO8601` | **Requis** pour la Sync. |

### 📂 `File` (Stockage Local Blobs)

Store IndexedDB séparé : `files` (local-only).

| Clé | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | Clé primaire. Correspond au `quoteFileId` du chantier. |
| `blob` | `Blob` | Le fichier binaire (PDF). |
| `date` | `ISO8601` | Date d'ajout. |

---

## 3. Logique Métier Critique

### 🛡️ Validation (`ValidationService` & `ProductEditor`)

* **Auto-Validation (Source Devis)** : Si un produit vient d'un devis (`source: 'QUOTE'`), toute édition manuelle réussie (sauvegarde) force `isVerified = true`.
* **Champs Requis** : `type`, `dimensions` (L/H), `matiere`, `profil`, `couleur`.
* **Dimensions** :
  * Si `L` ou `H < 300mm` : **Warning Visual** (Triangle Orange) mais sauvegarde autorisée (cas des impostes).
* **Règles de Cohérence** :
  * **Hauteur > 2200mm (Fenêtres)** : Désactive *automatiquement* l'option `Oscillo-Battant` (Risque de casse).
  * **G200 Auto** : Si `room` contient "WC", "SDB", "BAIN" -> Active automatiquement le vitrage `G200` (Opale).
  * **Volet Roulant** : Si Manoeuvre = `Solaire`, l'option `Sortie de câble` est masquée (impossible).

### 🎨 Moteur de Dessin (`DrawingCanvas`)

* **Format** : Les dessins ne sont PAS des images raster. Ce sont des **chemins vectoriels** (Tableau de points X/Y).
* **Avantage** : Permet de redessiner le canvas à n'importe quelle taille sans perte de qualité et de générer du **SVG natif** propre pour les PDF.
* **Coordonnées** : Relatives à un canvas de référence `350x250`.

### ⏱️ Gestion Temporelle & Format de Date

* **Format Standard** : `ISO8601` (String) est le format recommandé pour `date` et `updatedAt`.
* **Exception Actuelle** : `deletedAt` et `lastWriteTime` utilisent un Timestamp (Number).
* **Recommandation** : Pour garantir une cohérence parfaite dans les comparaisons de sync, il est conseillé de migrer tous les champs temporels vers `ISO8601` ou Timestamp numérique unique à l'avenir.

### 3.4 Gestion de Session (Smart Restore)

Amélioration UX pour le redémarrage de l'application.

* **Stockage** : `localStorage` (clé `sarange_session_v1`).
* **Données** : `{ view: string, activeChantierId: string|null, lastActive: number }`.
* **Règle des 60 minutes** :
  * Au démarrage, le système vérifie le timestamp `lastActive`.
  * **SI** Moins d'une heure (`< 3600000ms`) **ET** Vue précédente était `'chantier'`.
  * **ALORS** Restauration immédiate de la vue Chantier et du Dossier actif.
  * **SINON** (expiration ou autre vue) : Force le retour au **Dashboard** (`activeChantierId = null`).
* **Persistance** : Mise à jour du timestamp à chaque changement de vue ou de dossier.
* **Avantage** : Permet de reprendre un travail en cours après un refresh, mais évite de rester bloqué sur un vieux dossier après une longue pause.

---

## 4. Pipeline de Synchronisation (Sync Engine)

Algo : **Offline-First with Eventual Consistency & Last-Write-Wins**.

### 🔄 Algorithme `mergeArraysSecure` (`utils.js`)

C'est le garant de l'intégrité des données.

1. **Input** : Liste Locale + Liste Cloud.
2. **Process** :
    * Crée une Map unifiée par `ID`.
    * Pour chaque item : Si conflit (présent des 2 côtés), compare `updatedAt`.
    * **WINNER = Item avec le `updatedAt` le plus récent.**
    * *Note*: Cela fonctionne même pour les suppressions, car la suppression est un update (`deleted: true`).

### 💾 Cycle de Vie des Données

1. **Saisie UI** : Utilisateur modifie un produit.
2. **State Update** : React met à jour `st` et `lastWriteTime = Now()`.
3. **Local Persist** : `useEffect` déclenche `DB.set('sarange_root', st)` (IndexedDB). **Donnée sécurisée localement.**
4. **Network Check** :
    * Si **Offline** : Fin de la boucle. Les données attendent.
    * Si **Online** : Déclenche `firebase.update()`.
5. **Cloud Push** : Envoi *uniquement* des items modifiés (Delta Update) vers Firebase.

### 🗑️ Gestion des Suppressions (Tombstones) & Auto-Maintenance

* **Soft Delete** : User clique "Supprimer" -> Item marqué `deleted: true`.
* **Auto-Archive** : Au démarrage (`runBoot`), le système scanne les chantiers **SENT (Envoyés)** datant de plus de **60 jours** (`sentAt` ou `updatedAt`) et les marque automatiquement `archived: true` pour alléger la vue principale. Les brouillons ne sont jamais archivés automatiquement.
* **Garbage Collector (GC)** : Si un item est marqué `purged: true` (Corbeille vidée) ET que son `updatedAt` est vieux de plus de **30 jours**, il est **physiquement détruit** de la DB Cloud & Locale.

### 🔑 4.4 Synchronisation Google Calendar (Centralisée)

> **Nouveauté v2.2** : La logique de synchronisation est désormais **centralisée** et **silencieuse**.

#### A. Architecture "Fire & Forget" (Non-Bloquante)

Pour garantir une fluidité totale de l'UI, la synchronisation Google Calendar ne bloque jamais l'utilisateur.

1. **Mise à jour Optimiste** : L'interface (React State) est mise à jour immédiatement (`setSt`).
2. **Persistance Locale** : La donnée est sauvegardée dans IndexedDB (`DB.set`).
3. **Appel Async** : La fonction `manageGoogleEvent` est lancée en arrière-plan.
    * *Succès* : Le `googleEventId` est mis à jour silencieusement dans le State + DB.
    * *Echec* : L'état reste inchangé, l'indicateur visuel signale le problème.

#### B. Point d'Entrée Unique : `updateChantierDate`

Toute modification de date (Planning, Modale, Drag&Drop) **DOIT** passer par la fonction centrale `updateChantierDate(id, date)` présente dans `App.jsx`.

**Responsabilités de cette fonction :**

1. **Update Local** : Modifie `dateIntervention` et `updatedAt`.
2. **Routing GCal** :
    * **Si Date présente** : Appelle `manageGoogleEvent` (Création ou Mise à jour).
    * **Si Date nulle (Annulation)** : Appelle `deleteGoogleEvent` (Suppression de l'événement).

#### C. Gestion des Suppressions (Cleanup)

L'intégrité du calendrier est garantie par des hooks de suppression :

* **Soft Delete** (Corbeille) : L'événement Google est supprimé.
* **Hard Delete** (Purge) : L'événement Google est supprimé (sécurité supplémentaire).
* **Annulation RDV** : L'événement Google est supprimé.

#### D. Indicateurs Visuels (Feedback)

L'utilisateur est informé de l'état de la synchronisation via des indicateurs discrets :

* 🟢 **Icône GCal Verte** : Synchronisé (Le `googleEventId` est présent et confirmé).
* 🟠 **Badge Orange / Alert** : Non Synchronisé (Date présente mais pas d'`googleEventId`).
  * *Action* : Un clic sur l'alerte lance une **Force Sync**.

#### E. Gestion des Tokens (Silent Authentication)

> **Nouveauté v2.1** : Système de rafraîchissement automatique des tokens Google sans intervention utilisateur.

**Fichier** : [`js/utils/googleAuth.js`](file:///d:/sarange-app/js/utils/googleAuth.js)

**Fonctionnement** :

1. **Initialisation** : Le `tokenClient` (Google Identity Services) est configuré au démarrage.
2. **Tracking d'Expiration** :
   * Les tokens Google expirent après 1 heure.
   * Le timestamp d'expiration est calculé (`now + expires_in - 100s buffer`) et stocké dans `sessionStorage`.
3. **Silent Refresh** :
   * Avant chaque appel API (Drive/Calendar), `ensureValidToken()` vérifie l'expiration.
   * Si expiré : Tente un refresh silencieux via `tokenClient.requestAccessToken({ prompt: '' })`.
   * Si le refresh silencieux échoue : Fallback vers `prompt: 'consent'` (popup).
4. **Auto-Refresh au Démarrage** :
   * Au lancement de l'app, un `refreshAuthToken(true)` est tenté automatiquement.
   * Si l'utilisateur a une session Google active dans le navigateur, le token est renouvelé sans interaction.

**Exports** :

* `refreshAuthToken(silent)` - Rafraîchit le token manuellement.
* `isTokenExpired()` - Vérifie si le token actuel est expiré.
* `ensureValidToken()` - Auto-refresh avant appels API (utilisé partout).
* `getTokenExpiration()` - Récupère le timestamp d'expiration.

**Avantages** :

* ✅ **Pas de fatigue d'authentification** : L'utilisateur n'est plus interrompu toutes les heures.
* ✅ **Transparent** : Le refresh se fait en arrière-plan pendant l'utilisation.
* ✅ **Résilient** : Fallback gracieux vers popup si nécessaire.

---

## 5. Système de Design & UI

Le design system est basé sur **TailwindCSS** avec une palette personnalisée.

### 🎨 Tokens Visuels (`tailwind.config.js`)

* **Couleur Primaire (`brand`)** : Bleu électrique.
  * Action Principale : `bg-brand-600` (`#2563eb`).
  * Hover : `hover:bg-brand-700`.
  * Fond léger : `bg-brand-50`.
* **Mode Sombre (`dark:`)** :
  * Background : `bg-slate-950` (Bleu nuit très profond, pas noir pur).
  * Surfaces : `bg-slate-900`.
  * Bordures : `border-slate-800`.

### 🧩 Composants UI Core (`/js/components/ui`)

Tous les nouveaux écrans DOIVENT utiliser ces composants pour garantir l'uniformité :

* **`<Button variant="primary|secondary|danger">`** : Boutons standardisés.
* **`<Input>`** : Champ texte avec label flottant et gestion d'erreur.
* **`<SelectToggle>`** : Sélecteur exclusif (Pill tabs) remplaçant les `<select>` natifs pour une meilleure UX mobile.
* **`<Modal>`** : Fenêtre modale avec backdrop blur et animation.

### 📱 UX Mobile-First

* **Safe Areas** : Utiliser la classe `.safe-pb` pour éviter que le contenu ne soit caché par la barre de geste iOS.
* **Touch Targets** : Tous les éléments cliquables doivent faire au moins `44px` de hauteur.
* **Inputs** : Utiliser `inputMode="decimal"` pour les dimensions pour ouvrir le pavé numérique direct.
* **Full Screen Layouts (Mobile)** : Privilégier la stratégie `fixed inset-0` avec `overflow-hidden` pour le conteneur racine, et `min-h-0` pour les flex-items enfants scrollables. Cela garantit un comportement natif "App-Like" robuste.

---

## 8. Services Utilitaires (Utility Services)

### 📄 `QuoteParserService` (Moteur d'Import PDF - V5)

Moteur d'extraction chirurgical dédié aux devis Sarange/Artertia.

* **Stratégie** : Strict Block Analysis (V5).
* **Segmentation** : Découpage par bloc regex `/(?:Rep[eè]re)\s*0*(\d+)/`.
* **Ancre** : Validation obligatoire par ligne de tableau (`Qté + Dims + Prix`).
* **Logique Dédiée** :
  * **Portes** : Orientation auto (Max=Hauteur).
  * **Types** : Priorité stricte (VR > Baie > Porte > Fenêtre).
  * **Métadonnées** : Extraction du numéro de devis via regex stricte.
  * **Score** : Confiance calculée sur 5 critères (Ancre, Type, Dim, Mat, Coul). Seuil validité : 0.6.
* **Dépendances** : `pdfjs-dist` (via CDN).

#### Modèle de Donnée : `QuoteItem`

| Clé | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | ID unique. |
| `repere` | `string` | Numéro du repère devis. |
| `type` | `string` | Type brut détecté (ex: `VOLET_ROULANT`). |
| `quantity` | `number` | Quantité extraite du tableau. |
| `width` | `number` | Largeur (mm). |
| `height` | `number` | Hauteur (mm). |
| `confidence` | `number` | Score de confiance (0-1). |
| `isValid` | `boolean` | True si confidence >= 0.6. |

#### Flux d'Importation

1. **Selection** : Upload PDF dans `QuoteImportModal`.
2. **Parsing** : `QuoteParserService` segmente et analyse les blocs.
3. **Mapping** : `ChantierDetailView` convertit via `mapQuoteTypeToAppType`.
    * Centralisation des correspondances (ex: `BAIE_COULISSANTE` -> `BAIE_COULISSANTE` + Profil Alu).
4. **Integration** : Ajout au chantier avec notes de traçabilité.
5. **Traceability Meta** : Extraction du numéro de devis (`referenceDevis`) et stockage du Blob source (`quoteFile`).

### 📂 Visionneuse PDF & Stockage Hybride (Local + Drive)

> **Nouveauté v2.1** : Système hybride avec fallback automatique Drive + Visionneuse in-app.

#### A. Stockage Dual (IndexedDB + Google Drive)

**Architecture** :

1. **Stockage Local (Prioritaire)** :
   * Les PDF sont stockés dans IndexedDB (`files` store) via `DB.storeFile(id, blob)`.
   * Référencés par `quoteFileId` dans le `Chantier`.
   * **Avantage** : Accès instantané offline, pas de bande passante.

2. **Stockage Cloud (Fallback)** :
   * Upload automatique vers Google Drive lors de l'import.
   * Structure hiérarchique : `SarangePro/[Nom Client]/devis.pdf`.
   * **Avantage** : Partage multi-utilisateurs, backup automatique.

**Fichiers** :

* [`js/services/googleDrive.js`](file:///d:/sarange-app/js/services/googleDrive.js) - Service complet Drive API
* [`js/components/PDFViewerModal.jsx`](file:///d:/sarange-app/js/components/PDFViewerModal.jsx) - Composant modal

#### B. Flux de Visualisation (Fallback Intelligent)

**Fonction** : `handleViewPdf()` dans `ChantierDetailView.jsx`

```javascript
1. Tentative IndexedDB (Local)
   ├─ Succès → Affichage immédiat
   └─ Échec → Étape 2

2. Fallback Google Drive (Cloud)
   ├─ getChantierQuotes(chantier) → Liste des PDFs
   ├─ downloadFileAsBlob(fileId) → Téléchargement binaire
   ├─ Mise en cache locale automatique
   └─ Affichage dans la modale

3. Création Blob URL
   └─ URL.createObjectURL(blob) pour iframe
```

**Correctif Critique (v2.1)** :

> ⚠️ **Bug résolu** : L'ancienne méthode `gapi.client.drive.files.get({ alt: 'media' })` retournait du texte/base64 au lieu de données binaires, créant des Blob URLs invalides (PDF blanc).
>
> ✅ **Solution** : Utilisation de `fetch()` direct avec le token OAuth pour télécharger le véritable blob binaire.

```javascript
// ❌ AVANT (ne fonctionnait pas)
const response = await gapi.client.drive.files.get({ fileId, alt: 'media' });
const blob = new Blob([response.body], { type: 'application/pdf' });

// ✅ APRÈS (fonctionne)
const response = await fetch(
  `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
  { headers: { 'Authorization': `Bearer ${token}` } }
);
const blob = await response.blob();
```

#### C. Composant PDFViewerModal

**Props** :

* `isOpen` : Visibilité de la modale
* `onClose` : Callback de fermeture (+ cleanup automatique du Blob URL)
* `blobUrl` : URL du blob créée avec `createObjectURL()`
* `title` : Titre affiché (ex: "Devis - Client X")

**Fonctionnalités** :

* Affichage dans `<iframe>` responsive (85vh)
* Bouton "Ouvrir dans un nouvel onglet" (fallback si X-Frame-Options bloque)
* Cleanup automatique : `URL.revokeObjectURL()` à la fermeture
* Compatible mobile (scroll natif iOS/Android)

#### D. Service Google Drive (`googleDrive.js`)

**Exports Principaux** :

| Fonction | Description |
|----------|-------------|
| `getOrCreateFolder(name, parentId)` | Gestion hiérarchique des dossiers |
| `uploadFile(blob, filename, mimeType, folderId)` | Upload multipart basique |
| `uploadQuoteToDrive(chantier, blob, filename)` | Upload intelligent avec structure auto |
| `getChantierQuotes(chantier)` | Liste tous les PDFs d'un client |
| `downloadFileAsBlob(fileId)` | **Téléchargement binaire corrigé** |
| `listFilesInFolder(folderId)` | Liste les fichiers d'un dossier |

**Auto-Upload au Import** :

Lors de l'importation d'un devis, le système :

1. Stocke le PDF localement (IndexedDB)
2. Lance un upload silencieux vers Drive en arrière-plan
3. Continue sans bloquer l'utilisateur (Fire & Forget)

**Gestion d'Erreur** :

* Échec upload Drive → Pas d'impact (fallback local)
* Échec téléchargement Drive → Message d'erreur utilisateur

#### E. Modes d'Import

1. **Parse & Import** : Extrait les produits + stocke le fichier (local + Drive)
2. **Store Only** : Stocke uniquement pour consultation (pas de parsing)

#### F. Nettoyage

* **Suppression Devis** :
  * Suppression physique IndexedDB (`DB.deleteFile`)
  * Le fichier Drive reste accessible (pas de suppression auto pour sécurité)
* **Cleanup Blob URLs** : Automatique à la fermeture de la modale

---

## 6. Guide de Contribution (How-To)

### Ajouter une nouvelle propriété au `Chantier`

1. **Update Modal** : Ajouter le champ dans `EditChantierModal.jsx`.
2. **Update State** : Vérifier que `onSave` propage la nouvelle clé.
3. **Update Report** : Si info utile au client, l'ajouter dans le template HTML de `reports.js`.
4. **Test Sync** : Vérifier que la modif change bien le `updatedAt` et remonte sur Firebase.

### Créer une nouvelle Vue

1. Créer `views/MaNouvelleVue.jsx`.
2. L'ajouter en `Lazy Load` dans `app.jsx`.
3. Ajouter une condition dans le rendu principal (`view === 'maVue' ? ...`).
4. Utiliser `useApp()` pour accéder aux données globales.

---

## 7. Sécurité & Permissions

### 🔒 Whitelisting (Frontend)

L'accès à l'application est strictement restreint aux utilisateurs autorisés.

* **Fichier** : [`js/app.jsx`](file:///d:/sarange-app/js/app.jsx)
* **Mécanisme** : Constante `ALLOWED_EMAILS`.
* **Flux de Contrôle** :
    1. L'utilisateur se connecte via Google Sign-In.
    2. Le composant `App` vérifie si `user.email` est présent dans `ALLOWED_EMAILS`.
    3. **Si Non Autorisé** :
        * Le chargement des données (`runBoot`) est **bloqué**.
        * Un écran d'alerte rouge affiche "Accès Refusé".
        * L'utilisateur ne peut que se déconnecter.

### 🛡️ Firebase Rules (Backend)

Pour garantir la sécurité des données côté serveur, les règles de sécurité Firebase (Realtime Database Rules) doivent être configurées pour correspondre à la whitelist du frontend.

**Configuration Recommandée** :

```json
{
  "rules": {
    "sarange_root": {
      // Seul l'admin spécifié peut lire/écrire
      ".read": "auth != null && auth.token.email === 'contact@sarange.fr'",
      ".write": "auth != null && auth.token.email === 'contact@sarange.fr'"
    }
  }
}
```

*Note : Cette règle empêche tout accès en lecture/écriture par des tiers, même s'ils disposent d'un compte Google valide, protégeant ainsi l'intégrité de la base de données.*

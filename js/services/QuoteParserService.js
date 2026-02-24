/**
 * QuoteParserService.js (V5.1 - Strict Block Strategy + Architecture Compliance)
 * Moteur d'extraction dédié aux devis Sarange/Artertia.
 * Stratégie : Segmentation par "Repère" + Ancre Ligne Tableau (déjà validée chez toi).
 *
 * Objectifs V5.1 :
 * - Respect STRICT des enums métier (Product.type, Product.matiere)
 * - Corriger le typage (plus de PORTE_INTERIEURE)
 * - "Composé" = FENETRE
 * - AUTRE = fourre-tout, avec kindHint pour debug/notes
 * - Label propre (sans dimensions/prix) basé sur la ligne table
 */

const PDFJS_URL = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
const WORKER_URL = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

class QuoteParserService {
    constructor() {
        this.pdfjsLib = null;
        this.isInitialized = false;
    }

    async init() {
        if (this.isInitialized) return;
        if (typeof window.pdfjsLib === "undefined") {
            await this._loadScript(PDFJS_URL);
        }
        this.pdfjsLib = window.pdfjsLib;
        this.pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_URL;
        this.isInitialized = true;
    }

    _loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    _generateId() {
        // En browser, crypto.randomUUID() est dispo.
        // Fallback safe au cas où (tests / vieux navigateurs).
        try {
            if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
                return crypto.randomUUID();
            }
        } catch (e) {
            // ignore
        }
        return `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    }

    /**
     * Parse le fichier PDF et retourne une liste d'items validés.
     */
    async parseQuote(file) {
        await this.init();
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await this.pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        let fullText = "";

        // 1) Extraction Texte complet
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();

            const items = content.items.map((item) => ({
                str: item.str,
                transform: item.transform,
                x: item.transform[4],
                y: item.transform[5],
            }));

            // Tri basique Y descendant, X croissant
            items.sort((a, b) => {
                const dy = b.y - a.y;
                if (Math.abs(dy) > 5) return dy;
                return a.x - b.x;
            });

            let pageText = "";
            let lastY = items.length > 0 ? items[0].y : 0;

            for (const item of items) {
                if (Math.abs(item.y - lastY) > 50) {
                    pageText += "\n";
                } else if (Math.abs(item.y - lastY) > 5) {
                    pageText += "\n";
                }
                pageText += item.str + " ";
                lastY = item.y;
            }

            fullText += pageText + "\n";
        }

        // 2) Segmentation par Repère
        // parts[0] = header, parts[1]=repere1, parts[2]=bloc1, etc.
        const splitRegex = /(?:Rep[eè]re)\s*(?:[:°\-]|\s|N°|No|N[°o])?\s*0*(\d+)/gi;
        const parts = fullText.split(splitRegex);

        const header = parts[0] || "";
        const clientInfo = this.extractClientInfo(header);

        const results = [];

        for (let i = 1; i < parts.length; i += 2) {
            const repereNum = (parts[i] || "").trim();
            const blockContent = parts[i + 1];

            if (!repereNum || !blockContent) continue;

            const item = this._analyzeBlock(repereNum, blockContent);
            if (item) results.push(item);
        }

        // 3) Retour structuré
        return {
            items: results.map((item) => ({ ...item, id: this._generateId() })),
            meta: {
                number: clientInfo.number || null,
                client: clientInfo.name || null
            }
        };
    }

    /**
   * Nettoie un label depuis la ligne table :
   * - retire qty au début
   * - retire prix en fin de ligne
   * - retire les 2 dimensions en fin de ligne (formats Sarange)
   */
    _cleanLabelFromTableLine(line) {
        if (!line) return "";

        let s = String(line).trim();

        // 1) remove qty at start
        s = s.replace(/^\s*\d+\s+/, "").trim();

        // 2) remove end prices (PU/PT) : "... 746,94 746,94"
        // On cherche un ou deux blocs de type "746,94" à la fin
        s = s.replace(
            /\s+\d{1,6}(?:[\s\.]\d{3})*,\d{2}(?:\s+\d{1,6}(?:[\s\.]\d{3})*,\d{2})?\s*$/,
            ""
        ).trim();

        // 3) remove trailing dims in columns "1250 770" OR "1250 x 770" OR just "1250"
        // Parfois une seule dimension reste si l'autre a été mangée par le prix ou si elle est isolée
        s = s.replace(/\s+\d{3,4}\s*(?:[xX]|\s)\s*\d{3,4}\s*$/, "").trim();
        s = s.replace(/\s+\d{3,4}\s*$/, "").trim();

        return s || String(line).trim();
    }

    /**
     * Détermine un label "propre" dans un bloc quand la ligne table est absente.
     */
    _findBestLabel(lines, repereNum) {
        if (!Array.isArray(lines) || lines.length === 0) return `Repère ${repereNum}`;

        const isNoise = (l) =>
            /déchet|benne|recyclage|main\s*d['’]?oeuvre|mo\b|pose\s+seule|dépose/i.test(l);

        const looksLikeProduct = (l) =>
            /(porte|fenet|volet|baie|garage|portail|velux|pergola|v[ée]randa|veranda|chassis|châssis)/i.test(l);

        // Première ligne descriptive plausible
        for (const l of lines) {
            const line = l.trim();
            if (line.length < 8) continue;
            if (isNoise(line)) continue;
            if (!looksLikeProduct(line)) continue;
            return line;
        }

        // fallback : première non vide
        return lines[0].trim() || `Repère ${repereNum}`;
    }

    _analyzeBlock(repereNum, text) {
        const lines = text
            .split("\n")
            .map((l) => l.trim())
            .filter((l) => l);

        let confidence = 0;
        let tableData = null;
        let dimensions = null;
        let rawTableLine = null;

        // A) Ligne table (ancre) — on conserve ta logique
        // Regex existante, ne pas "casser" si chez toi c'est OK
        const tableLineRegex =
            /^\s*(\d+)\s+(?:.*?\s+)?(\d{3,4})\s+(?:x|X)?\s*(\d{3,4})\s+.*?(\d{1,3}(?:[\s\.]\d{3})*,\d{2})/;

        for (const line of lines) {
            const m = line.match(tableLineRegex);
            if (m) {
                rawTableLine = line;
                tableData = {
                    qty: parseInt(m[1], 10),
                    dim1: parseInt(m[2], 10),
                    dim2: parseInt(m[3], 10),
                    price: m[4], // string conservée
                };
                confidence += 0.35;
                break;
            }
        }

        // B) Dimensions (ta règle porte via max/min)
        if (tableData) {
            let w = tableData.dim1;
            let h = tableData.dim2;

            // Validation plage (sanity check léger)
            if (w < 300 || w > 4000 || h < 300 || h > 4000) {
                confidence -= 0.1;
            } else {
                confidence += 0.15;
            }

            const maxD = Math.max(w, h);
            const minD = Math.min(w, h);

            // SI max >= 2000 ET min <= 1600 -> orientation "porte"
            if (maxD >= 2000 && minD <= 1600) {
                w = minD;
                h = maxD;
            } else {
                w = tableData.dim1;
                h = tableData.dim2;
            }

            dimensions = { width: w, height: h };
        } else {
            // Pas d'ancre -> item risqué
            confidence -= 0.4;
        }

        // C) Classification type (STRICT enums)
        const blockStr = lines.join(" ");

        // kindHint (non-métier) — utile si AUTRE
        let kindHint = null;
        if (/porte\s+de\s+garage/i.test(blockStr)) kindHint = "PORTE_GARAGE";
        else if (/portail/i.test(blockStr)) kindHint = "PORTAIL";
        else if (/velux/i.test(blockStr)) kindHint = "VELUX";
        else if (/pergola|v[ée]randa|veranda/i.test(blockStr)) kindHint = "PERGOLA_VERANDA";

        let type = "AUTRE";
        let detectedType = false;

        // IMPORTANT : "composé(e)" = fenêtre dans ton contexte
        // Renforcé pour capter "composée" très fréquent
        const isComposed =
            /\bcompos[ée]e?|\bensemble\s+compos[ée]e?|\bch[âa]ssis\s+compos[ée]e?|\bchassis\s+compos[ée]e?|\bensemble\s+compos[ée]e?/i.test(
                blockStr
            );

        // ✅ FIX #1 : priorité ABSOLUE aux composés -> FENETRE
        // (doit passer AVANT la détection volet/vr/tablier)
        if (isComposed) {
            type = "FENETRE";
            detectedType = true;
        } else if (/volet|vr|tablier/i.test(blockStr)) {
            type = "VOLET_ROULANT";
            detectedType = true;
        } else if (/coulissant|baie/i.test(blockStr)) {
            type = "BAIE_COULISSANTE";
            detectedType = true;
        } else if (/porte\s+d['’ ]entr[ée]e|porte\s+entree/i.test(blockStr)) {
            type = "PORTE_ENTREE";
            detectedType = true;
        } else if (/porte[- ]?fen[êe]tre|porte\s+fenetre/i.test(blockStr)) {
            type = "PORTE_FENETRE";
            detectedType = true;
        } else if (/porte\s+de\s+service/i.test(blockStr)) {
            type = "PORTE_SERVICE";
            detectedType = true;
        } else if (/fen[êe]tre|fenetre|chassis|ch[âa]ssis|fixe|soufflet|imposte/i.test(blockStr)) {
            type = "FENETRE";
            detectedType = true;
        } else if (/porte/i.test(blockStr)) {
            // PAS de PORTE_INTERIEURE
            type = "AUTRE";
            detectedType = true;
            if (!kindHint) kindHint = "PORTE";
        }

        if (detectedType) confidence += 0.2;

        // D) Matière & Couleur (STRICT matière = PVC|ALU)
        // Par défaut : PVC (si ton métier le veut)
        let material = "PVC";
        let color = "BLANC";

        // ✅ FIX #2 : PORTE_ENTREE -> PVC sauf si "porte alu" explicitement sur la 1ère ligne
        const firstLine = (lines[0] || "").trim();

        // Détecte explicitement une PORTE en ALU sur la première ligne
        // (ex: "PORTE D'ENTREE ALU", "PORTE ENTREE ALUMINIUM", "PORTE ALU ...")
        const firstLineSaysDoorAlu =
            /porte/i.test(firstLine) && /\b(alu|aluminium)\b/i.test(firstLine);

        if (type === "PORTE_ENTREE") {
            material = firstLineSaysDoorAlu ? "ALU" : "PVC";
            if (firstLineSaysDoorAlu) confidence += 0.05;
        } else {
            // Règle générale inchangée pour les autres types
            if (/\bALU\b|\bALUMINIUM\b/i.test(blockStr)) {
                material = "ALU";
                confidence += 0.05;
            } else if (/\bPVC\b/i.test(blockStr)) {
                material = "PVC";
                confidence += 0.05;
            } else {
                if (!kindHint && /\bBOIS\b/i.test(blockStr)) kindHint = "BOIS";
                if (!kindHint && /\bACIER\b/i.test(blockStr)) kindHint = "ACIER";
            }
        }

        // Couleur : Finition : ... OU Coloris : ...
        const colorMatch =
            blockStr.match(/Finition\s*:\s*([^:.,\n]+)/i) || blockStr.match(/Coloris\s*:\s*([^:.,\n]+)/i);

        if (colorMatch) {
            const rawColor = colorMatch[1].trim();

            if (/bicolore/i.test(rawColor) && /7016/i.test(rawColor)) {
                color = "BICOLOR_7016";
            } else if (/blanc/i.test(rawColor)) {
                color = "BLANC";
            } else if (/7016/i.test(rawColor)) {
                color = "GRIS_7016";
            } else {
                color = "AUTRE";
            }
            confidence += 0.1;
        }

        // E) Label propre
        let label = `Repère ${repereNum}`;
        if (rawTableLine) {
            label = this._cleanLabelFromTableLine(rawTableLine);
        } else {
            label = this._findBestLabel(lines, repereNum);
        }

        // Anti-bruit (non destructif) : si pas de table line ET bloc service/déchet -> ignorer
        // (ne pas ignorer si un vrai produit contient "pose comprise")
        const hasStrongServiceKeywords =
            /déchet|benne|recyclage|main\s*d['’]?oeuvre|pose\s+seule|dépose/i.test(blockStr);

        if (!tableData && hasStrongServiceKeywords) {
            // Si pas d'ancre et que c'est clairement du service -> on ignore
            return null;
        }

        const isValid = confidence >= 0.6 && !!dimensions;

        return {
            repere: repereNum,
            type,
            kindHint, // champ optionnel non-métier
            quantity: tableData ? tableData.qty : 1,
            width: dimensions ? dimensions.width : 0,
            height: dimensions ? dimensions.height : 0,
            material, // STRICT: PVC|ALU
            color,
            label,
            originalLine: rawTableLine || lines.slice(0, 3).join(" "),
            confidence: parseFloat(confidence.toFixed(2)),
            warning: confidence < 0.6 || !dimensions,
            isValid,
        };
    }

    async extractQuoteData(file) {
        await this.init();
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await this.pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        let fullText = "";

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();

            const items = content.items.map((item) => ({
                str: item.str,
                x: item.transform[4],
                y: item.transform[5],
            }));

            items.sort((a, b) => {
                const dy = b.y - a.y;
                if (Math.abs(dy) > 5) return dy;
                return a.x - b.x;
            });

            let pageText = "";
            let lastY = items.length > 0 ? items[0].y : 0;
            for (const item of items) {
                if (Math.abs(item.y - lastY) > 5) pageText += "\n";
                pageText += item.str + " ";
                lastY = item.y;
            }
            fullText += pageText + "\n";
        }

        return this.extractClientInfo(fullText);
    }

    extractClientInfo(text) {
        const info = { name: "", address: "", number: "", email: "", totalTTC: null, tvaReduced: false };

        // --- N° Devis ---
        const numberMatch = text.match(/(?:Devis|Offre)\s*(?:N[°o.]?)?\s*[:#]?\s*0*(\d{4,6})/i);
        if (numberMatch) info.number = numberMatch[1];

        // --- Email ---
        const mailClientMatch = text.match(/Mail\s+client\s*:\s*([a-zA-Z0-9._\-+]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6})/i);
        if (mailClientMatch) {
            info.email = mailClientMatch[1].trim();
        } else {
            const allEmails = text.match(/[a-zA-Z0-9._\-+]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}/g) || [];
            const clientEmail = allEmails.find(e => !/contact@(?:sarange|artertia)/i.test(e));
            if (clientEmail) info.email = clientEmail;
        }

        // --- Nom Client + Adresse ---
        // Excatly like SignatureDevisAPI: we take lines before "Devis N°"
        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        const devisLineIdx = lines.findIndex(l => /(?:Devis|Offre)\s*(?:N[°o.\s]*)\s*\d/i.test(l));

        if (devisLineIdx > 0) {
            const headerLines = lines.slice(0, devisLineIdx);
            // Ignore potential "Client:" lines that got orphaned
            const cleanHeaderLines = headerLines.filter(l => l.toLowerCase() !== "client :");

            if (cleanHeaderLines.length > 0) {
                let nameIdx = 0;
                // Remove email if it ended up in the name by mistake
                if (cleanHeaderLines[0].includes("@") && cleanHeaderLines.length > 1) {
                    nameIdx = 1;
                }

                info.name = cleanHeaderLines[nameIdx].replace(/^Client\s*:\s*/i, "").trim();

                if (cleanHeaderLines.length > nameIdx + 1) {
                    info.address = cleanHeaderLines.slice(nameIdx + 1).filter(l => !l.includes("@")).join(', ');
                }
            }
        }

        // --- Montant Total TTC ---
        const ttcMatch = text.match(/MONTANT\s+TOTAL\s+T\.?T\.?C\.?\s*([\d\s]+,\d{2})\s*€?/i);
        if (ttcMatch) {
            info.totalTTC = parseFloat(ttcMatch[1].replace(/\s/g, '').replace(',', '.'));
        }

        // --- Détection TVA Réduite ---
        if (/T\.V\.A\.\s*à\s*(5,50?|10,00?)\s*%/i.test(text)) {
            info.tvaReduced = true;
        }

        return info;
    }
}

export default new QuoteParserService();

// Mock crypto.randomUUID for Node if not present
if (typeof crypto === 'undefined') {
    global.crypto = { randomUUID: () => 'test-uuid-' + Math.random().toString(36).slice(2) };
} else if (!crypto.randomUUID) {
    crypto.randomUUID = () => 'test-uuid-' + Math.random().toString(36).slice(2);
}

import QuoteParserService from './QuoteParserService.js';

const fixtures = [
    {
        name: "Sarange Standard Line",
        text: `Repère 001
1 Fenêtre OB 2 vantaux 1250 770 746,94 746,94
Finition : BLANC`,
        expected: {
            repere: "1",
            type: "FENETRE",
            width: 1250,
            height: 770,
            material: "PVC",
            color: "BLANC",
            label: "Fenêtre OB 2 vantaux",
            quantity: 1
        }
    },
    {
        name: "Composé -> FENETRE",
        text: `Repère 002
1 Ensemble composé fixe + OB 2150 1400 1250,00 1250,00
Coloris : 7016`,
        expected: {
            type: "FENETRE",
            color: "GRIS_7016",
            quantity: 1
        }
    },
    {
        name: "Porte de garage -> AUTRE",
        text: `Repère 003
1 Porte de garage sectionnelle 2400 2000 1800,00 1800,00
Coloris : BLANC`,
        expected: {
            type: "AUTRE",
            kindHint: "PORTE_GARAGE",
            label: "Porte de garage sectionnelle",
            quantity: 1
        }
    },
    {
        name: "Porte de service",
        text: `Repère 004
1 Porte de service PVC 900 2150 650,00 650,00`,
        expected: {
            type: "PORTE_SERVICE",
            quantity: 1
        }
    },
    {
        name: "Generic Porte -> AUTRE + kindHint PORTE",
        text: `Repère 005
1 Porte 1 vantail 900 2100 500,00 500,00`,
        expected: {
            type: "AUTRE",
            kindHint: "PORTE",
            quantity: 1
        }
    },
    {
        name: "Bicolore 7016",
        text: `Repère 006
1 Fenêtre 1200 1450 600,00 600,00
Finition : Bicolore 7016`,
        expected: {
            color: "BICOLOR_7016",
            quantity: 1
        }
    }
];

console.log("🚀 Starting QuoteParserService Verification...");

let successCount = 0;
fixtures.forEach(fixture => {
    try {
        // Simuler splitRegex par Repère
        const result = QuoteParserService._analyzeBlock(fixture.expected.repere || "0", fixture.text);

        if (!result) {
            console.error(`❌ [${fixture.name}] FAILED: No result returned`);
            return;
        }

        let errors = [];
        Object.keys(fixture.expected).forEach(key => {
            if (result[key] !== fixture.expected[key]) {
                errors.push(`${key}: expected "${fixture.expected[key]}", got "${result[key]}"`);
            }
        });

        if (errors.length === 0) {
            console.log(`✅ [${fixture.name}] PASSED`);
            successCount++;
        } else {
            console.error(`❌ [${fixture.name}] FAILED:\n   - ${errors.join('\n   - ')}`);
            console.log("   Result:", JSON.stringify(result, null, 2));
        }
    } catch (e) {
        console.error(`💥 [${fixture.name}] ERROR:`, e.message);
    }
});

// Test Extraction Meta (Nouveau)
console.log("\n🔍 Testing Metadata Extraction...");
const metaTestText = `Devis N° : 12345
Client : Jean Dupont
Email : jean.dupont@example.com`;
const info = QuoteParserService.extractClientInfo(metaTestText);

if (info.number === "12345" && info.name === "Jean Dupont") {
    console.log("✅ Metadata Extraction PASSED");
    successCount++;
} else {
    console.error("❌ Metadata Extraction FAILED:", JSON.stringify(info));
}

console.log(`\n📊 Results: ${successCount}/${fixtures.length + 1} passed`);
process.exit(successCount === (fixtures.length + 1) ? 0 : 1);

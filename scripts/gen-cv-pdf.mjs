// Gera os PDFs de CV a partir das rotas /cv/<slug> via Chrome/Edge headless.
// Pré-requisito: servidor rodando (npm run dev) em BASE (default http://localhost:3000).
// Uso: node scripts/gen-cv-pdf.mjs   |   BASE=http://localhost:3001 node scripts/gen-cv-pdf.mjs
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const SLUGS = ["head-of-growth", "coo-agencia", "fractional"];
const BASE = process.env.BASE ?? "http://localhost:3000";
const OUT = resolve("public");

const CANDIDATES = [
  process.env.CHROME,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const chrome = CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error("Chrome/Edge não encontrado. Defina CHROME=<caminho>.");
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });

for (const slug of SLUGS) {
  const out = resolve(OUT, `cv-pedro-${slug}.pdf`);
  execFileSync(chrome, [
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${out}`,
    `${BASE}/cv/${slug}`,
  ]);
  console.log(`✓ cv-pedro-${slug}.pdf`);
}
console.log(`\n${SLUGS.length} PDFs gerados em public/`);

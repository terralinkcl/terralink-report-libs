// Verifica que cada fila del indice apunte a la pagina real donde aparece el titulo.
// Uso: npm run build && node --test test/toc.test.mjs   (requiere pdftotext en el PATH)
import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  renderReporteToBuffer,
  registerReportFonts,
  placeholderPhoto,
  THEME_EDITORIAL,
  THEME_CORPORATE,
  THEME_ROMBOS_EDITORIAL,
} from "../dist/index.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "TEST_CLAUDE");
mkdirSync(out, { recursive: true });
registerReportFonts();

const meta = {
  eyebrow: "Informe",
  titulo: "Mantenimiento Preventivo",
  subtitulo: "Planta de prueba",
  planta: "Planta Test",
  periodo: "Nov 2026",
  codigo: "T-001",
  responsable: "R",
  cargo: "C",
  revisado: "V",
  emision: "2026-11-20",
};
const logo = placeholderPhoto([20, 20, 20], [20, 20, 20], 60, 60);
const foto = (i) => ({
  url: placeholderPhoto([40 + i * 7, 90, 160], [60, 120 + i * 5, 50]),
  caption: `Foto ${i}`,
});
const lorem = (n, tag) =>
  Array.from(
    { length: n },
    (_, k) => `${tag} parrafo ${k} ` + "texto de relleno largo para ocupar espacio en la pagina. ".repeat(6),
  );

// Informe grande: 11 secciones, subsecciones de largo variable (texto y fotos).
function grande(nSec = 11, nSub = 7) {
  return {
    meta,
    secciones: Array.from({ length: nSec }, (_, i) => ({
      titulo: `Seccion ${i + 1} UNICA${i + 1}Z`,
      sub: Array.from({ length: nSub + (i % 3) }, (_, j) => ({
        titulo: `Subtitulo ${i + 1}x${j + 1} UNICO${i + 1}Q${j + 1}Z`,
        parrafos: lorem(1 + (((i * 3 + j) % 5) * 2), `s${i}${j}`),
        fotos: j % 3 === 0 ? [foto(j), foto(j + 1), foto(j + 2)] : j % 4 === 1 ? [foto(j)] : undefined,
        lista: j % 2 ? ["uno", "dos", "tres"] : undefined,
      })),
    })),
  };
}

// Informe corto: cada seccion cabe en una pagina.
function corto() {
  return {
    meta,
    secciones: [1, 2, 3].map((n) => ({
      titulo: `Corta ${n} UNICA${n}Z`,
      sub: [{ titulo: `Sub ${n}x1 UNICO${n}Q1Z`, parrafos: ["Texto breve."] }],
    })),
  };
}

function paginas(buf, name) {
  const f = join(out, name);
  writeFileSync(f, buf);
  const txt = execFileSync("pdftotext", ["-enc", "UTF-8", "-raw", f, "-"], {
    encoding: "utf8",
    maxBuffer: 1 << 28,
  });
  return txt.split("\f");
}

const lineas = (txt) => txt.split(/\r?\n/);

// Fila del indice: linea "<num> <titulo> <pagina>" (pdftotext -raw). Aparicion real:
// linea con la marca del titulo que NO termina en numero de pagina.
function verificar(data, pages) {
  const filas = [];
  data.secciones.forEach((sec, i) => {
    filas.push([`${i + 1}`, sec.titulo]);
    sec.sub.forEach((ss, j) => filas.push([`${i + 1}.${j + 1}`, ss.titulo]));
  });
  const tabla = [];
  for (const [num, titulo] of filas) {
    const marca = titulo.split(" ").pop(); // ej. UNICO3Q2Z (la Z final evita 1Q1 vs 1Q11)
    const re = new RegExp(marca + "\\s+(\\d+)\\s*$");
    let indicada = null;
    let real = -1;
    pages.forEach((txt, k) => {
      for (const ln of lineas(txt)) {
        if (!ln.includes(marca)) continue;
        const m = ln.match(re);
        if (m) indicada ??= Number(m[1]);
        else if (real === -1) real = k + 1;
      }
    });
    assert.ok(indicada != null, `fila de indice ${num} no encontrada`);
    tabla.push({ fila: `${num} ${titulo}`, indice: indicada, real });
  }
  return tabla;
}

function chequear(nombre, tabla, nPages) {
  console.log(`\n${nombre} (${nPages} paginas)`);
  console.table(tabla);
  for (const r of tabla) assert.equal(r.indice, r.real, `${r.fila}: indice dice ${r.indice}, real ${r.real}`);
}

for (const [nombre, theme] of [
  ["editorial", THEME_EDITORIAL],
  ["corporate", THEME_CORPORATE],
  ["rombos", THEME_ROMBOS_EDITORIAL],
]) {
  test(`indice exacto, informe grande, tema ${nombre}`, async () => {
    const data = grande();
    const buf = await renderReporteToBuffer({ data, theme, logo });
    const pages = paginas(buf, `grande-${nombre}.pdf`);
    const n = pages.length - 1;
    assert.ok(n >= 30, `se esperaba informe largo, tiene ${n}`);
    // el primer titulo real de seccion (no fila de indice) debe estar tras 2+ paginas de indice
    const iniSec = pages.findIndex((p) => lineas(p).some((l) => l.includes("UNICA1Z") && !/UNICA1Z\s+\d+\s*$/.test(l)));
    assert.ok(iniSec >= 3, `el indice deberia ocupar 2+ paginas (cuerpo parte en pag ${iniSec + 1})`);
    chequear(`grande ${nombre}`, verificar(data, pages), n);
  });
}

test("indice exacto, informe corto", async () => {
  const data = corto();
  const buf = await renderReporteToBuffer({ data, theme: THEME_EDITORIAL, logo });
  const pages = paginas(buf, "corto.pdf");
  chequear("corto", verificar(data, pages), pages.length - 1);
});

// node_modules/tsup/assets/esm_shims.js
import path from "path";
import { fileURLToPath } from "url";
var getFilename = () => fileURLToPath(import.meta.url);
var getDirname = () => path.dirname(getFilename());
var __dirname = /* @__PURE__ */ getDirname();

// src/themes.ts
var THEME_EDITORIAL = {
  key: "editorial",
  nombre: "Editorial Terralink",
  display: "PTSerif",
  body: "Lato",
  sans: "Lato",
  titleWeight: 700,
  numWeight: 700,
  h2Weight: 700,
  accent: "#06b6d4",
  ink: "#0c1929",
  bodyColor: "#3c424a",
  muted: "#8a8f96",
  line: "#e3e6ea",
  panel: "#f6f9fc",
  datosVariant: "fichas",
  h1Variant: "numero",
  coverDark: false,
  coverBg: "#ffffff",
  coverInk: "#0c1929",
  coverSub: "#8a8f96",
  coverAccentText: "#06b6d4"
};
var THEME_ED_SUAVE = {
  ...THEME_EDITORIAL,
  key: "ed-suave",
  nombre: "Editorial Suave",
  accentLevel: "medio"
  // indice y numero en navy; celeste solo en banda fina, tick y vinetas
};
var THEME_ED_MINIMO = {
  ...THEME_EDITORIAL,
  key: "ed-minimo",
  nombre: "Editorial Minimo",
  accentLevel: "bajo"
  // numero grande en gris tenue, eyebrow en gris; celeste casi solo en detalles
};
var THEME_ED_TINTA = {
  ...THEME_EDITORIAL,
  key: "ed-tinta",
  nombre: "Editorial Tinta",
  accentLevel: "tinta"
  // monocromo navy/gris, sin celeste (banda superior navy)
};
var THEME_PROPUESTA = {
  key: "propuesta",
  nombre: "Propuesta V3",
  display: "SpaceGrotesk",
  body: "IBMPlexSerif",
  sans: "SpaceGrotesk",
  titleWeight: 500,
  numWeight: 300,
  h2Weight: 500,
  accent: "#00AEEF",
  ink: "#0c1929",
  bodyColor: "#2b3742",
  muted: "#8a93a0",
  line: "#e3e6ea",
  panel: "#f2f7fb",
  datosVariant: "fichas",
  h1Variant: "numero",
  coverDark: true,
  coverBg: "#0c1929",
  coverInk: "#ffffff",
  coverSub: "#9fb0c4",
  coverAccentText: "#00AEEF"
};
var THEME_CORPORATE = {
  key: "corporate",
  nombre: "Corporate",
  display: "Poppins",
  body: "Lato",
  sans: "Poppins",
  titleWeight: 600,
  numWeight: 600,
  h2Weight: 600,
  accent: "#06b6d4",
  ink: "#0b2a4a",
  bodyColor: "#3a4456",
  muted: "#7a8aa0",
  line: "#e6ecf3",
  panel: "#f4f8fc",
  datosVariant: "tarjetas",
  h1Variant: "chip",
  coverDark: false,
  coverBg: "#ffffff",
  coverInk: "#0b2a4a",
  coverSub: "#7a8aa0",
  coverAccentText: "#06b6d4"
};
var THEME_TECNICO = {
  key: "tecnico",
  nombre: "Tecnico",
  display: "BarlowSC",
  body: "BarlowSC",
  sans: "BarlowSC",
  mono: "SpaceMono",
  titleWeight: 700,
  numWeight: 700,
  h2Weight: 600,
  accent: "#0e8fb0",
  ink: "#1f2730",
  bodyColor: "#3a4250",
  muted: "#6b7280",
  line: "#cfd5dd",
  panel: "#eef2f6",
  datosVariant: "tabla",
  h1Variant: "barra",
  coverDark: false,
  coverBg: "#ffffff",
  coverInk: "#1f2730",
  coverSub: "#6b7280",
  coverAccentText: "#0e8fb0"
};
var THEME_TESORERIA = {
  key: "tesoreria",
  nombre: "Tesoreria",
  display: "DMSans",
  body: "DMSans",
  sans: "DMSans",
  mono: "JetBrainsMono",
  titleWeight: 700,
  numWeight: 700,
  h2Weight: 600,
  accent: "#37ADE3",
  ink: "#0F172A",
  bodyColor: "#1E293B",
  muted: "#64748B",
  line: "#E2E8F0",
  panel: "#F1F5F9",
  datosVariant: "tarjetas",
  h1Variant: "chip",
  coverDark: false,
  coverBg: "#F6F8FA",
  coverInk: "#0F172A",
  coverSub: "#64748B",
  coverAccentText: "#37ADE3"
};
var THEME_ROMBOS_EDITORIAL = {
  ...THEME_EDITORIAL,
  key: "rombos-editorial",
  nombre: "Editorial + Rombos",
  accentLevel: "medio",
  coverPattern: true
  // portada blanca con constelacion en navy tenue
};
var THEME_ROMBOS_PROPUESTA = {
  ...THEME_PROPUESTA,
  key: "rombos-propuesta",
  nombre: "Propuesta + Rombos",
  coverDark: false,
  coverPattern: true,
  coverBg: "#ffffff",
  coverInk: "#0c1929",
  coverSub: "#8a8f96"
};
var THEME_ROMBOS_TESORERIA = {
  ...THEME_TESORERIA,
  key: "rombos-tesoreria",
  nombre: "Tesoreria + Rombos",
  coverPattern: true
  // portada blanca (tesoreria ya es clara) con constelacion
};
var REPORT_THEMES = {
  editorial: THEME_EDITORIAL,
  propuesta: THEME_PROPUESTA,
  corporate: THEME_CORPORATE,
  tecnico: THEME_TECNICO,
  tesoreria: THEME_TESORERIA,
  "ed-suave": THEME_ED_SUAVE,
  "ed-minimo": THEME_ED_MINIMO,
  "ed-tinta": THEME_ED_TINTA,
  "rombos-editorial": THEME_ROMBOS_EDITORIAL,
  "rombos-propuesta": THEME_ROMBOS_PROPUESTA,
  "rombos-tesoreria": THEME_ROMBOS_TESORERIA
};

// src/kit.tsx
import { Text as Text2, View as View2, Image, Link } from "@react-pdf/renderer";

// src/charts.tsx
import { Svg, Path, Rect, Line, Text, View } from "@react-pdf/renderer";
import { jsx, jsxs } from "react/jsx-runtime";
function punto(cx, cy, r, anguloDeg) {
  const rad = anguloDeg * Math.PI / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}
function segmentosDonut(valores, colores, cx, cy, rExterno, rInterno) {
  const total = valores.reduce((a, b) => a + (b > 0 ? b : 0), 0);
  if (total <= 0) return [];
  const segmentos = [];
  let a0 = -90;
  valores.forEach((v, i) => {
    if (v <= 0) return;
    const barrido = v / total * 360;
    let a1 = a0 + barrido;
    if (a1 - a0 >= 359.999) a1 = a0 + 359.999;
    const largeArc = a1 - a0 > 180 ? 1 : 0;
    const [ox0, oy0] = punto(cx, cy, rExterno, a0);
    const [ox1, oy1] = punto(cx, cy, rExterno, a1);
    const [ix1, iy1] = punto(cx, cy, rInterno, a1);
    const [ix0, iy0] = punto(cx, cy, rInterno, a0);
    const d = [
      `M ${ox0.toFixed(2)} ${oy0.toFixed(2)}`,
      `A ${rExterno} ${rExterno} 0 ${largeArc} 1 ${ox1.toFixed(2)} ${oy1.toFixed(2)}`,
      `L ${ix1.toFixed(2)} ${iy1.toFixed(2)}`,
      `A ${rInterno} ${rInterno} 0 ${largeArc} 0 ${ix0.toFixed(2)} ${iy0.toFixed(2)}`,
      "Z"
    ].join(" ");
    segmentos.push({ d, color: colores[i] ?? "#999999" });
    a0 = a1;
  });
  return segmentos;
}
function Donut({ s, donut }) {
  const H = 130;
  const cx = 70;
  const cy = 65;
  const segs = segmentosDonut(
    donut.segmentos.map((x) => x.value),
    donut.segmentos.map((x) => x.color),
    cx,
    cy,
    58,
    34
  );
  return /* @__PURE__ */ jsxs(View, { style: s.chartRow, wrap: false, children: [
    /* @__PURE__ */ jsxs(View, { style: { width: 140, height: H, position: "relative" }, children: [
      /* @__PURE__ */ jsx(Svg, { width: 140, height: H, viewBox: `0 0 140 ${H}`, children: segs.map((seg, i) => /* @__PURE__ */ jsx(Path, { d: seg.d, fill: seg.color }, i)) }),
      donut.centroTitulo || donut.centroValor ? /* @__PURE__ */ jsxs(View, { style: { position: "absolute", top: cy - 14, left: 0, width: 140, alignItems: "center" }, children: [
        donut.centroTitulo ? /* @__PURE__ */ jsx(Text, { style: s.donutCentroT, children: donut.centroTitulo }) : null,
        donut.centroValor ? /* @__PURE__ */ jsx(Text, { style: s.donutCentroV, children: donut.centroValor }) : null
      ] }) : null
    ] }),
    /* @__PURE__ */ jsx(View, { style: { flex: 1 }, children: donut.segmentos.map((seg, i) => /* @__PURE__ */ jsxs(View, { style: s.legendItem, children: [
      /* @__PURE__ */ jsx(View, { style: [s.legendBox, { backgroundColor: seg.color }] }),
      /* @__PURE__ */ jsxs(Text, { style: s.legendTxt, children: [
        seg.label,
        seg.valueLabel ? `  ${seg.valueLabel}` : ""
      ] })
    ] }, i)) })
  ] });
}
function Barras({ s, barras }) {
  const W = 420;
  const H = 175;
  const baseY = 140;
  const topY = 14;
  const allVals = barras.grupos.flatMap((g) => g.barras.map((b) => b.value));
  const maxVal = Math.max(...allVals, 1) * 1.15;
  const grupoW = W / Math.max(barras.grupos.length, 1);
  const maxBarras = Math.max(...barras.grupos.map((g) => g.barras.length), 1);
  const barW = Math.min(46, grupoW / (maxBarras + 1));
  const altura = (v) => v / maxVal * (baseY - topY);
  return /* @__PURE__ */ jsxs(View, { style: { alignItems: "center", marginVertical: 8 }, wrap: false, children: [
    /* @__PURE__ */ jsxs(Svg, { width: W, height: H, viewBox: `0 0 ${W} ${H}`, children: [
      /* @__PURE__ */ jsx(Line, { x1: 20, y1: baseY, x2: W - 10, y2: baseY, stroke: "#cccccc", strokeWidth: 1 }),
      barras.grupos.map((g, gi) => {
        const center = gi * grupoW + grupoW / 2;
        const n = g.barras.length;
        const totalW = n * barW + (n - 1) * 8;
        let x = center - totalW / 2;
        return g.barras.map((b, bi) => {
          const h = altura(b.value);
          const rect = /* @__PURE__ */ jsx(Rect, { x, y: baseY - h, width: barW, height: h, fill: b.color }, `${gi}-${bi}`);
          x += barW + 8;
          return rect;
        });
      })
    ] }),
    /* @__PURE__ */ jsx(View, { style: { flexDirection: "row", width: W, marginTop: -2 }, children: barras.grupos.map((g, gi) => /* @__PURE__ */ jsxs(View, { style: { width: grupoW, alignItems: "center" }, children: [
      /* @__PURE__ */ jsx(Text, { style: s.barGrupoLab, children: g.label }),
      /* @__PURE__ */ jsx(View, { style: { flexDirection: "row", marginTop: 2, flexWrap: "wrap", justifyContent: "center" }, children: g.barras.map((b, bi) => /* @__PURE__ */ jsxs(Text, { style: [s.barValLab, { color: b.color }], children: [
        b.label,
        ": ",
        b.valueLabel ?? String(b.value)
      ] }, bi)) })
    ] }, gi)) })
  ] });
}
function Tabla({ s, tabla }) {
  const n = tabla.columnas.length;
  const alignFrom = tabla.alinearDerechaDesde ?? 1;
  const widths = tabla.columnas.map((_, i) => i === 0 ? "46%" : `${(54 / Math.max(n - 1, 1)).toFixed(2)}%`);
  return /* @__PURE__ */ jsxs(View, { style: { marginVertical: 8 }, wrap: false, children: [
    /* @__PURE__ */ jsx(View, { style: s.chRow, children: tabla.columnas.map((c, i) => /* @__PURE__ */ jsx(Text, { style: [s.chTh, { width: widths[i], textAlign: i >= alignFrom ? "right" : "left" }], children: c }, i)) }),
    tabla.filas.map((fila, fi) => {
      const last = tabla.resaltarUltima && fi === tabla.filas.length - 1;
      return /* @__PURE__ */ jsx(View, { style: s.chTr, children: fila.map((cell, ci) => /* @__PURE__ */ jsx(
        Text,
        {
          style: [last ? s.chTdTot : s.chTd, { width: widths[ci], textAlign: ci >= alignFrom ? "right" : "left" }],
          children: cell
        },
        ci
      )) }, fi);
    })
  ] });
}

// src/kit.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function makeStyles(t) {
  const sansLabel = {
    fontFamily: t.sans,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1
  };
  const lvl = t.accentLevel ?? "alto";
  const softNum = "#cfd6dd";
  const isLow = lvl === "bajo" || lvl === "tinta";
  const tocNumColor = lvl === "alto" ? t.accent : t.ink;
  const bigNumColor = lvl === "alto" ? t.accent : lvl === "medio" ? t.ink : softNum;
  const eyebrowColor = isLow ? t.muted : t.accent;
  const detailColor = lvl === "tinta" ? t.muted : t.accent;
  const ruleColor = lvl === "tinta" ? t.ink : t.accent;
  const ruleH = lvl === "alto" ? 6 : lvl === "tinta" ? 3 : 4;
  return {
    // ---- Portada ----
    cover: {
      fontFamily: t.body,
      color: t.coverInk,
      backgroundColor: t.coverBg,
      paddingTop: 64,
      paddingHorizontal: 64,
      paddingBottom: 56
    },
    coverRule: { position: "absolute", top: 0, left: 0, right: 0, height: ruleH, backgroundColor: ruleColor },
    coverLogo: { width: 150, height: 42, objectFit: "contain", marginBottom: 90 },
    coverLogoChip: { backgroundColor: "#ffffff", borderRadius: 8, padding: 10, alignSelf: "flex-start", marginBottom: 90 },
    coverLogoChipImg: { width: 140, height: 38, objectFit: "contain" },
    coverEyebrow: { ...sansLabel, fontSize: 9, color: t.coverDark ? t.coverAccentText : eyebrowColor, letterSpacing: 3, marginBottom: 16 },
    coverTitle: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 33, color: t.coverInk, lineHeight: 1.16, marginBottom: 14 },
    coverSub: { fontFamily: t.body, fontSize: 13, color: t.coverSub, lineHeight: 1.4, maxWidth: 380 },
    spacer: { flexGrow: 1 },
    coverMeta: {
      borderTopWidth: 0.75,
      borderTopColor: t.coverDark ? "rgba(255,255,255,0.18)" : t.line,
      borderBottomWidth: 0.75,
      borderBottomColor: t.coverDark ? "rgba(255,255,255,0.18)" : t.line,
      paddingVertical: 18,
      flexDirection: "row",
      flexWrap: "wrap"
    },
    coverMetaItem: { width: "50%", marginBottom: 12, paddingRight: 12 },
    coverMetaLab: { ...sansLabel, fontSize: 7, color: t.coverDark ? "#9fb0c4" : t.muted, letterSpacing: 1.5, marginBottom: 3 },
    coverMetaVal: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 11.5, color: t.coverInk },
    coverFoot: { fontFamily: t.sans, fontSize: 8, color: t.coverDark ? "#9fb0c4" : t.muted, marginTop: 18, letterSpacing: 0.5 },
    // ---- Pagina de contenido ----
    page: { fontFamily: t.body, fontSize: 10, color: t.ink, paddingTop: 64, paddingHorizontal: 56, paddingBottom: 56 },
    pageSimple: { fontFamily: t.body, fontSize: 10, color: t.ink, paddingTop: 36, paddingHorizontal: 48, paddingBottom: 52 },
    runHead: { position: "absolute", top: 30, left: 56, right: 56, flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5, borderBottomColor: t.line, paddingBottom: 6 },
    runHeadT: { fontFamily: t.sans, fontSize: 7.5, color: t.muted, letterSpacing: 0.5 },
    footer: { position: "absolute", bottom: 28, left: 56, right: 56, flexDirection: "row", justifyContent: "space-between", borderTopWidth: 0.5, borderTopColor: t.line, paddingTop: 7 },
    footerSimple: { position: "absolute", bottom: 24, left: 48, right: 48, flexDirection: "row", justifyContent: "space-between", borderTopWidth: 0.5, borderTopColor: t.line, paddingTop: 7 },
    footerT: { fontFamily: t.sans, fontSize: 7.5, color: t.muted },
    // ---- Header del simple ----
    sHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: t.line, paddingBottom: 12, marginBottom: 16 },
    sHeadLogo: { width: 120, height: 34, objectFit: "contain" },
    sHeadTag: { ...sansLabel, fontSize: 9, color: t.ink, letterSpacing: 1.5, textAlign: "right" },
    sHeadTag2: { fontFamily: t.sans, fontSize: 7.5, color: t.muted, textAlign: "right", marginTop: 2 },
    sKicker: { ...sansLabel, fontSize: 8, color: eyebrowColor, letterSpacing: 3, marginBottom: 7 },
    sTitle: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 21, color: t.ink, lineHeight: 1.18, marginBottom: 14 },
    // ---- Indice ----
    tocKicker: { ...sansLabel, fontSize: 8, color: eyebrowColor, letterSpacing: 3, marginBottom: 22 },
    tocTitle: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 22, color: t.ink, marginBottom: 4 },
    tocRow1: { flexDirection: "row", alignItems: "flex-end", marginBottom: 11 },
    tocRow2: { flexDirection: "row", alignItems: "flex-end", marginBottom: 6, paddingLeft: 26 },
    tocNum1: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 11.5, color: tocNumColor, width: 26 },
    tocT1: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 11.5, color: t.ink },
    tocNum2: { fontFamily: t.sans, fontSize: 9.5, color: t.muted, width: 30 },
    tocT2: { fontFamily: t.body, fontSize: 9.5, color: "#4a525c" },
    leader: { flexGrow: 1, borderBottomWidth: 0.5, borderBottomColor: "#cdd2d8", borderBottomStyle: "dotted", marginHorizontal: 7, marginBottom: 2.5 },
    tocPage1: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 11, color: t.ink },
    tocPage2: { fontFamily: t.sans, fontSize: 9.5, color: t.muted },
    // ---- Datos: fichas ----
    fichas: { flexDirection: "row", flexWrap: "wrap", borderTopWidth: 0.75, borderTopColor: t.line, borderBottomWidth: 0.75, borderBottomColor: t.line, paddingVertical: 13, marginBottom: 18 },
    fichaItem: { width: "25%", paddingRight: 10, marginBottom: 4 },
    fichaLab: { ...sansLabel, fontSize: 6.5, color: t.muted, letterSpacing: 1.5, marginBottom: 3 },
    fichaVal: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 10.5, color: t.ink },
    // ---- Datos: tarjetas ----
    cards: { flexDirection: "row", flexWrap: "wrap", marginHorizontal: -5, marginBottom: 14 },
    card: { width: "33.33%", paddingHorizontal: 5, marginBottom: 10 },
    cardIn: { backgroundColor: t.panel, borderWidth: 1, borderColor: t.line, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12 },
    cardLab: { ...sansLabel, fontWeight: 600, fontSize: 6.5, color: t.muted, marginBottom: 3 },
    cardVal: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 10.5, color: t.ink },
    // ---- Datos: tabla ----
    table: { borderWidth: 1, borderColor: t.line, borderBottomWidth: 0, marginBottom: 16 },
    tRow: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: t.line },
    tTh: { width: "22%", backgroundColor: t.panel, paddingVertical: 4, paddingHorizontal: 8, ...sansLabel, fontWeight: 600, fontSize: 7.5, color: "#3a4250", letterSpacing: 0.8, borderRightWidth: 1, borderRightColor: t.line },
    tTd: { width: "28%", paddingVertical: 4, paddingHorizontal: 8, fontFamily: t.body, fontWeight: 500, fontSize: 9.5, color: t.ink, borderRightWidth: 1, borderRightColor: t.line },
    tTdLast: { width: "28%", paddingVertical: 4, paddingHorizontal: 8, fontFamily: t.body, fontWeight: 500, fontSize: 9.5, color: t.ink },
    // ---- Encabezado de seccion (H1) ----
    h1Numero: { flexDirection: "row", alignItems: "flex-start", borderTopWidth: 1.5, borderTopColor: t.ink, paddingTop: 10, marginBottom: 16 },
    h1NumeroN: { fontFamily: t.display, fontWeight: t.numWeight, fontSize: 30, color: bigNumColor, marginRight: 14, lineHeight: 1 },
    h1NumeroT: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 20, color: t.ink, lineHeight: 1.15, marginTop: 2 },
    h1Chip: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
    h1ChipBox: { width: 26, height: 26, borderRadius: 8, backgroundColor: t.accent, color: "#fff", fontFamily: t.sans, fontWeight: 700, fontSize: 13, textAlign: "center", paddingTop: 5, marginRight: 11 },
    h1ChipT: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 19, color: t.ink },
    h1Barra: { flexDirection: "row", alignItems: "center", backgroundColor: t.panel, borderLeftWidth: 4, borderLeftColor: t.accent, paddingVertical: 6, paddingHorizontal: 10, marginBottom: 14 },
    h1BarraN: { fontFamily: t.mono || t.sans, fontWeight: 700, fontSize: 12, color: t.accent, marginRight: 10 },
    h1BarraT: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 15, color: t.ink, textTransform: "uppercase", letterSpacing: 0.8 },
    // ---- Subseccion (H2) ----
    h2Wrap: { flexDirection: "row", alignItems: "center", marginTop: 6, marginBottom: 7 },
    h2Tick: { width: 4, height: 13, backgroundColor: detailColor, marginRight: 8 },
    h2Num: { fontFamily: t.sans, fontWeight: 700, fontSize: 9, color: detailColor, marginRight: 6, letterSpacing: 0.5 },
    h2: { fontFamily: t.display, fontWeight: t.h2Weight, fontSize: 12.5, color: t.ink },
    body: { fontFamily: t.body, fontSize: 10, color: t.bodyColor, lineHeight: 1.6, textAlign: "justify", marginBottom: 8 },
    // ---- Listas ----
    li: { flexDirection: "row", marginBottom: 5 },
    liDot: { fontFamily: t.body, fontSize: 10, color: detailColor, width: 14 },
    liTxt: { fontFamily: t.body, fontSize: 10, color: t.bodyColor, lineHeight: 1.5, flex: 1 },
    enlaceItem: { marginBottom: 7 },
    enlaceLabel: { fontFamily: t.body, fontSize: 10, color: t.bodyColor, lineHeight: 1.4, marginBottom: 1 },
    enlace: { fontFamily: t.sans, fontSize: 9.5, color: t.accent, textDecoration: "underline" },
    // ---- KPIs ----
    kpis: { flexDirection: "row", borderTopWidth: 0.75, borderTopColor: t.line, borderBottomWidth: 0.75, borderBottomColor: t.line, paddingVertical: 11, marginBottom: 12, marginTop: 2 },
    kpi: { flex: 1, paddingRight: 10 },
    kpiV: { fontFamily: t.mono || t.display, fontWeight: 700, fontSize: t.mono ? 15 : 17, color: t.ink },
    kpiK: { ...sansLabel, fontSize: 6.5, color: t.muted, marginTop: 3 },
    // ---- Fotos ----
    fotos: { flexDirection: "row", flexWrap: "wrap", marginTop: 6, marginBottom: 4 },
    fbox: { width: "48%", marginRight: "2%", marginBottom: 10 },
    foto: { width: "100%", height: 132, objectFit: "cover", borderRadius: 2 },
    cap: { fontFamily: t.sans, fontSize: 7.5, color: t.muted, marginTop: 4 },
    // ---- Graficos / tabla ----
    chartRow: { flexDirection: "row", alignItems: "center", marginVertical: 8 },
    donutCentroT: { fontFamily: t.sans, fontSize: 7, color: t.muted, textAlign: "center" },
    donutCentroV: { fontFamily: t.display, fontWeight: t.titleWeight, fontSize: 10, color: t.ink, textAlign: "center" },
    legendItem: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
    legendBox: { width: 9, height: 9, borderRadius: 2, marginRight: 6 },
    legendTxt: { fontFamily: t.body, fontSize: 9, color: t.bodyColor },
    barGrupoLab: { fontFamily: t.sans, fontSize: 8.5, color: t.ink },
    barValLab: { fontFamily: t.sans, fontSize: 7.5, marginHorizontal: 4 },
    chRow: { flexDirection: "row", backgroundColor: t.accent },
    chTh: { color: "#ffffff", fontFamily: t.sans, fontWeight: 700, fontSize: 8, paddingVertical: 4, paddingHorizontal: 6, borderColor: "#ffffff", borderWidth: 0.5 },
    chTr: { flexDirection: "row" },
    chTd: { fontFamily: t.body, fontSize: 8.5, paddingVertical: 4, paddingHorizontal: 6, color: t.ink, borderColor: t.line, borderWidth: 0.5 },
    chTdTot: { fontFamily: t.body, fontWeight: 700, fontSize: 8.5, paddingVertical: 4, paddingHorizontal: 6, color: "#ffffff", backgroundColor: t.accent, borderColor: "#ffffff", borderWidth: 0.5 }
  };
}
function Fotos({ s, fotos }) {
  return /* @__PURE__ */ jsx2(View2, { style: s.fotos, children: fotos.map((f, i) => /* @__PURE__ */ jsxs2(View2, { style: s.fbox, wrap: false, children: [
    /* @__PURE__ */ jsx2(Image, { style: s.foto, src: f.url }),
    f.caption ? /* @__PURE__ */ jsx2(Text2, { style: s.cap, children: f.caption }) : null
  ] }, i)) });
}
function Datos({ s, theme, items }) {
  if (theme.datosVariant === "tarjetas") {
    return /* @__PURE__ */ jsx2(View2, { style: s.cards, children: items.map((d, i) => /* @__PURE__ */ jsx2(View2, { style: s.card, children: /* @__PURE__ */ jsxs2(View2, { style: s.cardIn, children: [
      /* @__PURE__ */ jsx2(Text2, { style: s.cardLab, children: d.label }),
      /* @__PURE__ */ jsx2(Text2, { style: s.cardVal, children: d.value })
    ] }) }, i)) });
  }
  if (theme.datosVariant === "tabla") {
    const rows = [];
    for (let i = 0; i < items.length; i += 2) rows.push(items.slice(i, i + 2));
    return /* @__PURE__ */ jsx2(View2, { style: s.table, children: rows.map((pair, i) => /* @__PURE__ */ jsxs2(View2, { style: s.tRow, children: [
      /* @__PURE__ */ jsx2(Text2, { style: s.tTh, children: pair[0].label }),
      /* @__PURE__ */ jsx2(Text2, { style: pair[1] ? s.tTd : s.tTdLast, children: pair[0].value }),
      pair[1] ? /* @__PURE__ */ jsx2(Text2, { style: s.tTh, children: pair[1].label }) : null,
      pair[1] ? /* @__PURE__ */ jsx2(Text2, { style: s.tTdLast, children: pair[1].value }) : null
    ] }, i)) });
  }
  return /* @__PURE__ */ jsx2(View2, { style: s.fichas, children: items.map((d, i) => /* @__PURE__ */ jsxs2(View2, { style: s.fichaItem, children: [
    /* @__PURE__ */ jsx2(Text2, { style: s.fichaLab, children: d.label }),
    /* @__PURE__ */ jsx2(Text2, { style: s.fichaVal, children: d.value })
  ] }, i)) });
}
function SeccionHead({ s, theme, num, titulo }) {
  if (theme.h1Variant === "chip") {
    return /* @__PURE__ */ jsxs2(View2, { style: s.h1Chip, children: [
      /* @__PURE__ */ jsx2(Text2, { style: s.h1ChipBox, children: num }),
      /* @__PURE__ */ jsx2(Text2, { style: s.h1ChipT, children: titulo })
    ] });
  }
  if (theme.h1Variant === "barra") {
    return /* @__PURE__ */ jsxs2(View2, { style: s.h1Barra, children: [
      /* @__PURE__ */ jsx2(Text2, { style: s.h1BarraN, children: `${num}.0` }),
      /* @__PURE__ */ jsx2(Text2, { style: s.h1BarraT, children: titulo })
    ] });
  }
  return /* @__PURE__ */ jsxs2(View2, { style: s.h1Numero, children: [
    /* @__PURE__ */ jsx2(Text2, { style: s.h1NumeroN, children: num }),
    /* @__PURE__ */ jsx2(Text2, { style: s.h1NumeroT, children: titulo })
  ] });
}
function Subseccion({ s, num, ss }) {
  return /* @__PURE__ */ jsxs2(View2, { style: { marginBottom: 12 }, children: [
    ss.titulo ? /* @__PURE__ */ jsxs2(View2, { style: s.h2Wrap, children: [
      /* @__PURE__ */ jsx2(View2, { style: s.h2Tick }),
      /* @__PURE__ */ jsx2(Text2, { style: s.h2Num, children: num }),
      /* @__PURE__ */ jsx2(Text2, { style: s.h2, children: ss.titulo })
    ] }) : null,
    ss.kpis && ss.kpis.length > 0 ? /* @__PURE__ */ jsx2(View2, { style: s.kpis, children: ss.kpis.map((it, i) => /* @__PURE__ */ jsxs2(View2, { style: s.kpi, children: [
      /* @__PURE__ */ jsx2(Text2, { style: s.kpiV, children: it.v }),
      /* @__PURE__ */ jsx2(Text2, { style: s.kpiK, children: it.k })
    ] }, i)) }) : null,
    (ss.parrafos ?? []).map((p, i) => /* @__PURE__ */ jsx2(Text2, { style: s.body, children: p }, i)),
    ss.donut ? /* @__PURE__ */ jsx2(Donut, { s, donut: ss.donut }) : null,
    ss.barras ? /* @__PURE__ */ jsx2(Barras, { s, barras: ss.barras }) : null,
    ss.tabla ? /* @__PURE__ */ jsx2(Tabla, { s, tabla: ss.tabla }) : null,
    ss.lista && ss.lista.length > 0 ? /* @__PURE__ */ jsx2(View2, { style: { marginBottom: 6 }, children: ss.lista.map((it, i) => /* @__PURE__ */ jsxs2(View2, { style: s.li, children: [
      /* @__PURE__ */ jsx2(Text2, { style: s.liDot, children: "\u2014" }),
      /* @__PURE__ */ jsx2(Text2, { style: s.liTxt, children: it })
    ] }, i)) }) : null,
    ss.enlaces && ss.enlaces.length > 0 ? /* @__PURE__ */ jsx2(View2, { style: { marginBottom: 6 }, children: ss.enlaces.map((e, i) => /* @__PURE__ */ jsxs2(View2, { style: s.enlaceItem, children: [
      e.label ? /* @__PURE__ */ jsx2(Text2, { style: s.enlaceLabel, children: e.label }) : null,
      /* @__PURE__ */ jsx2(Link, { src: e.url, style: s.enlace, children: e.texto })
    ] }, i)) }) : null,
    ss.fotos && ss.fotos.length > 0 ? /* @__PURE__ */ jsx2(Fotos, { s, fotos: ss.fotos }) : null
  ] });
}

// src/NetworkPattern.tsx
import { Svg as Svg2, Line as Line2, Circle } from "@react-pdf/renderer";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var LINES = [
  [180, 340, 80, 280],
  [80, 280, 40, 360],
  [40, 360, 120, 460],
  [80, 280, 120, 460],
  [40, 360, 60, 540],
  [80, 280, 60, 540],
  [180, 340, 120, 460],
  [180, 340, 280, 440],
  [180, 340, 220, 400],
  [60, 540, 120, 460],
  [60, 540, 160, 580],
  [60, 540, 140, 660],
  [60, 540, 80, 620],
  [280, 440, 120, 460],
  [280, 440, 220, 400],
  [280, 440, 160, 580],
  [280, 440, 320, 520],
  [140, 660, 160, 580],
  [140, 660, 80, 620],
  [140, 660, 240, 640],
  [120, 460, 160, 580],
  [120, 460, 220, 400],
  [160, 580, 240, 640],
  [160, 580, 320, 520],
  [80, 620, 140, 660],
  [320, 520, 240, 640],
  [320, 520, 360, 480],
  [280, 440, 360, 480]
];
var NODES = [
  [120, 460, 4],
  [220, 400, 3],
  [160, 580, 4],
  [80, 620, 3],
  [240, 640, 3],
  [320, 520, 3],
  [360, 480, 2.5],
  [80, 280, 3],
  [40, 360, 3]
];
var ACCENTS = [
  [180, 340, 6],
  [60, 540, 6],
  [280, 440, 6],
  [140, 660, 6]
];
function NetworkPattern({
  style,
  viewBox = "20 255 380 430",
  lineColor = "#FFFFFF",
  lineOpacity = 0.12,
  nodeColor = "#FFFFFF",
  nodeOpacity = 0.18,
  accentColor = "#06B6D4",
  accentOpacity = 0.8
}) {
  return /* @__PURE__ */ jsxs3(Svg2, { viewBox, preserveAspectRatio: "xMidYMid slice", style, children: [
    LINES.map(([x1, y1, x2, y2], i) => /* @__PURE__ */ jsx3(
      Line2,
      {
        x1,
        y1,
        x2,
        y2,
        stroke: lineColor,
        strokeWidth: 0.8,
        strokeOpacity: lineOpacity
      },
      `l${i}`
    )),
    NODES.map(([cx, cy, r], i) => /* @__PURE__ */ jsx3(Circle, { cx, cy, r, fill: nodeColor, fillOpacity: nodeOpacity }, `n${i}`)),
    ACCENTS.map(([cx, cy, r], i) => /* @__PURE__ */ jsx3(Circle, { cx, cy, r, fill: accentColor, fillOpacity: accentOpacity }, `a${i}`))
  ] });
}

// src/CoverPage.tsx
import { Page, Text as Text3, View as View3, Image as Image2 } from "@react-pdf/renderer";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function CoverPage({
  s,
  theme,
  meta,
  logo
}) {
  const metaItem = (lab, val) => val ? /* @__PURE__ */ jsxs4(View3, { style: s.coverMetaItem, children: [
    /* @__PURE__ */ jsx4(Text3, { style: s.coverMetaLab, children: lab }),
    /* @__PURE__ */ jsx4(Text3, { style: s.coverMetaVal, children: val })
  ] }) : null;
  return /* @__PURE__ */ jsxs4(Page, { size: "A4", style: s.cover, children: [
    theme.coverPattern ? /* @__PURE__ */ jsx4(
      NetworkPattern,
      {
        style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
        lineColor: theme.coverDark ? "#FFFFFF" : "#0c1929",
        lineOpacity: theme.coverDark ? 0.12 : 0.1,
        nodeColor: theme.coverDark ? "#FFFFFF" : "#0c1929",
        nodeOpacity: theme.coverDark ? 0.18 : 0.14,
        accentColor: theme.accent,
        accentOpacity: 0.85
      }
    ) : null,
    /* @__PURE__ */ jsx4(View3, { style: s.coverRule }),
    theme.coverDark ? /* @__PURE__ */ jsx4(View3, { style: s.coverLogoChip, children: /* @__PURE__ */ jsx4(Image2, { style: s.coverLogoChipImg, src: logo }) }) : (
      // eslint-disable-next-line jsx-a11y/alt-text
      /* @__PURE__ */ jsx4(Image2, { style: s.coverLogo, src: logo })
    ),
    /* @__PURE__ */ jsx4(Text3, { style: s.coverEyebrow, children: meta.eyebrow }),
    /* @__PURE__ */ jsx4(Text3, { style: s.coverTitle, children: meta.titulo }),
    meta.subtitulo ? /* @__PURE__ */ jsx4(Text3, { style: s.coverSub, children: meta.subtitulo }) : null,
    /* @__PURE__ */ jsx4(View3, { style: s.spacer }),
    /* @__PURE__ */ jsxs4(View3, { style: s.coverMeta, children: [
      metaItem("Planta", meta.planta),
      metaItem("Periodo", meta.periodo),
      metaItem("C\xF3digo de documento", meta.codigo),
      metaItem("Fecha de emisi\xF3n", meta.emision),
      metaItem("Elaborado por", meta.cargo ? `${meta.responsable} - ${meta.cargo}` : meta.responsable),
      metaItem("Revisado por", meta.revisado)
    ] }),
    /* @__PURE__ */ jsx4(Text3, { style: s.coverFoot, children: "Terralink O&M  \xB7  Documento de uso interno  \xB7  Operaci\xF3n y Mantenimiento" })
  ] });
}

// src/ReporteDocument.tsx
import { Document, Page as Page2, Text as Text4, View as View4 } from "@react-pdf/renderer";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function buildToc(data) {
  const rows = [];
  data.secciones.forEach((sec, i) => {
    const page = 3 + i;
    rows.push({ nivel: 1, num: `${i + 1}`, titulo: sec.titulo, page });
    sec.sub.forEach((ss, j) => {
      if (!ss.titulo) return;
      rows.push({ nivel: 2, num: `${i + 1}.${j + 1}`, titulo: ss.titulo, page });
    });
  });
  return rows;
}
function ReporteDocument({
  data,
  theme,
  logo,
  tocPageNumbers = true
}) {
  const s = makeStyles(theme);
  const { meta } = data;
  const toc = buildToc(data);
  return /* @__PURE__ */ jsxs5(Document, { children: [
    /* @__PURE__ */ jsx5(CoverPage, { s, theme, meta, logo }),
    /* @__PURE__ */ jsxs5(Page2, { size: "A4", style: s.page, children: [
      /* @__PURE__ */ jsxs5(View4, { style: s.runHead, fixed: true, children: [
        /* @__PURE__ */ jsx5(Text4, { style: s.runHeadT, children: meta.titulo }),
        /* @__PURE__ */ jsx5(Text4, { style: s.runHeadT, children: meta.planta })
      ] }),
      /* @__PURE__ */ jsxs5(View4, { style: s.footer, fixed: true, children: [
        /* @__PURE__ */ jsx5(Text4, { style: s.footerT, children: meta.codigo ? `${meta.codigo}  \xB7  Terralink O&M` : "Terralink O&M" }),
        /* @__PURE__ */ jsx5(
          Text4,
          {
            style: s.footerT,
            render: ({ pageNumber, totalPages }) => `P\xE1gina ${pageNumber} / ${totalPages}`
          }
        )
      ] }),
      /* @__PURE__ */ jsx5(Text4, { style: s.tocKicker, children: "Contenido" }),
      /* @__PURE__ */ jsx5(Text4, { style: s.tocTitle, children: "\xCDndice" }),
      /* @__PURE__ */ jsx5(View4, { style: { marginTop: 10 }, children: toc.map(
        (r, i) => r.nivel === 1 ? /* @__PURE__ */ jsxs5(View4, { style: s.tocRow1, children: [
          /* @__PURE__ */ jsx5(Text4, { style: s.tocNum1, children: r.num }),
          /* @__PURE__ */ jsx5(Text4, { style: s.tocT1, children: r.titulo }),
          tocPageNumbers ? /* @__PURE__ */ jsx5(View4, { style: s.leader }) : null,
          tocPageNumbers ? /* @__PURE__ */ jsx5(Text4, { style: s.tocPage1, children: `${r.page}` }) : null
        ] }, i) : /* @__PURE__ */ jsxs5(View4, { style: s.tocRow2, children: [
          /* @__PURE__ */ jsx5(Text4, { style: s.tocNum2, children: r.num }),
          /* @__PURE__ */ jsx5(Text4, { style: s.tocT2, children: r.titulo }),
          tocPageNumbers ? /* @__PURE__ */ jsx5(View4, { style: s.leader }) : null,
          tocPageNumbers ? /* @__PURE__ */ jsx5(Text4, { style: s.tocPage2, children: `${r.page}` }) : null
        ] }, i)
      ) }),
      data.secciones.map((sec, i) => /* @__PURE__ */ jsxs5(View4, { break: true, children: [
        /* @__PURE__ */ jsx5(SeccionHead, { s, theme, num: `${i + 1}`, titulo: sec.titulo }),
        sec.sub.map((ss, j) => /* @__PURE__ */ jsx5(Subseccion, { s, num: `${i + 1}.${j + 1}`, ss }, j))
      ] }, i))
    ] })
  ] });
}

// src/ReporteSimpleDocument.tsx
import { Document as Document2, Page as Page3, Text as Text5, View as View5, Image as Image4 } from "@react-pdf/renderer";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function ReporteSimpleDocument({
  data,
  theme,
  logo,
  conPortada = false
}) {
  const s = makeStyles(theme);
  const { meta } = data;
  const datos = [
    { label: "Planta", value: meta.planta },
    { label: "Periodo", value: meta.periodo },
    { label: "C\xF3digo", value: meta.codigo },
    { label: "Fecha de emisi\xF3n", value: meta.emision },
    { label: "Responsable", value: meta.responsable },
    { label: "Revisado por", value: meta.revisado }
  ];
  return /* @__PURE__ */ jsxs6(Document2, { children: [
    conPortada ? /* @__PURE__ */ jsx6(CoverPage, { s, theme, meta, logo }) : null,
    /* @__PURE__ */ jsxs6(Page3, { size: "A4", style: s.pageSimple, children: [
      /* @__PURE__ */ jsxs6(View5, { style: s.footerSimple, fixed: true, children: [
        /* @__PURE__ */ jsx6(Text5, { style: s.footerT, children: `${meta.codigo}  \xB7  Terralink O&M` }),
        /* @__PURE__ */ jsx6(
          Text5,
          {
            style: s.footerT,
            render: ({ pageNumber, totalPages }) => `P\xE1gina ${pageNumber} / ${totalPages}`
          }
        )
      ] }),
      /* @__PURE__ */ jsxs6(View5, { style: s.sHead, children: [
        /* @__PURE__ */ jsx6(Image4, { style: s.sHeadLogo, src: logo }),
        /* @__PURE__ */ jsxs6(View5, { children: [
          /* @__PURE__ */ jsx6(Text5, { style: s.sHeadTag, children: "Informe de Mantenimiento" }),
          /* @__PURE__ */ jsx6(Text5, { style: s.sHeadTag2, children: "Operaci\xF3n y Mantenimiento" })
        ] })
      ] }),
      /* @__PURE__ */ jsx6(Text5, { style: s.sKicker, children: meta.eyebrow }),
      /* @__PURE__ */ jsx6(Text5, { style: s.sTitle, children: meta.titulo }),
      /* @__PURE__ */ jsx6(Datos, { s, theme, items: datos }),
      data.secciones.map((sec, i) => /* @__PURE__ */ jsxs6(View5, { style: { marginTop: i === 0 ? 0 : 6 }, children: [
        /* @__PURE__ */ jsx6(SeccionHead, { s, theme, num: `${i + 1}`, titulo: sec.titulo }),
        sec.sub.map((ss, j) => /* @__PURE__ */ jsx6(Subseccion, { s, num: `${i + 1}.${j + 1}`, ss }, j))
      ] }, i))
    ] })
  ] });
}

// src/fonts.ts
import { Font } from "@react-pdf/renderer";
import path2 from "path";
var registered = false;
function defaultFontsDir() {
  return path2.join(__dirname, "..", "fonts");
}
function registerReportFonts(fontsDir = defaultFontsDir()) {
  if (registered) return;
  const F = (f) => path2.join(fontsDir, f);
  Font.register({
    family: "PTSerif",
    fonts: [
      { src: F("PTSerif-Regular.ttf"), fontWeight: 400 },
      { src: F("PTSerif-Bold.ttf"), fontWeight: 700 }
    ]
  });
  Font.register({
    family: "Lato",
    fonts: [
      { src: F("Lato-Light.ttf"), fontWeight: 300 },
      { src: F("Lato-Regular.ttf"), fontWeight: 400 },
      { src: F("Lato-Bold.ttf"), fontWeight: 700 },
      { src: F("Lato-Black.ttf"), fontWeight: 900 }
    ]
  });
  Font.register({
    family: "SpaceGrotesk",
    fonts: [
      { src: F("SpaceGrotesk-300.woff"), fontWeight: 300 },
      { src: F("SpaceGrotesk-400.woff"), fontWeight: 400 },
      { src: F("SpaceGrotesk-500.woff"), fontWeight: 500 },
      { src: F("SpaceGrotesk-700.woff"), fontWeight: 700 }
    ]
  });
  Font.register({
    family: "IBMPlexSerif",
    fonts: [
      { src: F("IBMPlexSerif-Light.ttf"), fontWeight: 300 },
      { src: F("IBMPlexSerif-Regular.ttf"), fontWeight: 400 },
      { src: F("IBMPlexSerif-Medium.ttf"), fontWeight: 500 },
      { src: F("IBMPlexSerif-Bold.ttf"), fontWeight: 700 }
    ]
  });
  Font.register({
    family: "Poppins",
    fonts: [
      { src: F("Poppins-Light.ttf"), fontWeight: 300 },
      { src: F("Poppins-Regular.ttf"), fontWeight: 400 },
      { src: F("Poppins-Medium.ttf"), fontWeight: 500 },
      { src: F("Poppins-SemiBold.ttf"), fontWeight: 600 },
      { src: F("Poppins-Bold.ttf"), fontWeight: 700 }
    ]
  });
  Font.register({
    family: "BarlowSC",
    fonts: [
      { src: F("BarlowSC-Regular.ttf"), fontWeight: 400 },
      { src: F("BarlowSC-Medium.ttf"), fontWeight: 500 },
      { src: F("BarlowSC-SemiBold.ttf"), fontWeight: 600 },
      { src: F("BarlowSC-Bold.ttf"), fontWeight: 700 }
    ]
  });
  Font.register({
    family: "SpaceMono",
    fonts: [
      { src: F("SpaceMono-Regular.ttf"), fontWeight: 400 },
      { src: F("SpaceMono-Bold.ttf"), fontWeight: 700 }
    ]
  });
  Font.register({
    family: "DMSans",
    fonts: [
      { src: F("DMSans-400.woff"), fontWeight: 400 },
      { src: F("DMSans-500.woff"), fontWeight: 500 },
      { src: F("DMSans-700.woff"), fontWeight: 700 }
    ]
  });
  Font.register({
    family: "JetBrainsMono",
    fonts: [
      { src: F("JetBrainsMono-400.woff"), fontWeight: 400 },
      { src: F("JetBrainsMono-700.woff"), fontWeight: 700 }
    ]
  });
  Font.registerHyphenationCallback((w) => [w]);
  registered = true;
}

// src/placeholder.ts
import zlib from "zlib";
function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = c >>> 1 ^ 3988292384 & -(c & 1);
  }
  return ~c >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const t = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crc]);
}
function placeholderPhoto(top, bottom, w = 800, h = 520) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  const horizon = Math.floor(h * 0.62);
  const rows = [];
  for (let y = 0; y < h; y++) {
    const row = Buffer.alloc(1 + w * 3);
    const [r, g, b] = y < horizon ? top : bottom;
    const f = 1 - y / h * 0.18;
    for (let x = 0; x < w; x++) {
      row[1 + x * 3] = Math.min(255, Math.round(r * f));
      row[2 + x * 3] = Math.min(255, Math.round(g * f));
      row[3 + x * 3] = Math.min(255, Math.round(b * f));
    }
    rows.push(row);
  }
  const idat = zlib.deflateSync(Buffer.concat(rows));
  const png = Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
  return `data:image/png;base64,${png.toString("base64")}`;
}
export {
  Barras,
  CoverPage,
  Datos,
  Donut,
  Fotos,
  NetworkPattern,
  REPORT_THEMES,
  ReporteDocument,
  ReporteSimpleDocument,
  SeccionHead,
  Subseccion,
  THEME_CORPORATE,
  THEME_EDITORIAL,
  THEME_ED_MINIMO,
  THEME_ED_SUAVE,
  THEME_ED_TINTA,
  THEME_PROPUESTA,
  THEME_ROMBOS_EDITORIAL,
  THEME_ROMBOS_PROPUESTA,
  THEME_ROMBOS_TESORERIA,
  THEME_TECNICO,
  THEME_TESORERIA,
  Tabla,
  makeStyles,
  placeholderPhoto,
  registerReportFonts
};

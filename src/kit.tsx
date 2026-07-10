import React from "react";
import { Text, View, Image, Link } from "@react-pdf/renderer";
import type { ReporteSubseccion, ReportePhoto } from "./types";
import type { ReportTheme } from "./themes";
import { Donut, Barras, Tabla } from "./charts";

// Primitivas compartidas por los documentos Reporte (con portada y simple).
// Cada primitiva respeta las VARIANTES del tema (datosVariant, h1Variant), de
// modo que las 4 lineas graficas se ven distintas reutilizando una sola base.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Styles = Record<string, any>;

export interface DatoItem {
  label: string;
  value: string;
}

export function makeStyles(t: ReportTheme): Styles {
  const sansLabel = {
    fontFamily: t.sans,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: 1,
  };
  // Nivel de acento: cuanto celeste se usa. "alto" = como antes; niveles mas
  // bajos llevan indice y numeros a tinta (navy/gris) y reservan el celeste a
  // detalles minimos. Permite versiones mas sobrias del mismo tema.
  const lvl = t.accentLevel ?? "alto";
  const softNum = "#cfd6dd"; // gris tenue para el numero grande de seccion
  const isLow = lvl === "bajo" || lvl === "tinta";
  const tocNumColor = lvl === "alto" ? t.accent : t.ink; // numeros del indice
  const bigNumColor = lvl === "alto" ? t.accent : lvl === "medio" ? t.ink : softNum; // numero grande
  const eyebrowColor = isLow ? t.muted : t.accent; // kicker / eyebrow
  const detailColor = lvl === "tinta" ? t.muted : t.accent; // tick, vineta, num subseccion
  const ruleColor = lvl === "tinta" ? t.ink : t.accent; // banda superior portada
  const ruleH = lvl === "alto" ? 6 : lvl === "tinta" ? 3 : 4;
  return {
    // ---- Portada ----
    cover: {
      fontFamily: t.body,
      color: t.coverInk,
      backgroundColor: t.coverBg,
      paddingTop: 64,
      paddingHorizontal: 64,
      paddingBottom: 56,
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
      flexWrap: "wrap",
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
    // Las fotos se agrupan en filas de 2 (ver componente Fotos). Cada fila lleva
    // wrap={false} para no partir una foto, pero el contenedor SI puede cortar
    // entre filas: asi un bloque grande de fotos fluye a la pagina siguiente en
    // vez de saltar entero y dejar el titulo de seccion huerfano en una pagina
    // casi en blanco.
    // La caja tiene tamano fijo pero la imagen usa objectFit "contain" para
    // mostrarse COMPLETA sin recortar, respetando su orientacion (las verticales
    // ya no se recortan a formato horizontal). El fondo suave rellena el espacio
    // sobrante (letterbox) de forma prolija.
    fotos: { marginTop: 6, marginBottom: 4 },
    fotoFila: { flexDirection: "row", marginBottom: 10 },
    fotoFilaFirst: { flexDirection: "row", marginTop: 6, marginBottom: 10 },
    // Caja base (tamano normal): 2 por fila.
    fbox: {
      width: "48%",
      marginRight: "2%",
      backgroundColor: t.panel,
      borderWidth: 1,
      borderColor: t.line,
      borderRadius: 4,
      padding: 4,
      alignItems: "center",
    },
    // Caja para fotos con enfasis: 1 por fila, a todo el ancho.
    fboxFull: {
      width: "100%",
      backgroundColor: t.panel,
      borderWidth: 1,
      borderColor: t.line,
      borderRadius: 4,
      padding: 4,
      alignItems: "center",
    },
    foto: { width: "100%", height: 160, objectFit: "contain", borderRadius: 2 },
    fotoGrande: { width: "100%", height: 300, objectFit: "contain", borderRadius: 2 },
    fotoXl: { width: "100%", height: 460, objectFit: "contain", borderRadius: 2 },
    cap: { fontFamily: t.sans, fontSize: 7.5, color: t.muted, marginTop: 4, textAlign: "center" },

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
    chTdTot: { fontFamily: t.body, fontWeight: 700, fontSize: 8.5, paddingVertical: 4, paddingHorizontal: 6, color: "#ffffff", backgroundColor: t.accent, borderColor: "#ffffff", borderWidth: 0.5 },
  };
}

export function Fotos({ s, fotos }: { s: Styles; fotos: ReportePhoto[] }) {
  // Se arma por filas respetando el tamano de cada foto:
  //   - "normal": 2 por fila (caja al 48%).
  //   - "grande"/"xl": 1 por fila, a todo el ancho, con mayor altura (enfasis).
  // Cada fila es indivisible (wrap={false}) para no cortar una foto, pero el
  // contenedor puede quebrar ENTRE filas: asi un bloque grande de fotos fluye a
  // la pagina siguiente sin dejar el titulo de seccion solo en una pagina vacia.
  type Fila = { tipo: "normal" | "grande" | "xl"; fotos: ReportePhoto[] };
  const filas: Fila[] = [];
  let buffer: ReportePhoto[] = [];
  const flush = () => {
    if (buffer.length) filas.push({ tipo: "normal", fotos: buffer });
    buffer = [];
  };
  for (const f of fotos) {
    const size = f.size ?? "normal";
    if (size === "normal") {
      buffer.push(f);
      if (buffer.length === 2) flush();
    } else {
      flush();
      filas.push({ tipo: size, fotos: [f] });
    }
  }
  flush();

  const fotoStyle = (tipo: Fila["tipo"]) =>
    tipo === "grande" ? s.fotoGrande : tipo === "xl" ? s.fotoXl : s.foto;

  // Se devuelven las FILAS como hermanos directos (Fragment), sin un View que las
  // envuelva. Ese contenedor impedia que react-pdf quebrara el bloque de fotos
  // entre paginas: al no caber entero lo movia completo y dejaba el titulo de
  // seccion solo en una pagina casi vacia. Sin el contenedor, cada fila
  // (wrap={false}) fluye y quiebra por si misma.
  return (
    <>
      {filas.map((fila, r) => (
        <View key={r} style={r === 0 ? s.fotoFilaFirst : s.fotoFila} wrap={false}>
          {fila.fotos.map((f, i) => (
            <View key={i} style={fila.tipo === "normal" ? s.fbox : s.fboxFull}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image style={fotoStyle(fila.tipo)} src={f.url} />
              {f.caption ? <Text style={s.cap}>{f.caption}</Text> : null}
            </View>
          ))}
        </View>
      ))}
    </>
  );
}

// Bloque de datos clave, segun la variante del tema.
export function Datos({ s, theme, items }: { s: Styles; theme: ReportTheme; items: DatoItem[] }) {
  if (theme.datosVariant === "tarjetas") {
    return (
      <View style={s.cards}>
        {items.map((d, i) => (
          <View key={i} style={s.card}>
            <View style={s.cardIn}>
              <Text style={s.cardLab}>{d.label}</Text>
              <Text style={s.cardVal}>{d.value}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
  if (theme.datosVariant === "tabla") {
    const rows: DatoItem[][] = [];
    for (let i = 0; i < items.length; i += 2) rows.push(items.slice(i, i + 2));
    return (
      <View style={s.table}>
        {rows.map((pair, i) => (
          <View key={i} style={s.tRow}>
            <Text style={s.tTh}>{pair[0].label}</Text>
            <Text style={pair[1] ? s.tTd : s.tTdLast}>{pair[0].value}</Text>
            {pair[1] ? <Text style={s.tTh}>{pair[1].label}</Text> : null}
            {pair[1] ? <Text style={s.tTdLast}>{pair[1].value}</Text> : null}
          </View>
        ))}
      </View>
    );
  }
  // fichas
  return (
    <View style={s.fichas}>
      {items.map((d, i) => (
        <View key={i} style={s.fichaItem}>
          <Text style={s.fichaLab}>{d.label}</Text>
          <Text style={s.fichaVal}>{d.value}</Text>
        </View>
      ))}
    </View>
  );
}

// Encabezado de seccion (H1), segun la variante del tema.
export function SeccionHead({ s, theme, num, titulo }: { s: Styles; theme: ReportTheme; num: string; titulo: string }) {
  if (theme.h1Variant === "chip") {
    return (
      <View style={s.h1Chip}>
        <Text style={s.h1ChipBox}>{num}</Text>
        <Text style={s.h1ChipT}>{titulo}</Text>
      </View>
    );
  }
  if (theme.h1Variant === "barra") {
    return (
      <View style={s.h1Barra}>
        <Text style={s.h1BarraN}>{`${num}.0`}</Text>
        <Text style={s.h1BarraT}>{titulo}</Text>
      </View>
    );
  }
  return (
    <View style={s.h1Numero}>
      <Text style={s.h1NumeroN}>{num}</Text>
      <Text style={s.h1NumeroT}>{titulo}</Text>
    </View>
  );
}

export function Subseccion({ s, num, ss }: { s: Styles; num: string; ss: ReporteSubseccion }) {
  return (
    <View style={{ marginBottom: 12 }}>
      {ss.titulo ? (
        <View style={s.h2Wrap}>
          <View style={s.h2Tick} />
          <Text style={s.h2Num}>{num}</Text>
          <Text style={s.h2}>{ss.titulo}</Text>
        </View>
      ) : null}
      {ss.kpis && ss.kpis.length > 0 ? (
        <View style={s.kpis}>
          {ss.kpis.map((it, i) => (
            <View key={i} style={s.kpi}>
              <Text style={s.kpiV}>{it.v}</Text>
              <Text style={s.kpiK}>{it.k}</Text>
            </View>
          ))}
        </View>
      ) : null}
      {(ss.parrafos ?? []).map((p, i) => (
        <Text key={i} style={s.body}>
          {p}
        </Text>
      ))}
      {ss.donut ? <Donut s={s} donut={ss.donut} /> : null}
      {ss.barras ? <Barras s={s} barras={ss.barras} /> : null}
      {ss.tabla ? <Tabla s={s} tabla={ss.tabla} /> : null}
      {ss.lista && ss.lista.length > 0 ? (
        <View style={{ marginBottom: 6 }}>
          {ss.lista.map((it, i) => (
            <View key={i} style={s.li}>
              <Text style={s.liDot}>{"—"}</Text>
              <Text style={s.liTxt}>{it}</Text>
            </View>
          ))}
        </View>
      ) : null}
      {ss.enlaces && ss.enlaces.length > 0 ? (
        <View style={{ marginBottom: 6 }}>
          {ss.enlaces.map((e, i) => (
            <View key={i} style={s.enlaceItem}>
              {e.label ? <Text style={s.enlaceLabel}>{e.label}</Text> : null}
              <Link src={e.url} style={s.enlace}>
                {e.texto}
              </Link>
            </View>
          ))}
        </View>
      ) : null}
      {ss.fotos && ss.fotos.length > 0 ? <Fotos s={s} fotos={ss.fotos} /> : null}
    </View>
  );
}

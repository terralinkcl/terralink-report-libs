import React from "react";
import { Svg, Path, Rect, Line, Text, View } from "@react-pdf/renderer";
import type { Styles } from "./kit";
import type { ReporteDonut, ReporteBarras, ReporteTabla } from "./types";

// Graficos y tabla para informes con datos cuantitativos (ej. informe
// energetico). SVG nativo de @react-pdf (sin libs de charts). Los colores
// vienen en los datos; la tipografia/lineas salen de los estilos del tema (s).

interface Seg {
  d: string;
  color: string;
}

function punto(cx: number, cy: number, r: number, anguloDeg: number): [number, number] {
  const rad = (anguloDeg * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

// Anillo de donut a partir de valores y colores. Empieza arriba (-90) horario.
function segmentosDonut(
  valores: number[],
  colores: string[],
  cx: number,
  cy: number,
  rExterno: number,
  rInterno: number,
): Seg[] {
  const total = valores.reduce((a, b) => a + (b > 0 ? b : 0), 0);
  if (total <= 0) return [];
  const segmentos: Seg[] = [];
  let a0 = -90;
  valores.forEach((v, i) => {
    if (v <= 0) return;
    const barrido = (v / total) * 360;
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
      "Z",
    ].join(" ");
    segmentos.push({ d, color: colores[i] ?? "#999999" });
    a0 = a1;
  });
  return segmentos;
}

export function Donut({ s, donut }: { s: Styles; donut: ReporteDonut }) {
  const H = 130;
  const cx = 70;
  const cy = 65;
  const segs = segmentosDonut(
    donut.segmentos.map((x) => x.value),
    donut.segmentos.map((x) => x.color),
    cx,
    cy,
    58,
    34,
  );
  return (
    <View style={s.chartRow} wrap={false}>
      <View style={{ width: 140, height: H, position: "relative" }}>
        <Svg width={140} height={H} viewBox={`0 0 140 ${H}`}>
          {segs.map((seg, i) => (
            <Path key={i} d={seg.d} fill={seg.color} />
          ))}
        </Svg>
        {donut.centroTitulo || donut.centroValor ? (
          <View style={{ position: "absolute", top: cy - 14, left: 0, width: 140, alignItems: "center" }}>
            {donut.centroTitulo ? <Text style={s.donutCentroT}>{donut.centroTitulo}</Text> : null}
            {donut.centroValor ? <Text style={s.donutCentroV}>{donut.centroValor}</Text> : null}
          </View>
        ) : null}
      </View>
      <View style={{ flex: 1 }}>
        {donut.segmentos.map((seg, i) => (
          <View key={i} style={s.legendItem}>
            <View style={[s.legendBox, { backgroundColor: seg.color }]} />
            <Text style={s.legendTxt}>
              {seg.label}
              {seg.valueLabel ? `  ${seg.valueLabel}` : ""}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export function Barras({ s, barras }: { s: Styles; barras: ReporteBarras }) {
  const W = 420;
  const H = 175;
  const baseY = 140;
  const topY = 14;
  const allVals = barras.grupos.flatMap((g) => g.barras.map((b) => b.value));
  const maxVal = Math.max(...allVals, 1) * 1.15;
  const grupoW = W / Math.max(barras.grupos.length, 1);
  const maxBarras = Math.max(...barras.grupos.map((g) => g.barras.length), 1);
  const barW = Math.min(46, grupoW / (maxBarras + 1));
  const altura = (v: number) => (v / maxVal) * (baseY - topY);

  return (
    <View style={{ alignItems: "center", marginVertical: 8 }} wrap={false}>
      <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <Line x1={20} y1={baseY} x2={W - 10} y2={baseY} stroke="#cccccc" strokeWidth={1} />
        {barras.grupos.map((g, gi) => {
          const center = gi * grupoW + grupoW / 2;
          const n = g.barras.length;
          const totalW = n * barW + (n - 1) * 8;
          let x = center - totalW / 2;
          return g.barras.map((b, bi) => {
            const h = altura(b.value);
            const rect = <Rect key={`${gi}-${bi}`} x={x} y={baseY - h} width={barW} height={h} fill={b.color} />;
            x += barW + 8;
            return rect;
          });
        })}
      </Svg>
      <View style={{ flexDirection: "row", width: W, marginTop: -2 }}>
        {barras.grupos.map((g, gi) => (
          <View key={gi} style={{ width: grupoW, alignItems: "center" }}>
            <Text style={s.barGrupoLab}>{g.label}</Text>
            <View style={{ flexDirection: "row", marginTop: 2, flexWrap: "wrap", justifyContent: "center" }}>
              {g.barras.map((b, bi) => (
                <Text key={bi} style={[s.barValLab, { color: b.color }]}>
                  {b.label}: {b.valueLabel ?? String(b.value)}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export function Tabla({ s, tabla }: { s: Styles; tabla: ReporteTabla }) {
  const n = tabla.columnas.length;
  const alignFrom = tabla.alinearDerechaDesde ?? 1;
  const widths = tabla.columnas.map((_, i) => (i === 0 ? "46%" : `${(54 / Math.max(n - 1, 1)).toFixed(2)}%`));
  return (
    <View style={{ marginVertical: 8 }} wrap={false}>
      <View style={s.chRow}>
        {tabla.columnas.map((c, i) => (
          <Text key={i} style={[s.chTh, { width: widths[i], textAlign: i >= alignFrom ? "right" : "left" }]}>
            {c}
          </Text>
        ))}
      </View>
      {tabla.filas.map((fila, fi) => {
        const last = tabla.resaltarUltima && fi === tabla.filas.length - 1;
        return (
          <View key={fi} style={s.chTr}>
            {fila.map((cell, ci) => (
              <Text
                key={ci}
                style={[last ? s.chTdTot : s.chTd, { width: widths[ci], textAlign: ci >= alignFrom ? "right" : "left" }]}
              >
                {cell}
              </Text>
            ))}
          </View>
        );
      })}
    </View>
  );
}

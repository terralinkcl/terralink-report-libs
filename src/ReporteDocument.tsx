import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import type { ReporteData } from "./types";
import type { ReportTheme } from "./themes";
import { makeStyles, SeccionHead, Subseccion } from "./kit";
import { CoverPage } from "./CoverPage";

// Documento "Reporte CON PORTADA": informe largo con portada, indice (tabla de
// contenidos con numeros de pagina) y jerarquia de titulos/subtitulos.
// El layout es unico; el tema (themes.ts) define tipografia, paleta y variantes.
//
// Numeros de pagina del indice: reales, via render en dos (o mas) pasadas. Cada
// titulo (seccion y subseccion con titulo) lleva un marcador invisible que reporta
// su pagina (`onPageMarker`); renderReporteToBuffer (renderReporte.ts) renderiza,
// recolecta las paginas, y vuelve a renderizar pasando `tocPages` hasta estabilizar.
// El indice reserva el mismo espacio con o sin `tocPages` (layout identico).

interface TocRow {
  nivel: 1 | 2;
  num: string;
  titulo: string;
  page: string;
}

function buildToc(data: ReporteData, tocPages?: Record<string, number>): TocRow[] {
  const rows: TocRow[] = [];
  const pg = (num: string) => (tocPages && tocPages[num] != null ? `${tocPages[num]}` : "-");
  data.secciones.forEach((sec, i) => {
    const page = pg(`${i + 1}`);
    rows.push({ nivel: 1, num: `${i + 1}`, titulo: sec.titulo, page });
    sec.sub.forEach((ss, j) => {
      if (!ss.titulo) return; // subsecciones sin titulo no van al indice
      rows.push({ nivel: 2, num: `${i + 1}.${j + 1}`, titulo: ss.titulo, page: pg(`${i + 1}.${j + 1}`) });
    });
  });
  return rows;
}

export function ReporteDocument({
  data,
  theme,
  logo,
  tocPageNumbers = true,
  tocPages,
  onPageMarker,
}: {
  data: ReporteData;
  theme: ReportTheme;
  logo: string;
  // Numeros de pagina en el indice (por defecto si). Son exactos al renderizar con
  // renderReporteToBuffer; con false el indice va sin numeros y basta una pasada.
  tocPageNumbers?: boolean;
  // Pagina real de cada fila del indice (clave "2" o "2.3"). Sin esto el indice
  // muestra "-". Lo provee renderReporteToBuffer.
  tocPages?: Record<string, number>;
  // Callback de los marcadores de pagina (pasada de medicion).
  onPageMarker?: (num: string, page: number) => void;
}) {
  const s = makeStyles(theme);
  const { meta } = data;
  const toc = buildToc(data, tocPages);

  return (
    <Document>
      <CoverPage s={s} theme={theme} meta={meta} logo={logo} />

      {/* Cuerpo: indice + secciones (header/footer fijos) */}
      <Page size="A4" style={s.page}>
        <View style={s.runHead} fixed>
          <Text style={s.runHeadT}>{meta.titulo}</Text>
          <Text style={s.runHeadT}>{meta.planta}</Text>
        </View>
        <View style={s.footer} fixed>
          <Text style={s.footerT}>{meta.codigo ? `${meta.codigo}  ·  Terralink O&M` : "Terralink O&M"}</Text>
          <Text
            style={s.footerT}
            render={({ pageNumber, totalPages }) => `Página ${pageNumber} / ${totalPages}`}
          />
        </View>

        {/* Indice */}
        <Text style={s.tocKicker}>Contenido</Text>
        <Text style={s.tocTitle}>Índice</Text>
        <View style={{ marginTop: 10 }}>
          {toc.map((r, i) =>
            r.nivel === 1 ? (
              <View key={i} style={s.tocRow1}>
                <Text style={s.tocNum1}>{r.num}</Text>
                <Text style={s.tocT1}>{r.titulo}</Text>
                {tocPageNumbers ? <View style={s.leader} /> : null}
                {tocPageNumbers ? <Text style={s.tocPage1}>{`${r.page}`}</Text> : null}
              </View>
            ) : (
              <View key={i} style={s.tocRow2}>
                <Text style={s.tocNum2}>{r.num}</Text>
                <Text style={s.tocT2}>{r.titulo}</Text>
                {tocPageNumbers ? <View style={s.leader} /> : null}
                {tocPageNumbers ? <Text style={s.tocPage2}>{`${r.page}`}</Text> : null}
              </View>
            ),
          )}
        </View>

        {/* Secciones. El titulo (SeccionHead) va en su propio View con `break`
            (inicia pagina nueva); las subsecciones son HERMANOS directos del flujo
            de pagina, no hijos de un View que los envuelva. Asi react-pdf puede
            quebrar el contenido entre paginas con total libertad, sin mover el
            bloque entero y dejar el titulo solo en una pagina casi vacia. */}
        {data.secciones.map((sec, i) => (
          <React.Fragment key={i}>
            <View break>
              <SeccionHead s={s} theme={theme} num={`${i + 1}`} titulo={sec.titulo} onPageMarker={onPageMarker} />
            </View>
            {sec.sub.map((ss, j) => (
              <Subseccion key={j} s={s} num={`${i + 1}.${j + 1}`} ss={ss} onPageMarker={onPageMarker} />
            ))}
          </React.Fragment>
        ))}
      </Page>
    </Document>
  );
}

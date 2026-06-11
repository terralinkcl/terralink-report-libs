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
// Numeros de pagina del indice: cada seccion de nivel 1 arranca en pagina nueva
// (break). Portada = pag. 1, indice = pag. 2, seccion i = pag. (3 + i). Valido
// para secciones que caben en una pagina.

interface TocRow {
  nivel: 1 | 2;
  num: string;
  titulo: string;
  page: number;
}

function buildToc(data: ReporteData): TocRow[] {
  const rows: TocRow[] = [];
  data.secciones.forEach((sec, i) => {
    const page = 3 + i;
    rows.push({ nivel: 1, num: `${i + 1}`, titulo: sec.titulo, page });
    sec.sub.forEach((ss, j) => {
      if (!ss.titulo) return; // subsecciones sin titulo no van al indice
      rows.push({ nivel: 2, num: `${i + 1}.${j + 1}`, titulo: ss.titulo, page });
    });
  });
  return rows;
}

export function ReporteDocument({
  data,
  theme,
  logo,
  tocPageNumbers = true,
}: {
  data: ReporteData;
  theme: ReportTheme;
  logo: string;
  // Numeros de pagina en el indice. Validos cuando cada seccion cabe en una
  // pagina (informe corto). En documentos con secciones multipagina (consolidado)
  // conviene desactivarlos porque el calculo determinista deja de ser exacto.
  tocPageNumbers?: boolean;
}) {
  const s = makeStyles(theme);
  const { meta } = data;
  const toc = buildToc(data);

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

        {/* Secciones */}
        {data.secciones.map((sec, i) => (
          <View key={i} break>
            <SeccionHead s={s} theme={theme} num={`${i + 1}`} titulo={sec.titulo} />
            {sec.sub.map((ss, j) => (
              <Subseccion key={j} s={s} num={`${i + 1}.${j + 1}`} ss={ss} />
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
}

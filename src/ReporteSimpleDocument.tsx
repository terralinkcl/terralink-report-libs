import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import type { ReporteData } from "./types";
import type { ReportTheme } from "./themes";
import { makeStyles, Datos, SeccionHead, Subseccion, type DatoItem } from "./kit";
import { CoverPage } from "./CoverPage";

// Documento "Reporte SIMPLE": informe corto, secciones de corrido (sin indice).
// Opcionalmente lleva una PORTADA (con la constelacion de rombos si el tema la
// activa) como primera pagina. Util para la bitacora: portada + cuerpo breve.

export function ReporteSimpleDocument({
  data,
  theme,
  logo,
  conPortada = false,
}: {
  data: ReporteData;
  theme: ReportTheme;
  logo: string;
  conPortada?: boolean;
}) {
  const s = makeStyles(theme);
  const { meta } = data;

  const datos: DatoItem[] = [
    { label: "Planta", value: meta.planta },
    { label: "Periodo", value: meta.periodo },
    { label: "Código", value: meta.codigo },
    { label: "Fecha de emisión", value: meta.emision },
    { label: "Responsable", value: meta.responsable },
    { label: "Revisado por", value: meta.revisado },
  ];

  return (
    <Document>
      {conPortada ? <CoverPage s={s} theme={theme} meta={meta} logo={logo} /> : null}
      <Page size="A4" style={s.pageSimple}>
        <View style={s.footerSimple} fixed>
          <Text style={s.footerT}>{`${meta.codigo}  ·  Terralink O&M`}</Text>
          <Text
            style={s.footerT}
            render={({ pageNumber, totalPages }) => `Página ${pageNumber} / ${totalPages}`}
          />
        </View>

        {/* Header */}
        <View style={s.sHead}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image style={s.sHeadLogo} src={logo} />
          <View>
            <Text style={s.sHeadTag}>Informe de Mantenimiento</Text>
            <Text style={s.sHeadTag2}>Operación y Mantenimiento</Text>
          </View>
        </View>

        <Text style={s.sKicker}>{meta.eyebrow}</Text>
        <Text style={s.sTitle}>{meta.titulo}</Text>

        <Datos s={s} theme={theme} items={datos} />

        {/* Secciones de corrido */}
        {data.secciones.map((sec, i) => (
          <View key={i} style={{ marginTop: i === 0 ? 0 : 6 }}>
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

import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import type { ReporteMeta } from "./types";
import type { ReportTheme } from "./themes";
import { NetworkPattern } from "./NetworkPattern";
import type { Styles } from "./kit";

// Portada reutilizable (reporte con portada y bitacora con portada comparten esta
// pagina). Incluye la constelacion de red si el tema activa coverPattern.
export function CoverPage({
  s,
  theme,
  meta,
  logo,
}: {
  s: Styles;
  theme: ReportTheme;
  meta: ReporteMeta;
  logo: string;
}) {
  const metaItem = (lab: string, val: string) =>
    val ? (
      <View style={s.coverMetaItem}>
        <Text style={s.coverMetaLab}>{lab}</Text>
        <Text style={s.coverMetaVal}>{val}</Text>
      </View>
    ) : null;

  return (
    <Page size="A4" style={s.cover}>
      {theme.coverPattern ? (
        <NetworkPattern
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          lineColor={theme.coverDark ? "#FFFFFF" : "#0c1929"}
          lineOpacity={theme.coverDark ? 0.12 : 0.1}
          nodeColor={theme.coverDark ? "#FFFFFF" : "#0c1929"}
          nodeOpacity={theme.coverDark ? 0.18 : 0.14}
          accentColor={theme.accent}
          accentOpacity={0.85}
        />
      ) : null}
      <View style={s.coverRule} />
      {theme.coverDark ? (
        <View style={s.coverLogoChip}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image style={s.coverLogoChipImg} src={logo} />
        </View>
      ) : (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image style={s.coverLogo} src={logo} />
      )}
      <Text style={s.coverEyebrow}>{meta.eyebrow}</Text>
      <Text style={s.coverTitle}>{meta.titulo}</Text>
      {meta.subtitulo ? <Text style={s.coverSub}>{meta.subtitulo}</Text> : null}
      <View style={s.spacer} />
      <View style={s.coverMeta}>
        {metaItem("Planta", meta.planta)}
        {metaItem("Periodo", meta.periodo)}
        {metaItem("Código de documento", meta.codigo)}
        {metaItem("Fecha de emisión", meta.emision)}
        {metaItem("Elaborado por", meta.cargo ? `${meta.responsable} - ${meta.cargo}` : meta.responsable)}
        {metaItem("Revisado por", meta.revisado)}
      </View>
      <Text style={s.coverFoot}>
        Terralink O&amp;M  ·  Documento de uso interno  ·  Operación y Mantenimiento
      </Text>
    </Page>
  );
}

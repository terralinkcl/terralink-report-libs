// Temas (lineas graficas) de los documentos Reporte. Un mismo par de componentes
// (ReporteDocument = con portada, ReporteSimpleDocument = corto) se "pinta" con
// el tema elegido. Ademas de tipografia/paleta, el tema define VARIANTES de
// composicion (datos y encabezado de seccion) para que cada propuesta tenga
// personalidad propia, no solo otro color.
//
//  1 editorial : PT Serif + Lato, celeste de marca. Datos en fichas. Portada clara.
//  2 propuesta : Space Grotesk + IBM Plex Serif, navy. (manual 23ENE-PropuestaV3). Portada oscura.
//  3 corporate : Poppins + Lato, celeste/navy. Datos en tarjetas, seccion con chip.
//  4 tecnico   : Barlow Semi Condensed + Space Mono. Datos en tabla, seccion con barra.

export type ReportThemeKey =
  | "editorial"
  | "propuesta"
  | "corporate"
  | "tecnico"
  | "tesoreria"
  | "ed-suave"
  | "ed-minimo"
  | "ed-tinta"
  | "rombos-editorial"
  | "rombos-propuesta"
  | "rombos-tesoreria";
export type DatosVariant = "fichas" | "tarjetas" | "tabla";
export type H1Variant = "numero" | "chip" | "barra";
// Cuanto celeste/acento se usa. Niveles bajos llevan indice y numeros a tinta
// (navy/gris) y reservan el color a detalles minimos.
export type AccentLevel = "alto" | "medio" | "bajo" | "tinta";

export interface ReportTheme {
  key: ReportThemeKey;
  nombre: string;
  // Tipografias (familias registradas en fonts.ts)
  display: string; // titulos
  body: string; // cuerpo / parrafos
  sans: string; // labels, kicker, footer, running header
  mono?: string; // metadatos tecnicos (solo algunos temas)
  titleWeight: number;
  numWeight: number; // numero grande de seccion
  h2Weight: number;
  // Paleta cuerpo (paginas sobre blanco)
  accent: string;
  ink: string;
  bodyColor: string;
  muted: string;
  line: string;
  panel: string; // fondo de tarjetas / cabeceras de tabla
  // Variantes de composicion
  datosVariant: DatosVariant;
  h1Variant: H1Variant;
  accentLevel?: AccentLevel; // default "alto"
  // Portada
  coverDark: boolean;
  coverBg: string;
  coverInk: string;
  coverSub: string;
  coverAccentText: string;
  coverPattern?: boolean; // constelacion de red (network-pattern) de fondo en la portada
}

export const THEME_EDITORIAL: ReportTheme = {
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
  coverAccentText: "#06b6d4",
};

// Variantes mas sobrias del Editorial: mismo ADN (PT Serif + Lato), pero con el
// celeste muy reducido. El indice y los numeros pasan a tinta navy/gris.
export const THEME_ED_SUAVE: ReportTheme = {
  ...THEME_EDITORIAL,
  key: "ed-suave",
  nombre: "Editorial Suave",
  accentLevel: "medio", // indice y numero en navy; celeste solo en banda fina, tick y vinetas
};

export const THEME_ED_MINIMO: ReportTheme = {
  ...THEME_EDITORIAL,
  key: "ed-minimo",
  nombre: "Editorial Minimo",
  accentLevel: "bajo", // numero grande en gris tenue, eyebrow en gris; celeste casi solo en detalles
};

export const THEME_ED_TINTA: ReportTheme = {
  ...THEME_EDITORIAL,
  key: "ed-tinta",
  nombre: "Editorial Tinta",
  accentLevel: "tinta", // monocromo navy/gris, sin celeste (banda superior navy)
};

export const THEME_PROPUESTA: ReportTheme = {
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
  coverAccentText: "#00AEEF",
};

export const THEME_CORPORATE: ReportTheme = {
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
  coverAccentText: "#06b6d4",
};

export const THEME_TECNICO: ReportTheme = {
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
  coverAccentText: "#0e8fb0",
};

// Linea derivada de la UI del repo de Tesoreria (app-tesoreria-felipe-front):
// DM Sans + JetBrains Mono, azul de marca #37ADE3, grises slate, look
// corporativo-financiero minimalista (tarjetas/KPIs, mono para cifras).
export const THEME_TESORERIA: ReportTheme = {
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
  coverAccentText: "#37ADE3",
};

// Variantes con la constelacion de red (network-pattern del portal) en la
// portada. La portada va en navy oscuro (#001C38, igual que el login); el cuerpo
// mantiene el estilo sobrio de cada linea.
export const THEME_ROMBOS_EDITORIAL: ReportTheme = {
  ...THEME_EDITORIAL,
  key: "rombos-editorial",
  nombre: "Editorial + Rombos",
  accentLevel: "medio",
  coverPattern: true, // portada blanca con constelacion en navy tenue
};

export const THEME_ROMBOS_PROPUESTA: ReportTheme = {
  ...THEME_PROPUESTA,
  key: "rombos-propuesta",
  nombre: "Propuesta + Rombos",
  coverDark: false,
  coverPattern: true,
  coverBg: "#ffffff",
  coverInk: "#0c1929",
  coverSub: "#8a8f96",
};

export const THEME_ROMBOS_TESORERIA: ReportTheme = {
  ...THEME_TESORERIA,
  key: "rombos-tesoreria",
  nombre: "Tesoreria + Rombos",
  coverPattern: true, // portada blanca (tesoreria ya es clara) con constelacion
};

export const REPORT_THEMES: Record<ReportThemeKey, ReportTheme> = {
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
  "rombos-tesoreria": THEME_ROMBOS_TESORERIA,
};

import * as react_jsx_runtime from 'react/jsx-runtime';

interface ReportePhoto {
    url: string;
    caption?: string | null;
}
interface ReporteKpi {
    k: string;
    v: string;
}
interface ReporteDonutSegmento {
    label: string;
    value: number;
    valueLabel?: string;
    color: string;
}
interface ReporteDonut {
    segmentos: ReporteDonutSegmento[];
    centroTitulo?: string;
    centroValor?: string;
}
interface ReporteBarra {
    label: string;
    value: number;
    valueLabel?: string;
    color: string;
}
interface ReporteBarraGrupo {
    label: string;
    barras: ReporteBarra[];
}
interface ReporteBarras {
    grupos: ReporteBarraGrupo[];
}
interface ReporteTabla {
    columnas: string[];
    filas: string[][];
    resaltarUltima?: boolean;
    alinearDerechaDesde?: number;
}
interface ReporteSubseccion {
    titulo: string;
    parrafos?: string[];
    lista?: string[];
    kpis?: ReporteKpi[];
    fotos?: ReportePhoto[];
    donut?: ReporteDonut;
    barras?: ReporteBarras;
    tabla?: ReporteTabla;
}
interface ReporteSeccion {
    titulo: string;
    sub: ReporteSubseccion[];
}
interface ReporteMeta {
    eyebrow: string;
    titulo: string;
    subtitulo: string;
    planta: string;
    periodo: string;
    codigo: string;
    responsable: string;
    cargo: string;
    revisado: string;
    emision: string;
}
interface ReporteData {
    meta: ReporteMeta;
    secciones: ReporteSeccion[];
}

type ReportThemeKey = "editorial" | "propuesta" | "corporate" | "tecnico" | "tesoreria" | "ed-suave" | "ed-minimo" | "ed-tinta" | "rombos-editorial" | "rombos-propuesta" | "rombos-tesoreria";
type DatosVariant = "fichas" | "tarjetas" | "tabla";
type H1Variant = "numero" | "chip" | "barra";
type AccentLevel = "alto" | "medio" | "bajo" | "tinta";
interface ReportTheme {
    key: ReportThemeKey;
    nombre: string;
    display: string;
    body: string;
    sans: string;
    mono?: string;
    titleWeight: number;
    numWeight: number;
    h2Weight: number;
    accent: string;
    ink: string;
    bodyColor: string;
    muted: string;
    line: string;
    panel: string;
    datosVariant: DatosVariant;
    h1Variant: H1Variant;
    accentLevel?: AccentLevel;
    coverDark: boolean;
    coverBg: string;
    coverInk: string;
    coverSub: string;
    coverAccentText: string;
    coverPattern?: boolean;
}
declare const THEME_EDITORIAL: ReportTheme;
declare const THEME_ED_SUAVE: ReportTheme;
declare const THEME_ED_MINIMO: ReportTheme;
declare const THEME_ED_TINTA: ReportTheme;
declare const THEME_PROPUESTA: ReportTheme;
declare const THEME_CORPORATE: ReportTheme;
declare const THEME_TECNICO: ReportTheme;
declare const THEME_TESORERIA: ReportTheme;
declare const THEME_ROMBOS_EDITORIAL: ReportTheme;
declare const THEME_ROMBOS_PROPUESTA: ReportTheme;
declare const THEME_ROMBOS_TESORERIA: ReportTheme;
declare const REPORT_THEMES: Record<ReportThemeKey, ReportTheme>;

type Styles = Record<string, any>;
interface DatoItem {
    label: string;
    value: string;
}
declare function makeStyles(t: ReportTheme): Styles;
declare function Fotos({ s, fotos }: {
    s: Styles;
    fotos: ReportePhoto[];
}): react_jsx_runtime.JSX.Element;
declare function Datos({ s, theme, items }: {
    s: Styles;
    theme: ReportTheme;
    items: DatoItem[];
}): react_jsx_runtime.JSX.Element;
declare function SeccionHead({ s, theme, num, titulo }: {
    s: Styles;
    theme: ReportTheme;
    num: string;
    titulo: string;
}): react_jsx_runtime.JSX.Element;
declare function Subseccion({ s, num, ss }: {
    s: Styles;
    num: string;
    ss: ReporteSubseccion;
}): react_jsx_runtime.JSX.Element;

declare function Donut({ s, donut }: {
    s: Styles;
    donut: ReporteDonut;
}): react_jsx_runtime.JSX.Element;
declare function Barras({ s, barras }: {
    s: Styles;
    barras: ReporteBarras;
}): react_jsx_runtime.JSX.Element;
declare function Tabla({ s, tabla }: {
    s: Styles;
    tabla: ReporteTabla;
}): react_jsx_runtime.JSX.Element;

interface NetworkPatternProps {
    style?: any;
    viewBox?: string;
    lineColor?: string;
    lineOpacity?: number;
    nodeColor?: string;
    nodeOpacity?: number;
    accentColor?: string;
    accentOpacity?: number;
}
declare function NetworkPattern({ style, viewBox, lineColor, lineOpacity, nodeColor, nodeOpacity, accentColor, accentOpacity, }: NetworkPatternProps): react_jsx_runtime.JSX.Element;

declare function CoverPage({ s, theme, meta, logo, }: {
    s: Styles;
    theme: ReportTheme;
    meta: ReporteMeta;
    logo: string;
}): react_jsx_runtime.JSX.Element;

declare function ReporteDocument({ data, theme, logo, tocPageNumbers, }: {
    data: ReporteData;
    theme: ReportTheme;
    logo: string;
    tocPageNumbers?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function ReporteSimpleDocument({ data, theme, logo, conPortada, }: {
    data: ReporteData;
    theme: ReportTheme;
    logo: string;
    conPortada?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function registerReportFonts(fontsDir?: string): void;

declare function placeholderPhoto(top: [number, number, number], bottom: [number, number, number], w?: number, h?: number): string;

export { type AccentLevel, Barras, CoverPage, type DatoItem, Datos, type DatosVariant, Donut, Fotos, type H1Variant, NetworkPattern, type NetworkPatternProps, REPORT_THEMES, type ReportTheme, type ReportThemeKey, type ReporteBarra, type ReporteBarraGrupo, type ReporteBarras, type ReporteData, ReporteDocument, type ReporteDonut, type ReporteDonutSegmento, type ReporteKpi, type ReporteMeta, type ReportePhoto, type ReporteSeccion, ReporteSimpleDocument, type ReporteSubseccion, type ReporteTabla, SeccionHead, type Styles, Subseccion, THEME_CORPORATE, THEME_EDITORIAL, THEME_ED_MINIMO, THEME_ED_SUAVE, THEME_ED_TINTA, THEME_PROPUESTA, THEME_ROMBOS_EDITORIAL, THEME_ROMBOS_PROPUESTA, THEME_ROMBOS_TESORERIA, THEME_TECNICO, THEME_TESORERIA, Tabla, makeStyles, placeholderPhoto, registerReportFonts };

// terralink-report-libs — formato editorial de informes PDF (Terralink).
// Compartido por app-o-m, portal de clientes y demas plataformas. El formato
// visual vive aqui; cada app aporta solo su mapper (datos propios -> ReporteData).

export * from "./types";
export * from "./themes";
export * from "./kit";
export { NetworkPattern } from "./NetworkPattern";
export type { NetworkPatternProps } from "./NetworkPattern";
export { CoverPage } from "./CoverPage";
export { ReporteDocument } from "./ReporteDocument";
export { ReporteSimpleDocument } from "./ReporteSimpleDocument";
export { registerReportFonts } from "./fonts";
export { placeholderPhoto } from "./placeholder";

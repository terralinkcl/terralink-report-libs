// Modelo de datos del documento "Reporte" (informe largo con portada + indice).

export interface ReportePhoto {
  url: string; // URL accesible o data URI
  caption?: string | null;
}

export interface ReporteKpi {
  k: string;
  v: string;
}

export interface ReporteSubseccion {
  titulo: string;
  parrafos?: string[];
  lista?: string[];
  kpis?: ReporteKpi[];
  fotos?: ReportePhoto[];
}

export interface ReporteSeccion {
  titulo: string;
  sub: ReporteSubseccion[];
}

export interface ReporteMeta {
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

export interface ReporteData {
  meta: ReporteMeta;
  secciones: ReporteSeccion[];
}

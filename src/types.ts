// Modelo de datos del documento "Reporte" (informe largo con portada + indice).

export interface ReportePhoto {
  url: string; // URL accesible o data URI
  caption?: string | null;
}

export interface ReporteKpi {
  k: string;
  v: string;
}

// ---- Graficos y tablas (para informes con datos cuantitativos) ----

export interface ReporteDonutSegmento {
  label: string;
  value: number;
  valueLabel?: string; // texto en la leyenda (ej. "1.234 kWh"); si falta, se usa value
  color: string;
}

export interface ReporteDonut {
  segmentos: ReporteDonutSegmento[];
  centroTitulo?: string; // texto chico en el centro del anillo (ej. "Total")
  centroValor?: string; // valor grande en el centro (ej. "5.000 kWh")
}

export interface ReporteBarra {
  label: string; // serie (ej. "Fronius")
  value: number;
  valueLabel?: string;
  color: string;
}

export interface ReporteBarraGrupo {
  label: string; // categoria del grupo (ej. "Consumo desde red")
  barras: ReporteBarra[];
}

export interface ReporteBarras {
  grupos: ReporteBarraGrupo[];
}

export interface ReporteTabla {
  columnas: string[];
  filas: string[][];
  resaltarUltima?: boolean; // pinta la ultima fila como total
  alinearDerechaDesde?: number; // indice de columna desde el cual se alinea a la derecha (default 1)
}

export interface ReporteSubseccion {
  titulo: string;
  parrafos?: string[];
  lista?: string[];
  kpis?: ReporteKpi[];
  fotos?: ReportePhoto[];
  donut?: ReporteDonut;
  barras?: ReporteBarras;
  tabla?: ReporteTabla;
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

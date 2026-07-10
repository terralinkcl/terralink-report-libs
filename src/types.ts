// Modelo de datos del documento "Reporte" (informe largo con portada + indice).

export interface ReportePhoto {
  url: string; // URL accesible o data URI
  caption?: string | null;
  // Tamano de la foto en el informe. "normal" (default) = 2 por fila; "grande" =
  // 1 por fila; "xl" = 1 por fila, casi a pagina completa. Para dar enfasis.
  size?: "normal" | "grande" | "xl";
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

// Enlace clickeable dentro de una subseccion (ej. "Ver video" en informes con
// material audiovisual). `label` es el texto previo no clickeable (opcional);
// `texto` es el hipervinculo visible y `url` el destino.
export interface ReporteEnlace {
  label?: string;
  texto: string;
  url: string;
}

export interface ReporteSubseccion {
  titulo: string;
  parrafos?: string[];
  lista?: string[];
  enlaces?: ReporteEnlace[];
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

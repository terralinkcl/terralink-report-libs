# terralink-report-libs

Librería compartida de **formatos PDF de informes Terralink** (línea editorial:
portada, índice y secciones). Usada por **app-o-m** y el **portal de clientes**
para generar informes con un diseño idéntico desde cualquier plataforma.

El formato visual vive aquí; cada app aporta solo su **mapper** (sus datos →
`ReporteData`). Las fuentes (PT Serif, Lato, etc.) viajan empaquetadas: ningún
consumidor necesita copiarlas.

---

## Instalación

```bash
npm install github:terralinkcl/terralink-report-libs
```

Peer dependencies (ya presentes en las apps Next): `react`, `@react-pdf/renderer`.

---

## Uso

```tsx
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import {
  ReporteDocument,
  REPORT_THEMES,
  registerReportFonts,
  type ReporteData,
} from "terralink-report-libs";

registerReportFonts(); // idempotente; carga las fuentes del paquete

const data: ReporteData = {
  meta: { eyebrow: "...", titulo: "...", subtitulo: "...", planta: "...", periodo: "...", codigo: "", responsable: "...", cargo: "", revisado: "", emision: "..." },
  secciones: [{ titulo: "Sección", sub: [{ titulo: "", parrafos: ["..."], fotos: [] }] }],
};

const buffer = await renderToBuffer(
  <ReporteDocument data={data} theme={REPORT_THEMES["ed-suave"]} logo={logoBase64} />
);
```

### Componentes
- `ReporteDocument` — informe con portada + índice + secciones. Prop `tocPageNumbers`
  (false para documentos con secciones multipágina, p. ej. consolidados).
- `ReporteSimpleDocument` — informe corto (opcional `conPortada`).
- `CoverPage`, `NetworkPattern` — piezas reutilizables.

### Temas (`REPORT_THEMES`)
`editorial`, `ed-suave`, `ed-minimo`, `ed-tinta`, `propuesta`, `corporate`,
`tecnico`, `tesoreria`, y variantes `rombos-*` (portada con la constelación de marca).
El estándar de los informes O&M es **`ed-suave`** (editorial sobrio, sin rombos).

### Modelo de datos
`ReporteData` = `{ meta, secciones[] }`. Cada `seccion` tiene `sub[]`
(subsecciones con `parrafos`, `lista`, `kpis`, `fotos`). Ver `types`.

---

## Desarrollo

```bash
npm install
npm run build      # genera dist/ (tsup: cjs + esm + d.ts)
npm run typecheck
```

`dist/` y `fonts/` se versionan (se publican vía git install). Tras cambios:
`npm run build` y commitear el `dist/` actualizado.

## Versionado (semver)
- **patch**: ajustes visuales menores
- **minor**: nuevos temas o props opcionales
- **major**: cambios que rompen el contrato de `ReporteData`

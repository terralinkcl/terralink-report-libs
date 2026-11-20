import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { ReporteDocument } from "./ReporteDocument";

export type RenderReporteProps = React.ComponentProps<typeof ReporteDocument>;

const MAX_PASADAS = 4;

function iguales(a: Record<string, number>, b: Record<string, number>): boolean {
  const ka = Object.keys(a);
  return ka.length === Object.keys(b).length && ka.every((k) => a[k] === b[k]);
}

// Renderiza ReporteDocument con numeros de pagina reales en el indice.
// Pasada 1: mide en que pagina cae cada titulo. Pasada 2+: renderiza con
// `tocPages`; si las paginas medidas cambian (el indice ocupa mas/menos paginas),
// repite hasta estabilizar (max. MAX_PASADAS).
export async function renderReporteToBuffer(props: RenderReporteProps): Promise<Buffer> {
  let usadas: Record<string, number> | undefined = props.tocPages;
  let buf: Buffer | undefined;
  for (let i = 0; i < MAX_PASADAS; i++) {
    const medidas: Record<string, number> = {};
    // El render de un nodo puede invocarse mas de una vez; la ultima llamada es la
    // pagina final donde quedo el titulo.
    const onPageMarker = (num: string, page: number) => {
      medidas[num] = page;
      props.onPageMarker?.(num, page);
    };
    buf = await renderToBuffer(
      React.createElement(ReporteDocument, { ...props, tocPages: usadas, onPageMarker }) as React.ReactElement<any>,
    );
    if (props.tocPageNumbers === false) return buf;
    if (usadas && iguales(usadas, medidas)) return buf;
    usadas = medidas;
  }
  return buf as Buffer;
}

// Genera imagenes PNG placeholder (bitono) como data URI, sin dependencias ni
// red. Solo para previews/muestras del Reporte; en produccion van fotos reales.
import zlib from "node:zlib";

function crc32(buf: Buffer): number {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type: string, data: Buffer): Buffer {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const t = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crc]);
}

export function placeholderPhoto(
  top: [number, number, number],
  bottom: [number, number, number],
  w = 800,
  h = 520,
): string {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type RGB
  const horizon = Math.floor(h * 0.62);
  const rows: Buffer[] = [];
  for (let y = 0; y < h; y++) {
    const row = Buffer.alloc(1 + w * 3);
    const [r, g, b] = y < horizon ? top : bottom;
    const f = 1 - (y / h) * 0.18;
    for (let x = 0; x < w; x++) {
      row[1 + x * 3] = Math.min(255, Math.round(r * f));
      row[2 + x * 3] = Math.min(255, Math.round(g * f));
      row[3 + x * 3] = Math.min(255, Math.round(b * f));
    }
    rows.push(row);
  }
  const idat = zlib.deflateSync(Buffer.concat(rows));
  const png = Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
  return `data:image/png;base64,${png.toString("base64")}`;
}

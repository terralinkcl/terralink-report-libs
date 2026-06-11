// Registro de las fuentes del formato editorial. Las fuentes viajan EMPAQUETADAS
// con esta libreria (carpeta /fonts del paquete), de modo que ningun consumidor
// necesita copiarlas. Idempotente. Runtime nodejs.
import { Font } from "@react-pdf/renderer";
import fs from "node:fs";
import path from "node:path";

let registered = false;

// Directorio de fuentes. Por defecto resuelve a la carpeta /fonts del paquete
// (../fonts respecto del dist). tsup inyecta __dirname tambien en el build ESM
// via `shims`. Se puede sobre-escribir pasando un directorio explicito (util si
// el bundler del consumidor no incluye los assets del paquete).
function defaultFontsDir(): string {
  return path.join(__dirname, "..", "fonts");
}

export function registerReportFonts(fontsDir: string = defaultFontsDir()): void {
  if (registered) return;
  const F = (f: string) => path.join(fontsDir, f);

  Font.register({
    family: "PTSerif",
    fonts: [
      { src: F("PTSerif-Regular.ttf"), fontWeight: 400 },
      { src: F("PTSerif-Bold.ttf"), fontWeight: 700 },
    ],
  });
  Font.register({
    family: "Lato",
    fonts: [
      { src: F("Lato-Light.ttf"), fontWeight: 300 },
      { src: F("Lato-Regular.ttf"), fontWeight: 400 },
      { src: F("Lato-Bold.ttf"), fontWeight: 700 },
      { src: F("Lato-Black.ttf"), fontWeight: 900 },
    ],
  });
  Font.register({
    family: "SpaceGrotesk",
    fonts: [
      { src: F("SpaceGrotesk-300.woff"), fontWeight: 300 },
      { src: F("SpaceGrotesk-400.woff"), fontWeight: 400 },
      { src: F("SpaceGrotesk-500.woff"), fontWeight: 500 },
      { src: F("SpaceGrotesk-700.woff"), fontWeight: 700 },
    ],
  });
  Font.register({
    family: "IBMPlexSerif",
    fonts: [
      { src: F("IBMPlexSerif-Light.ttf"), fontWeight: 300 },
      { src: F("IBMPlexSerif-Regular.ttf"), fontWeight: 400 },
      { src: F("IBMPlexSerif-Medium.ttf"), fontWeight: 500 },
      { src: F("IBMPlexSerif-Bold.ttf"), fontWeight: 700 },
    ],
  });
  Font.register({
    family: "Poppins",
    fonts: [
      { src: F("Poppins-Light.ttf"), fontWeight: 300 },
      { src: F("Poppins-Regular.ttf"), fontWeight: 400 },
      { src: F("Poppins-Medium.ttf"), fontWeight: 500 },
      { src: F("Poppins-SemiBold.ttf"), fontWeight: 600 },
      { src: F("Poppins-Bold.ttf"), fontWeight: 700 },
    ],
  });
  Font.register({
    family: "BarlowSC",
    fonts: [
      { src: F("BarlowSC-Regular.ttf"), fontWeight: 400 },
      { src: F("BarlowSC-Medium.ttf"), fontWeight: 500 },
      { src: F("BarlowSC-SemiBold.ttf"), fontWeight: 600 },
      { src: F("BarlowSC-Bold.ttf"), fontWeight: 700 },
    ],
  });
  Font.register({
    family: "SpaceMono",
    fonts: [
      { src: F("SpaceMono-Regular.ttf"), fontWeight: 400 },
      { src: F("SpaceMono-Bold.ttf"), fontWeight: 700 },
    ],
  });
  Font.register({
    family: "DMSans",
    fonts: [
      { src: F("DMSans-400.woff"), fontWeight: 400 },
      { src: F("DMSans-500.woff"), fontWeight: 500 },
      { src: F("DMSans-700.woff"), fontWeight: 700 },
    ],
  });
  Font.register({
    family: "JetBrainsMono",
    fonts: [
      { src: F("JetBrainsMono-400.woff"), fontWeight: 400 },
      { src: F("JetBrainsMono-700.woff"), fontWeight: 700 },
    ],
  });

  Font.registerHyphenationCallback((w) => [w]);
  registered = true;
}

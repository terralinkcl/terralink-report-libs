import { defineConfig } from "tsup";

// Build de la libreria. `external` deja react y @react-pdf como peer (no se
// bundlean). `shims: true` inyecta __dirname tambien en el output ESM, necesario
// para que registerReportFonts resuelva la carpeta /fonts del paquete.
export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  shims: true,
  external: ["react", "@react-pdf/renderer"],
});

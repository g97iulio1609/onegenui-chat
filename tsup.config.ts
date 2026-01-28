import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "@onegenui/core",
    "@onegenui/react",
    "@onegenui/ui",
    "@onegenui/utils",
    "@onegenui/schemas",
  ],
});

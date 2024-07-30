import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";
import css from 'rollup-plugin-css-only';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "ViteButton",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts(),css(),postcss({
    extract: true,
    plugins: [tailwindcss, autoprefixer],
  }),],
});

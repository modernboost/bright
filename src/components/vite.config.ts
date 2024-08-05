import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";
import css from "rollup-plugin-css-only";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import postcss from "rollup-plugin-postcss";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

import libCss from "vite-plugin-libcss";
export default defineConfig({
	css: {
		modules: {
			scopeBehaviour: "local",
		},
	},
	build: {
		cssCodeSplit: true,
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
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === "style.css")
						return "styles/[name].[hash][extname]";
					return "assets/[name].[hash][extname]";
				},
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},
	plugins: [
		react(),
		dts(),
		css(),
		postcss({
			plugins: [tailwindcss, autoprefixer],
			inject: true, // Injects styles into the <head> of the document
			minimize: true, // Optional: Minimize the CSS output
		}),
		cssInjectedByJsPlugin({}),
		libCss({
			include: "**/*", // Include all entry files
			// exclude: 'src/utils/*', // Exclude entry files in the "utils" directory
		}),
	],
});

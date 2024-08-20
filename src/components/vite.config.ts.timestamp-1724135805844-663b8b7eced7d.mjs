// vite.config.ts
import { defineConfig } from "file:///E:/Projects/mbt/bright/src/components/node_modules/vite/dist/node/index.js";
import react from "file:///E:/Projects/mbt/bright/src/components/node_modules/@vitejs/plugin-react-swc/index.mjs";
import dts from "file:///E:/Projects/mbt/bright/src/components/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
import css from "file:///E:/Projects/mbt/bright/src/components/node_modules/rollup-plugin-css-only/dist/index.mjs";
import autoprefixer from "file:///E:/Projects/mbt/bright/src/components/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwindcss from "file:///E:/Projects/mbt/bright/src/components/node_modules/tailwindcss/lib/index.js";
import postcss from "file:///E:/Projects/mbt/bright/src/components/node_modules/rollup-plugin-postcss/dist/index.js";
import cssInjectedByJsPlugin from "file:///E:/Projects/mbt/bright/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import libCss from "file:///E:/Projects/mbt/bright/node_modules/vite-plugin-libcss/index.js";
var __vite_injected_original_dirname = "E:\\Projects\\mbt\\bright\\src\\components";
var vite_config_default = defineConfig({
  css: {
    modules: {
      scopeBehaviour: "local"
    }
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "index.ts"),
      name: "ViteButton",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css")
            return "styles/[name].[hash][extname]";
          return "assets/[name].[hash][extname]";
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [
    react(),
    dts(),
    css(),
    postcss({
      plugins: [tailwindcss, autoprefixer],
      inject: true,
      // Injects styles into the <head> of the document
      minimize: true
      // Optional: Minimize the CSS output
    }),
    cssInjectedByJsPlugin({}),
    libCss({
      include: "**/*"
      // Include all entry files
      // exclude: 'src/utils/*', // Exclude entry files in the "utils" directory
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxQcm9qZWN0c1xcXFxtYnRcXFxcYnJpZ2h0XFxcXHNyY1xcXFxjb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxQcm9qZWN0c1xcXFxtYnRcXFxcYnJpZ2h0XFxcXHNyY1xcXFxjb21wb25lbnRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9Qcm9qZWN0cy9tYnQvYnJpZ2h0L3NyYy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInJvbGx1cC1wbHVnaW4tY3NzLW9ubHlcIjtcclxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tIFwiYXV0b3ByZWZpeGVyXCI7XHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIjtcclxuaW1wb3J0IHBvc3Rjc3MgZnJvbSBcInJvbGx1cC1wbHVnaW4tcG9zdGNzc1wiO1xyXG5pbXBvcnQgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanNcIjtcclxuXHJcbmltcG9ydCBsaWJDc3MgZnJvbSBcInZpdGUtcGx1Z2luLWxpYmNzc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG5cdGNzczoge1xyXG5cdFx0bW9kdWxlczoge1xyXG5cdFx0XHRzY29wZUJlaGF2aW91cjogXCJsb2NhbFwiLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGJ1aWxkOiB7XHJcblx0XHRjc3NDb2RlU3BsaXQ6IHRydWUsXHJcblx0XHRsaWI6IHtcclxuXHRcdFx0ZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXgudHNcIiksXHJcblx0XHRcdG5hbWU6IFwiVml0ZUJ1dHRvblwiLFxyXG5cdFx0XHRmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXHJcblx0XHR9LFxyXG5cdFx0cm9sbHVwT3B0aW9uczoge1xyXG5cdFx0XHRleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXHJcblx0XHRcdG91dHB1dDoge1xyXG5cdFx0XHRcdGdsb2JhbHM6IHtcclxuXHRcdFx0XHRcdHJlYWN0OiBcIlJlYWN0XCIsXHJcblx0XHRcdFx0XHRcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGFzc2V0SW5mby5uYW1lID09PSBcInN0eWxlLmNzc1wiKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJzdHlsZXMvW25hbWVdLltoYXNoXVtleHRuYW1lXVwiO1xyXG5cdFx0XHRcdFx0cmV0dXJuIFwiYXNzZXRzL1tuYW1lXS5baGFzaF1bZXh0bmFtZV1cIjtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHNvdXJjZW1hcDogdHJ1ZSxcclxuXHRcdGVtcHR5T3V0RGlyOiB0cnVlLFxyXG5cdH0sXHJcblx0cGx1Z2luczogW1xyXG5cdFx0cmVhY3QoKSxcclxuXHRcdGR0cygpLFxyXG5cdFx0Y3NzKCksXHJcblx0XHRwb3N0Y3NzKHtcclxuXHRcdFx0cGx1Z2luczogW3RhaWx3aW5kY3NzLCBhdXRvcHJlZml4ZXJdLFxyXG5cdFx0XHRpbmplY3Q6IHRydWUsIC8vIEluamVjdHMgc3R5bGVzIGludG8gdGhlIDxoZWFkPiBvZiB0aGUgZG9jdW1lbnRcclxuXHRcdFx0bWluaW1pemU6IHRydWUsIC8vIE9wdGlvbmFsOiBNaW5pbWl6ZSB0aGUgQ1NTIG91dHB1dFxyXG5cdFx0fSksXHJcblx0XHRjc3NJbmplY3RlZEJ5SnNQbHVnaW4oe30pLFxyXG5cdFx0bGliQ3NzKHtcclxuXHRcdFx0aW5jbHVkZTogXCIqKi8qXCIsIC8vIEluY2x1ZGUgYWxsIGVudHJ5IGZpbGVzXHJcblx0XHRcdC8vIGV4Y2x1ZGU6ICdzcmMvdXRpbHMvKicsIC8vIEV4Y2x1ZGUgZW50cnkgZmlsZXMgaW4gdGhlIFwidXRpbHNcIiBkaXJlY3RvcnlcclxuXHRcdH0pLFxyXG5cdF0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZTLFNBQVMsb0JBQW9CO0FBQzFVLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUNoQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGFBQWE7QUFDcEIsT0FBTywyQkFBMkI7QUFFbEMsT0FBTyxZQUFZO0FBVm5CLElBQU0sbUNBQW1DO0FBV3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLEtBQUs7QUFBQSxJQUNKLFNBQVM7QUFBQSxNQUNSLGdCQUFnQjtBQUFBLElBQ2pCO0FBQUEsRUFDRDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsS0FBSztBQUFBLE1BQ0osT0FBTyxLQUFLLFFBQVEsa0NBQVcsVUFBVTtBQUFBLE1BQ3pDLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLFNBQVMsTUFBTTtBQUFBLElBQ3RDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDZCxVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ1AsU0FBUztBQUFBLFVBQ1IsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLGdCQUFnQixDQUFDLGNBQWM7QUFDOUIsY0FBSSxVQUFVLFNBQVM7QUFDdEIsbUJBQU87QUFDUixpQkFBTztBQUFBLFFBQ1I7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0EsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLFFBQVE7QUFBQSxNQUNQLFNBQVMsQ0FBQyxhQUFhLFlBQVk7QUFBQSxNQUNuQyxRQUFRO0FBQUE7QUFBQSxNQUNSLFVBQVU7QUFBQTtBQUFBLElBQ1gsQ0FBQztBQUFBLElBQ0Qsc0JBQXNCLENBQUMsQ0FBQztBQUFBLElBQ3hCLE9BQU87QUFBQSxNQUNOLFNBQVM7QUFBQTtBQUFBO0FBQUEsSUFFVixDQUFDO0FBQUEsRUFDRjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

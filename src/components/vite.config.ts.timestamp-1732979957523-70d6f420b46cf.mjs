// vite.config.ts
import { defineConfig } from "file:///D:/projects/mbt/bright/src/components/node_modules/vite/dist/node/index.js";
import react from "file:///D:/projects/mbt/bright/src/components/node_modules/@vitejs/plugin-react-swc/index.mjs";
import dts from "file:///D:/projects/mbt/bright/node_modules/vite-plugin-dts/dist/index.mjs";
import css from "file:///D:/projects/mbt/bright/src/components/node_modules/rollup-plugin-css-only/dist/index.mjs";
import autoprefixer from "file:///D:/projects/mbt/bright/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwindcss from "file:///D:/projects/mbt/bright/node_modules/tailwindcss/lib/index.js";
import postcss from "file:///D:/projects/mbt/bright/src/components/node_modules/rollup-plugin-postcss/dist/index.js";
import cssInjectedByJsPlugin from "file:///D:/projects/mbt/bright/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import libCss from "file:///D:/projects/mbt/bright/node_modules/vite-plugin-libcss/index.js";
var vite_config_default = defineConfig({
  css: {
    modules: {
      scopeBehaviour: "local"
    }
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: "index.ts",
      name: "brightjs",
      fileName: "bright",
      formats: ["es", "cjs", "umd"]
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
      modules: true,
      // Enable CSS Modules
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxtYnRcXFxcYnJpZ2h0XFxcXHNyY1xcXFxjb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxtYnRcXFxcYnJpZ2h0XFxcXHNyY1xcXFxjb21wb25lbnRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9qZWN0cy9tYnQvYnJpZ2h0L3NyYy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInJvbGx1cC1wbHVnaW4tY3NzLW9ubHlcIjtcclxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tIFwiYXV0b3ByZWZpeGVyXCI7XHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIjtcclxuaW1wb3J0IHBvc3Rjc3MgZnJvbSBcInJvbGx1cC1wbHVnaW4tcG9zdGNzc1wiO1xyXG5pbXBvcnQgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanNcIjtcclxuXHJcbmltcG9ydCBsaWJDc3MgZnJvbSBcInZpdGUtcGx1Z2luLWxpYmNzc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG5cdGNzczoge1xyXG5cdFx0bW9kdWxlczoge1xyXG5cdFx0XHRzY29wZUJlaGF2aW91cjogXCJsb2NhbFwiLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGJ1aWxkOiB7XHJcblx0XHRjc3NDb2RlU3BsaXQ6IHRydWUsXHJcblx0XHRsaWI6IHtcclxuXHRcdFx0ZW50cnk6IFwiaW5kZXgudHNcIixcclxuXHRcdFx0bmFtZTogXCJicmlnaHRqc1wiLFxyXG5cdFx0XHRmaWxlTmFtZTogXCJicmlnaHRcIixcclxuXHRcdFx0Zm9ybWF0czogW1wiZXNcIiwgXCJjanNcIiwgXCJ1bWRcIl0sXHJcblx0XHR9LFxyXG5cdFx0cm9sbHVwT3B0aW9uczoge1xyXG5cdFx0XHRleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXHJcblx0XHRcdG91dHB1dDoge1xyXG5cdFx0XHRcdGdsb2JhbHM6IHtcclxuXHRcdFx0XHRcdHJlYWN0OiBcIlJlYWN0XCIsXHJcblx0XHRcdFx0XHRcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGFzc2V0SW5mby5uYW1lID09PSBcInN0eWxlLmNzc1wiKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJzdHlsZXMvW25hbWVdLltoYXNoXVtleHRuYW1lXVwiO1xyXG5cdFx0XHRcdFx0cmV0dXJuIFwiYXNzZXRzL1tuYW1lXS5baGFzaF1bZXh0bmFtZV1cIjtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHNvdXJjZW1hcDogdHJ1ZSxcclxuXHRcdGVtcHR5T3V0RGlyOiB0cnVlLFxyXG5cdH0sXHJcblx0cGx1Z2luczogW1xyXG5cdFx0cmVhY3QoKSxcclxuXHRcdGR0cygpLFxyXG5cdFx0Y3NzKCksXHJcblx0XHRwb3N0Y3NzKHtcclxuXHRcdFx0cGx1Z2luczogW3RhaWx3aW5kY3NzLCBhdXRvcHJlZml4ZXJdLFxyXG5cdFx0XHRtb2R1bGVzOiB0cnVlLCAvLyBFbmFibGUgQ1NTIE1vZHVsZXNcclxuXHRcdFx0aW5qZWN0OiB0cnVlLCAvLyBJbmplY3RzIHN0eWxlcyBpbnRvIHRoZSA8aGVhZD4gb2YgdGhlIGRvY3VtZW50XHJcblx0XHRcdG1pbmltaXplOiB0cnVlLCAvLyBPcHRpb25hbDogTWluaW1pemUgdGhlIENTUyBvdXRwdXRcclxuXHRcdH0pLFxyXG5cdFx0Y3NzSW5qZWN0ZWRCeUpzUGx1Z2luKHt9KSxcclxuXHRcdGxpYkNzcyh7XHJcblx0XHRcdGluY2x1ZGU6IFwiKiovKlwiLCAvLyBJbmNsdWRlIGFsbCBlbnRyeSBmaWxlc1xyXG5cdFx0XHQvLyBleGNsdWRlOiAnc3JjL3V0aWxzLyonLCAvLyBFeGNsdWRlIGVudHJ5IGZpbGVzIGluIHRoZSBcInV0aWxzXCIgZGlyZWN0b3J5XHJcblx0XHR9KSxcclxuXHRdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UyxTQUFTLG9CQUFvQjtBQUMxVSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBRWhCLE9BQU8sU0FBUztBQUNoQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGFBQWE7QUFDcEIsT0FBTywyQkFBMkI7QUFFbEMsT0FBTyxZQUFZO0FBQ25CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLEtBQUs7QUFBQSxJQUNKLFNBQVM7QUFBQSxNQUNSLGdCQUFnQjtBQUFBLElBQ2pCO0FBQUEsRUFDRDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsS0FBSztBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLE1BQU0sT0FBTyxLQUFLO0FBQUEsSUFDN0I7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNkLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDUCxTQUFTO0FBQUEsVUFDUixPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZDtBQUFBLFFBQ0EsZ0JBQWdCLENBQUMsY0FBYztBQUM5QixjQUFJLFVBQVUsU0FBUztBQUN0QixtQkFBTztBQUNSLGlCQUFPO0FBQUEsUUFDUjtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsRUFDZDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osUUFBUTtBQUFBLE1BQ1AsU0FBUyxDQUFDLGFBQWEsWUFBWTtBQUFBLE1BQ25DLFNBQVM7QUFBQTtBQUFBLE1BQ1QsUUFBUTtBQUFBO0FBQUEsTUFDUixVQUFVO0FBQUE7QUFBQSxJQUNYLENBQUM7QUFBQSxJQUNELHNCQUFzQixDQUFDLENBQUM7QUFBQSxJQUN4QixPQUFPO0FBQUEsTUFDTixTQUFTO0FBQUE7QUFBQTtBQUFBLElBRVYsQ0FBQztBQUFBLEVBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

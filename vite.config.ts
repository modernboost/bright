import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    build: {
      outDir: 'src/components/dist', // Specify the output directory for the build
      lib: {
        entry: 'src/components/index.ts',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
  });

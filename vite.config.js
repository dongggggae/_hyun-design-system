import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  css: {
    devSourcemap: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  build: {
    rollupOptions: {
      plugins: [terser()],
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          reactRouter: ['react-router-dom'],
          reactSyntax: ['react-syntax-highlighter'],
        },
      },
    },
    minify: 'esbuild',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

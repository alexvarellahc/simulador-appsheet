import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// Configuração do Vite
export default defineConfig({
  plugins: [preact()],
  base: '/simulador-appsheet/',
  // Adicionar otimizações recomendadas
  build: {
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
  // Melhorar performance em desenvolvimento
  server: {
    open: true,
    port: 3000
  }
});
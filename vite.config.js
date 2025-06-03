import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite
export default defineConfig({
  plugins: [react()], // Garante que o plugin do React está a ser usado
  base: '/simulador-appsheet/', // Base URL para o deployment (útil para GitHub Pages)
  build: {
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    // REMOVIDO: rollupOptions.external para permitir que o Firebase seja bundlado
    // rollupOptions: {
    //   external: [
    //     'firebase/app',
    //     'firebase/auth',
    //     'firebase/firestore',
    //   ],
    // },
  },
  server: {
    open: true,
    port: 3000
  }
});
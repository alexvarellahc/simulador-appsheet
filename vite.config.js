import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Certifique-se de que está a usar o plugin do React

// Configuração do Vite
export default defineConfig({
  plugins: [react()], // Ativa o plugin do React para processar JSX nos seus ficheiros .jsx/.tsx
  base: '/simulador-appsheet/', // Base URL para o deployment (útil para GitHub Pages)
  // Adicionar otimizações recomendadas e resolver problemas de importação do Firebase
  build: {
    minify: 'terser', // Minificação usando Terser para otimização do tamanho
    sourcemap: false, // Desativa sourcemaps para produção (pode ativar para depuração)
    chunkSizeWarningLimit: 1000, // Aumenta o limite de aviso para o tamanho dos chunks
    rollupOptions: {
      external: [
        'firebase/app',
        'firebase/auth',
        'firebase/firestore',
        // Adicione aqui outros módulos do Firebase que possa estar a usar, como:
        // 'firebase/analytics',
        // 'firebase/storage',
        // 'firebase/database',
      ],
    },
  },
  // Melhorar performance em desenvolvimento
  server: {
    open: true, // Abre o navegador automaticamente ao iniciar o servidor de desenvolvimento
    port: 3000 // Define a porta para o servidor de desenvolvimento
  }
});

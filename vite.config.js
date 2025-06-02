import { defineConfig } from 'vite';
import preact from '@preact/preset-vite'; // Importa o plugin do Preact

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()], // Usa o plugin do Preact
  base: '/simulador-appsheet/', // <-- ESSA LINHA É CRÍTICA!
                                // Ela define a base URL para o GitHub Pages.
                                // Deve ser o nome do seu repositório envolto em barras.
});
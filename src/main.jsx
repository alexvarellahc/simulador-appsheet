// Importações de bibliotecas externas
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importações locais
import App from './App.jsx';
import './index.css'; // Estilos globais da aplicação

// Renderização do componente raiz
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
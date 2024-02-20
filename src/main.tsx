import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/services/i18n';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

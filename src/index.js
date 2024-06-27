import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { initDB } from 'react-indexed-db-hook';
import { DBConfig } from './indexedDBConfig';

initDB(DBConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

if ('serviceWorker' in navigator && 'SyncManager' in window) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/serviceWorker.js`).then((registration) => {
          console.log('Registro de ServiceWorker exitoso con el alcance: ', registration.scope);
      }, (error) => {
          console.log('Registro de ServiceWorker fallido: ', error);
      });
  });
}

// Si quieres empezar a medir el rendimiento en tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envía a un endpoint de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();

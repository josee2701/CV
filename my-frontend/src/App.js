import React from 'react';
import './App.css';
import HojaDeVida from './HojaDeVida'; // Importa el componente personalizado




function App() {
  // Datos de la hoja de vida
  const hojaDeVidaData = {
    nombre: 'Tu Nombre',
    profesion: 'Tu Profesión',
    resumen: 'Un resumen breve sobre ti...',
    experiencia: ['Trabajo 1', 'Trabajo 2'],
    educacion: ['Escuela 1', 'Universidad 2'],
  };

  return (
    <div className="App">
      <HojaDeVida {...hojaDeVidaData} /> {/* Renderiza el componente personalizado */}
    </div>
  );
}

export default App;

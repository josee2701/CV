import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Home from './components/Home';
import './App.css';

function App() {
  const [hojaDeVida, setHojaDeVida] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/hoja-de-vida')
      .then((response) => response.json())
      .then((data) => setHojaDeVida(data))
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  if (!hojaDeVida) {
    return <div>Cargando...</div>;
  }

  return (
  <div>
    <Navbar />
    <div className="combined-profile-container">
      <Home />
      <div className="profile-about-section">
        <Profile nombre={hojaDeVida.nombre} />
        <About 
          profesion={hojaDeVida.profesion}
          resumen={hojaDeVida.resumen}
          experiencia={hojaDeVida.experiencia}
          educacion={hojaDeVida.educacion}
        />
      </div>
    </div>
  </div>
);

}

export default App;

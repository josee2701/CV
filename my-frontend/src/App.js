import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import logo from './logo.svg'; // Puedes cambiar esto a la imagen de tu perfil

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
    <div className="container">
      <Navbar />
      <Profile 
        logo={logo}
        nombre={hojaDeVida.nombre} 
      />
      <About 
        profesion={hojaDeVida.profesion}
        resumen={hojaDeVida.resumen}
        experiencia={hojaDeVida.experiencia}
        educacion={hojaDeVida.educacion}
      />
    </div>
  );
}

export default App;

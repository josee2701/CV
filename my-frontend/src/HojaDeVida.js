import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

function HojaDeVida() {
  const [hojaDeVida, setHojaDeVida] = useState(null);
  

  useEffect(() => {
    // Realiza la solicitud a la API de Flask cuando el componente se monta
    fetch('http://localhost:5000/api/hoja-de-vida') // Reemplaza con la URL correcta de tu backend
      .then((response) => response.json())
      .then((data) => setHojaDeVida(data))
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []); // El segundo argumento del useEffect asegura que esta solicitud se realice solo una vez al montar el componente

  if (!hojaDeVida) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="hoja-de-vida">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{hojaDeVida.nombre}</h2>
      <p>{hojaDeVida.profesion}</p>
      <p>{hojaDeVida.resumen}</p>
      <ul>
        {hojaDeVida.experiencia.map((trabajo, index) => (
          <li key={index}>{trabajo}</li>
        ))}
      </ul>
      <ul>
        {hojaDeVida.educacion.map((escuela, index) => (
          <li key={index}>{escuela}</li>
        ))}
      </ul>
    </div>
  );
}

export default HojaDeVida;

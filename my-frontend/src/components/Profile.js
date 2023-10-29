import React, { useState, useEffect } from 'react';  // <-- Importa los hooks
import '../assets/css/Profile.css';

function ProfileTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);  // Usa directamente useState
  const titles = ["Desarrollador Backend", "Python", "Django", "MongoDB", "Docker", "Kubernetes"];

  useEffect(() => {  // Usa directamente useEffect
      const timer = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 3000); // Cambia cada 3 segundos

      return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
  }, [currentIndex]);

  return <h3 className="profile-title">{titles[currentIndex]}</h3>;
}

function Profile(props) {
  return (
      <div className="profile-container">
          <div className="info-container">
              <h1 className="profile-name">Jose Fernando Campos S.</h1>
              <ProfileTitle /> 
              <p className="profile-description">Ingeniero de sistemas especializado en Python y Django con enfoque en desarrollo backend. Aprendo rápido y me adapto a desafíos, habiendo participado activamente en proyectos con Django. Valoro la colaboración, comunicación clara y el aprendizaje constante de errores.</p>
          </div>
      </div>
  );
}

export default Profile;

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
      <div className="section started" id="section-started">
        <div className="centrize full-width">
          <div className="vertical-center">
            <h1 className="h-title">
              Jose  Fernando<br/> Campos S.
            </h1>
            <div className="started-content">
              <div className="h-subtitles">
                <div className="h-subtitle typing-subtitle">
               <ProfileTitle/>
                </div>
              </div>
  
              <div className="h-text">
              Ingeniero de Sistemas Especializado en Desarrollo Backend, enfocado en Python. Destaco por mi rápido aprendizaje y la actualización constante en tendencias y tecnologías. Listo para soluciones tecnológicas innovadoras.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Profile;

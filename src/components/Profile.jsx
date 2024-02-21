import React, { useEffect, useState } from 'react';
import '../assets/css/General.css';
import '../assets/css/Profile.css';

function ProfileTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Desarrollador Backend", "Python", "Django", "MongoDB", "Docker", "Kubernetes"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return <h3 className="lenguajes">{titles[currentIndex]}</h3>;
}

const Profile = React.memo(function Profile() {
  return (
    <div className="profile-section" id="perfil">
      <div className="main-container"> {/* Renombrado de `content-center` a `main-container` */}
          <h1 className="profile-title">
            Jose Fernando<br /> Campos S.
          </h1>
          <div className="profile-content">
            <div className="subtitle-container">
              <ProfileTitle />
            </div>
            <p className="profile-description">
              Ingeniero de Sistemas Especializado en Desarrollo Backend, enfocado en Python. Destaco por mi rápido aprendizaje y la actualización constante en tendencias y tecnologías. Listo para soluciones tecnológicas innovadoras.
            </p>
          </div>
        </div>
    </div>
  );
});

export default Profile;

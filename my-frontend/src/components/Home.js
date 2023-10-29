import React from 'react';  // <-- Importa los hooks
import '../assets/css/Home.css';
import profileImage from '../assets/Gallery/Perfil.png';  // Importa la imagen


function Home(props) {
  return (
      <div className="profile-container">
          <div className="image-container">
            <img src={profileImage} className="profile-image" alt="Profile"/>  {/* Utiliza la imagen importada */}
          </div>
      </div>
  );
}

export default Home;

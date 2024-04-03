import React from 'react';
import profileImage from '../assets/Gallery/Perfil.png';
import '../assets/css/Home.css';

function Home(props) {
  return (
    // Asegúrate de que el id "home" aquí coincida con el href="#home" en tu Navbar
    <div id="home" className="home-section">
      <div className="profile-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
        {/* Otros elementos de tu sección Home... */}
      </div>
    </div>
  );
}

export default Home;

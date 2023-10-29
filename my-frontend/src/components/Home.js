import React from 'react';
import '../assets/css/Home.css';
import profileImage from '../assets/Gallery/Perfil.png';

const profileContainerStyle = {
  position: 'fixed',
};

function Home(props) {
  return (
    <div className="background-bg">
      <div style={profileContainerStyle} className="background-filter circle">
        <div className="background-img" style={{ backgroundImage: `url(${profileImage})` }}></div>
      </div>
    </div>
  );
}

export default Home;

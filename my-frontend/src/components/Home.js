import React from 'react';
import profileImage from '../assets/Gallery/Perfil.png';
import '../assets/css/Home.css';

function Home(props) {
  return (
    <div className="background-bg">
      <div className="profileContainer background-filter circle">
        <div className="background-img" style={{ backgroundImage: `url(${profileImage})` }}></div>
      </div>
    </div>
  );
}


export default Home;

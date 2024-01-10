import React from 'react';
import '../assets/css/Home.css';

function Home(props) {
  return (
    <div className="background-bg">
      <div className="profileContainer background-filter circle">
        <div className="background-img" style={{ backgroundImage: 'url("Perfil.png")' }}></div>
      </div>
    </div>
  );
}


export default Home;

import React from 'react';
// import '../assets/css/Profile.css';

function Profile(props) {
  return (
      <div className="container">
          <div className="image-container">
            <img src={props.logo} className="App-logo" alt="Profile"/>
          </div>
          <div className="info-container">
              <h1>{props.nombre}</h1>
          </div>
      </div>
  );
}


export default Profile;

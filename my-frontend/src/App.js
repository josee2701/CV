import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Home from './components/Home';
import './App.css';

function App() {

  return (
  <div>
    <Navbar />
    <div className="combined-profile-container">
      <Home />
      <div className="profile-about-section">
        <Profile />
        <About/>
      </div>
    </div>
  </div>
);

}

export default App;

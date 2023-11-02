import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
// import Todo from './components/todo';

function App() {
  return (
    <div>
      <Navbar />
      <div className="combined-profile-container">
        <Home />
        <div className="profile-about-section">
            <Profile />
            <About />
            <About />
            <About />
            <About />
          </div>
        </div>
      </div>
  );
}

export default App;

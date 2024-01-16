import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Resume from './components/Resume';
// import Todo from './components/todo';

function App() {
  return (
    <div>
      <Navbar />
      <div className="combined-profile-container">
        <Home />
      </div>
      <div className="profile-section">
        <Profile />
        <About />
        <Resume />
      </div>
    </div>
  );
}

export default App;

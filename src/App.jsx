import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Profile />
      <About />
      {/* <Resume /> */}
    </div>
  );
}

export default App;

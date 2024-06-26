import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Profile />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

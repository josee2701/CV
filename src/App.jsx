import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Importar Routes y Route
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
      <Navbar /> {/* Este componente siempre se mostrará */}
      <Routes>
        {/* Aquí estamos agrupando los componentes Home, Profile y About en la misma ruta */}
        <Route 
          path="CV/" 
          element={
            <>
              <Home />
              <Profile />
              <About />
            </>
          } 
        />
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

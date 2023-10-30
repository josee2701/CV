import React, { useState, useEffect } from 'react';
import logo from '../assets/Gallery/Logo_personal.png';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/Navbar.css';




function Navbar() {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [isDownloadButtonHovered, setDownloadButtonHovered] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav style={navbarStyle}>
            <div className="logo">
                <a href="#">
                    <img className="logo-img" src={logo} alt="Logo" />
                    <span className="logo-lnk">Jose <br/>Campos</span>
                </a>
            </div>
            {/* <div style={logoContainer}>
                <img src={logo} alt="Logo" style={logoStyle} />
                <h3 style={titleStyle}>Jose <br//> Campos</h3>
            </div> */}
            <div style={buttonContainer}>
                <button 
                    style={hoveredButton === 'HOME' ? {...buttonStyle, color: 'red', transform: 'translateY(-5px)'} : buttonStyle} 
                    onMouseEnter={() => setHoveredButton('HOME')} 
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    HOME
                </button>
                <button 
                    style={hoveredButton === 'ABOUT' ? {...buttonStyle, color: 'red', transform: 'translateY(-5px)'} : buttonStyle} 
                    onMouseEnter={() => setHoveredButton('ABOUT')} 
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    ABOUT
                </button>
                <button 
                    style={hoveredButton === 'RESUME' ? {...buttonStyle, color: 'red', transform: 'translateY(-5px)'} : buttonStyle} 
                    onMouseEnter={() => setHoveredButton('RESUME')} 
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    RESUME
                </button>
                <button 
                    style={hoveredButton === 'PORTFOLIO' ? {...buttonStyle, color: 'red', transform: 'translateY(-5px)'} : buttonStyle} 
                    onMouseEnter={() => setHoveredButton('PORTFOLIO')} 
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    PORTFOLIO
                </button>
                <button 
                    style={hoveredButton === 'CONTACT' ? {...buttonStyle, color: 'red', transform: 'translateY(-5px)'} : buttonStyle} 
                    onMouseEnter={() => setHoveredButton('CONTACT')} 
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    CONTACT
                </button>
                <button 
                    style={isDownloadButtonHovered ? {...downloadButtonStyle, backgroundColor: '#777'} : downloadButtonStyle} 
                    onMouseEnter={() => setDownloadButtonHovered(true)} 
                    onMouseLeave={() => setDownloadButtonHovered(false)}
                >
                    DOWNLOAD CV <i className="fa fa-download"></i>
                </button>
            </div>
            
        </nav>
        
    );
}

// ... (resto del código sin cambios)


const navbarStyle = {
    padding: "0 10px 9px 50px", // Reducir el valor del padding en el lado izquierdo
    position: "fixed",
    left: "50px",
    right: "50px",
    top: "40px",
    height: "80px",
    zIndex: 100,
    background: "#333",
    borderRadius: "80px",
    MozBorderRadius: "80px",
    WebkitBorderRadius: "80px",
    KhtmlBorderRadius: "80px",
    transition: "all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1)",
    MozTransition: "all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1)",
    WebkitTransition: "all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1)",
    OTransition: "all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1)",
  };
  
  
  
  const buttonContainer = {
    display: 'flex',
    gap: '15px',
    position: "relative",
    float: "left",
    width: "200px",
    height: "80px",
    left: "350px",
  };
  
  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '5px 10px',
    fontWeight: 'bold',
    transition: 'color 0.3s, transform 0.3s',
    transform: 'translateY(0)',
    '&:hover': {
      transform: 'translateY(-5px)'
    }
  };
  
  const downloadButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#555',
    border: '1px solid #fff',
    borderRadius: '20px',
    padding: '8px 25px',
    transition: 'background-color 0.3s',
    float: 'right', // Agregado: utiliza comas en lugar de punto y coma
    marginTop: '8px', // Agregado: cambia margen superior a minúsculas
    marginRight: '8px', // Agregado: cambia margen derecho a minúsculas
    borderColor: '#fff',
    transform: 'translateY(0)',
    WebkitTransform: 'translateY(0)',
    MozTransform: 'translateY(0)',
    OTransform: 'translateY(0)',
  };
  
const navbarMobileStyle = {
    ...navbarStyle,
    flexDirection: 'column',
    padding: '10px',
};

// eslint-disable-next-line no-unused-vars
const buttonContainerMobile = {
    ...buttonContainer,
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px'
};

export default Navbar;

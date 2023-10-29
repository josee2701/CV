import React, { useState, useEffect } from 'react';
import logo from '../assets/Gallery/Logo_personal.png';
import 'font-awesome/css/font-awesome.min.css';



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
            <div style={logoContainer}>
                <img src={logo} alt="Logo" style={logoStyle} />
                <h3 style={titleStyle}>Jose <br/> Campos</h3>
            </div>
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
    backgroundColor: '#333',
    color: '#fff',
    width: '90%',
    padding: '20px 20px', // Aumentado de 10px 20px a 20px 20px
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '25px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
    margin: '20px auto',
    position: 'fixed', // Agregado
    top: 0, // Agregado
    left: 0, // Agregado
    right: 0, // Agregado
    zIndex: 1000 // Agregado
};


const logoContainer = {
    display: 'flex',
    alignItems: 'center'
};

const logoStyle = {
    width: '70px', // Aumentado de 30px a 50px
    height: '70px', // Aumentado de 30px a 50px
    marginRight: '10px'
};


const titleStyle = {
    margin: 0,
    color: '#fff',
    fontSize: '24px',
};

const buttonContainer = {
    display: 'flex',
    gap: '15px'
};


const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '5px 10px',
    fontWeight: 'bold',
    transition: 'color 0.3s, transform 0.3s',  // Agregamos transición para el color y transformación.
    transform: 'translateY(0)',  // Posición original.
    '&:hover': {  // Esto es una pseudo-clase, si estás usando CSS en JS. Si no, podrías agregarlo en un archivo CSS separado.
        transform: 'translateY(-5px)'  // Desplaza el botón 5px hacia arriba.
    }
};


const downloadButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#555',
    border: '1px solid #fff',
    borderRadius: '20px',
    padding: '8px 25px',
    transition: 'background-color 0.3s'
};
// eslint-disable-next-line no-unused-vars
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

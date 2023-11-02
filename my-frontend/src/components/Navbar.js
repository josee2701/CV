import 'font-awesome/css/font-awesome.min.css';
import React, { useEffect, useState } from 'react';
import logo from '../assets/Gallery/Logo_personal.png';
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
        <nav >
            <div className='header'>
                <div className="logo">
                    <a href="#">
                        <img className="logo-img" src={logo} alt="Logo" />
                        <span className="logo-lnk">Jose <br />Campos</span>
                    </a>
                </div>
                <div className='top-menu' >
                    <div className="menu">
                        <a href="#section-started">
                            <button
                                style={
                                    hoveredButton === 'HOME'
                                        ? { ...buttonStyle, color: 'red', transform: 'translateY(-5px)' }
                                        : buttonStyle
                                }
                                onMouseEnter={() => setHoveredButton('HOME')}
                                onMouseLeave={() => setHoveredButton(null)}
                            >
                                HOME
                            </button>
                        </a>
                        <a href="#section-about">
                            <button
                                style={
                                    hoveredButton === 'ABOUT'
                                        ? { ...buttonStyle, color: 'red', transform: 'translateY(-5px)' }
                                        : buttonStyle
                                }
                                onMouseEnter={() => setHoveredButton('ABOUT')}
                                onMouseLeave={() => setHoveredButton(null)}
                            >
                                ABOUT
                            </button>
                        </a>
                        {/* <a href="#section-resumen">
                        <button
                            style={hoveredButton === 'RESUME' ? { ...buttonStyle, color: 'red', transform: 'translateY(-5px)' } : buttonStyle}
                            onMouseEnter={() => setHoveredButton('RESUME')}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            RESUME
                        </button>
                    </a>
                    <a href="#section-portafolio">

                        <button
                            style={hoveredButton === 'PORTFOLIO' ? { ...buttonStyle, color: 'red', transform: 'translateY(-5px)' } : buttonStyle}
                            onMouseEnter={() => setHoveredButton('PORTFOLIO')}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            PORTFOLIO
                        </button>
                    </a>
                    <a href="#section-contacto">

                        <button

                            style={hoveredButton === 'CONTACT' ? { ...buttonStyle, color: 'red', transform: 'translateY(-5px)' } : buttonStyle}
                            onMouseEnter={() => setHoveredButton('CONTACT')}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            CONTACT
                        </button>
                    </a>
                    <button
                        style={isDownloadButtonHovered ? { ...downloadButtonStyle, backgroundColor: '#777' } : downloadButtonStyle}
                        onMouseEnter={() => setDownloadButtonHovered(true)}
                        onMouseLeave={() => setDownloadButtonHovered(false)}
                    >
                        DOWNLOAD CV <i className="fa fa-download"></i>
                    </button> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}


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
    float: 'right',
    marginBlockStart: '8px', // Cambiar de "margininset-block-start" a "marginBlockStart"
    marginInlineEnd: '8px', // Cambiar de "margininset-inline-end" a "marginInlineEnd"
    borderColor: '#fff',
    transform: 'translateY(0)',
    WebkitTransform: 'translateY(0)',
    MozTransform: 'translateY(0)',
    OTransform: 'translateY(0)',
};

const navbarMobileStyle = {
    flexDirection: 'column',
    padding: '10px',
    display: 'flex',
};


export default Navbar;

import 'font-awesome/css/font-awesome.min.css';
import React, { useEffect, useState } from 'react';
import logo from '../assets/Gallery/Logo_personal.png';
import '../assets/css/Navbar.css';

function Navbar() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showMenu, setShowMenu] = useState(false); // Nuevo estado para manejar la visibilidad del menú


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const toggleMenu = () => {
        setShowMenu(!showMenu); // Cambia el estado de visibilidad del menú
    };


    return (
        <nav >
            <div className={showMenu ? 'header show-menu' : 'header'}>
                <div className="logo-container"> {/* Asegúrate de que tanto el logo como el texto estén dentro de este contenedor */}
                    <a href="#" className="logo">
                        <img className="logo-img" src={logo} alt="Logo" />
                    </a>
                    <span className="logo-lnk">Jose Campos</span>
                </div>

                <div className="menu-btn" onClick={toggleMenu}>
                    <i className="fa fa-bars"></i> {/* Icono del menú, puede ser diferente */}
                </div>
                <div className='top-menu'>
                    <div className="menu">
                        <a href="#section-started" className="nav-link">
                            <button className="nav-button">
                                INICIO
                            </button>
                        </a>
                        <a href="#section-about" className="nav-link">
                            <button className="nav-button">
                                INFO
                            </button>
                        </a>
                        <a href="#section-resumen" className="nav-link">
                            <button className="nav-button">
                                RESUME
                            </button>
                        </a>
                        {/* ... otros botones ... */}
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;
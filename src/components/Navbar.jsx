import React, { useEffect, useState } from 'react';
import logo from '../assets/Gallery/Logo_personal.png';
import '../assets/css/Navbar.css';
// Importa font-awesome si es necesario para iconos adicionales
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <nav>
            <div className={showMenu ? 'header show-menu' : 'header'}>
                <div className="logo-container">
                    <a href="/" className="logo">
                        <img src={logo} alt="Logo" className="logo-img"/>
                        <span className="logo-lnk">Jose Campos</span>
                    </a>
                </div>
                <div className="menu-btn" onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
                </div>
                {isMobile && showMenu && (
                    <div className='top-menu'>
                        <Navigation />
                    </div>
                )}
                {!isMobile && (
                    <div className='top-menu'>
                        <Navigation />
                    </div>
                )}
            </div>
        </nav>
    );
}

function NavLink({ to, children, download, href }) {
    if (download) {
        return (
            <a href={href} download className="nav-link">
                <button className="nav-button download-btn">{children}</button> {/* Añadir clase download-btn */}
            </a>
        );
    }
    return (
        <a href={to} className="nav-link">
            <button className="nav-button">{children}</button>
        </a>
    );
}


function Navigation() {
    return (
        <div className="menu">
            <NavLink to="#perfil">INICIO</NavLink>
            <NavLink to="#about">INFO</NavLink>
            <NavLink to="#resume">RESUME</NavLink>
            <NavLink to="#contact">CONTACTO</NavLink>
            <NavLink href="/files/currículum.pdf" download>DESCARGAR</NavLink> {/* Nuevo botón de descarga */}
        </div>
    );
}

export default Navbar;

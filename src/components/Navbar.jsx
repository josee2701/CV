import 'font-awesome/css/font-awesome.min.css';
import React, { useEffect, useState } from 'react';
import logo from '../assets/Gallery/Logo_personal.png';
import '../assets/css/Navbar.css';

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
                    <a href="/" className="logo"> {/* Cambia el <a> por <Link> para la navegación principal */}
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

function NavLink({ to, children }) {
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
            {/* ... otros enlaces ... */}
        </div>
    );
}

export default Navbar;

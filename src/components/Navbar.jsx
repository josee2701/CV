import 'font-awesome/css/font-awesome.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import logo from '../assets/Gallery/logo192.png';
import '../assets/css/Navbar.css';

function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showMenu, setShowMenu] = useState(false);
    const [showFileSelect, setShowFileSelect] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setShowMenu(!showMenu);
    const handleDownloadClick = () => setShowFileSelect(!showFileSelect);

    return (
        <nav>
            <div className={showMenu ? 'header show-menu' : 'header'}>
                <div className="logo-container">
                    <Link to="/" className="logo">
                        <img src={logo} alt="Logo" className="logo-img" />
                        <span className="logo-lnk">Jose Campos</span>
                    </Link>
                </div>
                <div className="menu-btn" onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
                </div>
                {isMobile && showMenu && (
                    <div className='top-menu'>
                        <Navigation 
                            handleDownloadClick={handleDownloadClick} 
                            showFileSelect={showFileSelect}
                        />
                    </div>
                )}
                {!isMobile && (
                    <div className='top-menu'>
                        <Navigation 
                            handleDownloadClick={handleDownloadClick} 
                            showFileSelect={showFileSelect}
                        />
                    </div>
                )}
            </div>
        </nav>
    );
}

function Navigation({ handleDownloadClick, showFileSelect }) {
    // Definir handleFileSelection dentro del componente Navigation
    const handleFileSelection = (event) => {
        const fileUrl = event.target.value;
        if (fileUrl) {
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = fileUrl.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="menu">
            <NavLink to="/">INICIO</NavLink>
            <NavLink to="/resume">RESUME</NavLink>
            <NavLink to="/contact">CONTACTO</NavLink>
            <button className="nav-button download-btn" onClick={handleDownloadClick}>
                DESCARGAR
            </button>
            {showFileSelect && (
                <div className="file-select-container">
                    <select id="fileSelect" onChange={handleFileSelection} defaultValue="">
                        <option value="">Seleccionar archivo</option>
                        <option value="/CV/files/Cv-English-.pdf">CV Inglés</option>
                        <option value="/CV/files/Cv-Español-.pdf">CV Español</option>
                    </select>
                </div>
            )}
        </div>
    );
}

function NavLink({ to, children }) {
    return (
        <Link to={to} className="nav-link">
            <button className="nav-button">{children}</button>
        </Link>
    );
}

export default Navbar;

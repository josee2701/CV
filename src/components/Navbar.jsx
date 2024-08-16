import React, { useEffect, useState } from 'react';
import logo from '../assets/Gallery/Logo_personal.png';
import '../assets/css/Navbar.css';
// Importa font-awesome si es necesario para iconos adicionales
import 'font-awesome/css/font-awesome.min.css';

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
    const handleFileSelection = (event) => {
        const fileUrl = event.target.value;
        if (fileUrl) {
            // Crea un enlace temporal para descargar el archivo
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = fileUrl.split('/').pop(); // Usa el nombre del archivo desde la URL
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="menu">
            <NavLink to="#perfil">INICIO</NavLink>
            <NavLink to="#about">INFO</NavLink>
            <NavLink to="#resume">RESUME</NavLink>
            <NavLink to="#contact">CONTACTO</NavLink>
            {/* Botón DESCARGAR que muestra el select cuando se hace clic */}
            <button className="nav-button download-btn" onClick={handleDownloadClick}>
                DESCARGAR
            </button>

            {/* Mostrar el select solo si el botón DESCARGAR fue presionado */}
            {showFileSelect && (
                <div className="file-select-container">
                    <select id="fileSelect" onChange={handleFileSelection} defaultValue="">
                        <option value="">Seleccionar archivo</option>
                        <option value="/CV/files/Cv-English-.pdf">CV Ingeles</option>
                        <option value="/CV/files/Cv-Español-.pdf">CV Español</option>
                    </select>
                </div>
            )}
        </div>
    );
}

function NavLink({ to, children }) {
    return (
        <a href={to} className="nav-link">
            <button className="nav-button">{children}</button>
        </a>
    );
}

export default Navbar;

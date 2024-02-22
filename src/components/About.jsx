import { faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../assets/css/About.css';
import '../assets/css/General.css';

function About() {
  return (
    <div className="profile-section" id="about"> {/* Combina estilos de Profile y About */}
      <div className="main-container centrize"> {/* Utiliza ambas clases para aplicar estilos */}
        <h1 className="title">Informacion Personal</h1> {/* Usa clases para títulos */}
        <div className="subtitle-container">
              Mi historia
            </div>
        <div className="profile-content h-text">
        <p>
           Soy Jose Fernando Campos Sanchez, un ingeniero de sistemas colombiano de Bogotá, apasionado por el desarrollo backend con Python y Django. Con más de un año de experiencia, me destaco por enfrentar desafíos complejos, como la implementación exitosa de un módulo de usuarios en Django.
           </p>
          <p>
           Fuera del trabajo, disfruto explorando nuevos lugares, sintiendo la adrenalina en motocicletas y viviendo el hoy sin arrepentimientos. Mi filosofía de vida se resume en "el pasado es historia, el futuro un misterio y el hoy es un obsequio".
           </p>
           <p>
           Mis metas incluyen completar mi carrera, trabajar con líderes tecnológicos y eventualmente establecer mi propia empresa para proporcionar lo mejor a mi familia. Ellos son mi mayor motivación.
           </p>
        </div>

        <ul className="info-list">
        <li><strong>Celular: </strong> +57 312 32 68867</li>
           <li><strong>Correo: </strong> j.camposs2701@gmail.com</li>
           <li><strong>Github: </strong> <a href="https://github.com/josee2701" target="_blank" rel="noopener noreferrer">josee2701</a></li>
           <li><strong>LinkedIn: </strong> <a href="https://www.linkedin.com/in/josee-py" target="_blank" rel="noopener noreferrer">/josee-py/</a></li>
        </ul>
        <div className="titles">
//           <div className="title">Services</div>
//         </div>
<div className="service-items">
          <div className="service-col">
            <div className="icon">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <div className="name">Desarrollo Web</div>
            <p>Economics is a social science...</p>
          </div>

          <div className="service-col">
            <div className="icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="name">Desarrollo Backend</div>
            <p>Advertising Management though is a complex process...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


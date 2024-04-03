import { faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../assets/css/About.css';
import '../assets/css/General.css';

function About() {
  return (
    <div className="profile-section" id="about"> {/* Combina estilos de Profile y About */}
      <div className="main-container centrize"> {/* Utiliza ambas clases para aplicar estilos */}
      <h1 className="title title-right-shift">Información Personal</h1>

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

          <ul className="info-list">
            <li><strong>Edad: </strong> 24</li>
            <li><strong>Freelance: </strong> Disponible</li>
            <li><strong>Celular: </strong> +57 312 32 68867</li>
            <li><strong>Ubicación: </strong> Bogotá, Colombia</li>
            <li><strong>Correo: </strong> j.camposs2701@gmail.com</li>
          </ul>
        </div>
        <div className="title title-right">Servicios</div>
        <div className="subtitle-container2">
          Campos de trabajo
        </div>
        <div className="service-items">
          <div className="service-col">
            <div className="icon">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <div className="name">Desarrollo Web</div>
            <p>Impulsa tu presencia en línea con soluciones web a medida. Especializado en JavaScript y React, ofrezco desarrollo web desde cero, asegurando que cada proyecto no solo cumpla con las expectativas sino que las supere. Mi enfoque se centra en la experiencia del usuario, garantizando sitios intuitivos, responsivos y de alto rendimiento. Estoy aquí para transformar tus ideas en una realidad digital impactante..</p>
          </div>

          <div className="service-col">
            <div className="icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="name">Desarrollo Backend</div>
            <p>Backend robusto para aplicaciones potentes. Con sólidas bases en Python y Django, me especializo en el desarrollo backend, proporcionando soluciones seguras, escalables y eficientes. Desde la gestión de bases de datos hasta la integración de APIs, mi objetivo es asegurar que tu infraestructura backend sea sólida, fiable y preparada para el futuro. Si buscas soporte experto para fortalecer el corazón tecnológico de tus proyectos, cuenta conmigo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


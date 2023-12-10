import React from 'react';
import '../assets/css/About.css';

function About(props) {
    return (
        <div className="section about" id="section-about">
            <div className="centrize full-width">
                <div className="titles">
                    <div className="title">About Me</div>
                    <div className="subtitle">My Story</div>
                </div>

                <div className="h-text">
                        <div className="single-post-text">
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
                </div>

                <div className="info-list">
                    <ul>
                        <li><strong>Phone: </strong> +57 312 32 68867</li>
                        <li><strong>E-mail: </strong> j.camposs2701@gmail.com</li>
                        <li><strong>Github: </strong> <a href="https://github.com/josee2701" target="_blank" rel="noopener noreferrer">https://github.com/josee2701</a></li>
    </ul>
                </div>

                <div className="clear"></div>
            </div>
        </div>
    );
}

export default About;

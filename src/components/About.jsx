import React from 'react';
import '../assets/css/About.css';
import '../assets/css/General.css';

function About(props) {
    return (
        <div className="section about" id="section-about">
            <div className="centrize full-width">
                <div className="titles">
                    <div className="title">Informacion Personal</div>
                    <div className="subtitle">Mi historia</div>
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
                        <li><strong>Celular: </strong> +57 312 32 68867</li>
                        <li><strong>Correo: </strong> j.camposs2701@gmail.com</li>
                        <li><strong>Github: </strong> <a href="https://github.com/josee2701" target="_blank" rel="noopener noreferrer">https://github.com/josee2701</a></li>
                        <li><strong>Github: </strong> <a href="https://www.linkedin.com/in/josee-py" target="_blank" rel="noopener noreferrer">/josee-py/</a></li>
                    </ul>
                </div>

                <div className="content">
                    <div className="titles">
                        <div className="title">Services</div>
                    </div>

                    <div className="service-items">
                        <div className="service-col">
                            <div className="service-item">
                                <div className="icon"><i className="fa-solid fa-laptop-code"></i></div>
                                <div className="name">Desarrollo Web</div>
                                <div className="single-post-text">
                                    <p>
                                        Economics is a social science concerned with the production, consumption of goods and services.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="service-col">
                            <div className="service-item">
                                <div className="icon"><i className="fa-solid fa-code" ></i></div>
                                <div className="name">Desarrollo Backend</div>
                                <div className="single-post-text">
                                    <p>
                                        Advertising Management though is a complex process of employing various media to sell a product or service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    );
}

export default About;

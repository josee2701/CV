import React from 'react';
import '../assets/css/Resume.css';
import '../assets/css/General.css';

function About(props) {
    return (
        <div className="section resume" id="section-resumen">
            <div className="centrize full-width">

                <div className="titles">
                    <div className="title">Experiencia</div>
                    <div className="subtitles">Trabajos</div>
                </div>


                <div className="owl-item active">
                    <div className="item">
                        <div className="resume-item active">
                            <div className="date">Presente</div>
                            <div className="name">Desarollador <br />Full Stack</div>
                            <div className="single-post-text">
                                <p>
                                    Diseñar y desarrollar componentes y características de software utilizando lenguajes y herramientas apropiados, con un enfoque en la mejora continua de la infraestructura.
                                    <br /><br />- Realizar pruebas exhaustivas y depuración de código para garantizar el rendimiento y la confiabilidad del software antes de su implementación.
                                    <br /><br />- Documentar el código y las características del software para facilitar el mantenimiento y la actualización, contribuyendo al desarrollo de documentación detallada sobre la infraestructura.
                                    <br /><br />- Dirigir las implementaciones en producción utilizando tecnologías avanzadas como Kubernetes y Docker, asegurando una transición fluida y eficiente de las nuevas versiones del software.
                                    <br /><br />- Participar activamente en reuniones y discusiones técnicas con el equipo de desarrollo, compartiendo ideas y soluciones para la optimización del proceso de implementación y la infraestructura.
                                    <br /><br />- Continuar mi formación y desarrollo profesional, manteniéndome actualizado en las últimas tendencias y tecnologías en el campo del desarrollo de software.
                                    <br />Mi enfoque en la gestión del proceso de implementación y la mejora de la infraestructura garantiza la entrega exitosa de soluciones de software de alta calidad y un rendimiento óptimo en producción.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="owl-item active">
                    <div className="item">
                        <div className="resume-item">
                            <div className="date">2016-2018</div>
                            <div className="name">Red <br />Drifting</div>
                            <div className="single-post-text">
                                <p>
                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-item">
                    <div className="item">
                        <div className="resume-item">
                            <div className="date">2014-2016</div>
                            <div className="name">World <br />Economy</div>
                            <div className="single-post-text">
                                <p>
                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-item">
                    <div className="item">
                        <div className="resume-item">
                            <div className="date">2012-2014</div>
                            <div className="name">Art Director <br />Facebook</div>
                            <div className="single-post-text">
                                <p>
                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* <div className="owl-nav disabled">
                    <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button>
                    <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
                </div>
                <div className="owl-dots disabled"></div> */}
            </div>

            {/* <div className="navs">
                <span className="prev fas fa-chevron-left"></span>
                <span className="next fas fa-chevron-right"></span>
            </div> */}

        </div>

    );
}

export default About;

import React from 'react';
import '../assets/css/General.css';
import '../assets/css/Resume.css';

function About(props) {
    return (
        <div className="profile-section" id="resume">
            <div className="centrize main-container">

                <div className="title title-right-shift">Experiencia</div>
                <div className="subtitle-container">Trabajos</div>

                <div className="service-items">
                    <div className="service-col">
                        <div className='service'>
                            <div className="date">Nov 2022-actualidad</div>
                            <div className="name">Desarrollo Full Satck</div>
                        </div>

                        <p> Experiencia como desarrollador full-stack, me especializo en Python y Django para el desarrollo de proyectos, incluyendo la creación de APIs personalizadas que interactúan eficazmente con React, asegurando soluciones integrales y dinámicas para las necesidades del negocio.</p>
                    </div>

                    <div className="service-col">
                        <div className='service'>

                            <div className="date">Sep 2020- Nov 2022</div>

                            <div className="name">Gestor de clientes</div>
                        </div>
                        <p> Mi rol implicaba dialogar directamente para identificar y comprender sus necesidades o problemas, con el objetivo de encontrar soluciones consensuadas. Destacaba en explicar detalladamente soluciones o información necesaria, asegurando una comprensión clara de sus inquietudes y fortaleciendo la relación cliente-empresa.</p>
                    </div>
                </div>
                <div className="title title-right-shift">Educación</div>
                <div className="subtitle-container">Estudios</div>
                <div className="service-items" >
                    <div className="service-col" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div className='service'>
                            <div className="date">Febrero 2019-actualidad</div>
                            <div className="name">Ingeniero de Sistemas</div>
                        </div>
                        <p> Estudiante de último año en Ingeniería de Sistemas con experiencia en metodologías ágiles y ciberseguridad. Me especializo en desarrollo de software, utilizando Python, Django, Docker, Kubernetes, HTML, CSS, JS y React. Mi objetivo es continuar aprendiendo e innovando en tecnología</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

import React from 'react';

function About(props) {
    return (
        <div className="about">
            <p><strong>Profesión:</strong> {props.profesion}</p>
            <p><strong>Resumen:</strong> {props.resumen}</p>
            <h3>Experiencia</h3>
            <ul>
                {props.experiencia.map((trabajo, index) => (
                    <li key={index}>{trabajo}</li>
                ))}
            </ul>
            <h3>Educación</h3>
            <ul>
                {props.educacion.map((escuela, index) => (
                    <li key={index}>{escuela}</li>
                ))}
            </ul>
        </div>
    );
}

export default About;

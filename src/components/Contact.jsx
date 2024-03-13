import React, { useState } from 'react';
import '../assets/css/General.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí manejarías el envío del formulario, por ejemplo, enviándolo a un servidor
        console.log(formData);
    };

    return (
        <div className="profile-section" id="contact">
            <h1 className="profile-title" >Contact</h1>
            <p>LET'S TALK</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">FULL NAME *</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">EMAIL ADDRESS *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">MESSAGE *</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">SEND MESSAGE</button>
            </form>
            
            <div className="contact-info">
                <h3>Jose Campos</h3>
                <p>Ingeniero de sistemas</p>
                <ul className="info-list">
            <li><strong>Edad: </strong> 24</li>
            <li><strong>Freelance: </strong> Disponible</li>
            <li><strong>Celular: </strong> +57 312 32 68867</li>
            <li><strong>Ubicación: </strong> Bogotá, Colombia</li>
            <li><strong>Correo: </strong> j.camposs2701@gmail.com</li>
          </ul>
            </div>
        </div>
    );
};

export default ContactSection;

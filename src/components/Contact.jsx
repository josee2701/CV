import React, { useState } from 'react';
import '../assets/css/Contact.css';
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
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="First Name*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone*" />
        </div>
				<div class="my-4">
					<textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div class="my-2 w-1/2 lg:w-1/4">
					<button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
            Send Message
          </button>
				</div>
            </form>
            
            <div className="contact-info">
                <h3>Jose Campos</h3>
                <p>Ingeniero de sistemas</p>
                <ul className="info-list">
            <li><strong>Edad: </strong> 23</li>
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

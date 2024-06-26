import React, { useState } from 'react';
import Confetti from 'react-confetti';
import '../assets/css/Contact.css';
import '../assets/css/General.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        apellido: '',
        email: '',
        phone: '',
        message: '',
    });

    const [showModal, setShowModal] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
        setShowConfetti(true);
        setTimeout(() => {
            setShowModal(false);
            setShowConfetti(false);
        }, 3000);
        setFormData({
            name: '',
            apellido: '',
            email: '',
            phone: '',
            message: '',
        });

        // Enviar la solicitud al backend
        navigator.serviceWorker.ready.then((registration) => {
            registration.active.postMessage({
                url: 'https://backend-yw41.onrender.com/from_contact/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        });
    };

    return (
        <div className="profile-section" id="contact">
            {showConfetti && <Confetti />}
            <div className="centrize main-container">
                <div className="title title-right-shift" style={{ marginLeft: '0px' }}>Contact</div>
                <div className="subtitle-container">LET'S TALK</div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="First Name*"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Last Name*"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email*"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number"
                            placeholder="Phone*"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="my-4">
                        <textarea
                            placeholder="Message*"
                            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="button-container">
                        <button
                            type="submit"
                            className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                        >
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

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h4 style={{ color: 'black' }}>¡El mensaje se ha enviado correctamente!</h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactSection;

import React from 'react';
import '../assets/css/Contact.css';
import '../assets/css/General.css';

const ContactSection = () => {
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     message: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Aquí manejarías el envío del formulario, por ejemplo, enviándolo a un servidor
    //     console.log(formData);
    // };

    return (
        <div className="profile-section" id="contact">
            <div className="centrize main-container">
            <div className="title title-right-shift" style={{ marginLeft: '0px' }}>Contact</div>
            <div className="subtitle-container">LET'S TALK</div>
                {/* <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="First Name*"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Last Name*"
                            name="lastName"
                            value={formData.lastName}
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
                    <div className="my-2 w-1/2 lg:w-1/4">
                        <button
                            type="submit"
                            className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                        >
                            Send Message
                        </button>
                    </div>
                </form> */}
                <div className="contact-info" style={{ borderLeftWidth: '30px', marginLeft: '250px', margin: '50px'}}>
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
        </div>
    );
};

export default ContactSection;

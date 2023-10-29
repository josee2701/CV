import React, { useState, useEffect } from 'react';  // <-- Importa los hooks
import '../assets/css/Profile.css';
import profileImage from '../assets/Gallery/Perfil.png'; 

function ProfileTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);  // Usa directamente useState
  const titles = ["Desarrollador Backend", "Python", "Django", "MongoDB", "Docker", "Kubernetes"];

  useEffect(() => {  // Usa directamente useEffect
      const timer = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 3000); // Cambia cada 3 segundos

      return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
  }, [currentIndex]);

  return <h3 className="profile-title">{titles[currentIndex]}</h3>;
}
function Profile(props) {
  return (
    //   <div className="profile-container">
    //       <div className="info-container">
    //           
    //           <ProfileTitle />
    //           <p className="profile-description">Ingeniero de sistemas especializado en Python y Django con enfoque en desarrollo backend. Aprendo rápido y me adapto a desafíos, habiendo participado activamente en proyectos con Django. Valoro la colaboración, comunicación clara y el aprendizaje constante de errores.</p>
    //       </div>
    //   </div>
    <div class="section started" id="section-started">
				<div class="centrize full-width">
					<div class="vertical-center">

						<h1 class="h-title">
							Paula Villalobos
						</h1>

						<div class="started-content">

							<div class="h-subtitles">
								<div class="h-subtitle typing-subtitle" >
									<p>Consultant and Mentor</p>
									<p>Web Designer</p>
									<p>Programmer</p>
								</div>
								<span class="typed-subtitle">Progr</span><span class="typed-cursor">|</span>
							</div>

							<div class="h-text">
								Hello! I am Web Developer from United States, New York. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.
							</div>



						</div>

					</div>
				</div>
      {/* <div className="section about" id="section-about">
      <div className="info-container">
          <div className="titles">
                <h1 className="profile-name">Jose Fernando Campos S.</h1>
              <div className="subtitle">My story</div>
          </div>
          
          <div className="cols">
              <div className="col">
                  <div className="single-post-text">
                      <p>
                          Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                      </p>
                  </div>
              </div>
              <div className="col">
                  <div className="single-post-text">
                      <p>
                          Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                      </p>
                  </div>
              </div>
              <div className="col col-full">
                  <div className="single-post-text">
                      <p>
                          Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
                      </p>
                  </div>
              </div>
          </div>
          
          <div className="info-list">
              <ul>
                  <li><strong>Age:</strong> 24</li>
                  <li><strong>Residence:</strong> USA</li>
                  <li><strong>Freelance:</strong> Available</li>
                  <li><strong>Address:</strong> San Francisco</li>
                  <li><strong>Phone:</strong> +1 256 254 84 56</li>
                  <li><strong>E-mail:</strong> alejandroa@gmail.com</li>
              </ul>
          </div>
          
          <div className="clear"></div>
      </div> */}
  </div>
  );
}

export default Profile;

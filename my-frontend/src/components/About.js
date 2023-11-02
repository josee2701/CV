import React from 'react';
import '../assets/css/About.css';

function About(props) {
    return (
        <div className="section about" id="section-about">
            <div className="content">
                <div className="titles">
                    <div className="title">About Me</div>
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
                    
                </div>
                <div className="info-list">
                    <ul>
                        <li><strong>Phone:</strong> +1 256 254 84 56</li>
                        <li><strong>E-mail:</strong> alejandroa@gmail.com</li>
                    </ul>
                </div>

                <div className="clear"></div>
            </div>
        </div>

    );
}

export default About;

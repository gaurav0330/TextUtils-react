import React, { useState } from 'react';

export default function About() {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Dynamic styles for dark and light modes
    let myStyle = {
        color: darkMode ? 'white' : 'black',
        backgroundColor: darkMode ? '#333' : 'white',
        transition: 'all 0.5s ease'
    };

    let accordionStyle = {
        backgroundColor: darkMode ? '#444' : '#f8f9fa',
        color: darkMode ? 'white' : 'black',
        borderRadius: '5px',
        transition: 'all 0.5s ease'
    };

    return (
        <>
            <div className="container" style={myStyle}>
                <div className="container my-5">
                    <h3 className="text-center mb-4" style={{ fontWeight: 'bold', color: darkMode ? '#66fcf1' : '#007bff' }}>
                        About Us
                    </h3>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    About Our Mission
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={accordionStyle}>
                                    <strong>We are driven by innovation and a desire to create meaningful solutions.</strong> Our mission is to provide the best services and products that help improve your daily life, combining cutting-edge technology with user-friendly experiences. Our team is dedicated to bringing the most up-to-date and practical applications to the market.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Our Vision
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={accordionStyle}>
                                    <strong>Innovation, efficiency, and integrity are at the heart of what we do.</strong> Our vision is to be recognized globally for pioneering new technologies, maintaining a culture of continuous learning, and delivering excellence in all our projects. We are committed to exceeding expectations.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Our Core Values
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={accordionStyle}>
                                    <strong>We stand by our core values of integrity, innovation, and inclusiveness.</strong> These values shape our work culture and drive the success of our organization. Our commitment to these principles ensures that we deliver exceptional quality and foster a positive work environment.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container my-3">
                        <button type="button" className="btn btn-primary" onClick={toggleDarkMode}>
                            {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

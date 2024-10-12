import React from 'react';

export default function About(props) {
    // Styles for dark and light modes
    const myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
        border: `2px solid ${props.mode === 'dark' ? 'white' : '#042743'}`,
        borderRadius: '8px',
        padding: '15px',
        transition: 'all 0.3s ease',
    };

    // Custom styles for accordion buttons
    const buttonStyle = {
        color: props.mode === 'dark' ? '#042743' : 'white',
        backgroundColor: props.mode === 'dark' ? 'white' : '#0d6efd',
        border: `1px solid ${props.mode === 'dark' ? 'white' : '#0d6efd'}`,
        transition: 'all 0.3s ease',
    };

    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1 className="my-3 text-center" style={{ fontWeight: 'bold' }}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={buttonStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is TextUtils?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils</strong> is a simple and powerful tool for quick text transformations.
                            Whether you want to convert text to uppercase, lowercase, or count the number of words or characters, TextUtils provides an easy and efficient way to manage your text.
                            It is designed with a focus on usability, making it accessible to everyone.
                        </div>
                    </div>
                </div>

                <div className="accordion-item my-3" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={buttonStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Key Features
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                                <li><strong>Convert text to Uppercase</strong> - Make all text uppercase instantly.</li>
                                <li><strong>Convert text to Lowercase</strong> - Transform your text into lowercase easily.</li>
                                <li><strong>Count words and characters</strong> - Get quick insights into the length of your text.</li>
                                <li><strong>Remove extra spaces</strong> - Clean up your text with a click.</li>
                                <li><strong>Copy text to clipboard</strong> - Easily copy the transformed text for your needs.</li>
                            </ul>
                            These features make editing and analyzing your text fast and straightforward. It's a versatile tool that simplifies your daily text operations.
                        </div>
                    </div>
                </div>

                <div className="accordion-item my-3" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={buttonStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Why Use TextUtils?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils</strong> is ideal for anyone looking to quickly format or analyze text.
                            Whether you're a student, developer, or content creator, our tool saves time by offering essential text manipulation options in one place.
                            It's a must-have for anyone who deals with large amounts of text data regularly.
                            <br />
                            <br />
                            <strong>Bonus:</strong> It supports dark mode for those who prefer a sleek, eye-friendly interface while working at night!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

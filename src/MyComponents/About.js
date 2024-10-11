import React from 'react';

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    };

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is TextUtils?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils</strong> is a simple and powerful tool for quick text transformations. 
                            Whether you want to convert text to uppercase, lowercase, or count the number of words or characters, TextUtils provides an easy and efficient way to manage your text.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Key Features
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <ul>
                                <li>Convert text to Uppercase</li>
                                <li>Convert text to Lowercase</li>
                                <li>Count words and characters</li>
                                <li>Remove extra spaces</li>
                                <li>Copy text to clipboard</li>
                            </ul>
                            These features make editing and analyzing your text fast and straightforward.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Why Use TextUtils?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils</strong> is ideal for anyone looking to quickly format or analyze text. Whether you're a student, developer, or content creator, our tool saves time by offering essential text manipulation options in one place. It's a must-have for anyone who deals with large amounts of text data regularly.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

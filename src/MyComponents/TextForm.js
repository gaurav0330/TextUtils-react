import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        alert("Text Copied to Clipboard!");
    }
    
    const handleClearClick = () => {
        setText("");
    }

    const handleSentenceCaseClick = () => {
        let newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        setText(newText);
    }

    const handleRemoveSpacesClick = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
    }

    const [text, setText] = useState("");

    const wordCount = text.split(/\s+/).filter((word) => word.length !== 0).length;
    const readingTime = wordCount * 0.008;

    return (
        <>
            <div className='container my-4'>
                <h2 className="text-center">{props.heading}</h2>
                
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        onChange={handleOnChange} 
                        value={text} 
                        id="myBox" 
                        rows="8" 
                        style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "10px", border: "1px solid #ccc" }}
                        placeholder="Enter your text here..."
                    ></textarea>
                </div>

                <div className="d-flex flex-wrap justify-content-center my-3">
                    <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
                        Convert To UpperCase
                    </button>

                    <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
                        Convert To LowerCase
                    </button>

                    <button className="btn btn-success mx-2 my-1" onClick={handleCopyClick}>
                        Copy Text
                    </button>

                    <button className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>
                        Clear Text
                    </button>

                    <button className="btn btn-warning mx-2 my-1" onClick={handleSentenceCaseClick}>
                        Convert to Sentence Case
                    </button>

                    <button className="btn btn-info mx-2 my-1" onClick={handleRemoveSpacesClick}>
                        Remove Extra Spaces
                    </button>
                </div>
            </div>

            <div className="container my-4 text-center">
                <h3>Your Text Summary</h3>
                <div className="summary-box p-3" style={{ backgroundColor: "#e9ecef", borderRadius: "10px" }}>
                    <p>{wordCount} words and {text.length} characters</p>
                    <p>{readingTime.toFixed(2)} Minutes To Read</p>
                </div>

                <h3 className="mt-4">Preview</h3>
                <p className="p-3" style={{ backgroundColor: "#f1f3f5", borderRadius: "10px", border: "1px solid #ddd" }}>
                    {text.length > 0 ? text : "Enter something in the textbox to preview it here"}
                </p>
            </div>
        </>
    )
}

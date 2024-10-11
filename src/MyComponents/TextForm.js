import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faTrashAlt, faTextHeight, faTextWidth, faBroom, faFont } from '@fortawesome/free-solid-svg-icons';

export default function TextForm(props) {

    const handleUpClick = () => {
        if (text.length > 0) {  // Check if there is text
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase", "success");
        } else {
            props.showAlert("Text box is empty", "warning");
        }
    }

    const handleLowClick = () => {
        if (text.length > 0) {  // Check if there is text
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase", "success");
        } else {
            props.showAlert("Text box is empty", "warning");
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopyClick = () => {
        if (text.length > 0) {  // Check if there is text
            navigator.clipboard.writeText(text);
            props.showAlert("Text Copied to Clipboard!", "success");
        } else {
            props.showAlert("Nothing to copy, the text box is empty", "warning");
        }
    }

    const handleClearClick = () => {
        if (text.length > 0) {  // Check if there is text
            setText("");
            props.showAlert("Text Cleared", "success");
        } else {
            props.showAlert("Text box is already empty", "warning");
        }
    }

    const handleSentenceCaseClick = () => {
        if (text.length > 0) {  // Check if there is text
            let newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
            setText(newText);
            props.showAlert("Converted to Sentence Case", "success");
        } else {
            props.showAlert("Text box is empty", "warning");
        }
    }

    const handleRemoveSpacesClick = () => {
        if (text.length > 0) {  // Check if there is text
            let newText = text.replace(/\s+/g, ' ').trim();
            setText(newText);
            props.showAlert("Extra Spaces Removed", "success");
        } else {
            props.showAlert("Text box is empty", "warning");
        }
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-5" style={{ color: props.mode === 'dark' ? '#f1f1f1' : '#042743' }}>
                <h1 className="mb-4 text-center">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#1f3a4d' : 'white',
                            color: props.mode === 'dark' ? '#f1f1f1' : '#042743',
                            borderRadius: '8px',
                            padding: '10px',
                            fontSize: '16px'
                        }}
                        id="myBox" rows="8" placeholder="Enter your text here..."></textarea>
                </div>

                {/* Buttons arranged in a card with grid layout */}
                <div className="card p-4 shadow-sm" style={{ backgroundColor: props.mode === 'dark' ? '#223344' : '#f8f9fa', borderRadius: '12px' }}>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 my-2">
                            <button className="btn btn-primary w-100" onClick={handleUpClick}>
                                <FontAwesomeIcon icon={faTextHeight} className="me-2" />Convert to Uppercase
                            </button>
                        </div>
                        <div className="col-md-4 col-sm-6 my-2">
                            <button className="btn btn-primary w-100" onClick={handleLowClick}>
                                <FontAwesomeIcon icon={faTextWidth} className="me-2" />Convert to Lowercase
                            </button>
                        </div>
                        <div className="col-md-4 col-sm-6 my-2">
                            <button className="btn btn-success w-100" onClick={handleCopyClick}>
                                <FontAwesomeIcon icon={faCopy} className="me-2" />Copy Text
                            </button>
                        </div>
                        <div className="col-md-4 col-sm-6 my-2">
                            <button className="btn btn-danger w-100" onClick={handleClearClick}>
                                <FontAwesomeIcon icon={faTrashAlt} className="me-2" />Clear Text
                            </button>
                        </div>
                        <div className="col-md-4 col-sm-6 my-2">
                            <button className="btn btn-warning w-100" onClick={handleSentenceCaseClick}>
                                <FontAwesomeIcon icon={faFont} className="me-2" />Sentence Case
                            </button>
                        </div>
                        <div className="col-md-4 col-sm-6 my-2">
                            <button className="btn btn-info w-100" onClick={handleRemoveSpacesClick}>
                                <FontAwesomeIcon icon={faBroom} className="me-2" />Remove Extra Spaces
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-4" style={{ color: props.mode === 'dark' ? '#f1f1f1' : '#042743' }}>
                <h2 className="my-3 text-center">Your Text Summary</h2>
                <p><FontAwesomeIcon icon={faFont} className="me-2" /><strong>{text.split(/\s+/).filter((element) => element.length !== 0).length}</strong> words</p>
                <p><strong>{text.length}</strong> characters</p>
                <p><strong>{0.008 * text.split(" ").filter((element) => element.length !== 0).length}</strong> Minutes read</p>
                <h2 className="my-3 text-center">Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}

// learning about the state
  
import React, {useState} from 'react'
export default function TextForm(props) {


    const handelUpClick = () => {
        // console.log("uppder Case Was Clicked");
       let newText  = text.toUpperCase();
       setText(newText);
    }

    const handelLowClick = () => {
      // console.log("uppder Case Was Clicked");
     let newText  = text.toLowerCase();
      setText(newText);
  }

    const handeOnChange = (event) => {
              // console.log("On change  Clicked");
              setText(event.target.value);
    }
    const [text,setText] = useState("");
 
  return (
    <>
    <div className='conatiner'>
      <h2>{props.heading}</h2>
      <div className="form-group">
        <textarea className="form-control" onChange={handeOnChange} value = {text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-10" onClick={handelUpClick} style={{ marginTop: '10px',  marginRight : '20px'}}  >
        Convert To UpperCase
      </button>

      <button className="btn btn-primary" onClick={handelLowClick} style={{ marginTop: '10px'}}  >
        Convert To LoweCase
      </button>

      </div>

      <div className="conatiner my-10">
        <h1> Your text Summary</h1>
        <p> {text.split(" ").length - 1} words And {text.length} character</p>
        <p> {text.split(" ").length*0.008} Minutes To Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>


    </>
  )
}

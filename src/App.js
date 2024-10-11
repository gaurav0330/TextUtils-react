
import Navbar from './MyComponents/Navbar';
// import TextForm from './MyComponents/TextForm';
import './App.css';
import About from './MyComponents/About';

function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About Us"/>
      <div className="container my-3">
      <About/>
      {/* <TextForm heading = "Enter the Text to Analyze"/> */}
        </div>  
    </>
  );
}

export default App;

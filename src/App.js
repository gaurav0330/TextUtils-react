
import Navbar from './MyComponents/Navbar';
import TextForm from './MyComponents/TextForm';
import './App.css';

function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About Us"/>
      <div className="container my-10">
      <TextForm heading = "Enter the Text to Analyze"/>
        </div>  
    </>
  );
}

export default App;

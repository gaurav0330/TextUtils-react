import Navbar from './MyComponents/Navbar';
import TextForm from './MyComponents/TextForm';
import './App.css';
import About from './MyComponents/About';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './MyComponents/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };


  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} setAlert={setAlert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

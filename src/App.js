import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  console.log(mode)
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if (mode === 'light' || mode === 'success'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }
  const greencolor = ()=>{
    if(mode === 'light'){
      setMode('success')
      document.body.style.backgroundColor = 'green';
      showAlert("Green mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="Text Utils" abouttext="About Us" mode={mode} greencolor={greencolor} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter Text To Analyze" mode={mode}/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
  
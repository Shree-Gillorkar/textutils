//import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import React, {useState} from 'react'

function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type)=>{
    setAlert({
       msg:massage,
       type : type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17 16 18)';
      showAlert(" Dark Mode has been anabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been anabled", "success");

    }
  }

  return (
    <>
      {/* <Navbar title = "TextUtils" about = "About Us"/ mode = {mode}> */}
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} heading = "Enter the text to analyse below" mode = {mode}/>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import Theame from "./components/Theame";
// import About from "./components/About";
import React from "react";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [alert,setAlert]= useState (null);

  const showAlert = (message, type)=>{
    setAlert ({
      msg: message,
      type: type 
    })
    setTimeout(() =>  {
      setAlert(null);
    }, 1500); // removing Alert pop-up after 3 secs
  }  // show alert will take alert message and take type of laert

  const [mode,setMode] = useState ('light');
  const toggleMode = () => {
    if(mode === 'light'){
       setMode  ('dark');
       document.body.style.backgroundColor = '#042743';
       showAlert("Dark Mode has been Enabled","success");
       document.title = 'TextUtils - Dark Mode';
      //  setInterval( () => {
      //   document.title = 'TextUtils - Amezing Website';
      //  },2000 )
      //  setInterval( () => {
      //   document.title = 'TextUtils - Install Now';
      //  },1500 ) // this will change in every 2 sec and 1.5 sec
    }
    else {
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  // const [theme ,setTheme] = useState ('light')
  // const changeTheame =() =>{
  //    if (mode ==='light') {if (theme === 'light'){
  //       setTheme ('pink');
  //       document.body.style.backgroundColor = '#F4C2C2';
  //       // document.body.style.color = ''
  //       showAlert("Pink mode is Enabled","success");
  //     }
  //     else {
  //       setTheme ('light');
  //       document.body.style.backgroundColor = 'white';
  //       showAlert("Light Mode has been Enabled","success");
  //     }}
  //     else {
  //       if (theme === 'dark'){
  //         setTheme ('pink');
  //         document.body.style.backgroundColor = '#F4C2C2';
  //         showAlert("Pink mode is Enabled","success");
  //       }
  //       else {
  //         setTheme ('dark');
  //         document.body.style.backgroundColor = '#042743';
  //         document.body.style.color = ' #000000';
  //         showAlert("Dark Mode has been Enabled","success");
  //       }
        
  //     }
  // }
 
  return (
    <>
      
      {/* <Router> */}
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
          <Alert  alert ={alert}/>
          {/* <div className="container">
            <Theame theme={theme} changeTheame={changeTheame} />
          </div>   */}

          {/* <Routes> */}
              {/* <Route exact path="/about" element={<About aboutText="About" className="Container mx-5"/>} /> */}
              <div className="container my-3">
                <TextForm showAlert={showAlert}heading="Enter the text to Analyze below" mode={mode} />
              </div>
          {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}
export default App;

import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
     <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`} > 
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div  className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li> */}
        </ul>
            <div className={`form-check form-switch text-${props.mode=== 'light'? 'dark':'light' }`}>  
              {/*if props.mode === light then dark otherwise light
              we can write JS in HTML by uisng back ticks and curly brackets {`  `}  we can use any Variable in it by putting ${ }*/}
              <input className="form-check-input" onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
            
      </div>
    </div>
  </nav>
  )
}
Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}// this is like check constraints 
// isRequired will displya error if the props are not pass 

Navbar.defaultProps= {
    title: 'SET TITLE HERE',
    aboutText: 'ABOUT TEXT HERE',
    theme: 'light',
}
// default value for our props

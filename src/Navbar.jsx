import React from "react";
import './App.css'
export default function Navbar(props){

   
    return(

       <nav className={props.darkMode ? "dark": "white" }>
            <img src="/images/cat.png"  className="header--logo"  />
            <h2 className="header--title">Fast Food </h2>
            <div className="navbar">
            <a href="#"><i className="fa fa-fw fa-home"></i> Home</a>
            <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="#"><i className="fa fa-fw fa-user"></i>Service</a>
            <div className="toggler--slider"onClick={props.toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
            </div>
            </div>
        </nav>
        
    )
}






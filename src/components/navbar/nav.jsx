import React from 'react'
import './nav.css'

const Navbar = () => {
    return(
       <div id="Navbar" className="navbar">
       <div className="nav-menu">
        <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
       </div>
       <div className="nav-connect">
        Connect with me
       </div>
       </div>
    );
}
export default Navbar;
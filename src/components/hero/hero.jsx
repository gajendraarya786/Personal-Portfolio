import React from "react";
import './hero.css'
import profile_img from '../../assests/gka.neww.jpg'

const hero = () => {
    return(
       <div id="home" className="hero">
         <img src={profile_img} alt="" id="img"/>
         <h1><span>I'm Gajendra Kumar Arya,</span> an aspiring frontend developer.</h1>
         <p>I am a frontend developer, currently a second year student at UPES.</p>
         <div className="hero-action">
            <div className="hero-connect"><a className='anchor-link' offset={50} href="#Contact">Connect with me</a></div>
            <div className="hero-resume">My resume</div>
         </div>
       </div>
    );
}
export default hero;
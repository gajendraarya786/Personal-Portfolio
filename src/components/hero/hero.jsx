import React from "react";
import './hero.css'
import profilePic from '../../assests/profile1.jpg'

const hero = () => {

   const showResume = () =>{
      window.open('Gajendra__FinallResume.pdf');
   }

    return(
       <div id="home" className="hero">
         <img src={profilePic} alt="" id="img"/>
         <h1><span>I'm Gajendra Kumar Arya,</span> an aspiring fullstack developer.</h1>
         <p>I am a fullstack developer, currently a second year student at UPES.</p>
         <div className="hero-action">
            <div className="hero-connect"><a href="#Contact">Connect with me</a></div>
            <div className="hero-resume" onClick={showResume}>My resume</div>
         </div>
       </div>
    );
}
export default hero;
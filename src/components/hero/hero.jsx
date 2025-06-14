import React from "react";
import './hero.css'
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profile1 from '../../assests/profile1.jpg'


const Hero = () => {
   const showResume = () => {
      window.open('Gajendra__Resumef.pdf');
   }

    return(
       <div id="home" className="hero">
         <div className="hero-background">
            <div className="hero-gradient"></div>
            <div className="hero-particles"></div>
         </div>
         
         <div className="hero-content">
            <div className="hero-image-container">
               <div className="hero-image-wrapper">
                  <img src={profile1} alt="Profile" className="hero-image"/>
                  <div className="hero-image-glow"></div>
               </div>
            </div>
            
            <div className="hero-text">
               <div className="hero-greeting">
                  <span className="hero-wave">👋</span>
                  <span>Hello, I'm</span>
               </div>
               <h1 className="hero-name">
                  <span className="hero-name-highlight">Gajendra Kumar Arya</span>
               </h1>
               <h2 className="hero-title">
                  Aspiring <span className="hero-title-gradient">Fullstack Developer</span>
               </h2>
               <p className="hero-description">
                  I am a passionate fullstack developer, currently a second year student at UPES, 
                  crafting beautiful and functional web experiences with modern technologies.
               </p>
               
               <div className="hero-stats">
                  <div className="hero-stat">
                     <span className="hero-stat-number">1.5+</span>
                     <span className="hero-stat-label">Years Experience</span>
                  </div>
                  <div className="hero-stat">
                     <span className="hero-stat-number">10+</span>
                     <span className="hero-stat-label">Projects Done</span>
                  </div>
                  <div className="hero-stat">
                     <span className="hero-stat-number">15+</span>
                     <span className="hero-stat-label">Happy Clients</span>
                  </div>
               </div>
               
               <div className="hero-actions">
                  <a href="#Contact" className="hero-btn hero-btn-primary">
                     <Mail size={18} />
                     <span>Connect with me</span>
                     <ArrowRight size={16} />
                  </a>
                  <button onClick={showResume} className="hero-btn hero-btn-secondary">
                     <Download size={18} />
                     <span>Download Resume</span>
                  </button>
               </div>
               
               <div className="hero-social">
                  <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
                     <Github size={20} />
                  </a>
                  <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
                     <Linkedin size={20} />
                  </a>
                  <a href="mailto:gajendra.work538@gmail.com" className="hero-social-link" aria-label="Email">
                     <Mail size={20} />
                  </a>
               </div>
            </div>
         </div>
         
         <div className="hero-scroll-indicator">
            <div className="hero-scroll-line"></div>
            <span>Scroll Down</span>
         </div>
       </div>
    );
}

export default Hero; 
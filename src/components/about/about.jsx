import React from 'react'
import './about.css'
import theme_img from '../../assests/gka.jpg'
const About = () => {
    return(
       <div id="About" className='about'>
         <div className="about-title">
            <h1>About me</h1>
            {/* <img src={theme_img} alt="" /> */}
         </div>
         <div className="about-section">
            <div className="about-left">
                <img src={theme_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I’m Gajendra, a passionate frontend developer with a strong foundation in HTML, CSS, and JavaScript, currently focusing on building dynamic and responsive web applications using React. Over the past 1 year, I’ve honed my skills in creating clean, efficient, and user-friendly interfaces that bring ideas to life on the web.</p>
                    <p>As someone who is always excited about the latest trends in web development, I’m constantly learning and growing as a developer. Whether it's enhancing user experiences, optimizing code for performance, or exploring new frameworks and tools, I love the challenge of turning concepts into reality.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                </div>
            </div> 
         </div>
         <div className="about-achievements">
            <div className="about-achievement">
                <h1>1.5+</h1>
                <p>Years of Experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>Happy CLients</p>
            </div>
         </div>
       </div>
    );
}
export default About;
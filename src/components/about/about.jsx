import React from 'react';
import './about.css';
import { Code, Palette, Zap, Award, Users, Calendar, Database, Server } from 'lucide-react';
import profile2 from '../../assests/profile2.jpg'

const About = () => {
    const skills = [
        { name: 'HTML & CSS', level: 85, icon: Code, color: '#e34c26' },
        { name: 'React JS', level: 90, icon: Zap, color: '#61dafb' },
        { name: 'JavaScript', level: 80, icon: Code, color: '#f7df1e' },
        { name: 'Next JS', level: 75, icon: Zap, color: '#000000' },
        { name: 'Node.js', level: 75, icon: Server, color: '#339933' },
        { name: 'Express.js', level: 80, icon: Server, color: '#e67e22', gradient: 'linear-gradient(135deg, #e67e22, #e74c3c)' },
        { name: 'MongoDB', level: 70, icon: Database, color: '#47A248' },
        { name: 'SQL', level: 65, icon: Database, color: '#336791' }
    ];

    const achievements = [
        { number: '1.5+', label: 'Years of Experience', icon: Calendar },
        { number: '10+', label: 'Projects Completed', icon: Award },
        { number: '15+', label: 'Happy Clients', icon: Users }
    ];

    return(
       <div id="About" className='about'>
         <div className="about-container">
            <div className="about-header">
               <h1 className="about-title">About Me</h1>
               <p className="about-subtitle">Passionate Developer & Creative Problem Solver</p>
            </div>
            
            <div className="about-content">
               <div className="about-left">
                  <div className="about-image-container">
                     <img src={profile2} alt="About Profile" className="about-image"/>
                     <div className="about-image-overlay">
                        <div className="about-image-decoration"></div>
                     </div>
                  </div>
               </div>
               
               <div className="about-right">
                  <div className="about-text">
                     <div className="about-intro">
                        <h3>Hi there! 👋</h3>
                        <p>I'm <strong>Gajendra</strong>, a passionate frontend developer with a strong foundation in modern web technologies.</p>
                     </div>
                     
                     <div className="about-description">
                        <p>With over 1 year of experience in creating clean, efficient, and user-friendly interfaces, I specialize in bringing ideas to life on the web using HTML, CSS, JavaScript, and React.</p>
                        <p>I'm constantly learning and growing as a developer, always excited about the latest trends in web development. Whether it's enhancing user experiences, optimizing code for performance, or exploring new frameworks, I love the challenge of turning concepts into reality.</p>
                     </div>
                     
                     <div className="about-highlights">
                        <div className="about-highlight">
                           <Palette className="highlight-icon" />
                           <div>
                              <h4>Creative Design</h4>
                              <p>Crafting beautiful and intuitive user interfaces</p>
                           </div>
                        </div>
                        <div className="about-highlight">
                           <Code className="highlight-icon" />
                           <div>
                              <h4>Clean Code</h4>
                              <p>Writing maintainable and scalable solutions</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="about-skills-section">
               <h3 className="skills-title">Technical Skills</h3>
               <div className="about-skills">
                  {skills.map((skill, index) => {
                     const IconComponent = skill.icon;
                     return (
                        <div key={index} className="about-skill">
                           <div className="skill-header">
                              <div className="skill-info">
                                 <IconComponent className="skill-icon" style={{color: skill.color}} />
                                 <span className="skill-name">{skill.name}</span>
                              </div>
                              <span className="skill-percentage">{skill.level}%</span>
                           </div>
                           <div className="skill-bar">
                              <div 
                                 className="skill-progress" 
                                 style={{
                                    width: `${skill.level}%`,
                                    background: skill.gradient ? skill.gradient : `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                                 }}
                              ></div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
            
            <div className="about-achievements">
               {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                     <div key={index} className="about-achievement">
                        <div className="achievement-icon">
                           <IconComponent />
                        </div>
                        <div className="achievement-content">
                           <h2 className="achievement-number">{achievement.number}</h2>
                           <p className="achievement-label">{achievement.label}</p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
       </div>
    );
}

export default About;
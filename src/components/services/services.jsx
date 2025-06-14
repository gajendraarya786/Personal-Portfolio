import React from 'react';
import './services.css';
import Services_Data from './services_data.js';
import { ArrowRight, Code, Palette, Smartphone, Target, Zap, Search } from 'lucide-react';

const Services = () => {
  // Icon mapping for each service
  const iconMap = {
    "01": Code,
    "02": Palette,
    "03": Smartphone,
    "04": Target,
    "05": Zap,
    "06": Search
  };

  return (
    <div id="service" className="services">
      <div className="services-container">
        <div className="services-header">
          <h1 className="services-title">My Services</h1>
          <p className="services-subtitle">Comprehensive solutions for your digital needs</p>
        </div>
        
        <div className="services-grid">
          {Services_Data.map((service, index) => {
            const IconComponent = iconMap[service.s_no] || Code;
            return (
              <div key={index} className="service-card">
                <div className="service-card-inner">
                  <div className="service-header">
                    <div className="service-icon">
                      <IconComponent />
                    </div>
                    <div className="service-number">{service.s_no}</div>
                  </div>
                  
                  <div className="service-content">
                    <h3 className="service-name">{service.s_name}</h3>
                    <p className="service-description">{service.s_desc}</p>
                  </div>
                  
                  <div className="service-footer">
                    <button className="service-readmore">
                      <span>Learn More</span>
                      <ArrowRight className="arrow-icon" />
                    </button>
                  </div>
                </div>
                
                <div className="service-card-bg"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services; 
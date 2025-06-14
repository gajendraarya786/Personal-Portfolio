import React, { useState } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setResult("Sending....");

        const formData = new FormData(event.target);
        formData.append("access_key", "21f4af86-1a37-4fef-afbc-1a57896ba8ff");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setResult("success");
                event.target.reset();
            } else {
                setResult("error");
            }
        } catch (error) {
            console.log("Error", error);
            setResult("error");
        } finally {
            setIsLoading(false);
            setTimeout(() => setResult(""), 5000);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "gajendra.work538@gmail.com",
            link: "mailto:gajendra.work538@gmail.com"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+91-8573980119",
            link: "tel:+918573980119"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Dehradun, Uttarakhand",
            link: "#"
        }
    ];

    return (
        <div id="Contact" className="contact">
            <div className="contact-background">
                <div className="contact-gradient"></div>
            </div>
            
            <div className="contact-container">
                <div className="contact-header">
                    <h1 className="contact-title">Get In Touch</h1>
                    <p className="contact-subtitle">
                        Let's discuss your next project and bring your ideas to life
                    </p>
                </div>
                
                <div className="contact-content">
                    <div className="contact-left">
                        <div className="contact-intro">
                            <h2>Let's Talk</h2>
                            <p>
                                I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
                            </p>
                        </div>
                        
                        <div className="contact-info">
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                return (
                                    <div key={index} className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <IconComponent />
                                        </div>
                                        <div className="contact-info-content">
                                            <h4>{info.title}</h4>
                                            <a href={info.link} className="contact-info-link">
                                                {info.value}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        
                        <div className="contact-cta">
                            <div className="contact-availability">
                                <div className="availability-indicator"></div>
                                <span>Available for freelance work</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-right">
                        <form onSubmit={onSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name" 
                                    placeholder="Enter your full name" 
                                    required 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    placeholder="Enter your email address" 
                                    required 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject"
                                    name="subject" 
                                    placeholder="What's this about?" 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message"
                                    name="message" 
                                    rows="6" 
                                    placeholder="Tell me about your project..." 
                                    required
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                className={`contact-submit ${isLoading ? 'loading' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <div className="loading-spinner"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                        
                        {result && (
                            <div className={`form-result ${result}`}>
                                {result === "success" ? (
                                    <>
                                        <CheckCircle size={20} />
                                        <span>Message sent successfully! I'll get back to you soon.</span>
                                    </>
                                ) : result === "error" ? (
                                    <>
                                        <AlertCircle size={20} />
                                        <span>Something went wrong. Please try again.</span>
                                    </>
                                ) : (
                                    <span>{result}</span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
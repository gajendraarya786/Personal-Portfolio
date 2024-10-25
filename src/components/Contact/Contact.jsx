import React, { useState } from 'react';
import './Contact.css';
import mail_icon from '../../assests/mail_icon.svg';
import location_icon from '../../assests/location_icon.svg';
import call_icon from '../../assests/call_icon.svg';

const Contact = () => {
    const [result, setResult] = useState(""); // Define state for the result message

    const onSubmit = async (event) => {
        event.preventDefault();
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
                alert('Form submitted successfully');
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                setResult(data.message || "An error occurred.");
            }
        } catch (error) {
            console.log("Error", error);
            setResult("An error occurred while submitting the form.");
        }
    };

    return (
        <div id="Contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                           <img src={mail_icon} alt="Email" id="mail"/> 
                           <p>gajendra.work538@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Phone" id="phone"/>
                            <p>+91-8573980119</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location" id="location"/>
                            <p>Dehradun, Uttarakhand</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" required />
                    <label>Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" required />
                    <label>Write your message here</label>
                    <textarea name="message" rows="10" placeholder="Enter your message" required></textarea>
                    <button type="submit" className="contact-submit">Submit</button>
                </form>
            </div>
            <span>{result}</span>
        </div>
    );
}

export default Contact;


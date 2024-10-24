import React from 'react'
import './Contact.css'
import mail_icon from '../../assests/envelop.jpg'
import location_icon from '../../assests/location.jpg'
import call_icon from '../../assests/phone.jpg'

const Contact = () => {
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
                       <img src={mail_icon} alt="" id="mail"/> <p>gajendra.work538@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" id="phone"/><p>+91-8573980119</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" id="location"/><p>Dehradun, Uttarakhand</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                 <label>Your Name</label>
                 <input type="text" placeholder='Enter your name' name="name" />
                 <label>Your Email</label>
                 <input type="email" placeholder='Enter your email' name="email" />
                 <label>Write your message here</label>
                 <textarea name="message" rows="10" placeholder='Enter your message'></textarea>
                 <button type="submit" className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;

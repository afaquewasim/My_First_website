import React from 'react';
import './contact.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Contact() {
    return (
        <>
            <Header />
            <div className="contact-section">
                <div className="contact-info">
                    <div><i className="fas fa-map-marker-alt"></i>Address, City, Country</div>
                    <div><i className="fas fa-envelope"></i>contact@email.com</div>
                    <div><i className="fas fa-phone"></i>+00 0000 000 000</div>
                    <div><i className="fas fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM</div>
                    </div>
                    <div className="contact-form">
                    <h2>Contact Us</h2>
                    <form className="contact" action="" method="post">
                        <input type="text" name="name" className="text-box" placeholder="Your Name" required />
                        <input type="email" name="email" className="text-box" placeholder="Your Email" required />
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <input type="submit" name="submit" className="send-btn" value="Send" />
                    </form>
                </div>
            </div>
            <Footer /> 
        </>
    )
}
export default Contact;
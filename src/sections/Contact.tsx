// src/components/Contact.jsx
import React from 'react';
import "../styles/Contact.css";

function Contact() {
    return (
        <div className= "ContactWrapper">
            <div className="ContactMain">

                {/* 1st div: heading block */}
                <div className="contact-top">
                    <h2>Get in Touch</h2>
                    <h3>Let’s build something amazing together</h3>
                    <span>Drop me a line anytime </span>
                </div>

                {/* 2nd div: two-column flex, wraps in reverse */}
                <div className="contact-bottom">
                    {/* Left side */}
                    <div className="contact-left">
                        <h2>Software Engineer</h2>
                        <h3>Choose <br/> Your Engineer</h3>
                        <p className="preserveWhiteSpace" >
                            Mouad El Ammari
                        </p>
                    </div>

                    {/* Right side */}
                    <div className="contact-right">
                        <div className="contact-right-inner">
                            {/* Placeholder image */}
                            
                            {/* Text + button */}
                            <div className="contact-right-text">
                                <p>mouad@example.com</p>
                                <p>+212 6 12 34 56 78</p>
                                <button>Send a Message</button>
                            </div>
                        </div>
                        <div style={{ height: 480.764, width: 426.788, backgroundColor: 'LightSalmon ' }}></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;


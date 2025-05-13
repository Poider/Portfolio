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
                         
                            {/* Text + button */}
                            <div className="contact-right-text">
                            <h2> Mouad El Ammari</h2>
                               <p> put here what I bring</p>
                                <p>mouad@example.com</p>
                               
                            </div>
                        </div>
                        <div className="contactImg"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;


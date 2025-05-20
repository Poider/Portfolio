// ContactForm.jsx
import "../styles/ContactForm.css";
import React from 'react';

function ContactForm() {
    return (
        <div className="ContactFormWrapper" id="contactForm">
            <div className="ContactFormMain">
                <div className="ContactFormTop">
                    <h1>want to chat more?</h1>
                    <h2>Connect with Mouad</h2>
                    <p>
                        I understand you may have a unique experience and needs, let's
                        connect and discuss them more and how I can bring the best value
                        to your team
                    </p>
                </div>

                <div className="ContactFormBottom">
                    <form className="ContactForm">
                        <div className="fieldGroup">
                            <label htmlFor="fullName">FULL NAME</label>
                            <input
                                id="fullName"
                                type="text"
                                placeholder="Type Your Name"
                                required
                            />
                        </div>

                        <div className="fieldGroup">
                            <label htmlFor="email">EMAIL ADDRESS*</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Type Your Email"
                                required
                            />
                        </div>

                        <div className="fieldGroup">
                            <label htmlFor="company">COMPANY NAME*</label>
                            <input
                                id="company"
                                type="text"
                                placeholder="Type Your Company Name"
                                required
                            />
                        </div>

                        <div className="fieldGroup">
                            <label htmlFor="message">MESSAGE*</label>
                            <textarea
                                id="message"
                                placeholder="Drop Me A Line </>"
                                required
                            ></textarea>
                        </div>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;

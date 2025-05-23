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
                    <form
                        className="ContactForm"
                        action="https://formsubmit.co/1a2cc62ea165052e652e4ef169f02b44"
                        method="POST"
                    >
                        {/* Optionally, redirect to your own thank you page after submit */}
                   
                   

                        <div className="fieldGroup">
                            <label htmlFor="fullName">FULL NAME</label>
                            <input
                                id="fullName"
                                type="text"
                                name="name"
                                placeholder="Type Your Name"
                                required
                            />
                        </div>

                        <div className="fieldGroup">
                            <label htmlFor="email">EMAIL ADDRESS*</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Type Your Email"
                                required
                            />
                        </div>

                        <div className="fieldGroup">
                            <label htmlFor="company">COMPANY NAME*</label>
                            <input
                                id="company"
                                type="text"
                                name="company"
                                placeholder="Type Your Company Name"
                                required
                            />
                        </div>

                        <div className="fieldGroup">
                            <label htmlFor="message">MESSAGE*</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Drop Me A Line </>"
                                required
                            ></textarea>
                        </div>
                        <input
                            type="hidden"
                            name="_next"
                            value="https://mouadJs.dev/thank-you"
                        />

                        <input type="hidden" name="_captcha" value="false"/>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;

// src/components/Contact.jsx
import React from 'react';
import "../styles/Contact.css";

function Contact() {
    return (
        <div className="ContactWrapper">
            <div className="ContactMain">

                {/* 1st div: heading block */}
                <div className="contact-top">
                    <h2>Get in Touch</h2>
                    <h3>Let’s Build Something Amazing Together</h3>
                    <a href="mailto:mouad@example.com">Drop me a line anytime</a>
                </div>

                {/* 2nd div: two-column flex, wraps in reverse */}
                <div className="contact-bottom">
                    {/* Left side */}
                    <div className="contact-left">
                        <h2>Software Engineer</h2>
                        <h3>Choose <br /> Your Engineer</h3>
                        <p className="preserveWhiteSpace link-underline">
                            Mouad El Ammari
                        </p>
                    </div>

                    {/* Right side */}
                    <div className="contact-right">
                        <div className="contact-right-inner">
                            <div className="contact-right-text">
                                    <h2>Mouad El Ammari</h2>

                                {/* ← New “What I bring” block */}
                                <h4 className="what-i-bring-title">What I bring</h4>
                                <ul className="what-i-bring-list">
                                    <li>
                                        <strong>Accelerate time-to-market</strong> with rapid prototyping & MVP delivery.
                                    </li>
                                    <li>
                                        <strong>Scale confidently</strong> by architecting applications that grow with your user base.
                                    </li>
                                    <li>
                                        <strong>Reduce friction</strong> via clean, maintainable code standards.
                                    </li>
                                    <li>
                                        <strong>Maximize performance</strong> through low-level optimizations.
                                    </li>
                                    <li>
                                        <strong>Protect quality</strong> with test-driven development.
                                    </li>
                                    </ul>
                                

                                {/* ↑ end “What I bring” block */}

                               
                            </div>
                            <a
                                href="/CV - Mouad El Ammari.pdf"
                                download
                                className="download-cv-button"
                            >
                                Download CV
                            </a>

                        </div>
                        <div className="contactImg"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;

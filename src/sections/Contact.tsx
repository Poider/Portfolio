// src/components/Contact.jsx
import React from 'react';
import "../styles/Contact.css";
import GithubButton from "../components/common/GithubButton";
import LinkedInButton from "../components/common/LinkedInButton";
import secondImg from "../assets/secondImg.png";
function Contact() {
    return (
        <div className="ContactWrapper" id="bringwhat">
            <div className="ContactMain">

                {/* 1st div: heading block */}
                <div className="contact-top" id="resume">
                    <h2 >Get in Touch</h2>
                    <h3>Let’s Build Something Amazing Together</h3>
                    <a href="#contactForm">Drop me a line anytime</a>
                </div>

                {/* 2nd div: two-column flex, wraps in reverse */}
                <div className="contact-bottom" >
                    {/* Left side */}
                    <div className="contact-left">
                        <h2>Software Engineer</h2>
                        <h3>Choose <br /> Your Engineer</h3>
                        <a href="#who" className="preserveWhiteSpace link-underline">
                            Mouad El Ammari
                        </a>
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
                            <div className="utilities_links">
                                <a
                                    href="/CV - Mouad El Ammari.pdf"
                                    download
                                    className="download-cv-button"
                                >
                                    Download CV
                                </a>
                           

                                 <div className="contactSocial"> <GithubButton textSize={1} /></div>  
                                 <div className="contactSocial"> <LinkedInButton textSize={1} /> </div>
                            </div>
                        </div>
                        <div className="contact-right-inner"><img alt="secondImg" src={secondImg} /></div>
                      
                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;

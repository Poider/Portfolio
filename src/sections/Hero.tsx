// src/components/Hero.jsx
import React from 'react';
import "../styles/Hero.css";
import mainImage from "../assets/mainImage.png";

const Hero = () => {
    return (
        <div className="HeroWrapper">
            <div className="HeroMain">
                <div className="HeroColumn HeroLeft">
                    {/* 1. Signature */}
                    <div className="hero-signature">
                        {"</>"}
                    </div>
   
                    {/* 2. Intro text with preserved whitespace */}
                    <div>
                        <h2 className=" hero-intro-text">
                            {`Building Interactive Websites: From Pretty Frontends To Scalable Backends.`
                            }
                        </h2>

                        {/* 3. Small text */}
                        <div className="hero-small-text">
                 
         
                            <span>Designed  by </span>
                            <strong><a href="#about" className="HeroLinks link-underline" >Mouad El Ammari</a></strong>
                            <br/>
                            <span>Developed by </span>
                            <strong><a href="#about" className="HeroLinks link-underline">Mouad El Ammari</a></strong>

                        </div>
                    </div>
                    {/* 4. Grid placeholder */}
                    <ul className="hero-grid">
                        <li><strong className="bolderComforta" >{'Experience'}</strong> 4 years shipping</li>
                        <li><strong className="bolderComforta">Languages</strong> English/French/Arabic</li>
                        <li><strong className="bolderComforta">Projects</strong> +20 project delivered</li>
                        <li><strong className="bolderComforta">Technologies Mastered:</strong> 10+</li>
                        <li><strong className="bolderComforta">Degrees</strong> BSc Comp Sci + 2 Years 42Network</li>
                        <li><strong className="bolderComforta">Certifications</strong> Credly Certified Dev</li>
                        <li style={{ gridColumn: "span 2" }}><strong className="bolderComforta preserveWhiteSpace" >99.9% Debugging Success Rate </strong> Okay, okay—let's say 98% to be modest</li>

                    
                    </ul>

                    {/* 5. Currently working at label */}
                    <div className="hero-working-label bolderComforta">
                        <strong>Currently working at:</strong>
                    </div>

                    {/* 6. Working details */}
                    <div className="hero-working">
                    
                        <a className="HeroLinks link-underline " href="https://www.ocpgroup.ma/" target="_blank" rel="noopener noreferrer">
                            <strong>OCPA</strong>
                        </a>
                        &nbsp;→ since August 2023
                    </div>
                </div>

                <div className="HeroColumn HeroRight">
                    {/* Right column content goes here */}
                    <img alt="mainImage" src={mainImage}/>
                   
                </div>
            </div>
        </div>
    );
};

export default Hero;

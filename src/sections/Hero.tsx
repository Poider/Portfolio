// src/components/Hero.jsx
import React from 'react';
import "../styles/Hero.css";

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
                    <div className="preserveWhiteSpace hero-intro-text">
                        {`Line one of intro.\nLine two of intro\nLine three of intro.`
                        }
                    </div>

                    {/* 3. Small text */}
                    <div className="hero-small-text">
                 
         
                        <span>Engineered by </span>
                        <strong><a href="#about" className="HeroLinks">Mouad</a></strong>
                        <br/>
                        <span>Coded by </span>
                        <strong><a href="#about"  className="HeroLinks">Mouad</a></strong>

                    </div>

                    {/* 4. Grid placeholder */}
                    <ul className="hero-grid">
                        <li><strong>Placeholder 1aaaaaaaaa</strong></li>
                        <li><strong>Placeholder aaaaaaaaaaaaaa2</strong></li>
                        <li><strong>Placeholder 3</strong></li>
                        <li><strong>Placeholder 4</strong></li>
                        <li><strong>Placeholder 5</strong></li>
                        <li><strong>Placeholder 6</strong></li>
                        <li><strong>Placeholder 7</strong></li>
                        <li><strong>Placeholder 8</strong></li>
                    
                    </ul>

                    {/* 5. Currently working at label */}
                    <div className="hero-working-label">
                        <strong>Currently working at:</strong>
                    </div>

                    {/* 6. Working details */}
                    <div className="hero-working">
                    
                        <a className="HeroLinks" href="https://www.ocpgroup.ma/" target="_blank" rel="noopener noreferrer">
                            <strong>OCPA</strong>
                        </a>
                        &nbsp;→ since August 2023
                    </div>
                </div>

                <div className="HeroColumn HeroRight">
                    {/* Right column content goes here */}
                    
                </div>
            </div>
        </div>
    );
};

export default Hero;

// 📌 About section: Bio and skills

import "../styles/About.css"
import React from 'react'
const About = () => {
    return (
            <div className="AboutMain">
                <div className="AboutText">
                <p className="whosMouad">Who's <span className="link-underline">Mouad</span></p>
          
                <h3>Building Interactive Websites: From Pretty Frontends To Scalable Backends.</h3>
                    <p className="MainAboutParagraph">
                    {`Mouad El Ammari is a full-stack developer and data engineer currently based in Casablanca. As a multidisciplinary engineer, he pairs broad range of experiences in building solutions from scratch,  creating scalable systems , and front/back-end development to find solutions for challenges from different angles.`}

                    </p>
                   
                </div>
        </div>
    );
}

export default About;

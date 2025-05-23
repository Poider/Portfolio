// 📌 About section: Bio and skills
import "../styles/About.css";
import React from 'react';
const About = () => {
    return (React.createElement("div", { className: "AboutMain" },
        React.createElement("div", { className: "AboutText" },
            React.createElement("p", { className: "whosMouad" },
                "Who's ",
                React.createElement("a", { href: "#bringwhat", className: "link-underline" }, "Mouad")),
            React.createElement("h3", null, "Building Interactive Websites: From Pretty Frontends To Scalable Backends."),
            React.createElement("p", { className: "MainAboutParagraph" }, `Mouad El Ammari is a full-stack developer and data engineer currently based in Casablanca. As a multidisciplinary engineer, he pairs broad range of experiences in building solutions from scratch,  creating scalable systems , and front/back-end development to find solutions for challenges from different angles.`))));
};
export default About;

import React from 'react';
import linkedinIcon from "../../assets/icons/linkedin-icon.png";
import '../../styles/Icons.css';
function LinkedInButton({ textSize = 0.9 }) {
    return (React.createElement("a", { href: "https://www.linkedin.com/in/mouadelammari/", target: "_blank", rel: "noopener noreferrer", className: "SocialButton" },
        React.createElement("img", { src: linkedinIcon, alt: "LinkedIn", className: "SocialButton-icon" }),
        React.createElement("span", { className: "SocialButton-text", style: { fontSize: `${textSize}rem` } }, "LinkedIn")));
}
export default LinkedInButton;

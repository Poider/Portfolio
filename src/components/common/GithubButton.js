import React from 'react';
import githubIcon from "../../assets/icons/github-icon.png";
import '../../styles/Icons.css';
function GithubButton({ textSize = 0.9 }) {
    return (React.createElement("a", { href: "https://github.com/Poider", target: "_blank", rel: "noopener noreferrer", className: "SocialButton" },
        React.createElement("img", { src: githubIcon, alt: "GitHub", className: "SocialButton-icon" }),
        React.createElement("span", { className: "SocialButton-text", style: { fontSize: `${textSize}rem` } }, "GitHub")));
}
export default GithubButton;

import React from 'react';
import githubIcon from "../../assets/icons/github-icon.png";
import '../../styles/Icons.css';

function GithubButton({ textSize = 0.9 }) {
    return (
        <a
            href="https://github.com/Poider"
            target="_blank"
            rel="noopener noreferrer"
            className="SocialButton"
        >
            <img
                src={githubIcon}
                alt="GitHub"
                className="SocialButton-icon"
            />
            <span
                className="SocialButton-text"
                style={{ fontSize: `${textSize}rem` }}
            >
                GitHub
            </span>
        </a>
    );
}

export default GithubButton;

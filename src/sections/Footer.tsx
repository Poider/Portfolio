import React from 'react';
import GithubButton from "../components/common/GithubButton";
import LinkedInButton from "../components/common/LinkedInButton";
import "../styles/Footer.css";

const Footer = () => (
    <footer className="FooterWrapper">
        {/* left block */}
        <div className="FooterLeft">
            Made with ❤️ by Mouad El Ammari
        </div>

        {/* right block: itself a column-flex with top & bottom */}
        <div className="FooterRight">
            <div className="FooterIcons">
                <GithubButton />
                <LinkedInButton />
            </div>
            <div className="FooterCopy">
                © {new Date().getFullYear()} All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;

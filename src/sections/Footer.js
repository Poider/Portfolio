import React from 'react';
import GithubButton from "../components/common/GithubButton";
import LinkedInButton from "../components/common/LinkedInButton";
import "../styles/Footer.css";
const Footer = () => (React.createElement("footer", { className: "FooterWrapper" },
    React.createElement("div", { className: "FooterLeft" }, "Made with \u2764\uFE0F by Mouad El Ammari"),
    React.createElement("div", { className: "FooterRight" },
        React.createElement("div", { className: "FooterIcons" },
            React.createElement(GithubButton, null),
            React.createElement(LinkedInButton, null)),
        React.createElement("div", { className: "FooterCopy" },
            "\u00A9 ",
            new Date().getFullYear(),
            " All rights reserved."))));
export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/ThankYou.css";
const ThankYou = () => (React.createElement("div", { className: "thank-you-page" },
    React.createElement("div", { className: "thank-you-content" },
        React.createElement("h1", { className: "thank-you-title" },
            "Thank you! ",
            React.createElement("span", { style: { fontSize: "2rem", opacity: 0.25 } }, "</>")),
        React.createElement("p", { className: "thank-you-text preserveWhiteSpace" }, "Your message has been sent.\nMouad shall come back to you as soon as possible."),
        React.createElement(Link, { to: "/", className: "thank-you-link" }, "Go back home"),
        React.createElement("div", { className: "signature" }, "</>"))));
export default ThankYou;

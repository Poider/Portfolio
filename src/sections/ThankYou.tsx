import React from "react";
import { Link } from "react-router-dom";
import "../styles/ThankYou.css";

const ThankYou = () => (
    <div className="thank-you-page">
        <div className="thank-you-content">
            <h1 className="thank-you-title">
                Thank you! <span style={{ fontSize: "2rem", opacity: 0.25 }}>&lt;/&gt;</span>
            </h1>
            <p className="thank-you-text preserveWhiteSpace">
                {"Your message has been sent.\nMouad shall come back to you as soon as possible."}
            </p>
            <Link to="/" className="thank-you-link">
                Go back home
            </Link>
            <div className="signature">&lt;/&gt;</div>
        </div>
    </div>
);

export default ThankYou;

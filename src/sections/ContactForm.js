// ContactForm.jsx
import "../styles/ContactForm.css";
import React from 'react';
function ContactForm() {
    return (React.createElement("div", { className: "ContactFormWrapper", id: "contactForm" },
        React.createElement("div", { className: "ContactFormMain" },
            React.createElement("div", { className: "ContactFormTop" },
                React.createElement("h1", null, "want to chat more?"),
                React.createElement("h2", null, "Connect with Mouad"),
                React.createElement("p", null, "I understand you may have a unique experience and needs, let's connect and discuss them more and how I can bring the best value to your team")),
            React.createElement("div", { className: "ContactFormBottom" },
                React.createElement("form", { className: "ContactForm", action: "https://formsubmit.co/1a2cc62ea165052e652e4ef169f02b44", method: "POST" },
                    React.createElement("div", { className: "fieldGroup" },
                        React.createElement("label", { htmlFor: "fullName" }, "FULL NAME"),
                        React.createElement("input", { id: "fullName", type: "text", name: "name", placeholder: "Type Your Name", required: true })),
                    React.createElement("div", { className: "fieldGroup" },
                        React.createElement("label", { htmlFor: "email" }, "EMAIL ADDRESS*"),
                        React.createElement("input", { id: "email", type: "email", name: "email", placeholder: "Type Your Email", required: true })),
                    React.createElement("div", { className: "fieldGroup" },
                        React.createElement("label", { htmlFor: "company" }, "COMPANY NAME*"),
                        React.createElement("input", { id: "company", type: "text", name: "company", placeholder: "Type Your Company Name", required: true })),
                    React.createElement("div", { className: "fieldGroup" },
                        React.createElement("label", { htmlFor: "message" }, "MESSAGE*"),
                        React.createElement("textarea", { id: "message", name: "message", placeholder: "Drop Me A Line </>", required: true })),
                    React.createElement("input", { type: "hidden", name: "_next", value: "https://mouadJs.dev/thank-you" }),
                    React.createElement("input", { type: "hidden", name: "_captcha", value: "false" }),
                    React.createElement("button", { type: "submit" }, "Send Message"))))));
}
export default ContactForm;

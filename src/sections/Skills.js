import React from 'react';
import "../styles/Skills.css";
const skillCategories = [
    {
        title: 'Languages',
        items: ['TypeScript', 'JavaScript (ES6+)', 'C++', 'Python']
    },
    {
        title: 'Front-End',
        items: ['React.js', 'CSS & Sass', 'Motion Design / Animations']
    },
    {
        title: 'Back-End',
        items: ['NestJS / Node.js', 'Express.js', 'GraphQL & REST', 'Socket.IO']
    },
    {
        title: 'Data & DevOps',
        items: ['PostgreSQL', 'MongoDB', 'Docker & CI/CD', 'Git / GitHub Actions']
    },
];
const practices = [
    {
        title: 'Debugging Mindset -',
        description: 'Systematic, patient tracing to find & squash bugs fast.'
    },
    {
        title: 'Problem Decomposition -',
        description: 'Breaking complex problems into clear, manageable tasks.'
    },
    {
        title: 'Resourcefulness -',
        description: 'Finding creative, efficient solutions within constraints.'
    },
    {
        title: 'Code Reviews & Feedback -',
        description: 'Constructive, detailed feedback to grow the entire team.'
    },
    {
        title: 'User Empathy -',
        description: 'Consistently putting end-user experience first.'
    },
    {
        title: 'Learning & Curiosity -',
        description: 'Continuous exploration of new tools & techniques.'
    },
];
export default function Skills() {
    return (React.createElement("div", { className: "SkillsMain", id: "mindset" },
        React.createElement("div", { className: "SkillsBox" },
            React.createElement("div", { className: "SkillsLeft" },
                React.createElement("h2", null, "Toolbox"),
                React.createElement("p", null, "My Core Technologies")),
            React.createElement("div", { className: "SkillsRight" },
                React.createElement("div", { className: "skills-flex" }, skillCategories.map(cat => (React.createElement("div", { key: cat.title, className: "skill-card" },
                    React.createElement("h3", null, cat.title),
                    React.createElement("hr", { className: "skill-separator" }),
                    React.createElement("ul", null, cat.items.map(item => React.createElement("li", { key: item }, item))))))),
                React.createElement("div", { className: "practices-card" },
                    React.createElement("h3", null, "Core Mindset"),
                    React.createElement("hr", { className: "skill-separator" }),
                    React.createElement("div", { className: "practices-grid" }, practices.map(p => (React.createElement("div", { key: p.title, className: "practices-item" },
                        React.createElement("span", { className: "practice-icon" }, "\u2713 "),
                        React.createElement("strong", { className: "bolderComforta" },
                            p.title,
                            " "),
                        React.createElement("span", null, p.description))))))))));
}

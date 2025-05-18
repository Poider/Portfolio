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
        title: 'Prototyping',
        description: 'Validate ideas fast with clickable MVPs in under 48 hours.'
    },
    {
        title: 'Scalable Architecture',
        description: 'Design systems that handle 10× growth without a rewrite.'
    },
    {
        title: 'Clean Code Standards',
        description: 'Enforce SOLID principles & consistent style for maintainability.'
    },
    {
        title: 'Performance Tuning',
        description: 'Profile hotspots & cut load-times by 30%+.'
    },
    {
        title: 'Test-Driven Development',
        description: 'Write tests first to drive spec-clear, regression-proof code.'
    },
    {
        title: 'Data-Driven Decisions',
        description: 'Use real metrics & analytics to steer feature priorities.'
    }
];

export default function Skills() {
    return (
        <div className="SkillsMain">
            <div className="SkillsBox">
                <div className="SkillsLeft">
                    <h2>Toolbox</h2>
                    <p>My Core Technologies</p>
                </div>

                <div className="SkillsRight">
                    <div className="skills-flex">
                        {skillCategories.map(cat => (
                            <div key={cat.title} className="skill-card">
                                <h3>{cat.title}</h3>
                                <hr className="skill-separator" />
                                <ul>
                                    {cat.items.map(item => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
                        ))}

                        {/* your “last item” with 6 practicess */}
                        </div>
                       
                        
                        <div className="practices-card">
                            <h3>Core Practices</h3>
                            <hr className="skill-separator" />
                            <div className="practices-grid">
                            {practices.map(p => (
                                <div key={p.title} className="practices-item">
                                    <span className="practice-icon">✓ </span>
                                    <strong className="bolderComforta">{p.title} </strong>
                                    <span>{p.description}</span>
                                </div>
                            ))}
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

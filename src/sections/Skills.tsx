import React from 'react';
import "../styles/Skills.css";

const skillCategories = [
    {
        title: 'Languages',
        items: ['TypeScript', 'JavaScript (ES6+)', 'C++', 'PHP', 'Python' ]
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
    return (
        <div className="SkillsMain" id="mindset">
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
                            <h3>Core Mindset</h3>
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

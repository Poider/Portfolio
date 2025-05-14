import React from 'react';
import "../styles/Skills.css";

const skills = [
    { name: 'ReactJs', icon: null },
    { name: 'TypeScript', icon: null },
    { name: 'NestJs | Node.js', icon: null },
    { name: 'PostgreSQL', icon: null },
    { name: 'MongoDb', icon: null },
    { name: 'Docker', icon: null },
    { name: 'C++', icon: null },
    { name: 'Python', icon: null },
];

function Skills() {
    return (
        <div className="SkillsMain">
            <div className="SkillsBox">
                <div className="SkillsLeft">
                    <h2>Skills</h2>
                    <p>What I bring to the table</p>
                    <p className="SkillsBlurb">
                        With these tools I build fast, reliable full-stack apps—from sleek UIs to rock-solid APIs.
                    </p>
                </div>

                <div className="SkillsRight">
                    <ul className="SkillsList">
                        {skills.map(skill => (
                            <li key={skill.name} className="SkillItem">
                                <div className="SkillIcon">{skill.icon}</div>
                                <span>{skill.name}</span>
                            </li>
                        ))}

                        {/* special grid item */}
                        <li className="SkillGrid">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="SkillPlaceholder">
                                    Placeholdeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar {i + 1}
                                </div>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;

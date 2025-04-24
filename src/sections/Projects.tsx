// src/components/Projects.jsx
import React from 'react';
import "../styles/Projects.css";

const Projects = () => (
    <div className="ProjectsMain">
        <h2>My Projects</h2>
        <div className="ProjectBoxes">
            {["Project 1","Project 2","Project 3","Project 4"].map((title, idx) => (
                <div key={idx} className="ProjectBox">
                    <h3>{title}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            ))}
        </div>

    </div>
);

export default Projects;

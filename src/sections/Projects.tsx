// src/components/Projects.jsx
import React, { useState } from 'react';
import "../styles/Projects.css";
import Modal from "../components/ProjectsModal.tsx"
import compose from "../assets/project-icons/compose.png";
import pingpong from "../assets/project-icons/pingpong.png";
import raytracing from  "../assets/project-icons/raytracing.png";
import webserver from "../assets/project-icons/web-server.png";

const projectsData = [
    {
        title: `RealTime WebApp`,
        image: pingpong,
        codeUrl: "https://github.com/your/project1",
    },
    {
        title: "Ray Tracing Reality",
        image: raytracing,
        codeUrl: "https://github.com/your/project2",
    },
    {
        title: "HTTP/TCP Server",
        image:  webserver,
        codeUrl: "https://github.com/your/project3",
    },
    {
        title: "Dock Orchestrator",
        image: compose,
        codeUrl: "https://github.com/your/project4",
    }
];



const Projects = () => {
    const [openProject, setOpenProject] = useState(null);

    return (
        <div className="ProjectsMain">
            <h2>My Projects</h2>
            <div className="ProjectBoxes">
                {projectsData.map((project, idx) => (
                    <div key={idx} className="ProjectBox">
                        <h3>{project.title}</h3>
                        <img
                            className="ProjectImage"
                            src={project.image}
                            alt={project.title}
                            style={{ maxWidth: "100%", borderRadius: "4px" }}
                        />

                        <div className="PBButtonsWrapper">
                            <a
                                className="CodeButton"
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                &lt;/&gt;
                            </a>
                            <button
                                className="PreviewButton"
                                onClick={() => setOpenProject(project)}
                            >
                                Preview
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={!!openProject}
                onClose={() => setOpenProject(null)}
            >
                {openProject && (
                    <>
                        <h2>{openProject.title}</h2>
                        <img
                            src={openProject.image}
                            alt={openProject.title}
                            style={{ maxWidth: "100%", borderRadius: "4px" }}
                        />
                        <p style={{ marginTop: "1rem" }}>{openProject.details}</p>
                    </>
                )}
            </Modal>
            <a
            className="more-projects"
            href="https://github.com/Poider"
            target="_blank"
            rel="noopener noreferrer"
            >
            More projects on&nbsp;GitHub&nbsp;→
            </a>

            {/*animation divs ->  */}
            {/*<div className={"testing"}> test test</div>*/}
        </div>

    );
};

export default Projects;

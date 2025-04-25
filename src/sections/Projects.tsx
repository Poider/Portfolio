// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import "../styles/Projects.css";
import Modal from "../components/ProjectsModal.tsx";
import compose from "../assets/project-icons/compose.png";
import pingpong from "../assets/project-icons/pingpong.png";
import raytracing from "../assets/project-icons/raytracing.png";
import webserver from "../assets/project-icons/web-server.png";

const projectsData = [
    { title: "RealTime WebApp",     slug: "RealTimeWebApp",     image: pingpong,     codeUrl: "https://github.com/your/project1" },
    { title: "Ray Tracing Reality", slug: "RayTracingReality",  image: raytracing,   codeUrl: "https://github.com/your/project2" },
    { title: "HTTP/TCP Server",     slug: "HTTPTCPServer",      image: webserver,    codeUrl: "https://github.com/your/project3" },
    { title: "Dock Orchestrator",   slug: "DockOrchestrator",   image: compose,      codeUrl: "https://github.com/your/project4" }
];

const Projects = () => {
    const [openProject, setOpenProject] = useState(null);
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const [isWide, setIsWide] = useState(window.innerWidth > 870);

    // track window width
    useEffect(() => {
        const onResize = () => setIsWide(window.innerWidth > 870);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const hovered = hoveredIdx !== null ? projectsData[hoveredIdx] : null;

    return (
        <div className="ProjectsMain">
            {/* only show these on desktop widths */}
            {isWide && hovered && (
                <div className={`${hovered.slug}_details1 wrapper upperProjectDetails`}>
                    <h4>{hovered.title} Details</h4>
                    <p>— some extra info or buttons</p>
                </div>
            )}

            <h2>My Projects</h2>
            <div className="ProjectBoxes">
                {projectsData.map((proj, idx) => (
                    <div
                        key={proj.slug}
                        className="ProjectBox"
                        onMouseEnter={() => isWide && setHoveredIdx(idx)}
                        onMouseLeave={() => isWide && setHoveredIdx(null)}
                    >
                        <h3>{proj.title}</h3>
                        <img className="ProjectImage" src={proj.image} alt={proj.title} />
                        <div className="PBButtonsWrapper">
                            <a
                                className="CodeButton"
                                href={proj.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                &lt;/&gt;
                            </a>
                            <button
                                className="PreviewButton"
                                onClick={() => setOpenProject(proj)}
                            >
                                Preview
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal isOpen={!!openProject} onClose={() => setOpenProject(null)}>
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

            {isWide && hovered && (
                <div className={`${hovered.slug}_details2 wrapper bottomProjectDetails`}>
                    <h4>{hovered.title} Details</h4>
                    <p>— some extra info or buttons</p>
                </div>
            )}
        </div>
    );
};

export default Projects;

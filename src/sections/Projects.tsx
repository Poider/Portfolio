// src/components/Projects.jsx
import React, { useState, useEffect, lazy, Suspense } from 'react';
import "../styles/Projects.css";
import Modal from "../components/ProjectsModal.tsx";
import compose from "../assets/project-icons/compose.png";
import pingpong from "../assets/project-icons/pingpong.png";
import raytracing from "../assets/project-icons/raytracing.png";
import webserver from "../assets/project-icons/web-server.png";

import RayTracerHoverTop from "../components/projectsHover/RayTracerHoverTop";
import RayTracerHoverBottom from "../components/projectsHover/RayTracerHoverBottom";
import webAppHover from "../components/projectsHover/WebAppHover";
import HttpHover from "../components/projectsHover/HttpHover";
import DockerHoverBottom from "../components/projectsHover/DockerHoverBottom";
import DockerHoverUpper from "../components/projectsHover/DockerHoverUpper";



// lazy imports of your preview modules (they must default-export a component)
const WebAppPreview = lazy(() => import('../components/projectsPreview/WebAppPreview'))
const RayTracingPreview = lazy(() => import('../components/projectsPreview/RayTracingPreview'))
const HTTPPreview = lazy(() => import('../components/projectsPreview/HTTPPreview'))
const DockerPreview = lazy(() => import('../components/projectsPreview/DockerPreview'))

const projectsData = [
    {
        title: "RealTime WebApp",
        slug: "RealTimeWebApp",
        image: pingpong,
        codeUrl: "https://github.com/Poider/PingPong-Web-App",
        detailsUpper: null,
        detailsBottom: webAppHover,
        preview: WebAppPreview,
    },
    {
        title: "Ray Tracing Reality",
        slug: "RayTracingReality",
        image: raytracing,
        codeUrl: "https://github.com/Poider/3D-RayTracer-Engine",
        detailsUpper: RayTracerHoverTop,
        detailsBottom: RayTracerHoverBottom,
        preview: RayTracingPreview,
    },
    {
        title: "HTTP/TCP Server",
        slug: "HTTPTCPServer",
        image: webserver,
        codeUrl: "https://github.com/Poider/High-Performance-Cpp-Web-Server-Inspired-by-Nginx",
        detailsUpper: null,
        detailsBottom: HttpHover,
        preview: HTTPPreview,
    },
    {
        title: "Dock Orchestrator",
        slug: "DockOrchestrator",
        image: compose,
        codeUrl: "https://github.com/Poider/Inception-Dockerized-Solutions",
        detailsUpper: DockerHoverUpper,
        detailsBottom: DockerHoverBottom,
        preview: DockerPreview,
    },
]


const Projects = () => {
    const [openProject, setOpenProject] = useState(null);
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const [isWide, setIsWide] = useState(window.innerWidth > 1008);

    // track window width
    useEffect(() => {
        const onResize = () => setIsWide(window.innerWidth > 1008);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const hovered = hoveredIdx !== null ? projectsData[hoveredIdx] : null;

    return (
        <>

        
            <div className="ProjectsMain"  >
            {/* only show these on desktop widths */}
            {isWide && hovered && (
                <div className={`${hovered.slug}_details1 detailswrapper upperProjectDetails`}>
                   
                    {hovered.detailsUpper && <hovered.detailsUpper />}
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
                        <Suspense >
                         
                            {/* grab the lazy-loaded component and render it */}
                            {React.createElement(openProject.preview)}
                        </Suspense>
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
                <div className={`${hovered.slug}_details2 detailswrapper bottomProjectDetails`}>
                    {hovered.detailsBottom && <hovered.detailsBottom />}
                    
                </div>
            )}
            </div>
        </>
    );
};

export default Projects;

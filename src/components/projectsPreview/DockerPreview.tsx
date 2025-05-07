import React from "react";
import { useFadeInOnceLoaded } from "../../hooks/useFadeInOnceLoaded";
import "./Previews.css";          // shared variables & utilities
import "./DockerPreview.css";     // this file’s grid + extras
import architectureImg from "../../assets/project-images/preview/dockerArchitecture.png";

function DockerPreview() {
    const fadeClass = useFadeInOnceLoaded(20);

    return (
        <div className={`DockerModalContentInner ${fadeClass}`}>
            <div className="gridTitle">
                <h2 className="ModalTitle">Dockerized Environment</h2>
            </div>

            <div className="gridSubtitle">
                <p className="ModalSubtitle">
                    Multi-Service Infrastructure with NGINX, MariaDB, Redis & More
                    <p className="Approximation">Approx 210h</p>
                </p>
            </div>

            <section className="ModalSection gridFeatures">
                <h3>
                    <span className="icon">✨</span>Key Features
                </h3>
                <ul className="ModalFeatureList">
                    <li>
                        <span className="featureIcon">🛠️</span>
                        <strong>Docker Compose Orchestration</strong> — Multi-container infra with isolated services
                    </li>
                    <li>
                        <span className="featureIcon">🔐</span>
                        <strong>NGINX + TLSv1.3</strong> — Secure reverse proxy with HTTPS-only access
                    </li>
                    <li>
                        <span className="featureIcon">💾</span>
                        <strong>MariaDB Database</strong> — Data persistence for WordPress content
                    </li>
                    <li>
                        <span className="featureIcon">📦</span>
                        <strong>Volumes for Files & DB</strong> — Persistent volumes for site & database
                    </li>
                    <li>
                        <span className="featureIcon">⚙️</span>
                        <strong>Env-Based Config</strong> — Fully configured via .env variables
                    </li>
                    <li>
                        <span className="featureIcon">♻️</span>
                        <strong>Crash Recovery</strong> — Automatic container restart on failure
                    </li>

                </ul>
            </section>

            <section className="ModalSection gridOverview">
                <h3>
                    <span className="icon">📖</span>Project Overview
                </h3>
                <p className="ModalParagraph">
                    This project is a containerized infra for WordPress deployment, built using Docker Compose as part of the 42 Network’s Inception system admin challenge. It combines a custom reverse proxy, database, CMS, and optional services—all managed through modular Dockerfiles.
                </p>
            </section>

            <section className="ModalSection gridTech">
                <h3>
                    <span className="icon">🔐</span>Tech Stack
                </h3>
                <div className="ModalTechTags">
                    <span>Docker & Compose</span>
                    <span>WordPress + php-fpm</span>
                    <span>NGINX (TLSv1.2/1.3)</span>
                    <span>MariaDB</span>
                    <span>Redis</span>
                    <span>Adminer, phpMyAdmin</span>
                </div>
            </section>

            <section className="ModalSection gridArchitecture">
                <h3>
                    <span className="icon">🧱</span>Architecture Preview
                </h3>
                <img
                    src={architectureImg}
                    alt="Docker architecture diagram"
                    className="ModalArchitectureImage"
                />
            </section>

            <section className="ModalSection gridRun">
                <h3>
                    <span className="icon">⚙️</span>How to Run
                </h3>
                <pre className="ModalCode">
                    <code>
                        git clone https://github.com/Poider//Inception-Dockerized-Solutions.git
                        && cd Inception-Dockerized-Solutions/srcs
                    </code>
                </pre>
                <div className="ModalHint">
                    For a comprehensive guide, check my&nbsp;
                    <a
                        href="https://github.com/Poider/Inception-Dockerized-Solutions"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    &nbsp;for a step-by-step walkthrough, or&nbsp;
                    <a href="https://www.linkedin.com/in/mouadelammari/" target="_blank">contact me</a>&nbsp;for any questions.
                </div>
            </section>
            <section className="ModalSection gridBackground">
                <h3>
                    <span className="icon" style={{ marginBottom: "0.4rem" }}>✒️</span>Project Background
                </h3>
                <p className="ModalParagraph ParagraphBoxShadowing">
                    Back in time docker orchestration felt like black magic (DevOps wasn’t my turf), but I rolled up my sleeves, learned the ropes, and got it deployed end-to-end. The project served as a crash-course in infrastructure that came in clutch when I later launched Transcendence.
                </p>
            
            </section>

            <div className="ModalActions">
                <a href="https://github.com/Poider/Inception-Dockerized-Solutions" target="_blank" className="ModalBtn">
                    <span className="icon">🔗</span>
                    GitHub
                </a>

            </div>
   
        </div>
    );
}

export default DockerPreview;

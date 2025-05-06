import React from 'react';
import { useState, useEffect } from "react";
import "./Previews.css";
import pingpongGIF from "../../assets/project-images/preview/pingpongGIF.gif";
import channelsInterface from "../../assets/project-images/preview/channelsInterface.png";
import loginPage from "../../assets/project-images/preview/loginPage.png";
import leaderBoard from "../../assets/project-images/preview/leaderBoard.png";
import chatInterface from "../../assets/project-images/preview/chatInterface.png";


import { useFadeInOnceLoaded } from "../../hooks/useFadeInOnceLoaded";

function WebAppPreview() {
    const fadeClass = useFadeInOnceLoaded(10);

    return (
        <div className={`webAppModalContentInner ${fadeClass}`}>
            <h2 className="ModalTitle">Ping Pong Web App</h2>
   
            <p className="ModalSubtitle"
     
            >
                A Real-Time Multiplayer Experience Built with NestJS & Three.js
            </p>

            <section className="ModalSection gridPreview">
                <h3>
                    <span className="icon">🎮</span>
                    Live Gameplay Preview
                </h3>
                <img
                    src={pingpongGIF}
                    alt="Ping pong animation"
                    width={400}
                    height="auto"
                    loading="lazy"
                    
                    style={{ display: 'block', marginLeft: '0.2rem' }}
                />
            </section>

            <section className="ModalSection gridFeatures">
                <h3>
                    <span className="icon">✨</span>
                    Key Features
                </h3>
                <ul className="ModalFeatureList">
                    <li>
                        <span className="featureIcon">🧠</span>
                        <strong>Matchmaking</strong> – Real-time player pairing
                    </li>
                    <li>
                        <span className="featureIcon">🔐</span>
                        <strong>OAuth2 + 2FA</strong> – Secure login with optional 2FA
                    </li>
                    <li>
                        <span className="featureIcon">💬</span>
                        <strong>Advanced Chat</strong> – Public/private rooms, DMs, mute/ban
                    </li>
                    <li>
                        <span className="featureIcon">🏆</span>
                        <strong>Leaderboards</strong> – Track wins, losses, ladder ranks
                    </li>
                    <li>
                        <span className="featureIcon">🎨</span>
                        <strong>3D Gameplay</strong> – Rendered with Three.js & Blender
                    </li>
                    <li>
                        <span className="featureIcon">🐳</span>
                        <strong>Dockerized Setup</strong> – One-liner deployment
                    </li>
                </ul>
            </section>

            <section className="ModalSection gridTech">
                <h3>
                    <span className="icon">🧰</span>
                    Tech Stack
                </h3>
                <div className="ModalTechTags">
                    <span>NestJS</span>
                    <span>React</span>
                    <span>Socket.IO</span>
                    <span>PostgreSQL</span>
                    <span>Docker</span>
                    <span>JWT</span>
                    <span>Three.js</span>
                    <span>OAuth2</span>
                </div>
            </section>

            <section className="ModalSection gridScreenshots">
                <h3>
                    <span className="icon">📸</span>
                    Screenshots
                </h3>
                <div className="webAppModalScreenshots">
                    <figure>
                        <img className="webAppPreviewSS" src={loginPage} alt="Login Page" />
                        <figcaption>Login Page</figcaption>
                    </figure>
                    <figure>
                        <img className="webAppPreviewSS"  src={chatInterface} alt="Chat Interface" />
                        <figcaption>Chat Interface</figcaption>
                    </figure>
                    <figure>
                        <img className="webAppPreviewSS"  src={channelsInterface} alt="Channels Interface" />
                        <figcaption>Channels Interface</figcaption>
                    </figure>
                    <figure>
                        <img className="webAppPreviewSS"  src={leaderBoard} alt="Leaderboard" />
                        <figcaption>Leaderboard</figcaption>
                    </figure>
                </div>

            </section>

            <section className="ModalSection gridSecurity">
                <h3>
                    <span className="icon">🔒</span>
                    Security & Architecture
                </h3>
                <ul className="webAppModalSecurityList">
                    <li>Passwords hashed with bcrypt</li>
                    <li>JWT for token-based authentication</li>
                    <li>Input validation & SQL injection prevention</li>
                    <li>Rootless Docker deployment</li>
                </ul>
            </section>

            <section className="ModalSection gridRun">
                <h3>
                    <span className="icon">⚙️</span>
                    How to Run
                </h3>
                <pre className="ModalCode">
                    <code>
                        git clone https://github.com/yourname/project
                        ./init_docker.sh
                        cd postgresql && docker-compose up -d
                        npm run start:dev
                    </code>
                </pre>
            </section>

            <section className="ModalSection gridBackground">
                <h3>
                    <span className="icon">📖</span>
                    Project Background
                </h3>
                <p className="ModalParagraph">
                    Built during the ft_transcendence challenge, this full-stack app combines secure authentication, multiplayer gameplay, real-time chat, and containerized deployment — all built from scratch.
                </p>
            </section>

            <div className="ModalActions">
                <a href="https://github.com/yourname/project" className="ModalBtn">
                    <span className="icon">🔗</span>
                    GitHub
                </a>
               
            </div>
        </div>
    );
}

export default WebAppPreview;

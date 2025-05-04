import React from 'react';
import { useState, useEffect } from "react";
import "./WebAppPreview.css";
import pingpongGIF from "../../assets/project-images/webapp/pingpongGIF.gif"
import { useFadeInOnceLoaded } from "../../hooks/useFadeInOnceLoaded"; 
function WebAppPreview() {
  
    const fadeClass = useFadeInOnceLoaded(10); //10ms then fade in (so it first render at 0)
    return (
        <div className={`webAppModalContentInner ${fadeClass}`}>
            <h2 className="webAppModalTitle">Ping Pong Web App</h2>
            <p className="webAppModalSubtitle">A Real-Time Multiplayer Experience Built with NestJS & Three.js</p>

            <section className="webAppModalSection">
                <h3>🎮 Live Gameplay Preview</h3>
                <img
                    src={pingpongGIF}
                    alt="Ping pong animation"
                    width={480} 
                    height={"auto"}
                    loading="lazy"             // optional: lazy-load the GIF
                    style={{ display: 'block' }}
                />

            </section>

            <section className="webAppModalSection">
                <h3>✨ Key Features</h3>
                <ul className="webAppModalFeatureList">
                    <li>🧠 <strong>Matchmaking</strong> – Real-time player pairing</li>
                    <li>🔐 <strong>OAuth2 + 2FA</strong> – Secure login with optional 2FA</li>
                    <li>💬 <strong>Advanced Chat</strong> – Public/private rooms, DMs, mute/ban</li>
                    <li>🏆 <strong>Leaderboards</strong> – Track wins, losses, ladder ranks</li>
                    <li>🎨 <strong>3D Gameplay</strong> – Rendered with Three.js & Blender</li>
                    <li>🐳 <strong>Dockerized Setup</strong> – One-liner deployment</li>
                </ul>
            </section>

            <section className="webAppModalSection">
                <h3>🧰 Tech Stack</h3>
                <div className="webAppModalTechTags">
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

            <section className="webAppModalSection">
                <h3>📸 Screenshots</h3>
                <div className="webAppModalScreenshots">
                    <img src="screenshot1.png" alt="Login Page" />
                    <img src="screenshot2.png" alt="Chat Interface" />
                    <img src="screenshot3.png" alt="Leaderboard" />
                    <img src="screenshot4.png" alt="Game History" />
                </div>
            </section>

            <section className="webAppModalSection">
                <h3>🔒 Security & Architecture</h3>
                <ul className="webAppModalSecurityList">
                    <li>Passwords hashed with bcrypt</li>
                    <li>JWT for token-based authentication</li>
                    <li>Input validation & SQL injection prevention</li>
                    <li>Rootless Docker deployment</li>
                </ul>
            </section>

            <section className="webAppModalSection">
                <h3>⚙️ How to Run</h3>
                <pre className="webAppModalCode"><code>
                    git clone https://github.com/yourname/project
                    ./init_docker.sh
                    cd postgresql && docker-compose up -d
                    npm run start:dev
                </code></pre>
            </section>

            <section className="webAppModalSection">
                <h3>📖 Project Background</h3>
                <p className="webAppModalParagraph">
                    Built during the ft_transcendence challenge, this full-stack app combines secure authentication, multiplayer gameplay, real-time chat, and containerized deployment — all built from scratch.
                </p>
            </section>

            <div className="webAppModalActions">
                <a href="https://github.com/yourname/project" className="webAppModalBtn">🔗 GitHub</a>
                <a href="https://your-demo-link.com" className="webAppModalBtn">▶️ Demo</a>
            </div>
        </div>


  );
}

export default WebAppPreview;
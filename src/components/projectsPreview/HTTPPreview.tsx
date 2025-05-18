import React from "react";
import { useFadeInOnceLoaded } from "../../hooks/useFadeInOnceLoaded";
import "./Previews.css";
import "./HTTPPreview.css";
import listingImg from "../../assets/project-images/preview/webserver-listing.png";
import siegeImg from "../../assets/project-images/preview/webserver-siege.png";
import configImg from "../../assets/project-images/preview/webserver-config.png";

function WebServerPreview() {
    const fadeClass = useFadeInOnceLoaded(20);

    return (
        <div className={`WebServerModalContentInner ${fadeClass}`}>
            <div className="gridTitle">
                <h2 className="ModalTitle">High Performance Web Server</h2>
            </div>

            <div className="gridSubtitle">
                <p
                    className="ModalSubtitle">Inspired by Nginx — Built From Scratch
                    <span className="Approximation">Approx 300h</span>
                </p>
            </div>

            <section className="ModalSection gridFeatures">
                <h3>
                    <span className="icon">✨</span>
                    Key Features
                </h3>
                <ul className="ModalFeatureList">
                    <li>🗄️ <strong>Select-Based Event Loop</strong> — All I/O via a single non-blocking select()</li>
                    <li>🔄 <strong>Multi-Threading + Forks</strong> — Hybrid concurrency for scalability & CGI</li>
                    <li>🛣️ <strong>Static & Dynamic Routing</strong> — Serves HTML/CSS/JS and executes PHP/Python via CGI</li>
                    <li>📄 <strong>Custom Config File</strong> — Nginx-style routing, file uploads, method control</li>
                    <li>🔒 <strong>SSL Support</strong> — HTTPS via OpenSSL</li>
                    <li>📂 <strong>Autoindex & Error Pages</strong> — Missing files, bad requests, full directory rendering</li>
                    <li>📬 <strong>GET, POST, DELETE</strong> — Fully implemented HTTP/1.1 method handling</li>
                </ul>
            </section>

            <section className="ModalSection gridExplanation">
                <h3      
                >
                    <span className="icon" 
                        style={{ marginBottom: "0.4rem" }}
                    >🔍</span>
                    What is an HTTP Server?
                </h3>
                <p className="ModalParagraph HTTPModalParagraph">
                    An HTTP server is the backbone of the web — it listens for incoming browser requests and serves files or executes scripts in response. This project implements core HTTP/1.1 behavior, mimicking the resilience and flexibility of Nginx while staying fully hand-coded in C++.
                </p>
            </section>

            <section className="ModalSection gridTech">
                <h3>
                    <span className="icon">🔐</span>
                    Tech Stack
                </h3>
                <div className="ModalTechTags">
                    <span>C++11</span>
                    <span>Event-Driven I/O (select)</span>
                    <span>Multithreading</span>
                    <span>Process Forking</span>
                    <span>OpenSSL (HTTPS)</span>
                    <span>CGI Support (PHP & Python)</span>
                    <span>Custom Config Parser</span>
                    <span>HTTP/1.1 Compliance</span>
                </div>
            </section>

            <section className="ModalSection gridScreenshots">
                <h3>
                    <span className="icon">📸</span>
                    Screenshots
                </h3>
                <div className="ModalScreenshots" id="HTTPScreenshots">
                    <figure>
                        <img src={listingImg} alt="Directory listing view" />
                        <figcaption className="ModalCaption">Directory listing view</figcaption>
                    </figure>
                    <figure>
                        <img src={siegeImg} alt="Siege benchmark output" />
                        <figcaption className="ModalCaption">Siege benchmark output</figcaption>
                    </figure>
                    <figure>
                        <img src={configImg} alt="Config file snippet" />
                        <figcaption className="ModalCaption">Config file snippet</figcaption>
                    </figure>
                </div>
            </section>


            <section className="ModalSection gridRun">
                <h3>
                    <span className="icon">⚙️</span>
                    How to Run
                </h3>
                <pre className="ModalCode">
                    <code className="preserveWhiteSpaces">
                        git clone https://github.com/Poider/High-Performance-Cpp-Web-Server-Inspired-by-Nginx.git
                        && cd High-Performance-Cpp-Web-Server-Inspired-by-Nginx
                        && make
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
                    <span className="icon" style={{ marginBottom: "0.4rem" }}>✒️</span>
                    Project Background
                </h3>
                <p className="ModalParagraph ParagraphBoxShadowing">
                    Developed during the 42 Network’s “webserv” project, this server required implementing nearly every part of a production-ready HTTP server — from parsing and routing to sockets and threads. The goal was resilience under pressure: no memory leaks, no crashes, no blocking I/O.
                </p>
            </section>

            <div className="ModalActions">
                <a href="https://github.com/Poider/High-Performance-Cpp-Web-Server-Inspired-by-Nginx" target="_blank" className="ModalBtn">
                    <span >🔗 </span>
                    GitHub
                </a>

            </div>
        </div>
    );
}

export default WebServerPreview;

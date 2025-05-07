import React from "react";
import { useFadeInOnceLoaded } from "../../hooks/useFadeInOnceLoaded";
import diagram from "../../assets/project-images/preview/rayTracingDiagram.png";
import reflectiveImgs from "../../assets/project-images/preview/reflective.png";
import "./Previews.css";
import "./RayTracingPreview.css";

function RayTracingPreview() {
    const fadeClass = useFadeInOnceLoaded(20);

    return (
        <div className={`RayTracerModalContentInner ${fadeClass}`}>

            <div className="gridTitle">
                <h2 className="ModalTitle">Ray Tracing Reality</h2>
            </div>

            <div className="gridSubtitle">
                <p className="ModalSubtitle">
                    One of My Most Complex Creations
                    <p className="Approximation">Approx 400h</p>
                </p>
            </div>

            <section className="ModalSection gridFeatures">
                <h3>
                    <span className="icon">✨</span>
                    Key Features
                </h3>
                <ul className="ModalFeatureList">
                    <li>
                        <span className="featureIcon">💎</span>
                        <strong>Reflection & Refraction</strong> — Accurate light bending & mirror effects via recursive rays
                    </li>
                    <li>
                        <span className="featureIcon">📷</span>
                        <strong>Depth of Field</strong> — Simulated camera blur for photorealistic focus
                    </li>
                    <li>
                        <span className="featureIcon">😎</span>
                        <strong>Shadows</strong> — Ray-traced occlusion shadows
                    </li>
                    <li>
                        <span className="featureIcon">🖍️</span>
                        <strong>Anti-Aliasing</strong> — Smooth edge rendering using supersampling
                    </li>
                    <li>
                        <span className="featureIcon">◼️</span>
                        <strong>Pattern Mapping</strong> — Checkerboards, rings, stripes, gradients
                    </li>
                    <li>
                        <span className="featureIcon">✏️</span>
                        <strong>Custom Scene Files</strong> — Define objects, materials, and lighting with .rt configs
                    </li>
                </ul>
            </section>

            <section className="ModalSection gridExplanation">
                <h3>
                    <span className="icon"
                        style={{ marginBottom: "0.4rem" }}
                    >🔍</span>
                    What is Ray Tracing?
                </h3>
                <p className="RayTracerParagraph">
                    Ray tracing is a rendering technique that simulates how light behaves in the real world. It works by casting rays from a camera into a 3D scene and calculating how they bounce off surfaces, pass through transparent materials, or get blocked to create shadows. This method produces highly realistic images with effects like reflection, refraction, soft lighting, and accurate shadows — all based on the physics of light.
                </p>
                <img src={diagram} alt="Ray Tracing Diagram" className="RayTracerImage" id="diagram" />
            </section>

            <section className="ModalSection gridScreenshots">
                <h3>
                    <span className="icon">📸</span>
                    Renders & Outputs
                </h3>
                <img src={reflectiveImgs} alt="Refraction Preview" className="ModalGroupedImage" />
                <p id="RefractionCaption" className="ModalCaption">Example: Index of Refraction from 1.0 to 2.0</p>
            </section>

            <section className="ModalSection gridTech">
                <h3>
                    <span className="icon">🧰</span>
                    Tech Stack
                </h3>
                <div className="ModalTechTags">
                    <span>C</span>
                    <span>MiniLibX (X11)</span>
                    <span>Manual Memory Management</span>
                    <span>Raw Ray Tracing</span>
                    <span>Multistage Renderer</span>
                </div>
            </section>

            <section className="ModalSection gridRun">
                <h3>
                    <span className="icon">⚙️</span>
                    How to Run
                </h3>
                <pre className="ModalCode">
                    <code>
                        git clone https://github.com/Poider/miniRt-3D-RayTracer.git
                        && cd miniRt-3D-RayTracer/miniRt/
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
                    <span className="icon " style={{ marginBottom: "0.4rem" }}>✒️</span>
                    Project Background
                </h3>
                <p className="ModalParagraph ParagraphBoxShadowing">
                    This ray-tracing engine is one of my proudest creations—its output feels majestic even before you dig into the code. I gravitate toward visual projects because they resonate: people appreciate something beautiful they can see. Fueled by extensive math and physics (my strong suits), I built this engine entirely from scratch—no external frameworks—handling raw mathematical calculations, pixel-by-pixel rendering, recursive ray logic, and realistic light simulation. It remains one of my most complex and rewarding low-level projects.
                </p>
            </section>

            <div className="ModalActions">
                <a href="https://github.com/Poider/3D-RayTracer-Engine" className="ModalBtn">
                    <span className="icon">🔗</span>
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default RayTracingPreview;

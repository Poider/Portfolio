import squaresCornel from "../../assets/project-images/raytracer/SquaresCornel.png";
import RT from "../../assets/project-images/raytracer/RT.png";
import React from "react";
import "./RayTracerHover.css";
function RayTracerHoverTop() {
    return (React.createElement(React.Fragment, null,
        React.createElement("img", { src: RT, alt: "Ray Tracer", className: "RayTracerHoverImage", id: "RT" }),
        React.createElement("img", { src: squaresCornel, alt: "Ray Tracer", className: "RayTracerHoverImage", id: "squaresCornel" })));
}
export default RayTracerHoverTop;

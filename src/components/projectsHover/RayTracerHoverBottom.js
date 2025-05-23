import minecraft from "../../assets/project-images/raytracer/minecraft.png";
import cornelBox from "../../assets/project-images/raytracer/cornel.png";
import React from "react";
import "./RayTracerHover.css";
function RayTracerHoverBottom() {
    return (React.createElement(React.Fragment, null,
        React.createElement("img", { src: minecraft, alt: "Ray Tracer", className: "RayTracerHoverImage", id: "minecraft" }),
        React.createElement("img", { src: cornelBox, alt: "Ray Tracer", className: "RayTracerHoverImage", id: "cornelBox" })));
}
export default RayTracerHoverBottom;

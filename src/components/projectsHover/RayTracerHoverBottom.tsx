import minecraft from "../../assets/project-images/raytracer/minecraft.png"
import cornelBox from "../../assets/project-images/raytracer/cornel.png"
import React from "react";
import "./RayTracerHover.css"
function RayTracerHoverBottom() {
  return (
      <>
          <img src={minecraft} alt="Ray Tracer" className="RayTracerHoverImage" id="minecraft" />
          <img src={cornelBox} alt="Ray Tracer" className="RayTracerHoverImage" id="cornelBox" />
      </>
  );
}

export default RayTracerHoverBottom;
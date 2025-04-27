import squaresCornel from "../../assets/project-images/raytracer/SquaresCornel.png"
import RT from "../../assets/project-images/raytracer/RT.png"
import React from "react";
import "./RayTracerHoverTop.css"
function RayTracerHover() {
  return (
      <>
          <img src={RT} alt="Ray Tracer" className="RayTracerHoverImage" id="RT" />
          <img src={squaresCornel} alt="Ray Tracer" className="RayTracerHoverImage" id="squaresCornel" />


      </>
  );
}

export default RayTracerHover;
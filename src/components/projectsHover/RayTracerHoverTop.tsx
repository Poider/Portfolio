import squaresCornel from "../../assets/project-images/raytracer/SquaresCornel.png"
import RT from "../../assets/project-images/raytracer/RT.png"
import React from "react";
import "./RayTracerHover.css"
function RayTracerHoverTop() {
  return (
      <>
          <img src={RT} alt="Ray Tracer" className="RayTracerHoverImage" id="RT" />
          <img src={squaresCornel} alt="Ray Tracer" className="RayTracerHoverImage" id="squaresCornel" />


      </>
  );
}

export default RayTracerHoverTop;
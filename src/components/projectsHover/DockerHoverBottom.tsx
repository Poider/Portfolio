import React from 'react';
import "./DockerHover.css"; 
function DockerHoverBottom() {
  return (
      <div className="DockerHoverWrapper">
          <div className="DockerHoverDivs" id="docker3">Reverse Proxy: NGINX</div>
          <div className="DockerHoverDivs" id="docker4">Orchestrated with Docker Compose</div>
          <div className="DockerHoverDivs" id="docker5">Cache: Redis</div>
      </div>
  );
}

export default DockerHoverBottom;
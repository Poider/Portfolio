import React from 'react';
import "./DockerHover.css";
function DockerHoverBottom() {
    return (React.createElement("div", { className: "DockerHoverWrapper" },
        React.createElement("div", { className: "DockerHoverDivs", id: "docker3" }, "Reverse Proxy: NGINX"),
        React.createElement("div", { className: "DockerHoverDivs", id: "docker4" }, "Orchestrated with Docker Compose"),
        React.createElement("div", { className: "DockerHoverDivs", id: "docker5" }, "Cache: Redis")));
}
export default DockerHoverBottom;

import React from 'react';
import "./DockerHover.css";
function DockerHoverUpper() {
    return (React.createElement("div", { className: "DockerHoverWrapper" },
        React.createElement("div", { className: "DockerHoverDivs", id: "docker1" }, "Content Management: WordPress"),
        React.createElement("div", { className: "DockerHoverDivs", id: "docker2" }, "Database Engine: MariaDB")));
}
export default DockerHoverUpper;

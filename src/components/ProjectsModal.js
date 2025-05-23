// src/components/Modal.jsx
import React from 'react';
import "../styles/ProjectsModal.css";
const ProjectsModal = ({ isOpen, onClose, children }) => {
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "ModalOverlay", onClick: onClose },
        React.createElement("div", { className: "ModalContent", onClick: e => e.stopPropagation() },
            React.createElement("button", { className: "ModalClose", onClick: onClose }, "\u00D7"),
            children)));
};
export default ProjectsModal;

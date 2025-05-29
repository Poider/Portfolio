// src/components/Modal.jsx
import React from 'react';
import "../styles/projectsModal.css";

const ProjectsModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="ModalOverlay" onClick={onClose}>
            <div className="ModalContent" onClick={e => e.stopPropagation()}>
                <button className="ModalClose" onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>
    );
};

export default ProjectsModal;

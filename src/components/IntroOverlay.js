import React, { useState, useEffect } from 'react';
import '../styles/IntroOverlay.css';
function IntroOverlay() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const update = () => setShow(window.innerWidth > 870);
        update(); // set initial state
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    if (!show)
        return null;
    return React.createElement("div", { className: "intro-overlay" });
}
export default IntroOverlay;

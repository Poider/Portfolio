// 📌 Header component for navigation and branding
import React, { useState, useRef, useEffect } from 'react';
import '../styles/Header.css';
import Logo from './Logo';
import projects_icon from '../assets/project_icon.png';
import resume from '../assets/resume.png';
import mindset from '../assets/mindset.png';
import portfolio_icon from '../assets/portfolio_icon.png';
import testimonials_icon from '../assets/testimonials_icon.png';
import magic_wand_icon from '../assets/magic_wand_icon.png';
import who from '../assets/who.png';
import bringwhat from '../assets/bringwhat.png';
const NavBar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isWide, setIsWide] = useState(() => window.innerWidth > 870);
    const portfolioRef = useRef(null);
    const aboutRef = useRef(null);
    const dropdownRef = useRef(null);
    const prevDropdownRef = useRef(null);
    useEffect(() => {
        const onResize = () => setIsWide(window.innerWidth > 870);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    // 1) click outside → close
    useEffect(() => {
        const onClick = (e) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                portfolioRef.current &&
                !portfolioRef.current.contains(e.target) &&
                aboutRef.current &&
                !aboutRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, []);
    // helper: compute x/y of whichever button is active
    const getPosition = () => {
        const btn = openDropdown === 'about' ? aboutRef.current : portfolioRef.current;
        const { left, bottom } = btn.getBoundingClientRect();
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const offsetX = 5.5 * rootFontSize;
        const offsetY = 0.6 * rootFontSize;
        return { x: left - offsetX, y: bottom + offsetY };
    };
    // helper: move by transform; animate = transition or not
    const updatePosition = (animate) => {
        const dd = dropdownRef.current;
        if (!dd)
            return;
        if (animate)
            dd.classList.remove('disable-transform');
        else
            dd.classList.add('disable-transform');
        const { x, y } = getPosition();
        dd.style.transform = `translate(${x}px, ${y}px)`;
    };
    // 2) on openDropdown change
    useEffect(() => {
        const dd = dropdownRef.current;
        const prev = prevDropdownRef.current;
        if (!openDropdown) {
            // closed
            dd.classList.remove('visible');
        }
        else if (prev) {
            // switching → just slide
            updatePosition(true);
        }
        else {
            // first open → jump + fade + slide
            const { x, y } = getPosition();
            dd.classList.add('disable-transform');
            dd.style.transform = `translate(${x}px, ${y - 10}px)`;
            dd.classList.add('visible');
            requestAnimationFrame(() => requestAnimationFrame(() => {
                dd.classList.remove('disable-transform');
                dd.style.transform = `translate(${x}px, ${y}px)`;
            }));
        }
        prevDropdownRef.current = openDropdown;
    }, [openDropdown]);
    // 3) on resize, if open → reposition with animation
    useEffect(() => {
        const onResize = () => {
            if (openDropdown)
                updatePosition(true);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [openDropdown]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "HeaderWrapper" },
            React.createElement(Logo, null),
            React.createElement("div", { className: `NavBarContainer ${isWide ? ' fadeInAfterLogo' : ''}` },
                React.createElement("nav", { className: "NavBar" },
                    React.createElement("ul", null,
                        React.createElement("li", { className: isWide ? 'fadeTranslateAfterLogo' : 'noDisplay', style: { position: 'relative' } },
                            React.createElement("a", { className: "HeaderButtons  ", href: "#portfolio", ref: portfolioRef, onClick: (e) => {
                                    e.preventDefault();
                                    //this is that if the dropdown is already open, it will close it, else it changes it to portfolio
                                    setOpenDropdown((prev) => prev === 'portfolio' ? null : 'portfolio');
                                } },
                                "Portfolio",
                                React.createElement("svg", { id: "portfolio-down", className: `arrow ${openDropdown === 'portfolio' ? 'rotated' : ''}`, viewBox: "0 0 2 2" },
                                    React.createElement("g", { clipPath: "url(#clip0_702_4)" },
                                        React.createElement("path", { d: "M0.399902 0.700195L1.04093 1.35404L1.68195 0.700195", stroke: "black", strokeWidth: "0.205128", strokeLinecap: "round", strokeLinejoin: "round" })),
                                    React.createElement("defs", null,
                                        React.createElement("clipPath", { id: "clip0_702_4" },
                                            React.createElement("rect", { width: "2", height: "2", fill: "white" })))))),
                        React.createElement("li", { className: isWide ? 'fadeTranslateAfterLogo' : 'noDisplay', style: { position: 'relative' } },
                            React.createElement("a", { className: "HeaderButtons", href: "#about", ref: aboutRef, onClick: (e) => {
                                    e.preventDefault();
                                    setOpenDropdown((prev) => prev === 'about' ? null : 'about');
                                } },
                                "About",
                                React.createElement("svg", { id: "portfolio-down", className: `arrow ${openDropdown === 'about' ? 'rotated' : ''}`, viewBox: "0 0 2 2" },
                                    React.createElement("g", { clipPath: "url(#clip0_702_4)" },
                                        React.createElement("path", { d: "M0.399902 0.700195L1.04093 1.35404L1.68195 0.700195", stroke: "black", strokeWidth: "0.205128", strokeLinecap: "round", strokeLinejoin: "round" })),
                                    React.createElement("defs", null,
                                        React.createElement("clipPath", { id: "clip0_702_4" },
                                            React.createElement("rect", { width: "2", height: "2", fill: "white" })))))),
                        React.createElement("li", { className: isWide ? 'fadeTranslateAfterLogo' : '' },
                            React.createElement("a", { className: "HeaderButtons", href: "#skills" }, "Skills")),
                        React.createElement("li", { className: isWide ? 'fadeTranslateAfterLogo' : '' },
                            React.createElement("a", { className: "HeaderButtons", href: "#contactForm" }, "Contact"))))),
            React.createElement("div", { ref: dropdownRef, 
                // gives it either null portfolio or about
                className: `DropdownGrid ${openDropdown !== null && openDropdown !== void 0 ? openDropdown : ''} ${openDropdown ? 'visible' : ''}` },
                React.createElement("div", { className: "dropdown-portfolio" },
                    React.createElement("a", { href: "#projects" },
                        React.createElement("img", { src: projects_icon, alt: "" }),
                        " Projects"),
                    React.createElement("a", { href: "#experience" },
                        React.createElement("img", { src: portfolio_icon, alt: "" }),
                        " Experience"),
                    React.createElement("a", { href: "#testimonials" },
                        React.createElement("img", { src: testimonials_icon, alt: "" }),
                        " Testimonials"),
                    React.createElement("a", { href: "#mindset" },
                        React.createElement("img", { src: mindset, alt: "" }),
                        " Mindset"),
                    React.createElement("a", { href: "#resume" },
                        React.createElement("img", { src: resume, alt: "" }),
                        " Resume"),
                    React.createElement("a", { href: "#creamy-bits", style: { opacity: 0.5 } },
                        React.createElement("img", { src: magic_wand_icon, alt: "" }),
                        " ",
                        React.createElement("i", null, "Creamy Bits"))),
                React.createElement("div", { className: "dropdown-about" },
                    React.createElement("a", { href: "#who" },
                        React.createElement("img", { src: who, alt: "" }),
                        " Who's Mouad"),
                    React.createElement("a", { href: "#bringwhat" },
                        React.createElement("img", { src: bringwhat, alt: "" }),
                        " What I bring"))))));
};
NavBar.displayName = 'NavBar';
export default React.memo(NavBar);

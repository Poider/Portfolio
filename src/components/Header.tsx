// 📌 Header component for navigation and branding
import React, { useState, useRef, useEffect } from 'react';
import '../styles/Header.css';
import Logo from './Logo';
import projects_icon from '../assets/project_icon.png';
import mentorship_icon from '../assets/mentorship_icon.png';
import bar_chart_icon from '../assets/bar_chart_icon.png';
import portfolio_icon from '../assets/portfolio_icon.png';
import testimonials_icon from '../assets/testimonials_icon.png';
import magic_wand_icon from '../assets/magic_wand_icon.png';
import who from '../assets/who.png';
import bringwhat from '../assets/bringwhat.png';


type DropdownKey = 'portfolio' | 'about' | null;

const NavBar: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
    const [isWide, setIsWide] = useState(() => window.innerWidth > 870);

    const portfolioRef = useRef<HTMLAnchorElement>(null);
    const aboutRef = useRef<HTMLAnchorElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const prevDropdownRef = useRef<DropdownKey>(null);


    useEffect(() => {
        const onResize = () => setIsWide(window.innerWidth > 870);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // 1) click outside → close
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node) &&
                portfolioRef.current &&
                !portfolioRef.current.contains(e.target as Node) &&
                aboutRef.current &&
                !aboutRef.current.contains(e.target as Node)
            ) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, []);

    // helper: compute x/y of whichever button is active
    const getPosition = () => {
        const btn =
            openDropdown === 'about' ? aboutRef.current! : portfolioRef.current!;
        const { left, bottom } = btn.getBoundingClientRect();
        const rootFontSize = parseFloat(
            getComputedStyle(document.documentElement).fontSize
        );
        const offsetX = 5.5 * rootFontSize;
        const offsetY = 0.6 * rootFontSize;
        return { x: left - offsetX, y: bottom + offsetY };
    };

    // helper: move by transform; animate = transition or not
    const updatePosition = (animate: boolean) => {
        const dd = dropdownRef.current;
        if (!dd) return;
        if (animate) dd.classList.remove('disable-transform');
        else dd.classList.add('disable-transform');
        const { x, y } = getPosition();
        dd.style.transform = `translate(${x}px, ${y}px)`;
    };

    // 2) on openDropdown change
    useEffect(() => {
        const dd = dropdownRef.current!;
        const prev = prevDropdownRef.current;

        if (!openDropdown) {
            // closed
            dd.classList.remove('visible');
        } else if (prev) {
            // switching → just slide
            updatePosition(true);
        } else {
            // first open → jump + fade + slide
            const { x, y } = getPosition();
            dd.classList.add('disable-transform');
            dd.style.transform = `translate(${x}px, ${y - 10}px)`;
            dd.classList.add('visible');
            requestAnimationFrame(() =>
                requestAnimationFrame(() => {
                    dd.classList.remove('disable-transform');
                    dd.style.transform = `translate(${x}px, ${y}px)`;
                })
            );
        }
        prevDropdownRef.current = openDropdown;
    }, [openDropdown]);

    // 3) on resize, if open → reposition with animation
    useEffect(() => {
        const onResize = () => {
            if (openDropdown) updatePosition(true);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [openDropdown]);

    return (
        <>
            <div className="HeaderWrapper">
                <Logo />

                <div className={`NavBarContainer ${isWide ? ' fadeInAfterLogo' : ''}`}>
                    <nav className="NavBar">
                        <ul>
                            {/* Portfolio trigger */}
                            <li
                                className={isWide ? 'fadeTranslateAfterLogo' : 'noDisplay'}
                                style={{ position: 'relative' }}
                            >
                                <a 
                                    className="HeaderButtons  "
                                    href="#portfolio"
                                    ref={portfolioRef}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        //this is that if the dropdown is already open, it will close it, else it changes it to portfolio
                                        setOpenDropdown((prev) =>
                                            prev === 'portfolio' ? null : 'portfolio'
                                        );
                                    }}
                                >
                                    Portfolio
                                    <svg
                                        id="portfolio-down"
                                        className={`arrow ${
                                            openDropdown === 'portfolio' ? 'rotated' : ''
                                        }`}
                                        viewBox="0 0 2 2"
                                    >
                                        <g clipPath="url(#clip0_702_4)">
                                            <path
                                                d="M0.399902 0.700195L1.04093 1.35404L1.68195 0.700195"
                                                stroke="black"
                                                strokeWidth="0.205128"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_702_4">
                                                <rect width="2" height="2" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            {/* About trigger */}
                            <li
                                className={isWide ? 'fadeTranslateAfterLogo' : 'noDisplay'}
                                style={{ position: 'relative' }}
                            >
                                <a
                                    className="HeaderButtons"
                                    href="#about"
                                    ref={aboutRef}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpenDropdown((prev) =>
                                            prev === 'about' ? null : 'about'
                                        );
                                    }}
                                >
                                    About
                                    <svg
                                        id="portfolio-down"
                                        className={`arrow ${
                                            openDropdown === 'about' ? 'rotated' : ''
                                        }`}
                                        viewBox="0 0 2 2"
                                    >
                                        <g clipPath="url(#clip0_702_4)">
                                            <path
                                                d="M0.399902 0.700195L1.04093 1.35404L1.68195 0.700195"
                                                stroke="black"
                                                strokeWidth="0.205128"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_702_4">
                                                <rect width="2" height="2" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            {/* Static links */}
                            <li
                                className={isWide ? 'fadeTranslateAfterLogo' : ''}
                            >
                                <a className="HeaderButtons" href="#skills">
                                    Skills
                                </a>
                            </li>
                            <li className={isWide ? 'fadeTranslateAfterLogo' : ''}>
                                <a className="HeaderButtons" href="#contactForm">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Single dropdown container with both menus */}
                <div
                    ref={dropdownRef}
                    // gives it either null portfolio or about
                    className={`DropdownGrid ${openDropdown ?? ''} ${
                        openDropdown ? 'visible' : ''
                    }`}
                >
                    {/* Portfolio menu */}
                    <div className="dropdown-portfolio">
                        <a href="#projects">
                            <img src={projects_icon} alt="" /> Projects
                        </a>
                        <a href="#experience">
                            <img src={portfolio_icon} alt="" /> Experience
                        </a>
                      
                        <a href="#testimonials">
                            <img src={testimonials_icon} alt="" /> Testimonials
                        </a>
                       
                        <a href="#mindset">
                            <img src={bar_chart_icon} alt="" /> Mindset
                        </a>
                        <a href="#resume">
                            <img src={mentorship_icon} alt="" /> Resume
                        </a>
                        <a href="#creamy-bits">
                            <img src={magic_wand_icon} alt="" /> <i>Creamy Bits</i>
                        </a>
                    </div>

                    {/* About menu */}
                    <div className="dropdown-about">
                        <a href="#who"><img src={who} alt="" /> Who's Mouad</a>
                        <a href="#bringwhat"><img src={bringwhat} alt="" /> What I bring</a>
                    </div>
                </div>
            </div>
        </>
    );
};

NavBar.displayName = 'NavBar';
export default React.memo(NavBar);

// 📌 Header component for navigation and branding
import React, { useState, useRef, useEffect } from 'react';
import '../styles/Header.css';
import Logo from './Logo';

const NavBar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                if (!buttonRef.current || !dropdownRef.current) return;

                const rect = buttonRef.current.getBoundingClientRect();
                const dropdown = dropdownRef.current;
                dropdown.style.transform = `translate(${rect.left}px, ${rect.top + 10}px)`;
                console.log(rect)
            }, 150);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!buttonRef.current || !dropdownRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        console.log(rect)
        dropdownRef.current.style.transform = `translate(${rect.left}px, ${rect.top + 10}px)`;
    }, [dropdownOpen]);

    return (
        <div className="HeaderWrapper">
            <div className="Header fadeInAfterLogo" />
            <Logo />

            <div className="NavBarContainer fadeTranslateAfterLogo">
                <nav className="NavBar">
                    <ul>
                        <li>
                            <a
                                className="HeaderButtons"
                                href="#portfolio"
                                ref={buttonRef}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setDropdownOpen(!dropdownOpen);
                                }}
                            >
                                Portfolio ⌄
                            </a>
                            {dropdownOpen && (
                                <div ref={dropdownRef} className="DropdownBox">
                                    <a href="#projects">⭐ Featured Projects</a>
                                    <a href="#all-projects">🧪 All Projects</a>
                                    <a href="#outcomes">📈 Outcomes</a>
                                </div>
                            )}
                        </li>
                        <li><a className="HeaderButtons" href="#skills">Skills</a></li>
                        <li><a className="HeaderButtons" href="#about_me">About me</a></li>
                        <li><a className="HeaderButtons" href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

NavBar.displayName = 'NavBar';
export default React.memo(NavBar);

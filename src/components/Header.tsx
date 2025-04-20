// 📌 Header component for navigation and branding
import React, { useState, useRef, useEffect } from 'react';
import '../styles/Header.css';
import Logo from './Logo';

const NavBar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown if clicking outside
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

    // Reposition dropdown on window resize
    useEffect(() => {
        const updateDropdownPosition = () => {
            if (!buttonRef.current || !dropdownRef.current) return;

            const rect = buttonRef.current.getBoundingClientRect();
            const dropdown = dropdownRef.current;

            dropdown.style.left = `calc(${rect.left}px - 7rem)`;
            dropdown.style.top = `${rect.bottom}px`;

        };

        const handleResize = () => {
            // Debounce resize to avoid too many calls
            clearTimeout((handleResize as any)._timeout);
            (handleResize as any)._timeout = setTimeout(updateDropdownPosition, 100);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Position dropdown when it opens
    useEffect(() => {
        if (dropdownOpen) {
            const rect = buttonRef.current?.getBoundingClientRect();
            const dropdown = dropdownRef.current;

            if (rect && dropdown) {
                dropdown.style.left = `calc(${rect.left}px - 7rem)`;
                dropdown.style.top = `${rect.bottom}px`;
            }
        }
    }, [dropdownOpen]);

    return (
        <>
            <div className="HeaderWrapper">
                <Logo />

                <div className="NavBarContainer fadeInAfterLogo">
                    <nav className="NavBar">
                        <ul>
                            <li className="fadeTranslateAfterLogo" style={{ position: 'relative' }}>
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
                            </li>
                            <li className="fadeTranslateAfterLogo"><a className="HeaderButtons" href="#skills">Skills</a></li>
                            <li className="fadeTranslateAfterLogo"><a className="HeaderButtons" href="#about_me">About me</a></li>
                            <li className="fadeTranslateAfterLogo"><a className="HeaderButtons" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div
                    ref={dropdownRef}
                    className={`DropdownBox ${dropdownOpen ? 'visible' : ''}`}
                >
                    <a href="#projects">⭐ Featured Projects</a>
                    <a href="#all-projects">🧪 All Projects</a>
                    <a href="#outcomes">📈 Outcomes</a>
                </div>
            </div>
        </>
    );
};

NavBar.displayName = 'NavBar';
export default React.memo(NavBar);

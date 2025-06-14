import React, { useRef, useState, useEffect } from 'react';
import './nav.css';
import { Menu, X, Sun, Moon, Home, User, Briefcase, Mail } from 'lucide-react';
import { useTheme } from '../../ThemeContext.js';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef();
    const overlayRef = useRef();

    const { isDarkMode, toggleTheme } = useTheme();

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openMenu = () => {
        if (menuRef.current) {
            menuRef.current.classList.add('open');
        }
        if (overlayRef.current) {
            overlayRef.current.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.classList.remove('open');
        }
        if (overlayRef.current) {
            overlayRef.current.classList.remove('active');
        }
        document.body.style.overflow = 'unset';
    };

    const handleNavClick = (sectionId) => {
        setMenu(sectionId);
        closeMenu();
    };

    const navItems = [
        { id: 'home', label: 'Home', icon: Home, href: '#home' },
        { id: 'About', label: 'About me', icon: User, href: '#About' },
        { id: 'service', label: 'Services', icon: Briefcase, href: '#service' },
        { id: 'Contact', label: 'Contact', icon: Mail, href: '#Contact' },
    ];

    return (
        <>
            <div 
                ref={overlayRef}
                className="nav-overlay" 
                onClick={closeMenu}
            ></div>
            
            <div 
                id="Navbar" 
                className={`navbar ${isDarkMode ? 'dark' : ''} ${isScrolled ? 'scrolled' : ''}`}
            >
                <a href="#home" className="navbar-logo">
                    Portfolio
                </a>

                <div className="nav-menu" ref={menuRef}>
                    <ul>
                        <X 
                            className="nav-mob-close" 
                            onClick={closeMenu}
                        />
                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <li key={item.id}>
                                    <a 
                                        className={`anchor-link ${menu === item.id ? 'active' : ''}`}
                                        href={item.href}
                                        onClick={() => handleNavClick(item.id)}
                                    >
                                        <IconComponent className="nav-icon" />
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    
                    <div className="nav-connect-mobile">
                        <a 
                            className="anchor-connect" 
                            href="#Contact"
                            onClick={() => handleNavClick('Contact')}
                        >
                            <Mail className="nav-icon" />
                            Connect with me
                        </a>
                    </div>
                </div>

                <div className="nav-controls">
                    <button 
                        className="dark-mode-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? <Sun /> : <Moon />}
                    </button>
                    
                    <Menu 
                        className="nav-mob-open" 
                        onClick={openMenu}
                    />

                    <div className="nav-connect">
                        <a 
                            className="anchor-connect" 
                            href="#Contact"
                            onClick={() => handleNavClick('Contact')}
                        >
                            Connect with me
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar; 
import { useState } from 'react';
import '../App.css';
import './Navbar.css';

function Navbar() {
    {/* const [isSearchActive, setIsSearchActive] = useState(false); */ }
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <nav className="navbar">
                <a href="/" className="logo">tomayhawk</a>

                <div className="search-bar">
                    <input type="text" placeholder="search-input" className="search-input" />
                    <button className="search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </button>
                </div>

                <ul className="nav-links">
                    <li><a href="about">About</a></li>
                    <li><a href="my-manager">MyManager</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
                <div className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>
            </nav>

            {isMenuOpen && (
                <ul className="mobile-menu">
                    <li><a href="/about">About</a></li>
                    <li><a href="/my-manager">MyManager</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            )}
        </>
    )
}

export default Navbar;
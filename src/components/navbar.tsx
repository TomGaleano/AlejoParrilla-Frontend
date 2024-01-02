import React, { useState } from 'react';
import {FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function Navbar () {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="header">
            <div className="header__logo">
                <img src="https://www.freelogodesign.org/file/app/client/thumb/8e4f0b6c-3c4e-4a0e-8a3f-5e0f1c2c1d3b_200x200.png?1609299883257" alt="logo" />
            </div>
            <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <a href="/" className="header__nav-link">Inicio</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/about" className="header__nav-link">Menú</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/contact" className="header__nav-link">Sobre nosotros</a>
                    </li>
                </ul>
                <button className="header__nav-close-button" onClick={handleToggle}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="header__toggle-button" onClick={handleToggle}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navbar;
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logo from "../assets/LOGOO-300x114.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" /> {/* Use the imported image here */}
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
                    <FaTimes />
                </button>
            </nav>
            <button className="header__toggle-button" onClick={handleToggle}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar;
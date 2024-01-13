import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logo from "../assets/LOGOO-300x114.png";

const VIEWS = ['Inicio', 'Nosotros', 'Menú', 'Contacto', 'Restaurantes'];

function Navbar({ setView }: { setView: (view: string) => void }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (view: string) => {
        setView(view);
        handleToggle();
    };
    return (
        <header className="header">
            <div className="header__logo">
                <img className="logo" src={logo} alt="Logo" /> {/* Use the imported image here */}
            </div>
            <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
                <ul className="header__nav-list">
                    {VIEWS.map(view => (
                        <li key={view} className="header__nav-item">
                            <a onClick={() => handleLinkClick(view)} className="header__nav-link">{view}</a>
                        </li>
                    ))}
                </ul>
                <button className='button__header'>Agenda tu mesa</button>
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
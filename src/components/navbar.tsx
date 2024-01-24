import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logo from "../assets/LOGOO-300x114.png";

const VIEWS = ['Inicio', 'Nosotros', 'Menú', 'Contacto'];

const restaurantes = [
    { id: 1, label: "Diver Plaza" },
    { id: 2, label: "Nuestro Bogotá" },
    { id: 3, label: "Buró 25" },
    { id: 4, label: "Fontibón" },
];

const initialSelectedItem = restaurantes.find(restaurant => restaurant.label === "Nuestro Bogotá");

function Navbar({ setView }: { setView: (view: string) => void }) {

    //Estas constantes manejan el estado del menú de hamburguesa en mobile
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    //Estas constantes manejan el estado del desplegable de restaurantes
    const [isSelectRestaurantOpen, setIsSelectRestaurantOpen] = useState(false);
    const [items] = useState(restaurantes);
    const [selectedItem, setSelectedItem] = useState(initialSelectedItem);

    const toggleDropdown = () => setIsSelectRestaurantOpen(!isSelectRestaurantOpen);

    const handleItemClick = (item: { id: number; label: string } | undefined) => {
        setSelectedItem(item);
        handleToggle();
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
                <div className='dropdown'>
                    <div className='dropdown-header' onClick={toggleDropdown}>
                        Estás pidiendo en {selectedItem ? items.find(item => item.id === selectedItem?.id)?.label : "Select your destination"}
                        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
                    </div>
                    <div className={`dropdown-body ${isOpen && 'open'}`}>
                        {items.map(item => (
                            <div
                                className="dropdown-item"
                                onClick={() => handleItemClick(item)}
                                id={item.id.toString()}
                            >
                                <span className={`dropdown-item-dot ${item.id === selectedItem?.id && 'selected'}`}>• </span>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
                <button className="header__nav-close-button" onClick={handleToggle}>
                    <FaTimes />
                </button>
            </nav>
            <button className={`header__nav-open-button ${isOpen ? 'hide' : ''}`} onClick={handleToggle}>
                <FaBars />
            </button>
        </header >
    )
}

export default Navbar;
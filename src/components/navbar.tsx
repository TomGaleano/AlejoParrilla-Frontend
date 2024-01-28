import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logo from "../assets/LOGOO-300x114.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

const VIEWS = ['Inicio', 'Nosotros', 'Menú', 'Contacto'];



function Navbar({ 
    setView, 
    selectedItem, 
    setSelectedItem, 
    restaurantes 
  }: { 
    setView: (view: string) => void, 
    selectedItem: { id: number; label: string } | undefined, 
    setSelectedItem: (item: { id: number; label: string } | undefined) => void,
    restaurantes: { id: number; label: string }[]
  }) {

    
    //Estas constantes manejan el estado del menú de hamburguesa en mobile
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    //Estas constantes manejan el estado del desplegable de restaurantes
    const [isSelectRestaurantOpen, setIsSelectRestaurantOpen] = useState(false);
    const [items] = useState(restaurantes);

    const toggleDropdown = () => setIsSelectRestaurantOpen(!isSelectRestaurantOpen);

    const handleItemClick = (item: { id: number; label: string } | undefined) => {
        setSelectedItem(item);
        toggleDropdown();
    };

    const handleLinkClick = (view: string) => {
        setView(view);
        handleToggle();
    };

    return (
        <header className="header">
            <div className="header__logo">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
                <ul className="header__nav-list">
                    {VIEWS.map(view => (
                        <li key={view} className="header__nav-item">
                            <a onClick={() => handleLinkClick(view)} className="header__nav-link">{view}</a>
                        </li>
                    ))}
                </ul>
                <div className={`dropdown ${isSelectRestaurantOpen ? 'with-body' : ''}`}>
                    <div className='dropdown-header' onClick={toggleDropdown}>
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                        {selectedItem ? items.find(item => item.id === selectedItem?.id)?.label : " Selecciona"}
                        <i className={`fa fa-chevron-right icon ${isSelectRestaurantOpen && "open"}`}></i>
                    </div>
                    <div className={`dropdown-body ${isSelectRestaurantOpen && 'open'}`}>
                        {items.map(item => (
                            <div
                                className="dropdown-item"
                                onClick={() => handleItemClick(item)}
                                key={item.id.toString()}
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
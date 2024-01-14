import { useState, useEffect } from 'react';
import './Menu.css';
import "./Inicio.css";
import Carousal from "@itseasy21/react-elastic-carousel";

interface MenuItem {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    is_available: boolean;
}

function MenuGrid() {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [category, setCategory] = useState('Carnes');

    useEffect(() => {
        fetch(`http://localhost:3000/api/filtermenu?category=${category}`)
            .then(response => response.json())
            .then(data => setItems(data.data))
            .catch(error => console.error('Error:', error));
    }, [category]);

    return (
        <div className="home_container">
            <div className="column" >
                <h2 className="tit_alt">Nuestro menú</h2>
                <p>Nuestro menu tiene diferentes variedades de platos distribuidos entre carnes, pescados, comidas rapidas, bolws y demas.</p>
                <div className="menu">
                    <div className="category_selector">
                        <button
                            className={`menu_button ${category === 'Carnes' ? 'active' : ''}`}
                            onClick={() => setCategory('Carnes')}
                        >
                            Carnes
                        </button>
                        <button
                            className={`menu_button ${category === 'Bowls' ? 'active' : ''}`}
                            onClick={() => setCategory('Bowls')}
                        >
                            Bowls
                        </button>
                        <button
                            className={`menu_button ${category === 'Ensaladas' ? 'active' : ''}`}
                            onClick={() => setCategory('Ensaladas')}
                        >
                            Ensaladas
                        </button>
                        <button
                            className={`menu_button ${category === 'Pescados' ? 'active' : ''}`}
                            onClick={() => setCategory('Pescados')}
                        >
                            Pescados
                        </button>
                        <button
                            className={`menu_button ${category === 'Menu Infantil' ? 'active' : ''}`}
                            onClick={() => setCategory('Menu Infantil')}
                        >
                            Menu Infantil
                        </button>
                        <button
                            className={`menu_button ${category === 'Tipicos' ? 'active' : ''}`}
                            onClick={() => setCategory('Tipicos')}
                        >
                            Típicos
                        </button>
                    </div>
                    <Carousal isRTL={false} itemsToShow={4} itemsToScroll={4}>
                        {items.map(item => (
                            <div className="carousel-item" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="card_content">
                                    <h2 className="card_title">{item.name} - ${item.price}</h2>
                                    <p className="card_text">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </Carousal>
                </div>
            </div>
        </div>
    );
}

export default MenuGrid;
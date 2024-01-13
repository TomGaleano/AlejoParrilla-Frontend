import { useState, useEffect } from 'react';
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
    const categories = ['Carnes', 'Bowls', 'Ensaladas', 'Pescados', 'Menu Infantil', 'Típicos'];


    useEffect(() => {
        fetch(`http://localhost:3000/api/filtermenu?category=${category}`)
            .then(response => response.json())
            .then(data => setItems(data.data))
            .catch(error => console.error('Error:', error));
    }, [category]);

    return (
        <div className="home_container">
            <div className="column" >
                <h2 className="menu_title">Nuestro menú</h2>
                <p style={{ paddingLeft: '12vh', paddingRight: '12vh' }}>Nuestro menu tiene diferentes variedades de platos distribuidos entre carnes, pescados, comidas rapidas, bolws y demas.</p>
                <div className="menu">
                    <div className="menu_selector">
                        {categories.map((categoryItem) => (
                            <a
                                key={categoryItem}
                                className={`menu_button ${category === categoryItem ? 'active' : ''}`}
                                onClick={() => setCategory(categoryItem)}
                            >
                                {categoryItem}
                            </a>
                        ))}
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
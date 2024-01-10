import { useState, useEffect } from 'react';
import './Menu.css';

interface MenuItem {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    is_available: boolean;
}
interface MenuGridProps {
    category: string;
}
function MenuGrid({ category }: MenuGridProps) {
    const [items, setItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/filtermenu?category=${category}`)
            .then(response => response.json())
            .then(data => setItems(data.data))
            .catch(error => console.error('Error:', error));
    }, [category]);

    return (
        <div className="cards">
            {items.map(item => (
                <div key={item.id} className="cards_item">
                    <div className="card">
                        <div className="card_image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="card_content">
                            <h2 className="card_title">{item.name} - ${item.price}</h2>
                            <p className="card_text">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MenuGrid;
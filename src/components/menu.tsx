import { useState, useEffect } from 'react';
import './Menu.css';
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
        <Carousal isRTL={false} itemsToShow={4} itemsToScroll={4}>
        {items.map(item => (
            <div className= "carousel-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="card_content">
                    <h2 className="card_title">{item.name} - ${item.price}</h2>
                    <p className="card_text">{item.description}</p>
                </div>
            </div>
        ))}
    </Carousal>
    );
}

export default MenuGrid;
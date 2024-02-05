import { useState, useEffect } from 'react';
import "./beta.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import allMenu from '../../src/json/allmenu.json'; // Import the JSON file

interface MenuItem {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    is_available: boolean;
}

function SeeMenu() {
    const [category] = useState('Hamburguesas');
    const [items, setItems] = useState<MenuItem[]>([]);
    const itemsPerSlide = 6;
    const slides = [];

    useEffect(() => {
        // Filter the items from the JSON file by category
        const filteredItems = allMenu.filter(item => item.category === category);
        setItems(filteredItems);
    }, [category]);
    for (let i = 0; i < items.length; i += itemsPerSlide) {
        slides.push(items.slice(i, i + itemsPerSlide));
    }

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
        >
            {slides.map((slideItems, index) => (
                <SwiperSlide key={index}>
                    <div className="grid-container">
                        {slideItems.map((item) => (
                            <div className="menu_item">
                            <img src={item.image} alt={item.name} className="menu_image" />
                            <div className="menu_text">
                                <h3 className="menu_item_title">{item.name}</h3>
                                <p className="menu_item_description">{item.description}</p>
                                <p className="menu_item_price">Precio: ${item.price}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SeeMenu;
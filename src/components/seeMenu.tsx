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

interface SeeMenuProps {
    category?: string;
}

function SeeMenu({ category = 'Hamburguesas' }: SeeMenuProps) {
    const [items, setItems] = useState<MenuItem[]>([]);
    const itemsPerSlide = 6;
    const slides = [];

    useEffect(() => {
        const filteredItems = allMenu.filter(item => item.category === category);
        setItems(filteredItems);
    }, [category]);
    for (let i = 0; i < items.length; i += itemsPerSlide) {
        slides.push(items.slice(i, i + itemsPerSlide));
    }

    return (
        <div>
            <h1>{category}</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
            >
                {slides.map((slideItems, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid-container">
                            {slideItems.map((item) => (
                                <div className="">
                                    <img src={item.image} alt={item.name} className="" />
                                    <div className="">
                                        <h3 className="">{item.name}</h3>
                                        <p className="">{item.description}</p>
                                        <p className="">Precio: ${item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SeeMenu;
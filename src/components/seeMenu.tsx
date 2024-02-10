// @ts-nocheck

import { useState, useEffect, useRef } from 'react';
import "./beta.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-cube.min.css';
import allMenu from '../../src/json/allmenu.json';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



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
    const [slides, setSlides] = useState<MenuItem[][]>([]);
    const itemsPerSlide = 6;
    const swiperRef = useRef(null);

    useEffect(() => {
        const filteredItems = allMenu.filter(item => item.category === category);
        setItems(filteredItems);
    }, [category]);

    useEffect(() => {
        const newSlides = [];
        for (let i = 0; i < items.length; i += itemsPerSlide) {
            newSlides.push(items.slice(i, i + itemsPerSlide));
        }
        setSlides(newSlides);
    }, [items]);

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                key={2}
            >
                {slides.map((slideItems, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid-container" >
                            {slideItems.map((item) => (
                                <div className="newMenu_container" key={item.id} >
                                    <img src={item.image} alt={item.name} className="newMenu_image" />
                                    <div className="newMenu_subcontainer">
                                        <h3 className="newMenu_title">{item.name}</h3>
                                        <p className="newMenu_description">{item.description}</p>
                                        <p className="newMenu_price">Precio: ${item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

            <div className='swiper_controls'>
                <FontAwesomeIcon className="bento_navbutton" icon={faCircleChevronLeft} onClick={() => swiperRef.current?.slidePrev()}/>
                <FontAwesomeIcon className="bento_navbutton" icon={faCircleChevronRight} onClick={() => swiperRef.current?.slideNext()}/>
            </div>
        </div>
    );
}

export default SeeMenu;
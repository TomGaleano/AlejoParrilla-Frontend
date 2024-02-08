// @ts-nocheck

import "./beta.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import SeeMenu from "./seeMenu";
import { Swiper, SwiperSlide } from '../../node_modules/swiper/swiper-react';
import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-cube.min.css';

function NewMenu() {
    const [category, setCategory] = useState('Hamburguesas');
    const [isMenuActive, setMenuActive] = useState(false);
    const swiperRef = useRef(null);
    const handleClick = () => {
        setMenuActive(!isMenuActive);
    };

    return (
        <div className="newMenu">
            <h1>Menú</h1>
            {isMenuActive ? (
                <div className="bento_menu">
                    <div className="bento_menu_navbar">
                        <FontAwesomeIcon className="bento_navbar" icon={faCircleChevronLeft} onClick={handleClick} />
                        <h2 className="bento_title bento_navbar">{category}</h2>
                    </div>
                    <SeeMenu category={category} />
                </div>
            ) : (<div className="bento_display">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
                    key={1}
                    
                >
                    <SwiperSlide key={1}>
                        <div className={`primera_pagina `}>
                            <div className="bento_menu_1_top">
                                <div className="big_square bento_square" onClick={() => { setCategory('Hamburguesas'); handleClick(); }}>
                                    <img src="./images/menu_categories/alejoparrilla_category_hamburguesa.png" alt="Hamburguesas" className="bento_image category_hamburguesa" />
                                    <h3 className="bento_title">
                                        Hamburguesas
                                    </h3>
                                    <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                                </div>
                                <div className="small_square bento_square" onClick={() => { setCategory('Bowls'); handleClick(); }}>
                                    <img src="./images/menu_categories/alejoparrilla_category_bowls.webp" alt="Bowls" className="bento_image category_bowls" />
                                    <h3 className="bento_title">
                                        Bowls
                                    </h3>
                                    <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                                </div>
                                <div className="small_square bento_square" onClick={() => { setCategory('Rápidas'); handleClick(); }}>
                                    <img src="./images/menu_categories/alejoparrilla_category_rapidas.webp" alt="Rapidas" className="bento_image category_rapidas" />
                                    <h3 className="bento_title">
                                        Rápidas
                                    </h3>
                                    <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                                </div>
                            </div>
                            <div className="bento_menu_1_bottom">
                                <div className="small_square bento_square" onClick={() => { setCategory('Entradas'); handleClick(); }}>
                                    <img src="./images/menu_categories/alejoparrilla_category_entradas.webp" alt="Entradas" className="bento_image category_entradas" />
                                    <h3 className="bento_title">
                                        Entradas
                                    </h3>
                                    <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                                </div>
                                <div className="long_square bento_square" onClick={() => { setCategory('Sopas'); handleClick(); }}> {/* Eso de geometría no es lo mío */}
                                    <img src="./images/menu_categories/alejoparrilla_category_sopas.webp" alt="Sopas" className="bento_image category_sopas" />
                                    <h3 className="bento_title">
                                        Sopas
                                    </h3>
                                    <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={2}>
                        <div className={`segunda_pagina`}>
                            <div className="bento_menu_2">
                                <div className="tall_square bento_square" onClick={() => { setCategory('Bebidas'); handleClick(); }}> {/* No pregunten que es un tall square, solo déjenme sólo */}
                                    <img src="./images/menu_categories/alejoparrilla_category_bebidas.webp" alt="Bebidas" className="bento_image category_bebidas" />
                                    <h3 className="bento_title">
                                        Bebidas
                                    </h3>
                                    <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                                </div>
                                <div className="small_square_2 bento_square" onClick={() => { setCategory('Típicos'); handleClick(); }}>
                                    <img src="./images/menu_categories/alejoparrilla_category_tipicos.webp" alt="Tipicos" className="bento_image category_tipicos" />
                                    <h3 className="bento_title">
                                        Típicos
                                    </h3>
                                    <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                                </div>
                                <div className="small_square_2 bento_square" onClick={() => { setCategory('Postres'); handleClick(); }}>
                                    <img src="./images/menu_categories/alejoparrilla_category_postres.webp" alt="Postres" className="bento_image category_postres" />
                                    <h3 className="bento_title">
                                        Postres
                                    </h3>
                                    <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                                </div>
                                <div className="big_square_2 bento_square" onClick={() => { setCategory('Menú Infantil'); handleClick(); }}>
                                    <img src="./images/menu_categories/alejoparrilla_category_menu_infantil.webp" alt="Menú infantil" className="bento_image category_infantil" />
                                    <h3 className="bento_title">
                                        Menú Infantil
                                    </h3>
                                    <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='swiper_controls'>
                <FontAwesomeIcon className="bento_navbutton" icon={faCircleChevronLeft} onClick={() => swiperRef.current?.slidePrev()}/>
                <FontAwesomeIcon className="bento_navbutton" icon={faCircleChevronRight} onClick={() => swiperRef.current?.slideNext()}/>
            </div>
            </div>
            )}
        </div>
    );


}
export default NewMenu;
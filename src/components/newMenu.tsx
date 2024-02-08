import "./beta.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SeeMenu from "./seeMenu";

function NewMenu() {
    const [currentPage, setCurrentPage] = useState('primera_pagina');
    const [category, setCategory] = useState('Hamburguesas');
    const [isMenuActive, setMenuActive] = useState(false);
    const handleClick = () => {
        setMenuActive(!isMenuActive);
    };

    return (
        <div className="newMenu">
            {isMenuActive ? (
                <div className="bento_menu">
                    <div className="bento_menu_navbar">
                        <FontAwesomeIcon className="bento_navbar" icon={faCircleChevronLeft} onClick={handleClick} />
                        <h1 className="bento_title bento_navbar">{category}</h1>
                    </div>
                    <SeeMenu category={category} />
                </div>
            ) : (
                <div className="bento_grid">
                    <div className="bento_selector">
                        <div className="bento_option" onClick={() => setCurrentPage('primera_pagina')}>
                            <h2 className="bento_option_title">1<sup>ra</sup> página</h2>
                        </div>
                        <div className="bento_option" onClick={() => setCurrentPage('segunda_pagina')}>
                            <h2 className="bento_option_title">2<sup>da</sup> página</h2>
                        </div>
                    </div>
                    <div className={`primera_pagina ${currentPage === 'primera_pagina' ? 'show' : 'hide'}`}>
                        <div className="bento_menu_1_top">
                            <div className="big_square bento_square" onClick={() => { setCategory('Hamburguesas'); handleClick(); }}>
                                <img src="./images/menu_categories/alejoparrilla_category_hamburguesa.png" alt="Hamburguesas" className="bento_image" />
                                <h3 className="bento_title">
                                    Hamburguesas
                                </h3>
                                <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                            </div>
                            <div className="small_square bento_square" onClick={() => { setCategory('Bowls'); handleClick(); }}>
                                <img src="./images/menu_categories/alejoparrilla_category_bowls.webp" alt="Bowls" className="bento_image" style={{ width: '9vw' }} />
                                <h3 className="bento_title">
                                    Bowls
                                </h3>
                                <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                            </div>
                            <div className="small_square bento_square" onClick={() => { setCategory('Rápidas'); handleClick(); }}>
                                <img src="./images/menu_categories/alejoparrilla_category_rapidas.webp" alt="Rapidas" className="bento_image" style={{ width: '9vw' }} />
                                <h3 className="bento_title">
                                    Rápidas
                                </h3>
                                <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                            </div>
                        </div>
                        <div className="bento_menu_1_bottom">
                            <div className="small_square bento_square" onClick={() => { setCategory('Entradas'); handleClick(); }}>
                                <img src="./images/menu_categories/alejoparrilla_category_entradas.webp" alt="Entradas" className="bento_image" style={{ width: '13vw', paddingLeft: '4.5vw' }} />
                                <h3 className="bento_title">
                                    Entradas
                                </h3>
                                <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                            </div>
                            <div className="long_square bento_square" onClick={() => { setCategory('Sopas'); handleClick(); }}> {/* Eso de geometría no es lo mío */}
                                <img src="./images/menu_categories/alejoparrilla_category_sopas.webp" alt="Sopas" className="bento_image" style={{ width: '13vw' }} />
                                <h3 className="bento_title">
                                    Sopas
                                </h3>
                                <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                            </div>
                        </div>
                    </div>

                    <div className={`segunda_pagina ${currentPage === 'segunda_pagina' ? 'show' : 'hide'}`}>
                        <div className="bento_menu_2">
                            <div className="tall_square bento_square" onClick={() => { setCategory('Bebidas'); handleClick(); }}> {/* No pregunten que es un tall square, solo déjenme sólo */}
                                <img src="./images/menu_categories/alejoparrilla_category_bebidas.webp" alt="Bebidas" className="bento_image" style={{ width: '15vw', paddingLeft: '0.7vw', paddingTop: '5vw' }} />
                                <h3 className="bento_title">
                                    Bebidas
                                </h3>
                                <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                            </div>
                            <div className="small_square_2 bento_square" onClick={() => { setCategory('Típicos'); handleClick(); }}>
                                <img src="./images/menu_categories/alejoparrilla_category_tipicos.webp" alt="Tipicos" className="bento_image" style={{ width: '8.5vw' }} />
                                <h3 className="bento_title">
                                    Típicos
                                </h3>
                                <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                            </div>
                            <div className="small_square_2 bento_square" onClick={() => { setCategory('Postres'); handleClick(); }}>
                                <img src="./images/menu_categories/alejoparrilla_category_postres.webp" alt="Postres" className="bento_image" style={{ width: '8.5vw' }} />
                                <h3 className="bento_title">
                                    Postres
                                </h3>
                                <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                            </div>
                            <div className="big_square_2 bento_square" onClick={() => { setCategory('Menú Infantil'); handleClick(); }}>
                                <img src="./images/menu_categories/alejoparrilla_category_menu_infantil.webp" alt="Menú infantil" className="bento_image" />
                                <h3 className="bento_title">
                                    Menú Infantil
                                </h3>
                                <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );


}
export default NewMenu;
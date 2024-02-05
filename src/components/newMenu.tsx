import "./beta.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SeeMenu from "./seeMenu";

function NewMenu() {
    const [currentPage, setCurrentPage] = useState('primera_pagina');

    return (
        <div className="newMenu">
            <div className="bento_selector">
                <div className="bento_option" onClick={() => setCurrentPage('primera_pagina')}>
                    <h2 className="bento_option_title">Primera página</h2>
                </div>
                <div className="bento_option" onClick={() => setCurrentPage('segunda_pagina')}>
                    <h2 className="bento_option_title">Segunda página</h2>
                </div>
            </div>
            <div className={`primera_pagina ${currentPage === 'primera_pagina' ? 'show' : 'hide'}`}>
                <div className="bento_menu_1_top">
                    <div className="big_square bento_square">
                        <h3 className="bento_title">
                            Hamburguesas
                        </h3>
                        <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                    </div>
                    <div className="small_square bento_square">
                        <h3 className="bento_title">
                            Bowls
                        </h3>
                        <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                    </div>
                    <div className="small_square bento_square">
                        <h3 className="bento_title">
                            Rápidas
                        </h3>
                        <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                    </div>
                </div>
                <div className="bento_menu_1_bottom bento_square">
                    <div className="small_square">
                        <h3 className="bento_title">
                            Entradas
                        </h3>
                        <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                    </div>
                    <div className="long_square bento_square"> {/* Eso de geometría no es lo mío */}
                        <h3 className="bento_title">
                            Sopas
                        </h3>
                        <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                    </div>
                </div>
            </div>

            <div className={`segunda_pagina ${currentPage === 'segunda_pagina' ? 'show' : 'hide'}`}>
                <div className="bento_menu_2 bento_square">
                    <div className="tall_square"> {/* No pregunten que es un tall square, solo déjenme sólo */}
                        <h3 className="bento_title">
                            Bebidas
                        </h3>
                        <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                    </div>
                    <div className="small_square_2 bento_square">
                        <h3 className="bento_title">
                            Típicos
                        </h3>
                        <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                    </div>
                    <div className="small_square_2 bento_square">
                        <h3 className="bento_title">
                            Postres
                        </h3>
                        <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                    </div>
                    <div className="big_square_2 bento_square">
                        <h3 className="bento_title">
                            Ensaladas
                        </h3>
                        <FontAwesomeIcon className="bento_arrow" icon={faCircleChevronRight} />
                    </div>
                </div>
            </div>
            <SeeMenu />
        </div>
    );


}
export default NewMenu;
import "./Inicio.css";
import restaurant from '../assets/image.png';
import parrilla from '../assets/parrila.png';
import bowl from '../assets/plato.png';
import MenuGrid from './menu.tsx';
import React, { useState } from 'react';


export const Inicio = (): JSX.Element => {
    const [category, setCategory] = useState('Carnes');
    return (
        <div>
            <div className="home_container">
                <div className="column-main">
                    <h1 className="centered-title">Bienvenido a AlejoParrilla</h1>
                    <h3>La mejor calidad desde 1999</h3>
                    <div className="button-container">
                        <button className="main-button">Menú en línea</button>
                        <button className="second-button">Agenda tu mesa</button>
                    </div>
                </div>
                <div className="column has-image">
                    <img src={restaurant} alt="Descriptive text" className="restaurant_image" />
                </div>
            </div>
            <div className="home_container">
                <div className="home_container">
                    <div className="column has-image">
                        <img src={parrilla} alt='Parrilla yummy' />
                    </div>
                    <div className="column">
                        <h2 className='title_alt'>Nuestra Filosofia</h2>
                        <div className="line">
                            <p>
                                Somos restaurantes especializados en Parrilla y platos típicos colombianos desde 1999.
                            </p>
                            <p>
                                Nuestro personal cuenta con una amplia experiencia y un gusto exquisito en la preparación de nuestro menú.
                            </p>
                            <p>
                                Utilizamos los mejores insumos y la mejor atención para hacer que su experiencia en nuestros restaurantes sea única.
                            </p></div>

                    </div>
                </div>
            </div>
            <div className="home_container">
                <div className="home_container">
                    <div className="column has-image">
                        <img src={bowl} alt="Descripción de la imagen" /> {/* Reemplaza 'yourImage' con la ruta de tu imagen */}
                    </div>
                    <div className="column">
                        <h2 className="tit_alt">Nuestro menú</h2>
                        <p>Nuestro menu tiene diferentes variedades de platos distribuidos entre carnes, pescados, comidas rapidas, bolws y demas.</p>
                        <button className="botton_menu">Menú en línea</button>
                    </div>
                </div>
            </div>
            <div className="menu">
                <button onClick={() => setCategory('Carnes')}>Carnes</button>
                <button onClick={() => setCategory('Bowls')}>Bowls</button>
                <button onClick={() => setCategory('Ensaladas')}>Ensaladas</button>
                <MenuGrid category={category} />
            </div>
        </div>
    );
};
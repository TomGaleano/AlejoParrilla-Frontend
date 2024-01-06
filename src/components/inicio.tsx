import './inicio.css';
import React from 'react';
import "./Inicio.css";
import image from '../assets/image.png'; // Import the image directly
import parrilla from '../assets/parrila.png'; // Import the image directly

export const Inicio = (): JSX.Element => {
    return (
        <div>
            <div className="container">
                <div className="column-main">
                    <h1 className="centered-title">Bienvenido a AlejoParrilla</h1>
                    <h3>La mejor calidad desde 1999</h3>
                    <div className="button-container">
                        <button>Menú en línea</button>
                        <button className="second-button">Agenda tu mesa</button>
                    </div>
                </div>
                <div className="column">
                    <img src={image} alt="Descriptive text" /> {/* Use the imported image */}
                </div>
            </div>
            <div className="new-section">
                <div className="container">
                    <div className="column">
                        <img src={parrilla} alt='Parrilla yummy' />
                    </div>
                    <div className="column">
                        <h1>Nuestra Filosofia</h1>
                        <p>
                            Somos restaurantes especializados en Parrilla y platos típicos colombianos desde 1999.
                        </p>
                        <p>
                            Nuestro personal cuenta con una amplia experiencia y un gusto exquisito en la preparación de nuestro menú.
                        </p>
                        <p>
                            Utilizamos los mejores insumos y la mejor atención para hacer que su experiencia en nuestros restaurantes sea única.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
import "./Styles.css";
import restaurant from '../assets/Nosotros-Fachada-AlejoParrilla.png';
import parrilla from '../assets/parrila.png';
import MenuGrid from './menu.tsx';


export const Inicio = (): JSX.Element => {


    return (
        <div>
            <div className="home_container landing">
                <div className="column-main">
                    <div>
                        <h1 className="title">Bienvenido a AlejoParrilla</h1>
                        <h3 className="subtitle">La mejor calidad desde 1999</h3>
                    </div>

                    <div className="button-container">
                        <button className="main-button">Menú</button>
                        <button className="second-button">Pide ya</button>
                    </div>
                </div>
                <div className="column has-image">
                    <img src={restaurant} alt="Descriptive text" className="restaurant_image main_image" />
                </div>
            </div>

            <div className="home_container">
                <div className="column has-image">
                    <img src={parrilla} alt='Parrilla yummy' className="restaurant_image" />
                </div>
                <div className="column">
                    <h2 className='title_alt'>Nuestra Filosofia</h2>
                    <div className="line">
                        <p>
                            La filosofía de AlejoParilla es ofrecer comida deliciosa, servicio amable y ambiente agradable.
                        </p>
                        <p>
                            En AlejoParilla creemos que la comida es más que una necesidad, es una forma de compartir momentos especiales.
                        </p>
                        <p>
                            Nuestro objetivo es que nuestros clientes se sientan como en casa cuando visitan nuestros restaurantes.
                        </p></div>

                </div>
            </div>
            <div className='wave_spacer white-brown'></div>
            <MenuGrid />
        </div>
    );
};
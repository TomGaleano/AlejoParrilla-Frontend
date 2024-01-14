import "./Inicio.css";
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
                        <button className="main-button">Menú en línea</button>
                        <button className="second-button">Agenda tu mesa</button>
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
            <MenuGrid />
        </div>
    );
};
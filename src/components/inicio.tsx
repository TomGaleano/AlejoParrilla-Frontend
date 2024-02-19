import "./Styles.css";
import restaurant from '../assets/Nosotros-Fachada-AlejoParrilla.png';
import parrilla from '../assets/parrila.png';


export const Inicio = ({ setView }: { setView: (view: string) => void }): JSX.Element => {

    const handleLinkClick = (view: string) => {
        setView(view);
        window.scrollTo(0, 0);
    };
    return (
        <div>
            <div className="container landing">
                <div className="column-main">
                    <div>
                        <h1 className="title">Tu parrilla, AlejoParilla</h1>
                    </div>

                    <div className="button-container">
                        <button className="main-button" onClick={() => handleLinkClick('Menú')}>Menú en línea</button>
                        <button className="second-button">Pide ya</button>
                    </div>
                </div>
                <div className="column has-image">
                    <img src={restaurant} alt="Descriptive text" className="restaurant_image main_image" />
                </div>
            </div>

            <div className="container second">
                <div className="column">
                    <h2 className='title_alt_IN'>Conoce sobre nosotros</h2>
                    <div className="line">
                        <p style={{ color: 'white' }}>
                            Nuestro menu tiene diferentes variedades de platos distribuidos entre carnes, pescados, comidas rapidas, bolws y demas.
                        </p>
                        <button className="third-button" onClick={() => handleLinkClick('Nosotros')}>Sobre Nosotros</button>
                    </div>

                </div>
                <div className="column has-image">
                    <img src={parrilla} alt='Parrilla yummy' className="restaurant_image" />
                </div>
            </div>

            <div className="container third">
                <div className="column has-image">
                    <img src={parrilla} alt='Parrilla yummy' className="restaurant_image" />
                </div>
                <div className="column">
                    <h2 className='title_alt_IN'>Nuestro menu</h2>
                    <div className="line">
                        <p style={{ color: 'white' }}>
                            Nuestro menu tiene diferentes variedades de platos distribuidos entre carnes, pescados, comidas rapidas, bolws y demas.
                        </p>
                        <button className="third-button" onClick={() => handleLinkClick('Menú')}>Menu en linea</button>
                    </div>

                </div>
            </div>

        </div>
    );
};
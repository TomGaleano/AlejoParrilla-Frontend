//import "./Vinculate.css";
// import Map from "./MapComponentAPI"; // Importa el componente MapComponent
import "./Inicio.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faPaintBrush, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export const Vinculate = (): JSX.Element => {

    //const locations = [ // Define las 4 locaciones
    //    { position: { lat: 4.687747682024201, lng: -74.13019486345699 } },
    //    { position: { lat: 4.684118366151688, lng: -74.12388295108285 } },
    //    { position: { lat: 4.68393689986349, lng: -74.11629651794085 } },
    //    { position: { lat: 4.701962320882152, lng: -74.11605375208032 } },
    //];

    return (
        <div >
            <div className='form_container'>
                <iframe width="600" height="450" loading="lazy"
                    src="https://www.google.com/maps/embed/v1/search?q=alejopparrilla&key=AIzaSyCzuFvJ5puhXUY7QnkqzYixNKDG-AM2FM4">
                </iframe>
                <form className='vinculate_form' action="http://localhost:5173/nico.calderon.correa@gmail.com" method="POST">
                    <div className="input-field">
                        <input type="text" id="name" name="name" placeholder="Nombre" required />
                        <label htmlFor="name">Nombre</label>
                    </div>
                    <div className="input-field">
                        <input type="email" id="email" name="email" placeholder="Correo" required />
                        <label htmlFor="email">Correo</label>
                    </div>
                    <div className="input-field">
                        <input type="tel" id="phone" name="phone" placeholder="Número de Teléfono" required />
                        <label htmlFor="phone">Número de Teléfono</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="subject" name="subject" placeholder="Asunto" required />
                        <label htmlFor="subject">Asunto</label>
                    </div>
                    <div className="input-field">
                        <label htmlFor="pdf">Archivo PDF</label>
                        <input type="file" id="pdf" name="pdf" accept=".pdf" style={{ display: 'none' }} />
                        <button type="button" className='restaurant_button'  onClick={() => document.getElementById('pdf')?.click()}>
                        <FontAwesomeIcon icon={faFilePdf} style={{paddingRight:'10px'}}/>Adjunta tu Hoja de vida
                        </button>
                    </div>
                    <div className="input-field">
                        <textarea id="message" name="message" placeholder="Mensaje" required></textarea>
                        <label htmlFor="message">Mensaje</label>
                    </div>
                    <div className='vinculate_button-container'>
                        <button type="reset" className='restaurant_button'>
                        <FontAwesomeIcon icon={faPaintBrush} style={{paddingRight:'10px'}} />Limpiar
                        </button>
                        <button type="submit" className='restaurant_button'>
                        <FontAwesomeIcon icon={faPaperPlane} style={{paddingRight:'10px'}}/>Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
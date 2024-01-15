import "./Vinculate.css";
import Map from "./MapComponentAPI"; // Importa el componente MapComponent

export const Vinculate = (): JSX.Element => {

    const locations = [ // Define las 4 locaciones
        { position: { lat: 4.687747682024201, lng: -74.13019486345699 } },
        { position: { lat: 4.684118366151688, lng: -74.12388295108285 } },
        { position: { lat: 4.68393689986349, lng: -74.11629651794085 } },
        { position: { lat: 4.701962320882152, lng: -74.11605375208032 } },
    ];

    return (
        <div className='element_container'>
            <div className='img_container'>
                <h1>Trabaja con Nostros!</h1>
            </div>
            <h2 className='vinculate_title'>Formulario de Vinculación</h2>
            <div className='vinculate__container'>
                <iframe width="600" height="450" loading="lazy"
                    src="https://www.google.com/maps/embed/v1/search?q=alejopparrilla&key=AIzaSyCzuFvJ5puhXUY7QnkqzYixNKDG-AM2FM4"></iframe>
                {/* <Map locations={locations} /> Usa el componente MapComponent */}
                <form className='vinculate_form' action="http://localhost:5173/nico.calderon.correa@gmail.com" method="POST">
                    <input type="text" id="name" name="name" placeholder="Nombre" required />
                    <input type="email" id="email" name="email" placeholder="Correo" required />
                    <input type="tel" id="phone" name="phone" placeholder="Número de Teléfono" required />
                    <input type="text" id="subject" name="subject" placeholder="Asunto" required />
                    <input type="file" id="pdf" name="pdf" accept=".pdf" required />
                    <textarea id="message" name="message" placeholder="Mensaje" required></textarea>
                    <div className='vinculate_button-container'>
                        <button type="reset" className='vinculate_second-button'>Limpiar</button>
                        <button type="submit" className='vinculate_main-button'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
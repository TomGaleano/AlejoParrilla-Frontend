import React from 'react';
import "./Vinculate.css";
import MapComponent from "./MapComponent.tsx"; // Importa el componente MapComponent

export const Vinculate = (): JSX.Element => {
    return (
        <div className='element_container'> para
            <div className='img_container'>
                <h1>Trabaja con Nostros!</h1>
            </div>
            <h2 className='vinculate_title'>Formulario de Vinculación</h2>
            <div className='vinculate__container'>
                <MapComponent /> {/* Usa el componente MapComponent */}
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
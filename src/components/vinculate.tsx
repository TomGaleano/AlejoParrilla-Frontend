import React from 'react';
import "./Vinculate.css";

export const Vinculate = (): JSX.Element => {
    return (
        <div className='vinculate_container'>
            <h2 className='vinculate_title'>Formulario de Vinculación</h2>
            <form className='vinculate_form'>
                <input type="text" id="name" name="name" placeholder="Nombre" required />
                <input type="email" id="email" name="email" placeholder="Correo" required />
                <input type="tel" id="phone" name="phone" placeholder="Número de Teléfono" required />
                <input type="text" id="subject" name="subject" placeholder="Asunto" required />
                <input type="file" id="pdf" name="pdf" accept=".pdf" required />
                <textarea id="message" name="message" placeholder="Mensaje" required></textarea>
                <div className='vinculate_button-container'>
                    <button type="submit" className='vinculate_main-button'>Enviar</button>
                    <button type="reset" className='vinculate_second-button'>Limpiar</button>
                </div>
            </form>
        </div>
    );
}
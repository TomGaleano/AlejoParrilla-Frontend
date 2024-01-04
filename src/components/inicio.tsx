import React from "react";
import "./Inicio.css";
import image from '../assets/image.png'; // replace 'image.png' with your image file name

export const Inicio = (): JSX.Element => {
  return (
    <div className="container">
      <div className="column">
        <h1 className="centered-title">Bienvenido a AlejoParrilla</h1>
        <h3>La mejor calidad desde 1999</h3>
        <div className="button-container"> {/* Add this div */}
          <button>Menú en línea</button>
          <button className="second-button">Agenda tu mesa</button>
        </div>
      </div>
      <div className="column">
        <h1>Poner imagen aquí</h1>
      </div>
    </div>
  );
};
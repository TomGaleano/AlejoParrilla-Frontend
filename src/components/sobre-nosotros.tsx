
import React from 'react';
import "./Inicio.css";

export const Sobrenosotros = (): JSX.Element => {
  return (
    <div style={{overflow: 'hidden'}}>
      <div style={{ paddingTop: '10vh' }}>
        {/* Primera sección */}
        <h2 className='tit_alt'>Sobre Nosotros</h2>
        <div className='home_container' >
          {/* Inicia la primera columna de la sección */}

          <div className='column' style={{ paddingLeft: '12vh', paddingRight: '12vh' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div>
              <div className='home_container' style={{ display: 'flex' }}>
                {/* Espacio debajo del texto para poner cifras del restaurante */}
                <div className='column'>
                  <h3 className='tit_alt'>1</h3>
                </div>
                <div className='column'>
                  <h3 className='tit_alt'>2</h3>
                </div>
                <div className='column'>
                  <h3 className='tit_alt'>3</h3>
                </div>
              </div>
            </div>
          </div>
          {/* Inicia la segunda columna de la sección */}
          <div className='column has-image' style={{ paddingLeft: '12vh', paddingRight: '12vh' }}>
            <p>Importa y pon la imagen correspondiente aquí reemplazando la etiqueta {"<p>"} por algo como {'<img src={restaurant} alt="Descriptive text" className="restaurant_image" />'} donde restaurant es el nombre que le diste a tu imagen al importarla</p>
          </div>
        </div>
      </div>
      {/* Segunda sección */}
      <div style={{ backgroundColor: 'white', width: '100vw' }}>
        <div className='wave_spacer wave_top'></div>
        <h2 className='tit_alt'>Dummy Title</h2>
        <p style={{ color: 'black', paddingLeft: '20vh', paddingRight: '20vh', paddingBottom: '10vh' }}>Dummy text</p>
        <div className='wave_spacer wave_bottom'></div>
      </div>

    </div>
  );
};

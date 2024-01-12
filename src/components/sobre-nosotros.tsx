
import "./Inicio.css";
import lomo from "../assets/lomo.png";

export const Sobrenosotros = (): JSX.Element => {
  return (
    <div style={{overflow: 'hidden'}}>
      <div style={{ paddingTop: '10vh' }}>
        {/* Primera sección */}
        <h1 className='tit_alt'>Sobre Nosotros</h1>
        <div className='home_container' >
          {/* Inicia la primera columna de la sección */}

          <div className='column' style={{ paddingLeft: '12vh', paddingRight: '12vh' }}>
            <p>Somos restaurantes especializados en Parrilla y platos típicos colombianos desde 1999. </p>
            <p>Nuestro personal cuenta con una amplia experiencia y un gusto exquisito en la preparación de nuestro menú. </p>
            <p>Utilizamos los mejores insumos y la mejor atención para hacer que su experienciaen nuestros restaurantes sea única.</p>
            <div>
              <div className='home_container' style={{ display: 'flex' }}>
                {/* Espacio debajo del texto para poner cifras del restaurante */}
                <div className='column'>
                  <h2 className='tit_alt'>4+</h2>
                  <p>Restaurantes</p>
                </div>
                <div className='column'>
                  <h2 className='tit_alt'>35+</h2>
                  <p>Platos</p>
                </div>
                <div className='column'>
                  <h2 className='tit_alt'>54+</h2>
                  <p>Empleados</p>
                </div>
              </div>
            </div>
          </div>
          {/* Inicia la segunda columna de la sección */}
          <div className='column has-image' style={{ paddingLeft: '12vh', paddingRight: '12vh' }}>
            <img src={lomo} alt='Lomo napolitano de Alejoparrilla' className="restaurant_image" style={{ maxHeight: '80vh' , paddingBottom: '10vh'}} />
          </div>
        </div>
      </div>
      {/* Segunda sección */}
      <div style={{ backgroundColor: 'white', width: '100vw' }}>
        <div className='wave_spacer wave_top'></div>
        <h2 className='tit_alt'>Nuestra Filosofía</h2>
        <p style={{ color: 'black', paddingLeft: '20%', paddingRight: '20%' }}>Somos restaurantes especializados en Parrilla y platos típicos colombianos desde 1999. </p>
        <p style={{ color: 'black', paddingLeft: '20%', paddingRight: '20%' }}>Nuestro personal cuenta con una amplia experiencia y un gusto exquisito en la preparación de nuestro menú.  </p>
        <p style={{ color: 'black', paddingLeft: '20%', paddingRight: '20%', paddingBottom: '10vh' }}>Utilizamos los mejores insumos y la mejor atención para hacer que su experienciaen nuestros restaurantes sea única. </p>
        <div className='wave_spacer wave_bottom'></div>
      </div>

    </div>
  );
};

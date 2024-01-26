
import "./Inicio.css";
import lomo from "../assets/lomo.png";
import Carousel from "./carousel";
import FloatingButton from "./FloatingButton.tsx";

export const Sobrenosotros = (): JSX.Element => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ paddingTop: '10vh' }}>
        {/* Primera sección */}
        <h1 className='title tit-sobre-nosotros'>Sobre Nosotros</h1>

        <div className='home_container' style={{ paddingTop: '1.3vh' }}>
          {/* Inicia la primera columna de la sección */}

          <div className="sobre-nosotros">
            <p >
            Ofrecemos una amplia variedad de platos para todos los gustos, elaborados con ingredientes frescos y de calidad. Nuestro personal está altamente capacitado para brindar un servicio de calidad y atención personalizada. Nuestros restaurantes tienen una decoración moderna y acogedora, que crea un ambiente agradable para disfrutar de una buena comida.
            </p>
            <p style={{ marginBottom: '0vh' }}>Utilizamos los mejores insumos y la mejor atención para hacer que su experienciaen nuestros restaurantes sea única.</p>
            <div>
              <div className='home_container sobre-nosotros' style={{ display: 'flex', paddingTop: '1vh', marginTop: '0vh' }}>
                {/* Espacio debajo del texto para poner cifras del restaurante */}

                <div className="insights" style={{ textAlign: 'center' }}>
                  <h2 className='title' style={{ paddingTop: '0vh' }}>4+</h2>
                  <p style={{ paddingLeft: '0vh' }}>Restaurantes</p>
                </div>
                <div className="insights" style={{ textAlign: 'center' }}>
                  <h2 className='title' style={{ paddingTop: '0vh' }}>35+</h2>
                  <p style={{ paddingLeft: '0vh' }}>Platos</p>
                </div>
                <div className="insights" style={{ textAlign: 'center' }}>
                  <h2 className='title' style={{ paddingTop: '0vh' }}>54+</h2>
                  <p style={{ paddingLeft: '0vh' }}>Empleados</p>
                </div>
              </div>
            </div>
          </div>
          {/* Inicia la segunda columna de la sección */}
          <div className='column has-image' style={{ paddingLeft: '12vh', paddingRight: '12vh' }}>
            <img src={lomo} alt='Lomo napolitano de Alejoparrilla' className="restaurant_image" style={{ maxHeight: '80vh', paddingBottom: '10vh' }} />
          </div>
        </div>
      </div>
      {/* Segunda sección */}
      <div style={{  width: '100vw' }}>
        <div className="home_container" style={{ backgroundColor: 'white', marginTop: '0vh', marginBottom: '0vh'}}>
          <h2 className='title tit-sobre-nosotros'>Nuestra Filosofía</h2>
          <div className="sobre-nosotros"style={{}}>
            <p style={{ color: 'black' }}>Somos restaurantes especializados en Parrilla y platos típicos colombianos desde 1999. </p>
            <p style={{ color: 'black' }}>Nuestro personal cuenta con una amplia experiencia y un gusto exquisito en la preparación de nuestro menú.  </p>
            <p style={{ color: 'black', paddingBottom: '10vh' }}>Utilizamos los mejores insumos y la mejor atención para hacer que su experienciaen nuestros restaurantes sea única. </p>
          </div>
        </div>
      </div>
      <div className="home_container" style={{paddingTop:'0vh', marginTop:'0vh', marginBottom:'15vh', paddingLeft:'0px', paddingRight: '0px'}}>
        <div className="column" style={{padding: 0}}>
          <h2 className="menu_title" style={{marginBottom:'4vh'}}>Nuestros restaurantes</h2>
          <Carousel />
          <FloatingButton/>
        </div>
      </div>
      <div className='wave_spacer white-blue'></div>
    </div>
  );
};


import "./Styles.css";
import lomo from "../assets/lomo.png";
import Carousel from "./carousel";

export const Sobrenosotros = (): JSX.Element => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ paddingTop: '5vh' }} className="landing">
        {/* Primera sección */}
        <h1 className='title tit-sobre-nosotros'>Sobre Nosotros</h1>

        <div className='container' style={{ paddingTop: '1.3vh'}}>
          {/* Inicia la primera columna de la sección */}

          <div className="sobre-nosotros">
            <p>
            Somos restaurantes especializados en Parrilla y platos típicos colombianos desde 1999. 
            </p>
            <p>
            Nuestro personal cuenta con una amplia experiencia y un gusto exquisito en la preparación de nuestro menú. 
            </p>
            <p style={{ marginBottom: '0vh' }}>Utilizamos los mejores insumos y la mejor atención para hacer que su experienciaen nuestros restaurantes sea única.
            </p>
            <div>
              <div className='container sobre-nosotros' style={{ display: 'flex',padding:'0vh', paddingTop: '1vh', paddingLeft: '8vw', marginTop: '0vh' }}>
                {/* Espacio debajo del texto para poner cifras del restaurante */}

                <div className="insights" style={{ textAlign: 'center' }}>
                  <h2 className='subtitle' >4+</h2>
                  <p style={{ paddingLeft: '0vh' }}>Restaurantes</p>
                </div>
                <div className="insights" style={{ textAlign: 'center' }}>
                  <h2 className='subtitle' >35+</h2>
                  <p style={{ paddingLeft: '0vh' }}>Platos</p>
                </div>
                <div className="insights" style={{ textAlign: 'center' }}>
                  <h2 className='subtitle' >54+</h2>
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
      {/* Segunda Sección */}



      <div className='container' style={{display:'flex', flexDirection:'column', backgroundImage:'../assets/fondo-azul-de-insignias.png'}}>
         
            <h2 className="title">Nuestra Misión</h2>


          
        <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap:'wrap'}}>
          
          <div className="general-box" >
            <img src="./images/argolla.jpg" width={20} height={20} alt="" />
            <div className="text-box">En Alejo Parrilla, nuestra misión es cautivar a nuestros clientes con auténticos sabores colombianos fusionados con la pasión y la maestría de la parrilla.
            </div>
          </div>
          <div className="general-box">
            <div className="text-box">Guiados por valores fundamentales de empatía hacia nuestros clientes y personal, así como una dedicación por la calidad de nuestros productos, nos esforzamos por brindar experiencias culinarias excepcionales.</div>
          </div>
          <div className="general-box">
            <div className="text-box">Alejo Parrilla es más que un restaurante; es un lugar familiar donde cada comida se convierte en una celebración especial, ofreciendo no solo platos típicos colombianos, sino tambien un servicio cállido y acogedor.</div>
          </div>
        </div>
      </div>



      {/* Tercera Sección */}
      <div style={{  width: '100vw' }}>
        <div className="container" style={{ backgroundColor: 'white', marginTop: '0vh', marginBottom: '0vh'}}>
          <h2 className='title tit-sobre-nosotros'>Nuestra Filosofía</h2>
          <div className="sobre-nosotros"style={{}}>
            <p style={{ color: 'black' }}>Somos restaurantes especializados en Parrilla y platos típicos colombianos desde 1999. </p>
            <p style={{ color: 'black' }}>Nuestro personal cuenta con una amplia experiencia y un gusto exquisito en la preparación de nuestro menú.  </p>
            <p style={{ color: 'black', paddingBottom: '10vh' }}>Utilizamos los mejores insumos y la mejor atención para hacer que su experienciaen nuestros restaurantes sea única. </p>
          </div>
        </div>
      </div>
      <div className="container" style={{paddingTop:'0vh', marginTop:'0vh', marginBottom:'15vh', paddingLeft:'0px', paddingRight: '0px'}}>
        <div className="column" style={{padding: 0}}>
          <h2 className="menu_title" style={{marginBottom:'4vh'}}>Nuestros restaurantes</h2>
          <Carousel />
        </div>
      </div>
      <div className='wave_spacer white-blue'></div>
    </div>
  );
};

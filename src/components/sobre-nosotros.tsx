
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
            <img src={lomo} alt='Lomo napolitano de Alejoparrilla' className="restaurant_image"/>
          </div>
        </div>
      </div>
      {/* Segunda Sección */}



      <div className='container' style={{display:'flex', flexDirection:'column', background:'red', alignItems:'center'}}>
        <h2>Misión</h2>

      </div>
      {/* Tercera Sección */}

      <div className="container landing">
        <div className="" style={{display:'flex', flexDirection:'row'}}>
          <div className="" style={{border:'red 2px solid', background:'#ffffff'}}>
            <div className="">
              <img src="" alt="" />
            </div>
            <p className="" style={{textAlign:'justify'}}>En Alejo Parrilla, aspiramos a ser el destino culinario de referencia, liderando la industria gastronómica con inovación y tradición en cada plato.</p>
          </div>
          <div className="">
            <div className="">
              <img src="" alt="" />
            </div>
            <p className="">Visualizamos nuestro restaurante como un punto de encuentro donde la excelencia de la parrilla se fusiona con la autenticidad de la cocina colombiana 😎.</p>
          </div>
          <div className="">
            <div className="">
              <img src="" alt="" />
            </div>
            <p className="">Buscamos marcar tendencias y crear recuerdos inolvidables para nuestros clientes, ofreciendo una experiencia única que refleje la autenticidad y la diversidad de nuestra oferta.</p>
          </div>
          <div className="">
            <div className="">
              <img src="" alt="" />
            </div>
            <p className="">Nos esforzamos por ser reconocidos como Alejo Parrilla, un lugar donde la calidad de la parrilla y la calidez de la experiencia  se encuentran por deleitar a todos nuestos comensales.</p>
          </div>
        </div>
      </div>

      {/* Cuarta Sección */}
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
      <div className="container" style={{paddingTop:'0vh', marginTop:'0vh', paddingLeft:'0px', paddingRight: '0px'}}>
        <div className="column landing" style={{padding: 0}}>
          <h2 className="menu_title" style={{marginBottom:'4vh'}}>Nuestros restaurantes</h2>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

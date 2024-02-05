
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import "./Styles.css";
import Carousel from "./carousel";

export const Sobrenosotros = (): JSX.Element => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ paddingTop: '5vh', minHeight:'100vh' }} className="landing">
        {/* Primera sección */}
        <h1 className='title tit-sobre-nosotros' style={{margin:'.2rem',fontSize:'6vh'}}>Sobre Nosotros</h1>
        <div className="" style={{display:'flex', flexWrap:'wrap-reverse', justifyContent:'space-evenly', alignItems:'top'}}>
          <div className="sobre-nosotros-container-item" style={{width:'50%',minWidth:'400px', color:'#ffffff'}}>
            <div style={{fontSize:'1rem', padding:'3rem',paddingTop:'0px', textAlign:'justify'}}>
              <h1 className="subtitle">Nuestra Filosofía</h1>
              <p>¡Bienvenidos a nuestros restaurantes! Disfruta de la mejor parrilla y platos típicos colombianos desde 1999. Ofrecemos gastronomía de calidad, con recetas tradicionales y sabores auténticos.</p>
              <p>Nuestro personal con amplia experiencia prepara un menú completo: carnes, sopas, ensaladas, postres y bebidas típicas. Ambiente acogedor, decoración agradable y servicio profesional.</p>
              <p>Utilizamos los mejores insumos, frescos y naturales, y la mejor atención para hacer que tu experiencia en nuestros restaurantes sea única e inolvidable. Te invitamos a visitarnos y a comprobar por qué somos los mejores en Parrilla y platos típicos colombianos. ¡Te esperamos!</p>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-evenly',}}>
              <div className="" style={{}}>
                <h2 className="subtitle">4+</h2>
                <p>Restaurantes</p>
              </div>
              <div className="" style={{}}>
                <h2 className="subtitle">35+</h2>
                <p>Platos</p>
              </div>
              <div className="" style={{}}>
                <h2 className="subtitle">54+</h2>
                <p>Empleados</p>
              </div>
            </div>
            </div>
          </div>


          <div className="sobre-nosotros-container-item" style={{boxSizing: 'border-box', width:'50%', padding:'2rem'}}>
            <img style={{width:'100%', height:'auto', margin:'auto', borderRadius:'20px', border:'var(--color-our-orange) 2px solid'}} src='./images/Imagen-interior.webp' alt="" />
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

import "./Styles.css";
import Carousel from "./carousel";
import CarouselUpToDown from "./carouselUpToDown";
import VisionComponent from "./VisonCard";
import FilosofiaGallery from "./FilosofiaGallery";


export const Sobrenosotros = (): JSX.Element => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ minHeight: '100vh' }} className="landing">
        {/* Primera sección */}
        <div className="sobre-nosotros-container">
          <div className="sobre-nosotros-container-item" style={{ width: '50%', minWidth: '250px', color: '#ffffff' }}>
            <div className="" style={{ fontSize: '1rem', padding: '3rem', paddingTop: '0px', textAlign: 'justify' }}>
              <h1 className="subtitle">Sobre Nosotros</h1>
              <p>¡Bienvenidos a nuestros restaurantes! Disfruta de la mejor parrilla y platos típicos colombianos desde 1999. Ofrecemos gastronomía de calidad, con recetas tradicionales y sabores auténticos.</p>
              <p>Nuestro personal con amplia experiencia prepara un menú completo: carnes, sopas, ensaladas, postres y bebidas típicas. Ambiente acogedor, decoración agradable y servicio profesional.</p>
              <p>Utilizamos los mejores insumos, frescos y naturales, y la mejor atención para hacer que tu experiencia en nuestros restaurantes sea única e inolvidable. Te invitamos a visitarnos y a comprobar por qué somos los mejores en Parrilla y platos típicos colombianos. ¡Te esperamos!</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <div className="info-card" style={{}}>
                  <h2 className="subtitle">4+</h2>
                  <p>Restaurantes</p>
                </div>
                <div className="info-card" style={{}}>
                  <h2 className="subtitle">35+</h2>
                  <p>Platos</p>
                </div>
                <div className="info-card" style={{}}>
                  <h2 className="subtitle">54+</h2>
                  <p>Empleados</p>
                </div>
              </div>
            </div>
          </div>


          <div className="sobre-nosotros-container-item box-sizing-width-padding_SN">
            <img className="img-width-height-margin-border_SN" src='./images/Imagen-interior.webp' alt="" />
          </div>
        </div>
      </div>

      {/* Segunda Sección */}
      <div className='container Mision_Container_SN'>
        <h2 className="Mision-title">Misión</h2>
        <CarouselUpToDown />
      </div>
      {/* Tercera Sección */}

      <div className="container landing" style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 className="subtitle">Visión</h2>
          <VisionComponent />
      </div>

      {/* Cuarta Sección */}
      <div className="FilosofiaContainer_SN">
        <h2 className='title tit-sobre-nosotros'>Nuestra Filosofia</h2>
        <FilosofiaGallery />
      </div>

      {/* Quinta Sección */}
      <div className="container padding-top-margin-top-left-right_SN">
        <div className="column landing" style={{ padding: 0 }}>
          <h2 className="menu_title margin-bottom_SN">Nuestros restaurantes</h2>
          <Carousel />
        </div>
      </div>
    </div>
  );
};
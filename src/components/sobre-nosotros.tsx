import "./Styles.css";
import Carousel from "./carousel";
import CarouselUpToDown from "./swiperMision";
import VisionComponent from "./VisonCard";
import FilosofiaGallery from "./FilosofiaGallery";

export const Sobrenosotros = (): JSX.Element => {
  return (
    <div className="overflow_hidden_SN">
      <div className="landing minHeight_paddingTop_SN landing_nosotros second">
        {/* Primera sección */}
        <h1 className="title orange_center_text">Sobre Nosotros</h1>
        <div className="sobre-nosotros-container">
          <div className="sobre-nosotros-container-item width_minWidth_color_SN">
            <div className="fontSize_padding_paddingTop_SN">
              <p>¡Bienvenidos a nuestros restaurantes! Disfruta de la mejor parrilla y platos típicos colombianos desde 1999. Ofrecemos gastronomía de calidad, con recetas tradicionales y sabores auténticos.</p>
              <p>Utilizamos los mejores insumos, frescos y naturales, y la mejor atención para hacer que tu experiencia en nuestros restaurantes sea única e inolvidable. Te invitamos a visitarnos y a comprobar por qué somos los mejores en Parrilla y platos típicos colombianos. ¡Te esperamos!</p>
              <div className="display_alignItems_justifyContent_flexWrap_SN">
                <div className="info-card">
                  <h2 className="subtitle">4+</h2>
                  <p>Restaurantes</p>
                </div>
                <div className="info-card">
                  <h2 className="subtitle">35+</h2>
                  <p>Platos</p>
                </div>
                <div className="info-card">
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
        <h2 className="title_alt orange_center_text">Misión</h2>
        <CarouselUpToDown />
      </div>
      {/* Tercera Sección */}

      <div className="landing display_flexDirection_SN">
        <h2 className="title_alt orange_center_text">Visión</h2>
        <VisionComponent />
      </div>

      {/* Cuarta Sección */}
      <div className="FilosofiaContainer_SN">
        <h2 className='title_alt orange_center_text'>Nuestra Filosofia</h2>
        <FilosofiaGallery />
      </div>

      {/* Quinta Sección */}
      <div id="nuestros_restaurantes_container" className="landing">
        <h2 id='nuestros_restaurantes_title' className="title_alt orange_center_text">Nuestros restaurantes</h2>
        <Carousel />
      </div>
    </div>
  );
};
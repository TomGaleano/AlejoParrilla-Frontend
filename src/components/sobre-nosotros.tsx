import "./Styles.css";
import Carousel from "./carousel";

export const Sobrenosotros = (): JSX.Element => {
  return (
    <div className="overflow-hidden_SN">
      <div className="padding-top-min-height_SN landing">
        {/* Primera sección */}
        <h1 className='title tit-sobre-nosotros margin-font-size_SN'>Sobre Nosotros</h1>
        <div className="sobre-nosotros-container flex-wrap-justify-align_SN">
          <div className="sobre-nosotros-container-item width-min-width-color_SN">
            <div className="font-size-padding-text-align_SN">
              <h1 className="subtitle">Nuestra Filosofía</h1>
              <p>¡Bienvenidos a nuestros restaurantes! Disfruta de la mejor parrilla y platos típicos colombianos desde 1999. Ofrecemos gastronomía de calidad, con recetas tradicionales y sabores auténticos.</p>
              <p>Nuestro personal con amplia experiencia prepara un menú completo: carnes, sopas, ensaladas, postres y bebidas típicas. Ambiente acogedor, decoración agradable y servicio profesional.</p>
              <p>Utilizamos los mejores insumos, frescos y naturales, y la mejor atención para hacer que tu experiencia en nuestros restaurantes sea única e inolvidable. Te invitamos a visitarnos y a comprobar por qué somos los mejores en Parrilla y platos típicos colombianos. ¡Te esperamos!</p>
              <div className="flex-align-justify_SN">
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



      <div className='container flex-direction-background-align_SN'>
        <h2>Misión</h2>

      </div>
      {/* Tercera Sección */}

      <div className="container landing">
        <div className="flex-direction-row_SN">
          <div className="border-background_SN">
            <div className="">
              <img src="" alt="" />
            </div>
            <p className="text-align_SN">En Alejo Parrilla, aspiramos a ser el destino culinario de referencia, liderando la industria gastronómica con inovación y tradición en cada plato.</p>
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
      <div className="width_SN">
        <div className="container background-color-margin-top-bottom_SN">
          <h2 className='title tit-sobre-nosotros'>Nuestra Filosofía</h2>
          <div className="sobre-nosotros">

          </div>
        </div>
      </div>
      <div className="container padding-top-margin-top-left-right_SN">
        <div className="column landing" style={{ padding: 0 }}>
          <h2 className="menu_title margin-bottom_SN">Nuestros restaurantes</h2>
          <Carousel />
        </div>
      </div>
    </div>
  );
};
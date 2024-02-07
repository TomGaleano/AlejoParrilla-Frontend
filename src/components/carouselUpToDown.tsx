import React from 'react';
import { Swiper, SwiperSlide } from '../../node_modules/swiper/swiper-react';
import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-cube.min.css';
import SwiperCore from 'swiper/core';
import EffectCube from 'swiper/core';
import "./carouselUpToDown.css";

SwiperCore.use([EffectCube]);

const CarouselUpToDown: React.FC = () => {
    return (
        <Swiper
            direction={'vertical'}
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{ "shadow": true, "slideShadows": true, "shadowOffset": 20, "shadowScale": 0.94 }}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='slideContainer'>
                    <h2 className='TextContainer'>En Alejo Parrilla, nuestra misión es cautivar a nuestros clientes con auténticos sabores colombianos fusionados con la pasión y la maestría de la parrilla.</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slideContainer'>
                    <h2>Alejo Parrilla es más que un restaurante; es un lugar familiar donde cada comida se convierte en una celebración especial, ofreciendo no solo platos típicos colombianos, sino tambien un servicio cállido y acogedor.</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slideContainer'>
                    <h2 className='TextContainer'>Guiados por valores fundamentales de empatía hacia nuestos clientes y personal, así como una dedicación por la calidad de nuestros productos, nos esforzamos por brindar experiencias culinarias excepcionales.</h2>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default CarouselUpToDown;
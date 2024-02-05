import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-cube/effect-cube.min.css';
import SwiperCore from 'swiper/core';
import EffectCube from 'swiper/core';
import "./carouselUpToDown.css";

SwiperCore.use([EffectCube]);

const CarouselUpToDown: React.FC = () => {
    const slides = [1, 2, 3, 4, 5]; // Define your slides here

    return (
        <Swiper effect={'cube'} grabCursor={true} cubeEffect={{ "shadow": true, "slideShadows": true, "shadowOffset": 20, "shadowScale": 0.94 }} className="mySwiper">
            {slides.map((index) => (
                <SwiperSlide key={index}></SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarouselUpToDown;
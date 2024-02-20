// @ts-nocheck

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from '../../node_modules/swiper/swiper-react';
import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-cube.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import "./Carousel.css";
import DetallesRestaurante from './info-restaurantes';


interface CarouselProps {
  selectedItemId: number | null;
}
const Carousel: React.FC<CarouselProps> = ({ selectedItemId }) =>  {
  const swiperRef = useRef(null);

  const settings = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      900:{
        slidesPerView:3,
      },
      1300: {
        slidesPerView: 4,
      },
    },
    onSwiper: (swiper) => { swiperRef.current = swiper; },
  };

  return (
    <>
      <Swiper {...settings}>
        <SwiperSlide><DetallesRestaurante id={1} isSelected={selectedItemId===1} /></SwiperSlide>
        <SwiperSlide><DetallesRestaurante id={2} isSelected={selectedItemId===2}/></SwiperSlide>
        <SwiperSlide><DetallesRestaurante id={3} isSelected={selectedItemId===3}/></SwiperSlide>
        <SwiperSlide><DetallesRestaurante id={4} isSelected={selectedItemId===4}/></SwiperSlide>
        <div className='swiper_controls_CR'>
          <FontAwesomeIcon className="swiper-button-prev_CR" icon={faChevronLeft} onClick={() => swiperRef.current?.slidePrev()} />
          <FontAwesomeIcon className="swiper-button-next_CR" icon={faChevronRight} onClick={() => swiperRef.current?.slideNext()} />
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
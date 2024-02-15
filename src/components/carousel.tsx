import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import DetallesRestaurante from './info-restaurantes';

const Carousel = () => {

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
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <Swiper {...settings}>
      <SwiperSlide><DetallesRestaurante  id={1}/></SwiperSlide>
      <SwiperSlide><DetallesRestaurante  id={2}/></SwiperSlide>
      <SwiperSlide><DetallesRestaurante  id={3}/></SwiperSlide>
      <SwiperSlide><DetallesRestaurante  id={4}/></SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
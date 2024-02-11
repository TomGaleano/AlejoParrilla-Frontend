import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import DetallesRestaurante from './info-restaurantes';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';

const Carousel=()=> {
  return (
    <>
    <div>
    <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <DetallesRestaurante id={1}/>
        </SwiperSlide>
        <SwiperSlide>
          <DetallesRestaurante id={1}/>
        </SwiperSlide>
        <SwiperSlide>
          <DetallesRestaurante id={1}/>
        </SwiperSlide>
        <SwiperSlide>
          <DetallesRestaurante id={1}/>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}
export default Carousel;
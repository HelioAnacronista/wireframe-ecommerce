import "swiper/swiper-bundle.css";

import React from "react";
import { MdNavigateNext, MdStar } from "react-icons/md";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Carousel = ({ className = "" }) => {
  const slides = [];


  return (
    <React.Fragment>
      <Swiper
        className={`bg-cyan-400 h-[672px] select-none  ${className}`}
        tag="section"
        wrapperTag="ul"
        id="main"
        navigation
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  );
}

export default Carousel;
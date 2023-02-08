import "swiper/swiper-bundle.css";

import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AdImage from "./AdImage";
import Bottom from "./Bottom";
import Middle from "./middle";
import Top from "./Top";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Carousel = ({ className = "" }) => {
  const slides = [];

  for (let i = 1; i < 5; i++) {
    slides.push(
      <SwiperSlide className="w-full" key={`slide-${i}`} tag="li">
        <div className="static">
          <AdImage />
          <div className="items-center justify-center">
            <Top />
            <Middle />
            <div className="absolute bottom-36 left-20">
              <Bottom />
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  }

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
};

export default Carousel;

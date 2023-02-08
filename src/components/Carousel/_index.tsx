import "swiper/swiper-bundle.css";

import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BottomAd from "./BottomAd";
import ImageAd from "./ImageAd";
import MiddleAd from "./MiddleAd";
import TopAd from "./TopAd";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Carousel = ({ className = "" }) => {
  const slides = [];

  for (let i = 1; i < 5; i++) {
    slides.push(
      <SwiperSlide className="w-full" key={`slide-${i}`} tag="li">
        <div className="static">
          <ImageAd />
          <div className="items-center justify-center">
            <TopAd />
            <MiddleAd />
            <div className="absolute bottom-[164px] left-20">
              <BottomAd />
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper
        className={`bg-cyan-400 h-[700px] select-none  ${className}`}
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
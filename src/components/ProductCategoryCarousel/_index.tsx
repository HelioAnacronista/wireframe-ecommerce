import "swiper/swiper-bundle.css";

import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageAd from "./ImageAd";
import Page from "./Page";
import Price from "./Price";
import Title from "./Title";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const ProductCategoryCarousel = ({ className = "" }) => {
  const slides = [];

  let n: number = 3;
  for (let i = 0; i < n; i++) {
    slides.push(
      <SwiperSlide className="w-full" key={`slide-${i}`} tag="li">
        <div>
          <div className="mt-4 flex items-center justify-center">
            <div className="mx-3">
              <ImageAd />
              <Title title="Notebook Apple MacBook" />
              <Price price={90.5} />
            </div>

            <div className="mx-3">
              <ImageAd />
              <Title title="Notebook Apple MacBook" />
              <Price price={90.5} />
            </div>

            <div className="mx-3">
              <ImageAd />
              <Title title="Notebook Apple MacBook" />
              <Price price={90.5} />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Page page={i} totalPages={n} />
          </div>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper
        className={`m h-[200px] select-none  rounded border-[2px] border-mainColor-200 ${className}`}
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

export default ProductCategoryCarousel;

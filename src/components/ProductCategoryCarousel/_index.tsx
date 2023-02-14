import "swiper/swiper-bundle.css";

import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageAd from "./ImageAd";

import Price from "../Price";
import Title from "./Title";

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface ProductCategoryCarouselProps {
  title?: string;
  className?: string;
}

export const ProductCategoryCarousel = ({
  title,
  className,
}: ProductCategoryCarouselProps) => {
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
              <Price
                className="text-xl font-bold text-mainColor-900 lg:text-lg"
                price={90.5}
              />
            </div>

            <div className="mx-3">
              <ImageAd />
              <Title title="Notebook Apple MacBook" />
              <Price
                className="text-xl font-bold text-mainColor-900 lg:text-lg"
                price={90.5}
              />
            </div>

            <div className="mx-3">
              <ImageAd />
              <Title title="Notebook Apple MacBook" />
              <Price
                className="text-xl font-bold text-mainColor-900 lg:text-lg"
                price={90.5}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <>
      <h2>{title}</h2>
      <React.Fragment>
        <Swiper
          className={` h-[200px] select-none  rounded border-[2px] border-mainColor-200 ${className}`}
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
    </>
  );
};

export default ProductCategoryCarousel;

import "swiper/swiper-bundle.css";

import React from "react";
import { MdNavigateNext, MdStar } from "react-icons/md";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

//<span className="border-cyan-400 h-10 border" /> |

export const Carousel = ({ className = "" }) => {
  const slides = [];

  for (let i = 1; i < 5; i++) {
    slides.push(
      <SwiperSlide className="w-full" key={`slide-${i}`} tag="li">
        <div className="static">
          <img
            src={`https://picsum.photos/id/1/1920/1080`}
            width={1920}
            height={1080}
            alt={`Slide 1`}
            className="object-cover sm:h-[592px] sm:w-[592px]"
          />
          <div className="items-center justify-center">
            <div className="absolute inset-x-0 top-20 text-center">
              <div className="flex items-center justify-center text-center text-mainColor-50">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
            </div>
            <div className="absolute inset-x-0 top-40 left-20">
              <h1 className="text-4xl font-bold text-mainColor-50 lg:text-6xl">
                Nome do produto
              </h1>
            </div>

            <div className="absolute bottom-36 left-20">
              <div
                className="absolute h-[160px] w-[339px]  items-center justify-center 
                rounded-lg bg-white-900 p-5
                font-semibold
                text-mainColor-700
                shadow-md"
              >
                <div className="mb-3 h-[52px] w-[292px] items-center justify-center rounded-md bg-[#F6F6F8] pt-2 text-center text-[#5F5C6B]">
                  Booking now $99
                </div>
                <div className="flex h-[52px] w-[292px] items-center justify-center rounded-md bg-[#5F5C6B] text-center text-white-900">
                  mais opções
                  <MdNavigateNext size={30} />
                </div>
              </div>
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

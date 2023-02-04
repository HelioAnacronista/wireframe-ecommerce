import "swiper/swiper-bundle.css";

import Link from "next/link";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Carousel = ({ className = "" }) => {
  const slides = [];

  for (let i = 1; i < 5; i++) {
    slides.push(
      <SwiperSlide
        className="grid w-full md:grid-flow-col lg:grid-cols-2"
        key={`slide-${i}`}
        tag="li"
      >
        <div className="bg-black absolute inset-0 bg-opacity-40 lg:hidden"></div>
        <img src={`https://picsum.photos/${i}/1/1920/1080`} alt="" />
        <div
          className="
          lg:text-black 
          text-white 
          absolute 
          flex 
          flex-col 
          items-start 
          justify-center 
          p-4 
          px-[15%] 
          py-[10%]
          lg:static
          lg:py-0
          "
        >
          <h1 className="text-4xl font-bold lg:text-6xl"> Summer is coming </h1>
          <h1 className="text-4xl font-bold lg:text-6xl"> Upto 80% OFF </h1>
          <h1 className="my-5 lg:text-xl ">
            {" "}
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </h1>
          <div className="shadow-yellow-400 shadow-md">
            <Link
              className="bg-yellow-300 flex gap-3 px-4 py-3"
              href={`/catalog/${i}`}
            >
              <span className="text-md text-gray-900 my-auto mr-2 font-bold">
                {" "}
                Compre agora{" "}
              </span>
              <span className="border-cyan-400 h-10 border" />
              <BiShoppingBag className="my-auto" size={30} />
            </Link>
          </div>
        </div>
        <div className="hidden"></div>
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper
        className={`bg-cyan-400 h-[450px] select-none lg:h-[600px] ${className}`}
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

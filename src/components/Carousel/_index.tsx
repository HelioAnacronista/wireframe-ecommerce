import "swiper/swiper-bundle.css";

import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../Loader";
import BottomAd from "./BottomAd";
import ImageAd from "./ImageAd";
import MiddleAd from "./MiddleAd";
import Page from "./Page";
import TopAd from "./TopAd";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Carousel = ({ className = "" }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // set the timeout duration in milliseconds

    return () => clearTimeout(timeout);
  }, []); // empty array as second argument means this effect only runs once

  const slides = [];

  let n: number = 3;
  for (let i = 0; i < n; i++) {
    slides.push(
      <SwiperSlide className="w-full" key={`slide-${i}`} tag="li">
        <div>
          <ImageAd />
          <div className="container flex items-center justify-center">
            <TopAd />
            <MiddleAd />
            <div className="container flex items-center justify-center">
              <BottomAd children={<Page page={i} totalPages={3} />} />
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <>
      {loading ? (
        <div className="container flex items-center justify-center">
          <Loader />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Carousel;

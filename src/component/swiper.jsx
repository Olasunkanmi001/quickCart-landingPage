import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import slide1 from "../assets/Frame 1171275962.png";
import slide2 from "../assets/Frame 1171275963.png";
import slide3 from "../assets/Frame 1171275964.png";

const IntroductionToCrypto = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-10 font-sans">
      {/* Swiper Slider */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1} // Always one slide visible
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="w-full rounded-md md:rounded-3xl overflow-hidden"
      >
        {[slide1, slide2, slide3].map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide}
              alt={`Crypto slide ${index + 1}`}
              className="w-full h-auto max-h-[80vh] object-cover md:object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default IntroductionToCrypto;
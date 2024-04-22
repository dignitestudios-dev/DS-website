import { Dubai, Florida, Pakistan, Wyoming } from "@/public/export";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 2,
    },

    900: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
};

const FindOurOfficesSwiper = () => {
  return (
    <div className="w-full flex lg:hidden">
      <Swiper className="w-full">
        <SwiperSlide>
          <img src="/dubai.png" alt="" className="w-full h-80 rounded-xl" />


        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/pakistan.png"
            alt=""
            className="w-full h-80 rounded-xl"
          />

        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/florida.png"
            alt=""
            className="w-full h-80 rounded-xl"
          />

        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/wyoming.png"
            alt=""
            className="w-full h-80 rounded-xl"
          />

        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default FindOurOfficesSwiper;

import React from "react";
import IndustryCard from "./IndustryCard";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    850: {
      slidesPerView: 2,
    },

    1100: {
      slidesPerView: 4,
    },
    2560: {
      slidesPerView: 6,
    },
  },
};

const EmpowerIndustries = () => {
  return (
    <section className="w-full py-12 global-padding-horizontal">
      <h2 className="headings-size mt-2">
        <span className="text-[#F15C20]">Empowering</span> Industries With
        State-Of-The-Art Solutions
      </h2>
      <p className="text-lg font-normal mt-4 lg:w-[87%]">
        Among premier mobile app development companies, we batten exceptional
        assistance on a wider scale to flourish Android and iOS devices
        internationally. From a full-cycle of mobile development, we construct
        and refine the design and performance of the app productively. As a
        reputable provider of native mobile app development services we strive
        to meet the exigencies of our valuable consumers.
      </p>

      <Swiper
        {...sliderSettings}
        className="mySwiper flex overflow-x-hidden w-full mt-10"
      >
        <SwiperSlide>
          <img
            src="/education-industry.png"
            alt=""
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/healthcare-industry.png"
            alt=""
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/ecommerce-industry.png"
            alt=""
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/real-state-industry.png"
            alt=""
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/healthcare-industry.png"
            alt=""
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/ecommerce-industry.png"
            alt=""
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/real-state-industry.png"
            alt=""
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default EmpowerIndustries;

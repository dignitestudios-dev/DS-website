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
    540: {
      slidesPerView: 1,
    },

    650: {
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
            src="/Native-app-development-education-industry-app.webp"
            alt="the image shows multiple color pencils to showcase the education industry"
            title="Native app development education industry app"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Native-app-development-in-Healthcare-Industry.webp"
            alt="Native app development in Healthcare Industry image shows a doctor is holding a stethoscope"
            title="Native app development in Healthcare Industry"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Native-app-development-in-ecommerce-Industry.webp"
            alt="Native app development in E-commerce Industry image shows three bottles kept over the table"
            title="Native app development in E-commerce Industry"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Native-app-development-in-Real-Estate-Industry.webp"
            alt="Native app development in Real Estate Industry image shows under-construction building"
            title="Native app development in Real Estate Industry"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Native-app-development-in-travel-and-hospitality-industry.webp"
            alt="Native app development in travel and hospitality industry image shows the window of aircraft views aesthetically pleasing sky"
            title="Native app development in travel and hospitality industry"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Native-app-development-in-insurance-industry.webp"
            alt="Native app development in insurance industry image shows a person is writing something on a paper"
            title="Native app development in insurance industry"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Native-app-development-in-banking-industry.webp"
            alt="Native app development in banking industry image shows currency note"
            title="Native app development in banking industry"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default EmpowerIndustries;

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
        Dignite is revolutionizing innovative solutions across multiple
        international platforms. We are actively developing cutting-edge
        footprints for renowned brands and businesses. Here we mark global
        recognition to boost industries' persona in mobile app development.
      </p>

      <Swiper
        {...sliderSettings}
        className="mySwiper flex overflow-x-hidden w-full mt-10"
      >
        <SwiperSlide>
          <img
            width={280}
            height={320}
            src="/Native-app-development-education-industry-app.webp"
            alt="the image shows multiple color pencils to showcase the education industry"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={280}
            height={320}
            src="/Native-app-development-in-Healthcare-Industry.webp"
            alt="Native app development in Healthcare Industry image shows a doctor is holding a stethoscope"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={280}
            height={320}
            src="/Native-app-development-in-ecommerce-Industry.webp"
            alt="Native app development in E-commerce Industry image shows three bottles kept over the table"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={280}
            height={320}
            src="/Native-app-development-in-Real-Estate-Industry.webp"
            alt="Native app development in Real Estate Industry image shows under-construction building"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={280}
            height={320}
            src="/Native-app-development-in-travel-and-hospitality-industry.webp"
            alt="Native app development in travel and hospitality industry image shows the window of aircraft views aesthetically pleasing sky"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={280}
            height={320}
            src="/Native-app-development-in-insurance-industry.webp"
            alt="Native app development in insurance industry image shows a person is writing something on a paper"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={280}
            height={320}
            src="/Native-app-development-in-banking-industry.webp"
            alt="Native app development in banking industry image shows currency note"
            className="w-[280px] h-[320px]"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default EmpowerIndustries;

"use client";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },

    750: {
      slidesPerView: 2,
    },

    1100: {
      slidesPerView: 2,
    },
  },
};

const DesingShowCase = () => {
  return (
    <>
      <Swiper {...sliderSettings} className="my-4 z-10">
        <SliderButtons />
        <SwiperSlide > 
          <img src="/showcase1.webp" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide className="">
        <img src="/designshowcase2.webp" alt="" srcset="" />
        </SwiperSlide>       
        <SwiperSlide className="">
        <img src="/amaizing3.png" alt="" srcset="" />
        </SwiperSlide>       
        <SwiperSlide className="">
        <img src="/amaizing4.png" alt="" srcset="" />
        </SwiperSlide>       
        <SwiperSlide className="">
        <img src="/amaizing5.png" alt="" srcset="" />
        </SwiperSlide>       
      </Swiper>
    </>
  );
};

export default DesingShowCase;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center justify-end gap-6 absolute -top-[85px] md:-top-32 right-2 z-30">
      <button
        name="swipe left button"
        type="button"
        onClick={() => swiper.slidePrev()}
      >
        <HiOutlineArrowLeft className="w-8 h-8 text-[#B6B6B6] hover:text-[#F15C20] transition-all duration-200" />
      </button>
      <button
        name="swipe right button"
        type="button"
        onClick={() => swiper.slideNext()}
      >
        <HiOutlineArrowRight className="w-8 h-8 text-[#B6B6B6] hover:text-[#F15C20] transition-all duration-200" />
      </button>
    </div>
  );
};

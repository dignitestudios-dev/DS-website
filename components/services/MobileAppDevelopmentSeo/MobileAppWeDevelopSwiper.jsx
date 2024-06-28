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
  spaceBetween: 70,
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
      slidesPerView: 3,
    },
  },
};

const MobileAppWeDevelopSwiper = () => {
  return (
    <>
      <Swiper {...sliderSettings} className="z-10">
        <SliderButtons />
        <SwiperSlide className="">
          <div className="w-full 2xl:w-[400px] overflow-hidden bg-[#241C40] rounded-[24px] p-10 relative h-[425px] group">
            <h1 className="text-white text-[22px] font-bold z-30 float-start">
              Streaming App
            </h1>
            <img
              src="/stream-app-shadow.webp"
              alt="two mockup screens showing streaming mobile app development"
              title="Streaming mobile app development"
              className="w-[130%] right-0 left-0 bottom-1 absolute"
            />
            <img
              src="/purple-mobile-streaming-mobile-app-development.webp"
              alt="two mockup screens showing streaming mobile app development"
              title="Streaming mobile app development"
              className="w-[349.72px] h-[455.75px] absolute -bottom-36 -right-10 group-hover:-bottom-28 transition-all duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full 2xl:w-[400px] overflow-hidden bg-[#0983F4] rounded-[24px] p-10 relative h-[425px] group">
            <h1 className="text-white text-[22px] font-bold z-30 float-start">
              E-Commerce App
            </h1>
            <div className="bg-[#319CFF] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
            <img
              src="/blue-ecommerce-mobile-app-development.webp"
              title="E-commerce mobile app development"
              alt=" two mockup screens show the e-commerce mobile app development"
              className="w-[800.72px] h-[490.98px] absolute -bottom-36 -right-14 group-hover:-bottom-28 transition-all duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full 2xl:w-[400px] overflow-hidden bg-[#07D98D] rounded-[24px] p-10 relative h-[425px] group">
            <h1 className="text-white text-[22px] font-bold z-30 float-start">
              Insurance App
            </h1>
            <div className="bg-[#16ED9F] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
            <img
              src="/green-insurance-mobile-app-development.webp"
              title="Insurance mobile app development"
              alt="Two mockup screens show Mobile Insurance mobile app development"
              className="h-[431.37px] w-[510.23px] absolute -bottom-24 2xl:-bottom-[105px] -right-16 group-hover:-bottom-16 transition-all duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full 2xl:w-[400px] overflow-hidden bg-[#FEAE12] rounded-[24px] p-10 relative h-[425px] group">
            <h1 className="text-white text-[22px] font-bold z-30 float-start">
              Utility App
            </h1>
            <div className="bg-[#FFC046] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
            <img
              src="/yellow-utility-mobile-app-development.webp"
              title="Utility mobile app development"
              alt="two mockup screens show the utility mobile app development"
              className="w-[300.67px] h-[390.98px] absolute -bottom-8 right-0 group-hover:-bottom-2 transition-all duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full 2xl:w-[400px] overflow-hidden bg-[#F4096C] rounded-[24px] p-10 relative h-[425px] group">
            <h1 className="text-white text-[22px] font-bold z-30 float-start">
              Dating App
            </h1>
            <div className="bg-[#FF4292] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
            <img
              src="/red-dating-mobile-app-development.png"
              title="Dating mobile app development"
              alt="two mockup screens show the dating mobile app development"
              className="w-[400.67px] absolute -bottom-52 -right-11 group-hover:-bottom-44 transition-all duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full 2xl:w-[400px] overflow-hidden bg-[#9875FD] rounded-[24px] p-10 relative h-[425px] group">
            <h1 className="text-white text-[22px] font-bold z-30 float-start">
              Telehealth App
            </h1>
            <div className="bg-[#9488FF] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
            <img
              src="/purple-telehealth-mobile-app-development.png"
              title="Telehealth mobile app development"
              alt="two mockup screens show the telehealth mobile app development"
              className="w-[400.67px] absolute -bottom-52 -right-12 group-hover:-bottom-44 transition-all duration-300"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MobileAppWeDevelopSwiper;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center justify-end gap-6 absolute -top-32 right-2 z-30">
      <button onClick={() => swiper.slidePrev()}>
        <HiOutlineArrowLeft className="w-8 h-8 text-[#B6B6B6]" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <HiOutlineArrowRight className="w-8 h-8 text-[#F15C20]" />
      </button>
    </div>
  );
};

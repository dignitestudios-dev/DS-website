"use client";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";

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
          <div className="w-full 2xl:w-[400px] overflow-hidden bg-[#AE0843] rounded-[24px] p-10 relative h-[400px] md:h-[425px] group">
            <h1 className="text-white text-[22px] font-bold z-30 float-start">
              Lending App
            </h1>
            <div className="bg-[#DD065C] w-[130%] h-[115%] absolute -left-12 top-28 rounded-full" />
            <Image
              loader={customLoader}
              width={300}
              height={431}
              src="/lending-app.png"
              alt="two mockup screens showing streaming mobile app development"
              title="Streaming mobile app development"
              className="w-[95%] absolute -bottom-8 lg:-bottom-10 right-0 group-hover:-bottom-4 lg:group-hover:-bottom-6 transition-all duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full 2xl:w-[400px] overflow-hidden bg-[#4C7BFC] rounded-[24px] p-10 relative h-[400px] md:h-[425px] group">
            <h1 className="text-white text-[22px] font-bold z-30 float-start">
              Booking App
            </h1>
            <div className="bg-[#658EFF] w-[130%] h-[115%] absolute -left-12 top-28 rounded-full top-rated-category1" />
            <Image
              loader={customLoader}
              width={300}
              height={431}
              src="/booking-app.png"
              title="booking app mobile app development"
              alt="two mockup screens show the booking mobile app development"
              className="w-[95%] absolute -bottom-8 lg:-bottom-10 right-0 group-hover:-bottom-4 lg:group-hover:-bottom-6 transition-all duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full 2xl:w-[400px] overflow-hidden bg-[#9143F4] rounded-[24px] p-10 relative h-[400px] md:h-[425px] group">
            <h1 className="text-white text-[22px] font-bold z-30 float-start">
              Social Media App
            </h1>
            <div className="bg-[#A35AFF] w-[130%] h-[115%] absolute -left-12 top-28 rounded-full top-rated-category1" />
            <Image
              loader={customLoader}
              width={300}
              height={431}
              src="/social-media-app.png"
              title="social media mobile app development"
              alt="Two mockup screens show social media mobile app development"
              className="w-[95%] absolute -bottom-8 lg:-bottom-10 right-0 group-hover:-bottom-4 lg:group-hover:-bottom-6 transition-all duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full 2xl:w-[400px] overflow-hidden bg-[#117E77] rounded-[24px] p-10 relative h-[400px] md:h-[425px] group">
            <h1 className="text-white text-[22px] font-bold z-30 float-start">
              Ticketing App
            </h1>
            <div className="bg-[#158F88] w-[130%] h-[115%] absolute -left-12 top-28 rounded-full top-rated-category1" />
            <Image
              loader={customLoader}
              width={300}
              height={431}
              src="/ticketing-app.png"
              title="Ticketing mobile app development"
              alt="two mockup screens show the ticketing mobile app development"
              className="w-[95%] absolute -bottom-8 lg:-bottom-10 right-0 group-hover:-bottom-4 lg:group-hover:-bottom-6 transition-all duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full 2xl:w-[400px] overflow-hidden bg-[#3A7DFF] rounded-[24px] p-10 relative h-[400px] md:h-[425px] group">
            <h1 className="text-white text-[22px] font-bold z-30 float-start">
              Communication App
            </h1>
            <div className="bg-[#4B88FF] w-[130%] h-[115%] absolute -left-12 top-28 rounded-full top-rated-category1" />
            <Image
              loader={customLoader}
              width={300}
              height={431}
              src="/communication-app.png"
              title="Dating mobile app development"
              alt="two mockup screens show the dating mobile app development"
              className="w-[95%] absolute -bottom-8 lg:-bottom-10 right-0 group-hover:-bottom-4 lg:group-hover:-bottom-6 transition-all duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full 2xl:w-[400px] overflow-hidden bg-[#F8B84E] rounded-[24px] p-10 relative h-[400px] md:h-[425px] group">
            <h1 className="text-white text-[22px] font-bold z-30 float-start">
              Marketplace App
            </h1>
            <div className="bg-[#FFC86C] w-[130%] h-[115%] absolute -left-12 top-28 rounded-full top-rated-category1" />
            <Image
              loader={customLoader}
              width={300}
              height={431}
              src="/market-place-app.png"
              title="Telehealth mobile app development"
              alt="two mockup screens show the telehealth mobile app development"
              className="w-[95%] absolute -bottom-8 lg:-bottom-10 right-0 group-hover:-bottom-4 lg:group-hover:-bottom-6 transition-all duration-300"
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

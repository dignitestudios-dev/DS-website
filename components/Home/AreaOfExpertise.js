"use client";
import { expertise } from "@/constants/areaofexpertise";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 60,
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
    1560: {
      slidesPerView: 3,
    },
  },
};

const AreaOfExpertise = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <section className="w-full relative overflow-hidden px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48 py-10">
      <div className="w-full relative overflow-hidden">
        <div className="flex flex-col gap-2">
          <div className="mb-4">
            <span className="text-[#F15C20] text-xl font-semibold uppercase">
              specialized
            </span>
            <img src="/lines3.png" className="w-[122px]" alt="lines3" title="lines3" />
          </div>
          <h2 className="lg:font-bold uppercase font-extrabold text-4xl lg:text-5xl xl:text-[72px] 2xl:text-[104px] tracking-tighter xl:font-bold">
            Area Of Expertise
          </h2>
        </div>

        <div
          className={`border ${
            theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
          } w-full mb-7 mt-4`}
        />

        <Swiper {...sliderSettings} className=" z-10">
          <SliderButtons />
          {expertise.map((card, i) => {
            return (
              <SwiperSlide key={i} className="">
                <div
                  className={`h-[350px] lg:h-[340px] xl:h-[320px] rounded-[18px]
                   p-6 flex flex-col items-start gap-0 text-start group ${
                     theme === "dark"
                       ? "bg-[#1c1c1c] hover:bg-[#F15C20] text-white transition-all duration-200"
                       : "bg-[#FAFAFA] hover:bg-[#F15C20] text-white transition-all duration-200"
                   }`}
                >
                  <h3
                    className={`font-semibold text-xl mb-2 ${
                      theme === "light"
                        ? "text-black group-hover:text-white"
                        : "text-white"
                    }`}
                  >
                    {card?.heading}
                  </h3>
                  <p
                    className={`${
                      theme === "dark"
                        ? "text-white"
                        : "text-[#424242] group-hover:text-white"
                    } text-[14px] font-medium`}
                  >
                    {card?.text}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default AreaOfExpertise;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center justify-end gap-6 absolute -bottom-12 lg:-bottom-0 lg:-top-[430px] 2xl:-top-[485px] right-[35%] lg:right-2 z-30">
      <button onClick={() => swiper.slidePrev()}>
        <HiOutlineArrowLeft className="w-8 h-8 text-[#B6B6B6] hover:text-[#F15C20]" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <HiOutlineArrowRight className="w-8 h-8 text-[#B6B6B6] hover:text-[#F15C20]" />
      </button>
    </div>
  );
};

"use client";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GlobalContext } from "@/context/GlobalContext";
import { VALUE_PROPOSITION } from "@/constants/valueproposition";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
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
      slidesPerView: 3,
    },
    2560: {
      slidesPerView: 4,
    },
  },
};

export default function ValuePropositionSection() {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full relative overflow-hidden global-padding-horizontal py-10">
      <div className="w-full relative overflow-hidden">
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex flex-col items-start">
            <p className="text-[#F15C20] text-xl font-bold uppercase">
              Value Proposition of
            </p>
            <img
              src="/value-proposition-lines.png"
              alt="lines"
              className="w-[227px] h-[8px]"
            />
          </div>
          <h2 className="text-3xl mt-3 md:text-4xl lg:text-[58px] xl:text-[68px] 2xl:text-[80px] lg:leading-[57px] font-bold uppercase tracking-tighter">
            dignite studios
          </h2>
          <p className="text-[15px] font-normal text-[#2A2A2A] lg:w-[44%] mt-3 leading-[20.4px]">
            Harnessing productive measures to provision adequate mobile app
            evolution roadmap for the partners and clients to bystander sterling
            mobile app re-architecting from our top-notch support activities. 
          </p>
        </div>

        <Swiper {...sliderSettings} className=" z-10">
          <SliderButtons />
          {VALUE_PROPOSITION.map((card, i) => {
            return (
              <SwiperSlide key={i} className="">
                <div
                  className={`h-[320px] lg:h-[360px] xl:h-[310px] 2xl:h-[340px] w-full rounded-[18px]
                   p-6 pt-3 flex flex-col items-start gap-0 text-start group  ${
                     theme === "dark"
                       ? "bg-[#1c1c1c] hover:bg-[#F15C20] text-white transition-all duration-200"
                       : "bg-[#FAFAFA] hover:bg-[#F15C20] text-white transition-all duration-200"
                   }`}
                >
                  <h3 className="text-[#B8B8B8] text-[20px] md:text-[40px] font-bold">
                    {card?.count}
                  </h3>
                  <h2
                    className={`font-semibold text-xl md:mb-2 ${
                      theme === "light"
                        ? "text-[#424242] group-hover:text-white"
                        : ""
                    }`}
                  >
                    {card?.title}
                  </h2>
                  <p
                    className={`${
                      theme === "dark"
                        ? "text-white "
                        : "text-[#424242] group-hover:text-white"
                    } text-[13px] font-medium`}
                  >
                    {card?.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

const SliderButtons = () => {
  const swiper = useSwiper();
  const { theme } = useContext(GlobalContext);
  return (
    <div className="flex items-center justify-end gap-3 absolute -top-14 md:-top-24 right-4 lg:-top-28 md:right-0 z-30">
      <button
        onClick={() => swiper.slidePrev()}
        name="swipe left button"
        type="button"
        className={`rounded-full ${
          theme === "light" ? "bg-[#FAFAFA]" : "bg-[#333333]"
        } hover:bg-[#F15C20] hover:text-white transition-all duration-200 text-xl w-[45px] h-[45px] xl:w-[76px] xl:h-[76px]`}
      >
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
        name="swipe right button"
        type="button"
        className={`rounded-full ${
          theme === "light" ? "bg-[#FAFAFA]" : "bg-[#333333]"
        } hover:bg-[#F15C20] hover:text-white transition-all duration-200 text-xl w-[45px] h-[45px] xl:w-[76px] xl:h-[76px]`}
      >
        &gt;
      </button>
    </div>
  );
};

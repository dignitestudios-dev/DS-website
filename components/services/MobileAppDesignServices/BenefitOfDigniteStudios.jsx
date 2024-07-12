"use client";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BENEFITS_OF_DIGNITE_STUDIOS } from "@/constants/benefitsofdignitestudio";
import { GlobalContext } from "@/context/GlobalContext";

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
    2560:{
      slidesPerView: 4,
    }
  },
};

export default function BenefitOfDigniteStudios() {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full relative overflow-hidden px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48 py-10">
      <div className="w-full relative overflow-hidden">
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-[#F15C20] text-2xl font-bold uppercase">
            top-tier
          </span>
          <span className="text-3xl md:text-4xl lg:text-[58px] xl:text-[68px] 2xl:text-[80px] lg:leading-[57px] font-bold uppercase tracking-tighter">
            benefits of dignite studios
          </span>
        </div>

        <Swiper {...sliderSettings} className=" z-10">
          <SliderButtons />
          {BENEFITS_OF_DIGNITE_STUDIOS.map((card, i) => {
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
                  <h1 className="text-[#595959] text-[20px] md:text-[40px] font-bold">
                    {card?.count}
                  </h1>
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
    <div className="flex items-center justify-end gap-3 absolute -top-20 md:-top-24 right-4 lg:-top-28 md:right-0 z-30">
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

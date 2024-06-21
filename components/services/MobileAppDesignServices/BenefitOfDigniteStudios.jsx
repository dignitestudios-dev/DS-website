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

export default function BenefitOfDigniteStudios() {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full relative overflow-hidden px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48 py-10">
      <div className="w-full relative overflow-hidden">
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-[#F15C20] text-xl font-semibold uppercase">
            top-tier
          </span>
          <span className="text-3xl md:text-5xl lg:text-[68px] 2xl:text-[80px] font-bold uppercase">
            benefit of dignite studios
          </span>
        </div>

        <Swiper {...sliderSettings} className="">
          <SliderButtons />
          {BENEFITS_OF_DIGNITE_STUDIOS.map((card, i) => {
            return (
              <SwiperSlide key={i} className="">
                <div
                  className={`h-[340px] w-[438px] rounded-[18px]
                   p-6 pt-3 flex flex-col items-start gap-0 text-start ${
                     theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#FAFAFA]"
                   }`}
                >
                  <h5 className="text-[#B8B8B8] text-[40px] font-bold">
                    {card?.count}
                  </h5>
                  <h1 className="font-semibold text-xl mb-2">{card?.title}</h1>
                  <p className={`${theme === 'dark' ? 'text-white' : 'text-[#424242]'} text-[13px] font-medium`}>
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
  return (
    <div className="flex items-center justify-end gap-3 absolute -top-32 right-0">
      <button
        onClick={() => swiper.slidePrev()}
        className="rounded-full bg-[#FAFAFA] text-xl"
        style={{ width: "76px", height: "76px" }}
      >
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="rounded-full bg-[#F15C20] text-white text-xl"
        style={{ width: "76px", height: "76px" }}
      >
        &gt;
      </button>
    </div>
  );
};

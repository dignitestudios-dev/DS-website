"use client";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GlobalContext } from "@/context/GlobalContext";
import { VALUE_PROPOSITION } from "@/constants/valueproposition";
import { IOS_APP_DESIGN_BENEFITS_OF_WORKING_WITH_DIGNITE } from "@/constants/IosBenefitsOfWorkingWithDignite";

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

export default function WorkingWithDignite() {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full relative overflow-hidden global-padding-horizontal py-10">
      <div className="w-full relative overflow-hidden">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="headings-size">
            <span className="text-[#8F8F8F] text-xl font-bold uppercase block tracking-normal mb-3">
              Benefits of
            </span>
            working with <br />{" "}
            <span className="text-[#F15C20]">dignite studios</span>
          </h2>
          <p className="text-[15px] md:text-[18px] font-normal text-[#2A2A2A] lg:w-[64%] mt-3 leading-[26.46px]">
            Our team has a rich history of creating intuitive and coherent user
            experiences, ensuring customers have an enjoyable experience when
            interacting with your product or website. We provide comprehensive
            research and analysis to identify user needs and goals, so you can
            be sure the end product is tailored to your audience.
          </p>
        </div>

        <Swiper {...sliderSettings} className=" z-10">
          <SliderButtons />
          {IOS_APP_DESIGN_BENEFITS_OF_WORKING_WITH_DIGNITE.map((card, i) => {
            return (
              <SwiperSlide key={i} className="">
                <div
                  className={`h-[320px] lg:h-[360px] xl:h-[280px] w-full rounded-[18px]
                   p-6 flex flex-col items-start gap-0 text-start group  ${
                     theme === "dark"
                       ? "bg-[#393939] hover:bg-[#F15C20] text-white transition-all duration-200"
                       : "bg-[#FAFAFA] hover:bg-[#F15C20] text-white transition-all duration-200"
                   }`}
                >
                  <h3
                    className={`font-bold text-xl md:mb-2 ${
                      theme === "light"
                        ? "text-[#424242] group-hover:text-white"
                        : ""
                    }`}
                  >
                    {card?.title}
                  </h3>
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

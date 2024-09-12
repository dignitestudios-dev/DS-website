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
import { PWA_WEB_APP_SOLUTIONS } from "@/constants/PwaWebAppSolutions";
import { ANDROID_APP_DEV_SERVICES } from "@/constants/AndroidAppDevServices";
import ContactButton from "@/components/global/ContactButton";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 20,
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

export default function AndroidAppDevServices() {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full relative overflow-hidden global-padding-horizontal py-10 xl:py-20">
      <div className="w-full relative overflow-hidden">
        <div className="w-full flex">
          <div className="flex flex-col gap-2 mb-12">
            <div className="flex flex-col items-start">
              <p className="text-[#8F8F8F] text-xl font-bold uppercase">
                Premium Android App
              </p>
            </div>
            <h2 className="headings-size">development services</h2>
            <p
              className={`text-[15px] md:text-[18px] font-normal ${
                theme === "light" && "text-[#2A2A2A]"
              } lg:w-[64%] mt-3 leading-[26.46px]`}
            >
              At Dignite Studios, we execute feature-rich Android app using a
              modern tech stack. Our Android app developers put forward relative
              expertise to exceed top industry standards. Effective Android
              framework develops creative Android apps.
            </p>
          </div>
          <div className="lg:pt-10">
            <ContactButton text1={"Hire Developer"} text2={"Let's talk"} />
          </div>
        </div>

        <Swiper {...sliderSettings} className=" z-10">
          {/* <SliderButtons /> */}
          {ANDROID_APP_DEV_SERVICES.map((card, i) => {
            return (
              <SwiperSlide key={i} className="">
                <div
                  className={`h-[320px] lg:h-[360px] xl:h-[280px] w-full rounded-[18px]
                   p-7 flex flex-col items-start justify-start gap-3 text-start group border ${
                     theme === "dark"
                       ? " text-white transition-all duration-200"
                       : " text-white transition-all duration-200"
                   }`}
                >
                  <img
                    src={card.icon_src}
                    alt={card.icon_alt}
                    className="w-[40px] h-[40px]"
                  />
                  <h2
                    className={`font-bold text-xl ${
                      theme === "light" ? "text-[#424242]" : ""
                    }`}
                  >
                    {card?.title}
                  </h2>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-300 " : "text-[#424242]"
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

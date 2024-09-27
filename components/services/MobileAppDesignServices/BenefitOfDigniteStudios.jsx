"use client";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BENEFITS_OF_DIGNITE_STUDIOS } from "@/constants/benefitsofdignitestudio";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
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

export default function BenefitOfDigniteStudios() {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full relative overflow-hidden px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48 py-10">
      <div className="w-full relative overflow-hidden">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[58px] xl:text-[68px] 2xl:text-[80px] lg:leading-[57px] font-bold uppercase tracking-tighter">
            <span className="text-[#F15C20] text-2xl font-bold uppercase tracking-normal block mb-3">
              top-tier
            </span>
            benefits of dignite studios
          </h2>
        </div>

        <Swiper {...sliderSettings} className=" z-10">
          <SliderButtons />
          <SwiperSlide className="">
            <div
              className={`h-[320px] lg:h-[360px] xl:h-[310px] 2xl:h-[340px] w-full rounded-[18px]
                   p-6 pt-3 flex flex-col items-start gap-0 text-start group  ${
                     theme === "dark"
                       ? "bg-[#1c1c1c] hover:bg-[#F15C20] text-white transition-all duration-200"
                       : "bg-[#FAFAFA] hover:bg-[#F15C20] text-white transition-all duration-200"
                   }`}
            >
              <p className="text-[#B8B8B8] text-[20px] md:text-[40px] font-bold">
                01
              </p>
              <h3
                className={`font-semibold text-xl md:mb-2 ${
                  theme === "light"
                    ? "text-[#424242] group-hover:text-white"
                    : ""
                }`}
              >
                Recognizable Brand
              </h3>
              <p
                className={`${
                  theme === "dark"
                    ? "text-white "
                    : "text-[#424242] group-hover:text-white"
                } text-[13px] font-medium`}
              >
                Let’s transform your brand with our top-tier mobile app design
                services in digital technology. Frequent use of smartphones has
                shaped people's mindsets with higher expectations regarding
                innovation and constructive mobile app solutions. Here, Dignite
                Studios bestows highly innovative and user-friendly mobile app
                designs to make the navigation process easier. Also, we ensure
                to provide additional information about our company goals,
                achievements, and development processes.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={`h-[320px] lg:h-[360px] xl:h-[310px] 2xl:h-[340px] w-full rounded-[18px]
                   p-6 pt-3 flex flex-col items-start gap-0 text-start group  ${
                     theme === "dark"
                       ? "bg-[#1c1c1c] hover:bg-[#F15C20] text-white transition-all duration-200"
                       : "bg-[#FAFAFA] hover:bg-[#F15C20] text-white transition-all duration-200"
                   }`}
            >
              <p className="text-[#B8B8B8] text-[20px] md:text-[40px] font-bold">
                02
              </p>
              <h3
                className={`font-semibold text-xl md:mb-2 ${
                  theme === "light"
                    ? "text-[#424242] group-hover:text-white"
                    : ""
                }`}
              >
                Galvanizing Designs
              </h3>
              <p
                className={`${
                  theme === "dark"
                    ? "text-white "
                    : "text-[#424242] group-hover:text-white"
                } text-[13px] font-medium`}
              >
                Our thriving brand style and electrifying UI features will lead
                you to strengthen your brand’s identity, connect user
                engagements, and jack up business conversions. However, in a
                world of the latest technology, our mobile app design service
                scope focuses on the latest design trends and innovative UI/UX
                designs for their apps.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={`h-[320px] lg:h-[360px] xl:h-[310px] 2xl:h-[340px] w-full rounded-[18px]
                   p-6 pt-3 flex flex-col items-start gap-0 text-start group  ${
                     theme === "dark"
                       ? "bg-[#1c1c1c] hover:bg-[#F15C20] text-white transition-all duration-200"
                       : "bg-[#FAFAFA] hover:bg-[#F15C20] text-white transition-all duration-200"
                   }`}
            >
              <p className="text-[#B8B8B8] text-[20px] md:text-[40px] font-bold">
                03
              </p>
              <h3
                className={`font-semibold text-xl md:mb-2 ${
                  theme === "light"
                    ? "text-[#424242] group-hover:text-white"
                    : ""
                }`}
              >
                Data-Driven Strategies
              </h3>
              <p
                className={`${
                  theme === "dark"
                    ? "text-white "
                    : "text-[#424242] group-hover:text-white"
                } text-[13px] font-medium`}
              >
                Drawing upon 4 years of expertise, Dignite Studios frames
                data-oriented app layouts, revamps diverse human insights, and
                enhances user experience. Here, we strategically use original
                data to design illustrations appropriately.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={`h-[320px] lg:h-[360px] xl:h-[310px] 2xl:h-[340px] w-full rounded-[18px]
                   p-6 pt-3 flex flex-col items-start gap-0 text-start group  ${
                     theme === "dark"
                       ? "bg-[#1c1c1c] hover:bg-[#F15C20] text-white transition-all duration-200"
                       : "bg-[#FAFAFA] hover:bg-[#F15C20] text-white transition-all duration-200"
                   }`}
            >
              <p className="text-[#B8B8B8] text-[20px] md:text-[40px] font-bold">
                04
              </p>
              <h3
                className={`font-semibold text-xl md:mb-2 ${
                  theme === "light"
                    ? "text-[#424242] group-hover:text-white"
                    : ""
                }`}
              >
                Emerging Tech
              </h3>
              <p
                className={`${
                  theme === "dark"
                    ? "text-white "
                    : "text-[#424242] group-hover:text-white"
                } text-[13px] font-medium`}
              >
                The art of leveraging cutting-edge technologies like Augmented
                Reality, AI-driven tools, and sentiment analysis fosters
                powerful solutions for giant or start-up industries.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={`h-[320px] lg:h-[360px] xl:h-[310px] 2xl:h-[340px] w-full rounded-[18px]
                   p-6 pt-3 flex flex-col items-start gap-0 text-start group  ${
                     theme === "dark"
                       ? "bg-[#1c1c1c] hover:bg-[#F15C20] text-white transition-all duration-200"
                       : "bg-[#FAFAFA] hover:bg-[#F15C20] text-white transition-all duration-200"
                   }`}
            >
              <p className="text-[#B8B8B8] text-[20px] md:text-[40px] font-bold">
                05
              </p>
              <h3
                className={`font-semibold text-xl md:mb-2 ${
                  theme === "light"
                    ? "text-[#424242] group-hover:text-white"
                    : ""
                }`}
              >
                Anomalous Expertise
              </h3>
              <p
                className={`${
                  theme === "dark"
                    ? "text-white "
                    : "text-[#424242] group-hover:text-white"
                } text-[13px] font-medium`}
              >
                With years of thriving experience, Dignite Studios holds a large
                number of top-end UI designers, professional data analysts, and
                a specialized{" "}
                <Link
                  href={"/services/mobile-app-testing-services"}
                  className="text-[#F15C20]"
                >
                  mobile app testing
                </Link>{" "}
                squad to ensure the credibility, scope, and functionality of the
                apps.
              </p>
            </div>
          </SwiperSlide>
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

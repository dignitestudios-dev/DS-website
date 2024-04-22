"use client";

import React, { useContext } from "react";
import { styles } from "../../styles/styles";
import { GlobalContext } from "@/context/GlobalContext";
import { reviews } from "@/constants/reviews";
import TestimonialCard from "./TestimonialCard";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 2,
    },

    900:{
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
};

const Testimonials = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className={`w-full py-5 px-4 md:px-12 lg:px-28`}>
      <div className={``}>
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
          Testimonials
        </p>

        <h1
          className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-6xl`}
        >
          our clients
        </h1>
      </div>
      <div
        className="w-full h-[2px] my-4 rounded-full "
        style={{
          background: `${palette?.light_contrast_background}`,
        }}
      />

      <div
        className={`w-full pt-4 lg:pt-6 gap-10`}
      >
        <Swiper
          {...sliderSettings}
          modules={[Autoplay]}
          className=""
        >
          {reviews.map((review, index) => {
            return (
              <SwiperSlide key={index} className="">
                <TestimonialCard review={review} key={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* {reviews.map((review, index) => {
          return <TestimonialCard review={review} key={index} />;
        })} */}
      </div>
    </div>
  );
};

export default Testimonials
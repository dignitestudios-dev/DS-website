"use client";

import React, { useContext } from "react";
import { styles } from "../../styles/styles";
import { GlobalContext } from "@/context/GlobalContext";
import { val } from "@/constants/reviews";
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

    900: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
};

const Testimonials = () => {
  const { palette } = useContext(GlobalContext);
  console.log(val);
  return (
    <div
      id="testimonials"
      className={`w-full py-14 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  `}
    >
      <div className={``}>
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
          Testimonials
        </p>

        <h1
          className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-5xl xl:text-[72px] 2xl:text-[104px] tracking-tighter`}
        >
          our clients
        </h1>
      </div>
      <div
        className="w-full h-[2px]  rounded-full "
        style={{
          background: `${palette?.light_contrast_background}`,
        }}
      />

      <div className={`w-full pt-4 lg:pt-6 gap-10 overflow-hidden`}>
        <Swiper {...sliderSettings} modules={[Autoplay]} className="">
          {val.map(({ reviewBody, author: { name, jobtitle } }, index) => {
            return (
              <SwiperSlide key={index} className="">
                <TestimonialCard
                  reviewBody={reviewBody}
                  authorName={name}
                  jobtitle={jobtitle}
                  index={index}
                  key={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

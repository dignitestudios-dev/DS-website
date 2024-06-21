import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { BENEFITS_OF_DIGNITE_STUDIOS } from "@/constants/benefitsofdignitestudio";
import BenefitCard from "./BenefitCard";
import { GlobalContext } from "@/context/GlobalContext";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
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

export default function BenefitsSwiper() {
  const [swiperRef, setSwiperRef] = useState(null);
  const { palette } = useContext(GlobalContext);
  const swiper = useSwiper();

  return (
    <Swiper
        onSwiper={setSwiperRef}
        {...sliderSettings}
        className="mySwiper h-full bg-transparent"
      >
        <SliderButtons />
        {BENEFITS_OF_DIGNITE_STUDIOS.map((benefit, index) => {
          return (
            <SwiperSlide
              key={index}
              className="w-full md:w-[438px] flex items-center bg-transparent"
            >
              <BenefitCard benefit={benefit} key={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
  );
}

export const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute -top-10 right-10">
      <button onClick={() => swiper.slidePrev()} style={{width:"50px", height:'50px', border:"2px solid black"}}>&lt;</button>
      <button onClick={() => swiper.slideNext()} style={{width:"50px", height:'50px', border:"2px solid black"}}>&gt;</button>
    </div>
  );
};

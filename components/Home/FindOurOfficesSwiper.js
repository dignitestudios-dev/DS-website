
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
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

const FindOurOfficesSwiper = ({ offices }) => {
  return (
    <div className="w-full flex lg:hidden">
      <Swiper {...sliderSettings} modules={[Autoplay]} className="w-full">
        <SwiperSlide className="w-full h-72 md:h-80 relative z-10">
          <img src="/dubai.png" alt="" className="w-full h-72 md:h-80 rounded-xl" />
          <span className=" transition-all duration-300  flex flex-col items-start justify-center  px-4 absolute bottom-8 left-[17%] w-3/5 h-auto py-2 rounded-xl bg-white">
            <h1 className="text-md font-medium text-black">{offices[2]?.name}</h1>
            <p className="text-xs font-normal capitalize text-[#5c5c5c]">
              {offices[2]?.description}
            </p>
          </span>
        </SwiperSlide>
        <SwiperSlide className="w-full relative  h-72 md:h-80 z-10">
          <img src="/florida.png" alt="" className="w-full  h-72 md:h-80 rounded-xl" />
          <span className=" transition-all duration-300  flex flex-col items-start justify-center  px-4 absolute bottom-8 left-[17%] w-3/5 h-auto py-2 rounded-xl bg-white">
            <h1 className="text-md font-medium text-black">{offices[0]?.name}</h1>
            <p className="text-xs font-normal capitalize text-[#5c5c5c]">
              {offices[0]?.description}
            </p>
          </span>
        </SwiperSlide>
        <SwiperSlide className="w-full relative  h-72 md:h-80 z-10">
          <img src="/pakistan.png" alt="" className="w-full h-72 md:h-80 rounded-xl" />
          <span className=" transition-all duration-300  flex flex-col items-start justify-center  px-4 absolute bottom-8 left-[17%] w-3/5 h-auto py-2 rounded-xl bg-white">
            <h1 className="text-md font-medium text-black">{offices[3]?.name}</h1>
            <p className="text-xs font-normal capitalize text-[#5c5c5c]">
              {offices[3]?.description}
            </p>
          </span>
        </SwiperSlide>
        <SwiperSlide className="w-full relative  h-72 md:h-80 z-10">
          <img src="/wyoming.png" alt="" className="w-full h-72 md:h-80 rounded-xl" />
          <span className=" transition-all duration-300  flex flex-col items-start justify-center  px-4 absolute bottom-8 left-[17%] w-3/5 h-auto py-2 rounded-xl bg-white">
            <h1 className="text-md font-medium text-black">{offices[1]?.name}</h1>
            <p className="text-xs font-normal capitalize text-[#5c5c5c]">
              {offices[1]?.description}
            </p>
          </span>
        </SwiperSlide >
      </Swiper>

    </div>
  );
};

export default FindOurOfficesSwiper;

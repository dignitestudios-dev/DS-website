"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowRoundForward } from "react-icons/io";
export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  // autoplay: {
  //   delay: 3000,
  // },
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
    1390: {
      slidesPerView: 4,
    },
    1900: {
      slidesPerView: 5,
    },
  },
};

const icons = [
  {
    icon: "health.png",
  },
  {
    icon: "fin.png",
  },
  {
    icon: "ecom.png",
  },
  {
    icon: "edu.png",
  },
  {
    icon: "state.png",
  },
  {
    icon: "date.png",
  },
];

const Industries = ({ VALUE_PROPOSITION, header, header2, para }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Duplicate data to ensure infinite loop works smoothly
  const duplicatedPropositions = [
    ...(VALUE_PROPOSITION || []),
    ...(VALUE_PROPOSITION || []),
    ...(VALUE_PROPOSITION || []),
    ...(VALUE_PROPOSITION || []),
  ];

  return (
    <div className="w-full grid grid-cols-1  justify-start items-start py-20 md:py-40 ">
      <div className="flex relative z-20  w-[90%] md:w-[78%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[40px] md:leading[1.1] tracking-tighter md:text-7xl font-bold ">
          {header}
          <span className="text-[#F15C20]"> {header2}</span>{" "}
        </h1>
        <p className="text-sm md:text-lg my-6 dark:text-white  mx-auto text-[#0C0C0C]">
          {para}
        </p>
      </div>
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={"auto"}
          loopedSlides={10}
          loopAdditionalSlides={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="!w-full !py-12 h-full gap-0 relative overflow-visible"
        >
          {duplicatedPropositions?.map((value, index) => {
            const isActive = index === activeIndex;
            // Get original index for icons
            const originalIndex = index % (VALUE_PROPOSITION?.length || 1);

            return (
              <SwiperSlide
                key={index}
                className="!bg-white    !text-black !w-[290px] !h-[376px] shadow-2xl  !p-2 !rounded-[14px] transition-transform duration-500 !flex !flex-col !items-center !justify-center"
                style={{
                  transform: isActive ? "scale(1)" : "scale(0.9)",
                  transition: "transform 0.5s ease",
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <div
                  style={{
              
                    width: "100%",
                    // borderRadius: "12px",
                    // height: "460px",
                    transition: "all 0.1s ease",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "8px",
                    overflow: "hidden",
                  }}
                  className="relative z-50 bg-[linear-gradient(152.14deg,_#FFAA88_-78.52%,_#FFFFFF_63.9%)] rounded-b-[25px] h-[300px] rounded-t-xl  -mb-10   shadow-[#ffc2a9]"
                >
                  {/* <img src='/location/mobile-california/img.png' className='absolute' /> */}
                  <img
                    src={`/location/mobile-california/${icons[originalIndex].icon}`}
                    alt={value.title || "image"}
                    className={`object-contain select-none bg-[#fdddd0] m-4 pointer-events-none ${
                      isActive && "shadow-2xl"
                    }`}
                  />
                  
                  {isActive && (
                    <img
                      src="/location/mask.png"
                      className="absolute -top-10 -left-16 z-10 rounded-t-xl pointer-events-none"
                    />
                  )}
                  <div
                    className="flex items-center justify-start pt-16 px-4 gap-3 w-full"
                    style={{ textAlign: "start" }}
                  >
                    <h3 className="text-[16px] line-clamp-1 font-semibold  tracking-tight">
                      {value?.title}
                    </h3>
                  </div>

                  <p className="text-sm px-4 text-start lg:leading-[17px] font-medium line-clamp-5">
                    {value?.desc}
                  </p>
                </div>
                <div
                  className={`relative bottom-0 rounded-b-[14px] left-[50%] overflow-hidden translate-x-[-50%] pt-14 py-4 bg-[#FFC2A9] w-full mx-auto  text-center`}
                >
                  <div
                    className={`absolute bottom-0 -right-4 rounded-r-[14px] overflow-hidden h-[90px] bg-gradient-to-l from-[#FD6214] via-[#CF3E2F] to-[#B1182B] transition-all duration-500 ease-linear ${
                      isActive
                        ? "w-[120%] rounded-l-full "
                        : "w-[0] rounded-l-full"
                    }`}
                  ></div>

                  <button
                    className={`${
                      isActive && "text-white"
                    } flex items-center relative z-50 justify-center w-full  text-[#F15C20] font-medium`}
                  >
                    View More{" "}
                    <span>
                      <IoIosArrowRoundForward size={25} strokeWidth={5} />
                    </span>
                  </button>
                </div>
              </SwiperSlide>
            );
          })}

          {/* <SwiperButtons /> */}
        </Swiper>
      </div>
      <div></div>
    </div>
  );
};

export default Industries;

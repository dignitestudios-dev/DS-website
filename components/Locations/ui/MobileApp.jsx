"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { IoGrid, IoWalletOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
const icons = [
  {
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const MobileApp = ({ cards, header, header2, para }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const repeatedCards = [...cards, ...cards, ...cards];
  return (
    <div className="w-full py-24 md:py-40 overflow-hidden">
      {/* Heading */}
      <div className="w-[90%] md:w-[50%] mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          {header}
          <span className="text-[#F15C20]"> {header2}</span>
        </h1>
        <p className="text-lg my-6 text-[#0C0C0C]">{para}</p>
      </div>

      {/* Swiper */}
      <div className="mt-16 w-screen">
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={10}
          draggable
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // we control it manually
          }}
          loopAddBlankSlides
          className=" "
          onSwiper={(swiper) => {
            swiper.autoplay.start();
          }}
          //   className="!px-6 !overflow-visible"
        >
          {repeatedCards.map((card, index) => {
            const isActive = hoveredIndex === index;

            return (
              <SwiperSlide
                key={index}
                className="!w-[260px]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`h-[300px] relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? "bg-[#F15C20] text-white border-[#FDD0BF] shadow-xl"
                        : "bg-[#FFF7F4] text-[#0C0C0C] border-[#FDD0BF]"
                    }`}
                >
                  {!isActive && (
                    <img
                      src="/location/mobile-california/lines.png"
                      alt="lines"
                      className="absolute right-0 -top-16"
                    />
                  )}
                  {isActive && (
                    <img
                      src="/location/mobile-california/design.png"
                      alt="lines"
                      className="absolute right-0 w-full -bottom-28 scale-125"
                    />
                  )}
                  <div className="p-6 items-start flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 flex items-center border border-[#F15C20] justify-center rounded-full mb-6
                        ${
                          isActive
                            ? "bg-white text-[#F15C20]"
                            : "bg-[#FFE2D6] text-[#F15C20]"
                        }`}
                    >
                      {card.icon}
                    </div>

                    <h3
                      className={`"text-lg h-[85px] font-semibold mb-3 transition-all ease-linear" ${isActive && "h-fit transition-all ease-linear"} `}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm text-start leading-relaxed opacity-90">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MobileApp;

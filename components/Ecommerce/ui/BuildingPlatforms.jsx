"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const BuildingPlatforms = ({
  VALUE_PROPOSITION,
  header,
  header2,
  para,
  button,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  const duplicatedPropositions = [
    ...VALUE_PROPOSITION,
    ...VALUE_PROPOSITION,
    ...VALUE_PROPOSITION,
    ...VALUE_PROPOSITION,
  ];

  useEffect(() => {
    const resumeAutoplay = () => {
      if (desktopSwiperRef.current && !desktopSwiperRef.current.destroyed) {
        desktopSwiperRef.current.autoplay.start();
      }
      if (mobileSwiperRef.current && !mobileSwiperRef.current.destroyed) {
        mobileSwiperRef.current.autoplay.start();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        resumeAutoplay();
      }
    };

    const handleWindowFocus = () => {
      resumeAutoplay();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleWindowFocus);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, []);

  // Desktop card dimensions
  const activeCardWidth = "596px";
  const inactiveCardWidth = "292px";
  const cardHeight = "283px";
  const cardPadding = "44px";
  const innerContentWidth = "391px";
  const logoSize = 120;

  return (
    <div className="w-full grid grid-cols-1 justify-start items-start">
      {/* Header */}
      <div className="flex relative z-20 w-[90%] md:w-[78%] flex-col text-center mx-auto items-center">
        <h2 className="text-4xl leading-[40px] md:leading[1.1] tracking-tighter md:text-7xl font-bold">
          {header}
          <span className="text-[#F15C20]"> {header2}</span>{" "}
        </h2>
        <p className="text-sm md:text-lg my-6 dark:text-white md:w-[60%] mx-auto text-[#0C0C0C]">
          {para}
        </p>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={"auto"}
          loopedSlides={10}
          loopAdditionalSlides={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => {
            desktopSwiperRef.current = swiper;
            setActiveIndex(swiper.activeIndex);
          }}
          className="!w-full !py-12 h-full gap-0 relative overflow-visible"
        >
          {duplicatedPropositions?.map((value, index) => {
            const isActive = index === activeIndex;
            return (
              <SwiperSlide
                key={index}
                className="!bg-transparent !flex !items-center !justify-center"
                style={{
                  width: isActive ? activeCardWidth : inactiveCardWidth,
                  height: cardHeight,
                  margin: "0 10px",
                  transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <motion.div
                  layout
                  animate={{
                    boxShadow: isActive
                      ? "0px 0px 20px rgba(241,92,32,0.21)"
                      : "0px 0px 0px rgba(241,92,32,0)",
                  }}
                  transition={{
                    layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                    boxShadow: { duration: 0.4, ease: "easeInOut" },
                  }}
                  className={`relative overflow-hidden rounded-[23px] flex flex-col items-start justify-between ${isActive ? "ml-0" : "ml-0"}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: cardPadding,
                    border: isActive
                      ? "2px solid transparent"
                      : "2px solid #F9F9F9",
                    background: isActive
                      ? "linear-gradient(#F9F9F9, #F9F9F9) padding-box, linear-gradient(281.49deg, rgba(240,216,207,0) 3.25%, #F15C20 98.62%) border-box"
                      : "#F9F9F9",
                    transition: "border 0.4s ease, background 0.4s ease",
                  }}
                >
                  <div className="flex flex-col items-start justify-between h-full z-10 w-full">
                    {/* Title */}
                    <motion.h3
                      layout="position"
                      animate={{
                        marginBottom: isActive ? "20px" : "10px",
                      }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      className="font-semibold tracking-[-0.04em] text-[#0C0C0C] text-start"
                      style={{
                        fontSize: "20px",
                        lineHeight: "105%",
                        width: isActive ? innerContentWidth : "100%",
                        transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {value?.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      animate={{
                        opacity: isActive ? 1 : 0.55,
                        marginBottom: isActive ? "20px" : "0px",
                      }}
                      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                      className={`font-normal tracking-[-0.014em] text-[#0C0C0C] text-start ${
                        isActive ? "" : "line-clamp-1"
                      }`}
                      style={{
                        fontSize: "14px",
                        lineHeight: "136%",
                        width: isActive ? innerContentWidth : "100%",
                      }}
                    >
                      {value?.desc}
                    </motion.p>
                  </div>

                  {/* Logo */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.img
                        key={`logo-${index}`}
                        src={value.logo}
                        alt={value.title}
                        width={logoSize}
                        height={logoSize}
                        initial={{ opacity: 0, x: 20, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, x: 20, y: 20 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1],
                          delay: 0.15,
                        }}
                        className="absolute md:block hidden overflow-visible right-[0px] bottom-[0px] object-contain"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden w-full overflow-hidden px-4 py-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            mobileSwiperRef.current = swiper;
          }}
          className="w-full relative overflow-visible"
        >
          {VALUE_PROPOSITION?.map((value, index) => (
            <SwiperSlide key={`mobile-${index}`}>
              <div
                className="w-[90%] mx-auto h-[240px] p-6 rounded-[23px] flex flex-col items-start justify-start text-left relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(#F9F9F9, #F9F9F9) padding-box, linear-gradient(281.49deg, rgba(240,216,207,0) 3.25%, #F15C20 98.62%) border-box",
                  border: "2px solid transparent",
                }}
              >
                <div className="flex flex-col items-start w-full relative z-10">
                  <h3 className="font-semibold text-[20px] leading-[105%] mb-4 text-[#0C0C0C] w-full">
                    {value?.title}
                  </h3>
                  <p className="font-normal text-[14px] leading-[136%] text-[#0C0C0C] w-full">
                    {value?.desc}
                  </p>
                </div>

                {value.logo && (
                  <img
                    src={value.logo}
                    alt={value.title}
                    className="absolute right-0 bottom-0 w-24 h-24 object-contain z-0"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Button */}
      {button && (
        <div className="flex justify-center items-center mt-8 md:mt-12">
          <Link
            href={"/contact-us"}
            className="flex items-center group justify-center w-fit"
          >
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full font-normal transition-colors">
              {button ? button : "Talk to our California-based team"}
            </button>
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
              <MdArrowOutward />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BuildingPlatforms;

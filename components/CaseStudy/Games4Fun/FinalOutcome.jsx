"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay , EffectCoverflow } from "swiper/modules";
import React from "react";

const images = [
  "/gamesfun/monitor-1.png",
  "/gamesfun/monitor-2.png",
  "/gamesfun/monitor-3.png",
  "/gamesfun/monitor-4.png",
  "/gamesfun/monitor-5.png",
  "/gamesfun/monitor-1.png",
    "/gamesfun/monitor-2.png",

];

const FinalOutcome = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 overflow-hidden">
      {/* HEADER */}
      <div className="text-center max-w-5xl mb-16 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Final  <span className="text-[#C100FF]">Outcomes</span>
        </h2>
        <p className="leading-relaxed ">
         The Games4fun platform delivers a smart, AI-powered PC-building experience through accurate FPS estimates that help users understand expected performance. It provides clear component compatibility validation and a user-friendly shopping and selection process, making building a custom PC easy to get excited about. The admin panel makes it easy to manage products, users, and game data. It is combined with a polished, refined identity focused on the gamers, the Games4fun offers a fluent, engaging, and reliable Web Application Development Services experience. Gamers can confidently create PCs tailored to their games, budgets, and performance goals without any technical issues. 
        </p>
      </div>

     <div className="relative w-screen h-[50vh] md:h-[400px] flex items-center justify-center overflow-hidden">
  {/* Laptop Frame */}
  {/* <img
    src="/laptop.png"
    alt="laptop"
    className="absolute md:block hidden w-[240px] md:w-[600px] 2xl:w-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
  /> */}

  <div className="absolute top-1/2 left-1/2 w-[300px]  md:w-[450px] 2xl:w-[500px] h-[100px] md:h-[300px] 2xl:h-[340px] -translate-x-1/2 -translate-y-1/2 z-10">
    <Swiper
      modules={[Autoplay  ,EffectCoverflow]}
      spaceBetween={-50}
      slidesPerView={"auto"}
      loopedSlides={images.length}
      loopAdditionalSlides={2}
      centeredSlides={true}
      loop={true}
      speed={1000}
        coverflowEffect={{
    rotate: 0, // no rotation
    stretch: 0, 
    depth: 100,
    modifier: 1,
    scale: 1.5, // center slide scale
  }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      className="!overflow-visible !w-full !h-full !flex !justify-center relative"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx} className="!flex !justify-center !w-full !items-center">
          {({ isActive }) => (
            <div
              className={`transition-all duration-500 !w-fit ease-out cursor-pointer ${
                isActive ? "scale-[3] md:scale-110 2xl:scale-105 z-10" : "scale-100 opacity-90 rounded-xl"
              } w-full h-full`}
            >
              <img
                src={img}
                alt={`Dashboard view ${idx + 1}`}
                className={` !h-full object-contain ${!isActive && "rounded-xl"} `}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* LEFT/RIGHT GRADIENT OVERLAYS */}
  {/* <div className="absolute left-0 w-10 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-30 pointer-events-none" />
  <div className="absolute right-0 w-10 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-30 pointer-events-none" /> */}
</div>



    </div>
  );
};

export default FinalOutcome;
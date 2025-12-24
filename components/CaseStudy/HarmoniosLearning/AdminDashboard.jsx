"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import React from "react";

const images = [
  "/monitor-1.png",
  "/monitor-2.png",
  "/monitor-3.png",
  "/monitor-4.png",
  "/monitor-5.png",
  "/monitor-6.png",
  "/monitor-7.png",
];

const AdminDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 overflow-hidden">
      {/* HEADER */}
      <div className="text-center max-w-5xl mb-16 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Admin <span className="dark:text-[#CEA3D8] text-purple-600">Dashboard</span>
        </h2>
        <p className="leading-relaxed ">
          The Admin Dashboard serves as the central control system for managing all content within Harmonious Learning. It streamlines
          the organization of tracks, stories, categories, and community uploads through an intuitive moderation flow with clear approve or
          reject actions. Admins can monitor user interactions, track engagement metrics, and generate detailed reports on content
          performance, listening patterns, and overall site activity trends. A dedicated feedback center allows admins to review parent
          suggestions and identify improvement opportunities. With a clean, efficient UI, the dashboard supports quick decision-making
          and ensures the platform remains safe, organized, and engaging for young users and their families.
        </p>
      </div>

     <div className="relative w-screen h-[40vh] md:h-[400px] flex items-center justify-center overflow-hidden">
  {/* Laptop Frame */}
  <img
    src="/laptop.png"
    alt="laptop"
    className="absolute md:block hidden w-[240px] md:w-[600px] 2xl:w-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
  />

  {/* Slider inside Laptop Screen */}
  <div className="absolute top-1/2 left-1/2 w-[160px]  md:w-[450px] 2xl:w-[500px] h-[90px] md:h-[300px] 2xl:h-[340px] -translate-x-1/2 -translate-y-1/2 z-10">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={5}
      slidesPerView={"auto"}
      loopedSlides={images.length}
      loopAdditionalSlides={2}
      centeredSlides={true}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      className="overflow-visible !w-full !h-full !flex !justify-center gap-4 relative"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx} className="!flex !justify-center !items-center">
          {({ isActive }) => (
            <div
              className={`transition-all duration-500 w-full ease-out cursor-pointer ${
                isActive ? "scale-150 md:scale-100 2xl:scale-105 z-10" : "scale-90 opacity-90 rounded-xl"
              } w-full h-full`}
            >
              <img
                src={img}
                alt={`Dashboard view ${idx + 1}`}
                className={`!w-fit !h-full object-contain ${!isActive && "rounded-xl"} `}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* LEFT/RIGHT GRADIENT OVERLAYS */}
  <div className="absolute left-0 w-10 md:w-32 h-full bg-gradient-to-r dark:from-[#222222] from-white to-transparent z-30 pointer-events-none" />
  <div className="absolute right-0 w-10 md:w-32 h-full bg-gradient-to-l dark:from-[#222222] from-white to-transparent z-30 pointer-events-none" />
</div>



    </div>
  );
};

export default AdminDashboard;
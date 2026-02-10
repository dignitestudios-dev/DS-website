"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowDown } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";

import { languages } from "./ProgrammingLanguages";
import { cloudPlatforms } from "./CloudPlatforms";
import { devTools } from "./DevelopmentTools";
import { databases } from "./Databases";
import ProgrammingLanguages from "./ProgrammingLanguages";
import CloudPlatforms from "./CloudPlatforms";
import DevelopmentTools from "./DevelopmentTools";
import Databases from "./Databases";
import { useState } from "react";

const TechAndTools = () => {
  const [activeTechStack, setActiveTechStack] = useState(
    "programming-languages",
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const techData = {
    "programming-languages": {
      label: "Programming Languages",
      data: languages,
    },
    databases: {
      label: "Databases",
      data: databases,
    },
    "cloud-platforms": {
      label: "Cloud Platforms",
      data: cloudPlatforms,
    },
    "development-tools": {
      label: "Development & Collaboration Tools",
      data: devTools,
    },
  };

  const activeData = techData[activeTechStack];

  return (
    <section className="w-full py-20 pt-32 bg-white overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center px-6">
        <h2 className="text-4xl tracking-tighter md:text-7xl font-bold lg:max-w-7xl mx-auto leading-[1.1] text-black">
          Tools And Technologies <br className="block md:hidden" /> We Use
        </h2>
        <p className="w-full md:w-[70%] mx-auto text-black/60 text-base md:text-lg">
          Our technology stack supports scalable mobile application development{" "}
          <br className="hidden md:block" /> Miami projects through the proven
          frameworks.
        </p>

        {/* MOBILE CATEGORY SELECTOR */}
        <div className="relative block md:hidden w-full max-w-[300px] mt-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full border border-orange-100 rounded-full py-3 px-6 flex items-center justify-between text-[#F15C20] font-medium transition-all"
          >
            {activeData.label}
            <div
              className={`bg-orange-50 p-1 rounded-full transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
            >
              <IoIosArrowDown className="text-orange-500" />
            </div>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white shadow-xl rounded-2xl p-2 z-50 border border-gray-50 flex flex-col items-start overflow-hidden">
              {Object.entries(techData).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTechStack(key);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors ${
                    activeTechStack === key
                      ? "bg-orange-50 text-[#F15C20] font-bold"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {value.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DESKTOP SELECTOR */}
      <section className="hidden md:block mt-10 p-2 rounded-lg bg-[#F8F5F3] mx-auto w-fit">
        <div className="w-full flex flex-col md:flex-row items-center justify-center mx-auto">
          {Object.entries(techData).map(([key, value]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTechStack(key)}
              className={`rounded-md transition-all ease-linear ${
                activeTechStack === key
                  ? "shadow-sm text-[#F15C20] p-1 bg-white"
                  : ""
              } px-3 text-lg font-medium text-[#212121]`}
            >
              {value.label}
            </button>
          ))}
        </div>
      </section>

      {/* MOBILE CAROUSEL */}
      <div className="block md:hidden mt-10 px-4 tech-swiper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.7}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-4"
        >
          {activeData.data.map((tech, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`flex flex-col items-center justify-center gap-6 p-10 rounded-[40px] transition-all duration-500  ${
                    isActive
                      ? "bg-[#F15C20] text-white shadow-2xl shadow-orange-200"
                      : "bg-gray-50 text-gray-800 opacity-60 scale-90"
                  }`}
                >
                  <div
                    className={`w-28 h-28 rounded-full flex items-center justify-center transition-colors duration-500 ${
                      isActive ? "bg-white/20" : "bg-[#F15C20]"
                    } p-4`}
                  >
                    <img
                      src={tech?.icon}
                      alt={tech?.title}
                      className={`p-2 object-contain transition-all duration-500 ${isActive ? "" : "brightness-0 invert"}`}
                    />
                  </div>
                  <p className="text-xl font-bold tracking-tight">
                    {tech?.title}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .tech-swiper .swiper-pagination-bullet {
            background: #d1d5db;
            opacity: 1;
            width: 8px;
            height: 8px;
          }
          .tech-swiper .swiper-pagination-bullet-active {
            background: #f15c20 !important;
            width: 20px;
            border-radius: 10px;
          }
          .tech-swiper .swiper-pagination {
            bottom: 0px !important;
          }
        `}</style>
      </div>

      {/* DESKTOP CONTENT */}
      <div className="hidden md:block">
        {activeTechStack === "programming-languages" ? (
          <ProgrammingLanguages />
        ) : activeTechStack === "cloud-platforms" ? (
          <CloudPlatforms />
        ) : activeTechStack === "development-tools" ? (
          <DevelopmentTools />
        ) : activeTechStack === "databases" ? (
          <Databases />
        ) : null}
      </div>
    </section>
  );
};

export default TechAndTools;

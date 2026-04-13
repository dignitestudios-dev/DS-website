"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import {
  SiReact,
  SiFlutter,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiAmazonaws,
  SiGooglecloud,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiKotlin,
  SiSwift,
} from "react-icons/si";

import { FaAmazon, FaJava } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";

const techData = {
  Mobile: [
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React Native", icon: <SiReact /> },
    { name: "Swift", icon: <SiSwift /> },
    { name: "Kotlin", icon: <SiKotlin /> },
  ],

  Backend: [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Java", icon: <FaJava /> },
  ],

  Cloud: [
    { name: "AWS", icon: <FaAmazon /> },
    { name: "Google Cloud", icon: <SiGooglecloud /> },
    { name: "Azure", icon: <FaMicrosoft /> },
  ],

  Database: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
};

const categories = Object.keys(techData);

const TabularTechs = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="w-full overflow-visible text-black">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-7xl leading-[42px] tracking-tighter lg:leading-[1.1] font-bold mb-6">
          Entertainment App Development Tech Stack
        </h2>

        <p className="font-extralight mx-auto mb-16 text-lg">
          We use modern tools to build secure and scalable apps. High
          performance and an effortless user interface are guaranteed by our
          entertainment software development.
        </p>

        {/* TAB BUTTONS */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-transparent p-1.5 rounded-full w-fit mx-auto border backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 md:px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[#F15C20] text-white shadow-[0_0_20px_rgba(241,92,32,0.4)]"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 min-h-[300px]">
          {techData[activeTab].map((tech) => (
            <div key={`${activeTab}-${tech.name}`} className="w-[220px]">
              <TechCard tech={tech} />
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden relative min-h-[320px] pb-12 flex justify-center">
          <div className="w-full max-w-[320px] px-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="!pb-12 tech-swiper"
            >
              {techData[activeTab].map((tech, idx) => (
                <SwiperSlide key={`${activeTab}-${idx}`}>
                  <TechCard tech={tech} />
                </SwiperSlide>
              ))}
            </Swiper>

            <style
              dangerouslySetInnerHTML={{
                __html: `
                  .tech-swiper .swiper-pagination-bullet {
                    background: #d1d5db !important;
                    opacity: 1 !important;
                  }
                  .tech-swiper .swiper-pagination-bullet-active {
                    background: #f15c20 !important;
                  }
                `,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ tech }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative h-[240px] w-full"
    >
      <div className="w-full h-full bg-white rounded-lg p-6 flex flex-col items-center justify-center border border-[#F15C20]/20">
        <div className="w-20 h-20 bg-[#F15C20] rounded-full flex items-center justify-center text-5xl text-white mb-5 shadow-lg">
          {tech.icon}
        </div>
        <h3 className="text-base font-medium text-[#212121] uppercase text-center">
          {tech.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default TabularTechs;

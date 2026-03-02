"use client";

import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Features = ({ header, header2, para, features, button }) => {
  return (
    <section className="w-full pb-2 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#111827] mb-6 tracking-tight"
          >
            {header} <span className="text-[#F15C20]">{header2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {para}
          </motion.p>
        </div>

        {/* Mobile Swiper (hidden on md and above) */}
        <div className="block md:hidden pb-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="feature-swiper"
          >
            {features?.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white mb-8 h-full rounded-[32px] border border-gray-200 p-8 flex flex-col items-center text-center transition-all duration-300 group hover:border-[#F15C20]/20 min-h-[300px]">
                  {/* Icon Container */}
                  <div className="mb-8 p-4 rounded-2xl bg-white transition-transform duration-300 group-hover:scale-110">
                    <div className="text-[#F15C20] text-6xl">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#111827] leading-snug group-hover:text-[#F15C20] transition-colors duration-300 px-4">
                    {feature.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx global>{`
            .feature-swiper .swiper-pagination-bullet {
              background: #d1d5db;
              opacity: 1;
              width: 8px;
              height: 8px;
            }
            .feature-swiper .swiper-pagination-bullet-active {
              background: #f15c20 !important;
              width: 20px;
              border-radius: 10px;
            }
            .feature-swiper .swiper-pagination {
              bottom: 0px !important;
            }
          `}</style>
        </div>

        {/* Features Grid (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features?.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 35px -5px rgba(241, 92, 32, 0.1), 0 10px 10px -5px rgba(241, 92, 32, 0.04)",
              }}
              className="bg-white rounded-[32px] border border-gray-200 p-8 flex flex-col items-center text-center transition-all duration-300 group hover:border-[#F15C20]/20 font-bold"
            >
              {/* Icon Container */}
              <div className="mb-8 p-4 rounded-2xl bg-white transition-transform duration-300 group-hover:scale-110">
                <div className="text-[#F15C20] text-6xl md:text-7xl">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#111827] leading-snug group-hover:text-[#F15C20] transition-colors duration-300 px-4">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12 mb-4">
          <Link
            href={"/contact-us"}
            className="flex items-center group justify-center w-fit"
          >
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20]  text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
              {button ? button : " Talk to our California-based team"}
            </button>
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
              <MdArrowOutward />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;

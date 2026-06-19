"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const DevelopmentApproach = ({ header, header2, subtitle, para, buttonText, items }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="w-full bg-[#0C0C0C] py-24  relative flex flex-col items-center overflow-hidden">
      
      {/* Header Section */}
      <div className="w-full max-w-[1440px] px-4 md:px-[80px] flex flex-col items-center text-center gap-[30px] z-10 mb-[80px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[40px] md:text-[68px] leading-[1.05] tracking-tight font-bold text-white capitalize"
        >
          {header} {header2 && <span className="text-[#F15C20]">{header2}</span>}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[18px] leading-[161%] font-light text-white max-w-[850px]"
        >
          {subtitle || para}
        </motion.p>
        {buttonText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact-us"
              className="flex items-center group justify-center mt-2"
            >
              <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full font-normal transition-colors">
                {buttonText}
              </button>
              <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                <MdArrowOutward />
              </button>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Carousel Section */}
      <div className="w-full relative z-10">
        <div className="w-full py-4 overflow-visible">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            grabCursor={true}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            breakpoints={{
              768: {
                slidesPerView: "auto",
                spaceBetween: 30,
              }
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            pagination={{
              el: '.dev-approach-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
              },
            }}
            className="!overflow-visible"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="!w-full md:!w-[406.67px]">
                <div className="group w-full h-[404px] bg-[#F4F4F4] hover:bg-[#F15C20] transition-colors duration-300 rounded-[16px] p-[30px_20px] flex flex-col justify-between items-start shrink-0">
                  {/* Icon Container */}
                  <div className="w-[50px] h-[50px] flex justify-start items-center text-[#F15C20] group-hover:text-white transition-colors duration-300">
                    {item.icon ? item.icon : <div className="w-5 h-5 bg-current" />}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-start text-start lg:h-[150px] items-start gap-[10px]">
                    <h3 className="font-semibold text-[32px] leading-[40px] text-[#00161D] group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-normal text-[16px] leading-[19px] text-[#00161D] group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center w-[280px] md:w-[414px] mx-auto mt-[60px] relative z-20">
          {/* Prev Button */}
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="w-[60px] h-[50px] flex justify-center items-center rounded-xl bg-white/5 border border-white/50 backdrop-blur-md text-[#F15C20] hover:text-white transition-all hover:bg-white/20 cursor-pointer z-10"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="dev-approach-pagination flex items-center justify-center gap-[4px] z-10" />

          {/* Next Button */}
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="w-[60px] h-[50px] flex justify-center items-center rounded-xl bg-white/5 border border-white/50 backdrop-blur-md text-[#F15C20] hover:text-white transition-all hover:bg-white/20 cursor-pointer z-10"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .dev-approach-pagination .swiper-pagination-bullet {
          height: 16px;
          width: 16px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s;
          opacity: 1;
          margin: 0 2px !important;
          cursor: pointer;
          display: inline-block;
        }
        .dev-approach-pagination .swiper-pagination-bullet-active {
          width: 30px;
          background-color: white;
        }
      `}} />
    </div>
  );
};

export default DevelopmentApproach;

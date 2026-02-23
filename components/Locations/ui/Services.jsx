"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Services = ({ services, header, header2, para }) => {
  return (
    <div className="w-full grid grid-cols-1 justify-start items-start py-16 md:py-32">
      <div className="flex relative z-20 w-[90%] md:w-[80%] flex-col text-center mx-auto items-center">
        <h2 className="text-4xl leading-[42px] md:leading-[1.1] tracking-tighter md:text-7xl font-bold">
          {header} <span className="text-[#F15C20]">{header2}</span>{" "}
        </h2>
        <p className="text-base my-6  mx-auto dark:text-white text-[#0C0C0C]">
          {para}
        </p>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid md:grid-cols-3 gap-4 w-[80%] mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 flex py-12 shadow-[#f8d8ca] bg-white shadow-2xl flex-col gap-6 items-center border-gray-200 group transition-all ease-linear hover:bg-[#F15C20] hover:text-white rounded-[45px] hover:shadow-md"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="flex justify-center items-center p-3 shadow-2xl group-hover:shadow-white shadow-[#F15C20] rounded-[22px] group-hover:border-t-white group-hover:border-b-white bg-white/20 border-b border-b-[#F15C20] border-t-[#F15C20] mx-auto w-[20%] border-t">
              <img
                src={`/location/mobile-california/icons/${service.icon}.png`}
                alt={service.title}
                className="group-hover:hidden transition duration-300"
              />
              <img
                src={`/location/mobile-california/icons/${service.icon2}.png`}
                alt={service.title}
                className="group-hover:block hidden transition duration-300"
              />
            </div>
            <h3 className="text-base font-semibold text-center">
              {service.title}
            </h3>

            <p className="text-sm text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="block md:hidden w-full px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 4,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="services-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F15C20] rounded-[40px] p-10 py-16 flex flex-col items-center gap-6 text-white min-h-[400px] justify-center">
                <div className="bg-white/20 p-6 rounded-3xl w-24 h-24 flex items-center justify-center">
                  <img
                    src={`/location/mobile-california/icons/${service.icon2}.png`}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-center leading-relaxed opacity-90">
                  {service.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .services-swiper .swiper-pagination-bullet {
            background: #d1d5db;
            opacity: 1;
            width: 10px;
            height: 10px;
          }
          .services-swiper .swiper-pagination-bullet-active {
            background: #f15c20 !important;
            width: 24px;
            border-radius: 10px;
          }
          .services-swiper .swiper-pagination {
            position: relative;
            margin-top: 25px;
            bottom: 0 !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Services;

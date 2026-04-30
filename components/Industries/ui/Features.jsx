"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Features = ({ header, header2, para, features, button }) => {
  return (
    <section className="w-full pb-2 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
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
            className="text-base md:text-lg mx-auto leading-relaxed"
          >
            {para}
          </motion.p>
        </div>

        {/* MOBILE SWIPER */}
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
                <div className="bg-white mb-8 rounded-[32px] border border-gray-200 p-8 flex flex-col justify-center items-center text-center w-[300px] h-[300px]">
                  <div className="mb-8 p-4 rounded-2xl bg-white">
                    <div className="text-[#F15C20] text-7xl">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] leading-snug px-4">
                    {feature.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .feature-swiper .swiper-pagination-bullet {
              background: #d1d5db; opacity: 1; width: 8px; height: 8px;
            }
            .feature-swiper .swiper-pagination-bullet-active {
              background: #f15c20 !important; width: 20px; border-radius: 10px;
            }
            .feature-swiper .swiper-pagination { bottom: 0px !important; }
          `}</style>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:flex items-center justify-center flex-wrap gap-6 md:gap-8">
          {features?.map((feature, index) => {
            const hasDesc = !!feature.desc;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                // ✅ No `animate` here — framer-motion only handles entrance
                className="w-[260px] h-[260px]"
                // ✅ Flip is handled purely by CSS via the inner wrapper below
              >
                {hasDesc ? (
                  // ── Flippable card ──────────────────────────────────────────
                  <div
                    className="group relative w-full h-full"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Inner wrapper rotates on hover */}
                    <div
                      className="relative w-full h-full transition-transform duration-500 ease-in-out group-hover:[transform:rotateY(180deg)]"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* FRONT */}
                      <div
                        className="absolute inset-0 rounded-[32px] border border-gray-200 bg-white p-8 flex flex-col items-center text-center"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <div className="mb-8 p-4 rounded-2xl bg-white">
                          <div className="text-[#F15C20] text-6xl md:text-7xl">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="font-bold text-[#111827] leading-snug px-4">
                          {feature.title}
                        </h3>
                      </div>

                      {/* BACK */}
                      <div
                        className="absolute inset-0 rounded-[32px] border border-gray-200 bg-[#F15C20] text-white p-4 flex flex-col items-center justify-center text-center [&_a]:text-white [&_a]:underline"
                        style={{
                          transform: "rotateY(180deg)",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        <p className="text-sm leading-[1.8] px-4">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  // ── Non-flippable card ──────────────────────────────────────
                  <div className="relative w-full h-full rounded-[32px] border border-gray-200 bg-white p-8 flex flex-col items-center text-center">
                    <div className="mb-8 p-4 rounded-2xl bg-white">
                      <div className="text-[#F15C20] text-6xl md:text-7xl">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-[#111827] leading-snug px-4">
                      {feature.title}
                    </h3>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center mt-12 mb-4">
          {button && (
            <Link href="/contact-us" className="flex items-center group justify-center w-fit">
              <button className="bg-[#F15C20] border border-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors">
                {button}
              </button>
              <button className="bg-[#F15C20] border border-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                <MdArrowOutward />
              </button>
            </Link>
          )}
        </div>

      </div>
    </section>
  );
};

export default Features;
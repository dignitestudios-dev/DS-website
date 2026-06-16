"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import { MdArrowOutward, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaBullhorn, FaUsers, FaPenNib, FaShoppingCart, FaAd, FaChartLine } from "react-icons/fa";

const evolvedData = [
  {
    icon: <FaBullhorn className="text-[#F15C20] w-8 h-8" />,
    title: "Brand Visibility & Awareness",
    desc: "Increase brand recognition and reach new audiences through consistent social media presence and strategic content distribution.",
  },
  {
    icon: <FaUsers className="text-[#F15C20] w-8 h-8" />,
    title: "Community Building & Engagement",
    desc: "Develop meaningful interactions with followers to strengthen relationships, improve loyalty, and encourage long-term brand advocacy.",
  },
  {
    icon: <FaPenNib className="text-[#F15C20] w-8 h-8" />,
    title: "Content Strategy & Storytelling",
    desc: "Create platform-specific content designed to educate, entertain, and engage audiences while supporting business objectives.",
  },
  {
    icon: <FaShoppingCart className="text-[#F15C20] w-8 h-8" />,
    title: "Social Commerce & Lead Generation",
    desc: "Transform social media channels into growth engines that generate leads, inquiries, and sales opportunities.",
  },
  {
    icon: <FaAd className="text-[#F15C20] w-8 h-8" />,
    title: "Paid Social Advertising",
    desc: "Amplify reach and accelerate growth through targeted advertising campaigns across major social platforms.",
  },
  {
    icon: <FaChartLine className="text-[#F15C20] w-8 h-8" />,
    title: "Data-Driven Optimization",
    desc: "Monitor engagement, audience behavior, and campaign performance to continuously improve social media results.",
  },
];

const Evolved = () => {
  return (
    <div className="w-full bg-[#FFFFFF] py-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 md:px-0 flex flex-col items-center gap-[50px]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-[30px] max-w-[1241px] text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-[40px] md:text-[50px] lg:text-[72px] leading-[105%] tracking-[-0.04em] text-[#1F222E] max-w-[846px]"
          >
            Social Media Has Evolved Beyond Posting
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-light text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]"
          >
            Social media is no longer just about publishing content. Modern brands use social platforms to build communities, strengthen customer relationships, increase brand awareness, generate leads, and drive revenue. Successful social media marketing requires strategic content, audience engagement, paid promotion, and performance-driven optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4"
          >
            <Link
              href="/contact-us"
              className="flex items-center group justify-center "
            >
              <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-[14px] font-medium px-[30px] py-[15px] rounded-full transition-colors h-[52px] flex items-center justify-center">
                Build a Stronger Social Presence
              </button>
              <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-[52px] h-[52px] rounded-full flex items-center justify-center transition-colors text-lg ml-[-15px] z-10 border border-[#F15C20]">
                <MdArrowOutward />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Carousel Section */}
        <div className="w-full mt-10 px-4 relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1440: { slidesPerView: 4, spaceBetween: 30 }
            }}
            className="!overflow-visible !py-10"
          >
            {evolvedData.map((item, index) => (
              <SwiperSlide
                key={index}
                className="!flex !justify-center !items-center !w-auto"
              >
                {({ isActive }) => (
                  <div
                    className={`transition-all duration-500 ease-in-out flex flex-col justify-between items-start rounded-[22px] bg-[#F9F9F9] ${
                      isActive
                        ? "w-[350px] h-[500px] p-[50px_20px] border border-[#F15C20] shadow-[0px_4px_30px_rgba(241,92,32,0.15)] z-20"
                        : "w-[300px] h-[400px] p-[30px_20px_50px] z-10 scale-95 opacity-60"
                    }`}
                  >
                    {/* Icon Container */}
                    <div className={`mx-auto rounded-[22.68px] flex justify-center items-center ${
                      isActive 
                        ? "w-[87.82px] h-[87.82px] bg-[rgba(255,255,255,0.45)] shadow-[-4px_-4px_30px_rgba(0,0,0,0.05),3.85px_11.55px_30px_-5.56px_rgba(255,186,158,0.45)]"
                        : "w-[87.82px] h-[87.82px] bg-[rgba(255,255,255,0.45)]"
                    }`}>
                      {item.icon}
                    </div>

                    {/* Text Container */}
                    <div className="flex flex-col gap-[20px] w-full text-center mt-auto">
                      <h3 className="font-semibold text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                        {item.title}
                      </h3>
                      <p className="font-light text-[14px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Arrows */}
          <div className="flex justify-center items-center gap-3 mt-12">
            <button className="swiper-button-prev-custom w-[50px] h-[50px] bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.5)] backdrop-blur-[10px] rounded-[16px] flex justify-center items-center group hover:bg-[#F15C20] transition-colors shadow-sm z-10 cursor-pointer">
              <MdKeyboardArrowLeft className="text-[#F15C20] group-hover:text-white w-6 h-6" />
            </button>
            <button className="swiper-button-next-custom w-[50px] h-[50px] bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.5)] backdrop-blur-[10px] rounded-[16px] flex justify-center items-center group hover:bg-[#F15C20] transition-colors shadow-sm z-10 cursor-pointer">
              <MdKeyboardArrowRight className="text-[#F15C20] group-hover:text-white w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Evolved;

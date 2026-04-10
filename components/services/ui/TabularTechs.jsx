// Updated TechTools component per user requirements
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { TiVendorMicrosoft } from "react-icons/ti";
import {
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiFlutter,
  SiNextdotjs,
  SiNodedotjs,
  SiGooglepay,
  SiGooglecloud,
  SiDigitalocean,
} from "react-icons/si";
import {
  FaApplePay,
  FaAws,
  FaCode,
  FaMicrosoft,
  FaPaypal,
  FaStripe,
} from "react-icons/fa";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const techData = {
  Frontend: [
    { name: "React", icon: <SiReact /> },
    { name: "Vue JS", icon: <SiVuedotjs /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React Native", icon: <SiReact /> },
    { name: "Next JS", icon: <SiNextdotjs /> },
  ],
  APIs: [
    { name: "Rest APIs", icon: <FaCode /> },
    { name: "GraphQL APIs", icon: <SiNodedotjs /> },
    { name: "Webhooks", icon: <FaCode /> },
  ],
  "Payment Integration": [
    { name: "Stripe", icon: <FaStripe /> },
    { name: "PayPal", icon: <FaPaypal /> },
    { name: "Apple Pay", icon: <FaApplePay /> },
    { name: "Google Pay", icon: <SiGooglepay /> },
  ],
  "Cloud DevOps": [
    { name: "AWS", icon: <FaAws /> },
    { name: "Azure", icon: <FaMicrosoft /> },
    { name: "GCP", icon: <SiGooglecloud /> },
    { name: "DigitalOcean", icon: <SiDigitalocean /> },
  ],
};

const TabularTechs = ({ techData, header, para, header2, button }) => {
  const categories = Object.keys(techData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="w-full  overflow-visible text-black">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl capitalize md:text-7xl leading-[42px] tracking-tighter lg:leading-[1.1] font-bold mb-6">
          {header}
          <span className="text-[#F15C20]"> {header2}</span>
        </h2>

        <p className=" mx-auto mb-16 text-lg ">{para}</p>

        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-transparent  p-1.5 rounded-lg lg:rounded-full w-fit mx-auto border  backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 md:px-8 py-2.5 rounded-full text-[12px] lg:text-sm font-bold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[#F15C20] text-white shadow-[0_0_20px_rgba(241,92,32,0.4)]"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 min-h-[350px]">
          {techData[activeTab].map((tech) => (
            <div key={`${activeTab}-${tech.name}`} className="w-[260px]">
              <TechCard tech={tech} />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative min-h-[360px] pb-12 flex justify-center">
          <div className="w-full max-w-[320px] px-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
              }}
              className="!pb-12 tech-swiper"
            >
              {techData[activeTab].map((tech, idx) => (
                <SwiperSlide key={`${activeTab}-${idx}`}>
                  <TechCard tech={tech} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Scoped styles for tech-swiper pagination dots */}
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
      <div className="w-full flex justify-center items-center">
        {button && (
          <Link
            href={"/contact-us"}
            className="flex mt-10 w-fit items-center group justify-center "
          >
            <button className="bg-[#F15C20] border border-[#F15C20]  group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20]  text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
              {button ? button : " Talk to our California-based team"}
            </button>
            <button className="bg-[#F15C20] border border-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
              <MdArrowOutward />
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

const TechCard = ({ tech }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`relative h-[280px] w-full perspective-1000`}
    >
      <motion.div className="w-full h-full relative preserve-3d transition-all duration-75">
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-lg p-8 flex flex-col items-center justify-center border border-[#F15C20]/20 ">
          <div className="w-24 h-24 bg-[#F15C20] rounded-full flex items-center justify-center text-6xl text-white mb-6 shadow-lg">
            {tech.icon}
          </div>
          <h3 className="text-lg font-medium text-[#212121] uppercase tracking-tight">
            {tech.name}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TabularTechs;

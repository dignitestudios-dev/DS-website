// Advanced Tools Behind Food Delivery Apps
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiFlutter,
  SiNextdotjs,
  SiNodedotjs,
  SiDjango,
  SiFirebase,
  SiLaravel,
  SiExpress,
  SiRubyonrails,
  SiGooglecloud,
  SiDigitalocean,
  SiCloudinary,
} from "react-icons/si";
import {
  FaAws,
  FaApple,
  FaAndroid,
  FaBrain,
  FaMapMarkerAlt,
  FaBell,
  FaShoppingCart,
  FaChartBar,
  FaImage,
  FaMicrosoft,
} from "react-icons/fa";

// ADVANCED TOOLS FOR FOOD DELIVERY APPS
const techData = {
  Frontend: [
    { name: "React", icon: <SiReact /> },
    { name: "Vue.js", icon: <SiVuedotjs /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React Native", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Ruby on Rails", icon: <SiRubyonrails /> },
  ],
  Mobile: [
    { name: "AI Automation", icon: <FaBrain /> },
    { name: "iOS", icon: <FaApple /> },
    { name: "Android", icon: <FaAndroid /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React Native", icon: <SiReact /> },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: <FaAws /> },
    { name: "Azure", icon: <FaMicrosoft /> },
    { name: "GCP", icon: <SiGooglecloud /> },
    { name: "DigitalOcean", icon: <SiDigitalocean /> },
    { name: "Cloudinary", icon: <SiCloudinary /> },
  ],
  "API Integrations": [
    { name: "Google Maps", icon: <FaMapMarkerAlt /> },
    { name: "Firebase Cloud Messaging", icon: <FaBell /> },
    { name: "Shopify POS", icon: <FaShoppingCart /> },
    { name: "Google Analytics", icon: <FaChartBar /> },
  ],
};

const categories = Object.keys(techData);

const TabularTechs = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="w-full  overflow-visible text-black">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-7xl leading-[42px] tracking-tighter lg:leading-[1.1] font-bold mb-6">
          Advanced Tools Behind
          <span className="text-[#F15C20]"> Food Delivery Apps</span>
        </h2>

        <p className="font-extralight mx-auto mb-16 text-lg max-w-3xl">
          Dignite studios use modern technology and advanced tools to build smooth applications without a mess. We have developers who are experts at bringing your idea to reality in a way that it runs smoothly and stays functional. We don't build apps that take time to load or feel too loaded with features or messy, we are just simply using the best tech from our stack to build your mobile apps.
        </p>

        {/* TAB BUTTONS */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-transparent  p-1.5 rounded-full w-fit mx-auto border  backdrop-blur-sm">
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

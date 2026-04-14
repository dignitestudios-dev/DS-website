"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaBrain,
  FaComments,
  FaBell,
  FaShieldAlt,
  FaMicrophone,
  FaChartLine,
} from "react-icons/fa";

import {
  MdVerifiedUser,
  MdLocationOn,
} from "react-icons/md";

import { RiUser3Line } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CARDS = [
  {
    title: "User Profile Creation",
    description:
      "Users can easily create and personalize their profiles by adding photos and preferences. It adds personal details and allows them to present themselves clearly and attract the right matches. A well designed profile improves visibility. We build authenticity and increase the chances of meaningful connections while creating a more engaging and seamless experience across the platform.",
    icon: <RiUser3Line className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Advanced Matching Algorithm",
    description:
      "The platform uses intelligent algorithms to match users based on interests, compatibility, and preferences, helping users find more relevant and accurate connections.",
    icon: <FaBrain className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Swipe or Match Mechanism",
    description:
      "Users can browse profiles and express interest through simple swipe or match actions. It creates a smooth, engaging experience that improves interaction and retention.",
    icon: <FaChartLine className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Chat and Messaging",
    description:
      "Users can communicate instantly with matches through chat, emojis, and media sharing, enabling smooth conversations and stronger connections.",
    icon: <FaComments className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Location Based Matching",
    description:
      "Users can connect with people nearby based on location, making it easier to find relevant matches and meet in real life with improved accuracy.",
    icon: <MdLocationOn className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Video and Voice Calling",
    description:
      "Users can communicate through secure video and voice calls, offering a more personal way to build trust and stronger relationships beyond text.",
    icon: <FaMicrophone className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Push Notifications",
    description:
      "Users receive instant alerts for messages, matches, likes, and updates, encouraging faster interaction and improving engagement across the platform.",
    icon: <FaBell className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Profile Verification & Safety Controls",
    description:
      "Users can verify their profiles and control who sees their information, ensuring authenticity, reducing fake accounts, and creating a safe dating environment.",
    icon: <MdVerifiedUser className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
];

const FlipCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[236px] w-[233px] perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.01 }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-100"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* FRONT */}
        <div
          className={`absolute inset-0 backface-hidden rounded-[25px] ${card.bg} ${card.border} p-6 flex flex-col items-center justify-center gap-4`}
        >
          <div className="w-14 h-14 flex items-center justify-center">
            {card.icon}
          </div>
          <h3 className="text-lg font-semibold text-center text-[#0C0C0C]">
            {card.title}
          </h3>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rounded-[25px] bg-[#F15C20] p-6 flex items-center justify-center text-center text-white rotate-y-180 shadow-2xl">
          <p className="text-xs leading-2">{card.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DeliveryApps = () => {
  return (
    <section className="relative mt-16 mx-auto px-4 w-full max-w-[1100px] flex flex-col items-center gap-12">
      <div className="text-center w-full">
        <h2 className="text-4xl md:text-7xl font-bold leading-[1.05] tracking-tighter">
          Key Features for a Successful Matchmaking App
        </h2>
        <p className="mt-4 text-base md:text-lg font-light leading-[1.36] text-[#0C0C0C]">
          Every matchmaking app needs mandatory features that ensure smooth operations and better user engagement. These features help attract and retain users while improving overall experience and connection quality.
        </p>
      </div>

      {/* Desktop Grid - Hidden on mobile/tablet */}
      <div className="w-full hidden lg:flex flex-wrap justify-center gap-8">
        {CARDS.map((card) => (
          <FlipCard key={card.title} card={card} />
        ))}
      </div>

      {/* Mobile/Tablet Carousel - Hidden on desktop */}
      <div className="w-full overflow-hidden lg:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} !bg-[#F15C20]"></span>`;
            },
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          }}
          className="!pb-12"
        >
          {CARDS.map((card) => (
            <SwiperSlide key={card.title} className="!flex !justify-center">
              <FlipCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link href="/contact-us" className="flex items-center group justify-center">
        <button className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full font-normal transition-colors">
          Speak to Expert
        </button>
        <button className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
          <MdArrowOutward />
        </button>
      </Link>
    </section>
  );
};

export default DeliveryApps;
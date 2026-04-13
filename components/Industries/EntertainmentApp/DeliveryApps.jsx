"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaSearch,
  FaBell,
  FaUsers,
} from "react-icons/fa";

import { RiUser3Line } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiLibrary } from "react-icons/bi";

const CARDS = [
  {
    title: "Customised Suggestions",
    description:
      "To increase engagement, offer AI generated recommendations for games, music or films based on user preferences, behaviour and viewing or listening to the history.",
    icon: <GiArtificialIntelligence className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Advanced Search & Filters",
    description:
      "Allow users to quickly find content using categories, genres, popularity, ratings and other advanced filters options for faster and easier discovery.",
    icon: <FaSearch className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Interactive Playlists & Libraries",
    description:
      "Instant access to organization of and saving of users favourite content enhances personalised engagement and makes it simpler to return to favourite at any time.",
    icon: <BiLibrary className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Live streaming & Events",
    description:
      "To increase user involvement, stream live performances, gaming competitions or concerts in the real time with the chat alerts and scheduling tools.",
    icon: <MdLiveTv className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Social Sharing & Community Features",
    description:
      "To boost engagement and user retention, provide users the option to share content, write comments and communicate with friends or the larger app community.",
    icon: <FaUsers className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Push Notifications & Alerts",
    description:
      "Keep users informed about new releases, live events, updates and content launches through the timely alerts which help maximize engagement retention.",
    icon: <FaBell className="text-5xl text-[#F15C20]" />,
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
          <p className="text-xs leading-4">{card.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DeliveryApps = () => {
  return (
    <section className="relative mt-16 mx-auto px-4 max-w-[1100px] flex flex-col items-center gap-12">
      
      {/* HEADING */}
      <div className="text-center">
        <h2 className="text-4xl md:text-7xl font-bold leading-[1.05] tracking-tighter">
          Must Have Features in Your Entertainment App
        </h2>
        <p className="mt-4 text-base md:text-lg font-light leading-[1.36] text-[#0C0C0C]">
          With the essential elements for user retention, dynamic content and efficient platform management across streaming, music and gaming make sure your entertainment apps offers the captivating and fluid experiences
        </p>
      </div>

      {/* CARDS */}
      <div className="w-full flex flex-wrap justify-center gap-8">
        {CARDS.map((card) => (
          <FlipCard key={card.title} card={card} />
        ))}
      </div>

      {/* CTA */}
      <Link href="/contact-us" className="flex items-center group justify-center">
        <button className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors">
          Let’s Build Your Entertainment App
        </button>
        <button className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
          <MdArrowOutward />
        </button>
      </Link>
    </section>
  );
};

export default DeliveryApps;
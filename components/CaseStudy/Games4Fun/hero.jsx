"use client";
import React from "react";
import { motion } from "framer-motion";
import Milestone from "./icons/Milestone";
import Sector from "./icons/Sector";
import Did from "./icons/Did";
import Link from "next/link";
import { IoGlobeOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <section className=" max-w-screen-2xl mx-auto w-full relative z-20 p-4">
      {/* <img src="/bioyap/hero.png" alt="hero" className="absolute w-screen -z-10" /> */}
      <div className="w-full gap-5 mt-14 flex flex-col items-center ">
        <img src="/gamesfun/icon.png" alt="icon" fill />
        <div className="flex flex-col items-center text-center w-[90%] md:w-[80%]">
          <h1 className="text-[24px]  capitalize md:leading-[60px] md:text-[48px] text-wrap  font-bold  mb-6">
            <span className="text-[#C100FF]  ">
 Smart Web Platform  {" "}
  </span>
          for Gaming PCs
          </h1>

          <p className=" text-sm md:text-base  mb-8 ">
        Games4fun is a web app for gaming fans. It helps them build and buy a custom gaming PC easily. Users of the platform are quite able to select their own parts or can use the guided AI PC builder. It also suggests the best PC build based on the games or the needs of the performance. Moreover, gamers can use the FPS Calculator to estimate how many frames per second their system can produce, it increases the reliability of their purchase decision. Additionally, the platform has an admin interface through managing users, items and PC build suggestions. This web-based solution provides a simple interface that reduces technical barriers while offering gamers complete control over their custom builds. Games4fun is a powerful example of Web Application Development Services that combine clarity, usability, and performance.  
          </p>

          <div className="flex items-center relative z-50 gap-4">
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12 cursor-pointer"
            /> */}
            <Link href={"https://game4funpcs.com"} target="_blank" >
            {/* <img src="/website_btn.png" alt="web link"   className="h-12 cursor-pointer"  /> */}
            <button className="text-white flex items-center bg-black px-6 text-xl py-2 rounded-lg gap-2" > <IoGlobeOutline /> Website </button>
          </Link></div>
        </div>
            <div className="flex  w-screen max-h-[1000px] h-full justify-center relative">
                  {/* <div className="absolute top-[20%] text-[60px] md:text-[180px] font-bold text-gray-200 opacity-80 select-none blur-sm">
                    MEDITATION
                  </div> */}
                  <img src="/gamesfun/grad.png" alt="grad" className="absolute 2xl:top-[-150%] md:top-[-80%] h-auto z-10 w-screen" />
                  <motion.div
                    initial={{  opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  >
                    <motion.div
      className="absolute z-20 -left-40 md:left-[25%] 2xl:left-[35%]  translate-x-[-50%] "
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
    >
      <svg
        width="646"
        height="646"
        viewBox="0 0 646 646"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1417_787)">
          <rect
            x="635.125"
            y="622.753"
            width="612"
            height="612"
            rx="306"
            transform="rotate(178.842 635.125 622.753)"
            stroke="white"
            strokeWidth="4"
            strokeDasharray="1.99 1.32"
          />
        </g>
        <rect
          x="636.489"
          y="624.063"
          width="614.675"
          height="614.675"
          rx="307.338"
          transform="rotate(178.842 636.489 624.063)"
          stroke="white"
          strokeOpacity="0.75"
          strokeWidth="1.32473"
          strokeDasharray="1.99 1.32"
        />
        <rect
          x="328.165"
          y="18.8692"
          width="9.87"
          height="9.87"
          rx="4.935"
          transform="rotate(178.842 328.165 18.8692)"
          fill="white"
        />
        <rect
          x="32.2295"
          y="244.866"
          width="9.86666"
          height="9.86666"
          rx="4.93333"
          transform="rotate(178.842 32.2295 244.866)"
          fill="white"
        />
        <rect
          x="628.229"
          y="268.866"
          width="9.86666"
          height="9.86666"
          rx="4.93333"
          transform="rotate(178.842 628.229 268.866)"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_f_1417_787"
            x="0"
            y="0"
            width="646.003"
            height="646.003"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur_1417_787" />
          </filter>
        </defs>
      </svg>
    </motion.div>

                  <motion.img
      src="/gamesfun/hero.png"
      alt="App Preview"
      className="relative  md:-bottom-20 z-30"
      animate={{ y: [0, -10, 0] }} // small vertical movement
      transition={{
        duration: 4,       // time for one complete up-down cycle
        repeat: Infinity,  // loop indefinitely
        ease: "easeInOut", // smooth easing
      }}
    />
                  </motion.div>
                </div>
        
      </div>
      <div className="bg-gradient-to-r relative z-50 md:w-[80%] mx-auto md:px-10 gap-12 rounded-xl flex md:flex-row flex-col p-5 text-white justify-between from-[#C100FF]  to-[#440354]">
        <div className="flex items-end gap-2 ">
          <div className="mb-2" >
          <Milestone />
          </div>
          <div className="">
            <h3 className="">Milestone</h3>
            <h1 className="font-semibold ">
              {" "}
              6 months of product Design and Development{" "}
            </h1>
          </div>
        </div>
        <div className="flex items-end gap-2 ">
          <div className="mb-2" >
          <Sector />
          </div>
          <div>
            <h3 className="">Sector</h3>
            <h1 className="font-semibold ">
             Gaming Web Application & Custom PC Platform
            </h1>
          </div>
        </div>
        <div className="flex items-end gap-2 ">
          <div className="mb-2" >
          <Did />
          </div>
          <div>
            <h3 className="">What we Did</h3>
            <h1 className="font-semibold ">
             Web App Development, Branding, UI/UX Design
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

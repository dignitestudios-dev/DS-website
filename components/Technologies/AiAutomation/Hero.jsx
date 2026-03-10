"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";
import Image from "next/image";
const Hero = () => {
  const iconGroups = [
    {
      radius: 320,
      duration: 30,
      size: 65,
      icons: ["/technologies/ai/i1.webp"],
    },
    {
      radius: 170,
      duration: 30,
      size: 35,
      icons: [
        // "/technologies/ai/i1.webp",
        "/technologies/ai/i2.webp",
        "/technologies/ai/i3.webp",
      ],
    },
    {
      radius: 240,
      duration: 45,
      size: 60,
      icons: [
        "/technologies/ai/i4.webp",
        "/technologies/ai/i5.webp",
        "/technologies/ai/i6.webp",
      ],
    },
    {
      radius: 400,
      duration: 60,
      size: 70,
      icons: [
        "/technologies/ai/i7.webp",
        "/technologies/ai/i8.webp",
        "/technologies/ai/i9.webp",
      ],
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 justify-start items-start ">
      <div className="flex relative z-40 w-[90%] md:w-[75%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] capitalize lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          AI Automation Services for{" "}
          <span className="text-[#F15C20] ">Modern Businesses</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Our AI automation services help modern businesses simplify operations,
          reduce manual work and improve accuracy. Through intelligent systems
          built for growth while increasing productivity, speeding up the
          decision making. Delivering measurable business results.
        </p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Get Free AI Automation Consultation
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20]  text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative w-full h-[300px] lg:h-[600px] mt-10 mb-20 flex items-center justify-center overflow-visible">
        <div className="absolute inset-0 top-32 flex items-center justify-center pointer-events-none z-10">
          <Image
            src={"/technologies/ai/circle.webp"}
            alt="concentric rings"
            width={800}
            height={800}
            className="hidden lg:block object-contain"
           priority/>
          <Image
            src={"/technologies/ai/circle-icons.webp"}
            alt="concentric rings"
            width={800}
            height={800}
            className="block lg:hidden object-contain"
           priority/>
        </div>

        {/* Animated Icons Container */}
        <div className="absolute top-80 inset-0 hidden lg:flex items-center justify-center z-20 overflow-visible">
          {iconGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              className="absolute flex items-center justify-center overflow-visible"
              animate={{ rotate: 360 }}
              transition={{
                duration: group.duration,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: group.radius * 2,
                height: group.radius * 2,
              }}
            >
              {group.icons.map((icon, iconIdx) => {
                const angle = (iconIdx / group.icons.length) * 360;
                return (
                  <motion.div
                    key={iconIdx}
                    className="absolute shadow-xl ring-1 ring-white/20"
                    style={{
                      width: group.size,
                      height: group.size,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0px",
                      // position icons on the radius
                      left: `calc(50% + ${group.radius * Math.cos((angle * Math.PI) / 180)}px - ${group.size / 2}px)`,
                      top: `calc(50% + ${group.radius * Math.sin((angle * Math.PI) / 180)}px - ${group.size / 2}px)`,
                    }}
                    // Counter-rotate the icons to keep them upright
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: group.duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Image
                      src={icon}
                      alt={`AI tool ${iconIdx}`}
                      className="w-full h-full object-contain"
                     width={500} height={500} priority/>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>

        <div className="absolute -bottom-40 left-0 w-full border-none h-52 bg-gradient-to-t z-30 from-white to-transparent via-white" />
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const problems = [
  {
    title: "Kid-Friendly Simplicity",
    desc: "Designing an interface for children aged 4–10 who can use it independently, without losing engagement or clarity.",
  },
  {
    title: "Lip-Sync Recording",
    desc: "Making a fun, quick, and safe lip-sync recording feature that doesn’t overwhelm young users.",
  },
  {
    title: "Parent + Kid Journeys",
    desc: "Building separate flows with the right permissions, monitoring tools, and a transparent control system for parents.",
  },
  {
    title: "Community Story Management",
    desc: "Handling user-submitted bedtime stories in a structured, moderated, and age-safe flow.",
  },
];

const solutions = [
  {
    title: "Kid-Friendly UI",
    desc: "Use soft colors, big visuals, and minimal steps, helping kids navigate confidently and stay engaged.",
  },
  {
    title: "Safe Lip-Sync Flow",
    desc: "Introduce guided prompts, simple controls, time limits, and auto-safe processing to keep recordings fun and protected.",
  },
  {
    title: "Clear Dual Ecosystem",
    desc: "Provide a clean parent dashboard for profile setup, permissions, screen time, and activity tracking.",
  },
  {
    title: "Moderated Story Pipeline",
    desc: "Build an easy upload system paired with layered moderation and organized categories for safe, community-driven stories.",
  },
];

const ProblemSol = () => {
  return (
    <section className="w-full py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Problems & <span className="text-[#000086]">Solutions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-5xl mx-auto mb-20"
        >
          Designing Harmonious Learning wasn’t a simple job, even though it looked easy. Designing something for kids isn’t very easy or simple. Building this app required the perfect balance between simplicity and empowering children. The main challenge was to build an application with two completely different journeys. 
        </motion.p>

        {/* ===== PROBLEM CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#E7E7E7] rounded-3xl pt-4 p-4 md:p-0 flex flex-col md:flex-row gap-10 items-center shadow-lg z-10"
        >
          {/* Left Icon */}
          <div className="relative hidden md:flex justify-start w-[40%]">
            <img src={"/music.png"} alt="music " width={400} height={400} className="rounded-bl-3xl" />
          </div>

          <img src="/m-bg1.png" alt="bg" width={400} height={400} className="absolute top-0 left-0" />
          <img src="/m-bg2.png" alt="bg" width={100} height={100} className="absolute top-0 right-0" />

          {/* Right Content */}
          <div className="text-left pr-0 md:pr-10 w-full">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-red-500 pl-0 md:pl-0">
                <svg
                  width="29"
                  height="30"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3421 0.732343V16.8861C10.3746 7.27262 19.4071 18.4619 28.4413 9.07378L28.5882 8.95025V8.69819C19.5073 13.0534 10.4247 -3.62283 1.3421 0.732343Z"
                    fill="#015AA2"
                  />
                  <path
                    d="M1.3421 0.732341V16.6657C10.4247 7.00052 19.5056 18.365 28.5882 8.69985C19.5073 13.0534 10.4247 -3.62283 1.3421 0.732341Z"
                    fill="url(#paint0_linear_37_254)"
                  />
                  <path
                    d="M1.36047 0.541992H0V29.7913H1.36047V0.541992Z"
                    fill="url(#paint1_linear_37_254)"
                  />
                  <path
                    d="M0.681048 30.0001C1.05627 30.0001 1.36045 29.9067 1.36045 29.7914C1.36045 29.6762 1.05627 29.5828 0.681048 29.5828C0.305826 29.5828 0.00164795 29.6762 0.00164795 29.7914C0.00164795 29.9067 0.305826 30.0001 0.681048 30.0001Z"
                    fill="#1A1A1A"
                  />
                  <path
                    d="M1.34545 0.5236C1.27867 0.445144 1.00658 0.386719 0.68107 0.386719C0.355558 0.386719 0.0851337 0.445144 0.0166929 0.5236H0V16.8576H1.36214V0.5236H1.34545Z"
                    fill="#015AA2"
                  />
                  <path
                    d="M1.34545 0.521931C1.27867 0.445144 1.00658 0.386719 0.68107 0.386719C0.355558 0.386719 0.0851337 0.445144 0.0166929 0.521931H0V16.6606H1.36214V0.521931H1.34545Z"
                    fill="url(#paint2_linear_37_254)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_37_254"
                      x1="1.3421"
                      y1="8.33261"
                      x2="28.5882"
                      y2="8.33261"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.02" stopColor="#F85454" />
                      <stop offset="0.08" stopColor="#F85555" />
                      <stop offset="0.1" stopColor="#F85C5C" />
                      <stop offset="0.11" stopColor="#F86868" />
                      <stop offset="0.12" stopColor="#F97373" />
                      <stop offset="0.31" stopColor="#F97373" />
                      <stop offset="0.34" stopColor="#F62929" />
                      <stop offset="0.57" stopColor="#F40505" />
                      <stop offset="0.79" stopColor="#F85E5E" />
                      <stop offset="0.83" stopColor="#F97373" />
                      <stop offset="1" stopColor="#F85E5E" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_37_254"
                      x1="0"
                      y1="15.1666"
                      x2="1.36047"
                      y2="15.1666"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.01" stopColor="white" />
                      <stop offset="0.32" stopColor="#999999" />
                      <stop offset="0.74" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_37_254"
                      x1="0"
                      y1="8.52283"
                      x2="1.36214"
                      y2="8.52283"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.02" stopColor="#F40000" />
                      <stop offset="0.32" stopColor="#F85E5E" />
                      <stop offset="0.93" stopColor="#F50F0F" />
                      <stop offset="1" stopColor="#F40000" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              Problems
            </h3>
            <ul className="space-y-4 text-sm text-gray-700 pl-0 md:pl-0">
              {problems.map((item, i) => (
                <li key={i} className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4">
                  <span className="font-semibold w-full md:w-[170px]">{item.title}:</span>
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ===== SOLUTION CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-3xl mt-12 p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white shadow-xl"
        >
          <img
            src="/sol.png"
            alt="solutions"
            width={1200}
            height={1200}
            className="absolute md:block hidden bg-cover h-fit"
          />

          {/* Left Content */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FaStar className="text-yellow-300" /> Solutions
            </h3>
            <ul className="space-y-4 text-sm text-white">
              {solutions.map((item, i) => (
                <li key={i} className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4">
                  <span className="font-semibold w-full md:w-[170px]">{item.title}:</span>
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Icon */}
          <div className="relative flex justify-center"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSol;

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUsers,
  FaPencilAlt,
  FaProjectDiagram,
  FaCogs,
} from "react-icons/fa";

const steps = [
  "Users register and set up their profiles",
  "Users explore a Facebook-like social feed with posts, comments, likes, and a global news feed",
  "Users buy coins and use them to purchase marketplace products or donate to peers",
  "Pharma professionals can list items for sale within the community",
  "Users move fluently between social features, the marketplace, and the coin wallet",
  "Users receive notifications about updates, marketplace activity, and community interactions"
]


// Step animation
const stepVariant = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Dots animation
const dotVariant = {
  hidden: { opacity: 0 },
  show: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
};

const Workflow = () => {
  return (
    <section className="w-full  relative py-24 px-6">
      <img
        src="/bioyap/w-bg.png"
        alt="hero"
        className="absolute w-screen z-10"
      />
      <div className="max-w-7xl relative mx-auto text-center">
        <svg
          className="absolute top-[-50%] left-1/2 z-40 translate-x-[-50%] "
          width="1440"
          height="1526"
          viewBox="0 0 1440 1526"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_335_164)">
            <ellipse
              cx="720"
              cy="763"
              rx="458"
              ry="263"
              fill="url(#paint0_linear_335_164)"
              fill-opacity="0.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_335_164"
              x="-238"
              y="0"
              width="1916"
              height="1526"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="250"
                result="effect1_foregroundBlur_335_164"
              />
            </filter>
            <linearGradient
              id="paint0_linear_335_164"
              x1="720"
              y1="500"
              x2="720"
              y2="1026"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F3FFDF" />
              <stop offset="0.5" stop-color="#D6F89E" />
              <stop offset="0.75" stop-color="#C0F765" />
              <stop offset="0.875" stop-color="#D6F89E" />
              <stop offset="1" stop-color="#F3FFDF" />
            </linearGradient>
          </defs>
        </svg>
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Workflow <span className="text-[#C0F765]">Overview</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-5xl mx-auto mb-20"
        >
         The BioYap workflow was designed to deliver smooth mobile app development services supported by clean mobile app UI UX design and mobile app branding and design. 
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center">
          {steps.map((s, idx) => (
            <div
              className="bg-white relative z-50 rounded-2xl  p-4 text-black px-8 w-[340px]"
              key={idx}
            >
              <div className="flex items-center flex-col gap-2">
                <h1 className="font-bold bg-[#C0F765] px-4 rounded-full">
                  0{idx + 1}
                </h1>
                <p className="text-sm text-[#0C0C0C]">{s}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex relative z-50 justify-center items-center w-fit mx-auto -pb-4">
          <img
            src="/bioyap/workflow.png"
            alt="workflow"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Workflow;

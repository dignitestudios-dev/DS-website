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
  {
    title: "Discovery",
    desc: "Understood goals, audience, and project direction",
    icon: <FaSearch size={16} />,
  },
  {
    title: "Research",
    desc: "Gathered insights from parents and industry experts",
    icon: (
      <svg
        width="19"
        height="22"
        viewBox="0 0 19 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.339 0.852327H5.0443C2.76332 0.843554 0.893574 2.66067 0.839839 4.94165V16.839C0.801457 19.0871 2.59225 20.9415 4.84142 20.9809C4.90832 20.9809 4.97631 20.9809 5.0443 20.9787H13.8041C16.0731 20.9557 17.8978 19.1079 17.8945 16.839V6.64033L12.339 0.852327Z"
          stroke="white"
          stroke-width="1.67846"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.0517 0.839233V4.02932C12.0517 5.58654 13.3117 6.84876 14.8689 6.85314H17.889"
          stroke="white"
          stroke-width="1.67846"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.8533 11.9854H6.4798"
          stroke="white"
          stroke-width="1.67846"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.1677 14.6718V9.29834"
          stroke="white"
          stroke-width="1.67846"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "UX",
    desc: "Created early mobile app UI/UX designs to test usability ",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8651 20.3574H20.9806"
          stroke="white"
          stroke-width="1.67846"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7828 1.72858C12.6507 0.69129 14.2109 0.539187 15.2698 1.38947C15.3283 1.4356 17.2092 2.89679 17.2092 2.89679C18.3724 3.59995 18.7338 5.09481 18.0148 6.23558C17.9766 6.29667 7.34264 19.5982 7.34264 19.5982C6.98886 20.0396 6.45181 20.3001 5.87787 20.3064L1.8055 20.3575L0.887943 16.4739C0.759409 15.9278 0.887943 15.3543 1.24173 14.9129L11.7828 1.72858Z"
          stroke="white"
          stroke-width="1.67846"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.81421 4.19714L15.9151 8.88242"
          stroke="white"
          stroke-width="1.67846"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Wireframes",
    desc: "Mapped core screens and interactions clearly",
    icon: (
      <svg
        width="16"
        height="23"
        viewBox="0 0 16 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00078 13.1161C9.13083 13.1161 10.0469 12.2 10.0469 11.07C10.0469 9.93992 9.13083 9.02384 8.00078 9.02384C6.87074 9.02384 5.95466 9.93992 5.95466 11.07C5.95466 12.2 6.87074 13.1161 8.00078 13.1161ZM8.00078 13.1161V21.3006M2.88548 4.9316H13.1161C14.2461 4.9316 15.1622 4.01552 15.1622 2.88548C15.1622 1.75544 14.2461 0.839355 13.1161 0.839355H2.88548C1.75544 0.839355 0.839355 1.75544 0.839355 2.88548C0.839355 4.01552 1.75544 4.9316 2.88548 4.9316ZM2.87727 4.9316H13.1243L14.8779 10.3826C15.3862 11.6663 15.2061 13.0968 14.3925 14.2382L8.9746 20.8157C8.51374 21.4622 7.48783 21.4622 7.02697 20.8157L1.60909 14.2382C0.79544 13.0968 0.61536 11.6663 1.12371 10.3826L2.87727 4.9316Z"
          stroke="white"
          stroke-width="1.67866"
        />
      </svg>
    ),
  },
  {
    title: "Development",
    desc: "Built features with stability and accessibility",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.55 2.95V0.75M13.95 2.95V0.75M13.95 20.55V22.75M9.55 20.55V22.75M20.55 9.55H22.75M20.55 13.95H22.75M2.95 9.55H0.75M2.95 13.95H0.75M7.35 20.55H16.15C18.5801 20.55 20.55 18.5801 20.55 16.15V7.35C20.55 4.91995 18.5801 2.95 16.15 2.95H7.35C4.91995 2.95 2.95 4.91995 2.95 7.35V16.15C2.95 18.5801 4.91995 20.55 7.35 20.55ZM10.65 15.05H12.85C14.065 15.05 15.05 14.065 15.05 12.85V10.65C15.05 9.43497 14.065 8.45 12.85 8.45H10.65C9.43497 8.45 8.45 9.43497 8.45 10.65V12.85C8.45 14.065 9.43497 15.05 10.65 15.05Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

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
           <img src="/bioyap/w-bg.png" alt="hero" className="absolute w-screen z-10" />
      <div className="max-w-7xl relative mx-auto text-center">
            <svg className="absolute top-[-50%] left-1/2 z-40 translate-x-[-50%] " width="1440" height="1526" viewBox="0 0 1440 1526" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_335_164)">
<ellipse cx="720" cy="763" rx="458" ry="263" fill="url(#paint0_linear_335_164)" fill-opacity="0.5"/>
</g>
<defs>
<filter id="filter0_f_335_164" x="-238" y="0" width="1916" height="1526" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_335_164"/>
</filter>
<linearGradient id="paint0_linear_335_164" x1="720" y1="500" x2="720" y2="1026" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3FFDF"/>
<stop offset="0.5" stop-color="#D6F89E"/>
<stop offset="0.75" stop-color="#C0F765"/>
<stop offset="0.875" stop-color="#D6F89E"/>
<stop offset="1" stop-color="#F3FFDF"/>
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
          This application wasn’t built by following the usual step-by-step
          linear process we use for custom mobile apps. The whole application
          was built around the way kids think, feel, and interact. So, instead
          of forcing the same rigid roadmap, the workflow was designed with the
          insights, testing and refinements. We involved parents, storytellers,
          and kids’ educators to make sure the app doesn’t lack anywhere and
          create a safe place for kids. So, the workflow wasn’t just a timeline;
          it was a process according to children’s mindsets.
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
                <p className="text-sm text-[#0C0C0C]">{s.desc}</p>
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

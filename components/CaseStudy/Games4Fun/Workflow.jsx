"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlobalContext } from "@/context/GlobalContext";

const steps = [
  {
    title: "Planning & Research",
    text: "This step is focused on understanding user needs, technical requirements, and project goals to define a detailed plan, ensuring alignment across design, development, and deployment phases.",
  },
  {
    title: "Foundation & UX",
    text: "To guarantee an uninterrupted custom web application development process, the team set priorities, made the plan, and assigned tasks.",
  },
  {
    title: "Development",
    text: "Rapid coding, testing, and technology improvement driven by stakeholder contributions were achieved through brief development cycles.",
  },
  {
    title: "Testing & Evaluation",
    text: "Frequent testing ensured a bug-free, high-performing web-based solution.",
  },
  {
    title: "Deployment",
    text: "The app was prepared for distribution and servers configured to ensure a smooth launch.",
  },
];


// Card animation
const cardVariant = {
  hidden: { opacity: 0, x: -30 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Timeline line animation
const lineVariant = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const Workflow = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background */}
      {/* <img
        src="/crew/cloud-bg.png"
        alt="background"
        className="absolute w-screen top-[-50%] hidden md:block"
      /> */}
     {/* <img src="/crew/el.png" alt="ellipse" className="absolute top-10 left-0 w-screen h-[100%]" /> */}
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-5"
        >
          WorkFlow <span className="text-[#C100FF]">Overview</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className=" text-center max-w-5xl mx-auto mb-24"
        >
          Our approach to PWA Development Services for Games4Fun followed the structured agile workflow. 
       
        </motion.p>
      </div>

<div className="flex justify-center flex-wrap gap-14 md:gap-0 md:flex-nowrap ">
  {steps.map((step, idx) => (
    <motion.div
      key={idx}
      className="w-[250px] flex flex-col justify-center relative p-5 px-8"
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={idx}
    >
      {/* Step Number */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.15 }}
        className="absolute left-0 text-3xl font-semibold -top-14"
      >
        0{idx + 1}
      </motion.div>

      {/* Animated Line */}
      <motion.svg
        className="absolute  left-0 origin-top"
        width="2"
        height="275"
        viewBox="0 0 2 275"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: idx * 0.15,
          duration: 1.2,
          ease: "easeOut",
        }}
      >
     <line
  opacity="0.5"
  x1="0.75"
  y1="0"
  x2="0.75"
  y2="275"
  stroke={theme == "dark" ? "#FFFFFF" : "#000000"}
  strokeWidth="1.5"
  strokeDasharray="20 20"
/>


      </motion.svg>

      {/* Content */}
      <h1 className=" dark:text-[#C100FF] text-[#48035A] font-medium mb-4 h-[25px]">{step.title}</h1>
      <p className="text-sm h-[150px]">{step.text}</p>
    </motion.div>
  ))}
</div>

    </section>
  );
};

export default Workflow;

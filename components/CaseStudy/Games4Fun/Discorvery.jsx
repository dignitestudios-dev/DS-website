"use client";
import React from "react";
import { motion } from "framer-motion";
// import DiscoveryIcon from "./icons/Discovery";

const insights = [
  {
    image: "/gamesfun/s1.png", // to be added later
    desc: "We studied the struggles gamers face when building or buying PCs and identified major compatibility issues and confusion around technical specifications."
  },
  {
       image: "/gamesfun/s2.png",
    desc: "Many gamers search for the best PC build for specific games, which led to the concept of AI-driven recommendations."
  },
  {
    image: "/gamesfun/s3.png",
    desc: "Users needed a platform that combined guidance with transparency, so we designed a simple navigation system with clear user flows."
  },
  {
   image: "/gamesfun/s4.png",
    desc: "We prioritized FPS calculations and performance clarity, structuring the experience to make results easy to understand."
  },
  {
    image: "/gamesfun/s5.png",
    desc: "Research confirmed the opportunity to build an innovative, gamer-friendly platform supported by a reliable admin panel for complete data control."
  }
];


const Discovery = () => {
  return (
    <section className="w-full py-16  relative overflow-hidden">
      {/* <img src="/crew/el.png" alt="ellipse" className="absolute top-10 left-0 w-screen h-[100%]" /> */}
      <div className="max-w-7xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Research & <span className="text-[#C100FF]">Discovery</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 text-sm md:text-base max-w-4xl mx-auto mb-20 leading-relaxed"
        >
          A focused research process that helped shape a clear and simple direction for the custom web application.
        </motion.p>

  <div className="relative flex justify-center items-center w-full h-[340px]">
  {insights.map((insight, idx) => {
    const positionStyles = [
      "-translate-x-[180%] scale-75 z-0 -70 hover:scale-110 hover:z-50", // far left (mostly hidden)
      "-translate-x-[100%] scale-95 z-10 -80 hover:scale-110 hover:z-50", // left (half visible)
      "scale-110 z-30 hover:scale-110 hover:z-50",                               // center (fully visible)
      "translate-x-[100%] scale-95 z-10 -80 hover:scale-110 hover:z-50",  // right (half visible)
      "translate-x-[180%] scale-75 z-0 -70 hover:scale-110 hover:z-50",  // far right (mostly hidden)
    ];

    return (
      <div
        key={idx}
        className={`
          absolute transition-all duration-500 ease-out
          w-[250px]  pb-4 rounded-2xl bg-white
          ${positionStyles[idx]}
        `}
      >
        {/* Gradient bar */}
        <div className="absolute top-0 w-full h-2 rounded-t-2xl bg-gradient-to-r from-[#C100FF] to-[#FFBE96]" />

        {/* Image */}
        <img
          src={insight.image}
          alt="insight"
          className="w-full h-[200px] scale-125 object-cover rounded-t-2xl"
        />

        {/* Text */}
        <p className="text-sm px-6 pt-4 text-[#0C0C0C] text-center">
          {insight.desc}
        </p>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default Discovery;

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const insights = [
  {
    image: "/gamesfun/s1.png",
    desc: "We studied the struggles gamers face when building or buying PCs and identified major compatibility issues and confusion around technical specifications.",
  },
  {
    image: "/gamesfun/s2.png",
    desc: "Many gamers search for the best PC build for specific games, which led to the concept of AI-driven recommendations.",
  },
  {
    image: "/gamesfun/s3.png",
    desc: "Users needed a platform that combined guidance with transparency, so we designed a simple navigation system with clear user flows.",
  },
  {
    image: "/gamesfun/s4.png",
    desc: "We prioritized FPS calculations and performance clarity, structuring the experience to make results easy to understand.",
  },
  {
    image: "/gamesfun/s5.png",
    desc: "Research confirmed the opportunity to build an innovative, gamer-friendly platform supported by a reliable admin panel for complete data control.",
  },
];

export default function Discovery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = insights.length;

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -80) {
      setActiveIndex((prev) => (prev + 1) % total);
    }
    if (info.offset.x > 80) {
      setActiveIndex((prev) => (prev - 1 + total) % total);
    }
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
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
          className="text-sm md:text-base max-w-4xl mx-auto mb-20"
        >
          A focused research process that helped shape a clear and simple direction
          for the custom web application.
        </motion.p>

        {/* Card Stack */}
        <div className="relative flex h-[360px] md:h-[500px] w-full items-center justify-center overflow-hidden">
          {insights.map((item, index) => {
            const offset = getCircularOffset(index, activeIndex, total);
            const transforms = getTransforms(offset);

            return (
              <motion.div
                key={index}
                drag={offset === 0 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={transforms}
                transition={{ stiffness: 1000, damping: 32 , duration:0.1 }}
                className="absolute cursor-grab active:cursor-grabbing"
                style={{ zIndex: transforms.zIndex }}
              >
                <div className="relative w-[260px] md:w-[300px] pb-4 rounded-2xl bg-white/60 backdrop-blur-md shadow-xl">
                  <div className="absolute top-0 w-full h-3 rounded-t-2xl bg-gradient-to-r from-[#C100FF] to-[#FFBE96]" />
                  <img
                    src={item.image}
                    alt="insight"
                    draggable="false"
                    className="w-full h-[200px] object-cover rounded-t-2xl"
                  />

                  {/* Text */}
                  <p className="text-sm px-6 pt-4 text-[#0C0C0C] text-center">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function getCircularOffset(index, activeIndex, total) {
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

function getTransforms(offset) {
  switch (offset) {
    case 0:
      return {
        x: 0,
        y: 0,
        scale: 1.05,
        opacity: 1,
        zIndex: 10,
      };
    case -1:
      return {
        x: "-80%",
        y: 10,
        scale: 0.9,
        opacity: 1,
        zIndex: 9,
      };
    case 1:
      return {
        x: "80%",
        y: 10,
        scale: 0.9,
        opacity: 1,
        zIndex: 9,
      };
    case -2:
      return {
        x: "-150%",
        y: 20,
        scale: 0.75,
        opacity: 0.6,
        zIndex: 8,
      };
    case 2:
      return {
        x: "150%",
        y: 20,
        scale: 0.75,
        opacity: 0.6,
        zIndex: 8,
      };
    default:
      return {
        opacity: 0,
        scale: 0.6,
        zIndex: 1,
      };
  }
}

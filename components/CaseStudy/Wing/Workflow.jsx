"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Branding",
    text: "Mobile app branding and design were our first step. We build an intuitive app interface and a user-friendly app design.",
    position: { x: 30, y: 50 },
  },
  {
    title: "Prototyping",
    text: "A preliminary visual mock-up containing mobile app UI design, structure, and purpose.",
    position: { x: 230, y: 114 },
  },
  {
    title: "Testing",
    text: "Testing at all stages ensures bugs are resolved and features stay aligned with requirements.",
    position: { x: 400, y: 200 },
  },
  {
    title: "Sprint Planning",
    text: "Developers determine the product roadmap and estimate overall execution time.",
    position: { x: 720, y: 170 },
  },
  {
    title: "Deployment",
    text: "We push the product live after all validations and optimizations.",
    position: { x: 875, y: 230 },
  },
  {
    title: "Iterations",
    text: "We refine the app continuously to improve stability and UX.",
    position: { x: 1090, y: 229 },
  },
];

// Step pop animation based on path progress
const stepVariant = {
  hidden: { scale: 0, opacity: 0 },
  show: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3 + (i * 2) / steps.length,
      type: "spring",
      stiffness: 200,
      damping: 12,
    },
  }),
};

// Text fade animation
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + (i * 2) / steps.length },
  }),
};

// Mobile card animation
const mobileCardVariant = {
  hidden: { opacity: 0, x: -20 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const Workflow = () => {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <img
        src="/wing/hearts.png"
        alt="hero"
        className="absolute w-screen z-10 hidden md:block"
      />
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-16 md:mb-32"
        >
          Workflow <span className="text-[#5BAFEB]">Overview</span>
        </motion.h2>

        {/* Desktop View - Curved Path */}
        <div className="hidden md:block relative w-full h-[500px]">
          {/* Bird image at the end of the line */}
          <motion.img
            src="/wing/bird.png"
            alt="bird"
            className="absolute object-contain z-20"
            style={{
              left: `${(1159.92 / 1191) * 100}%`,
              top: `${(197.262 / 485) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{
              opacity: 0,
              x: -80,
              y: 40,
              rotate: -10,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ delay: 2.5, duration: 1, stiffness: 200 }}
          />

          <svg
            className="w-full h-full"
            viewBox="0 0 1161 315"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Shadow filter */}
              <filter
                id="lineShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="2"
                  floodColor="#5BAFEB"
                  floodOpacity="1"
                />
              </filter>

              {/* Clipping path for the drawing animation */}
              <clipPath id="lineClip">
                <motion.rect
                  x="0"
                  y="0"
                  height="315"
                  initial={{ width: 0 }}
                  whileInView={{ width: 1161 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </clipPath>
            </defs>

            {/* The dashed line with clip-path animation and shadow */}
            <path
              ref={pathRef}
              d="M0.415706 18.2615C35.1169 -4.23322 103.038 -18.8466 196.843 64.5222C314.099 168.733 399.481 247.755 477.979 230.879C556.477 214.004 677.756 151.112 763.357 193.556C831.837 227.511 866.719 259.14 875.6 270.71C907.782 305.949 997.815 353.013 1100.49 259.363C1128.01 235.866 1134.49 231.202 1159.92 197.262"
              stroke="#5BAFEB"
              strokeWidth="1.52874"
              strokeLinecap="round"
              strokeDasharray="10.7 10.7"
              fill="none"
              clipPath="url(#lineClip)"
              filter="url(#lineShadow)"
            />
          </svg>

          {/* STEP DOTS + TEXT */}
          <div className="absolute inset-0 pointer-events-none">
            {steps.map((s, i) => {
              // Calculate position as percentage of viewBox
              const leftPercent = (s.position.x / 1161) * 100;
              const topPercent = (s.position.y / 315) * 100;
              const isTop = i % 2 === 0;

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Circle */}
                  <motion.div
                    variants={stepVariant}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-12 h-12 bg-white border-8 shadow-inner border-[#5BAFEB] rounded-full flex items-center justify-center font-semibold text-[#5BAFEB] relative z-10"
                  >
                    {i + 1}
                  </motion.div>

                  {/* Text Card */}
                  <motion.div
                    variants={textVariant}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={`absolute ${
                      isTop ? "bottom-full mb-4" : "top-full mt-12 ml-16"
                    } ${i % 2 ? "-right-12" : "left-1/2"} -translate-x-1/2 w-56`}
                  >
                    {isTop ? (
                      <>
                        {/* TOP card: paragraph first, heading second */}
                        <div className="text-gray-600 text-sm leading-relaxed mb-2">
                          {s.text}
                        </div>
                        <div className="font-bold bg-[#5BAFEB] text-white p-3 rounded-full w-fit px-6 text-base">
                          {s.title}
                        </div>
                      </>
                    ) : (
                      <>
                        {/* BOTTOM card: heading first, paragraph second */}
                        <div className="font-bold bg-[#5BAFEB] text-white p-3 rounded-full w-fit px-6 text-base">
                          {s.title}
                        </div>
                        <div className="text-gray-600 text-sm leading-relaxed">
                          {s.text}
                        </div>
                      </>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View - Vertical Stack */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={mobileCardVariant}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              {/* Connecting Line */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                  className="absolute left-6 top-12 w-0.5 bg-gradient-to-b from-[#5BAFEB] to-transparent"
                  style={{ height: "calc(100% + 24px)" }}
                />
              )}

              <div className="flex items-start gap-4 relative">
                {/* Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15,
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                  }}
                  className="flex-shrink-0 w-12 h-12 bg-white border-4 border-[#5BAFEB] rounded-full flex items-center justify-center font-bold text-[#5BAFEB] text-lg shadow-lg z-10"
                >
                  {i + 1}
                </motion.div>

                {/* Content Card */}
                <div className="flex-1 bg-white rounded-xl p-4 shadow-md border border-gray-100">
                  <div className="inline-block bg-[#5BAFEB] text-white px-4 py-2 rounded-full font-bold text-sm mb-3">
                    {step.title}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Mobile Bird Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center pt-8"
          >
            <img
              src="/wing/bird.png"
              alt="bird"
              className="w-24 h-24 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
"use client";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const FinalOutcome = () => {
  const labels = [
    {
      id: 1,
      text: "Group Info",
      labelPosition: "top-[12.3%] right-[25%]",
      bigDotPosition: "top-[12.3%] right-[30%]",
      lineStart: "top-[13%] right-[30%]",
      lineWidth: "10%",
      direction: "right",
    },
    {
      id: 2,
      text: "Group Join Status",
      labelPosition: "top-[28%] left-[18%]",
      bigDotPosition: "top-[29.5%] left-[28.7%]",
      lineStart: "top-[30%] left-[30%]",
      lineWidth: "13%",
      direction: "left",
    },
    {
      id: 3,
      text: "Write Something Input Field",
      labelPosition: "top-[32%] right-[13%]",
      bigDotPosition: "top-[33.5%] right-[29%]",
      lineStart: "top-[34%] right-[30%]",
      lineWidth: "11%",
      direction: "right",
    },
    {
      id: 4,
      text: "Category Tag",
      labelPosition: "bottom-[34.5%] left-[17%]",
      bigDotPosition: "bottom-[34.5%] left-[25%]",
      lineStart: "bottom-[35%] left-[26%]",
      lineWidth: "14%",
      direction: "left",
    },
    {
      id: 5,
      text: "Research Link",
      labelPosition: "bottom-[29%] right-[19%]",
      bigDotPosition: "bottom-[29.5%] right-[28.8%]",
      lineStart: "bottom-[30.2%] right-[30%]",
      lineWidth: "23%",
      direction: "right",
    },
  ];

  const final = [
    "/bioyap/f1.png",
    "/bioyap/f2.png",
    "/bioyap/f3.png",
    "/bioyap/f4.png",
    "/bioyap/f5.png",
    "/bioyap/f6.png",
    "/bioyap/f7.png",
    // "/bioyap/f8.png",
  ]
  return (
    <section className="w-full py-24  relative z-50">
      <img
        src="/bioyap/w-bg.png"
        alt="hero"
        className="absolute w-screen -z-10"
      />
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Final <span className="text-[#C0F765]">Outcome</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-5xl mx-auto mb-12"
        >
          The main challenge is to deliver the mobile app development services
          which created the safe, modern and reliable experience for
          pharmaceutical professionals while making sure that the platform
          remained simple, fluent and also trustworthy. To solve this, we also
          focused on the strong UI/UX design for the interactive mobile app
          interface which was supported by the insecure in app coin system
          making sure that every challenge was addressed through the fluent and
          dependable user flow.
        </motion.p>
      </div>
      <div className="flex justify-center items-center max-w-screen-2xl mx-auto relative py-10 md:py-20 px-4">
        <img
          src="/bioyap/final.png"
          alt="final"
          // className='relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
        />

        {/* Desktop Labels - Hidden on mobile/tablet */}
        <div className="hidden lg:block">
          {labels.map((label, index) => (
            <React.Fragment key={label.id}>
              {/* Animated Dotted Line (appears first) */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.3,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className={`absolute ${label.lineStart} border-t-2 border-dotted border-[#C0F765] z-20`}
                style={{
                  width: label.lineWidth,
                  transformOrigin:
                    label.direction === "left" ? "right" : "left",
                }}
              />

              {/* Big Animated Dot (appears after line) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.3 + 0.6,
                  duration: 0.3,
                  type: "spring",
                }}
                className={`absolute ${label.bigDotPosition} w-3 h-3 xl:w-4 xl:h-4 bg-[#C0F765] rounded-full z-20`}
              />

              {/* Animated Label (appears last) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 + 0.9, duration: 0.4 }}
                className={`absolute ${label.labelPosition} bg-white rounded-lg text-xs xl:text-sm font-semibold z-20 whitespace-nowrap px-2 py-1 xl:px-3 xl:py-1.5`}
              >
                {label.text}
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile/Tablet - Simple text labels below image */}
        <div className="lg:hidden mt-8 w-full max-w-md">
          <div className="grid grid-cols-1 gap-3">
            {labels.map((label) => (
              <motion.div
                key={label.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: label.id * 0.1, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-3 h-3 bg-[#C0F765] rounded-full flex-shrink-0"></div>
                <span className="text-sm font-semibold">{label.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
       <Marquee
       pauseOnHover={true}
       
        className="flex py-8 "
      >
        {final.map((frame, index) => (
          <div
            key={index}
            className="transition-transform duration-300 mx-1 border-t rounded-3xl p-8 bg-gradient-to-t from-[#FBFFF6] to-[#F3FFE1] hover:scale-105 cursor-pointer"
          >
            <img
              src={frame}
              alt="mob"
              className="w-48"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default FinalOutcome;

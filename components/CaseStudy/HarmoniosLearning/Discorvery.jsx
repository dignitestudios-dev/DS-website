"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Parental Concern",
    desc: "Most of the parents were concerned about the screen time and ensuring safety and encouraging calmer digital routines.",
  },
  {
    title: "Kids’ Interest",
    desc: "Children showed extreme excitement for music-based activities like lip-sync features.",
  },
  {
    title: "Competitive Gap",
    desc: "Most of the applications out there lack the combination of meditation, storytelling, and creative interaction.",
  },
  {
    title: "Behavioral Patterns",
    desc: "We noticed the behavioral patterns in children. So we added soft colors, large visual elements, and simple pathways.",
  },
];


const Discorvery = () => {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Discovery & <span className="text-[#020287]">Overview</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-5xl mx-auto mb-20"
        >
          We didn’t just build everything on assumptions; we interviewed the
          parents who were concerned for their children’s safety and the kids
          who were actually the future users of the application. Basically, our
          discovery and research focused on understanding the expectations and
          features needed by the kids.
        </motion.p>

        <div className="flex flex-wrap gap-3 font-semibold  justify-center items-center">
          {steps.map((s, idx) => (
            <div
              className="rounded-[60px] relative transition-all ease-linear hover:scale-105 bg-gradient-to-b from-[#CEA3D8] to-white md:w-[23%] w-[90%]  "
              key={idx}
            >
              <img src={`/hl${idx+1}.png`} width={300} height={300} className="absolute" />
              <div className="flex flex-col items-start   h-[400px] justify-between p-8">
                <h1 className="text-xl flex items-center gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.475394"
                      y="0.475394"
                      width="22.502"
                      height="22.502"
                      rx="11.251"
                      fill="#000086"
                    />
                    <rect
                      x="0.475394"
                      y="0.475394"
                      width="22.502"
                      height="22.502"
                      rx="11.251"
                      stroke="white"
                      stroke-width="0.950788"
                    />
                    <circle
                      cx="11.7264"
                      cy="11.7266"
                      r="4.75394"
                      fill="white"
                    />
                  </svg>
                  {s.title}
                </h1>
                <p className="text-start text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discorvery;

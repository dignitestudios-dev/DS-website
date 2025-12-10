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
    <section className="w-full py-24 px-6 relative z-50 ">
      <img src="/bioyap/hero.png" alt="hero" className="absolute w-screen z-10" />
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Discovery & <span className="text-[#C0F765]">Research</span>
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

        <div className="flex flex-wrap gap-3   justify-center items-center">
          {steps.map((s, idx) => (
          <div key={idx} className="rounded-3xl bg-[#D0FF83] h-[300px]  p-6 w-[370px]" >
             <h1 className="font-semibold">{s.title}</h1>
             <div className="flex flex-col text-sm" >{s.desc}</div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Discorvery;

"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const cardVariant = (idx) => ({
  hidden: {
    opacity: 0,
    x: -60,
    height: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    height: 250 + idx * 55, // each card is taller than the previous
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const steps = [
  {
    title: "Analyzed existing Platforms",
    desc: "TaskRabbit, Thumbtack, Upwork, and local job boards that were studied to identify the pain points and also the important opportunities. ",
  },
  {
    title: "Trust and Reliability Gaps",
    desc: "Users reported doubts about the service provided, as many platforms do not mainly verify them. Ensuring verified professionals became the main priority. ",
  },
  {
    title: "User preferences",
    desc: "Homeowners wanted quick job posting, clear bid comparisons, transparent timelines, and easy communication. ",
  },
  {
    title: "Service provider challenges",
    desc: "The providers struggled to stand out without paying the high fee. This insight informed the freemium-plus-subscription model",
  },
  {
    title: "Behavioral patterns",
    desc: "Providers respond best when activity and the ratings are rewarded. Homeowners prefer verified profiles and clear job timelines. ",
  },
  {
    title: "Outcome",
    desc: "Insights that guided the job posting flow, verification steps, subscription tiers, and overall user experience. ",
  },
];

const Discorvery = () => {
  return (
    <section className="w-full py-24 px-6 relative ">
      <img
        src="/home-hero/ecc.png"
        alt="ecc"
        className="absolute w-screen h-screen top-0"
      />
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-bold mb-4"
        >
          Discovery & <span className="text-[#64486D]">Research</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#0C0C0C] max-w-5xl mx-auto mb-20"
        >
          Our team conducted a deep study to identify gaps in home service
          marketplaces. Insights guided the design of Home Hero and shaped our
          approach to the custom marketplace app development within the mobile
          app development services.
        </motion.p>

        <div className="flex flex-wrap gap-3 font-semibold  justify-center items-center">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 font-semibold justify-center items-center"
          >
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant(idx)}
                className="bg-white w-[180px] flex flex-col justify-center rounded-[35px] relative p-2 "
              >
                <div className="bg-[#64486D] text-2xl text-white absolute left-1/2 -translate-x-1/2 h-14 w-14 flex items-center justify-center -top-5 rounded-full">
                  0{idx + 1}
                </div>

                <div className="pt-8 text-center h-36 ">
                  <h1 className="text-sm h-8 flex mb-3 items-start justify-center">{s.title}</h1>
                  <p className="text-[13px] font-light">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Discorvery;

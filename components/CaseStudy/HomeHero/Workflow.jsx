"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Planning & Research",
    desc: "Mobile app branding and design laid the foundation for the app's identity. Our professional team also studied user expectations, tone, visual style, icons, and flows. The intense brand Clarity supports long-term trust and helps the product grow through the digital marketplace app portfolio.",
    position: "top",
  },
  {
    step: "02",
    title: "Prototyping",
    desc: "We built to showcase the app's look and direction. These early designs helped refine the entire experience and allowed the users to test the ideas before the coding.",
    position: "bottom",
  },
  {
    step: "03",
    title: "Iteration",
    desc: "We worked in small cycles to improve the feature design and performance. Each cycle used stakeholder feedback to move toward a smoother, much more reliable experience.",
    position: "top",
  },
  {
    step: "04",
    title: "Testing",
    desc: "Testing was conducted at every stage to resolve issues and maintain app stability. Our team followed strict checks for quality, security & privacy, and smooth performance.  ",
    position: "bottom",
  },
  {
    step: "05",
    title: "Deployment",
    desc: " Deployment involved preparing builds, configuring systems, and releasing updates for both iOS and Android. Our agency ensured new features and improvements were added smoothly through proven release steps. ",
    position: "top",
  },
];

const stepVariant = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4, duration: 0.6, ease: "easeOut" },
  }),
};

const dotVariant = {
  hidden: { scale: 0, opacity: 0 },
  show: (i) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: i * 0.2 + 0.3, duration: 0.3 },
  }),
};

const circleVariant = {
  hidden: { scale: 0, opacity: 0 },
  show: (i) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: i * 0.2, duration: 0.4, ease: "backOut" },
  }),
};

const lineVariant = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const Workflow = () => {
  return (
    <section className="w-full relative py-24 px-6 ">
      <div className="max-w-7xl relative mx-auto text-center z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Workflow <span className="text-[#64486D]">Overview</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#0C0C0C] max-w-5xl mx-auto mb-24"
        >
          Our{" "}
          <Link
            className="underline"
            href="/services/mobile-app-development-services"
          >
            mobile app development
          </Link>{" "}
          agency shaped the brand's voice and values through a straightforward,
          structured approach grounded in agile principles. This also helped us
          deliver an intuitive marketplace app interface that aligned with the
          client's Point Of View.
        </motion.p>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[600px]">
            <motion.div
              variants={lineVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute top-1/2 left-[10%] w-[80%] h-[3px] bg-gradient-to-r from-[#64486D] to-[#CEA3D8] origin-left -translate-y-1/2"
              style={{ zIndex: 1 }}
            />

            <div className="grid grid-cols-5 gap-0 relative h-full">
              {steps.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center relative"
                  style={{ zIndex: 2 }}
                >
                  {item.position === "top" ? (
                    <div className="absolute top-11 flex flex-col items-center">
                      <motion.div
                        custom={i}
                        variants={stepVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="bg-white/90 w-[357px] h-[177px] backdrop-blur-lg rounded-2xl p-5 shadow-lg text-center  mb-4"
                      >
                        <h4 className="font-semibold text-lg mb-1 text-[#64486D]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>

                      <div className="flex flex-col items-center gap-1.5 mb-1">
                        {[0, 1, 2].map((dotIdx) => (
                          <motion.span
                            key={dotIdx}
                            custom={i * 3 + dotIdx}
                            variants={dotVariant}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className={`${
                              dotIdx === 0
                                ? "w-3 h-3 bg-[#64486D]"
                                : dotIdx === 1
                                ? "w-2 h-2 bg-[#64486D]/70"
                                : "w-1.5 h-1.5 bg-[#64486D]/40"
                            } rounded-full`}
                          />
                        ))}
                      </div>

                      <motion.div
                        custom={i}
                        variants={circleVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="w-12 h-12 rounded-full border-4 border-[#64486D] flex items-center justify-center text-lg font-bold text-[#64486D] bg-white shadow-lg"
                      >
                        {item.step}
                      </motion.div>
                    </div>
                  ) : (
                     <div className="absolute bottom-11 flex flex-col items-center">
                      <motion.div
                        custom={i}
                        variants={circleVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="w-12 h-12 rounded-full border-4 border-[#64486D] flex items-center justify-center text-lg font-bold text-[#64486D]  bg-white shadow-lg"
                      >
                        {item.step}
                      </motion.div>

                      <div className="flex flex-col items-center gap-1.5 mt-1">
                        {[0, 1, 2].map((dotIdx) => (
                          <motion.span
                            key={dotIdx}
                            custom={i * 3 + dotIdx}
                            variants={dotVariant}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className={`${
                              dotIdx === 0
                                ? "w-3 h-3 bg-[#64486D]"
                                : dotIdx === 1
                                ? "w-2 h-2 bg-[#64486D]/70"
                                : "w-1.5 h-1.5 bg-[#64486D]/40"
                            } rounded-full`}
                          />
                        ))}
                      </div>

                      <motion.div
                        custom={i}
                        variants={stepVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="bg-white/90 w-[357px] h-[177px] backdrop-blur-lg rounded-2xl p-5 shadow-lg text-center  mt-4"
                      >
                        <h4 className="font-semibold text-lg mb-1 text-[#64486D]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
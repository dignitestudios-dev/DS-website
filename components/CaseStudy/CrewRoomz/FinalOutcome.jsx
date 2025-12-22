"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const phones = [
  "/crew/f1.png",
  "/crew/f2.png",
  "/crew/f3.png",
  "/crew/f4.png",
  "/crew/f5.png",
  "/crew/f6.png",
  "/crew/f7.png",
  "/crew/f8.png",
  "/crew/f9.png",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const FinalOutcome = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background */}
      <img
        src="/bioyap/w-bg.png"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Final <span className="text-[#36C0EF]">Outcome</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-5xl mx-auto text-sm md:text-base"
        >
          With CrewRoomz, you get a polished, professional web experience built
          just for aviation professionals. Built with expert{" "}
          <Link
            href="/services/web-application-development-services"
            className="underline"
          >
            Web Application Development
          </Link>{" "}
          services, the platform delivers a smooth, mobile-optimized experience
          for crews and property owners alike.
        </motion.p>
      </div>

      {/* Phones Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid grid-cols-3 gap-x-10 gap-y-0 px-6"
      >
        {phones.map((src, index) => {
          const column = index % 3;

          return (
            <motion.div
              key={index}
              variants={item}
              className={`flex justify-center
                ${column === 1 ? "mt-10" : ""}
                ${column === 2 ? "mt-20" : ""}
              `}
            >
              <img
                src={src}
                alt={`phone-${index}`}
              className="w-[160px] md:w-full h-auto object-contain drop-shadow-xl"

              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FinalOutcome;

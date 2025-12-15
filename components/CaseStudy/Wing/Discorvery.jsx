"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    p:"We started by diving into how people actually use dating apps like Tinder, Bumble, and Hinge. What we found shaped everything:",
    steps: [
      "Users often don’t trust profiles; they’re unsure if intentions are real.",
      "Involving friends in the process increases trust and reduces bad matches.",
      "No major app combines friend endorsements with match making support, leaving a clear market gap.",
    ],
    bg: "bg-gradient-to-t from-[#F9FCFF] to-[#AEDDFF]",
    shad:"/wing/d-shad.png"
  },
  {
    title: "Research",
        p:"Next, we focused on what users really want and how to keep the platform safe and simple:",
    steps: [
      "Transparent profiles, shared interests, and social proof matter most.",
      "Subscription-based models encourage commitment and reduce fake profiles.",
      "Simplicity is key: clean navigation, quick matching, and frictionless communication.",
    ],
    bg: "bg-gradient-to-t from-[#F7F7F7] to-[#F9FCFF]",
    shad:"/wing/r-shad.png"
  },
];

const Discorvery = () => {
  return (
    <section className="w-full py-8  relative z-50 ">
      <img
        src="/wing/hearts.png"
        alt="hero"
        className="absolute w-screen top-16 z-10"
      />
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Discovery & <span className="text-[#5BAFEB]">Research</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-5xl mx-auto mb-20"
        >
        When we built Wing, we made sure everything was aligned with the client’s vision. We chose an Agile workflow and built the whole application. We started with mobile app branding and early research to set the user expectations, the whole vibe. Once it was sorted, we went for sprint planning and the rest of the phases. 
        </motion.p>

        <div className="flex flex-wrap gap-3 relative z-50  justify-center items-center">
          {steps.map((s, idx) => (
            <div
              key={idx}
              // style={{ backgroundColor: s.bg }}
              className={`rounded-[57px] text-start relative h-[350px]  p-8 py-10 w-full md:w-[520px] ${s.bg} ${idx == 1 && "shadow-xl shadow-blue-50"}`}
            >
              <img src={s.shad} className="absolute top-0 right-0" />
              <h1 className="font-semibold mb-4 text-xl text-[#0095FF]">{s.title}</h1>
              <p className="text-sm mb-5">{s.p}</p>
              <ul className=" text-sm mb-2 space-y-3">
                {s.steps.map((st, indx) => (
                  <li key={indx} className="flex items-start gap-2 capitalize ">
                    <img src="/wing/dr.png" />
                    {st}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discorvery;

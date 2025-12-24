"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Understanding User Behavior",
    steps: [
      "Pharma employees needed a secure, highly focused industry space more than general social media.",
      "Users also wanted trusted buying and selling through fewer scams and more relevant listings.",
      "There was a strong need for internal news sourced through pharma updates and global industry news.",
    ],
    bg: "#D0FF83",
  },
  {
    title: "Market Analysis",
    steps: [
      "There were no dedicated platforms for real pharma community engagement.",
      "Existing custom mobile applications did not combine community features with the marketplace and reward-based systems.",
    ],
    bg: "#DBFF9E",
  },
  {
    title: "Insights Gathered",
    steps: [
      "Users preferred fast posting, simple listing steps, and clear credibility indicators.",
      "The coin system encouraged higher participation and created a natural gamified economy.",
    ],
    bg: "#EEFFD2",
  },
];

const Discorvery = () => {
  return (
    <section className="w-full py-8  relative z-50 ">
      <img
        src="/bioyap/hero.png"
        alt="hero"
        className="absolute w-screen z-10"
      />
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
          className=" max-w-5xl mx-auto mb-20"
        >
          During the discovery phase we personalized the mobile app development
          services to align with real needs of users. This also helped us design
          the professional networking app project which felt safe, relevant and
          quite easy to use.
        </motion.p>

        <div className="flex flex-wrap gap-3 relative z-50  justify-center items-center">
          {steps.map((s, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: s.bg }}
              className={`rounded-3xl text-start dark:text-black  h-[320px]  p-8 py-10 w-[370px]`}
            >
              <h1 className="font-semibold mb-4">{s.title}</h1>
              <ul className=" text-xs mb-2 space-y-3">
                {s.steps.map((st, indx) => (
                  <li key={indx} className="flex items-start gap-2 ">
                    <img src="/bioyap/bulb.png" />
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

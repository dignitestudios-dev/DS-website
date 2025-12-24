"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const challenges = [
  "Building trust in online dating, where authenticity and safety are major concerns",
  "Making friend endorsements feel genuine, not gimmicky or forced",
  "Preventing misuse or trolling within the “recommend a friend” feature",
  "Keeping the UX simple across both modes: Find for Me + Find for Friends",
  "Adding a mandatory subscription flow without scaring users away",
  "Ensuring the admin panel could handle moderation, user management, and safety at scale",
];

const solutions = [
  "Added a layered verification system + social proof to boost trust",
  "Designed endorsements around real traits, not random badges",
  "Implemented guardrails and reporting to keep friend-matching safe",
  "Simplified screens and flows so both modes feel natural and lightweight",
  "Built a smooth subscription onboarding with clear value upfront",
  "Created a full admin dashboard for safe, scalable, real-time app management",
];

const ProblemSol = () => {
  return (
    <section className="w-full py-24 px-6 overflow-hidden">
      <img
        src="/wing/hearts.png"
        alt="hero"
        className="absolute w-screen  z-10"
      />
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Problems & <span className="text-[#5BAFEB]">Solutions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className=" max-w-5xl relative z-50 mx-auto mb-20"
        >
        Wing isn’t a regular dating app; it mixes personal matchmaking with friend involvement, so the problems were layered. We had to solve trust issues, keep the UX stupid-simple, prevent misuse, and still make the whole thing feel natural. Every challenge pushed us to create solutions that were clean, scalable, and aligned with how people actually date today.
        </motion.p>

        <div className="flex md:flex-row flex-col gap-4 justify-center ">
          <div className="bg-[#f9d5d5] p-5 rounded-[60px] relative z-50   ">
            <img
              src="/wing/c-outer.png"
              alt="cloud"
              className="absolute bottom-0 left-0 rounded-bl-[50px]"
            />
            <div className="p-8 py-3 rounded-[60px] space-y-4 border border-white text-start bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-white/80 relative">
              <img
                src="/wing/c-inner.png"
                alt="cloud"
                width={120}
                className="absolute top-0 right-0 rounded-tr-[50px]"
              />
              <h1 className="text-lg font-semibold mb-2 text-black">Challenges</h1>
              {challenges.map((c, idx) => (
                <div className="flex gap-2 text-black capitalize text-sm items-start">
                  <img src="/wing/r-heart.png" alt="heart" />
                  <h2>{c}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#5BAFEB]/50 p-5 rounded-[60px] relative z-50  ">
            <img
              src="/wing/h-outer.png"
              alt="cloud"
              className="absolute bottom-0 left-0 rounded-bl-[50px]"
            />
            <div className="p-8 py-3 rounded-[60px] space-y-4 border border-white text-start bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-white/80 relative">
              <img
                src="/wing/c-inner.png"
                alt="cloud"
                width={120}
                className="absolute top-0 right-0 rounded-tr-[50px]"
              />
              <h1 className="text-lg font-semibold mb-2 text-black">Solutions</h1>
              {solutions.map((c, idx) => (
                <div className="flex gap-2 text-black capitalize text-sm items-start">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0C0.455523 13.0593 14.9168 12.9955 23.4331 19.541C17.9219 17.1748 8.88887 17.6947 2.35014 13.4896C5.40031 23.3178 16.2801 20.082 24.27 22.7535C19.5117 22.2928 13.236 24.9567 7.3036 22.8496C12.5424 31.0369 19.338 25.5682 25.9218 25.6165C22.6011 26.4554 19.1724 30.1254 14.5875 29.7812C20.1745 35.113 23.1001 29.9353 27.1023 27.9511C27.0974 27.957 27.0918 27.9627 27.0868 27.9686C27.2468 27.8854 27.4172 27.8237 27.5936 27.7851C27.7274 27.7556 27.8639 27.7395 28.001 27.7371C28.9426 27.7227 29.7966 28.3665 30.0076 29.3139C30.0975 29.7164 30.0598 30.1367 29.8996 30.5171C29.894 30.4746 29.8866 30.4324 29.8776 30.3905C29.6885 29.541 28.8402 29.004 27.9834 29.1916C27.1267 29.3791 26.5851 30.2203 26.7742 31.0697C26.8004 31.185 26.8395 31.2971 26.891 31.4037C26.8779 31.3949 26.8642 31.3867 26.8513 31.3776C26.8907 31.4405 26.933 31.5013 26.9768 31.561C27.0614 31.6959 27.1662 31.8174 27.2874 31.9213C27.7897 32.4133 28.4713 32.7285 29.2324 32.762C30.8626 32.8341 32.2433 31.581 32.3159 29.9646C32.3749 28.6512 31.5539 27.5012 30.3689 27.0775C30.3682 27.0773 30.3673 27.0778 30.3668 27.0775C29.6916 26.7039 29.1019 26.2503 28.6047 25.7454C29.7353 26.2461 31.1084 26.0021 31.99 25.0465C33.0914 23.8526 33.0091 22.0002 31.8049 20.908C31.1187 20.2858 30.2177 20.0457 29.3645 20.1743C29.1391 20.1868 28.9141 20.2528 28.7104 20.3818C28.077 20.7827 27.892 21.6167 28.2963 22.2446C28.7006 22.8727 29.5417 23.0561 30.1751 22.6553C30.5094 22.4437 30.7168 22.1124 30.7808 21.7533C30.9567 22.5513 30.6283 23.4086 29.8931 23.8739C28.9505 24.4704 27.6976 24.197 27.0958 23.2624C26.9105 22.9746 26.8029 22.6445 26.7831 22.3036C26.783 22.3015 26.781 22.2993 26.781 22.2971C26.7563 22.1488 26.7387 21.9994 26.7281 21.8495C26.0286 11.5864 8.77927 10.249 7.0443e-05 6.99782e-05L0 0Z"
                      fill="#5BAFEB"
                    />
                  </svg>

                  <h2>{c}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSol;

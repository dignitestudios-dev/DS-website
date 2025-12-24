"use client";
import React from "react";
import { motion } from "framer-motion";
import Milestone from "./icons/Milestone";
import Sector from "./icons/Sector";
import Did from "./icons/Did";
const Hero = () => {
  return (
    <section className=" max-w-screen-2xl mx-auto w-full relative z-20 p-4">
      {/* <img src="/bioyap/hero.png" alt="hero" className="absolute w-screen -z-10" /> */}
      <div className="w-full gap-2 flex flex-col items-center ">
        <img src="/home-hero/icon.png" alt="icon" fill />
        <div className="flex flex-col items-center text-center w-[90%] md:w-[70%]">
          <h1 className="text-[24px]  leading-[60px] md:text-[48px] text-wrap  font-bold  mb-6">
            <span className="dark:text-[#D9BBF9] text-[#62466B]  ">Streamlined Marketplace </span>
            for Hiring  Trusted  Home Services
          </h1>

          <p className="text-sm md:text-base  mb-8 ">
            The mobile device application called Home Hero was developed to make
            the hiring quite easy and also stress free. Furthermore it also acts
            as the digital marketplace which links households through the
            reliable caregivers and also the odd jobs. Through the reliable
            assistants, the users can also publish, get bids and also to
            interact with homeowners. In order to establish their bids and to
            develop a loyal customer base, users can also submit jobs, evaluate
            the bids against their profiles, and select the best professional
            service provider.
            <br />
            Furthermore, this program operates on the freemium alongside the
            subscription model which grants user access in addition to boosts,
            bidding that would be prioritized and the increased credibility.
            Developing a safe, transparent and user-friendly eco system which
            gives the advantage to both sides of the market and also maintains
            dependable and safe transactions was the different goal.
          </p>

          <div className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex  justify-center relative">
          {/* <div className="absolute top-[20%] text-[60px] md:text-[180px] font-bold text-gray-200 opacity-80 select-none blur-sm">
            MEDITATION
          </div> */}
          <motion.div
            initial={{ opacity: 0 , y:100 }}
            animate={{ opacity: 1 , y:0 }}
            viewport={{once:true}}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <img
              src="/home-hero/hero.png"
              alt="App Preview"
              className=" drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      <div className="bg-gradient-to-r relative z-50 md:w-[80%] mx-auto md:px-10 gap-12 rounded-xl flex md:flex-row flex-col p-5 text-white justify-between from-[#D6B8F6]  to-[#7A5D88]">
        <div className="flex items-end gap-2 ">
          <div className="mb-2" >
          <Milestone />
          </div>
          <div className="">
            <h3 className="">The Milestones</h3>
            <h1 className="font-semibold ">
              {" "}
              6 months of end to end of product development{" "}
            </h1>
          </div>
        </div>
        <div className="flex items-end gap-2 ">
          <div className="mb-2" >
          <Sector />
          </div>
          <div>
            <h3 className="">The Sector</h3>
            <h1 className="font-semibold ">
              Odd Job Marketplace, Homer service Platform
            </h1>
          </div>
        </div>
        <div className="flex items-end gap-2 ">
          <div className="mb-2" >
          <Did />
          </div>
          <div>
            <h3 className="">What We Did</h3>
            <h1 className="font-semibold ">
              Mobile App Development, Branding, UI UX Design, Admin Panel
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className=" max-w-screen-2xl mx-auto w-full relative z-20 p-4">
      <img src="/bioyap/hero.png" alt="hero" className="absolute w-screen -z-10" />
      <div className="w-full gap-12 flex flex-col items-center ">
        <div className="flex flex-col items-center text-center w-[90%] md:w-[80%]">
          <h1 className="text-[24px] md:text-[48px] text-wrap  font-bold  mb-6">
            <span className="text-[#C0F765]  ">A Social Marketplace App: </span> Built for Global Pharma Professionals
          </h1>

          <p className="text-gray-600 text-sm md:text-lg mb-8 ">
            BioYap is a platform specifically  for pharmaceutical experts. Our team at Dignite Studios delivered complete mobile app development services while building a mobile app case study digital space where users can share updates and stay informed through a trusted community feed. This app would allow users to post insights from industry discussions and follow global news in one place. BioYap also includes a coin-based marketplace where users can buy coins at simple rates, i.e, 100 coins for 20 dollars. You can use the coins to purchase several items and the supporting peers through donations . This approach brings social interaction, peer commerce, and community contributions for a fluent experience. The main goal was to help professionals and stay connected outside traditional office channels.  
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
        <div className="flex mb-8 justify-center relative">
          {/* <div className="absolute top-[20%] text-[60px] md:text-[180px] font-bold text-gray-200 opacity-80 select-none blur-sm">
            MEDITATION
          </div> */}
          <motion.div
            initial={{  opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <img
              src="/bioyap/hero-bg.png"
              alt="App Preview"
              className="w-[320px] md:w-[700px] drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      <div className="bg-gradient-to-r md:w-[80%] mx-auto md:px-16 rounded-xl flex md:flex-row flex-col p-5 text-white justify-between from-[#bff765b2] via-[#333333] to-[#333333]">
        <div className="">
          <h3 className="mb-4">The Milestones</h3>
          <h1 className="font-semibold">6 months of end to end of product development </h1>
        </div>
        <div className="">
          <h3 className="mb-4">The Sector</h3>
          <h1 className="font-semibold">Pharmaceutical community networking and peer marketplace </h1>
        </div>
        <div className="">
          <h3 className="mb-4">What We Did</h3>
          <h1 className="font-semibold">
           Mobile App Development coin marketplace system branding UI and UX design. 
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className=" max-w-screen-2xl mx-auto w-full relative z-20 ">
      <div className="w-full gap-6 mt-14 flex flex-col items-center ">
         <img src="/wing/icon.png" alt="icon" fill />
        <div className="flex flex-col items-center text-center w-[90%] md:w-[80%]">
          <h1 className="text-[24px] md:text-[48px] leading-tight text-wrap  font-bold  mb-6">
            <span className="text-[#5BAFEB]  ">Wing:</span> Redefining Dating Through <br/>Friend-Powered Matchmaking
          </h1>

          <p className="text-gray-600 text-sm md:text-lg mb-8 ">
            Wing is basically the dating app for people who are tired of the same old swipe chaos. We were glad to offer our mobile app development services when the client came to us with the idea of Wing. We made sure to do our research. So, instead of building just another traditional dating app, we introduced a friend-assisted matchmaking system. The friend-assisted matchmaking system lets your friends hype you up and match you with people they think actually fit.The app runs on a mandatory subscription model, which keeps the vibe clean, high-intent users, minimal spam, and way fewer “what am I even doing here?” profilesYou still get all the cool features like smart search, solid matching, friend endorsements, and real-time chat that feels natural. Plus, there’s a complete admin panel behind the scenes for moderation, analytics, user controls, and managing subscriptions. Basically, it’s dating but with actual trust built in. 
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
   <div className="flex md:mb-8 mt-28 md:mt-0 justify-center relative">
  <img src="/wing/cloud.png" alt="cloud" className="-mb-24 w-screen scale-110 relative z-20" />

  <motion.img
    src="/wing/hero.png"
    alt="App Preview"
    className="absolute -bottom-28"
    initial={{ y: 150, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 1.2,
      ease: "easeOut"
    }}
  />
</div>
      </div>
      <div className="bg-gradient-to-r md:w-[80%] relative z-30 gap-16 mx-auto md:px-16 rounded-xl flex md:flex-row flex-col p-5 text-white justify-between from-[#8FCCF8] to-[#5BAFEB]">
        <div className="">
          <h3 className="mb-4">Built in</h3>
          <h1 className="font-semibold">Six moon cycles</h1>
        </div>
        <div className="">
          <h3 className="mb-4">The Sector</h3>
          <h1 className="font-semibold"> Dating & Socialization App</h1>
        </div>
        <div className="">
          <h3 className="mb-4">What We Did</h3>
          <h1 className="font-semibold">
           Mobile App Development, Branding, UI/UX Design, Admin Panel
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

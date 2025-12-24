"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const Hero = () => {
  return (
    <section className=" max-w-screen-2xl mx-auto w-full   p-4">
      <div className="w-full gap-5 mt-14 flex flex-col items-center ">
        <img src="/icon.png" alt="icon" fill />
        <div className="flex flex-col items-center text-center w-[90%] md:w-[80%]">
          <h1 className="text-[24px]  md:text-[48px] text-wrap  font-bold  mb-6">
            <span className="dark:text-[#CEA3D8] text-[#000086]  ">Harmonious Learning:</span> A
            Calm, Creative Audio <br/> World For Kids
          </h1>

          <p className="text-sm md:text-lg mb-8 ">
            When the world is full of chaotic, overstimulated applications that
            lack parental control and are actually impacting children’s mental
            health, we built an application that considered all these factors
            before launching it.
            <br />
            After building multiple successful app projects, as shown in our
            mobile app case study section, when the client came to us with an
            app idea that fixes this gap, we gladly offered our mobile app
            development services and built Harmonious Learning.
            <br />
            It’s a Spotify-style mobile app that is built for children’s
            emotional wellness. We created a space for the kids and filled it
            with meditation music, fun lip-sync activities, and creator-driven
            bedtime stories. In contrast, offering proper parental control makes
            it manageable and to protect children’s mental well-being.
          </p>

          <div className="flex items-center gap-4">
            <Link href={"https://play.google.com/store/apps/details?id=com.dignitestudios.harmoniousLearning"}  target="_blank" >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
            </Link>
            <Link target="_blank"  href={"https://apps.apple.com/us/app/harmonious-learning/id6744360499"}>
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12 cursor-pointer"
            />
            </Link>
          </div>
        </div>
        <div className="flex justify-center relative">
          <div className="absolute top-[20%] text-[60px] md:text-[180px] font-bold text-gray-200 opacity-80 select-none blur-sm">
            MEDITATION
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <img
              src="/hl.png"
              alt="App Preview"
              className="w-[320px] md:w-[400px] drop-shadow-2xl"
            />
          </motion.div>
        </div>
        <div className="w-full md:w-[80%] md:block hidden mx-auto h-[100px] bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 -mt-28" />
      </div>
      <div className="bg-gradient-to-r md:w-[80%] mx-auto md:px-16 rounded-xl flex md:flex-row flex-col p-5 text-white justify-between from-[#000086] to-[#CEA3D8]">
        <div className="">
          <h3 className="mb-4">Built After</h3>
          <h1 className="font-semibold">Six Turns Of The Calendar</h1>
        </div>
        <div className="">
          <h3 className="mb-4">The Sector</h3>
          <h1 className="font-semibold">Children’s Learning & Mindfulness</h1>
        </div>
        <div className="">
          <h3 className="mb-4">What We Did</h3>
          <h1 className="font-semibold">
            Mobile App Development, UI/UX Design, Branding
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

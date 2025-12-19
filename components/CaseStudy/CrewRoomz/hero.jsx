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
      <div className="w-full gap-5 mt-14 flex flex-col items-center ">
        <img src="/crew/icon.png" alt="icon" fill />
        <div className="flex flex-col items-center text-center w-[90%] md:w-[80%]">
          <h1 className="text-[24px] text-[#1F222E] leading-[60px] md:text-[48px] text-wrap  font-bold  mb-6">
            <span className="text-[#36C0EF]  ">CrewRoomz </span>
            Building a Trusted Global Stay <br/> for Cabin Crews
          </h1>

          <p className="text-[#0C0C0C] text-sm md:text-base  mb-8 ">
          CrewRoomz is built for cabin crew members who are always on the move and need a reliable place to rest. When the client came to Dignite Studios with the idea, we were really excited to offer our web application development services to create a custom web application that makes a difference in the world.  
            <br />
         With CrewRoomz, crew members can book anything from private rooms to multi-sharing spaces, and property owners can list their spaces after admin approval. We made sure to provide the web-based solutions that worked well for the client. So, at the end of the day, our Web App Development approach made CrewRoomz a trusted, safe, and community-driven platform for frequent travelers. 
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
        <div className="flex  justify-center relative -my-40 ">
          {/* <div className="absolute top-[20%] text-[60px] md:text-[180px] font-bold text-gray-200 opacity-80 select-none blur-sm">
            MEDITATION36
          </div> */}
   
            <img
              src="/crew/hero.png"
              alt="App Preview"
              fill
              className="  scale-125  "
            />
            <motion.img      initial={{ opacity: 0, scale: 0.8, y: 70 , x:-200 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 , x:0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }} src="/crew/plane.png" className="absolute top-[30%]"   alt="plane" fill/>
      
        </div>
      </div>
      <div className="bg-gradient-to-r relative z-50 md:w-[80%] mx-auto md:px-10 gap-12 rounded-xl flex md:flex-row flex-col p-5 text-white justify-between from-[#36C0EF]  to-[#29ABE2]">
        <div className="flex items-end gap-2 ">
          <div className="mb-2" >
          <Milestone />
          </div>
          <div className="">
            <h3 className="">Time Taken</h3>
            <h1 className="font-semibold ">
              {" "}
              30 weeks of app evolution{" "}
            </h1>
          </div>
        </div>
        <div className="flex items-end gap-2 ">
          <div className="mb-2" >
          <Sector />
          </div>
          <div>
            <h3 className="">Category</h3>
            <h1 className="font-semibold ">
             Travel & Hospitality App
            </h1>
          </div>
        </div>
        <div className="flex items-end gap-2 ">
          <div className="mb-2" >
          <Did />
          </div>
          <div>
            <h3 className="">Services we offered</h3>
            <h1 className="font-semibold ">
             Web app development, ui ux & branding
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

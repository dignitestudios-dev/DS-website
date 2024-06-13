"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext } from "react";

const DiscoverOurHistory = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 pb-12 pt-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-3 lg:col-span-2 flex flex-col items-start gap-8 xl:pr-32">
          <h1
            className={`${
              theme === "light" ? "text-black" : "text-white"
            } font-bold text-[64px] tracking-[-2.56px] uppercase leading-none`}
          >
            discover our <br /> history
          </h1>
          <p
            className={`${
              theme === "light" ? "text-[#2A2A2A]" : "text-white"
            } tracking-[-0.21px] leading-[20.4px]`}
          >
            Leading with years of experience, Dignite Studios has been centering
            on the modernization of mobile software specifications to create
            magnificent web and mobile applications for their valuable clients.
            Our company of mobile business intelligence has a proven track
            record of triumphant mobile projects which are illustrious in
            today’s digital realm. We have achieved phenomenal growth in
            empowering diverse businesses with innovation and contemporary ideas
            to enliven various blueprints. We have globally earned remarkable
            endorsement and apprehension in the “INC 5000 list.” Throughout the
            journey, our unwavering focus has remained on transformation, client
            satisfaction, and making an indelible impact in the realms of
            technology and software.
          </p>
          <div>
            <button className="px-8 py-7 rounded-full font-medium text-lg border border-[#F15C20] text-[#F15C20] hover:bg-[#F15C20] hover:text-white transition-all duration-300">
              Start Your Project
            </button>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
            <img src={'/discover-our-history-mockup.png'} />
        </div>
      </div>
    </div>
  );
};

export default DiscoverOurHistory;

"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import MobileAppWeDevelopSwiper from "./MobileAppWeDevelopSwiper";
import ContactButton from "@/components/global/ContactButton";

const MobileAppWeDevelopSection = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <section className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-center w-full mt-6 mb-10 md:my-12 lg:mt-16 lg:mb-20">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between">
        <div className="lg:w-[70%] xl:w-[80%] flex flex-col gap-y-6 lg:gap-y-2">
          <h2
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } headings-size`}
          >
            <span className="text-[#F15C20]">mobile apps</span> we develop
          </h2>
          <p
            className={`text-base font-normal text-start ${
              theme === "light" && "text-[#2A2A2A]"
            }`}
          >
            Diginite Studios creates top-notch mobile applications and
            cutting-edge mobile features for their users to clinch their potency
            and worthiness. Our mobile app services endeavor to build Android
            and IOS mobile applications that function as per the required needs
            of the user. Heading with successful mobile projects we fabricate
            app success in the procreation of unbeatable user interfaces, coding
            systems, database management, security, and maintenance.  
          </p>
        </div>

        <div className="flex flex-col gap-y-32 mt-4 lg:mt-0">
          <div className="mt-7">
            <ContactButton text1={"Get In Touch"} text2={"Let's talk"} />
          </div>
        </div>
      </div>
      <div
        className={`border ${
          theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
        } w-full mb-4 mt-6`}
      />

      <MobileAppWeDevelopSwiper />
    </section>
  );
};

export default MobileAppWeDevelopSection;

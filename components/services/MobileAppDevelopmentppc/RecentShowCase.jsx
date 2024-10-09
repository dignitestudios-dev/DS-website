"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import ContactButton from "@/components/global/ContactButton";
import RecentDesignShowCase from "./RecentDesignShowCase";

const RecentShowCase = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <section id="recentShowCase" className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-center w-full mt-6 mb-10 md:my-12 lg:mt-16 lg:mb-20  ">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between">
        <div className="lg:w-[70%] xl:w-[80%] flex flex-col gap-y-6 lg:gap-y-2">
          <h2
            className={`${theme === "dark" ? "text-white" : "text-black"
              } text-5xl capitalize font-[600]`}
          >
            <span className="text-[#F15C20] text-[20px] font-[700] upper">Recent
              <img src="/mainUnder.png" className='' alt="" srcset="" />
            </span>
            <div className='mt-5' >
            design showcase
            </div>
          </h2>
          <p
            className={`text-base font-normal text-start mt-3 ${theme === "light" && "text-[#2A2A2A]"
              }`}
          >
           Our revolutionary hybrid app development services bestow a well-organized
            structure to build entirely customized hybrid mobile apps that are highly
             compatible with various devices. Dignite’s hybrid mobile app developers 
             construct high-powered hybrid software that suits business needs.
          </p>
        </div>

        <div className="flex flex-col gap-y-32 mt-4 lg:mt-0">
          <div className="mt-7">
            <ContactButton text1={"Schedule a call"} text2={"Let's talk"} />
          </div>
        </div>
      </div>
     
      <RecentDesignShowCase />
    </section>
  );
};

export default RecentShowCase;

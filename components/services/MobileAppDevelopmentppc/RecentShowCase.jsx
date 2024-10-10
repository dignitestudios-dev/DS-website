"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import RecentDesignShowCase from "./RecentDesignShowCase";
import ContactButtonPPC from "@/components/global/ContactButtonPPC";

const RecentShowCase = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <section id="recentShowCase" className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-center w-full mt-6 mb-10 md:my-12 lg:mt-16 lg:mb-20  ">
      <div className="w-full flex flex-col  2xl:mb-6 lg:flex-row items-start justify-between">
        <div className="lg:w-[70%] xl:w-[80%]  flex flex-col gap-y-6 lg:gap-y-2">
          <h2
            className={`${theme === "dark" ? "text-white" : "text-black"
              } headings-size capitalize font-[600]`}
          >
            <span className="text-[#F15C20] text-[20px] font-[700] tracking-wide leading-[28px] upper">Recent
              <img src="/mainUnder.png" className='' alt="" srcset="" />
            </span>
            <div className='mt-5' >
              Case Studies
            </div>
          </h2>
          <p
            className={`text-base font-normal text-start mt-3 ${theme === "light" && "text-[#2A2A2A]"
              }`}
          >
            Curious to see our work in action? Check out our latest case
            studies to learn how we've helped businesses of all size
            achieve their mobile app goals. From successful launches
            to measurable results, our portfolio showcases the power
            of innovative app development. Discover how we can transform
            your business with a custom mobile app.

          </p>
        </div>

        <div className="flex flex-col gap-y-32 mt-4 lg:mt-0">
          <div className="mt-7">
            <ContactButtonPPC text1={"Schedule a Call"} text2={"Let's Talk"} />
          </div>
        </div>
      </div>

      <RecentDesignShowCase />
    </section>
  );
};

export default RecentShowCase;

"use client";
import { lifecycle } from "@/constants/lifecycle";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";

const Lifecycle = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section
      className={`px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-6 justify-start items-start w-full my-6 md:my-12 lg:mt-20 lg:mb-28`}
    >
      <div className="w-full flex items-center justify-between">
        <h1
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } text-start text-3xl lg:text-5xl xl:text-[64px] font-bold uppercase lg:tracking-tighter`}
        >
          up-to-the-minute
        </h1>
        <div className="hidden lg:block">
          <Link
          href={{
            pathname: '/contact-us',
          }}
            className={`py-8 px-[26px] border border-[#F15C20] text-[#F15C20] hover:text-white ${theme === 'light' ? 'bg-white': 'bg-[#222222]'} hover:bg-[#F15C20] transition-all duration-300 rounded-full text-xl font-medium`}
          >
            Let's Start Your Project
          </Link>
        </div>
      </div>

      <p
        className={`text-[18px] font-normal ${
          theme === "light" && "text-[#2A2A2A]"
        } leading-[24.48px] tracking-[-0.252px]`}
      >
        Our software development life cycle empowers companies to functionalize
        their brand identity by building an effective and powerful mobile app
        for its users. To create more clicks and produce more revenue we provide
        a complete mobile solution to make a global recognition of your mobile
        applications.
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 xl:gap-x-20 lg:mt-12">
        {lifecycle.map((step, index) => {
          return (
            <div
              className="w-full flex items-start justify-start border-2 border-t border-r-0 border-l-0 border-b-0 pt-3 gap-2 lg:gap-0"
              key={index}
            >
              <div className="w-[9%] lg:w-[7%]">
                <p className="text-[#5F5F5F] text-2xl font-medium">
                  {step.num}
                </p>
              </div>
              <div className="w-[91%] lg:w-[93%] flex flex-col gap-2">
                <p className="text-2xl font-semibold">{step.title}</p>
                <p className="text-[15px] font-normal leading-[20.4px]">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="lg:hidden mt-6 w-full flex justify-center">
          <Link
            href={{
              pathname: '/contact-us',
            }}
            className="py-8 px-[26px] border border-[#F15C20] text-[#F15C20] hover:text-white hover:bg-[#F15C20] transition-all duration-300 rounded-full text-xl font-medium"
          >
            Let's Start Your Project
          </Link>
        </div>
    </section>
  );
};

export default Lifecycle;

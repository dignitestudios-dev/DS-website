"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext } from "react";

const TopRatedAppDevelopmentContactSection = () => {
  const {theme} = useContext(GlobalContext)
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-start w-full my-6 md:my-12 lg:my-24">
      <div className={`w-full ${theme == "dark" ? "bg-[#393939]" : "bg-[#F9F9F9]"} p-4 lg:p-12 rounded-[28px] grid grid-cols-3 gap-10`}>
        <div className="col-span-3 lg:col-span-2 flex flex-col items-start gap-8">
          <h1 className="text-[34px] lg:text-[64px] font-medium lg:tracking-[-3.2px]">
            Let’s build an awesome project together!
          </h1>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="name" className="text-base font-medium">
                Name<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="text"
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 border-b bg-transparent"
                placeholder="Enter name"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="name" className="text-base font-medium">
                Email address<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="email"
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 border-b bg-transparent"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="name" className="text-base font-medium">
                Phone number<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="text"
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 border-b bg-transparent"
                placeholder="Enter phone number"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="name" className="text-base font-medium">
                Message<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="text"
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 border-b bg-transparent"
                placeholder="Type here"
              />
            </div>
          </div>
          <div className="w-full">
            <button className="bg-[#F15C20] text-white text-[13px] font-semibold px-8 py-4 rounded-full float-end">
              Submit
            </button>
          </div>
        </div>

        <duv className="col-span-3 lg:col-span-1">
          <Image
            src={"/top-rated-contact-mockup.png"}
            loader={customLoader}
            width={402}
            height={361}
          />
        </duv>
      </div>
    </div>
  );
};

export default TopRatedAppDevelopmentContactSection;

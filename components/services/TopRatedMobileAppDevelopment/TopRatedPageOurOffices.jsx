"use client";
import React, { useContext } from "react";
import OfficeCard from "./OfficeCard";
import { GlobalContext } from "@/context/GlobalContext";

const TopRatedPageOurOffices = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-start w-full my-6 md:my-12 lg:mb-24">
      <h2 className="font-extrabold text-3xl lg:text-5xl xl:text-[72px] 2xl:text-[104px] tracking-tighter xl:font-bold uppercase">
        our offices
      </h2>
      <div
        className={`border ${
          theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
        } w-full my-4`}
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
        <div className="w-full flex flex-col items-start gap-2 overflow-hidden">
          <div className="w-full h-auto lg:h-[260px] 2xl:h-[400px] overflow-hidden rounded-md">
            <img
              src={"/Dignite-Studios-Florida-Office.webp"}
              alt="Dignite Studios Mobile App Development Company Florida Office"
              className="w-full 2xl:h-[400px] rounded-[6px] scale-100 hover:scale-110 transition-all duration-500"
            />
          </div>
          <h3 className="font-semibold text-[20px]">Florida, US</h3>
          <p className="text-[18px] font-normal">
            3505 Lake Lynda Drive Dr #200, Orlando FL 32817, United States
          </p>
        </div>

        <div className="w-full flex flex-col items-start gap-2 overflow-hidden">
          <div className="w-full h-auto lg:h-[260px] 2xl:h-[400px] overflow-hidden rounded-md">
            <img
              src={"/Dignite-Studios-Dubai-Office.webp"}
              alt="Dignite Studios Mobile App Development Company Dubai Office"
              className="w-full 2xl:h-[400px] rounded-[6px] scale-100 hover:scale-110 transition-all duration-500"
            />
          </div>
          <h3 className="font-semibold text-[20px]">Dubai, UAE</h3>
          <p className="text-[18px] font-normal">
            Level 21, Al Habtoor Business Tower, King Salman Bin Abdul Aziz Al
            Saud St, Dubai Marina, Dubai, UAE
          </p>
        </div>

        <div className="w-full flex flex-col items-start gap-2 overflow-hidden">
          <div className="w-full h-auto lg:h-[260px] 2xl:h-[400px] overflow-hidden rounded-md">
            <img
              src={"/Dignite-Studios-Wyoming-Office.webp"}
              alt="Dignite Studios Mobile App Development Company Wyoming Office"
              className="w-full 2xl:h-[400px] rounded-[6px] scale-100 hover:scale-110 transition-all duration-500"
            />
          </div>
          <h3 className="font-semibold text-[20px]">Wyoming, US</h3>
          <p className="text-[18px] font-normal">
            312 W 2nd Street, Casper, WY 82601, United States
          </p>
        </div>

        <div className="w-full flex flex-col items-start gap-2 overflow-hidden">
          <div className="w-full h-auto lg:h-[260px] 2xl:h-[400px] overflow-hidden rounded-md">
            <img
              src={"/Dignite-Studios-Pakistan-Office.webp"}
              alt="Dignite Studios Mobile App Development Company Pakistan Office"
              className="w-full 2xl:h-[400px] rounded-[6px] scale-100 hover:scale-110 transition-all duration-500"
            />
          </div>
          <h3 className="font-semibold text-[20px]">Karachi, PK</h3>
          <p className="text-[18px] font-normal">
            Suite 104, Emarah Suites, Shahrah-E-Faisal, Block A, Karachi, Sindh
            75400, Pakistan
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopRatedPageOurOffices;

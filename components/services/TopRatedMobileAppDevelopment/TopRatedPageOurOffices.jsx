'use client'
import React, { useContext } from "react";
import OfficeCard from "./OfficeCard";
import { GlobalContext } from "@/context/GlobalContext";

const TopRatedPageOurOffices = () => {
  const {theme} = useContext(GlobalContext);
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-start w-full my-6 md:my-12 lg:mb-24">
      <h1 className="font-extrabold text-3xl lg:text-5xl xl:text-[72px] 2xl:text-[104px] tracking-tighter xl:font-bold uppercase">our offices</h1>
      <div
        className={`border ${
          theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
        } w-full my-4`}
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
        <OfficeCard
          image={"/florida-office.png"}
          title={"Florida, US"}
          address={
            "3505 Lake Lynda Drive Dr #200, Orlando FL 32817, United States"
          }
        />
        <OfficeCard
          image={"/dubai-office.png"}
          title={"Dubai, UAE"}
          address={
            "Level 21, Al Habtoor Business Tower, King Salman Biz Abdul Aziz Al Saud St, Dubai Marina, Dubai, UAE"
          }
        />
        <OfficeCard
          image={"/wyoming-office.png"}
          title={"Wyoming, US"}
          address={"312 W 2nd Street, Casper, Wy 82601, United States"}
        />
        <OfficeCard
          image={"/pakistan-office.png"}
          title={"Karachi, Pakistan"}
          address={
            "Suite 104, Emarah Suites, Shahrah-E-Faisal, Block A, Karachi, Sindh 75400, Pakistan"
          }
        />
      </div>
    </div>
  );
};

export default TopRatedPageOurOffices;

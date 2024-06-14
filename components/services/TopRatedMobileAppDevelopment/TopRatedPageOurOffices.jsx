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
            "3505 lake lynda drive Dr #200, orlando fL 32817, united states"
          }
        />
        <OfficeCard
          image={"/dubai-office.png"}
          title={"Dubai, UAE"}
          address={
            "Level 21, al habtoor business tower, king salman biz abdul aziz al saud st, dubai marina, dubai, UAE"
          }
        />
        <OfficeCard
          image={"/wyoming-office.png"}
          title={"Wyoming, uS"}
          address={"312 W 2nd street, casper, wy 82601, united states"}
        />
        <OfficeCard
          image={"/pakistan-office.png"}
          title={"Pakistan"}
          address={
            "Suite 104, emarah suites, shahrah-e-faisal, block a, karachi, sindh 75400, pakistan"
          }
        />
      </div>
    </div>
  );
};

export default TopRatedPageOurOffices;

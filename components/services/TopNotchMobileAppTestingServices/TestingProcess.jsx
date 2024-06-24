'use client'
import { TESTING_PROCESS } from "@/constants/testingprocess";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const TestingProcess = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="py-10 global-padding-horizontal">
      <div className={`w-full`}>
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
          exclusive design services by
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 mt-3">
          <div>
            <h1
              className={`font-extrabold text-3xl lg:text-5xl xl:text-[64px] 2xl:text-[80px] tracking-tighter xl:font-bold uppercase lg:leading-[77.45px]`}
            >
              <span className="text-[#8F8F8F]">Inevitable</span>
              <br />
              Testing Process
            </h1>
          </div>

          <div className="lg:px-12 flex items-center">
            <p className={`text-base md:text-xl md:leading-[27.2px]`}>
              The top-class mobile app testing services of Dignite Studios
              streamline highly effective testing methodology to prevent
              disasters and provide the most reliable solutions to their
              partners and customers.
            </p>
          </div>
        </div>
        <div
          className={`border ${
            theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
          } w-full mb-4 mt-5`}
        />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {TESTING_PROCESS.map((team, index) => {
          return (
            <div key={index} className={`flex flex-col items-start gap-4 `}>
              <img src={team.icon_src} alt="team-icon" title="team-icon" className="w-9 h-9"/>
              <h2 className="text-xl font-semibold">{team.title}</h2>
              <p className="text-sm font-normal leading-[19.74px]">{team.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestingProcess;

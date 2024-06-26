"use client";
import { TOP_NOTCH_TEAM } from "@/constants/topnotchteam";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const TopNotchTeam = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      id="top-notch-team-ofdignite-studios"
      className="w-full py-14 px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48"
      style={{ background: palette?.background }}
    >
      <div className={`w-full`}>
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
          exclusive design services by
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 mt-3">
          <div>
            <h1
              className={`font-extrabold text-3xl lg:text-5xl xl:text-[64px] 2xl:text-[74px] tracking-tighter xl:font-bold uppercase lg:leading-[77.45px]`}
            >
              <span className="text-[#F15C20]">Top-Notch</span> team <br /> of
              Dignite Studios
            </h1>
          </div>

          <div className="lg:px-12 flex items-center">
            <p className={`text-base md:text-2xl md:leading-[32.64px]`}>
              The unparalleled creativity and expertise of Dignite Studios
              prevailed in providing extreme cutting-edge solutions to design
              top-class user interfaces.
            </p>
          </div>
        </div>
        <div
          className={`border ${
            theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
          } w-full mb-4 mt-5`}
        />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {TOP_NOTCH_TEAM.map((team, index) => {
          return (
            <div key={index} className="flex flex-col items-start gap-4">
              <img src={team.icon_src} alt={team.alt_text} title={team.img_title} className="w-8 h-8"/>
              <h2 className="text-xl font-semibold">{team.title}</h2>
              <p className="text-sm font-normal leading-[19.74px]">{team.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopNotchTeam;

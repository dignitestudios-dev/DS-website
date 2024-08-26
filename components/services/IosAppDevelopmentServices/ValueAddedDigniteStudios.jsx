"use client";
import { VALUE_ADDED_OUTSOURCING } from "@/constants/valueadded";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const ValueAddedDigniteStudios = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <section
      id="top-notch-team-ofdignite-studios"
      className="w-full py-12 px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48"
      style={{ background: palette?.background }}
    >
      <div className={`w-full`}>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-6 mt-3">
          <div>
            <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
              Value-Added Outsourcing With
            </p>
            <h2
              className={`text-3xl lg:text-5xl xl:text-[64px] 2xl:text-[74px] tracking-tighter font-bold uppercase lg:leading-[57px] xl:leading-[77.45px]`}
            >
              Dignite Studios
            </h2>
          </div>

          <div className="xl:px-12 flex items-center">
            <p className={`text-base md:text-[18px] md:leading-[26.46px]`}>
              Focus on your business priorities, and entrust your mobile app
              development to a reputable partner. Whether you need one iOS
              developer or a full software development team, you will benefit
              from our specialized expertise and top tech professionals.
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
        {VALUE_ADDED_OUTSOURCING.map((team, index) => {
          return (
            <div key={index} className="flex flex-col items-start gap-4">
              <img
                width={33}
                height={33}
                src={team.icon_src}
                alt={team.alt_text}
                className=""
              />
              <h3 className="text-xl font-semibold">{team.title}</h3>
              <p className="text-sm font-normal leading-[19.74px]">
                {team.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ValueAddedDigniteStudios;

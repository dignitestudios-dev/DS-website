"use client";
import { services } from "@/constants/services";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import { mobileservices } from "@/constants/mobileservices";
import { iosservices } from "@/constants/iosservices";
import AndroidAppServiceCard from "./AndroidAppServiceCard";
import { androidservices } from "@/constants/androidservices";

const AndroidAppServicesSection = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={` w-full py-10  px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48  `}
    >
      <div className={` flex flex-col gap-2 justify-start items-start `}>
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
          Our ios app development
        </p>
        <div className={`w-full px-0 flex justify-between items-center`}>
          <h1
            className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-5xl xl:text-[72px] xl:font-bold`}
          >
            services
          </h1>
        </div>
        {/* <p
          style={{
            color: palette?.dark_contrast_color,
          }}
          className="text-[16px] lg:my-4  font-normal lg:ml-1 lg:w-[78%]"
        >
          Leveraging the leading mobile solutions to global recognition for your brand. We aim to catalyze strong and striking mobile app development mechanisms to upheave the functionality of the app in no time.

        </p> */}
      </div>

      <div className="lg:py-2 mt-4 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:gap-8 ">
        {androidservices?.map((s, key) => {
          return (
            <AndroidAppServiceCard
              key={key}
              count={key}
              title={s.title}
              desc={s.description}
              light_icon={s.icon_white}
              dark_icon={s.icon_dark}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AndroidAppServicesSection;

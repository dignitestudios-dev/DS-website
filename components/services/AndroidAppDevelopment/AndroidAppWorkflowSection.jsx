"use client";

import { workflow } from "@/constants/mobileworkflow";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import AndroidAppWorkflowCard from "./AndroidAppWorkflowCard";

const AndroidAppWorkflowSection = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={` w-full py-10  px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48  `}
    >
      <div className={` flex flex-col gap-2 justify-start items-start `}>
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
          Our android app development
        </p>
        <div className={`w-full px-0 flex justify-between items-center`}>
          <h1
            className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-5xl xl:text-[72px] xl:font-bold`}
          >
            workflow
          </h1>
        </div>
       
      </div>
      <div className="w-full mt-4 lg:py-2 grid grid-cols-1 gap-2 xl:gap-0 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 ">

        {workflow?.map((s, key) => {
          return <AndroidAppWorkflowCard title={s?.title} key={key} count={key} desc={s.description}/>;
        })}
      </div>
    </div>
  );
};

export default AndroidAppWorkflowSection;

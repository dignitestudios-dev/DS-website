"use client";

import { workflow } from "@/constants/mobileworkflow";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import IosAppWorkflowCard from "./IosAppWorkflowCard";

const IosAppWorkflowSection = () => {
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
            className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-5xl xl:text-[72px] 2xl:text-[104px] tracking-tighter xl:font-bold`}
          >
            workflow
          </h1>
        </div>
        {/* <p
          style={{
            color: palette?.dark_contrast_color,
          }}
          className="text-[16px] lg:my-4  font-normal lg:ml-1 lg:w-[78%]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          libero a arcu faucibus auctor. Cras elementum risus nec elementum
          tincidunt. Nulla facilisi. Suspendisse lacinia nisi sit amet est
          dictum, blandit porttitor nulla accumsan. Duis consectetur accumsan
          sem a vehicula.
        </p> */}
      </div>
      <div className="w-full mt-4 lg:py-2 grid grid-cols-1 gap-2 xl:gap-0 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 ">

        {workflow?.map((s, key) => {
          return <IosAppWorkflowCard title={s?.title} key={key} count={key} desc={s.description}/>;
        })}
      </div>
    </div>
  );
};

export default IosAppWorkflowSection;

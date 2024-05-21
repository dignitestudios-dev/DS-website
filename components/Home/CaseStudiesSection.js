'use client'

import React, { useContext } from "react";
import { styles } from "../../styles/styles";
// import ProjectCard from "./ProjectCard";
// import { casestudies } from "../../constants/casestudies";
import { GlobalContext } from "@/context/GlobalContext";
import { casestudies } from "@/constants/casestudies";
import ProjectCard from "./ProjectCard";

const CaseStudiesSection = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      id="case-studies"
      className={` w-full py-10  px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48  `}
      style={{ background: palette?.dark_contrast_background }}
    >
      <div className={`  `}>
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>recent</p>
        <div className={`w-full px-0 flex justify-between items-center`}>
          <h1
            className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-5xl xl:text-[72px] xl:font-bold`}
          >
            case studies
          </h1>
          {/* <button name="view-all-case-studies" className="w-[120px] lg:w-[206px] h-12 lg:h-16 rounded-full transition-all duration-150 hover:opacity-90 bg-[#F15C20] shadow-xl text-white text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center gap-4">
            All Cases <img src={"/arrow-up.png"} alt="arrow" className="w-3" />
          </button> */}
        </div>
      </div>

      <div
        style={{
          borderTop: `2px solid ${palette?.light_contrast_background}`,
        }}
        className={`w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  md:grid-rows-2 lg:grid-rows-2 pt-4 lg:pt-6 gap-0 md:gap-x-20 mt-4 lg:mt-12 `}
      >
        {casestudies.map((c, index) => {
          return (
            <ProjectCard
              key={index}
              title={c.title}
              description={c.description}
              image={c.image}
              mobile_image={c.mobile_image}
              projectLink={c.projectLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudiesSection;

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
      className={` w-full py-10`}
      style={{ background: palette?.dark_contrast_background }}
    >
      <div className={`px-4 md:px-12 lg:px-28`}>
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>recent</p>
        <div className={`w-full px-0 flex justify-between items-center`}>
          <h1
            className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-6xl`}
          >
            case studies
          </h1>
          <button name="view-all-case-studies" className="w-[120px] lg:w-[206px] h-12 lg:h-16 rounded-full transition-all duration-150 hover:opacity-90 bg-[#F15C20] shadow-xl text-white text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center gap-4">
            All Cases <img src={"/arrow-up.png"} alt="arrow" className="w-3" />
          </button>
        </div>
      </div>

      <div
        style={{
          borderTop: `2px solid ${palette?.light_contrast_background}`,
        }}
        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  md:grid-rows-2 lg:grid-rows-2 pt-4 lg:pt-6 gap-4 md:gap-x-20 mt-4 lg:mt-12 ${styles.paddingHorizontal}`}
      >
        {casestudies.map((c, index) => {
          return (
            <ProjectCard
              key={index}
              title={c.title}
              description={c.description}
              image={c.image}
              projectLink={c.projectLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudiesSection;

"use client";
import { items } from "@/constants/mobileappdevsectionaccordion";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const MobileAppDevSectionAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { theme } = useContext(GlobalContext);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;
    const contentStyle = {
      display: isActive ? "block" : "none",
    };

    return (
      <div key={index} className="w-full">
        <div
          onClick={() => onTitleClick(index)}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
          className="w-full border-b py-2 flex items-center justify-start gap-3"
        >
          <span className={`${isActive ? "text-[#5C5C5C]" : "text-[#5C5C5C]"} font-normal text-lg`}>
            0{index + 1}/
          </span>
          <p
            className={`cursor-pointer w-full flex items-center justify-between gap-3 text-xl ${
              isActive ? "text-[#F15C20]" : "text-black"
            }`}
          >
            <span>{item.title}</span>
          </p>
          <span className="w-6 h-5 bg-[#F15C20] rounded-full">
            {isActive ? <MdOutlineKeyboardArrowUp className="text-white w-5 h-5"/> : <MdOutlineKeyboardArrowDown className="text-white w-5 h-5"/>}
          </span>
        </div>
        <div style={contentStyle} className="pb-2">
          <p
            className={`text-sm md:text-base lg:text-[24px] lg:leading-[32.16px] ${
              theme === "light" && "text-[#2A2A2A]"
            }`}
          >
            {item.content}
          </p>
        </div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default MobileAppDevSectionAccordion;

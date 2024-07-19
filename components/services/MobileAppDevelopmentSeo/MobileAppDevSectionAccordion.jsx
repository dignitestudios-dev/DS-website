"use client";
// import { items } from "@/constants/mobileappdevsectionaccordion";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const MobileAppDevSectionAccordion = ({ items }) => {
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
      <section key={index} className="w-full xl:w-[75%] mx-auto">
        <button
          onClick={() => onTitleClick(index)}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
          className="w-full border-b pb-3 md:pb-6 pt-0 md:pt-3 flex items-center justify-start gap-3 xl:gap-6 outline-none"
        >
          <span
            className={`${
              isActive ? `${theme === 'light' ? 'text-[#191919]': 'text-[#F15C20]'}` : "text-[#B4B4B4]"
            } font-bold text-xl`}
          >
            0{index + 1}.
          </span>
          <p
            className={`cursor-pointer w-full flex items-center justify-start text-start gap-3 text-lg md:text-xl lg:text-[32px] font-bold lg:font-semibold ${
              isActive
                ? "text-[#F15C20]"
                : `${theme === "dark" ? "text-white" : "text-black"}`
            }`}
          >
            <span>{item.title}</span>
          </p>
          {isActive ? (
            <IoClose className="text-orange-600 w-8 h-8" />
          ) : (
            <FiPlus className={`${theme === 'light' ? 'text-gray-600' : 'text-[#B4B4B4]'} w-8 h-8`} />
          )}
        </button>
        <div style={contentStyle} className="xl:pl-14">
          <p
            className={`text-sm md:text-base mb-4 xl:leading-[22.16px] ${
              theme === "light" && "text-[#2A2A2A]"
            }`}
          >
            {item.content}
          </p>
        </div>
      </section>
    );
  });

  return <div>{renderedItems}</div>;
};

export default MobileAppDevSectionAccordion;

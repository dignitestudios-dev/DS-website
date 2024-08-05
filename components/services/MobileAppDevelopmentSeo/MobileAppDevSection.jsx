"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { headings, paragraphs } from "@/constants/mobileappdevsection";
import MobileAppDevSectionAccordion from "./MobileAppDevSectionAccordion";
import { items } from "@/constants/mobileappdevsectionaccordion";

const MobileAppDevSection = () => {
  const { theme } = useContext(GlobalContext);

  const [selectedHeading, setSelectedHeading] = useState(headings[0]);

  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  return (
    <section className="w-full px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 lg:py-12">
      <h2
        className={`text-center mb-10 ${
          theme === "light" ? "text-black" : "text-white"
        } headings-size`}
      >
        <span className="text-[#F15C20]">mobile app</span> <br /> development
        services
      </h2>
      <MobileAppDevSectionAccordion />
    </section>
  );
};

export default MobileAppDevSection;

"use client";
import React, { useContext, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";

const TechnologyCard = ({ technology }) => {
  const { palette, mouseCursor, disableMouseCursor, theme } =
    useContext(GlobalContext);
  const [image, setImage] = useState(technology?.gray);
  return (
    <div
      onMouseMove={(e) => {
        mouseCursor(technology?.name, e);
      }}
      onMouseOver={() => setImage(technology?.color)}
      onMouseOut={() => {
        setImage(technology?.gray);
        disableMouseCursor();
      }}
      className={`h-[88px] w-[98px] flip-vertical-left rounded-[20px] transition-all duration-300 flex items-center justify-center ${
        theme == "dark" ? "bg-[#e7e7e7]/[0.2]" : "bg-[#e7e7e7]/[0.2]"
      } p-6`}
    >
      <img
        // loader={customLoader}
        // srcSet=""
        width={98}
        height={88}
        src={image}
        alt={technology?.alt}
        title={technology?.img_title}
        className="md:h-auto"
      />
    </div>
  );
};

export default TechnologyCard;

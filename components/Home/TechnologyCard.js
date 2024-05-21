'use client'

import React, { useContext, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";


const TechnologyCard = ({ technology }) => {
  const { palette, mouseCursor, disableMouseCursor, theme } = useContext(GlobalContext);
  const [image, setImage] = useState(technology?.gray);
  return (
    <div
      onMouseMove={(e) => {
        mouseCursor(technology?.name, e);
      }}
      onMouseOver={() => setImage(technology?.color)}
      onMouseOut={() => { setImage(technology?.gray); disableMouseCursor(); }}
      
      className={`w-[88px] h-[88px] flip-vertical-left  rounded-[20px] transition-all duration-300 flex items-center justify-center ${theme == "dark" ? "bg-[#e7e7e7]/[0.2]" : "bg-[#e7e7e7]/[0.2]"} `}
    >
      <Image width={50} height={50} src={image} alt="technology" className="h-[60%] md:h-auto" />
    </div>
  );
};

export default TechnologyCard;

'use client'

import React, { useContext, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";


const TechnologyCard = ({ technology }) => {
  const { palette, mouseCursor, disableMouseCursor } = useContext(GlobalContext);
  const [image, setImage] = useState(technology?.gray);
  return (
    <div
      onMouseMove={(e) => {
        mouseCursor(technology?.name, e);
      }}
      onMouseOver={() => setImage(technology?.color)}
      onMouseOut={() => { setImage(technology?.gray); disableMouseCursor(); }}
      style={{
        background: palette?.dark_contrast_background,
      }}
      className="w-[88px] h-[88px] flip-vertical-left  rounded-[20px] transition-all duration-300 flex items-center justify-center "
    >
      <Image width={50} height={50} src={image} alt="technology" className="h-[60%] md:h-auto" />
    </div>
  );
};

export default TechnologyCard;

'use client'

import React, { useContext, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";


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
      className="h-[50px] w-[50px] md:w-[88px] md:h-[88px] flip-vertical-left  rounded-lg md:rounded-[20px] transition-all duration-300 flex items-center justify-center "
    >
      <img src={image} alt="technology" className="h-[60%] md:h-auto" />
    </div>
  );
};

export default TechnologyCard;

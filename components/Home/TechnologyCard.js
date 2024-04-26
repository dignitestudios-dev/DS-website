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
      className="w-[88px] h-[88px] flip-vertical-left  rounded-[20px] transition-all duration-300 flex items-center justify-center "
    >
      <img src={image} />
    </div>
  );
};

export default TechnologyCard;

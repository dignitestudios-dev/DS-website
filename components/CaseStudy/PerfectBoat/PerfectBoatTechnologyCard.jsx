"use client";

import React, { useContext, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";

const PerfectBoatTechnologyCard = ({ technology }) => {
  const { palette, mouseCursor, disableMouseCursor } =
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
      className="w-[50px] h-[50px] flip-vertical-left  rounded-[7px] transition-all duration-300 flex items-center justify-center "
    >
      <img src={image} className="w-[80%]" />
    </div>
  );
};

export default PerfectBoatTechnologyCard;

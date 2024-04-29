'use client'

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useEffect, useState } from "react";


const ServiceCard = ({ title, desc, light_icon, dark_icon, count }) => {
  const { theme, mouseCursor, disableMouseCursor } = useContext(GlobalContext);
  const [hoverImage, setHoverImage] = useState(dark_icon);

  useEffect(() => {
    setHoverImage(theme == "dark" || count == 0 || count == 2 || count == 4 ? light_icon : dark_icon)
  }, [theme])


  return (
    <div
      className={`group flex flex-col ${theme == "dark" ? "border-[#434343]" : "border-gray-200"
        } justify-center items-start gap-4 py-3 px-3 lg:p-8   transition-all duration-150 ${count == 0
          ? "lg:border-b bg-orange-600 text-white"
          : count == 1
            ? "lg:border-b lg:border-r lg:border-l "
            : count == 2
              ? "lg:border-b bg-orange-600 text-white"
              : count == 4 && "bg-orange-600 ext-white lg:border-r lg:border-l"
        }`}



    >

      <img src={count == 1 ? dark_icon : count == 3 ? dark_icon : count == 5 ? dark_icon : light_icon} alt="UIUX" className="text-white" />
      {/* {hover && <span>fjef</span>} */}
      <h1
        className={`font-bold text-[26px] ${count == 0 ? "text-white" : count == 2 ? "text-white" : count == 4 && "text-white"} `}
      >
        {title}
      </h1>
      <p
        className={`text-sm  leading-[18.83px] ${count == 0 ? "text-white" : count == 2 ? "text-white" : count == 4 && "text-white"}`}
      >
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const LeftAllignedScreen = ({ title, description, mockup }) => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      style={{ color: palette?.color }}
      className="px-6 lg:px-0 w-full h-auto lg:h-[70vh] flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between items-start"
    >
      <div className="w-full h-full md:w-1/2 flex flex-col gap-1 justify-center items-start ">
        <h2 className="text-[36px] font-bold">{title}</h2>
        <p className="text-lg font-normal">{description}</p>
      </div>
      <div className="w-full md:w-1/2 flex   justify-center lg:justify-end items-start ">
        <img src={mockup} alt="" className="h-96 lg:h-auto" />
      </div>
    </div>
  );
};

export default LeftAllignedScreen;

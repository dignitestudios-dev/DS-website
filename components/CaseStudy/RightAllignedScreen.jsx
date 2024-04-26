import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const RightAllignedScreen = ({ title, description, mockup }) => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      style={{ color: palette?.color }}
      className="w-full h-auto lg:h-[70vh] flex lg:flex-row flex-col justify-between items-start"
    >
      <div className="w-full md:w-1/2 flex   justify-start items-start ">
        <img src={mockup} alt="" />
      </div>
      <div className="w-full h-full md:w-1/2 flex flex-col gap-1 justify-center items-start ">
        <h2 className="text-[36px] font-bold">{title}</h2>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default RightAllignedScreen;

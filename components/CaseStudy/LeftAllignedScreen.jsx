import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const LeftAllignedScreen = ({ title, description, mockup }) => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      style={{ color: palette?.color }}
      className="px-6 md:px-0 w-full h-auto xl:h-[70vh] flex md:flex-row flex-col gap-4 md:gap-0 justify-between items-start"
    >
      <div className="w-full h-full md:w-1/2 flex flex-col gap-1 justify-center items-start ">
        <h2 className="text-[36px] font-bold">{title}</h2>
        <p className="text-lg font-normal">{description}</p>
      </div>
      <div className="w-full md:w-1/2 flex   justify-center md:justify-end items-start ">
        <img src={mockup} alt="" className="h-96 xl:h-[527px] xl:w-[238px]" />
      </div>
    </div>
  );
};

export default LeftAllignedScreen;

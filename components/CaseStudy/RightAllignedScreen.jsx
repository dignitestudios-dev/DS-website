import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const RightAllignedScreen = ({ title, description, mockup }) => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      style={{ color: palette?.color }}
      className="px-6 md:px-0 w-full xl:w-[90%] h-auto xl:h-[70vh] flex md:flex-row flex-col-reverse gap-4 md:gap-0 xl:gap-3 justify-between items-start"
    >
      <div className="w-full md:w-1/2 xl:w-[30%] flex   justify-center md:justify-start items-start ">
        <img src={mockup} alt="" className="h-96 xl:h-[527px] xl:w-[238px]" />
      </div>
      <div className="w-full h-full md:w-1/2 xl:w-[65%] flex flex-col gap-1 justify-center items-start ">
        <h2 className="text-[32px] font-semibold">{title}</h2>
        <p className="text-[20px] font-light leading-[28.47px]">{description}</p>
      </div>
    </div>
  );
};

export default RightAllignedScreen;

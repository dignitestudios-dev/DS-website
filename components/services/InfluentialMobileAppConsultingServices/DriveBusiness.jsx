import Link from "next/link";
import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const DriveBusiness = () => {
  return (
    <div className="w-full py-12 global-padding-horizontal mt-20">
      <div className="w-full bg-[#F15C201A] rounded-[28px] relative">
        <div className="flex flex-col items-start text-start gap-8 p-6 lg:p-16">
          <h1 className="text-3xl lg:text-[64px] font-bold lg:leading-[77.45px]">
            Let’s Talk and Drive <br /> Business Together
          </h1>
          <Link
            href={"/contact"}
            className="bg-[#F15C20] font-semibold text-xl text-white rounded-full py-4 px-8 lg:py-[28px] lg:px-[60px] flex items-center justify-center gap-2"
          >
            Schedule a call <HiMiniArrowUpRight className="text-2xl" />
          </Link>
        </div>
        <img
          src="/drive-business-mockup.png"
          alt="drive-business-mockup"
          title="drive-business-mockup"
          className="w-[90%] ms-3 md:w-[530px] md:h-[504px] lg:absolute bottom-0 right-0 lg:right-4"
        />
      </div>
    </div>
  );
};

export default DriveBusiness;

import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const CTA = () => {
  return (
    <div className="w-[80%] hover:scale-105 transition-all ease-linear relative md:px-36 px-10 my-24 md:my-0 py-14 mx-auto rounded-[43px] overflow-hidden border border-[#DDDDDD]">
      <img
        src="/location/mobile-california/grad1.png"
        alt="grad1"
        className="absolute right-0 bottom-0 rounded-[43px]"
      />
      <img
        src="/location/mobile-california/tl.png"
        alt="grad1"
        className="absolute z-20 top-0 left-[50%] translate-x-[-50%] rounded-[43px]"
      />
      <img
        src="/location/mobile-california/bl.png"
        alt="grad1"
        className="absolute z-20 -bottom-10 left-[50%] translate-x-[-50%] rounded-[43px]"
      />
      <img
        src="/location/mobile-california/grad2.png"
        alt="grad1"
        className="absolute left-0 top-0"
      />
      <div className="lg:w-[50%] w-full relative z-50 mx-auto space-y-4">
        <img src="/location/mobile-california/apps.png" alt="grad1" />
        <h1 className="text-5xl font-bold text-center">
          Be Our Next <span className="text-[#F15C20]">Success </span>Story!
        </h1>
        <Link href="/contact-us" className="flex items-center group justify-center ">
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Start Your App Journey Now!
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;

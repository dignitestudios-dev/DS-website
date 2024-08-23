import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const DigitalTransformation = () => {
  return (
    <div className="w-full global-padding-horizontal py-10 lg:py-20">
      <div className="w-full flex flex-wrap">
        <div className="w-full lg:w-[60%]">
          <div className="flex flex-col">
            <span className="text-[#F15C20] text-[20px] font-bold uppercase">
              digital
            </span>
            <img
              src="/digital-lines.png"
              alt=""
              width={"81px"}
              height={"auto"}
            />
          </div>
          <h2 className="headings-size my-4">Transformation Agency</h2>
          <p className="text-sm md:text-[18px] font-normal leading-[26.46px]">
            With years of experience, our top-notch iOS app design services
            establish a well-organized platform for your app idea. We value
            credibility, believability, and innovation in your application for
            prevailing modernized tools and technologies.
          </p>
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] w-[198px] mt-8 px-7 py-5 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-1"
          >
            Start Your Project <FiArrowUpRight className="text-lg" />
          </Link>
        </div>
        <div className="w-full lg:w-[40%]">
          <img
            src="/transformation-agency-mockup.png"
            alt=""
            width={295}
            height={399}
            className="mx-auto h-[539px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformation;

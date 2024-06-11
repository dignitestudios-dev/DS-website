import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import TopRatedServiceCard from "./TopRatedServiceCard";
import { topratedservices } from "@/constants/topratedappdevelopmentservices";
import Link from "next/link";

const TopRatedServices = () => {
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-start w-full my-6 md:my-12 lg:my-10">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-y-6">
        <div className={` flex flex-col gap-2 justify-start items-start `}>
          <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
            Our mobile app development
          </p>
          <div className={`w-full px-0 flex justify-between items-center`}>
            <h1
              className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-5xl xl:text-[72px] xl:font-bold`}
            >
              services
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <Link href="/contact-us" className="py-3 px-5 text-base lg:py-7 lg:px-14 float-end bg-[#F15C20] top-rated-btn-shadow rounded-full text-white lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300">
            Get in Touch <FiArrowUpRight className="text-xl" />
          </Link>
        </div>
      </div>

      <div className="border border-[#E7E7E7] w-full mb-4 mt-6" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {topratedservices.map((s, key) => {
          return (
            <TopRatedServiceCard
              key={key}
              count={key}
              title={s.title}
              desc={s.desc}
              light_icon={s.icon_white}
              dark_icon={s.icon_dark}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopRatedServices;

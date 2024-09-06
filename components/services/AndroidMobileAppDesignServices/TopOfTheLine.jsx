import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const TopOfTheLine = () => {
  return (
    <section className="w-full py-16 lg:pb-20 lg:pt-40 grid lg:grid-cols-3 gap-x-6 gap-y-10 global-padding-horizontal">
      <div className="col-span-3 xl:col-span-2 flex flex-col items-start gap-2">
        <span className="text-[#8F8F8F] text-[20px] font-bold uppercase">
          top-of-the-line
        </span>
        <h2 className="headings-size">
          <span className="text-[#F15C20]">Android</span> Mobile App Design
          Company
        </h2>
        <p className="text-[18px] leading-[26.46px] tracking-[-1.8%] lg:w-[85%]">
          Setting the eccentric platform of Android mobile app design services
          for years, our top-notch company follows design guidelines to thrive
          businesses beyond innovation to maximize user engagement and brand
          identity.
        </p>
        <div className="relative z-20 mt-3">
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] z-20 relative text-white w-[218px] h-[64px] rounded-full text-center flex items-center gap-1 justify-center font-semibold"
          >
            Start Your Project <FiArrowUpRight className="text-2xl" />
          </Link>
        </div>
      </div>

      <div className="col-span-3 xl:col-span-1 relative group h-[55vh] md:h-[80vh] xl:h-auto">
        <img
          src="/Android-Mobile-App-Design-Company-Android-image.webp"
          alt="Android Mobile App Design Company shows two Android mobile app screens"
          className="w-[100.35px] h-[100.35px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:left-16 md:group-hover:left-48 lg:group-hover:left-60 xl:group-hover:left-14 2xl:group-hover:left-24 transition-all duration-500"
        />
        <img
          src="/Android-Mobile-App-Design-Company-image-1.webp"
          alt="Android Mobile App Design Company shows two Android mobile app screens"
          className="w-[138px] h-[280px] md:w-[208px] 2xl:w-[218px] md:h-[450px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        />
        <img
          src="/Android-Mobile-App-Design-Company-image-2.webp"
          alt="Android Mobile App Design Company shows two Android mobile app screens"
          className="w-[138px] h-[280px] md:w-[193px] 2xl:w-[210px] md:h-[418px] rotate-12 border-[11px] border-gray-50 absolute top-1/2 lg:right-32 lg:group-hover:right-14 xl:-right-10 2xl:-right-2 transform -translate-x-[125%] md:-translate-x-[200%] lg:-translate-x-[50%] lg:group-hover:-translate-x-[30%] md:group-hover:-translate-x-[100%] -translate-y-1/2 rounded-[23px] -right-[30%] group-hover:-right-36 xl:group-hover:-right-36 2xl:group-hover:-right-28 transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default TopOfTheLine;

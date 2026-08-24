import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const CTA = () => {
  return (
    <div className="-mt-12 lg:-mt-28 -mb-8 lg:-mb-16 w-[80%] hover:scale-105 mb-10 transition ease-linear relative md:px-36 px-10 my-10 md:my-0 py-14 mx-auto rounded-[43px] overflow-hidden border border-[#DDDDDD]">
      <Image
        src="/location/mobile-california/grad1.webp"
        alt="CTA Grad1"
        className="absolute right-0 bottom-0 rounded-[43px]"
       width={379} height={388} />
      <Image
        src="/location/mobile-california/tl.webp"
        alt="CTA Tl"
        className="absolute z-20 top-0 left-[50%] translate-x-[-50%] rounded-[43px]"
       width={379} height={388} />
      <Image
        src="/location/mobile-california/bl.webp"
        alt="CTA Bl"
        className="absolute z-20 -bottom-10 left-[50%] translate-x-[-50%] rounded-[43px]"
       width={379} height={388} />
      <Image
        src="/location/mobile-california/grad2.webp"
        alt="CTA Grad2"
        className="absolute left-0 top-0"
       width={379} height={388} />
      <div className="lg:w-[50%] w-full relative z-50 mx-auto space-y-4">
        <Image
          src="/location/mobile-california/apps.webp"
          alt="Mobile applications showcase in New York"
         width={379} height={388} />
        <h2 className="text-4xl capitalize font-bold text-center">
          Got an app idea that needs expert execution?
        </h2>
        <p className="text-center">Each case study started with an idea and a clear execution plan. Let’s explore yours and see how our team can bring it to life exactly as you envision it. </p>
        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
           Discuss Your App Idea
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

"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const  SpecialistPlatform = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      id="SpecialistPlatform"
      className="w-full py-14  px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48 flex flex-col items-center text-center gap-6"
      style={{ background: palette?.background }}
    >
      <div className="w-full flex flex-col items-center justify-start">
        <h3 className="uppercase text-xl font-bold text-[#F15C20]">
          hire on demand
        </h3>
        <img
          src="/hire-on-demand.png"
          alt="hire-on-demand"
          title="hire-on-demand"
        />
      </div>
      <h1 className="font-extrabold text-3xl lg:text-5xl xl:text-[64px] 2xl:text-[80px] tracking-tighter xl:font-bold uppercase lg:leading-[77.45px]">
        Specialists for Platforms
      </h1>
      <p className="text-[15px] leading-[20.4px] lg:w-[705px]">
        Dignite Studios seizes a First-class team of designers and creates an
        engaging mechanism of operations and functions to accomplish the
        requirements of valuable clients. From modern UI design to sleek design
        our experts form a unique and intuitive spectrum to use further.  
      </p>

      <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-6 mt-4">
        <div className={`w-full lg:w-[459px] ${theme === 'dark' ? 'bg-[#1c1c1c]' : 'bg-[#FAFAFA]'} h-[517px] rounded-3xl px-6 pt-8 overflow-hidden group relative text-center flex flex-col items-center justify-start`}>
          <h2 className="text-2xl font-bold">
            <span className="text-[#F15C20]">Native</span> Mobile App Design
          </h2>
          <p className="text-xs font-normal mt-4">
            Native apps are designed for specific mobile operating systems which
            cannot be used on any other platform. Like iOS and Android apps, the
            design can only be pre-owned by any one of them. So, our exceptional
            mobile application design services create an enticing UX design
            stage to attract consumers rapidly.
          </p>
          <img
            src="/native-mobile-app-design-mockup.png"
            alt="native-mobile-app-design-mockup"
            title="native-mobile-app-design-mockup"
            className="mx-auto absolute -bottom-40 lg:-bottom-24 w-[249px] group-hover:-bottom-32 lg:group-hover:-bottom-16 transition-all duration-200"
          />
        </div>
        <div className={`w-full lg:w-[459px] ${theme === 'dark' ? 'bg-[#1c1c1c]' : 'bg-[#FAFAFA]'} h-[517px] rounded-3xl px-6 pt-8 overflow-hidden group relative text-center flex flex-col items-center justify-start`}>
          <h2 className="text-2xl font-bold">
            <span className="text-[#F15C20]">Cross-Platform</span> Mobile App
            Design
          </h2>
          <p className="text-xs font-normal mt-4">
            Cross-platform apps are originated to function on multiple platforms
            like iOS or Android operating systems, they conduct a single code
            base for any process.  
          </p>
          <img
            src="/cross-platform-mockup.png"
            alt="native-mobile-app-design-mockup"
            title="native-mobile-app-design-mockup"
            className="mx-auto absolute -bottom-10 2xl:-bottom-11 w-[249px] group-hover:-bottom-2 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialistPlatform;
// bg-[#1c1c1c]
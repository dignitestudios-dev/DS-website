"use client";
import MobileAppServiceCard from "./MobileAppServiceCard";

const ConvenientMobileAppDevelopment = () => {
  return (
    <div
      className="global-padding-horizontal py-20 w-full text-start"
      id="services"
    >
      <div className="flex flex-col items-start mb-5">
        <h1 className="text-[#F15C20] text-xl font-bold uppercase">
          Convenient
        </h1>
        <img src="/lines.png" alt="lines" className="w-[124px] h-[8]" />
      </div>
      <h2 className="uppercase font-extrabold  lg:text-start text-4xl xl:text-[72px] 2xl:text-[104px] tracking-tighter lg:font-bold lg:text-[64px] lg:leading-[77.45px] 2xl:leading-[107px]">
        Mobile App <br /> Development Services
      </h2>

      <MobileAppServiceCard />
    </div>
  );
};

export default ConvenientMobileAppDevelopment;

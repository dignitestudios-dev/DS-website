"use client";
import { useContext } from "react";
import MobileAppServiceCard from "./MobileAppServiceCard";
import { GlobalContext } from "@/context/GlobalContext";

const ConvenientMobileAppDevelopment = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      className="global-padding-horizontal py-20 w-full text-start"
      id="services"
    >
      <h2 className="uppercase font-extrabold  lg:text-start text-4xl xl:text-[72px] 2xl:text-[104px] tracking-tighter lg:font-bold lg:text-[64px] lg:leading-[77.45px] 2xl:leading-[107px]">
        <div className="flex flex-col items-start mb-5">
          <span className="text-[#F15C20] text-xl font-bold uppercase tracking-normal">
            Convenient{" "}
          </span>
          <img src="/lines.png" alt="lines" className="w-[124px] h-[8]" />
        </div>
        Mobile App <br /> Development Services
      </h2>
      <p
        className={`text-sm lg:text-[16px] my-3 lg:leading-[24.48px] font-[400] lg:w-2/3 ${
          theme === "light" && "text-[#2A2A2A]"
        }`}
      >
        Did you ever lay the foundation of your app ideas into reality? Our
        mobile application development company will establish a unique and
        constructive approach to support its users. Here, our development
        platform provides a free company logo to perpetuate its customers
        diligently. Nevertheless, there is much more to offer. Hence, don't wait
        and grab the opportunity from the top mobile app development company,
        before it lasts.
      </p>

      <MobileAppServiceCard />
    </div>
  );
};

export default ConvenientMobileAppDevelopment;

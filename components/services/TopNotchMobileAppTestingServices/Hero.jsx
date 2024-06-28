import React from "react";

const Hero = () => {
  return (
    <div className="w-full text-center h-[60vh] lg:h-screen relative pb-20 pt-2 md:pt-10 global-padding-horizontal flex flex-col items-center lg:mb-14 z-0">
      <h1 className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px]">
        <span className="text-[#F15C20]">Top-Notch Mobile</span> <br />{" "}
        Application Testing Services
      </h1>
      <p className="text-base font-medium mt-6">
        Mitigate your mobile app with risk-free innovative testing services
      </p>
      <img
        src="/mobile-application-testing-services.webp"
        alt=" mobile application testing services"
        title="mobile application testing services"
        className="lg:w-[1400px] lg:h-[709.52px] absolute top-52 lg:top-10 mx-auto 2xl:top-16"
      />
    </div>
  );
};

export default Hero;

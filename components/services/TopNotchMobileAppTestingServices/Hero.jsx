import React from "react";

const Hero = () => {
  return (
    <div className="text-center pb-0 h-[60vh] lg:h-screen relative pt-20 global-padding-horizontal flex flex-col items-center mb-14 z-0">
      <h1 className="text-3xl md:text-5xl lg:text-[68px] 2xl:text-[80px] font-bold lg:leading-[70.72px]">
        <span className="text-[#F15C20]">Top-Notch Mobile</span> <br />{" "}
        Application Testing Services
      </h1>
      <p className="text-base font-medium mt-6">
        Mitigate your mobile app with risk-free innovative testing services
      </p>
      <img
        src="/testing-services-hero-mockup.png"
        alt="testing-services-hero-mockup"
        title="testing-services-hero-mockup"
        className="lg:w-[1170px] lg:h-[709.52px] absolute top-52 lg:top-14 left-0"
      />
    </div>
  );
};

export default Hero;

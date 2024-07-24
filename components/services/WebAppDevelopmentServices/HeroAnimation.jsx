import React from "react";
import { FiDownload } from "react-icons/fi";
import { TbBrandWindows } from "react-icons/tb";


const HeroAnimation = () => {
  return (
    <div className="w-full mt-6 md:mt-0 relative lg:h-[60vh] xl:h-[80vh] flex items-center justify-center">
      <img
        src="/Web-Application-Development-Services-Left.png"
        alt=""
        className="lg:w-[346px] lg:h-[325px] 2xl:w-[426px] 2xl:h-[395px] absolute top-16 2xl:top-44 left-14 2xl:left-20 z-20 slide-right-on-load hidden xl:block"
      />
      {/* <img
        src="/Web-Application-Development-Services-Left-Bottom.png"
        alt=""
        className="lg:w-[450px] lg:h-[358px] 2xl:w-[530px] 2xl:h-[418px] absolute top-1/2 left-24 2xl:left-36 transform -translate-y-3/5 2xl:-translate-y-[-40px] z-20 slide-right-on-load hidden xl:block"
      /> */}

      <div className="lg:w-[272px] lg:h-[248px] xl:flex flex-col justify-between 2xl:w-[320px] 2xl:h-[290px] absolute top-[57%] left-44 2xl:left-60 border-[10px] border-gray-50 transform -translate-y-3/5 2xl:-translate-y-[-40px] z-20 slide-right-on-load hidden bg-white workflow-box rounded-[16px] p-6">
       
        <div className="w-full flex items-center justify-between">
          <p className="text-sm font-bold">Based Instagram</p>

          <div className="flex items-center gap-4">
            <div className="w-[27px] h-[27px] border border-gray-300 p-1 rounded-2xl">
              <TbBrandWindows className="w-full h-full text-gray-400" />
            </div>
            <div className="w-[27px] h-[27px] border border-gray-300 p-1 rounded-2xl">
              <FiDownload className="w-full h-full text-gray-400" />
            </div>
          </div>
        </div>

        <div className="w-full">
          <img
            src="/pie-chart.png"
            alt="pie-chart"
            className="w-[103px] h-[103px] mx-auto"
          />
        </div>

        <div className="relative w-[179px] h-[9px] bg-animation rounded-full overflow-hidden mx-auto">
          <div className="absolute top-0 left-0 w-[9px] h-[9px] bg-[#6640FF] rounded-full range-slider"></div>
        </div>
      </div>

      <img
        src="/web-app-dev-image-shadow-purple.png"
        alt=""
        className="w-[80%] lg:h-[78vh] xl:h-[82vh] absolute inset-0 m-auto z-0 fade-in"
      />
      <img
        src="/web-app-dev-image-shadow-yellow.png"
        alt=""
        className="w-[80%] lg:h-[78vh] xl:h-[82vh] absolute inset-0 m-auto z-0 fade-out"
      />
      <img
        src="/Web-Application-Development-Services.png"
        alt=""
        className="w-[90%] xl:w-[834px] lg:w-[60%] lg:h-[350px] xl:h-[520px] 2xl:w-[1034px] 2xl:h-[690px] relative mx-auto border web-app-dev-hero-mockup z-10 rounded-2xl animated-shadow"
      />
      <img
        src="/Web-Application-Development-Services-Right.png"
        alt=""
        className="hidden xl:block lg:w-[317px] lg:h-[231px] 2xl:w-[407px] 2xl:h-[311px] absolute top-1/2 right-20 2xl:right-24 transform -translate-y-1/2 z-20 slide-left-on-load"
      />
    </div>
  );
};

export default HeroAnimation;

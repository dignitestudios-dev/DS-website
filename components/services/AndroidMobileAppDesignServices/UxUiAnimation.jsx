import React from "react";

const UxUiAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center z-10 gap-3 md:gap-6 relative bg-[#F9FAFA]">
      <img
        src="/mobile-application-support-and-maintenance-services-1.webp"
        alt="the image shows three mockscreens of mobile application maintenance and support services"
        className="w-[100px] xl:w-[100px] h-[211px] md:h-[211px] xl:h-[211px] 2xl:h-[211px] 2xl:w-[310px] z-0 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative animated-image-up"
        title="Mobile application support and maintenance services"
      />
      <img
        src="/mobile-application-support-and-maintenance-services-2.webp"
        alt="the image shows three mockscreens of mobile application maintenance and support services"
        className="w-[100px] xl:w-[100px] h-[211px] md:h-[211px] xl:h-[211px] 2xl:h-[211px] 2xl:w-[310px] z-20 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative -top-5 animated-image-down2 hidden lg:block"
        title="Mobile application support and maintenance services"
      />
      <img
        src="/mobile-application-support-and-maintenance-services-3.webp"
        alt="the image shows three mockscreens of mobile application maintenance and support services"
        className="w-[100px] xl:w-[100px] h-[211px] md:h-[211px] xl:h-[211px] 2xl:h-[211px] 2xl:w-[310px] z-20 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative -top-5 animated-image-down"
        title="Mobile application support and maintenance services"
      />
    </div>
  );
};

export default UxUiAnimation;

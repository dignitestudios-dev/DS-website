import React from "react";

const OurValueExpeditionSection = () => {
  return (
    <div className="pb-20 pt-28 global-padding-horizontal w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
      <div className="pt-0 relative lg:relative lg:-mt-8 2xl:-mt-12 flex justify-start">
        <img
          src="/our-value-expedition-mockup.webp"
          alt="our-value-expedition-mockup"
          title="our-value-expedition-mockup"
          className="lg:w-[596px] lg:h-[357.6px] 2xl:w-[696px] 2xl:h-[420px]"
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
        <h1 className="headings-size text-[#F15C20]">
          Our Value <br/> <span className="text-black">Expedition</span>
        </h1>
        {/* <h1 className="text-3xl lg:text-[64px] 2xl:text-[80px] font-bold 2xl:mt-3">
          Expedition
        </h1> */}
        <p className="text-base 2xl:text-xl font-normal">
          The world’s preeminent ensemble Dignite Studios, harnesses the power
          of sustainability, believability, and solution to empower business
          growth. We aim to bestow next-level expert guidance and innovative
          solutions to deploy unique infrastructure to your mobile and web apps.
          Also, you’ll experience multiple opportunities at each facet of your
          application transformation. 
        </p>
      </div>
    </div>
  );
};

export default OurValueExpeditionSection;

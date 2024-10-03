import ContactButton from "@/components/global/ContactButton";
import React from "react";

const UnrivaledSection = () => {
  return (
    <section className="w-full py-12 xl:pt-32 flex items-end flex-col lg:flex-row gap-y-6">
      <div className="flex global-padding-horizontal flex-col items-start text-start gap-y-3">
        <h2 className="headings-size">
          <p className="text-xl font-bold text-[#8F8F8F] uppercase tracking-normal mb-2">
            Unrivaled
          </p>
          <span className="text-[#F15C20]">Web App</span> Development Company
        </h2>
        <p className="text-[18px] leading-[26.46px]">
          Industry-leading web application development company Dignite Studios
          holds exclusive practices to drive more value to businesses and
          enterprises. We develop top-notch custom apps, products, and
          professional services. We share a strong heritage and top skillset
          that empower immense pursuance, sanctuary, and tailored web
          development solutions to build unique infrastructure that rapidly
          meets market trends. Our experts firmly believe that business growth
          depends on perfect app strategies and monitoring of the app.
        </p>
        <div className="mt-6">
          <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
        </div>
      </div>
      <img
        src="/web-app-development-company.webp"
        alt="Web app development company page shows web mock screen of app development"
        className="lg:w-[826px] lg:h-[573px] float-end slide-left-on-load"
        data-aos="slide-left"
        data-aos-offset="100"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="center-bottom"
      />
    </section>
  );
};

export default UnrivaledSection;

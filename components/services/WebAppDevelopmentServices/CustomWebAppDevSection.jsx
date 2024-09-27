import { CUSTOM_WEB_APP_DEV_SERVICES } from "@/constants/CustomWebAppDevServices";
import { MAINTENANCE_SERVICES } from "@/constants/maintenanceservices";
import React from "react";

const CustomWebAppDevSection = () => {
  return (
    <section className="w-full global-padding-horizontal py-12">
      <div className="flex flex-col items-start text-start gap-y-3">
        <h2 className="headings-size">
          <p className="text-xl font-bold text-[#8F8F8F] uppercase tracking-normal mb-2">
            custom
          </p>
          <span className="text-[#F15C20]">
            Web Application <br />
          </span>{" "}
          Development Services
        </h2>
        <p className="text-[18px] leading-[26.46px] lg:w-[60%]">
          Unleash Dignite’s intuitive web-based solutions in the growing market
          of Digital Space. We harness futuristic approaches to build intuitive
          web apps for businesses. Ensure a seamless web portal, website, and
          web services to experience the optimal business project.
        </p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-32 gap-y-6 mt-10">
          {CUSTOM_WEB_APP_DEV_SERVICES.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-start text-start gap-y-2.5"
              >
                <div className="w-[44px] h-[44px] flex justify-center items-center rounded-[12px] bg-[#F15C2014]">
                  <img
                    src={service.image_src}
                    alt={service.alt_tag}
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="font-semibold text-xl">{service.title}</h3>
                <p className="text-sm font-normal leading-[19.74px]">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomWebAppDevSection;

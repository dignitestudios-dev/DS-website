import { MAINTENANCE_SERVICES } from "@/constants/maintenanceservices";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ReliableMobileAppSection = () => {
  return (
    <section className="w-full py-12 lg:py-20 global-padding-horizontal">
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-6">
        <div className="col-span-3 lg:col-span-2">
          <h1 className="uppercase font-bold text-xl text-[#8F8F8F]">
            Reliable mobile app
          </h1>
          <h2 className="headings-size mt-2">
            Support and Maintenance Services
          </h2>
          <p className="text-lg font-normal mt-4">
            The scope of our services prevails in new app features, app
            compliance, and maintenance KPIs throughout the process to boost
            large and small enterprises with unbeatable results. With protracted
            skills, delineated process, and indigenous strategy our maintenance
            and support experts construct your mobile app with astounded tech
            features to achieve your productive business goals. 
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 flex justify-center items-center lg:justify-end">
          <div className="mt-6">
            <Link
              href={"/contact-us"}
              className="bg-[#F15C20] text-white w-[199px] h-[64px] rounded-full text-center flex items-center gap-1 justify-center font-semibold"
            >
              Start Your Project <FiArrowUpRight className="text-2xl" />
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-32 gap-y-6 mt-10">
        {MAINTENANCE_SERVICES.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start text-start gap-y-2.5"
            >
              <div className="w-[44px] h-[44px] flex justify-center items-center rounded-[12px] bg-[#F15C2014]">
                <img src={service.image_src} alt={service.alt_tag} title={service.img_title} className="w-6 h-6"/>
              </div>
              <h3 className="font-semibold text-xl">{service.title}</h3>
              <p className="text-sm font-normal leading-[19.74px]">
                {service.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReliableMobileAppSection;

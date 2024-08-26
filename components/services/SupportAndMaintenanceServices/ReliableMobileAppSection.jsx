import { MAINTENANCE_SERVICES } from "@/constants/maintenanceservices";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ReliableMobileAppSection = () => {
  return (
    <section className="w-full py-12 lg:py-20 global-padding-horizontal">
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-6">
        <div className="col-span-3 lg:col-span-2">
          <p className="uppercase font-bold text-xl text-[#8F8F8F]">
            Reliable mobile app
          </p>
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
        <div className="flex flex-col items-start text-start gap-y-2.5">
          <div className="w-[44px] h-[44px] flex justify-center items-center rounded-[12px] bg-[#F15C2014]">
            <img
              src={"/mobile-app-maintenance-bugs-conformance-icon.webp"}
              alt={"mobile app maintenance bugs conformance icon"}
              className="w-6 h-6"
            />
          </div>
          <h3 className="font-semibold text-xl">Bugs Conformance</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            Tracking bugs plays a crucial role in the serenity of the
            operational functions of the system. So, developers can smoothly
            track, manage, and perform their tasks throughout the development
            cycle of apps. At Dignite Studios the support team efficiently
            monitors support and maintenance procedures to imprint the tranquil
            performance of the mobile application. We regularly make updates and
            fix bugs if required.
          </p>
        </div>

        <div className="flex flex-col items-start text-start gap-y-2.5">
          <div className="w-[44px] h-[44px] flex justify-center items-center rounded-[12px] bg-[#F15C2014]">
            <img
              src={"/mobile-app-maintenance-security-updates-icon.webp"}
              alt={"mobile app maintenance security updates icon"}
              className="w-6 h-6"
            />
          </div>
          <h3 className="font-semibold text-xl">
            Security Updates and Maintenance
          </h3>
          <p className="text-sm font-normal leading-[19.74px]">
            Security threats in the cyber world are as common as money. Mobile
            app maintenance helps consumers to develop error-free mobile apps.
            To keep them vigilantly tracked we use the latest tools and
            technology to ensure security protocols round the clock. Dignite’s
            management takes potential measures to update security threats.
          </p>
        </div>

        <div className="flex flex-col items-start text-start gap-y-2.5">
          <div className="w-[44px] h-[44px] flex justify-center items-center rounded-[12px] bg-[#F15C2014]">
            <img
              src={"/mobile-app-maintenance-performance-optimization-icon.webp"}
              alt={"mobile app maintenance performance optimization icon"}
              className="w-6 h-6"
            />
          </div>
          <h3 className="font-semibold text-xl">Performance Optimization</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            Optimization significantly impacts the mobile application
            performance and its overall success. With strong and effectual
            optimization of mobile apps, it improves user experience, battery
            life, and reduces support and maintenance costs. The mobile experts
            of Dignite Studios furnish accredited configuration settings
            according to the app performance requirements. We also elevate app
            code and database to increase the speed of the apps.
          </p>
        </div>

        <div className="flex flex-col items-start text-start gap-y-2.5">
          <div className="w-[44px] h-[44px] flex justify-center items-center rounded-[12px] bg-[#F15C2014]">
            <img
              src={"/mobile-app-maintenance-mediator-integration-icon.webp"}
              alt={"mobile app maintenance mediator integration icon"}
              className="w-6 h-6"
            />
          </div>
          <h3 className="font-semibold text-xl">Mediator Integration</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            It refers to the full-fledged services of an application such as app
            monitoring, server configuration, app updates, code refactoring, and
            implementing new features, to improve app performance. Dignite
            Studios' reliable support and maintenance specialists facilitate the
            integration of third-party services to enhance mobile app
            functionality and expand the user experience capabilities of mobile
            apps.
          </p>
        </div>

        <div className="flex flex-col items-start text-start gap-y-2.5">
          <div className="w-[44px] h-[44px] flex justify-center items-center rounded-[12px] bg-[#F15C2014]">
            <img
              src={"/mobile-app-maintenance-user-support-and-training.webp"}
              alt={"mobile app maintenance user support and training"}
              className="w-6 h-6"
            />
          </div>
          <h3 className="font-semibold text-xl">User Support and Training</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            The support and maintenance services address various app technical
            information, navigation performance, solving mobile app issues, and
            providing necessary services around the clock. Dignite’s mobile app
            maintenance service will blow the next-level app training and{" "}
            <Link
              href={"/services/mobile-app-consulting-services"}
              className="text-[#F15C20]"
            >
              app consulting{" "}
            </Link>
            to optimize end-user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReliableMobileAppSection;

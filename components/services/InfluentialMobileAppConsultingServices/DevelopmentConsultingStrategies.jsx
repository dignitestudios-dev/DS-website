"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const DevelopmentConsultingStrategies = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full global-padding-horizontal py-14">
      <h2 className="headings-size">
        <span className="text-[#F15C20]">Top-Notch</span> Mobile Consulting
        Services Of Dignite Studios
      </h2>
      <p
        className={`text-base 2xl:text-lg font-normal ${
          theme === "light" && "text-[#5C5C5C] leading-[20.81px]"
        } mt-6`}
      >
        Leveraging top mobile app consulting specialists from years ago, we’ve
        accomplished a successful long journey to provide a cluster of
        first-class service to our partners and clients. Whether for initial
        mobile app audit or mobile API development, we fabricate consummate
        service options to deliver competitive apps. Therefore, our mobile
        consulting team provides the best agile solutions for application
        planning, designing, and development for an attractive mobile landscape.
      </p>

      <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-2 gap-y-8">
        <div className="xl:p-8 lg:p-5 ps-0 lg:border-b-2">
          <div className="w-[84px] h-[84px] bg-[#FFC5AE1A] flex items-center justify-center rounded-[8px]">
            <Image
              loader={customLoader}
              width={48}
              height={55}
              src="/mobile-app-consulting-design-icon.webp"
              alt="mobile app consulting design icon"
              title="mobile app consulting design"
              className=""
            />
          </div>
          <p className="text-[24px] 2xl:text-[28px] font-semibold my-3 tracking-tight">
            Mobile App Design
          </p>
          <p
            className={`text-base 2xl:text-lg font-normal leading-[20.81px] ${
              theme === "light" && "#5C5C5C"
            }`}
          >
            In the era of digitalization,{" "}
            <Link
              href={"/services/mobile-app-design-services"}
              className="text-[#F15C20]"
            >
              mobile app design
            </Link>{" "}
            holds specific importance in the field of multiple mobile app types.
            It carries a wide range of uses, that catalyze fascinating features,
            user-accessibility, engagement rate, and overall experience of the
            apps. We ensure cost-effective design modules for various mobile
            platforms either Native, hybrid, or cross-platform apps.
          </p>
        </div>
        <div className="lg:border-s-2 lg:p-5 xl:p-8 lg:border-b-2">
          <div className="w-[84px] h-[84px] bg-[#FFC5AE1A] flex items-center justify-center rounded-[8px]">
            <Image
              loader={customLoader}
              width={48}
              height={55}
              src="/mobile-app-consulting-modernization-icon.webp"
              alt="Mobile app consulting modernization icon"
              title="Mobile app consulting modernization"
              className=""
            />
          </div>
          <p className="text-[24px] 2xl:text-[28px] font-semibold my-3 tracking-tight">
            Mobile App Modernization 
          </p>
          <p
            className={`text-base 2xl:text-lg font-normal leading-[20.81px] ${
              theme === "light" && "#5C5C5C"
            }`}
          >
            The use of updated technologies and procedures is a mere need in
            today’s world. Adapting and enhancing prevalent mobile project
            implementation will attract more user engagement. Whereas, mobile
            development initiatives must hold the smartest ways to craft a
            newfangled strategy for further mobile development initiatives.
            While processing new app we create state-of-the-art features to
            build highly modernized mobile projects.
          </p>
        </div>
      </div>
      <div className="py-8 lg:p-6 xl:p-8 lg:border-b-2 mt-6 lg:mt-0">
        <div className="w-[84px] h-[84px] bg-[#FFC5AE1A] flex items-center justify-center rounded-[8px]">
          <Image
            loader={customLoader}
            width={48}
            height={55}
            src="/Mobile-app-consulting-optimization-and-audit-icon.webp"
            alt="Mobile app consulting optimization and audit icon"
            title="Mobile app consulting optimization and audit"
            className=""
          />
        </div>
        <p className="text-[24px] 2xl:text-[28px] font-semibold my-3 tracking-tight">
          Mobile App Optimization and Audit
        </p>
        <p
          className={`text-base 2xl:text-lg font-normal leading-[20.81px] ${
            theme === "light" && "#5C5C5C"
          }`}
        >
          Audit plays a significant role in the development process of mobile
          app, as it tests the security measures of the mobile apps, and also
          analyzes the compliant policy and all rules and regulations. On the
          other hand, it helps in detecting security threats that steer to data
          breaches. At Dignite Studios, our product consulting provides thorough
          guidance on the testing capabilities of our entire process.
        </p>
      </div>
    </section>
  );
};

export default DevelopmentConsultingStrategies;

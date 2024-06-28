"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const DevelopmentConsultingStrategies = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full global-padding-horizontal py-14">
      <h1 className="headings-size">
        <span className="text-[#F15C20]">Development</span> Consulting
        Strategies 
      </h1>
      <p
        className={`text-base 2xl:text-lg font-normal ${
          theme === "light" && "text-[#5C5C5C] leading-[20.81px]"
        } mt-6`}
      >
        The charismatic architecture of your mobile creates a spectacular
        element in your brand’s worth. Likewise, a mobile app strategy can
        enhance user engagement and the credibility of your new app idea. Here,
        the top-class mobile app consulting services of Dignite Studios, have
        the privilege of accumulating the world’s renowned expert consultants,
        specialists, designers, and professionals, who not only guide you latest
        mobile strategy but also cede best practices for mobile application
        development in the wide range of services for mobile progression. 
      </p>

      <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-2 gap-y-8">
        <div className="lg:p-8 ps-0 lg:border-b-2">
          <div className="w-[84px] h-[84px] bg-[#FFC5AE1A] flex items-center justify-center">
            <img
              src="/mobile-app-consulting-design-icon.webp"
              alt="mobile app consulting design icon"
              title="mobile app consulting design"
              className="w-[48px] h-[55px]"
            />
          </div>
          <h3 className="text-[24px] 2xl:text-[28px] font-semibold my-3 tracking-tight">Mobile App Design</h3>
          <p
            className={`text-base 2xl:text-lg font-normal leading-[20.81px] ${
              theme === "light" && "#5C5C5C"
            }`}
          >
            In the era of digitalization, mobile design holds specific
            importance in the field of multiple mobile app types. It carries a
            wide range of uses, that catalyze fascinating features,
            user-accessibility, engagement rate, and overall experience of the
            apps. We ensure cost-effective design modules for various mobile
            platforms either Native, hybrid, or cross-platform apps.
          </p>
        </div>
        <div className="lg:border-s-2 lg:p-8 lg:border-b-2">
          <div className="w-[84px] h-[84px] bg-[#FFC5AE1A] flex items-center justify-center">
            <img
              src="/mobile-app-consulting-modernization-icon.webp"
              alt="Mobile app consulting modernization icon"
              title="Mobile app consulting modernization"
              className="w-[48px] h-[55px]"
            />
          </div>
          <h3 className="text-[24px] 2xl:text-[28px] font-semibold my-3 tracking-tight">
            Mobile App Modernization 
          </h3>
          <p
            className={`text-base 2xl:text-lg font-normal leading-[20.81px] ${
              theme === "light" && "#5C5C5C"
            }`}
          >
            Audit plays a significant role in the development process of mobile
            app, as it tests the security measures of the mobile apps, and also
            analyzes the compliant policy and all rules and regulations. On the
            other hand, it helps in detecting security threats that steer to
            data breaches. At Dignite Studios, our product consulting provides
            thorough guidance on the testing capabilities of our entire process.
          </p>
        </div>
      </div>
      <div className="lg:p-8 ps-0 lg:border-b-2 mt-6 lg:mt-0">
        <div className="w-[84px] h-[84px] bg-[#FFC5AE1A] flex items-center justify-center">
          <img
            src="/Mobile-app-consulting-optimization-and-audit-icon.webp"
            alt="Mobile app consulting optimization and audit icon"
            title="Mobile app consulting optimization and audit"
            className="w-[48px] h-[55px]"
          />
        </div>
        <h3 className="text-[24px] 2xl:text-[28px] font-semibold my-3 tracking-tight">
          Mobile App Optimization and Audit
        </h3>
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
    </div>
  );
};

export default DevelopmentConsultingStrategies;

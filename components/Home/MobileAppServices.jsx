import React from "react";
import Image from "next/image";
import { m as motion, LazyMotion, domMax } from "framer-motion";

const MotionImage = motion(Image);
const services = [
  {
    title: "Mobile App Development",
    description:
      "The iOS / iPhone app development is the right choice if your target audience includes iOS users. Using Swift and SwiftUI, we develop iOS applications optimized for user experience. We focus on apps that excel in healthcare, fintech, wellness, and enterprise sectors.",
    image: "/android-app-development-services.webp", // Placeholder/Representative asset
    bgColor: "bg-[#0a0a0a]",
  },
  {
    title: "iOS App Development",
    description:
      "The iOS / iPhone app development is the right choice if your target audience includes iOS users. Using Swift and SwiftUI, we develop iOS applications optimized for user experience. We focus on apps that excel in healthcare, fintech, wellness, and enterprise sectors.",
    image: "/ios-app-development-mockup.webp",
    bgColor: "bg-[#0a0a0a]",
  },
  {
    title: "Android app development",
    description:
      "The iOS / iPhone app development is the right choice if your target audience includes iOS users. Using Swift and SwiftUI, we develop iOS applications optimized for user experience. We focus on apps that excel in healthcare, fintech, wellness, and enterprise sectors.",
    image: "/android-turn-mockup.webp",
    bgColor: "bg-[#0a0a0a]",
  },
  {
    title: "Web App Development Services",
    description:
      "The iOS / iPhone app development is the right choice if your target audience includes iOS users. Using Swift and SwiftUI, we develop iOS applications optimized for user experience. We focus on apps that excel in healthcare, fintech, wellness, and enterprise sectors.",
    image: "/monitor-1.webp",
    bgColor: "bg-[#0a0a0a]",
  },
  {
    title: "Native App Development Company",
    description:
      "Make every tap count with our mobile app design services include iOS app design services and Android app design services, focusing on user-centric interfaces. The goal? Consistent branding. Every design is crafted to make your app engaging.",
    image: "/nykn-mockup-1.webp",
    bgColor: "bg-[#0a0a0a]",
  },
  {
    title: "Mobile App Testing Services",
    description:
      "We provide mobile app support & maintenance services, mobile app consulting services, and app testing & QA services to ensure your app remains secure and up-to-date. We support your app launch & deployment to maximize ROI.",
    image: "/mobile-app-testing-services.webp",
    bgColor: "bg-[#0a0a0a]",
  },
];

const MobileAppServices = () => {
  return (
    <LazyMotion features={domMax}>
      <section className="w-full pt-20 px-4 -mt-20 md:-mt-28 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 bg-white dark:bg-black rounded-t-[4rem] relative z-40 ">
        <div className="text-center max-w-7xl mx-auto mb-20 pt-8">
          <h2 className="text-4xl md:text-[48px] font-bold  mb-6 text-black dark:text-white leading-[1.1] tracking-tighter">
            App Development Solutions for Every Platform
          </h2>
          <p className=" text-lg  leading-relaxed ">
            You need an app built around a clear purpose whether you want to reach new customers or improve an existing experience. We can turn the requirements into practical digital solutions designed for your business at Dignite Studios.
          </p>
        </div>

        <div className="grid grid-cols-1 text-white md:grid-cols-12 gap-6">
          <div className="md:col-span-7 bg-black p-8 md:p-12 relative h-[500px] md:h-[550px] lg:h-[600px] rounded-[34px] overflow-hidden group">
            <Image
              src="/home-hero/grad-crner.webp" width={245} height={285}
              className="absolute md:block hidden bottom-0 right-0 rounded-br-[34px]"
              alt="Gradient corner decoration"
            />
            <MotionImage
              src="/home-hero/P1.webp" width={425.8695983886719} height={447.4477844238281}
              className="absolute z-0 bottom-0 left-[0%] -translate-x-1/2 md:left-[20%] md:translate-x-0 w-[100%] md:w-[60%] object-contain object-bottom max-h-[50%] md:max-h-[60%] lg:max-h-[65%]"
              alt="Mobile app development mockup"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <div className="relative z-20 pointer-events-none">
              <h3 className="text-lg mb-4 font-bold">
                Android App Development
              </h3>
              <p className="font-extralight text-sm md:text-base">
                You can now reach millions of Android users with an application built for performance and security. We develop custom Android apps that offer a smooth experience across devices.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 bg-black p-8 md:p-12 relative h-[500px] md:h-[550px] lg:h-[600px] rounded-[34px] overflow-hidden group">
            <MotionImage
              src="/home-hero/p2.webp" width={801} height={813}
              className="absolute z-0 bottom-0 left-[15%] -translate-x-1/2 md:left-[25%] md:translate-x-0 w-[70%] md:w-[50%] object-contain object-bottom max-h-[50%] md:max-h-[60%] lg:max-h-[65%]"
              alt="iOS app development mockup"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            />
            <div className="relative z-20 pointer-events-none">
              <h3 className="text-lg mb-4 font-bold">
                iOS App Development
              </h3>
              <p className="font-extralight text-sm md:text-base">
                With our mobile app development agency, you can build a high-quality iOS application for Apple users. We can create secure and responsive apps that follow Apple's guidelines.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 bg-black p-8 md:p-12 relative h-[500px] md:h-[550px] lg:h-[600px] rounded-[34px] overflow-hidden group">
            <Image
              src="/home-hero/el1.webp" width={487} height={401}
              className="absolute md:block hidden bottom-0 right-0 w-full"
              alt="Android app development background element"
            />
            <MotionImage
              src="/home-hero/p3.webp" width={712} height={670}
              className="absolute z-0 -bottom-10 md:-bottom-20 left-[0%] -translate-x-1/2 md:left-[10%] md:translate-x-0 w-[100%] md:w-[75%] object-contain object-bottom max-h-[50%] md:max-h-[60%] lg:max-h-[65%]"
              alt="Android app development mockup"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            />
            <div className="relative z-20 pointer-events-none">
              <h3 className="text-lg mb-4 font-bold">
                Cross Platform App Development
              </h3>
              <p className="font-extralight text-sm md:text-base">
                You can now reach users across both Android and iOS. Our cross-platform development approach can reduce development effort while still maintaining a consistent experience.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 bg-black p-8 md:p-12 relative h-[500px] md:h-[550px] lg:h-[600px] rounded-[34px] overflow-hidden group">
            <Image
              src="/home-hero/db.webp" width={410} height={380}
              className="absolute md:block hidden bottom-0 right-0"
              alt="Web app development background element"
            />
            <MotionImage
              src="/home-hero/monitor.webp" width={350.8794860839844} height={217.9705810546875}
              className="absolute z-0 bottom-0 left-[4%] -translate-x-1/2 md:left-5 md:translate-x-0 lg:left-10 w-[100%] md:w-[70%] object-contain object-bottom max-h-[50%] md:max-h-[60%] lg:max-h-[65%]"
              alt="Web app development services mockup on monitor"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            />
            <div className="relative z-20 pointer-events-none">
              <h3 className="text-lg mb-4 font-bold">
                Web App Development
              </h3>
              <p className="font-extralight text-sm md:text-base">
                You can offer convenient access to your product through any modern web browser. We develop responsive web applications that make your digital services accessible without having to download a mobile app.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 bg-black p-8 md:p-12 relative h-[500px] md:h-[550px] lg:h-[600px] rounded-[34px] overflow-hidden group">
            <Image
              src="/home-hero/el2.webp" width={647} height={280}
              className="absolute md:block hidden bottom-0 left-[20%] translate-x-[-50%] rounded-br-[34px]"
              alt="Native app development background element"
            />
            <MotionImage
              src="/home-hero/p4.webp" width={744} height={660}
              className="absolute z-0 -bottom-7 left-[0%] -translate-x-1/2 md:left-[25%] md:translate-x-0 w-[100%] md:w-[60%] object-contain object-bottom max-h-[50%] md:max-h-[60%] lg:max-h-[65%]"
              alt="Native app development company mockup"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            />
            <div className="relative z-20 pointer-events-none">
              <h3 className="text-lg mb-4 font-bold">
                MVP Development
              </h3>
              <p className="font-extralight text-sm md:text-base">
                You can begin with the features that are the most important and put your basic idea in front of real users before you invest heavily in building an app. We develop MVPs that help you test demand and collect user feedback.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 bg-black p-8 md:p-12 relative h-[500px] md:h-[550px] lg:h-[600px] rounded-[34px] overflow-hidden group">
            <Image
              src="/home-hero/el3.webp" width={487} height={376}
              className="absolute md:block hidden w-full -bottom-14 left-[20%] translate-x-[-50%]"
              alt="Mobile app testing background element"
            />
            <MotionImage
              src="/home-hero/p5.webp" width={798} height={766}
              className="absolute z-0 -bottom-20 md:-bottom-36 left-[0%] -translate-x-1/2 md:left-[12%] md:translate-x-0 w-[100%] md:w-[80%] object-contain object-bottom max-h-[50%] md:max-h-[60%] lg:max-h-[65%]"
              alt="Mobile app testing services mockup"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: -40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            />
            <div className="relative z-20 pointer-events-none">
              <h3 className="text-lg mb-4 font-bold">
                App Maintenance & Support
              </h3>
              <p className="font-extralight text-sm md:text-base">
                Your app needs attention long after it goes live. We provide ongoing maintenance, performance monitoring, bug fixes, security updates, and feature improvements to keep your application stable as your requirements change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default MobileAppServices;

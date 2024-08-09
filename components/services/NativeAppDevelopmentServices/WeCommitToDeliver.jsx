import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import WeCommitToDeliverCard from "./WeCommitToDeliverCard";
import { WE_COMMIT_TO_DELIVER } from "@/constants/WeCommitToDeliver";
import { GlobalContext } from "@/context/GlobalContext";

const WeCommitToDeliver = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full pb-12 pt-28 md:pt-44 global-padding-horizontal">
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-6">
        <div className="col-span-3 lg:col-span-2">
          <h2 className="headings-size mt-2">
            <span className="text-[#F15C20]">we</span> We Commit To Deliver
          </h2>
          <p className="text-lg font-normal mt-4">
            Among premier mobile app development companies, we batten
            exceptional assistance on a wider scale to flourish Android and iOS
            devices internationally. From a full-cycle of mobile development, we
            construct and refine the design and performance of the app
            productively. As a reputable provider of native mobile app
            development services we strive to meet the exigencies of our
            valuable consumers.
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 flex justify-center items-start lg:pt-6 lg:justify-end">
          <div className="relative z-20">
            <Link
              href={"/contact-us"}
              className="bg-[#F15C20] z-20 relative text-white w-[218px] h-[64px] rounded-full text-center flex items-center gap-1 justify-center font-semibold"
            >
              Start Your Project <FiArrowUpRight className="text-2xl" />
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="col-span-3 lg:col-span-1">
          <div
            className={`w-full h-[384px] lg:h-[484px] overflow-hidden p-6 pb-0 rounded-[24px] relative ${
              theme === "light" ? "bg-[#FAFAFA]" : "bg-[#393939]"
            }`}
          >
            <h3 className="font-semibold text-[24px]">
              <span className="text-[#f15c20]">Full Stack</span> Native App
              Development Services
            </h3>
            <img
              src="/full-stack-native-app-mockup.webp"
              alt="full-stack-native-app-mockup"
              title="full-stack-native-app-mockup"
              className="h-[311px] lg:h-[411px] mx-auto"
            />
          </div>
          <p
            className={
              "text-[#666666] text-xs leading-[15.6px] mt-3 tracking-[-0.41%]"
            }
          >
            With years of dedicated experience, Dignite Studios has accompanied
            leading industries with powerful strategies to benchmark the title
            among large enterprises. Our native mobile app development services
            create platform-specific apps with modern features and smooth
            functionality to upgrade online existence. We adapt sharp-witted
            procedures in the production of mobile applications for both iOS and
            Android native apps to rank businesses to the fullest. 
          </p>
        </div>
        <div className="col-span-3 lg:col-span-2 h-full">
          <div
            className={`w-full h-[384px] lg:h-[484px] p-6 pb-0 pr-0 rounded-[24px] relative overflow-hidden ${
              theme === "light" ? "bg-[#FAFAFA]" : "bg-[#393939]"
            }`}
          >
            <h3 className="font-semibold text-[24px]">
              <span className="text-[#f15c20]">Tablet</span> App Development
              Services
            </h3>
            <img
              src="/tablet-app-development-mockup.webp"
              alt=""
              title=""
              className="h-[300px] lg:h-[424px] mx-auto w-full absolute bottom-0"
            />
          </div>
          <p
            className={
              "text-[#666666] text-xs leading-[15.6px] mt-3 tracking-[-0.41%]"
            }
          >
            Tablet Native apps can also be built for multiple Apple devices such
            as tablets and iPads. In the modern technology upgradation tablets
            developing applications are still in immense demand. With years of
            successful experience the native app development company Dignite
            Studios has provided comprehensive native app development services
            for tablets for various industries, including startups and major
            corporations.
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div className="col-span-3 lg:col-span-1">
          <div
            className={`w-full h-[384px] lg:h-[484px] overflow-hidden p-6 pb-0 rounded-[24px] relative ${
              theme === "light" ? "bg-[#FAFAFA]" : "bg-[#393939]"
            }`}
          >
            <h3 className="font-semibold text-[24px]">
              <span className="text-[#f15c20]">iOS</span> App <br /> Development
            </h3>
            <img
              src="/ios-app-development-mockup.webp"
              alt=""
              title=""
              className="h-[318px] lg:h-[411px] mx-auto"
            />
          </div>
          <p
            className={`${
              theme === "light" ? "text-[#666666]" : "text-[#B4B4B4]"
            } text-[#666666] text-xs leading-[15.6px] mt-3 tracking-[-0.41%]`}
          >
            Apple’s ecosystem has raised a 1.56 billion iPhone-user base with
            gilt-edged iOS native applications. Enable the fastest software
            development process for iOS apps with two Apple programming
            languages by which you can build a smooth application architecture
            to start the procedure smoothly and run the application on your
            mobile. Our native app services bestow the highest quality native
            app development frameworks to intricate iOS platforms with
            multitasking capabilities. Here, we leverage app functionality,
            under the diligent observation of React native engineers to develop
            error-free iOS native apps.
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div
            className={`w-full h-[384px] lg:h-[484px] overflow-hidden p-6 pb-0 rounded-[24px] relative ${
              theme === "light" ? "bg-[#FAFAFA]" : "bg-[#393939]"
            }`}
          >
            <h3 className="font-semibold text-[24px]">
              <span className="text-[#f15c20]">Android</span> App <br />{" "}
              Development Services
            </h3>
            <img
              src="/android-app-development-mockup.webp"
              alt="full-stack-native-app-mockup"
              title="full-stack-native-app-mockup"
              className="h-[318px] lg:h-[411px] mx-auto"
            />
          </div>
          <p
            className={`${
              theme === "light" ? "text-[#666666]" : "text-[#B4B4B4]"
            } text-[#666666] text-xs leading-[15.6px] mt-3 tracking-[-0.41%]`}
          >
            Native apps for Android platforms are created using a streamlined,
            single-code development process. They form different approaches and
            specific Android programming languages i.e. Kotlin or Java. You can
            create native mobile apps for both mobile and desktop. When your app
            reaches the final development phase, you’ll simply submit it to the
            Google Play Store. <br />
            Dignite’s highly skillful Native App developers foster unique
            mechanisms with Android software development kits, command tools,
            and Android Jetpack to attain tremendous probability among other
            mobile apps. We also develop personalized native features for apps
            with the help of the Android operating system under minimum
            development time.
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div
            className={`w-full h-[384px] lg:h-[484px] overflow-hidden p-6 pb-0 rounded-[24px] relative ${
              theme === "light" ? "bg-[#FAFAFA]" : "bg-[#393939]"
            }`}
          >
            <h3 className="font-semibold text-[24px]">
              <span className="text-[#f15c20]">iPad</span> App <br />{" "}
              Development Services
            </h3>
            <img
              src="/ipad-app-mockup.webp"
              alt="full-stack-native-app-mockup"
              title="full-stack-native-app-mockup"
              className="h-[318px] lg:h-[411px] mx-auto"
            />
          </div>
          <p
            className={`${
              theme === "light" ? "text-[#666666]" : "text-[#B4B4B4]"
            } text-xs leading-[15.6px] mt-3 tracking-[-0.41%]`}
          >
            When you’re establishing a native app for iPads, the mere supremacy
            lies with its immersive layouts. Here, you just have to take a large
            canvas to create more complex apps under split-screen functionality.
            Additionally, a major advantage is that you only need to develop one
            app that works seamlessly on both iPhones and iPads. With years of
            expertise in the field of native mobile app development, we provide
            flawless services to leverage businesses globally. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeCommitToDeliver;

import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { GlobalContext } from "@/context/GlobalContext";
import ContactButton from "@/components/global/ContactButton";

const WeCommitToDeliver = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full pb-12 pt-28 md:pt-44 global-padding-horizontal">
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-6">
        <div className="col-span-3 lg:col-span-2">
          <h2 className="headings-size mt-2">
            <span className="text-[#F15C20]">we</span> Commit To Deliver
          </h2>
          <p className="text-lg font-normal mt-4">
            Among premier <Link href="/services/mobile-app-development-services" className="text-[#F15C20]">mobile app development companies</Link>, we batten
            exceptional assistance on a wider scale to flourish <Link href="/services/android-app-development-services" className="text-[#F15C20]">Android</Link> and <Link href="/services/ios-app-development-services" className="text-[#F15C20]">iOS</Link>
            devices internationally. From the start to the launch of <Link href="/services/mobile-app-development-services" className="text-[#F15C20]">mobile
            development</Link>, we construct and refine the design and performance of
            the app productively. As a reputable provider of native{" "}
            <Link
              href={"/services/mobile-app-development-services"}
              className="text-[#F15C20]"
            >
              mobile app development services
            </Link>
            , we strive to meet the exigencies of our valuable consumers.
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 flex justify-center items-start lg:pt-6 lg:justify-end">
          <div className="relative z-20">
            <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
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
              src="/Full-Stack-Native-App-Development-Services.webp"
              alt="Full Stack Native App Development Services"
              className="h-[311px] lg:h-[411px] mx-auto"
            />
          </div>
          <p
            className={
              "text-[#666666] text-xs leading-[15.6px] mt-3 tracking-[-0.41%]"
            }
          >
            With years of dedicated experience, Dignite Studios has accompanied
            leading industries with powerful strategies to rank the title among
            large enterprises. Our <Link href="/services/native-app-development-services" className="text-[#F15C20]">native mobile app development services</Link> create
            platform-specific apps with modern features and smooth functionality
            to upgrade digital presence. We adapt sharp-witted procedures in the
            production of <Link href="/services/mobile-app-development-services" className="text-[#F15C20]">mobile applications</Link> for both <Link href="/services/ios-app-development-services" className="text-[#F15C20]">iOS</Link> and <Link href="/services/android-app-development-services" className="text-[#F15C20]">Android</Link> <Link href="/services/native-app-development-services" className="text-[#F15C20]">native
            apps</Link> to rank businesses up to the highest level.
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
              src="/Tablet-app-development-services.webp"
              alt="Tablet app development services page shows mock screen of tablet application"
              className="h-[300px] lg:h-[424px] mx-auto w-full absolute bottom-0"
            />
          </div>
          <p
            className={
              "text-[#666666] text-xs leading-[15.6px] mt-3 tracking-[-0.41%]"
            }
          >
            Tablet Native apps can also be built for multiple Apple devices such
            as tablets and iPads. In modern technology, developing tablet apps
            are still in immense demand. With years of successful experience the
            native app development company Dignite Studios has provided
            comprehensive native app development services for tablets for
            various industries, including startups and major corporations.
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
              src="/Native-app-development-services.webp"
              alt="Native app development services page shows iOS app development mockup screens"
              className="h-[318px] lg:h-[411px] mx-auto"
            />
          </div>
          <p
            className={`${
              theme === "light" ? "text-[#666666]" : "text-[#B4B4B4]"
            } text-[#666666] text-xs leading-[15.6px] mt-3 tracking-[-0.41%]`}
          >
            Apple’s ecosystem has raised a 1.56 billion iPhone-user base with
            gilt-edged <Link href="/services/ios-app-development-services" className="text-[#F15C20]">iOS native applications</Link>. It enables the fastest <Link href="/services/mobile-app-development-services" className="text-[#F15C20]">software
            development process</Link> for <Link href="/services/ios-app-development-services" className="text-[#F15C20]">iOS apps</Link> with two Apple programming
            languages by which you can build a smooth application architecture
            for your mobile app. Our <Link href="/services/native-app-development-services" className="text-[#F15C20]">native app services</Link> bestow the highest
            quality <Link href="/services/native-app-development-services" className="text-[#F15C20]">native app development frameworks</Link> to enhance <Link href="/services/ios-app-development-services" className="text-[#F15C20]">iOS platforms</Link>
            with multitasking capabilities. Here, we leverage app functionality,
            under the diligent observation of <Link href="/services/hire-react-native-developers" className="text-[#F15C20]">React native engineers</Link> to develop
            error-free <Link href="/services/ios-app-development-services" className="text-[#F15C20]">iOS native apps</Link>.
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
              src="/native-android-app-development-services.webp"
              alt="Android app development services page shows mockup screen of Android application"
              className="h-[318px] lg:h-[411px] mx-auto"
            />
          </div>
          <p
            className={`${
              theme === "light" ? "text-[#666666]" : "text-[#B4B4B4]"
            } text-[#666666] text-xs leading-[15.6px] mt-3 tracking-[-0.41%]`}
          >
            <Link href="/services/native-app-development-services" className="text-[#F15C20]">Native apps for Android</Link> platforms are created using a streamlined,
            single-code development process. They form different approaches and
            specific <Link href="/services/android-app-development-services" className="text-[#F15C20]">Android programming languages</Link> i.e. Kotlin or Java. You can
            create <Link href="/services/native-app-development-services" className="text-[#F15C20]">native mobile apps</Link> for both mobile and desktop. When your app
            reaches the final development phase, you’ll simply submit it to the
            Google Play Store. <br />
            Dignite’s highly skillful <Link href="/services/hire-mobile-app-developers" className="text-[#F15C20]">Native App developers</Link> foster unique
            mechanisms with Android software development kits, command tools,
            and Android Jetpack to attain tremendous recognition among other
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
              src="/iPad-app-development-services.webp"
              alt=" iPad app development services page shows mockscreeen of Android application on the mobile device"
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

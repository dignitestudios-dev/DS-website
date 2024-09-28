import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Image from "next/image";

const MobileAppServiceCard = () => {
  const { theme } = useContext(GlobalContext);
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(false);
  const [showMore6, setShowMore6] = useState(false);
  const [showMore7, setShowMore7] = useState(false);
  const [showMore8, setShowMore8] = useState(false);
  const [showMore9, setShowMore9] = useState(false);
  const [showMore10, setShowMore10] = useState(false);
  const [showMore11, setShowMore11] = useState(false);
  const [showMore12, setShowMore12] = useState(false);
  const [showMore13, setShowMore13] = useState(false);
  const [showMore14, setShowMore14] = useState(false);
  const [showMore15, setShowMore15] = useState(false);
  const [showMore16, setShowMore16] = useState(false);
  const [showMore17, setShowMore17] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleShowMor2 = () => {
    setShowMore2(!showMore2);
  };
  const handleShowMore3 = () => {
    setShowMore3(!showMore3);
  };
  const handleShowMore4 = () => {
    setShowMore4(!showMore4);
  };
  const handleShowMore5 = () => {
    setShowMore5(!showMore5);
  };
  const handleShowMore6 = () => {
    setShowMore6(!showMore6);
  };
  const handleShowMore7 = () => {
    setShowMore7(!showMore7);
  };
  const handleShowMore8 = () => {
    setShowMore8(!showMore8);
  };
  const handleShowMore9 = () => {
    setShowMore9(!showMore9);
  };
  const handleShowMore10 = () => {
    setShowMore10(!showMore10);
  };
  const handleShowMore11 = () => {
    setShowMore11(!showMore11);
  };
  const handleShowMore12 = () => {
    setShowMore12(!showMore12);
  };
  const handleShowMore13 = () => {
    setShowMore13(!showMore13);
  };
  const handleShowMore14 = () => {
    setShowMore14(!showMore14);
  };
  const handleShowMore15 = () => {
    setShowMore15(!showMore15);
  };
  const handleShowMore16 = () => {
    setShowMore16(!showMore16);
  };
  const handleShowMore17 = () => {
    setShowMore17(!showMore17);
  };

  const paragraphFull = (
    <>
      Mobile application development is a fast-paced emerging field of new
      trends and the latest deployment strategies to boost business in the
      digital world. Whereas, our{" "}
      <Link
        href="/services/mobile-app-development-services"
        className="text-orange-600"
      >
        mobile app development services
      </Link>{" "}
      produce different types of mobile applications such as basic apps, complex
      apps, unique apps, and separate apps. Thus, if you’re frustrated and
      making common mistakes in the deployment of your app, here is our
      dedicated team of mobile app design services to produce a thriving master
      plan to design native, hybrid, and cross-platform mobile development apps.
      Whereas, it can robust your entire business structure and transit your
      concept to code efficiently like Facebook, Gmail, and YouTube.
    </>
  );

  const paragraphShort =
    "Mobile application development is a fast-paced emerging field of new trends and the latest deployment strategies to boost business in the digital world. Whereas...".substring(
      0,
      170
    ) + "...";

  const paragraphFull2 = (
    <>
      Well, android indeed has the largest market share globally, but iOS users
      are willing to pay more for the apps via the Apple App Store. With those
      concerns, our highly skillful mobile app development body uses integrated
      Apple Xcode to test, build, and package apps. Whereas,{" "}
      <Link
        href="/services/ios-app-development-services"
        className="text-orange-600"
      >
        iOS app development services
      </Link>{" "}
      can play a vital role in forming an effective iOS application.
    </>
  );

  const paragraphShort2 =
    "Well, android indeed has the largest market share globally, but iOS users are willing to pay more for the apps via the Apple App Store. With those concerns, our highly skillful mobile app development body uses integrated Apple Xcode to test, build, and package apps. Whereas, iOS app development services can play a vital role in forming an effective iOS application.,...".substring(
      0,
      170
    ) + "...";

  const paragraphFull3 = (
    <>
      Are you looking for an{" "}
      <Link
        href="/services/android-app-development-services"
        className="text-orange-600"
      >
        android app development service
      </Link>{" "}
      ? At the door of skilled mobile app development experts, you can establish
      your app with modern tools like Android Studio and Software Development
      Kit to craft personalized Android apps for your business. However, Android
      offers various customization options for its users to connect worldwide on
      different Android devices.
    </>
  );

  const paragraphShort3 =
    "Are you looking for an Android app development service? At the door of skilled mobile app development experts, you can establish your app with modern tools like Android Studio and Software Development Kit to craft personalized Android apps for your business. However, Android offers various customization options for its users to connect worldwide on different Android devices.,...".substring(
      0,
      170
    ) + "...";

  const paragraphFull4 = (
    <>
      Are you worried about your{" "}
      <Link
        href="/services/web-application-development-services"
        className="text-orange-600"
      >
        web app development services
      </Link>{" "}
      ? No need to, our valuable and reliable web application team can help you
      to create the application process on remote servers and also on any medium
      of the user’s device.
    </>
  );

  const paragraphShort4 =
    "Are you worried about your web application development services? No need to, our valuable and reliable web application team can help you to create the application process on remote servers and also on any medium of the user’s device....".substring(
      0,
      170
    ) + "...";

  const paragraphFull5 = (
    <>
      It’s no wonder that mobile applications have escalated in terms of
      designs, functions, and features. Here, at Dignite Studios our highly
      skillful and dedicated team can make your mobile applications flawless and
      innovative UI/UX design to create engaging visual elements in mobile
      applications. Therefore, we assure the best{" "}
      <Link
        href="/services/mobile-app-design-services"
        className="text-orange-600"
      >
        mobile app design services
      </Link>{" "}
      in the USA.
    </>
  );

  const paragraphShort5 =
    "It’s no wonder that mobile applications have escalated in terms of designs, functions, and features. Here, at Dignite Studios our highly skillful and dedicated team can make your mobile applications flawless and innovative UI/UX design to create engaging visual elements in mobile applications. Therefore, we assure the best mobile app design services in the USA....".substring(
      0,
      170
    ) + "...";

  const paragraphFull6 = (
    <>
      Testing your mobile application can be the hardest phase that can reflect
      your performance anytime. And if you ignore rigorous testing it can damage
      your credibility and worthiness. So, to ensure its quality, functionality,
      performance, usability, compatibility, and security, your app developer of{" "}
      <Link
        href="/services/mobile-app-testing-services"
        className="text-orange-600"
      >
        mobile app testing services
      </Link>{" "}
      must ensure the removal of bugs and security issues to adhere to its
      worthiness. And, so Dignite Studios will make your mobile application
      testing services beyond any doubt with high-performing tools and methods
      to test your application such as emulators, simulators, devices, and beta
      testing. Therefore, you can test your application user interface on your
      mobile device to ensure its functionality.
    </>
  );

  const paragraphShort6 =
    "Testing your mobile application can be the hardest phase that can reflect your performance anytime. And if you ignore rigorous testing it can damage your credibility and worthiness. So, to ensure its quality, functionality, performance, usability, compatibility, and security, your app developer of mobile application testing services must ensure the removal of bugs and security issues to adhere to its worthiness. And, so Dignite Studios will make your mobile application testing services beyond any doubt with high-performing tools and methods to test your application such as emulators, simulators, devices, and beta testing. Therefore, you can test your application user interface on your mobile device to ensure its functionality...".substring(
      0,
      170
    ) + "...";

  const paragraphFull7 = (
    <>
      Forming a mobile application is a great way for business owners to improve
      their marketing strategy, service optimization, and cost-effectiveness. It
      can systematically increase your revenue and click-through rate by
      consulting it with reliable mobile app developers. Therefore, each mobile
      app has its aspects and functionality in terms of target audience, design,
      monetization, security, and privacy. However, it needs to be evaluated
      foremost from a better platform. So, at the door of Dignite Studios, you
      can avail the best{" "}
      <Link
        href="/services/mobile-app-consulting-services"
        className="text-orange-600"
      >
        mobile app consulting services
      </Link>{" "}
      to provide you with free consultation on your mobile app development.
      Also, our experts are available 24/7 to assist you on call. So, don’t wait
      and upgrade your mobile devices.
    </>
  );

  const paragraphShort7 =
    "Forming a mobile application is a great way for business owners to improve their marketing strategy, service optimization, and cost-effectiveness. It can systematically increase your revenue and click-through rate by consulting it with reliable mobile app developers. Therefore, each mobile app has its aspects and functionality in terms of target audience, design, monetization, security, and privacy. However, it needs to be evaluated foremost from a better platform. So, at the door of Dignite Studios, you can avail the best mobile consulting services to provide you with free consultation on your mobile app development. Also, our experts are available 24/7 to assist you on call. So, don’t wait and upgrade your mobile devices....".substring(
      0,
      170
    ) + "...";

  const paragraphFull8 = (
    <>
      In the ever-evolving digital landscape, our mobile app company services
      ensure your app is functional, secure, and competitive. Our mobile
      application development agency set the seal to provide you with free
      maintenance for 2 months from the deployment of your app. It will include
      bug fixing, troubleshooting, performance monitoring, security updates,
      feature enhancement, upgrade versions, and compatibility testing.
      Therefore,{" "}
      <Link
        className="text-orange-600"
        href={"/services/mobile-application-support-and-maintenance-services"}
      >
        mobile app support and maintenance services
      </Link>{" "}
      will help you to enhance user experience and update app versions
      accordingly to your mobile app development.
    </>
  );

  const paragraphShort8 =
    "In the ever-evolving digital landscape, our mobile app company services ensure your app is functional, secure, and competitive. Our mobile application development agency set the seal to provide you with free maintenance for 2 months from the deployment of your app. It will include bug fixing, troubleshooting, performance monitoring, security updates, feature enhancement, upgrade versions, and compatibility testing. Therefore, mobile app support and maintenance services will help you to enhance user experience and update app versions accordingly to your mobile app development.....".substring(
      0,
      170
    ) + "...";

  const paragraphFull9 = (
    <>
      Here at Dignite Studios, we bestow the best mobile-powered project, to
      create effective APIs, automate workflows, monitor high levels of coding
      systems, integrate tools, and evaluate security performance
      constructively. Our mobile app company can save you time and money to
      accomplish your project instantly. The mobile application development
      process plays a notable role in acquiring business needs.{" "}
      <Link
        href={"/services/hire-mobile-app-developers"}
        className="text-orange-600"
      >
        Hire mobile app developer
      </Link>{" "}
      services from a renowned group of experienced developers.
    </>
  );

  const paragraphShort9 =
    "Here at Dignite Studios, we bestow the best mobile-powered project, to create effective APIs, automate workflows, monitor high levels of coding systems, integrate tools, and evaluate security performance constructively. Our mobile app company can save you time and money to accomplish your project instantly. The mobile application development process plays a notable role in acquiring business needs. Hire mobile app developer services from a renowned group of experienced developers.....".substring(
      0,
      170
    ) + "...";

  const paragraphFull10 = (
    <>
      Our{" "}
      <Link
        href={"/services/ios-app-design-services"}
        className="text-orange-600"
      >
        iOS App design services
      </Link>{" "}
      have vast experience in generating thousands of IOS apps, our agency
      follows Apple's human interface design principles that focus on san serif
      typography, minimalist icons, and a limited color palette for users to
      maintain a clear hierarchy as required.
    </>
  );

  const paragraphShort10 =
    "Our iOS App design services have vast experience in generating thousands of IOS apps, our agency follows Apple's human interface design principles that focus on san serif typography, minimalist icons, and a limited color palette for users to maintain a clear hierarchy as required...".substring(
      0,
      170
    ) + "...";

  const paragraphFull11 = (
    <>
      Here at Dignite Studios,{" "}
      <Link
        href={"/services/hire-ios-app-developers"}
        className="text-orange-600"
      >
        hire iOS developers
      </Link>{" "}
      services to acquire captivating IOS designs, and features of IOS
      applications. Our expert developers not only engage with large enterprises
      but also cooperate with small and medium start-ups to boost their
      development journey.
    </>
  );

  const paragraphShort11 =
    "Here at Dignite Studios, hire iOS developers services to acquire captivating IOS designs, and features of IOS applications. Our expert developers not only engage with large enterprises but also cooperate with small and medium start-ups to boost their development journey....".substring(
      0,
      170
    ) + "...";

  const paragraphFull12 = (
    <>
      To maintain the efficacy of your mobile application, we furnish material
      design guidelines, shadow effects, bold colors, and unique layouts for
      your application. Also, our team of{" "}
      <Link
        href={"/services/android-mobile-app-design-services"}
        className="text-orange-600"
      >
        Android app design services
      </Link>{" "}
      possesses easy and readable fonts for various screen sizes of mobile app
      development.
    </>
  );

  const paragraphShort12 =
    "To maintain the efficacy of your mobile application, we furnish material design guidelines, shadow effects, bold colors, and unique layouts for your application. Also, our team of Android app design services possesses easy and readable fonts for various screen sizes of mobile app development...".substring(
      0,
      170
    ) + "...";

  const paragraphFull13 = (
    <>
      Do you want to expand your reach and generate more revenue through Android
      mobile apps? Here you are at the right place,{" "}
      <Link
        href={"/services/hire-android-app-developers"}
        className="text-orange-600"
      >
        hire android mobile app developers
      </Link>{" "}
      services from a top mobile application company to boost your brand
      awareness, and customer engagement, and drive the highest revenues in the
      market. However, to create a high-quality Android app a growing business
      must hire Android developers services from our platform.
    </>
  );

  const paragraphShort13 =
    "Do you want to expand your reach and generate more revenue through Android mobile apps? Here you are at the right place, hire mobile app developers services from a top mobile application company to boost your brand awareness, and customer engagement, and drive the highest revenues in the market. However, to create a high-quality Android app a growing business must hire Android developers services from our platform...".substring(
      0,
      170
    ) + "...";

  const paragraphFull15 = (
    <>
      We cater to specific mobile operating systems e.g. Apple, IO, S, and
      Android to produce native device features. Our skillful{" "}
      <Link
        href={"/services/native-app-development-services"}
        className="text-orange-600"
      >
        native app development services
      </Link>{" "}
      can build a proper ecosystem to create easier observance with the Google
      Play Store and Apple App Store.
    </>
  );

  const paragraphShort15 =
    "We cater to specific mobile operating systems e.g. Apple, IO, S, and Android) to produce native device features. Our skillful native app development services can build a proper ecosystem to create easier observance with the Google Play Store and Apple App Store...".substring(
      0,
      170
    ) + "...";

  const paragraphFull16 = (
    <>
      To expand your business and run a smooth architectural approach like the
      App Shell Model, our developers serve the best app service model to create
      the effectiveness of your application through progressive web app
      development services.
    </>
  );

  const paragraphShort16 =
    "To expand your business and run a smooth architectural approach like the App Shell Model, our developers serve the best app service model to create the effectiveness of your application through progressive web app development services...".substring(
      0,
      170
    ) + "...";

  const paragraphFull17 = (
    <>
      We cater to specific mobile operating systems e.g. Apple, IO, S, and
      Android to produce native device features. Our skillful{" "}
      <Link
        href={"/services/native-app-development-services"}
        className="text-orange-600"
      >
        native app development services
      </Link>{" "}
      can build a proper ecosystem to create easier observance with the Google
      Play Store and Apple App Store.
    </>
  );

  const paragraphShort17 =
    "We cater to specific mobile operating systems e.g. Apple, IO, S, and Android) to produce native device features. Our skillful native app development services can build a proper ecosystem to create easier observance with the Google Play Store and Apple App Store...".substring(
      0,
      170
    ) + "...";

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <Image
          loader={customLoader}
          width={300}
          height={200}
          src="/top-mobile-app-development-services.webp"
          alt="image shows man is holding a mobile device that appears top mobile app development layout"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">Mobile App Development</h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore ? paragraphFull : paragraphShort}
            </p>
            <button
              onClick={handleShowMore}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <Image
          loader={customLoader}
          width={300}
          height={200}
          src="/top-ios-app-development-services.webp"
          alt="Top iOS App Development Services"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">iOS App Development</h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore2 ? paragraphFull2 : paragraphShort2}
            </p>
            <button
              onClick={handleShowMor2}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore2 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <Image
          loader={customLoader}
          width={300}
          height={200}
          src="/top-android-app-development-services.webp"
          alt="Top iOS App Development Services"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">Android App Development</h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore3 ? paragraphFull3 : paragraphShort3}
            </p>
            <button
              onClick={handleShowMore3}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore3 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <img
          loader={customLoader}
          width={300}
          height={200}
          src="/native-app-development-services.png"
          alt="image shows hiring of top android app developers"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">Native App Development</h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore17 ? paragraphFull17 : paragraphShort17}
            </p>
            <button
              onClick={handleShowMore17}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore17 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <img
          loader={customLoader}
          width={300}
          height={200}
          src="/top-pwa-development-services.png"
          alt="image shows hiring of top android app developers"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">PWA Development Services</h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore16 ? paragraphFull16 : paragraphShort16}
            </p>
            <button
              onClick={handleShowMore16}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore16 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <Image
          loader={customLoader}
          width={300}
          height={200}
          src="/top-webp-app-development-services.webp"
          alt="Top iOS App Development Services"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">Web App Development</h3>
          <div className="">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore4 ? paragraphFull4 : paragraphShort4}
            </p>
            <button
              onClick={handleShowMore4}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore4 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <Image
          loader={customLoader}
          width={300}
          height={200}
          src="/top-mobile-app-design-services.webp"
          alt="image shows man is holding a mobile device that appears top mobile app design interface"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">Mobile App Design</h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore5 ? paragraphFull5 : paragraphShort5}
            </p>
            <button
              onClick={handleShowMore5}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore5 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <img
          loader={customLoader}
          width={300}
          height={200}
          src="/top-ios-app-design-services.png"
          alt="image shows a mobile app consulting discussion between consultant and client"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">iOS App Design</h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore10 ? paragraphFull10 : paragraphShort10}
            </p>
            <button
              onClick={handleShowMore10}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore10 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <img
          loader={customLoader}
          width={300}
          height={200}
          src="/top-android-app-design-services.png"
          alt="image shows a mobile app consulting discussion between consultant and client"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">Android App design</h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore12 ? paragraphFull12 : paragraphShort12}
            </p>
            <button
              onClick={handleShowMore12}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore12 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <Image
          loader={customLoader}
          width={300}
          height={200}
          src="/top-mobile-app-development-testing-services.webp"
          alt="image shows man is holding a mobile device that appears top mobile app testing screen"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">Mobile App Testing</h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore6 ? paragraphFull6 : paragraphShort6}
            </p>
            <button
              onClick={handleShowMore6}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore6 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <Image
          loader={customLoader}
          width={300}
          height={200}
          src="/top-mobile-app-development-consulting-services.webp"
          alt="image shows a mobile app consulting discussion between consultant and client"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">Mobile App Consulting</h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore7 ? paragraphFull7 : paragraphShort7}
            </p>
            <button
              onClick={handleShowMore7}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore7 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <img
          loader={customLoader}
          width={300}
          height={200}
          src="/top-mobile-app-support-and-maintenance-services.png"
          alt="image shows a mobile app support and maintenance services"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">
            Mobile App Support and Maintenance
          </h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore8 ? paragraphFull8 : paragraphShort8}
            </p>
            <button
              onClick={handleShowMore8}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore8 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <img
          loader={customLoader}
          width={300}
          height={200}
          src="/hire-top-mobile-app-developers.png"
          alt="image shows a mobile app consulting discussion between consultant and client"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">
            Hire Mobile App Developers
          </h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore9 ? paragraphFull9 : paragraphShort9}
            </p>
            <button
              onClick={handleShowMore9}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore9 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <img
          loader={customLoader}
          width={300}
          height={200}
          src="/hire-top-ios-app-developers.png"
          alt="image shows a mobile app consulting discussion between consultant and client"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">Hire iOS Developers</h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore11 ? paragraphFull11 : paragraphShort11}
            </p>
            <button
              onClick={handleShowMore11}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore11 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <img
          loader={customLoader}
          width={300}
          height={200}
          src="/hire-top-android-app-developers.png"
          alt="image shows hiring of top android app developers"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h3 className="text-base font-semibold">Hire Android Developers</h3>
          <div className="flex flex-wrap gap-1">
            <p
              className={`text-[13px] ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#9d9d9d]"
              }`}
            >
              {showMore13 ? paragraphFull13 : paragraphShort13}
            </p>
            <button
              onClick={handleShowMore13}
              className={`text-[13px] font-semibold ${
                theme === "light" ? "text-[#F15C20]" : "text-[#F15C20]"
              }`}
            >
              {showMore13 ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppServiceCard;

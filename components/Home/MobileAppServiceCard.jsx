import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useState } from "react";

const MobileAppServiceCard = () => {
  const { theme } = useContext(GlobalContext);
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(false);
  const [showMore6, setShowMore6] = useState(false);
  const [showMore7, setShowMore7] = useState(false);

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
      <Link href="/" className="">
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
      <Link href="/services/web-app-development" className="text-orange-600">
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

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
      <div
        className={`w-full min-h-[329px] rounded-xl p-3 ${
          theme === "light"
            ? "border border-[#E7E7E7]"
            : "border border-[#7c7c7c]"
        }`}
      >
        <img
          src="/top-mobile-app-development-services.webp"
          title="top mobile app development services"
          alt="image shows man is holding a mobile device that appears top mobile app development layout"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h1 className="text-base font-semibold">Mobile App Development</h1>
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
        <img
          src="/home-ios-development.webp"
          alt=""
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h1 className="text-base font-semibold">iOS App Development</h1>
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
        <img
          src="/home-android-app-development.webp"
          alt=""
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h1 className="text-base font-semibold">Android App Development</h1>
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
          src="/home-web-app-development.webp"
          alt=""
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h1 className="text-base font-semibold">Web App Development</h1>
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
        <img
          src="/top-mobile-app-design-services.webp"
          title="top mobile app design services"
          alt="image shows man is holding a mobile device that appears top mobile app design interface"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h1 className="text-base font-semibold">Mobile App Design</h1>
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
          src="/top-mobile-app-development-testing-services.webp"
          title="top mobile app development testing services"
          alt="image shows man is holding a mobile device that appears top mobile app testing screen"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h1 className="text-base font-semibold">Mobile App Testing</h1>
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
        <img
          src="/top-mobile-app-development-consulting-services.webp"
          title="top mobile app development consulting services"
          alt="image shows a mobile app consulting discussion between consultant and client"
          className="w-full h-[200px] 2xl:h-[250px] object-cover rounded-xl"
        />
        <div className="flex flex-col items-start text-start gap-1 pt-3">
          <h1 className="text-base font-semibold">Mobile App Consulting</h1>
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
    </div>
  );
};

export default MobileAppServiceCard;

import ContactButton from "@/components/global/ContactButton";
import React from "react";

const DevelopersHiringProcess = () => {
  return (
    <section className="w-full py-12 lg:py-20 global-padding-horizontal">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-y-6">
        <div className="w-full lg:w-[65%]">
          <h2 className="headings-size my-4">Developers Hiring Process</h2>
          <p className="text-sm md:text-[18px] font-normal leading-[26.46px]">
            We escort the potential hiring process of the Android mobile app
            development team with the finest capabilities and technical
            expertise of the Android system. Hire Android app developers to ease
            your app development process.
          </p>
        </div>
        <div className="lg:pt-10">
          <ContactButton text1={"Hire Developer"} text2={"Let's talk"} />
        </div>
      </div>

      <div className="w-full mt-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="relative">
            <img
              src="/pen-down-your-projects-requirements-for-android-app-developer-image.webp"
              alt="Pen down your projects requirements for android app developer image"
              className="h-[300px] w-full object-cover rounded-[18px] brightness-90"
            />
            <div className="absolute inset-0 w-full h-full z-10 flex flex-col justify-end p-6 text-white">
              <span className="text-[18px] font-medium my-3 block">/01</span>
              <h3 className="text-xl md:text-[28px] font-bold">
                Pen down your projects <br /> requirements
              </h3>
            </div>
          </div>
          <div className="relative">
            <img
              src="/identify-skillful-android-app-developer-image.webp"
              alt="Identify Skillful Android App Developer image"
              className="h-[300px] w-full object-cover rounded-[18px] brightness-90"
            />
            <div className="absolute inset-0 w-full h-full z-10 flex flex-col justify-end p-6 text-white">
              <span className="text-[18px] font-medium my-3 block">/02</span>
              <h3 className="text-xl md:text-[28px] font-bold">
                Identify Skillful Android <br /> App Developer
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
          <div className="relative">
            <img
              src="/conduct-interviews-of-android-app-developer-image.webp"
              alt="Conduct Interviews of Android App Developer image"
              className="h-[300px] w-full object-cover rounded-[18px] brightness-90"
            />
            <div className="absolute inset-0 w-full h-full z-10 flex flex-col justify-end p-6 text-white">
              <span className="text-[18px] font-medium my-3 block">/03</span>
              <h3 className="text-xl md:text-[28px] font-bold">
                Conduct interviews
              </h3>
            </div>
          </div>
          <div className="relative">
            <img
              src="/start-a-free-trial-of-android-app-image.webp"
              alt="Start a Free Trial of Android App image"
              className="h-[300px] w-full object-cover rounded-[18px] brightness-90"
            />
            <div className="absolute inset-0 w-full h-full z-10 flex flex-col justify-end p-6 text-white">
              <span className="text-[18px] font-medium my-3 block">/04</span>
              <h3 className="text-xl md:text-[28px] font-bold">
                Start A Free Trial
              </h3>
            </div>
          </div>
          <div className="relative">
            <img
              src="/hire-android-application-developer-image.webp"
              alt="Hire Android Application Developer image"
              className="h-[300px] w-full object-cover rounded-[18px] brightness-90"
            />
            <div className="absolute inset-0 w-full h-full z-10 flex flex-col justify-end p-6 text-white">
              <span className="text-[18px] font-medium my-3 block">/05</span>
              <h3 className="text-xl md:text-[28px] font-bold">
                Hire Android <br /> Application Developer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersHiringProcess;

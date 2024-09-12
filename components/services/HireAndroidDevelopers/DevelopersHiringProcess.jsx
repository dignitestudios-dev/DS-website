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
          <div>
            <img
              src="/developers-hiring-process-img-1.png"
              alt=""
              className="h-[300px] w-full object-cover rounded-[18px]"
            />
          </div>
          <div>
            <img
              src="/developers-hiring-process-img-2.png"
              alt=""
              className="h-[300px] w-full object-cover rounded-[18px]"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
          <div>
            <img
              src="/developers-hiring-process-img-3.png"
              alt=""
              className="h-[300px] w-full object-cover rounded-[18px]"
            />
          </div>
          <div>
            <img
              src="/developers-hiring-process-img-4.png"
              alt=""
              className="h-[300px] w-full object-cover rounded-[18px]"
            />
          </div>
          <div>
            <img
              src="/developers-hiring-process-img-5.png"
              alt=""
              className="h-[300px] w-full object-cover rounded-[18px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersHiringProcess;

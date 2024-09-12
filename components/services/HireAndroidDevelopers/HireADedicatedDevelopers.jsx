import ContactButton from "@/components/global/ContactButton";
import React from "react";

const HireADedicatedDevelopers = () => {
  return (
    <section className="w-full py-12 lg:py-20 flex flex-col lg:flex-row items-start justify-between global-padding-horizontal">
      <div className="w-full lg:w-[65%] ">
        <span className="text-[#8F8F8F] text-[20px] font-bold uppercase">
          Hire A Dedicated
        </span>
        <h2 className="headings-size my-4">mobile app developer</h2>
        <p className="text-sm md:text-[18px] font-normal leading-[26.46px] lg:w-4/5">
          Make your Android app with strikingly enticing modern features and
          design elements. Our team of skilled developers thrive to produce
          state-of-the-art and exclusive craftsmanship to build compelling
          Android app. Dignite’s dedicated Android app developer provides
          feasible and pragmatic solutions to drive high business user
          interactions.
          <br />
          <br />
          From startups to large enterprises we put forward extensive technical
          skills and the ability to create extraordinary Android app development
          processes and user-friendly applications with cutting-edge
          technologies. You can also hire an Android developer online relatable
          to your comfort zone.
        </p>
        <div className="mt-7">
          <ContactButton text1={"Hire Developer"} text2={"Let's talk"} />
        </div>
      </div>
      <img
        src={"/hire-android-developers-mockup.png"}
        className="lg:h-[569px]"
      />
    </section>
  );
};

export default HireADedicatedDevelopers;

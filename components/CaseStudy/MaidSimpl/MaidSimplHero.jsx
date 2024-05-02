"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import MaidSimplTechnologies from "./MaidSimplTechnologies";
import LeftAllignedScreen from "../LeftAllignedScreen";
import RightAllignedScreen from "../RightAllignedScreen";

const MaidSimplHero = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className="w-full h-auto flex flex-col gap-4 justify-start items-start py-8 lg:py-16"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <div className="px-4 md:px-12 xl:px-64 lg:pb-10 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-5">
          <img
            src="/maid-simple-logo.png"
            alt=""
            className="w-[133px] h-[42px]"
          />
          <h1 className="text-[45px] font-extrabold lg:text-[60px] lg:font-medium uppercase">
            cleaning made simple
          </h1>
        </div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">About The App</h2>
          <p className="text-[18px] font-light">
            Users experience the epitome of convenience when it comes to
            managing their house cleaning needs. With a sleek and intuitive
            interface, searching for, reserving, and monitoring cleaning
            services is effortlessly integrated into their daily routines.
            Through multiple payment options and real-time updates, users can
            trust that their homes are cared for with precision and ease.
            <br />
            <br />
            With a focus on efficiency and convenience, the app makes the entire
            process of booking and managing house cleaning services efficient.
            By consolidating multiple tasks into a single platform, users can
            save time and effort typically spent coordinating with multiple
            vendors. Through constant optimization and user feedback
            integration, the app continues to evolve, delivering unparalleled
            convenience and satisfaction to users seeking reliable house
            cleaning solutions.
          </p>
        </div>
      </div>
      <img src="/maid-simple-1.png" alt="" className="w-full lg:h-screen" />
      <div className="px-4 md:px-12 xl:px-64 lg:py-10 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">The Challenges</h2>
          <p className="text-[18px] font-light">
            One significant challenge faced by our platform was ensuring smooth
            communication between users, vendors, and cleaners. With multiple
            stakeholders involved, maintaining clarity and transparency in
            scheduling, service specifications, and feedback loops posed a
            considerable hurdle. Another challenge stemmed from the diverse
            needs and preferences of both users and cleaners. Balancing user
            demands for specific service requirements with the availability and
            skill sets of cleaners presented a complex matchmaking dilemma.
            <br />
            <br />
            Addressing these challenges and ensuring fair compensation for
            cleaners while maintaining competitive pricing for users
            necessitated the development of robust communication channels,
            establishing protocols for resolving disputes or miscommunications
            swiftly. a fine-tuned algorithmic approach, combining user
            preferences, cleaner capabilities, and market dynamics to optimize
            service delivery while fostering a mutually beneficial ecosystem for
            all stakeholders involved.
          </p>
        </div>
      </div>
      <img src="/maid-simple-2.png" alt="" className="w-full h-lg:screen" />
      <div className="px-4 md:px-12 xl:px-64 lg:py-10  flex w-full flex-col justify-start items-start gap-4">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">
            Seamless Services at <br /> Your Fingertips
          </h2>
          <p className="text-[18px] font-light">
            Imagine having all your house cleaning needs seamlessly addressed
            with just a few taps on your device. Our innovative platform
            revolutionizes the way users access and manage house cleaning
            services.
            <br />
            <br />
            Say goodbye to the hassle of contacting multiple cleaners or
            coordinating schedules. With this centralized vendor system, users
            can trust that their cleaning needs are efficiently distributed to
            experienced professionals, ensuring a consistent and reliable
            service every time.
          </p>
        </div>
        <MaidSimplTechnologies />
      </div>
      <img src="/maid-simple-3.png" alt="" className="w-full h-lg:screen" />
      <div className="w-full px-4 md:px-12 xl:px-64 md:py-10 flex flex-col gap-8 lg:gap-4 justify-start items-start">
        <LeftAllignedScreen
          title={"Splash Screen"}
          description={
            "The splash screen serves as the initial interface for users engaging with this house cleaning service platform, offering an inviting entry point into a wonderful user experience. Designed with both aesthetic appeal and functionality in mind, the splash screen provides a snapshot of the platform's core features, captivating users from the outset."
          }
          mockup={"/maidsimpl-mockup-1.png"}
        />
        <RightAllignedScreen
          title={"Login"}
          description={
            "With security and user convenience at the forefront, our login system enables access to a range of essential functions. Users can effortlessly manage their reservations, monitor cleaning progress, and securely make payments, all through a single, unified interface. By storing user preferences and past interactions, the login feature optimizes the booking process, ensuring that each cleaning session is tailored to the unique needs of our clients. "
          }
          mockup={"/maidsimpl-mockup-2.png"}
        />
        <LeftAllignedScreen
          title={"Choose your service"}
          description={
            "The application offers users unparalleled flexibility and customization when selecting house cleaning services tailored to their unique needs. Customers can easily browse a comprehensive array of cleaning options, ranging from standard maintenance tasks to specialized treatments. It allows them to select specific services, duration, and frequency according to their preferences."
          }
          mockup={"/maidsimpl-mockup-3.png"}
        />
        <RightAllignedScreen
          title={"Home Page"}
          description={
            "Designed with user convenience in mind, the homepage features a streamlined search bar prominently positioned, allowing users to swiftly locate and select their desired cleaning services based on their specific requirements. Additionally, a visually engaging display showcases curated cleaning packages and promotions, enticing users to explore further.It provides access to a myriad of house cleaning services."
          }
          mockup={"/maidsimpl-mockup-4.png"}
        />
      </div>
      <img src="/maid-simple-4.png" alt="" className="w-full h-lg:screen" />
    </div>
  );
};

export default MaidSimplHero;

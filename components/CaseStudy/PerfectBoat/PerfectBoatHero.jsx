"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import PerfectBoatTechnologies from "./PerfectBoatTechnologies";
import LeftAllignedScreen from "../LeftAllignedScreen";
import RightAllignedScreen from "../RightAllignedScreen";

const PerfectBoatHero = () => {
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
            src="/perfect-boat-logo.png"
            alt=""
            className="w-[160px] h-[71px]"
          />
          <h1 className="text-[45px] font-extrabold lg:text-[60px] lg:font-medium uppercase">
            Carter Boating
          </h1>
        </div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">About The App</h2>
          <p className="text-[18px] font-light">
            This platform offers a solution for boat owners to list their
            vessels for rent. Users can input crucial details such as
            availability, pricing, and specifications, ensuring comprehensive
            information for potential renters. With a user-friendly interface,
            boat owners can manage their listings efficiently, while renters can
            browse and select boats tailored to their needs, fostering a
            convenient and hassle-free rental experience.
            <br />
            <br />
            Secure in-app payments streamline the rental process, providing
            peace of mind for both boat owners and renters. Through encrypted
            transactions, users can confidently finalize bookings without
            concerns about payment security. This integration positions it as a
            trusted marketplace for boat rentals, where users can engage in
            transactions with ease and confidence.
          </p>
        </div>
      </div>
      <img src="/perfect-boat-1.png" alt="" className="w-full lg:h-screen" />
      <div className="px-4 md:px-12 xl:px-64 lg:py-10 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">The Challenges</h2>
          <p className="text-[18px] font-light">
            A significant challenge faced during the development of this
            platform was ensuring a user-friendly interface that catered to both
            boat owners and renters. Balancing comprehensive listing features
            with simplicity posed a design hurdle, requiring careful
            consideration to simplify the listing process without sacrificing
            essential details.
            <br />
            <br />
            Another notable challenge revolved around implementing a secure
            payment system within the app. Guaranteeing the safety of financial
            transactions was paramount to building trust among users. Overcoming
            this challenge involved the addition of encryption protocols and
            adhering to industry-standard security practices to safeguard
            sensitive payment information.
          </p>
        </div>
      </div>
      <img src="/perfect-boat-2.png" alt="" className="w-full lg:h-screen" />
      <div className="px-4 md:px-12 xl:px-64  md:py-10  flex w-full flex-col justify-start items-start gap-4">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">
            Seamless Services at <br /> Your Fingertips
          </h2>
          <p className="text-[18px] font-light">
            With our platform, users can list their boat for rent by specifying
            availability, pricing, and essential details, all within a
            user-friendly interface designed for simplicity. Whether you're a
            boat owner or a renter, managing and accessing listings is made
            easy, ensuring a hassle-free experience for all users.
            <br />
            <br />
            Navigate through a world of boating adventures with ease as you
            explore available rentals and securely book your next excursion via
            our in-app payment system. With just a few taps, users can browse
            through a wide selection of boats, select the perfect vessel for
            their needs, and complete transactions securely.
          </p>
        </div>
        <PerfectBoatTechnologies />
      </div>
      <img src="/perfect-boat-3.png" alt="" className="w-full lg:h-screen" />
      <div className="w-full px-4 md:px-12 xl:px-64 lg:py-10 flex flex-col gap-8 lg:gap-4 justify-start items-start">
        <LeftAllignedScreen
          title={"Splash Screen"}
          description={
            "It creates an inviting entry point for users, showcasing the essence of boat rentals available with ease. With captivating visuals and concise messaging, the splash screen instantly communicates the platform's functionality and benefits, setting the tone for a user-friendly experience. This introductory screen primes users for effortless navigation and encourages exploration of the platform's offerings."
          }
          mockup={"/perfect-mockup-1.png"}
        />
        <RightAllignedScreen
          title={"Login"}
          description={
            "The login feature ensures secure and personalized access for users, enabling them to manage their boat listings and rental activities. Through an authentication process, they can quickly access their accounts, saving time and enhancing usability. Alongwith security measures in place, including password encryption and multi-factor authentication options, users can trust that their information remains protected."
          }
          mockup={"/prefect-mockup-2.png"}
        />
        <LeftAllignedScreen
          title={"Home Screen"}
          description={
            "At the heart of our platform lies the home screen, serving as the entrance to a world of effortless boat rentals. Having a user-centric design, it provides easy access to essential functionalities, allowing users to seamlessly go through listings, manage their boat rentals, and explore available options. Via strategic placement of features and clear visual cues, the home screen offers such an experience which gives users the ability to efficiently list their boats for rent or find the perfect vessel for their next adventure."
          }
          mockup={"/perfect-mockup-4.png"}
        />
        <RightAllignedScreen
          title={"Order Details"}
          description={
            "Order details offer users comprehensive insight into their rental transactions, ensuring clarity and transparency throughout the process. It also gives users access to detailed summaries of their bookings, including rental duration, cost breakdowns, and boat specifications. With easy access to vital information, users can confidently track their bookings and address any queries or concerns."
          }
          mockup={"/prefect-mockup-3.png"}
        />
      </div>
      <img src="/perfect-boat-4.png" alt="" className="w-full lg:h-screen" />
    </div>
  );
};

export default PerfectBoatHero;

"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import NyknTechnologies from "./NyknTechnologies";
import LeftAllignedScreen from "../LeftAllignedScreen";
import RightAllignedScreen from "../RightAllignedScreen";

const NyknHero = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className="w-full h-auto flex flex-col gap-4 justify-start items-start pt-8 lg:pt-16"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <div className="px-4 md:px-12 xl:px-64 lg:pb-10 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-5">
          <img src="/nykn-logo.png" alt="" className="w-[53.65px] h-[79.9px]" />
          <h1 className="text-[45px] font-extrabold lg:text-[60px] lg:font-medium uppercase">
            Explore Nashville
          </h1>
        </div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">About The App</h2>
          <p className="text-[18px] font-light">
            The application stands as a testament to innovation in the realm of
            travel guides, providing an immersive experience tailored for both
            tourists and locals alike. With a keen focus on user-centric design
            principles, it boasts a user-friendly interface that ensures swift
            navigation and discovery.
            <br />
            <br />
            Catering to the diverse interests of its users, the application
            encompasses 11 meticulously curated categories, ranging from
            renowned landmarks and cultural hotspots to hidden gems and culinary
            delights.At its core, the platform aspires to be more than just a
            conventional guide; it aims to establish a deeper connection between
            individuals and the vibrant tapestry of experiences that define the
            city.
          </p>
        </div>
      </div>
      <img src="/nykn-1.png" alt="" className="w-full lg:h-screen" />
      <div className="px-4 md:px-12 xl:px-64 lg:py-10 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">The Challenges</h2>
          <p className="text-[18px] font-light">
            Despite its ambitions and user-friendly design, the Nashville
            Tourist Application encountered several challenges during its
            development and implementation phase. One significant hurdle was
            ensuring the accuracy and currency of the information provided
            across its 11 diverse categories. With Nashville's dynamic and
            ever-evolving landscape of attractions and events, maintaining
            up-to-date content required rigorous monitoring and frequent updates
            to avoid inaccuracies that could impact user experience.
            <br />
            <br />
            Fostering engagement and retention proved challenging amidst
            competition from existing platforms and traditional guidebooks.
            Strategic marketing efforts were essential to establish and maintain
            a loyal user base for the Nashville Tourist Application.
          </p>
        </div>
      </div>
      <img src="/nykn-2.png" alt="" className="w-full lg:h-screen" />
      <div className="px-4 md:px-12 xl:px-64 lg:py-10  flex w-full flex-col justify-start items-start gap-4">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">
            Seamless Services at <br /> Your Fingertips
          </h2>
          <p className="text-[18px] font-light">
            At the heart of the application lies the promise of seamless access
            to an array of services, all readily available to users. Users can
            effortlessly navigate through 11 distinct categories, This
            comprehensive coverage ensures that whether users are seeking a
            culinary adventure, a night of live music, or a deep dive into the
            city's rich heritage, they can find everything they need within the
            confines of a single app.
            <br />
            <br />
            With a commitment to being the ultimate guide to Nashville, our
            application prioritizes user convenience and satisfaction. Each
            service is meticulously curated to offer the best of what the city
            has to offer, enabling users to tailor their experiences according
            to their interests.
          </p>
        </div>
        <NyknTechnologies />
      </div>
      <img src="/nykn-3.png" alt="" className="w-full lg:h-screen" />
      <div className="w-full px-4 md:px-12 xl:px-64  md:py-10 flex flex-col gap-8 lg:gap-4 justify-start items-start">
        <LeftAllignedScreen
          title={"Splash Screen"}
          description={
            "The splash screen sets the stage for an immersive journey through Music City, welcoming users with a captivating visual that embodies the essence of Nashville's rich cultural tapestry. As the gateway to exploration, this screen not only introduces users to the app's sleek design but also primes them for a seamless navigation experience."
          }
          mockup={"/nykn-mockup-1.png"}
        />
        <RightAllignedScreen
          title={"Login"}
          description={
            "It serves as the gateway to personalized exploration and enhanced user engagement. With a secure login process, users can create individual accounts to unlock exclusive features tailored to their preferences and interests. Through the login functionality, they can access saved itineraries, bookmark favorite attractions, and receive customized recommendations based on their past activity and geographic location."
          }
          mockup={"/nykn-mockup-2.png"}
        />
        <LeftAllignedScreen
          title={"Homepage"}
          description={
            "The homepage welcomes users with a vibrant and dynamic interface, inviting them to embark on an immersive journey through the heart of Music City. Designed with both tourists and locals in mind, it features intuitive navigation options for users to explore the app's extensive range of offerings. From iconic landmarks to hidden gems, the homepage serves as a portal to uncovering the rich tapestry of experiences Nashville has to offer."
          }
          mockup={"/nykn-mockup-4.png"}
        />
        <RightAllignedScreen
          title={"Nearby Events"}
          description={
            "Users dive into Nashville's dynamic scene with 'Nearby Events', a feature that allows users to explore real-time concerts, festivals, and art exhibits near them. Personalized recommendations and detailed descriptions keep users informed, ensuring that they never miss out. To put it together, it is the perfect tool for effortless discovery."
          }
          mockup={"/nykn-mockup-3.png"}
        />
      </div>
      <img src="/nykn-4.png" alt="" className="w-full lg:h-screen" />
    </div>
  );
};

export default NyknHero;

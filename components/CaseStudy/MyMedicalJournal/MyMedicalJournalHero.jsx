"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import MyMedicalJournalTechnologies from "./MyMedicalJournalTechnologies";
import LeftAllignedScreen from "../LeftAllignedScreen";
import RightAllignedScreen from "../RightAllignedScreen";

const MyMedicalJournalHero = () => {
  const { palette, theme } = useContext(GlobalContext);
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
          {theme == "dark" ? (
            <img src="/mmj-logo-2.png" alt="" className="w-[160px] h-[71px]" />
          ) : (
            <img
              src="/my-medical-logo.svg"
              alt=""
              className="w-[160px] h-[71px]"
            />
          )}

          <h1 className="text-[45px] font-extrabold lg:text-[60px] lg:font-medium uppercase">
            my medical journal
          </h1>
        </div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">About The App</h2>
          <p className="text-[18px] font-light">
            This innovative app redefines the landscape of personal health
            management by introducing a groundbreaking body visualization tool.
            Through this tool, users gain a profound understanding of their
            bodies as they seamlessly navigate and interact with different
            anatomical regions. By offering an interface where users can easily
            highlight specific body parts and journal their symptoms with a mere
            click, individuals can track and monitor their health in a
            comprehensive and accessible manner.
            <br />
            <br />
            Beyond being a mere health companion, this platform represents a
            pivotal resource for those committed to enhancing their well-being.
            It stands as a testament to the fusion of cutting-edge technology
            and personalized health care.
          </p>
        </div>
      </div>
      <img src="/my-medical-1.png" alt="" className={`w-full lg:h-screen`} />
      <div className="px-4 md:px-12 xl:px-64 lg:py-10 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">The Challenges</h2>
          <p className="text-[18px] font-light">
            Amidst development for this innovative health management tool, our
            team faced a multifaceted task. Central to our approach was crafting
            a seamless user experience where intuitive interaction meets complex
            medical data. We meticulously designed the app to provide users with
            a visually engaging and easy-to-navigate interface, ensuring
            accessibility for individuals at all levels of tech proficiency.
            <br />
            <br />
            Moreover, our development process prioritized precision and accuracy
            in body visualization. Through agile development methodologies and
            rigorous testing, we aimed to deliver not just an app, but a
            transformative tool enabling users to actively monitor and manage
            their health journey.
          </p>
        </div>
      </div>
      <img src="/my-medical-2.png" alt="" className="w-full lg:h-screen" />
      <div className="px-4 md:px-12 xl:px-64 lg:py-10  flex w-full flex-col justify-start items-start gap-4">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">
            Seamless Services at <br /> Your Fingertips
          </h2>
          <p className="text-[18px] font-light">
            This innovative app highlights personal health management to
            unprecedented levels. By integrating an immersive body visualization
            tool, users are able to navigate and identify specific anatomical
            regions, enabling precise symptom tracking and journaling. It also
            gives the facility to document observations, facilitating a
            comprehensive overview of an individuals health journey with
            unparalleled ease and efficiency.
            <br />
            <br />
            By simplifying the process of recording health data, it eliminates
            barriers to effective self-care. Whether users seek to monitor
            chronic conditions or simply maintain optimal health, this
            resource-rich platform offers indispensable support and guidance.
          </p>
        </div>
        <MyMedicalJournalTechnologies />
      </div>
      <img src="/my-medical-3.png" alt="" className="w-full lg:h-screen" />
      <div className="w-full px-4 md:px-12 xl:px-64  md:py-10 flex flex-col gap-8 lg:gap-4 justify-start items-start">
        <LeftAllignedScreen
          title={"Splash Screen"}
          description={
            "The splash screen of this health management application sets the stage for a transformative user experience. It welcomes users into a world where personal health empowerment is within reach and invites them to interact with their own anatomy, allowing them to journal symptoms and observations effortlessly."
          }
          mockup={"/mmj-mockup-1.png"}
        />
        <RightAllignedScreen
          title={"Login"}
          description={
            "The login feature offers a secure gateway to a personalized journey towards well-being. Utilizing robust encryption protocols, it ensures the confidentiality of sensitive health data. Integrated into the app, the login process provides a seamless transition into the immersive health care services provided with which users are able to efficiently track and manage their health with confidence and ease."
          }
          mockup={"/mmj-mockup-2.png"}
        />
        <LeftAllignedScreen
          title={"App Walkthrough"}
          description={
            "It introduces a transformative walkthrough feature redefining personal health management. Through an immersive body visualization tool, users can interactively select and highlight specific body parts, simplifying the process of journaling symptoms and observations. With this functionality, this app allows users to take proactive steps towards better health."
          }
          mockup={"/mmj-mockup-3.png"}
        />
        <RightAllignedScreen
          title={"Data Report"}
          description={
            "My Medical Journal introduces a robust data reporting feature. Users can access comprehensive reports detailing their health journey, including symptom trends and observation patterns. By providing actionable insights derived from user input, this further assists individuals in making informed decisions about their well-being, cementing the app's position as a powerful and user-friendly tool in personal health management."
          }
          mockup={"/mmj-mockup-4.png"}
        />
      </div>
      <img src="/my-medical-4.png" alt="" className="w-full lg:h-screen" />
    </div>
  );
};

export default MyMedicalJournalHero;

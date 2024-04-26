"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import MyMedicalJournalTechnologies from "./MyMedicalJournalTechnologies";
import LeftAllignedScreen from "../LeftAllignedScreen";
import RightAllignedScreen from "../RightAllignedScreen";

const MyMedicalJournalHero = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className="w-full h-auto flex flex-col gap-4 justify-start items-start py-8 lg:py-16"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <div className="px-4 md:px-12 lg:px-64 lg:pb-10 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-5">
          <img
            src="/my-medical-logo.svg"
            alt=""
            className="w-[160px] h-[71px]"
          />
          <h1 className="text-[45px] font-extrabold lg:text-[60px] lg:font-medium uppercase">
            my medical journal
          </h1>
        </div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">About The App</h2>
          <p className="text-[18px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
            libero a arcu faucibus auctor. Cras elementum risus nec elementum
            tincidunt. Nulla facilisi. Suspendisse lacinia nisi sit amet est
            dictum, blandit porttitor nulla accumsan. Duis consectetur accumsan
            sem a vehicula.
            <br />
            <br />
            Fusce lacinia nec orci sit amet interdum. Donec magna augue,
            ultricies non facilisis nec, tincidunt eget sem. Nunc pretium
            aliquet sem posuere posuere. Ut imperdiet bibendum turpis. Duis quis
            egestas leo, non cursus tellus. Ut tincidunt vitae metus eget
            rhoncus. Proin tempor diam a lectus mollis pharetra. Vivamus
            eleifend nisl id nisi interdum porttitor.
          </p>
        </div>
      </div>
      <img src="/my-medical-1.png" alt="" className="w-full lg:h-screen" />
      <div className="px-4 md:px-12 lg:px-64 lg:py-10 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">The Challenge</h2>
          <p className="text-[18px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
            libero a arcu faucibus auctor. Cras elementum risus nec elementum
            tincidunt. Nulla facilisi. Suspendisse lacinia nisi sit amet est
            dictum, blandit porttitor nulla accumsan. Duis consectetur accumsan
            sem a vehicula.
            <br />
            <br />
            Fusce lacinia nec orci sit amet interdum. Donec magna augue,
            ultricies non facilisis nec, tincidunt eget sem. Nunc pretium
            aliquet sem posuere posuere. Ut imperdiet bibendum turpis. Duis quis
            egestas leo, non cursus tellus. Ut tincidunt vitae metus eget
            rhoncus. Proin tempor diam a lectus mollis pharetra. Vivamus
            eleifend nisl id nisi interdum porttitor.
          </p>
        </div>
      </div>
      <img src="/my-medical-2.png" alt="" className="w-full lg:h-screen" />
      <div className="px-4 md:px-12 lg:px-64 lg:py-10  flex w-full flex-col justify-start items-start gap-4">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">
            Seamless Services at <br /> Your Fingertips
          </h2>
          <p className="text-[18px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
            libero a arcu faucibus auctor. Cras elementum risus nec elementum
            tincidunt. Nulla facilisi. Suspendisse lacinia nisi sit amet est
            dictum, blandit porttitor nulla accumsan. Duis consectetur accumsan
            sem a vehicula.
            <br />
            <br />
            Fusce lacinia nec orci sit amet interdum. Donec magna augue,
            ultricies non facilisis nec, tincidunt eget sem. Nunc pretium
            aliquet sem posuere posuere. Ut imperdiet bibendum turpis. Duis quis
            egestas leo, non cursus tellus. Ut tincidunt vitae metus eget
            rhoncus. Proin tempor diam a lectus mollis pharetra. Vivamus
            eleifend nisl id nisi interdum porttitor.
          </p>
        </div>
        <MyMedicalJournalTechnologies />
      </div>
      <img src="/my-medical-3.png" alt="" className="w-full lg:h-screen" />
      <div className="w-full px-4 md:px-12 lg:px-64 lg:py-10 flex flex-col gap-4 justify-start items-start">
        <LeftAllignedScreen
          title={"Splash Screen"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut libero a arcu faucibus auctor. Cras elementum risus nec elementum tincidunt. Nulla facilisi. Suspendisse lacinia nisi sit amet est dictum, blandit porttitor nulla accumsan. Duis consectetur accumsan sem a vehicula."
          }
          mockup={"/mmj-mockup-1.png"}
        />
        <RightAllignedScreen
          title={"Login"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut libero a arcu faucibus auctor. Cras elementum risus nec elementum tincidunt. Nulla facilisi. Suspendisse lacinia nisi sit amet est dictum, blandit porttitor nulla accumsan. Duis consectetur accumsan sem a vehicula."
          }
          mockup={"/mmj-mockup-2.png"}
        />
        <LeftAllignedScreen
          title={"Manage Your Tasks"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut libero a arcu faucibus auctor. Cras elementum risus nec elementum tincidunt. Nulla facilisi. Suspendisse lacinia nisi sit amet est dictum, blandit porttitor nulla accumsan. Duis consectetur accumsan sem a vehicula."
          }
          mockup={"/mmj-mockup-3.png"}
        />
        <RightAllignedScreen
          title={"Blogs"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut libero a arcu faucibus auctor. Cras elementum risus nec elementum tincidunt. Nulla facilisi. Suspendisse lacinia nisi sit amet est dictum, blandit porttitor nulla accumsan. Duis consectetur accumsan sem a vehicula."
          }
          mockup={"/mmj-mockup-4.png"}
        />
      </div>
      <img src="/my-medical-4.png" alt="" className="w-full lg:h-screen" />
    </div>
  );
};

export default MyMedicalJournalHero;

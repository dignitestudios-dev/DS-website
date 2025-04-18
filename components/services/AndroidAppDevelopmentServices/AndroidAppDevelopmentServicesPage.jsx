import React from "react";
import Hero from "./Hero";
import ReownedSection from "./ReownedSection";
import LeadingSection from "./LeadingSection";
import TopAndroidAppSection from "./TopAndroidAppSection";
import Process from "./Process";
import Technologies from "./Technologies";
import EdgeOfDigniteStudios from "./EdgeofWorkingWithDignite";
import FAQS from "./FAQS";
import WhyDigniteStudios from "./WhyDigniteStudios";
import NewContactForm from "@/components/global/NewContactForm";

const AndroidAppDevelopmentServicesPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <ReownedSection />
      <LeadingSection />
      <TopAndroidAppSection />
      <Process />
      <Technologies />
      <EdgeOfDigniteStudios />
      <WhyDigniteStudios />
      <FAQS />
      <NewContactForm />
    </div>
  );
};

export default AndroidAppDevelopmentServicesPage;

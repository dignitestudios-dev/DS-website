"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useState, useEffect } from "react";
import CaseStudiesSection from "@/components/Home/CaseStudiesSection";
import Faq from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import MobileAppServices from "@/components/Home/MobileAppServices";
import SuccessStories from "./SuccessStories";
import Bussiness from "./Bussiness";
import Process from "./Process";
import Testimonials from "./Testimonials";
import GlobalPresence from "./GlobalPresence";
import Industries from "./Industries";
import Impact from "./Impact";
import TechTools from "./TechTools";
import ProductDesign from "./ProductDesign";
import ContactUs from "./ContactUs";

export default function HomePage() {
  const { palette, theme } = useContext(GlobalContext);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <div className="w-full max-w-screen-2xl mx-auto h-auto flex flex-col items-center justify-center gap-20 md:gap-28 pb-32">
      <Hero />
      <MobileAppServices />
      <SuccessStories />
      <Bussiness />
      <Process />
      <Industries />
      <TechTools />
      <Impact />
      <Testimonials />
      <ProductDesign />
      <GlobalPresence />
      <Faq />
      <ContactUs header={"Your Next Big Project is Just a Call Away!"} para={"Big ideas deserve expert execution. Connect with our team and take the first step toward launching your amazing project."} img="/cc.png" btn={"Schedule a Call"} />
    </div>
  );
}

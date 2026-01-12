import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Bussiness from "./Bussiness";
import Process from "@/components/Home/Process";
import Industries from "./Industries";
import SuccessStories from "./SuccessStories";
import MobileApp from "./MobileApp";
import CTA from "./CTA";
import TechAndTools from "./TechTools";
import Testimonials from "./Testimonials";
import SEO from "./SEO";

const MobileAppCalifornia = () => {
  return (
    <div className="max-w-screen-2xl mx-auto overflow-hidden">
      <Hero /> <About /> <Services /> <Bussiness /> <Industries />
      <Process />
      <MobileApp />
      <SuccessStories />
      <CTA/>
      <TechAndTools/>
      <SEO/>
      <Testimonials/>
    </div>
  );
};

export default MobileAppCalifornia;

"use client";
import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Evolved from "./Evolved";
import Bussiness from "../ui/Bussiness";
import ToolsAndTech from "../ui/ToolsAndTech";
import Process from "../ui/Process";
import MetricsCarousel from "../WebDesignServices/MetricsCarousel";
import WhyChoose from "../ui/WhyChoose";
import Industries from "../ui/Industries";
import MobileApp from "../ui/MobileApp";
import SuccessStories from "../ui/SuccessStories";
import WebDesignCTA from "../ui/WebDesignCTA";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";

// Placeholder data arrays - to be updated with actual content
const bussinessData = [
  { title: "Placeholder", desc: "Placeholder content" }
];
const toolsData = [];
const processSteps = [];
const metricsData = [];
const highlightsData = [];
const industriesData = [];
const mobileAppCards = [];
const testimonialsData = [];
const faqsData = [];

const SocialMediaMarketing = () => {
  return (
    <div className="max-w-screen-2xl mx-auto gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About 
        heading="About Our Social Media"
        heading2="Marketing Services"
        para="Placeholder description for About Us."
        button="Talk to our Team"
      />
      <Evolved />
      <Bussiness 
        header="Business Component Header" 
        bs={bussinessData} 
      />
      <ToolsAndTech 
        header="Tools & Tech" 
        tools={toolsData} 
      />
      <Process 
        header="Our Process" 
        steps={processSteps} 
      />
      <MetricsCarousel 
        header="Metrics & Results" 
        data={metricsData} 
      />
      <WhyChoose 
        header="Why Choose Us" 
        features={highlightsData} 
      />
      <Industries 
        header="Industries We Serve" 
        data={industriesData} 
      />
      <MobileApp 
        header="Mobile App" 
        cards={mobileAppCards} 
      />
      <SuccessStories />
      <WebDesignCTA />
      <Testimonials 
        header="Testimonials" 
        test={testimonialsData} 
      />
      <Faq 
        header="Frequently Asked Questions" 
        faqs={faqsData} 
      />
      <ContactUs 
        img="/services/web-design/ccta.webp"
        pathname="Social Media Marketing"
        header="Ready to Grow Your Social Media?"
        para="Contact us today to start your project."
        btn="Get Free Consultation"
      />
    </div>
  );
};

export default SocialMediaMarketing;

"use client";
import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Challenges from "../ui/Challenges";
import Services from "../ui/Services";
import ToolsAndTech from "../ui/ToolsAndTech";
import Process from "../ui/Process";
import Bussiness from "../ui/Bussiness";
import Industries from "../ui/Industries";
import MobileApp from "../ui/MobileApp";
import SuccessStories from "../ui/SuccessStories";
import CenteredCTA from "../ui/CenteredCTA";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import { FiAlertTriangle, FiEye, FiFilter, FiTrendingUp, FiUsers, FiDollarSign, FiBarChart } from "react-icons/fi";

import {
  SiGoogleanalytics, SiGoogle, SiGoogleads, SiMeta, SiLinkedin,
  SiSemrush, SiHubspot, SiMailchimp, SiGoogletagmanager,
  SiPinterest
} from "react-icons/si";
import { FaChartLine, FaXTwitter, FaMicrosoft } from "react-icons/fa6";

const servicesData = [
  {
    title: "Search Engine Marketing (SEM)",
    description: "Our SEM strategies position your business at the top of search results. We use Google Ads and Bing Ads to capture high-intent traffic actively searching for your services.",
    icon: "ddd1", icon2: "ddd11"
  },
  {
    title: "Display Advertising",
    description: "Capture attention across the web with visually appealing display ads. We create compelling banners to increase brand awareness and re-engage past website visitors.",
    icon: "ddd2", icon2: "ddd22"
  },
  {
    title: "Social Media Advertising",
    description: "Reach your ideal customers on platforms where they spend the most time. We design highly targeted campaigns on Meta, LinkedIn, and Twitter to drive conversions.",
    icon: "ddd3", icon2: "ddd33"
  },
  {
    title: "Retargeting & Remarketing",
    description: "Don't let interested prospects slip away. Our retargeting campaigns bring back lost visitors by showing them tailored ads, significantly increasing your chances of conversion.",
    icon: "ddd4", icon2: "ddd44"
  },
  {
    title: "Video Advertising",
    description: "Engage your audience with powerful video content. We utilize YouTube Ads and social media video placements to tell your brand story and drive actionable results.",
    icon: "ddd5", icon2: "ddd55"
  }
];

const challengesData = [
  {
    num: "01",
    badge: "CHALLENGE",
    title: "Low ROI from Current Ad Spends",
    challengeDesc: "The return on investment doesn't justify your ad spend. You're putting money into campaigns but aren't seeing the profitable returns you expect.",
    solutionDesc: "We optimize your ad campaigns to lower acquisition costs while increasing conversion rates, ensuring every dollar spent delivers maximum value.",
    icon: FiAlertTriangle,
  },
  {
    num: "02",
    badge: "CHALLENGE",
    title: "Reaching the Wrong Audience",
    challengeDesc: "Your ads generate clicks but not from people interested in buying. This drains your budget on irrelevant traffic that will never convert.",
    solutionDesc: "We implement advanced targeting strategies to reach high-intent prospects based on demographics, behaviors, and search patterns.",
    icon: FiAlertTriangle,
  },
  {
    num: "03",
    badge: "CHALLENGE",
    title: "High Cost Per Click (CPC)",
    challengeDesc: "You are paying too much for every click, draining your budget quickly before you can achieve meaningful reach or results.",
    solutionDesc: "We refine keywords, improve ad relevance, and enhance ad copy to improve your Quality Score, effectively reducing your CPC.",
    icon: FiAlertTriangle,
  },
  {
    num: "04",
    badge: "CHALLENGE",
    title: "Ads Not Converting into Sales",
    challengeDesc: "People click on your ads but leave your landing page without taking action, resulting in high bounce rates and wasted ad spend.",
    solutionDesc: "We optimize your landing pages to ensure a seamless conversion process, aligning the ad message with a compelling offer and clear call-to-action.",
    icon: FiAlertTriangle,
  }
];

const toolsData = [
  { name: "Google Ads", icon: <SiGoogleads className="w-12 h-12 text-[#F4B400]" /> },
  { name: "Meta Ads Manager", icon: <SiMeta className="w-12 h-12 text-[#0668E1]" /> },
  { name: "LinkedIn Ads", icon: <SiLinkedin className="w-12 h-12 text-[#0A66C2]" /> },
  { name: "X Ads", icon: <FaXTwitter className="w-12 h-12 text-[#000000]" /> },
  { name: "Bing Ads", icon: <FaMicrosoft className="w-12 h-12 text-[#00A4EF]" /> },
  { name: "Pinterest Ads", icon: <SiPinterest className="w-12 h-12 text-[#E60023]" /> },
  { name: "Google Analytics 4", icon: <SiGoogleanalytics className="w-12 h-12 text-[#E37400]" /> },
  { name: "Google Tag Manager", icon: <SiGoogletagmanager className="w-12 h-12 text-[#246FDB]" /> }
];

const processSteps = [
  {
    step: "01",
    title: "Research & Strategy",
    desc: "We begin by analyzing your market, competitors, and target audience to build a customized paid advertising roadmap."
  },
  {
    step: "02",
    title: "Audience Targeting",
    desc: "Using advanced data insights, we pinpoint the exact demographics and behaviors of your most profitable customers."
  },
  {
    step: "03",
    title: "Ad Creation",
    desc: "Our creative team designs compelling visuals and writes persuasive copy tailored to resonate with your target audience."
  },
  {
    step: "04",
    title: "Campaign Setup",
    desc: "We configure your campaigns across the chosen platforms, ensuring proper tracking, budget allocation, and bidding strategies."
  },
  {
    step: "05",
    title: "A/B Testing",
    desc: "We continuously test different ad variations, headlines, and landing pages to determine what drives the highest conversions."
  },
  {
    step: "06",
    title: "Optimization & Reporting",
    desc: "We monitor performance daily, optimizing bids and targeting while providing you with transparent, easy-to-understand reports."
  }
];

const bussinessData = [
  {
    icon: "/services/web-design/1.webp",
    number: "01",
    title: "Customized Strategies",
    desc: "We don't believe in one-size-fits-all. Every campaign is custom-built around your unique business goals, budget, and target audience."
  },
  {
    icon: "/services/web-design/2.webp",
    number: "02",
    title: "Transparent Reporting",
    desc: "You'll always know exactly where your money is going. We provide clear, comprehensive reports showing your exact ROI and campaign performance."
  },
  {
    icon: "/services/web-design/3.webp",
    number: "03",
    title: "Experienced Team",
    desc: "Our certified media buyers have managed millions in ad spend across various industries, bringing proven expertise to your campaigns."
  },
  {
    icon: "/services/web-design/4.webp",
    number: "04",
    title: "Data-Driven Decisions",
    desc: "We remove the guesswork from advertising. Every optimization and budget shift is backed by hard data and performance metrics."
  },
  {
    icon: "/services/web-design/5.webp",
    number: "05",
    title: "Focus on ROI",
    desc: "Our primary metric is your profitability. We focus on generating high-quality leads and sales, not just empty clicks and impressions."
  }
];

const industriesData = [
  {
    title: "E-commerce",
    desc: "We drive high-intent shoppers to your store using Google Shopping and targeted social ads to maximize your return on ad spend."
  },
  {
    title: "Healthcare & Wellness",
    desc: "We help clinics and wellness brands attract new patients through compliant, geo-targeted search and display campaigns."
  },
  {
    title: "Real Estate",
    desc: "Generate qualified leads for your properties with precise audience targeting on Meta and Google Ads designed for real estate professionals."
  },
  {
    title: "Education & EdTech",
    desc: "Increase enrollments and course sign-ups with strategic campaigns that reach students and professionals actively seeking education."
  },
  {
    title: "B2B & SaaS",
    desc: "Fill your sales pipeline with high-quality B2B leads using LinkedIn Ads and targeted search campaigns aimed at decision-makers."
  },
  {
    title: "Local Services",
    desc: "Dominate your local market. We ensure your business appears at the top when nearby customers search for the services you provide."
  }
];

const mobileAppCards = [
  {
    title: "Fast Results",
    desc: "Unlike organic strategies that take months, paid advertising can place your business in front of potential customers and generate leads almost immediately.",
    icon: <FiTrendingUp size={25} />
  },
  {
    title: "Targeted Reach",
    desc: "Gain the ability to target users based on specific demographics, interests, locations, and even their exact search queries.",
    icon: <FiFilter size={25} />
  },
  {
    title: "Scalability",
    desc: "Once a profitable campaign is established, you can easily scale your budget to proportionally increase your leads and sales volume.",
    icon: <FiBarChart size={25} />
  },
  {
    title: "Measurable Performance",
    desc: "Track every click, conversion, and dollar spent. Paid ads offer unparalleled tracking, allowing you to clearly measure your exact return on investment.",
    icon: <FiDollarSign size={25} />
  }
];

const faqData = [
  {
    id: "1",
    question: "How much should I spend on paid ads?",
    answer: "Your ideal ad budget depends on your industry, competition, and revenue goals. We typically recommend starting with a budget that allows for sufficient data collection, usually starting around $1,500 to $3,000 per month for local or niche businesses, and scaling up once we establish a profitable ROI."
  },
  {
    id: "2",
    question: "How long does it take to see results?",
    answer: "One of the biggest advantages of paid advertising is speed. You can start seeing traffic and leads within 24 to 48 hours of launching a campaign. However, the campaign optimization phase usually takes 2-4 weeks to gather enough data to lower your cost-per-acquisition and maximize profitability."
  },
  {
    id: "3",
    question: "Do you guarantee a certain ROI?",
    answer: "While no reputable agency can guarantee specific financial returns due to market variables outside our control (like your sales team's closing rate or product pricing), we do guarantee that we will apply proven, data-driven strategies to maximize your conversions and optimize your ad spend for the best possible ROI."
  },
  {
    id: "4",
    question: "What platforms are best for my business?",
    answer: "It depends on your target audience and goals. B2B companies often see the best results on LinkedIn and Google Search. E-commerce brands typically thrive on Meta (Facebook/Instagram) and Google Shopping. During our initial consultation, we'll analyze your business and recommend the platforms with the highest potential for your specific needs."
  },
  {
    id: "5",
    question: "Will you provide regular performance reports?",
    answer: "Yes, transparency is one of our core values. We provide detailed, easy-to-understand reports on a monthly basis (or bi-weekly if preferred). These reports cover all key metrics including spend, cost-per-click, conversion rates, and overall ROI, along with our strategic recommendations for the next phase."
  }
];

const testimonialsData = [
  {
    review: "Dignite Studios improved our entire online visibility. While offering a strategy that delivered measurable results.",
    name: "Michael Turner",
    designation: "Marketing Director, Elevate Financial Group"
  },
  {
    review: "We didn’t expect such amazing professionalism but their team took the time to literally analyze our needs and build the campaigns we needed.",
    name: "Sophia Richard",
    designation: "CEO, Lumina Wellness Clinic"
  },
  {
    review: "We literally saw major improvements in website traffic. Not just that but the overall marketing performance within just a few months.",
    name: "Daniel Carter",
    designation: "Head of Growth, NexusTech Solutions"
  },
  {
    review: "Professional and responsive. Dignite Studios honestly became a valuable extension of our marketing team.",
    name: "Olivia Reynolds",
    designation: "Operations Manager, Crestview Real Estate"
  },
  {
    review: "Their approaches and workflow gave us complete visibility into performance. While helping us achieve a stronger return on investment.",
    name: "Ethan Mitchell",
    designation: "Managing Partner, Horizon E-Commerce Group"
  }
];

const PaidAdsServices = () => {
  return (
    <div className="max-w-screen-2xl mx-auto gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About heading={"Pais"} para={"asdasd"} />
      {/* Challenges Section */}
      <Challenges
        header="Common Paid Advertising Challenges Businesses Face"
        para="Many businesses struggle to see a positive return from their ad campaigns. We identify and solve the issues that are holding your performance back."
        items={challengesData}
      />

      {/* Services Section */}
      <div className="w-full relative z-20 flex flex-col items-center justify-center">
        <Services
          header="Paid Advertising Services We Offer"
          para="Our comprehensive paid advertising solutions are designed to cover every touchpoint of your customer's journey, from awareness to conversion."
          services={servicesData}
        />
      </div>

      {/* Tools Section */}
      <div className="w-full mt-20 sm:mt-0">
        <ToolsAndTech
          header="Advertising Platforms & Tools We Use"
          subtitle="We leverage the industry's most powerful platforms and analytics tools to manage, optimize, and scale your advertising campaigns."
          tools={toolsData}
        />
      </div>

      {/* Process Section */}
      <Process
        header="Proven Paid Advertising Process"
        para="We follow a systematic, data-backed methodology to launch and manage campaigns that consistently deliver high-quality leads and sales."
        steps={processSteps}
      />

      {/* Why Choose Us Section */}
      <div className="mt-20 lg:mt-0">
        <Bussiness
          header={<>Why Choose <span className="text-[#F15C20]">Dignite Studios</span></>}
          para="Partner with an agency that prioritizes your profitability. We combine strategic expertise with transparent execution to drive real business growth."
          bs={bussinessData}
        />
      </div>

      {/* Industries Section */}
      <Industries
        header="Paid Advertising Solutions Across Industries"
        para="We have successfully managed profitable ad campaigns for a wide range of industries, adapting our strategies to overcome unique market challenges."
        VALUE_PROPOSITION={industriesData}
      />

      {/* Benefits Section */}
      <MobileApp
        header="Benefits of Paid Advertising"
        para="Investing in professional paid advertising management offers significant advantages that can rapidly accelerate your business growth."
        cards={mobileAppCards}
      />

      {/* Success Stories Section */}
      <SuccessStories
        header="Paid Advertising Case Studies"
      />

      {/* CTA Section */}
      <CenteredCTA
        title={<>Ready to Supercharge <span className="text-[#F15C20]">Your Ad Campaigns?</span></>}
        desc="Stop wasting money on ads that don't convert. Let our experts build a strategy that turns clicks into profitable customers."
        btnText="Schedule a Consultation"
        btnLink="/contact-us"
        image="/services/digital/cta.webp"
      />

      {/* Testimonials Section */}
      <Testimonials
        header="What Clients Say About Our Advertising Services"
        test={testimonialsData}
        button="Schedule a Consultation"
      />

      {/* FAQs Section */}
      <Faq
        header="FAQs"
        faqs={faqData}
      />


      <ContactUs
        img="/services/ads/ccta.webp"
        pathname="Paid Advertising Services"
        header="Let’s Grow Your Business Together!"
        para="Ready to maximize your advertising ROI? Contact Dignite Studios today for a free campaign audit and custom strategy session."
        btn="Get a Free Consultation"
      />
    </div>
  );
};

export default PaidAdsServices;

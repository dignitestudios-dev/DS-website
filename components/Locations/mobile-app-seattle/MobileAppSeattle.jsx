import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "../ui/Services";
import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import { MdArrowOutward } from "react-icons/md";
import Industries from "../ui/Industries";
import TechAndTools from "../ui/TechTools";
import Process from "../ui/Process";
import MobileApp from "../ui/MobileApp";
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { IoGrid, IoWalletOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import SuccessStories from "../ui/SuccessStories";
import CTA from "./CTA";
import SEO from "../ui/SEO";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";

const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "iOS App Development",
    description: (
      <>
        Our mobile app development company Seattle delivers the custom iOS
        applications which are built for performance, security and the smooth
        user experiences. We also develop the scalable solutions made for the
        startups enterprises, healthcare, fintech and the other industries.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        Our experienced mobile app developer seattle build for the Android
        applications optimized according to the speed usability and device
        compatibility. We also make sure to have stable performance, fluent
        navigation and also flexibility to support the future enhancements.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Cross Platform",
    description: (
      <>
        As one of the leading mobile app development companies in Seattle, we
        also create cross platform and hybrid applications by using the single
        codebase. This approach can ensure faster delivery, cost efficiency and
        the consistent functionality across many platforms.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Native App Development",
    description: (
      <>
        Our mobile app development companies Seattle focus on building native
        and the progressive applications through the advanced features, smooth
        performance and the strong security standards tailored to the business
        needs.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "UI/UX Design Services",
    description: (
      <>
        Our design services focus on intuitive navigation and clean interfaces.
        Designed by experienced mobile app developers Seattle, these user
        friendly experiences improve engagement and long term retention.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Support, Testing & Maintenance",
    description: (
      <>
        We provide app testing and QA services, app support and maintenance
        services, and consulting by the experienced mobile app developers
        Seattle to ensure your application remains stable, and well maintained
        after launch.
      </>
    ),
  },
];

const highlights = [
  {
    title: "100% custom mobile app development services",
    desc: "Built to match the exact business needs",
  },
  {
    title:
      "Expert teams for the iOS, Android and cross platform app development",
    desc: "Experts dedicated to every major platform",
  },
  {
    title: "24/7 technical support and the ongoing maintenance",
    desc: "We support your app anytime, everyday",
  },
  {
    title: "200+ professional technologists experts",
    desc: "Skilled professionals powering your app success",
  },
  {
    title: "Flexible engagements and the hiring models",
    desc: "Choose plans which fit your goals",
  },
  {
    title: "Transparent app development process end to end",
    desc: "Clear communication at every development stage",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Industry",
    desc: "For the healthcare providers, our app development Seattle services which focus on building HIPAA compliant solutions which protect patient data and improve the care delivery. From the telemedicine platforms to the patient portals, we also create the app which ensures the secure communication, easy scheduling and the efficient record management for the clinics and the hospitals.",
  },
  {
    title: "E-commerce Industry",
    desc: "Our mobile application development Seattle expertise helps the businesses design e-commerce apps which boost the customer engagement and sales. We also focus on smooth experiences, secure payment gateways and instinctive product management tools which help brands to scale online and also improve retention.",
  },
  {
    title: "Real Estate Industry",
    desc: "We also provide the real estate companies through the advanced solutions by custom mobile app development services in Seattle. Our apps also include the property listings, virtual tours and the agent dashboard, which enable faster property research , efficient client communication through better decision making for the agencies and the brokers.",
  },
  {
    title: "Education & E learning Apps",
    desc: "As the part of the mobile app development company in Seattle offerings, we also create the interactive e-learning platforms and the education apps. Such solutions support the online courses, virtual classrooms and the student progress tracking, delivering engaging and also the scalable learning experiences for the schools, colleges and training centers.",
  },
  {
    title: "Matchmaking & Dating App Development",
    desc: "We develop secure matchmaking and dating apps through the smart matching logic, real time chat and the privacy focused features as our app development Seattle services to deliver engaging user experiences.",
  },
];

const test = [
  {
    name: "Michael Thompson",
    designation: "— CFO, GreenBank Fintech",
    review:
      "“Dignite Studios developed our fintech app quickly and efficiently. The results exceeded expectations and ROI was excellent”",
  },
  {
    name: "Sarah Collins",
    designation: "— Product Manager, EduLearn Platforms",
    review:
      "“The team was professional and responsive. Our app launch went quite smoothly and exceeded our standard of quality”",
  },
  {
    name: "David Reynolds",
    designation: "— CEO, ShopSmart Retail",
    review:
      "“Dependable and talented developers that completely understood our requirements. One of the best mobile app developers in Seattle.”",
  },
];

const BENEFITS = [
  {
    title: "Stronger Customer Engagement",
    desc: "Enhance customer engagement and ownership by partnering with the leading mobile app development companies in Seattle, making sure that your app delivers a smooth experience.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility Growth",
    desc: "Increase brand visibility and user loyalty by leveraging expert app development in Seattle, creating the engaging experiences which keep your users coming back.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Mobile Revenue Growth",
    desc: "Drive revenue through subscriptions or mobile sales",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Real Time User Insights",
    desc: "Access real time analytics to gain a user experience",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Seattle Market Advantage",
    desc: "Gain a competitive advantage in the Seattle market with the strategic app development Seattle which helps your business stand out and outperform the local competitors.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How do you handle iOS and Android app development?",
    answer:
      "We develop apps for iOS and Android using the native and cross platform technologies as a part of our mobile app development Seattle done according to the needs of your projects, budget and performance goals.",
  },
  {
    id: 2,
    question:
      "How much does it actually cost to develop the custom mobile app?",
    answer:
      "The cost of an app depends on the features, design, platform and complexity. We provide the clear estimates after understanding requirements as part of our custom mobile app development services Seattle",
  },
  {
    id: 3,
    question: "How long does mobile app development take?",
    answer:
      "Development timelines vary, but projects handled through a mobile app development company seattle typically take 3-6 months depending on the scope and the testing needs.",
  },
  {
    id: 4,
    question: "Do you offer post-launch support?",
    answer:
      "Yes, our mobile app development company Seattle delivers the ongoing app support and the maintenance which ensures that the app runs quite smoothly over the time.",
  },
  {
    id: 5,
    question: "Can you help refine my app idea?",
    answer:
      "Absolutely. Our team helps shape the custom mobile app development services Seattle strategy before development even begins.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We begin by understanding your business goals, target users and the development strategy as a part of our mobile app development Seattle approach to define the clear requirements and KPIs.",
  },
  {
    step: "02",
    title: "UI/UX Prototyping",
    desc: "Our designers create the intuitive wireframes and prototypes which focus on the usability, accessibility and the user flow, as part of the sprint planning for app development process before the development begins.",
  },
  {
    step: "03",
    title: "Agile Development & Sprints",
    desc: "Using an agile development approach, our team delivers weekly updates while developing apps is structured sprints, providing expert mobile application development Seattle",
  },
  {
    step: "04",
    title: "QA Testing",
    desc: "Each app undergoes the comprehensive testing and QA to guarantee performance, security and its compatibility all over the devices",
  },
  {
    step: "05",
    title: "App Launch & Deployment",
    desc: "We manage app launch and Deployment for the App Store and Google Play, ensuring the smooth approvals and release.",
  },
  {
    step: "06",
    title: "Post Launch Support",
    desc: "In post launch we provide the updates, monitoring and growth optimization as a part of our mobile application development Seattle services, making sure that your app is competitive.",
  },
];

const locations = [
  {
    id: 1,
    title: "Downtown Seattle",
    heading: "Mobile App Development Downtown Seattle",
    description:
      "Strategic app development in Seattle's business core to help startups stand out and outperform local competitors.",
    pinPercent: { x: 50, y: 50 },
    cardPercent: { x: 50, y: 20 },
    direction: "up",
    cardPosition: { top: "15%", left: "45%" },
  },
];

const MobileAppSeattle = () => {
  return (
    <div className="max-w-screen-2xl w-full h-auto flex flex-col justify-start mx-auto overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="About"
        heading2={"Dignite Studios"}
        para="Dignite Studios is the professional mobile app development company in Seattle specializing in custom mobile solutions for businesses across many industries. As one of the trusted mobile app development companies Seattle we bring years of experience in the Seattle market and understand local business needs, user behavior and growth. Our team also focuses on building high performance, scalable mobile applications which support the long term success. Skilled developers, UI/UX designers and the project managers which work together to deliver the best apps which are easily reliable, secure and quite easy to use. Every project is handled through transparency, clear communication and the results oriented method. "
        button="Talk to our Seattle based mobile app development team"
      />
      <Services
        services={services}
        header={"Mobile App Development Services"}
        header2={"In Seattle"}
        para={
          "As a trusted provider of mobile app development Seattle, we also offer end to end mobile solutions which are designed to help the startups, SMBs and enterprises build scalable and high performance applications. Our services cover the strategy, design, development, testing and long term support making sure that app aligns to the real business needs and the user expectation in the Seattle market."
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why Choose"}
        header2={"Dignite Studios"}
        ctaHeader={
          "Powering the Scalable Apps Through The app development Seattle"
        }
        ctaPara={
          "From the strategy and design to the development and deployment, Dignite Studios helps the Seattle businesses build the powerful mobile apps to engage the users and to support the long term growth."
        }
        ctaBtn={"Hire Mobile App Developers in Seattle"}
        cta={
          <div className="bg-transparent h-[500px] hover:scale-105 z-50 absolute text-white   opacity-100  transition-all ease-linear  w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  from-[#f15b20] to-[#FF8F62]">
            <div className="relative">
              <img
                src="/location/mobile-seattle/b-cta.png"
                className="w-full rounded-b-2xl bottom-3 relative bg-cover"
                alt="lggg"
              />
              <div className="md:w-[45%] absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center text-center">
                <h1 className="text-[45px] font-bold text-white leading-[45px]">
                  Powering the Scalable Apps Through The app development Seattle
                </h1>
                <p>
                  From the strategy and design to the development and
                  deployment, Dignite Studios helps the Seattle businesses build
                  the powerful mobile apps to engage the users and to support
                  the long term growth.
                </p>
                <div className="flex items-center group justify-center ">
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Hire Mobile App Developers in Seattle
                  </button>
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                    <MdArrowOutward />
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
        para={
          "A mobile app strengths the engagement, increases revenue and also gives businesses the competitive edge through the reliable mobile app development Seattle solutions."
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industry specific"}
        header2={"Mobile App Development Seattle"}
        para={
          "We deliver secure, scalable and industry ready mobile applications and our mobile app developers Seattle adapt each product to the business goals, compliance needs and the user expectation across many sectors."
        }
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Mobile App Development Process"}
        header2={"Step by Step Mobile App Development Seattle Process"}
        para={
          "Our structured process ensures efficient, high-quality mobile app development in Seattle from the strategy to the post launch support."
        }
      />
      <MobileApp
        header={"Benefits Of Having a"}
        header2={"Mobile App"}
        para={
          "A mobile app helps Seattle businesses build stronger customer relationships, increase visibility, drive revenue and stay competitive in fast moving markets. "
        }
        cards={BENEFITS}
      />
      <SuccessStories
        header={"Case Studies of"}
        header2={"Mobile App Development in Seattle"}
        para={
          "Real results from our Seattle mobile app development services show how Dignite Studios helps businesses solve the challenges of building scalable apps to attain the required results for the growth spike across the industries."
        }
      />
      <CTA
        header={"Ready to Build Your Mobile App?"}
        para={
          "Are you planning to create a powerful mobile app with top mobile app developers in Seattle? Connect with our dedicated team? Collaborate with our tech experts to develop a detailed project plan."
        }
        btn={"Get a Project Estimate"}
      />
      <TechAndTools
        header={"Tools & Technologies We Use"}
        para={
          "We use the modern tools and platforms to deliver the reliable scalable solutions through the professional mobile app development Seattle expertise."
        }
      />
      {/* <SEO
        header={"Mobile App development Across Seattle"}
        para={
          "We offer the Seattle Mobile app Development Services across key business hubs including downtown Seattle, tech corridors and nearby innovation districts. Our local presence allows close collaboration, faster communication and better alignment with business goals."
        }
        // locations={locations}
      /> */}
      <Testimonials
        test={test}
        header={"Testimonials for"}
        header2={"Mobile App Development in Seattle"}
        para={
          "Our Seattle clients Dignite Studios for delivering high quality mobile apps on time through the measurable results and the smooth project execution."
        }
      />
      <Faq faqs={faqs} />
      <ContactUs
        pathname={"Mobile Dev in Seattle"}
        header={"Start Your App Project Today"}
        img={"/location/mobile-seattle/c-img.png"}
        header2={""}
        para={
          "Have an idea and need guidance on cost to create a mobile application? Our team offers the budget friendly mobile app development services in Seattle through our clear timelines and transparent pricing. "
        }
        btn={"Get a Free Project Estimate"}
      />
      {/*     <Bussiness />
     <Industries />
      <Process />
    <MobileApp />
      <SuccessStories />
   <CTA />
          <TechAndTools />
       <SEO />
      <Testimonials />
      <ContactUs />
      <Faq />  */}
    </div>
  );
};

export default MobileAppSeattle;

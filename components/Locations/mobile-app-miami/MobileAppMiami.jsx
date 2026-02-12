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
        We deliver iOS app development using Swift and SwiftUI. Our team builds
        secure and high performance apps. These apps are ideal for the
        healthcare, fintech and enterprise platforms.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        Our android app development services focus on speed and stability. We
        also use Kotlin and Java for reliable performance.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Cross Platform App Development",
    description: (
      <>
        We create efficient cross platform apps by using the single shared
        codebase. This approach reduces cost and time to market. It also ensures
        consistent performance across various platforms.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Native and Web App Development",
    description: (
      <>
        Our native app development services deliver reliable and scalable
        solutions. We also build custom web applications for business needs.
        Each solution is designed for performance and long term use.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "UI/UX Design Services",
    description: (
      <>
        Our mobile app design services focus on the clarity and usability. We
        design simple effortless user journeys.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance, Testing and Consulting",
    description: (
      <>
        We offer mobile app consulting services from idea validation to launch.
        Our support includes testing, improvements and the long term
        maintenance. This ensures smooth performance after release.
      </>
    ),
  },
];

const highlights = [
  {
    title: "100 percent custom mobile app development Miami",
    desc: "We build fully automation mobile apps which match your business goals, users and the long term growth.",
  },
  {
    title: "Specialized engineering teams for mobile app development Miami",
    desc: "The expert engineers focus on the performance, security and scalability across every platform and the device type.",
  },
  {
    title: "24 by 7 technical support",
    desc: "Our support team is always available for 24 hrs to solve your issues regarding your app and let it run smoothly.",
  },
  {
    title: "200 plus skilled developers",
    desc: "A large team which have experienced the developers delivers the reliable, high quality solutions for the projects of any size.",
  },
  {
    title: "Flexible engagement models for apps in Miami",
    desc: "Choose engagement options which fit your budget, timeline and development needs without any of the unnecessary limitations.",
  },
  {
    title: "Clear and transparent workflow",
    desc: "We follow the structured process with open communication, giving full visibility at every development stage.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Industry",
    desc: "As a healthcare app development company, we build secure mobile solutions for the healthcare providers. Our apps support patient access, data protection and the compliance requirements.",
  },
  {
    title: "Fintech Industry",
    desc: "We deliver fintech app development services which are focused on the security and reliability driven platforms.",
  },
  {
    title: "Ecommerce",
    desc: "As an ecommerce app development company, we also create mobile shopping experiences that convert. Our apps support smooth browsing, secure payments and scalable growth.",
  },
  {
    title: "Real Estate Industry",
    desc: "As a real estate app development company, we develop apps for the property listings and the virtual tours. Our solutions also include tools for the agents and brokers.",
  },
  {
    title: "Education and Logistics Apps",
    desc: "We are an e-learning app development company building interactive education platforms. We also develop logistics solutions which support tracking, operations and the workflow efficiency.",
  },
];

const test = [
  {
    name: "Michael Harris",
    designation: "— Product Director",
    review:
      "“Dignite Studios delivered our fintech app ahead of schedule and ROI exceeded expectations”",
  },
  {
    name: "Emily Carter",
    designation: "— Operations Manager",
    review:
      "“Professional communication and smooth delivery from the planning to launch”",
  },
  {
    name: "Daniel Roberts",
    designation: "— Founder",
    review: "“One of the best development partners we've ever worked with”",
  },
];

const BENEFITS = [
  {
    title: "Boost customer engagement and retention",
    desc: "Create interactive app experiences which keep users active, satisfied and returning your product regularly.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Increase the brand visibility and loyalty",
    desc: "Strengthen your brand presence while building long term trust and loyalty among the mobile app users.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Drive revenue through the mobile sales",
    desc: "Turn the mobile users into paying customers through the smooth checkout flows and also the conversion focused app features.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Improve experience using Analytics",
    desc: "Using the real user data to refine the features, fix issues faster and improve the overall app performance.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Stay competitive scalable apps",
    desc: "Build a flexible, future ready app which grow with your business and to outperform the market competitors quite easily.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "Do you build both iOS and Android apps in Miami?",
    answer:
      "Yes, iOS and Android apps are provided as part of the mobile app development in Miami services by using the native and cross platform technologies which are based on your goals and budget.",
  },
  {
    id: 2,
    question: "How long does mobile app development take?",
    answer:
      "Most of the projects take almost three to six months based on the app features and also the overall complexity.",
  },
  {
    id: 3,
    question: "Do you offer post launch support?",
    answer:
      "Yes, our app development Miami provides the ongoing maintenance, updates and the support after the launch.",
  },
  {
    id: 4,
    question: "Can you help refine my idea?",
    answer:
      "Yes. Our mobile app developers in Miami help refine the idea by planning features, strategy and budget before the development.",
  },
  {
    id: 5,
    question: "How much does mobile app development in Miami cost?",
    answer:
      "The cost depends on various features, platforms and scope. Our mobile app development team provides the next step after reviewing the requirements.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Strategy",
    desc: "We define goals, budgets, and features while planning apps for easy tracking and the long term scalability.",
  },
  {
    step: "02",
    title: "UI/UX Prototyping",
    desc: "Our designers create clear interfaces focused on usability and conversion before development begins.",
  },
  {
    step: "03",
    title: "Agile Development and Sprints",
    desc: "We follow sprint planning for app development with the weekly updates and controlled iterations.",
  },
  {
    step: "04",
    title: "QA Testing",
    desc: "Dedicated teams perform the quality checks aligned with the mobile app development process steps.",
  },
  {
    step: "05",
    title: "App Launch and Deployment",
    desc: "Apps are launched on the App Store and Google Play with full compliance.",
  },
  {
    step: "06",
    title: "Post Launch Optimization",
    desc: "Ongoing updates support growth performance and retention.",
  },
];

const MobileAppMiami = () => {
  return (
    <div className="max-w-screen-2xl w-full flex flex-col mx-auto overflow-hidden">
      <Hero />
      <About
        heading="About Dignite"
        heading2={"Studios"}
        para="As a mobile app development company in Miami, we focus on performance driven apps built for long term scalability. Dignite studios works with the startups, the founded founders and established businesses. With the experience in mobile application development Miami, we understand the local business needs, user behaviour and growth challenges. Our developers, designers and project managers work together to build reliable, secure and easy to use apps. Every project follows a clear process through transparent communication and the measurable results."
        button="Talk to Our Miami Based App Development Team"
      />
      <Services
        services={services}
        header={"Mobile App Development Services In"}
        header2={"Miami"}
        para={
          "Our mobile application development Miami services cover the strategy design development testing and long term support."
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why Choose"}
        header2={"Dignite Studios"}
        ctaHeader={"Ready to Scale Your Miami Mobile App Development"}
        ctaPara={
          "Work with the trusted mobile app development company miami to build high performance apps which engage users, drive growth and deliver measurable business results."
        }
        ctaBtn={"Get Your Project Started"}
        cta={
          <div className="bg-black  overflow-hidden hover:scale-105 z-50 absolute text-white   opacity-100  transition-all ease-linear  w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  from-[#f15b20] to-[#FF8F62]">
            <div className="relative  overflow-hidden">
              <img
                src="/location/mobile-miami/b-cta.png"
                className="w-full h-[500px] rounded-b-2xl bottom-0 relative bg-cover"
                alt="lggg"
              />
              <div className="md:w-[45%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center text-center">
                <h1 className="text-[45px] font-bold text-white leading-[45px]">
                  Ready to Scale Your Miami Mobile App Development
                </h1>
                <p>
                  Work with the trusted mobile app development company miami to
                  build high performance apps which engage users, drive growth
                  and deliver measurable business results.
                </p>
                <Link
                  href={"/contact-us"}
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Get Your Project Started
                  </button>
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                    <MdArrowOutward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
        para={
          <>
            Clients choose our mobile app development company miami for
            transparency expertise and consistent delivery.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industry Focused Mobile App "}
        header2={"Solutions"}
        para={
          "Our Miami mobile app development expertise supports regulated and fast growing industries through scalable solutions."
        }
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Mobile App Development Process"}
        para={
          "Our Miami mobile app development process follows structured steps designed for speed clarity and measurable outcomes for every project."
        }
      />
      <MobileApp
        header={"Benefits of Having a Mobile "}
        header2={"App"}
        para={
          "Miami mobile app development helps businesses increase the engagement revenue visibility and the competitive advantage in the fast growing digital markets."
        }
        cards={BENEFITS}
      />
      <SuccessStories
        header={"Our Miami mobile app development results "}
        header2={"show how strategy and execution drive measurable business growth."}
      />
      <CTA />
      <TechAndTools
        header={"Tools and Technologies We Use"}
        para={
          "Our technology stack supports scalable mobile application development Miami projects through the proven frameworks."
        }
      />
      <SEO
        header={"Serving Businesses Across Miami"}
        para={
          "We provide app development Miami services with the local availability and the faster collaboration. We support the mobile app developers in Miami by helping startups, enterprises and growing brands to build successful apps."
        }
      />
      <Testimonials
        test={test}
        header={"Recognized and Trusted for Miami Mobile App Development"}
        header2={""}
        para={
          "Our expertise in mobile app development Company Miami and app development Miami is also trusted across many verified platforms for consistent quality delivery. DigniteStudios is recognized for reliable work professional delivery and long term client partnerships built on being consistent."
        }
      />
      <Faq faqs={faqs} />
      <ContactUs
        img={"/location/mobile-boston/c-img.png"}
        pathname={"Mobile Dev in Miami"}
        header={"Ready to Build Your Mobile App"}
        header2={""}
        para={
          "Have an idea and need expert guidance. Connect with our team and move from concept to launch with confidence."
        }
        btn={"Request a Free Consultation"}
      />
    </div>
  );
};

export default MobileAppMiami;

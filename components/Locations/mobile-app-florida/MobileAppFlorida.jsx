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
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";

const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "iOS App Development",
    description:
      "The iOS app development team in Florida develops scalable applications for iPhone and iPad while keeping a strong focus on performance, usability and a smooth user experience.",
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description:
      "You can now reach your Android audience with an app that’s built for your business needs. Our Android app development services cover the entire development journey.",
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Hybrid App Development",
    description:
      "Hybrid app development could be a practical way to reach a much wider audience while keeping development a lot more smooth. So our team builds hybrid applications that work on different platforms.",
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Custom Solutions / Native & Web Apps",
    description:
      "Sometimes your project might need more than just a standard mobile application. So, we build custom native and web applications for your specific business processes, features and users.",
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "Design Services",
    description:
      "Our Mobile App Design Services in Florida focus on creating clear interfaces that make it easy for people to find what they need and complete tasks without confusion.",
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance, Consulting & Testing",
    description:
      "Our team provides app testing, consulting and maintenance to keep your product secure, reliable and updated. We can identify issues before they affect users and plan future updates.",
  },
];

const highlights = [
  {
    title: "10+ Years of App Development",
    desc: "We've worked on projects across different technologies and project types with over 10 years of experience in app development.",
  },
  {
    title: "Industry Wide Experience",
    desc: "We have worked on 100+ projects of different industries such as healthcare, ecommerce, real estate, education, finance, entertainment and more.",
  },
  {
    title: "Dedicated Project Managers",
    desc: "Dignite Studios’ project manager works closely with you to track progress, coordinate tasks, manage feedback and keep everyone aligned.",
  },
  {
    title: "Transparent Process",
    desc: "Through our transparent process, you get visibility into project requirements, timelines, development progress, feedback and next steps throughout the engagement.",
  },
  {
    title: "Post Launch Support",
    desc: "Our team can continue supporting your application with maintenance, updates, bug fixes, performance improvements and new features once your application is live.",
  },
  {
    title: "Custom Solutions",
    desc: "Standard solution may not always be the right fit because each business has its own processes, goals and users so we develop custom applications based on your specific requirements.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Ecommerce & Retail",
    desc: "Dignite Studios develop apps ecommerce and retail apps. These apps make it easier for customers to browse products, place orders and make payments with your brand.",
  },
  {
    title: "Healthcare",
    desc: "We understand that healthcare apps need to make information and services easier to access. So we keep the user experience clear and reliable built around user needs.",
  },
  {
    title: "Real Estate",
    desc: "Real estate apps that we build make property discovery, communication and management more convenient. The features are designed around property listings, searches and user interactions.",
  },
  {
    title: "Dating Apps",
    desc: "Dignite Studios build dating apps that create engaging experience that encourages users to connect with features such as user profiles, matching and messaging.",
  },
];

const test = [
  {
    name: "Jason Miller",
    designation: "— Founder, FinEdge NYC",
    review:
      "“Dignite Studios helped us launch our mobile app ahead of schedule, and the ROI exceeded expectations within the first few months. Their New York mobile app development team understood our market and delivered with precision.”",
  },
  {
    name: "Amanda Lopez",
    designation: "— Product Lead, UrbanCart",
    review:
      "“What impressed us most was the speed and structure. The mobile app was delivered fast without cutting corners. Clear communication, weekly updates, and zero surprises throughout the process.”",
  },
  {
    name: "Daniel Roberts",
    designation: "— CTO, HealthBridge Solutions",
    review:
      "“Working with Dignite Studios was an amazing experience to be honest. It felt like having our own app team right here in New York. They were super professional, easy to work with, and always on the same page.”",
  },
];

const BENEFITS = [
  {
    title: "Competition",
    desc: "A mobile app can offer your customers a convenient way to interact with your brand, access your services and stay connected in a saturated market.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
  {
    title: "Competitive Advantage",
    desc: "With a well designed mobile app, you can make key services easier to access and create a more convenient experience than businesses working only on traditional channels.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility",
    desc: "You can create a direct point of contact for your brand with customers. Your business can be visible with notifications, updates and regular interactions.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Generate Revenue",
    desc: "You can get new ways for your business to generate revenue through a mobile app. You can use an app to sell products or services depending on your business model.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Actionable Insights",
    desc: "You can get valuable insights about how customers interact with your business. You can understand user behavior, identify popular features and track engagement through a mobile app.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How long does it take to develop a mobile app in Florida?",
    answer:
      "The timeline actually depends on the features, design, integrations and overall complexity of your application. Basic Android App Development Florida might just take a few months while a more complex application with custom features and backend systems can take much longer. We first understand your requirements and define the project scope before we begin estimating the development timeline.",
  },
  {
    id: 2,
    question: "Can you develop an MVP first and scale it as your business grows?",
    answer:
      "Yes. Building an MVP first is a very practical way to validate your idea before investing in a much larger product. Dignite Studios can identify the core features your app needs for its first release and build the MVP accordingly. The app can be expanded with new features, integrations and capabilities as you learn more about your users.",
  },
  {
    id: 3,
    question: "Why choose a mobile app development company in Florida?",
    answer:
      "Choosing a mobile app development company in Florida can give your business access to experienced development teams that understand the needs of businesses operating in a diverse and competitive market. The right partner can help with strategy, design, development, testing, launch and ongoing support. Dignite Studios brings 10+ years of experience and 100+ completed projects across different industries to every app development project.",
  },
  {
    id: 4,
    question: "How much does Mobile App Development in Florida cost?",
    answer:
      "Mobile app development costs are different based on the type of app, number of features, design requirements, platforms, integrations and development approach. A simple app will generally require way less investment than a complex application with advanced functionality and custom backend systems. The best way to determine your cost is to define your requirements and get a project specific estimate.",
  },
  {
    id: 5,
    question: "What types of mobile apps can you develop?",
    answer:
      "Dignite Studios develops a wide range of Mobile App, being an experienced mobile application Development Company Florida based on different business and user requirements. This includes iOS apps, Android apps, hybrid and cross platform applications, custom business apps, ecommerce apps, healthcare apps, real estate apps, dating apps and more. We can also support projects with UI/UX design, testing, consulting, maintenance and post launch development.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Strategy",
    desc: "The process begin with the team learning about your target users, goals, key features and technical requirements before we start the development.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "Then we design the experience your users will have with the app. The design team work on user flows, wireframes, interfaces and interactions.",
  },
  {
    step: "03",
    title: "Development Stage",
    desc: "The developers create a working application from the planned experience  with the design and requirements in place in the next stage.",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "We put your app through thorough testing by QAs to identify issues and make sure everything works as expected before your app reaches users.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Then we prepare your app for the launch once the app has been tested and approved. The team handles all the technical requirements that are involved in deployment.",
  },
  {
    step: "06",
    title: "Post Launch Support",
    desc: "Once your app is launched, the team continues to support your application with maintenance, updates, bug fixes, performance improvements and new feature development.",
  },
];

const MobileAppFlorida = () => {
  return (
    <div className="max-w-screen-2xl w-full h-auto flex flex-col mx-auto overflow-hidden">
      <Hero />
      <About
        heading="Meet the Expert Mobile App Developers In"
        heading2={"Florida"}
        para="Dignite Studios is a Mobile App Development Company in Florida with over a decade of experience. We have worked with startups, established businesses and enterprises while building scalable digital products. 
We have successfully worked on 100+ projects across a wide range of industries over the years including healthcare, ecommerce, real estate, education, fintech, entertainment and more. Working with businesses from different sectors has given our team the experience to understand unique market demands and create solutions that are practical.
Every project begins with understanding your business, your users and your goals at Dignite Studios. We believe the best mobile apps are built through collaboration, strategic thinking and a commitment to quality at every stage of development. 
"
        button="Discuss Your Idea"
      />
      <Services
        services={services}
        header={"Mobile App Development Services In"}
        header2={"Florida"}
        para={
          "Explore our range of mobile app development services in Florida below and discover how our team can create solutions for your business that engage your users and support long-term growth."
        }
        button="Explore Our Services"
      />
      <Bussiness
        bs={highlights}
        header={"Why We're a Trusted App Development Company in"}
        header2={"Florida"}
        ctaHeader={"Build Your Next App With Dignite Studios"}
        ctaPara={
          "Dignite Studios is a mobile app development partner in Florida working with startups, growing businesses and enterprises. We can build an app for your business in Florida. Tell us what you want to build and let's discuss how to take your project forward."
        }
        ctaBtn={"Let’s Discuss Your Idea"}
        cta={
          <div className=" h-[500px] hover:scale-105 z-50 absolute text-white  hover:shadow-[#f15b2071] opacity-100  transition ease-linear  w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  from-[#f15b20] to-[#FF8F62]">
            <div className="relative">
              <img
                src="/location/mobile-newyork/b-cta.webp"
                className="w-full rounded-b-2xl bg-[#000000] bottom-0 relative bg-cover"
                alt="lggg"
              />
              <div className="md:w-[45%] absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center text-center">
                <h2 className="text-[45px] font-bold text-white leading-[45px]">
                  Build Your Next App With Dignite Studios
                </h2>
                <p>
                  Dignite Studios is a mobile app development partner in Florida
                  working with startups, growing businesses and enterprises. We
                  can build an app for your business in Florida. Tell us what
                  you want to build and let's discuss how to take your project
                  forward.
                </p>
                <Link
                  href={"/contact-us"}
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Let’s Discuss Your Idea
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
          "When you're making an investment in an app, you want a team you can rely on throughout the journey. Dignite Studios has spent 10+ years building digital products and has delivered 100+ projects across different industries. See why businesses consider us the right choice for their project."
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Mobile App Solutions for Florida's Growing"}
        header2={"Industries"}
        para={
          "Dignite Studios has worked with businesses across a wide range of industries over the years. It has given us hands on experience with different business models and requirements. Explore the industries below to see our expertise."
        }
      />
      <Process
        steps={PROCESS_STEPS}
        button={"Discuss Your Project Idea"}
        header={"Our Step by Step"}
        header2={"App Development Process"}
        para={
          "At Dignite Studios we understand the basic requirements to understand your users, features and technical needs because the right workflow starts with understanding what your app actually needs. Explore our workflow below to see how we approach every project."
        }
      />
      <MobileApp
        header={"Why Your Business Needs Mobile App Development Services In"}
        header2={"Florida"}
        para={
          "The right App Development Company In Florida can play a major role of how your business connects with customers. A well planned app can give your business a much stronger position in a mobile first market. Here are some of the key benefits that a mobile app can offer for your business."
        }
        cards={BENEFITS}
      />
      <SuccessStories
        header={"Our Custom App Development Florida "}
        header2={"Success Stories"}
        para={
          "Dignite Studios has worked on a very wide range of digital products for different business needs and industries. The projects mentioned below show our experience. Explore our work to see the solutions we have built for our clients."
        }
      />
      <CTA />
      <TechAndTools header={"The Technology Stack for Florida Mobile App Development "} para={"We choose the technology stack based on your app’s features and users requirements. The developers work with a wide range of programming languages and frameworks for different types of projects. "} />

      <Testimonials
        test={test}
        header={"Hear From Our Florida"}
        header2={"Clients"}
        para={""}
      />
      <Faq header={<>Frequently Asked Questions About App Development <span className="text-[#F15C20]">Florida</span></>} faqs={faqs} />
      <ContactUs
        pathname={"Mobile Dev in Florida "}
        header={"Start Your App Journey with Our Florida Team "}
        img={"/location/mobile-newyork/c-img.webp"}
        header2={""}
        para={
          "Work with a team that understands your goals. Our Florida-based experts take care of development, design, and deployment so your product has a strong market presence. "
        }
        btn={"Schedule a Free Call"}
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

export default MobileAppFlorida;

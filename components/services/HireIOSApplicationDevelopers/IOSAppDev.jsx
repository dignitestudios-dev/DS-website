import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "./Services";
import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import { MdArrowOutward } from "react-icons/md";
import Industries from "../ui/Industries";
import TechAndTools from "../ui/TechTools";
import Process from "../ui/Process";
import MobileApp from "../ui/MobileApp";
import { FaJava, FaMicrosoft, FaPencilAlt, FaUser } from "react-icons/fa";
import { IoGrid, IoWalletOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import SuccessStories from "../ui/SuccessStories";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import TabularEcommerceTechs from "../ui/TabularTechs";
import {
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiFlutter,
  SiNextdotjs,
  SiNodedotjs,
  SiDjango,
  SiFirebase,
  SiLaravel,
  SiExpress,
  SiRubyonrails,
  SiIos,
  SiAndroid,
  SiWordpress,
  SiShopify,
  SiWebflow,
  SiBigcommerce,
  SiSquarespace,
  SiGooglecloud,
  SiDigitalocean,
  SiCloudinary,
  SiSwift,
  SiC,
  SiKotlin,
  SiPython,
  SiPhp,
  SiDotnet,
} from "react-icons/si";
import { FaAws, FaApple } from "react-icons/fa";
import Features from "../ui/Features";
import CTA from "./CTA";

import {
  FaMobileAlt,
  FaBolt,
  FaBell,
  FaShieldAlt,
  FaCloud,
  FaSyncAlt,
  FaCogs,
} from "react-icons/fa";
import { MdDevices, MdDesignServices, MdApi } from "react-icons/md";
import HiringProcess from "../ui/HiringProcess";
import TabularTechs from "../ui/TabularTechs";
import FlexibleHiring from "../ui/FlexibleHiring";
import WhyChoose from "../ui/WhyChoose";
const features = [
  {
    number: "01",
    title: "Experienced iOS App Developers",
    description:
      "Our developers have also proven expertise in building iOS applications. Many businesses choose our iOS mobile app development company for reliable and scalable solutions.",
  },
  {
    number: "02",
    title: "Flexible Hiring Models",
    description:
      "We provide adaptable hiring options. Businesses can easily hire iOS app developers based on project needs and budget.",
  },
  {
    number: "03",
    title: "Agile Development Process",
    description:
      "Our team follows the structured agile process. This ensures the efficiency and improved results in every iOS application development service.",
  },
  {
    number: "04",
    title: "Fast Onboarding",
    description:
      "Developers join projects quickly. This enables businesses to start iOS development without unnecessary delays.",
  },
  {
    number: "05",
    title: "Transparent Communication",
    description:
      "We maintain clear and consistent communication throughout our custom iOS app development services. Every step of the development process is shared with clients to keep them fully informed.",
  },
  {
    number: "06",
    title: "Secure NDA & IP Protection",
    description:
      "We protect your project data and ideas. Security and confidentiality are integrated into our development workflow.",
  },
];
const techData = {
  "iOS App Development": [
    { name: "Swift", icon: <SiSwift /> },
    { name: "Objective-C", icon: <SiC /> }, 
    { name: "Apple Ecosystem Apps", icon: <FaApple /> },
  ],

  "Android App Development": [
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Native Android Solutions", icon: <SiAndroid /> },
  ],

  "Cross Platform Development": [
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React Native", icon: <SiReact /> },
  ],

  "Backend Technologies": [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Ruby on Rails", icon: <SiRubyonrails /> },
    { name: "Google Firebase", icon: <SiFirebase /> },
  ],
};
const FEATURES = [
  {
    title: "User-Friendly Interface (UI/UX)",
    icon: <MdDesignServices size={50} color="#F15C20" />,
  },
  {
    title: "Cross-Platform Compatibility",
    icon: <MdDevices size={50} color="#F15C20" />,
  },
  {
    title: "Fast and Smooth Performance",
    icon: <FaBolt size={50} color="#F15C20" />,
  },
  {
    title: "Offline Functionality",
    icon: <FaMobileAlt size={50} color="#F15C20" />,
  },
  {
    title: "Push Notifications",
    icon: <FaBell size={50} color="#F15C20" />,
  },
  {
    title: "Strong Security Features",
    icon: <FaShieldAlt size={50} color="#F15C20" />,
  },
  {
    title: "Easy Integration with APIs",
    icon: <MdApi size={50} color="#F15C20" />,
  },
  {
    title: "Scalable Architecture",
    icon: <FaCogs size={50} color="#F15C20" />,
  },
  // {
  //   title: "Cloud Data Synchronization",
  //   icon: <FaCloud size={50} color="#F15C20" />,
  // },
  // {
  //   title: "Regular Updates & Maintenance",
  //   icon: <FaSyncAlt size={50} color="#F15C20" />,
  // },
];


const services = [
  {
    icon: "/location/mobile-california/icons/icon.webp",
    icon2: "/location/mobile-california/icons/icon4.webp",
    title: "Custom iOS App Development",
    description: (
      <>
        We create apps adapt according to your business goals. Our team delivers scalable custom iOS app development with secure and maintainable architecture for the long term growth. 
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/pen.webp",
    icon2: "/location/mobile-california/icons/pen5.webp",
    title: "UI/UX Design for iOS Apps",
    description: (
      <>
        We design simple and intuitive interfaces which improve usability, engage users effectively and ensure smooth interaction with iOS applications, helping businesses confidently hire iOS app developers.  
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/setting.webp",
    icon2: "/location/mobile-california/icons/setting2.webp",
    title: "Cross Platform App Development",
    description: (
      <>
        Our developers reduce expenses and speed project completion by using similar coding standards to construct cross platform applications. 
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/pipe.webp",
    icon2: "/location/mobile-california/icons/pipe3.webp",
    title: "App Testing & Quality Assurance",
    description: (
      <>
        We thoroughly test your iOS apps to ensure they work correctly, respond quickly and provide a goal user experience. 
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/database.webp",
    icon2: "/location/mobile-california/icons/database1.webp",
    title: "API & Backend Development",
    description: (
      <>
        We develop robust backend systems and APIs which ensure fast data processing, secure connections and the stable performance for every app. 
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/set.webp",
    icon2: "/location/mobile-california/icons/set1.webp",
    title: "App Maintenance & Support",
    description: (
      <>
        We provide ongoing maintenance and updates. Many businesses rely on a trusted iOS mobile app development company for the continuous improvements and smooth long term app operation. 
      </>
    ),
  },
];

const highlights = [
  {
    icon: "/services/ios-hire/1.webp",
    title: "Proven Development Expertise",
    desc: "Our developers have strong experience in building iOS apps with modern tools, ensuring reliable performance and scalable solutions.",
  },
  {
    icon: "/services/ios-hire/2.webp",
    title: "Transparent Communication",
    desc: "We maintain clear and simple communication at every stage so clients stay quite informed and confident throughout the development process.",
  },
  {
    icon: "/services/ios-hire/3.webp",
    title: "Agile Methodology",
    desc: "Our structured agile methodology increases productivity, expedites delivery and guarantees superior outcomes for each project.",
  },
  {
    icon: "/services/ios-hire/4.webp",
    title: "Scalable Teams",
    desc: "We provide flexible teams that can scale based on your project needs, ensuring smooth development without any delays or the limitations.",
  },
  {
    icon: "/services/ios-hire/5.webp",
    title: "On Time Delivery",
    desc: "Our team follows the clear timelines and delivers the projects on the schedule while maintaining the quality and the performance standards.",
  },
  {
    icon: "/services/ios-hire/6.webp",
    title: "Long Term Technical Support",
    desc: "We provide ongoing support and updates to ensure that your app runs smoothly and stays quite updates with changing business needs.",
  },
];
const VALUE_PROPOSITION = [
  {
    title: "Healthcare & Fitness",
    desc: "We build secure healthcare apps and fitness tracking solutions. These apps also help to manage patient data, monitor health and improve user engagement.",
  },
  {
    title: "Ecommerce",
    desc: "We develop Ecommerce apps which improve shopping experience, support secure payments and help businesses increase sales through the better user interaction.",
  },
  {
    title: "Real Estate",
    desc: "We create real estate apps for the property listings, virtual tours and easy management helping the users find and manage the properties efficiently.",
  },
  {
    title: "Education",
    desc: "We build education apps which support online learning, student engagement and content management with the simple and easy to use interfaces.",
  },
  {
    title: "Travel",
    desc: "We develop travel apps for booking, planning and managing trips. These apps improve the user experience with the smooth navigation and real time updates.",
  },
  {
    title: "Food Delivery",
    desc: "We create food delivery apps which support fast ordering, live tracking and smooth payment options, improving customer satisfaction and service efficiency.",
  },
];
const test = [
  {
    name: "Michael Carter",
    designation: "— Product Manager",
    review:
      "“The team Hire iOS app developer with clear communication and timely updates. The understood our requirements and built a high quality application that improved user experience and overall performance”",
  },
  {
    name: "Daniel Roberts",
    designation: "— CEO, Tech Solutions",
    review:
      "“We chose to use Dignite Studios hire iOS development service and it worked very well. Their team ensured smooth communication, high quality development service and development and delivered the project on time with reliable technical support ”",
  },
  {
    name: "James Wilson",
    designation: "— Founder, Ecommerce Brand",
    review:
      "“Their team handled our project professionally from start to finish. The app performance improved significantly, and their support helped us maintain smooth operations after the launch without any issues.”",
  },
  {
    name: "Olivia Benett",
    designation: "— Operations Manager",
    review:
      "“We needed a scalable solution and their team delivered it successfully. Their expertise in iOS development helped us build a secure and fast app for our growing business”",
  },
  {
    name: "Ethan Clark",
    designation: "— Startup Owner",
    review:
      "“The developers were skilled and easy to work with. They delivered the project on time and maintained quality at every stage. We are satisfied with both the results and support”",
  },
  {
    name: "Willian Scott",
    designation: "— CTO, Digital Agency",
    review:
      "“Their team provided strong technical support and clear communication. We noticed better performance and improved user engagement after working with their experienced developers”",
  },
];

const BENEFITS = [
  {
    title: "Customer Retention",
    desc: "It’s easier to enhance customer retention through hybrid applications by making your brand easily accessible.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility",
    desc: "When visibility is stronger, better connections with your audience are created, so stay in users’ minds with a branded app.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Increase Revenue",
    desc: "In-app purchases and mobile sales are the new ways to increase your revenue, which is only possible through a hybrid mobile app development service.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Actionable info",
    desc: "Using app analytics is an easier way to understand user behavior, resulting in making better business decisions in hybrid mobile app development service.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Competition",
    desc: "Having a hybrid mobile app built by the best hybrid app development company in USA makes your business competitive and more accessible in the market while giving you an edge.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How much does it cost to hire mobile app developers?",
    answer:
      "The cost depends on project complexity, features and developer experience. Simple apps cost less, while advanced apps require more budget. Businesses can hire iOS app developer using flexible models to control expenses and get reliable iOS services within their budget.",
  },
  {
    id: 2,
    question: "How long does it take onboard developers?",
    answer:
      "Onboarding developers is a quick process. In most cases, businesses can start working with a top iOS app development company within just a few days. The exact time depends on the project requirements, but our team also ensures fast onboarding so development can start without the delays.",
  },
  {
    id: 3,
    question: "Can I hire developers for the short term projects?",
    answer:
      "Yes, businesses can also hire iOS app developer for short term tasks or small updates. Our flexible hiring models and ios application development service make it easy to manage costs and complete projects quickly.",
  },
  {
    id: 4,
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we provide ongoing support after the app is launched. Our team helps with the updates, bug fixes and performance improvements to ensure your application runs quite smoothly and stays updated with the business requirements.",
  },
  {
    id: 5,
    question: "Can I scale the development team later?",
    answer:
      "Yes, you scale your team anytime based on your project needs. We provide the flexible options so you can add or reduce developers easily while continuing and smooth and efficient iOS development.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "We analyze your app idea, define the clear goals and plan features carefully to ensure the iOS development meets business objectives efficiently.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "We design user friendly and intuitive layouts that improve engagement, navigation and overall experience for your iOS applications.",
  },
  {
    step: "03",
    title: "App Development",
    desc: "Our developers build apps with the clean mode, modern tools and scalable architecture to deliver robust iOS development.",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    desc: "To carry out thorough testing in order to find issues, enhance performance and guarantee smooth operation across all iOS devices.",
  },
  {
    step: "05",
    title: "Deployment & Support",
    desc: "We launch apps to app stores and provide ongoing support for updates, maintenance and smooth long term performance.",
  },
];
const steps = [
  {
    title: "Project Vision",
    description:
      "We understand your project goals, requirements and expectations to create a clear roadmap for the successful iOS development.",
    icon: "/services/mob-hire/hire/1.webp",
  },
  {
    title: "Expert Consultation",
    description:
      "Our experts guide you with the right solutions, technology choices and planning to ensure efficient and scalable app development.",
    icon: "/services/mob-hire/hire/2.webp",
  },
  {
    title: "Hiring iOS App Developers",
    description:
      "Depending on the requirements of your project, we assist you in working with a leading iOS app development firm, guaranteeing the appropriate expertise",
    icon: "/services/mob-hire/hire/3.webp",
  },
  {
    title: "Developer Biography",
    description:
      "We share detailed developer profiles including skills, experience and past work to help you choose the best fit.",
    icon: "/services/mob-hire/hire/4.webp",
  },
  {
    title: "Meeting with the Developer",
    description:
      "You can interact directly with developers, discuss your project and finalize the team before the starting development.",
    icon: "/services/mob-hire/hire/5.webp",
  },
  {
    title: "Collaboration & Development",
    description:
      "Our team starts development with regular updates, clear communication and the structured process to ensure smooth project execution.",
    icon: "/services/mob-hire/hire/6.webp",
  },
];

const cards = [
  {
    title: "Dedicated Developer",
    desc: "Hire a full time iOS developer for long term projects. This option ensures continuous development and reliable iOS app developer with the scalable results.",
    icon: "/services/test.webp",
  },
  {
    title: "Hourly Hiring",
    desc: "Pay only for the hours worked. Best for the short term tasks, updates or the minor improvements in your iOS applications.",
    icon: "/services/sb.webp",
    illustration: "hourly",
  },
  {
    title: "Project Based Hiring",
    desc: "Hire developers for the fixed project scope with the set cost. Ensures timely delivery while maintaining the high quality iOS development standards.",
    icon: "/services/mob.webp",
    illustration: "project",
  },
];
const IOSAppDev = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="Introduction to Our iOS App "
        heading2={"Developer:"}
        para="For modern companies, iOS apps are quite crucial. To be competitive, businesses want dependable and quick apps. For modern firms, iOS apps are crucial. To be competitive, businesses want dependable and quick apps. Many prefer hiring experts instead of building in-house teams. The dignite Studios provides the iOS services for the startups and growing brands. We have over 10 years of experience in building iOS applications across any industries. Our team also works with Ecommerce, healthcare, fintech and more. As the trusted iOS mobile app development company, we help businesses reduce cost and improve development speed. Many companies choose to hire iOS app developers from us for flexible hiring and strong technical support. Our team ensures the smooth iOS development with the scalable architecture and better performance."
        button="Start Your iOS App Project"
      />

      <WhyChoose
        header={"Why Hire iOS Developers From"}
        header2={"Dignite Studios"}
        para="Dignite Studios offers the skilled developers for the reliable iOS app developer. We ensure fast Onboarding, clear communication and secure development. Businesses choose us for the scalable, high performance iOS apps which support growth and long term success."
        features={features}
      />
      <TabularTechs
        header={"Our iOS Development"}
        header2={"Expertise"}
        para={
          "Dignite Studios delivers the modern iOS app developer using the latest tools and frameworks. We create secure, fast and scalable applications across iOS, cross platform and backend technologies.Our team ensures the smooth performance, high quality coding and the fast integration for every project."
        }
        techData={techData}
        button={"Discover Our iOS Development Expertise"}
      />
      <Services
        services={services}
        header={"iOS App Developer We Offer"}
        header2={""}
        button={"Start Your iOS App Project"}
        para={
          "We provide complete iOS development services for businesses that want reliable scalable and high performance applications. Our team manages design, development, testing and ongoing support to deliver apps which enhance user experience and drive business growth."
        }
      />
      <FlexibleHiring
        cards={cards}
        header={"Our Flexible iOS Developer Hiring Models"}
        para={
          "We offer multiple hiring options to match your project needs. Businesses can rely on our iOS application development service through the dedicated, hourly or project based models for cost effective and efficient development."
        }
      />

      <Process
        steps={PROCESS_STEPS}
        header={"Our iOS App Development Process"}
        para={
          "We follow a structured and agile process to deliver high quality iOS app development cost. Each step ensures smooth execution, faster delivery and scalable applications for businesses."
        }
      />

      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industries We Serve"}
        header2={""}
        para={
          "We deliver reliable solutions while managing the iOS app development cost across multiple industries. Our team builds scalable and user friendly apps which meet business needs and enhance the performance in various markets."
        }
        button={"Explore iOS Solutions for Your Industry"}
      />
      <SuccessStories
        header={"Our iOS App Portfolio &"}
        header2={" Case Studies"}
        para={
          "We showcase real projects delivered through the iOS development services. Our portfolio highlights successful iOS applications built for different industries. Each project reflects strong performance, better user experience and scalable solutions which help businesses grow and achieve long term success."
        }
      />
      <Testimonials
        test={test}
        para={
          "Businesses trust us to deliver high quality iOS apps which meet their goals. Clients praise our development quality, communication and timely delivery. Here’s what they have to say about working with our team."
        }
        header={"What Our Clients Say About Our iOS"}
        header2={" App Developers"}
        button={"Get Free Consultation"}
      />
      <HiringProcess
        steps={steps}
        header={"Our iOS App Developer Hiring Process:"}
        para={
          "We follow a simple and structured process to help businesses collaborate with a top iOS app development Company quickly. Our approach ensures clear communication, fast onboarding and smooth collaboration for the successful iOS app developer."
        }
        button={"Start Hiring iOS Developers Today"}
      />
      {/* <MobileApp
        header={"Benefits of Having Your Hybrid  "}
        header2={"App"}
        para={
          <>
            There are several reasons why you should get your own app built from
            the best hybrid app development company in USA. .
          </>
        }
        cards={BENEFITS}
      /> */}
      <Bussiness
        bs={highlights}
        header={"Why Businesses Choose"}
        header2={"Dignite Studios"}
        ctaHeader={"Partner With iOS Experts Today"}
        ctaPara={
          "Businesses choose Dignite Studios for reliable iOS services which focus on the quality, speed and scalability. Our team delivers consistent results with the clear communication modern development practices and the long term support to help businesses to grow quite successfully."
        }
        ctaBtn={"Partner With iOS Experts Today"}
        cta={
          <div className="bg-transparent h-[500px] hover:scale-105 z-50 absolute text-white  opacity-100 transition-all ease-linear w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%] ">
            <div className="relative">
              <img
                src="/location/mobile-boston/cta-img.webp"
                className="w-full rounded-b-2xl bottom-3 relative bg-cover"
                alt="lggg"
              />
              <div className="md:w-[45%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center text-center">
                <h2 className="text-[45px] font-bold text-white leading-[45px]">
                  Partner With iOS Experts Today
                </h2>
                <p>
                  Businesses choose Dignite Studios for reliable iOS services
                  which focus on the quality, speed and scalability.
                </p>
                <Link
                  href="/contact-us"
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Partner With iOS Experts Today
                  </button>
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                    <MdArrowOutward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
        button={"Partner With iOS Experts Today"}
        para={
          <>
            Businesses choose Dignite Studios for reliable iOS services which
            focus on the quality, speed and scalability. Our team delivers
            consistent results with the clear communication modern development
            practices and the long term support to help businesses to grow quite
            successfully.
          </>
        }
      />
      {/* <Features
        header={"Must-Have Features in Your Hybrid  Mobile "}
        header2={"App"}
        para={
          <>
            Developing a hybrid application is more than just creating colorful
            designs in hybrid mobile app development service. The success of
            your hybrid app depends on the features, too. Your app needs the
            right features to deliver performance and long-term growth. Every
            feature is supposed to make the user experience better. By adding
            these essential features, your hybrid mobile app can improve user
            retention, which can support your business objectives effectively,
            being the best hybrid development company in the USA.
          </>
        }
        features={FEATURES}
        button={"Get Feature Recommendations"}
      /> */}

      <CTA />

      <Faq faqs={faqs} />
      <ContactUs
        img={"/services/hybrid-app/c-img.webp"}
        pathname={"iOS App Dev "}
        header={"You Could Be Our Next Success Story"}
        header2={""}
        para={
          "Your app idea deserves to shine. Partner with us to build an iOS mobile app that delivers engages users and grows your business. Let’s change your vision into a powerful app that works flawless on Apple devices."
        }
        btn={"Let’s Create Your App"}
      />
    </div>
  );
};

export default IOSAppDev;

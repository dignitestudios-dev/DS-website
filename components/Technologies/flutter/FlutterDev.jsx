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
import TechTools from "../ui/TechTools";
import {
  SiFlutter,
  SiReact,
  SiSwift,
  SiKotlin,
  SiNodedotjs,
  SiFirebase,
} from "react-icons/si";

const tech = [
  {
    name: "Flutter App Development Company",
    icon: <SiFlutter />,
    description:
      "We use Flutter to create cross-platform mobile products with consistent performance, reusable components, and smooth user experiences across Android and iOS.",
  },
  {
    name: "React Native App Development Company",
    icon: <SiReact />,
    description:
      "Our team builds flexible mobile solutions using React Native for brands that need rapid prototyping, modular architecture, and efficient multi-platform delivery.",
  },
  {
    name: "Swift App Development Company",
    icon: <SiSwift />,
    description:
      "For iOS-focused products, we develop high-performance applications using Swift with native capabilities, data-protection compliance, and seamless Apple ecosystem integration.",
  },
  {
    name: "Kotlin App Development Company",
    icon: <SiKotlin />,
    description:
      "We use Kotlin to create durable Android applications emphasizing clean code, efficient workflows, and reliable system design for long-term performance.",
  },
  {
    name: "Node JS Development Company",
    icon: <SiNodedotjs />,
    description:
      "Our backend specialists use Node.js to power scalable APIs, real-time services, and secure server environments that support modern mobile applications.",
  },
  {
    name: "Firebase Development Services",
    icon: <SiFirebase />,
    description:
      "We integrate Firebase for cloud services, databases, analytics, and authentication to maintain stability, connectivity, and scalability for your mobile apps.",
  },
];
const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "Native Flutter App Development",
    description:
      "We build fast and reliable apps using Flutter with strong architecture and consistent performance across platforms.",
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Enterprise Flutter Solutions",
    description:
      "Our teams design scalable Flutter solutions which integrate with business workflows and secure backend services.",
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "UI/UX Design for Flutter",
    description:
      "We design user friendly interfaces focused on transparency, smooth navigation and exciting experiences.",
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "API & Third Party Integrations",
    description:
      "Our engineers combine Flutter apps with cloud platforms, analytics, CRMs and payment systems.",
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "Testing & Maintenance",
    description:
      "We ensure performance, stability and updates as your product grows. Our solutions are built for businesses which need flexibility, speed and measurable results.",
  },
];

const highlights = [
  {
    title: "100% Custom Flutter Development",
    desc: "We build the apps which is designed only for you.",
  },
  {
    title: "Specialized Engineering Teams",
    desc: "Experts focused on the performance and the smooth delivery.",
  },
  {
    title: "Transparent Communication",
    desc: "Clear updates with no hidden surprises.",
  },
  {
    title: "Flexible Engagement Models",
    desc: "Choose plans that match your business needs.",
  },
  {
    title: "Long Term Product Support",
    desc: "We support and improve your app continuously.",
  },
  {
    title: "Proven Quality Assurance ",
    desc: "Thorough testing for the reliable performance.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare",
    desc: "Healthcare platforms built with experience in healthcare app development focus on secure patient data and usability.",
  },
  {
    title: "Financial",
    desc: "Financial platforms benefit from our experience in fintech app development services for payments and analytics.",
  },
  {
    title: "Ecommerce",
    desc: "Online brands work with us as an ecommerce app development company that creates fast shopping experiences.",
  },
  {
    title: "Real Estate",
    desc: "Property platforms grow with tools inspired by real estate app development approach.",
  },
  {
    title: "E Learning",
    desc: "Learning platforms scale with structure similar to an e learning app development company for engagement and tracking.",
  },
];

const test = [
  {
    name: "Sarah Mitchell",
    designation: "— Product Manager, RetailSync",
    review:
      "Partnering with Dignite Studios was simple and well structured from day one. They completed our product ahead of schedule while maintaining excellent quality.",
  },
  {
    name: "James Carter",
    designation: "— CTO, Health Track Systems",
    review:
      "We were searching for the best flutter app development company to reconstruct the platform, and their team exceeded expectations with clean code, clear communication and faster delivery.",
  },
  {
    name: "Alexandria",
    designation: "— Founder, PayNest Fintech",
    review:
      "Their flutter app development company USA let us scale our business confidently. The app runs smoothly, users love the experience and our ROI improved within months of launch.",
  },
];

const BENEFITS = [
  {
    title: "Higher Customer Interaction",
    desc: "We design smooth, engaging app experiences that encourage users to interact more, stay longer and return frequently again.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Growth in Revenue",
    desc: "Our mobile solutions help businesses convert users into buyers, boosting sales and strong market presence for growth.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Strong Brand Positioning",
    desc: "We build apps that reflect your brand voice, creating trust, recognition and strong market presence for growth.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Analytics Driven Optimization",
    desc: "We use real user data to improve performance, fix issues faster and optimize features for better results continuously.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Competitive Market Advantage",
    desc: "Our smart development strategies help you stay ahead of competitors and win more customers in your industry easily.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "Do you build scalable Flutter apps?",
    answer:
      "Yes, we design Flutter apps using clean architecture, modular components and performance focused engineering. Unlike many flutter app development companies, our team plans from day one, making sure that your product can handle increasing users, new features and evolving business needs without slowing down or breaking under pressure.",
  },
  {
    id: 2,
    question: "How long does Flutter app development take?",
    answer:
      "The timeline varies based on your app's features, integrations and designs. Simple products may take a few weeks, while advanced platforms require several months. As a top flutter app development company, we follow a structured process to deliver gradually, keeping communication clear and avoiding unnecessary delays during development.",
  },
  {
    id: 3,
    question: "Do you offer post launch support?",
    answer:
      "Yes, our work continues after launch. We provide ongoing monitoring, performance improvements, security updates and feature enhancements. This ensures that your app remains stable, adapts according to user feedback and continues to deliver value as your business grows over time.",
  },
  {
    id: 4,
    question: "Can you refine my app idea?",
    answer:
      "Absolutely. We help turn early ideas into clear, workable product strategies. To create a targeted plan, our team examines objectives, users and features. This approach reduces risk, improves decision making and ensures the app solves real problems before development even begins.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes, we work with both early stage startups and established enterprises. Whether you're validating a concept or scaling an existing product, our team adapts its approach to match goals, budget and technical needs. As a trusted flutter app development company usa, we maintain quality and long term performance at every stage.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Planning & Direction",
    desc: "We describe the project goals, target users and the technical process before the development even starts.",
  },
  {
    step: "02",
    title: "UI/UX Prototyping",
    desc: "Our designers create the interactive prototypes through the valid experience quite early.",
  },
  {
    step: "03",
    title: "Evolutionary Development Approach",
    desc: "We plan work in short cycles and deliver features step by step for better quality and control.",
  },
  {
    step: "04",
    title: "QA Testing",
    desc: "We test the functionality, performance and security across the devices.",
  },
  {
    step: "05",
    title: "App Release & Setup",
    desc: "We launch your app, enable the tracking and support the future updates as required.",
  },
  {
    step: "06",
    title: "Post Launch Support & Optimization",
    desc: "We monitor the app’s performance and use the analytics so the features and user experience can be improved.",
  },
];

const FlutterDev = () => {
  return (
    <div className="max-w-screen-2xl w-full gap-20 lg:gap-36 h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="About Dignite "
        heading2={"Studios"}
        para="At Dignite Studios, we create high performance mobile products using Flutter that support business growth from day one. As a flutter app development company, our team works closely with startups and enterprises to design solutions which are secure, scalable and ready for use. We offer complete services for brands which require faster launches without compromising quality. Our engineers focus on performance, clean architecture and product reliability. Whether you are refining an idea or scaling an existing app, our professionals help you move with confidence using proven processes and strong technical expertise."
        button="Talk to Our Flutter Experts"
      />
      <Services
        services={services}
        button={"Request a Free Consultation.  "}
        header={"Flutter App Development Services For"}
        header2={" Modern Businesses"}
        para={
          "Our team delivers modern mobile products built with Flutter for speed, performance and scalability. Dignite Studios designs top flutter app development services for startups and enterprises that want long term value and reliable cross platform experiences."
        }
      />
      <Bussiness
        button={"Get started"}
        bs={highlights}
        header={"Reasons to Trust Our Top Flutter App "}
        header2={"Development Services"}
        ctaHeader={"Get Started"}
        ctaPara={
          "Working with the right team shapes how your product performs and grows. Dignite Studios delivers solutions for brands that need reliability, long term growth and clarity around flutter app development cost from day one."
        }
        ctaBtn={"Get Started"}
        cta={
          <div className=" overflow-hidden   text-white hover:scale-105 z-50 absolute opacity-100 shadow-[#F15C2033] transition-all  w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  ">
            <div className="relative h-[500px]  ">
              <img
                src="/location/mobile-washington/b-cta.png"
                className="w-full  rounded-b-2xl bottom-0  absolute bg-cover"
                alt="lggg"
              />
              <div className="md:w-[45%] absolute top-1/2 text-center left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center ">
                <h1 className="text-[45px] font-bold text-white leading-[45px]">
                  Get Started
                </h1>
                <p>
                  Working with the right team shapes how your product performs
                  and grows. Dignite Studios delivers solutions for brands that
                  need reliability, long term growth and clarity around flutter
                  app development cost from day one.
                </p>
                <Link
                  href={"/contact-us"}
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Get Started
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
          "Working with the right team shapes how your product performs and grows. Dignite studios delivers the best solutions for brands that need reliability and long term growth and clarity around flutter app development cost from the day one. "
        }
      />
      <TechTools
        tech={tech}
        header={
          "Tools and technologies used by Our Flutter Mobile App Development Company "
        }
        para={
          "Dignite Studios works as the secure and performance focused on the flutter mobile app development company building the clean, scalable architectures for the modern mobile products. Our engineers combine the flutter through the reliable backend systems to deliver the apps which stay fast, compliant and ready for growth. We design the integrations which support the business expansion meanwhile maintaining the stability, security and the platform standards across the ecosystems. "
        }
      />

      <CTA />
      <Process
        steps={PROCESS_STEPS}
        header={"Proven Flutter App"}
        header2={"Development Process"}
        para={
          "Every app has a story. At our flutter app development company, we follow a structured approach that brings your idea to life with clarity and technical excellence."
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industry Focused"}
        header2={"Flutter Solutions"}
        para={
          "We design top Flutter solutions across multiple business sectors with performance and compliance in mind."
        }
      />
      <MobileApp
        button={"Talk to an Expert"}
        header={"Business Growth"}
        header2={"with Flutter"}
        para={
          "Flutter apps help businesses grow faster through better user engagement and performance."
        }
        cards={BENEFITS}
      />
      <SuccessStories
        header={"Our Flutter App Development"}
        header2={"Success Stories"}
        para={
          "Built by the top flutter app development company, these projects show how smart execution, clean design and scalable engineering help businesses improve performance, user engagement and long term product growth across industries."
        }
      />

      {/* <SEO /> */}
      <Testimonials
        test={test}
        header={"What Clients Say About"}
        header2={"Our Flutter Work"}
        para={
          "Businesses trust Dignite Studios for clarity, performance and delivery. From startups to enterprises, our clients share how our Flutter solutions improved speed, scalability and real business outcomes compared to other flutter app development companies across different industries."
        }
      />
      <Faq faqs={faqs} />
      <ContactUs
        pathname={"Flutter Development"}
        header={"Build Your Next Flutter Product"}
        img={"/location/mobile-washington/c-img.png"}
        header2={""}
        para={
          "Build your next product with professional expertise from specialists delivering results across markets through proven workflows and performance standards in the USA. As a trusted provider of flutter app development services in usa, Dignite Studios helps brands scale faster, smarter and with confidence."
        }
        btn={"Request Flutter App Development Quote"}
      />
    </div>
  );
};

export default FlutterDev;

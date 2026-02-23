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
import { SiFlutter, SiReact, SiSwift, SiKotlin, SiNodedotjs, SiFirebase } from "react-icons/si";

const tech = [
  {
    name: "Flutter App Development Company",
    icon: <SiFlutter />,
    description:
      "We collaborate with the flutter app development company approach to deliver fast, flexible and visually consistent cross platform experiences.",
  },
  {
    name: "React Native App Development Company",
    icon: <SiReact />,
    description:
      "As the trusted react native app development company, we also focus on building the smooth, maintainable and the high performance mobile applications.",
  },
  {
    name: "Swift App Development Company",
    icon: <SiSwift />,
    description:
      "Our swift app development company expertise helps to create polished, stable and user focused native iOS applications.",
  },
  {
    name: "Kotlin App Development Company",
    icon: <SiKotlin />,
    description:
      "With kotlin app development company practices, we deliver secure scalable and efficient Android first mobile solutions.",
  },
  {
    name: "Node JS Development Company",
    icon: <SiNodedotjs />,
    description:
      "Our node js development company also stack powers reliable backends through the fast APIs and fluent system integrations.",
  },
  {
    name: "Firebase Development Services",
    icon: <SiFirebase />,
    description:
      "We incorporate cloud features, real time data, authentication and the performance monitoring using the Firebase development services.",
  },
];
const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "React Native App Development",
    description:
      "We create fast, reliable mobile apps through the React Native that run quite smoothly across iOS and Android, helping brands work with the react native app development companies which are focused on performance and user experience at the core.",
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Enterprise React Native Solutions",
    description:
      "Our team, like leading react native app development companies, develops secure and scalable enterprise applications which integrate it easily with internal systems and workflows.",
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "UI/UX Design for React Native",
    description:
      "We design clean, intuitive interfaces through custom react native app development services which improve user engagement and retention across the mobile platforms.",
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "API & Third Party Integrations",
    description:
      "We connect your app through the payment processors, CRMs, analytics tools and cloud services for the fluent functionality.",
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "QA, Testing & Maintenance",
    description:
      "From the automated testing to the long term support, our React Native App Development Services ensure if your app runs properly after first being introduced.",
  },
];

const highlights = [
  {
    title: "100% Custom React Native Development",
    desc: "We build the perfect React Native apps which match the business goals, users and the technical requirements quite perfectly.",
  },
  {
    title: "Specialized Engineering Teams",
    desc: "Work with the skilled engineers to stay focused on delivering reliable, high performance React Native mobile applications for the business.",
  },
  {
    title: "Clear and Honest Communication",
    desc: "We keep you quite informed at every stage, ensuring transparency, clarity and the smooth collaboration through the development.",
  },
  {
    title: "Flexible Engagement Models",
    desc: "Choose the hiring and the pricing options that fit the timeline, budget and the project scope without the limitations.",
  },
  {
    title: "Long Term Product Support",
    desc: "We provide the ongoing updates, maintenance and improvements to keep your app running smoothly long after being introduced.",
  },
  {
    title: "Proven Quality Assurance",
    desc: "Thorough testing for the reliable performance.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Applications",
    desc: "As a reliable healthcare app development company, we create the secure, user friendly, data privacy and the smooth communications between providers and users which supports the patient engagement.",
  },
  {
    title: "E-Commerce Platforms",
    desc: "We help every ecommerce app development company launch shopping experiences through the fast, intuitive and build to convert users into loyal customers across the mobile devices.",
  },
  {
    title: "Real Estate Solutions",
    desc: "Working as the modern real estate app development company, we also design the property apps which simplify the listings, bookings and the client interactions while keeping the performance strong.",
  },
  {
    title: "Education & E-learning",
    desc: "As an experienced e learning app development company, we build the digital classrooms, learning platforms and the training app which keep the students engaged and informed on any of the devices.",
  },
  {
    title: "Matchmaking & Social Apps",
    desc: "We also develop secure and engaging dating and social platforms focused on smooth performance, privacy and meaningful user interaction.",
  },
];

const test = [
  {
    name: "Sarah Mitchell",
    designation: "— Product Manager",
    review:
      "Dignite Studios, a reliable react native app development company in usa, helped us launch faster with a clean, scalable mobile app which is loved by users.",
  },
  {
    name: "Daniel Carter",
    designation: "— Startup Founder",
    review:
      "Their team understood our business goals and delivered exactly what we asked for through react native mobile app development services.",
  },
  {
    name: "Joe Adam",
    designation: "— Operations Lead",
    review:
      "Professional, fast and drive through the real product outcomes. A trusted team for react Native apps development. Highly recommended.",
  },
];
const BENEFITS = [
  {
    title: "Higher Customer Engagement",
    desc: "We build engaging app experiences which keep the users quite active, interested and returning to your platform regularly.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Faster Product Launches",
    desc: "Our streamlined development process helps you to release without sacrificing quality or the performance standards.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Revenue Growth Through Mobile Channels",
    desc: "Convert the mobile users into the customers through the smart features which increase the sales and long term business value.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Strong Brand Visibility",
    desc: "Create a consistent brand presence across the mobile platforms which build the recognition and also to trust the users worldwide.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Analytics Driven Optimization",
    desc: "Use the real time insights to improve the features, performance and the user experience for better app results.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "Do you build scalable React Native apps?",
    answer:
      "Yes. We design architectures which support the growth, performance and the easy future updates without rebuilding the entire product.",
  },
  {
    id: 2,
    question: "How long does React Native development take?",
    answer:
      "Timelines depend on the features and complexity, but most MVPs built by a top react native app development company launch within a few weeks with the agile delivery.",
  },
  {
    id: 3,
    question: "Do you offer post launch support?",
    answer:
      "Absolutely. We provide maintenance, upgrades, monitoring and performance optimization after the deployment.",
  },
  {
    id: 4,
    question: "Can you refine my app idea?",
    answer:
      "Yes. We help shape concepts into the technical strategies which match user and business goals.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "We support both the early stage startups and established enterprises through the flexible engagement models.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "Clear goals mean better products. In this phase, we align your business objectives with the app's vision and features.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "We create preliminary visual mock-ups that exhibit the mobile app's initial design and purpose with user-centric approach.",
  },
  {
    step: "03",
    title: "Sprint Planning",
    desc: "Sprint planning starts here as our Flutter developers determine the product roadmap and analyze total execution time.",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "Checking at every stage of development is the best way to remove bugs and stay updated with the latest status.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Deployment is where preparation connects with performance, ensuring smooth operation across iOS and Android platforms.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "After launch, we focus on monitoring performance and optimizing features based on user feedback for continuous improvement.",
  },
];

const ReactNative = () => {
  return (
    <div className="max-w-screen-2xl w-full gap-20 lg:gap-36 h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
      button={"Talk to Our React Native Experts."}
        heading="About Dignite "
        heading2={"Studios"}
        para="Dignite Studios helps startups and enterprises which will give you powerful mobile products. As the reliable react native app development company, we also focus on building the apps which are fast, scalable and quite easy to maintain. Our engineers also understand how the modern business grows and how mobile technology should also support such journeys.
We don’t just write the code. We also design the solutions which fit the product goal, users and the future procedure. From the MVPs to enterprise platforms, our team also delivers the apps which performs quite smoothly across many devices meanwhile keeping the development efficient that perform quite smoothly across devices meanwhile keeping the development efficient and also flexible. Through the strong communication and the proven delivery models, we also help businesses that move confidently. "
      />
      <Services
        services={services}
        button={"Start Your React Native Project. "}
        header={"Custom React Native App Development "}
        header2={"Services  "}
        para={
          "At the Dignite Studios, we also deliver the custom react native app development which help businesses launch faster and scale quite smarter. Our team also builds mobile solutions which help balance performance, design and long term maintainability. "
        }
      />
      <Bussiness
      button={"Get started"}
        bs={highlights}
        header={"Best React Native App Development "}
        header2={"Services"}
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
                  Working with the right team shapes how your product performs and grows. Dignite Studios delivers solutions for brands that need reliability, long term growth and clarity around flutter app development cost from day one.
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
          "Dignite Studios delivers the best react native app development services for the startups and the enterprises focused on building real, long term product value through the quality and transparency.   "
        }
      />
          <TechTools tech={tech}  header={"React Native Mobile App Development Company "} para={"As the modern react native mobile app development company, we work through the proven tools and the secure architecture to build the fast and reliable products. Our tech stack supports performance, flexibility and the long term growth across the platforms. "} />
   
            <CTA />
      {/* <Process
        steps={PROCESS_STEPS}
        header={"Proven Flutter App"}
        header2={"Development Process"}
        para={
          "Every app has a story. At our flutter app development company, we follow a structured approach that brings your idea to life with clarity and technical excellence."
        }
      /> */}
        <Industries
 VALUE_PROPOSITION={VALUE_PROPOSITION}
 header={"React Native Solutions Across"}
 header2={"Industries"}
 para={
   "We build mobile products for businesses that operate in the fast moving, user driven markets. Our team understands how different industries work and designs React Native apps that balance usability, compliance and long term performance. "
 }
/>
      <MobileApp
        header={"Business Growth with"}
        button={"Talk to an Expert"}
        header2={" React Native "}
        para={
          "A React Native app helps brands to connect with the users and generate consistent growth. Working with a reliable development team gives you an edge in today’s mobile market. "
        }
        cards={BENEFITS}
      />
      <SuccessStories
        header={"Proven Projects that drive the"}
        header2={"Real Growth"}
        para={
          "See how our react native app development company turns the real challenges into the high performing products through the smart design, solid engineering and measurable results which help businesses to grow quite faster and stronger. "
        }
      />


      {/* <SEO /> */}
      <Testimonials
        test={test}
        header={"Real words from real"}
        header2={"clients"}
        para={
          "Clients choose our react native custom app development company for the clear communication, reliable delivery and mobile products which perform well in the real business environments."
        }
      />
      <Faq faqs={faqs} />
      <ContactUs
        pathname={"React Native App Development"}
        header={"Build Your React Native Product with Confidence "}
        img={"/technologies/react-native/c-img.png"}
        header2={""}
        para={
          "If you’re looking for reliable delivery, smart engineering and real business value , our react native app development company is ready to help. We offer React Native App Development Services for the brands seeking growth across the USA. Start your journey with a partner which understands performance, design and scalability "
        }
        btn={"Request React Native App Development Quote"}
      />
    </div>
  );
};

export default ReactNative;

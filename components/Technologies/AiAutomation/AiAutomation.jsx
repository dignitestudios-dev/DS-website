"use client";
import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "../ui/Services";
import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import { MdArrowOutward } from "react-icons/md";
import Industries from "../ui/Industries";
import Process from "../ui/Process";
import MobileApp from "../ui/MobileApp";
import { FaNetworkWired, FaPencilAlt, FaUser } from "react-icons/fa";
import { IoGrid, IoWalletOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import SuccessStories from "../ui/SuccessStories";
import CTA from "./CTA";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import TechTools from "../ui/TechTools";
import {
  SiOpenai,
  SiPython,
  SiGooglecloud,
  SiAmazonaws,
  SiNodedotjs,
  SiAwslambda,
  SiRobotframework,
} from "react-icons/si";
import {
  MdHub,
  MdSmartToy,
  MdSettings,
  MdAnalytics,
  MdSecurity,
} from "react-icons/md";
import Features from "../ui/Features";
import { BiNetworkChart } from "react-icons/bi";
import { BsRobot } from "react-icons/bs";

const tech = [
  {
    name: "OpenAI",
    icon: <SiOpenai />,
    description:
      "We use advanced LLMs and GPT models to build intelligent systems that understand, reason and automate complex business logic.",
  },
  {
    name: "Python & ML",
    icon: <SiPython />,
    description:
      "Our engineers leverage Python and machine learning frameworks to create predictive models and data-driven automation tools.",
  },
  {
    name: "Cloud AI",
    icon: <SiGooglecloud />,
    description:
      "We integrate Google Cloud AI and AWS SageMaker to provide scalable, enterprise-grade infrastructure for modern automation.",
  },
  {
    name: "NLP Systems",
    icon: <SiAwslambda />,
    description:
      "Our NLP solutions enable sentiment analysis, entity recognition and conversational intelligence for seamless human-AI interaction.",
  },
  {
    name: "Robotic Process",
    icon: <SiRobotframework />,
    description:
      "We implement RPA tools to automate repetitive UI-based tasks, ensuring speed and accuracy across legacy and modern platforms.",
  },
];

const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "AI Process Automation",
    description:
      "Automate repetitive rule-based tasks using simple smart systems to reduce manual work increase speed and maintain consistent business operations.",
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Intelligent Workflow Automation",
    description:
      "Design adaptive workflows that optimize approvals task routing and operations through data-driven decision systems.",
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "AI Automating Consulting",
    description:
      "In order to deliver visible results our services assist in detecting the automating gaps, designing specific strategies and putting the plans which are intended into the action.",
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Business Process Automation",
    description:
      "Simplified operations, increased productivity and proper operational accuracy across many multiple businesses via planned automation assistance.",
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Build the conversational solutions that automate support lead qualification and scheduling with the 24/7 availability.",
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "AI-Powered App Development",
    description:
      "Develop intelligent applications that integrate automation logic for smarter workflows and smooth cross-platform experiences.",
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "AI Integration & API Automation",
    description:
      "Use the scalable API driven automation to safely connect cloud tools, CRM, ERP and the third party system.",
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Automation, Testing & Optimization",
    description:
      "To guarantee precision, stability and long term performance dependability, workflows that should be continuously tested and also improved.",
  },
];

const highlights = [
  {
    title: "AI-first Automation Strategy",
    desc: "We plan automation around clear goals, ensuring that every workflow supports measurable growth and long-term operational stability.",
  },
  {
    title: "Proven Automation Frameworks",
    desc: "Our structured approach to reducing project risks improves execution accuracy and accelerates smooth implementation across teams.",
  },
  {
    title: "Enterprise Grade Security",
    desc: "Strict security regulations guarantee compliance and save the company’s data and also maintain the system integrity throughout.",
  },
  {
    title: "Cross-Industry Expertise",
    desc: "We have an extensive amount of expertise providing automated solutions in the fields of education, real estate, ecommerce, healthcare and finance.",
  },
  {
    title: "Scalable Automation Solutions",
    desc: "Flexible automation systems expand with your company without raising the expenses or the operational complexity.",
  },
  {
    title: "Continuous Optimization & Support",
    desc: "To make sure the optimum efficiency and reliable outcomes, we continuously analyse, improve and monitor the systems.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare & Fitness",
    desc: "Using reliable automation techniques, increasing the patient workflows, booking appointments, billing the procedures and reporting the accuracy.",
  },
  {
    title: "Fintech & Banking",
    desc: "Improve the operational effectiveness, fraud detection, transaction tracking and the compliance monitoring using secure automation.",
  },
  {
    title: "E-commerce & Retail",
    desc: "Using the automatic system for the order processing, inventory updates, customer messages and returns to improve accuracy.",
  },
  {
    title: "Real Estate & PropTech",
    desc: "Efficient property listings that lead to tracking documentation approvals and client communication by using structured automation.",
  },
  {
    title: "E-learning & Edtech",
    desc: "Automate student onboarding, course management, progress tracking and assessments to improve learning and reduce costs.",
  },
];

const test = [
  {
    name: "Sarah Thompson",
    designation: "— Operations Manager",
    review:
      "Dignite Studios with efficient workflows and reduced operational costs significantly.",
  },
  {
    name: "Mochael Lee",
    designation: "— Head of IT",
    review:
      "Their automation strategy improved our internal processes and reporting accuracy.",
  },
  {
    name: "Priya Kapoor",
    designation: "— Project Director",
    review: "Reliable team with strong execution and measurable outcomes.",
  },
  {
    name: "James Wilson",
    designation: "— Customer Experience Lead",
    review: "They helped us automate customer engagement efficiently.",
  },
  {
    name: "Anita Sharma",
    designation: "— Business Process Manager",
    review: "Professional approach and continuous optimization support.",
  },
  {
    name: "David Martinez",
    designation: "— CTO",
    review: "Clear communication and structured automation planning.",
  },
];

const BENEFITS = [
  {
    title: "Operational Efficiency",
    desc: "For the companies that simplify the difficult operational duties, dependable AI automations services which increase everyday productivity.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Cutting Costs",
    desc: "Lower operational expenses and reduce resource waste by implementing a structured AI automation service tailored to the business's needs.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Faster Decision Making",
    desc: "With the information produced by the experts in the line through specific business objectives, you can make decisions more quickly.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Scalability & Flexibility",
    desc: "Scale operations effortlessly with help from an experienced AI automation agency for small business that prioritize long-term adaptability.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Improved Customer Experience",
    desc: "Provide more rapid responses, reliable services and more personalised interactions which improve the engagement.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "What is AI automation?",
    answer:
      "By the implementation of the organised systems, AI automation helps the organisation with the lengthy, repetitive tasks and the workflows. These solutions also improve the overall efficiency, reduce the labour cots and improve the operational accuracy.",
  },
  {
    id: 2,
    question: "How is company efficiency increased by AI automation?",
    answer:
      "Businesses may speed up task completion, minimise repetitive workloads and optimise the processes through implementing AI automation. This also improves the operational uniformity while reducing human error.",
  },
  {
    id: 3,
    question: "To What Extent are AI Automation Systems Secure?",
    answer:
      "Our AI automation consulting services at Dignite studios respect strong security guidelines and the industry best practices. To protect the sensitive corporate data, we put in place compliance procedures and data protection standards.",
  },
  {
    id: 4,
    question: "Can AI automation integrate with existing software?",
    answer:
      "Yes, our AI automation for businesses smoothly integrates with the existing RM, ERP, Cloud platforms, and third-party software using secure APIs and organised workflow logic.",
  },
  {
    id: 5,
    question: "Do you offer support after the deployment?",
    answer:
      "Yes, we offer the ongoing post deployment monitoring, maintenance and optimisation as part of our AI automation agency services to ensure long term stability.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Automation Planning",
    desc: "We analyze current workflows, define clear KPIs and identify areas where automation can reduce inefficiencies and improve operational clarity.",
  },
  {
    step: "02",
    title: "Model Design",
    desc: "Our team develops structured automation systems based on practical logic to build a scalable AI automation agency that can be adapted to each company’s needs.",
  },
  {
    step: "03",
    title: "Automation Development",
    desc: "We build reliable automation frameworks that transform structured designs into functional systems adaptable to changing operational requirements.",
  },
  {
    step: "04",
    title: "Testing",
    desc: "We validate performance stability and security to confirm reliable functionality across all the active environments.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Then we carefully deploy automation systems to ensure smooth integration and dependable performance across live environments.",
  },
  {
    step: "06",
    title: "Post-Launch Optimization & Support",
    desc: "We continuously monitor refinements and enhance systems to maintain efficiency, accuracy, and long-term business value.",
  },
];

const featuresData = [
  {
    title: "Intelligent workflow orchestration",
    icon: <BiNetworkChart />,
  },
  {
    title: "AI-driven decision engines",
    icon: <BsRobot />,
  },
  {
    title: "Automated data processing",
    icon: <MdSettings />,
  },
  {
    title: "Real-time analytics dashboards",
    icon: <MdAnalytics />,
  },
  {
    title: "Secure system integrations",
    icon: <MdSecurity />,
  },
];

const AiAutomation = () => {
  return (
    <div className="max-w-screen-2xl w-full gap-20 lg:gap-36 h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        button={"Schedule Your Free Automation Strategy Call"}
        heading="Introduction:"
        heading2={""}
        para="With more than 10 years of experience Dignite Studios provides reliable AI automation services which improves the efficiency, strengthens decision making and supports fast business growth. We create practical systems which handle repetitive work, connect the platforms and allow the teams to focus on the important tasks. We support both the startups and enterprises through removing the scalability performance and also the overall returns according to the multiple industries. Our team is also recognized as the trusted AI automation agency known for delivering the consistent long term and the operational value. We also develop customized AI automation service strategies which are based on the clear business objectives and the measurable outcomes."
      />
      <Services
        services={services}
        button={"Start Your AI Automation Project"}
        header={"AI Automation"}
        header2={"Services"}
        para={
          "Our AI automation services are designed for your exact business processes. We review workflows, identify automation opportunities and implement scalable systems that lower costs and improve productivity while evolving according to the organization’s growth."
        }
      />
      <Bussiness
        button={"Partner With Dignite Studios"}
        bs={highlights}
        header={"Best AI Automation Services for"}
        header2={" Scalable Business Growth"}
        ctaHeader={"Partner With Dignite Studios"}
        ctaPara={
          "Dignite Studios offers the best solution for the fastest more sustainable growth. We also develop scalable structures which improve efficiency increase productivity and increased profits."
        }
        ctaBtn={"Partner With Dignite Studios"}
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
                  Partner With Dignite Studios
                </h1>
                <p>
                  Dignite Studios offers the best solution for the fastest more
                  sustainable growth. We also develop scalable structures which
                  improve efficiency increase productivity and increased
                  profits.
                </p>
                <Link
                  href={"/contact-us"}
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Partner With Dignite Studios
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
          "Dignite Studios delivers the best services to help businesses grow with clear control and long-term stability. We build simple systems that improve performance and profit."
        }
      />
      <TechTools
        tech={tech}
        header={"AI Automation Technology Stack We Use"}
        para={
          "Dignite Studios creates intelligent, scalable and secure solutions through enterprise grade tools stable workflow performance, quick deployment and fluent integrations. It was made possible through the cloud native design."
        }
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Reliable AI Automation"}
        header2={"Services Process"}
        para={
          "Our systematic strategy which focuses on producing the measurable and obvious outcomes. We build a reliable structure which also allows long term sustainability through combining planning the ongoing development."
        }
      />
      <Industries
        button={" Discuss Your Idea  "}
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industries We Serve with"}
        header2={" AI Automation Solutions"}
        para={
          "Dignite Studios offers the best solution for the fastest more sustainable growth. We also develop scalable structures which improve efficiency increase productivity and increased profits."
        }
      />
      <Features
        header={"Must Have Features In"}
        header2={"AI Automation Solutions"}
        para={
          "Modern businesses require scalable architecture and secure integrations. The right system ensured workflow accuracy, performance tracking, and operational transparency across the departments."
        }
        features={featuresData}
      />
      <MobileApp
        button={"Automate Your Business with AI"}
        header={"Benefits Of Having AI"}
        header2={" Automation Solutions"}
        para={
          "Our group companies assist companies in increasing operational control, reducing manual labour, and increasing the production. Organisations can also attain better accuracy, increased visibility and long term scalability."
        }
        cards={BENEFITS}
      />
      <SuccessStories
        header={"AI Automation"}
        header2={"Case Studies"}
        para={
          "Seeing how our services have transformed business operations across the industries from healthcare to ecommerce, we deliver measurable results through structured automation."
        }
      />
      <CTA />
      <Testimonials
        test={test}
        button={"Work With Our Expert Team"}
        header={"What Clients Say About Our"}
        header2={" AI Automation Company"}
        para={
          "Clients trust our AI automation agency services for delivering measurable results and long-term scalability."
        }
      />
      <Faq faqs={faqs} />
      <ContactUs
        pathname={"AI Automation Services"}
        header={"Request AI Automation Quote"}
        img={"/technologies/ai/c-img.png"}
        header2={""}
        para={
          "Are you prepared to put in place organized AI automation services to increase production and expansion? Tell our staff about your automation needs, and we’ll develop an approach that fits your company’s goals."
        }
        btn={"Request AI Automation Quote."}
      />
    </div>
  );
};

export default AiAutomation;

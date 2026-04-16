import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "../ui/Services";
import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import { MdArrowOutward, MdDesignServices } from "react-icons/md";
import Industries from "../ui/Industries";
import TechAndTools from "../ui/TechTools";
import Process from "../ui/Process";
import MobileApp from "../ui/MobileApp";
import {
  FaDatabase,
  FaGooglePlay,
  FaLayerGroup,
  FaMicrosoft,
  FaPencilAlt,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";
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
  SiAzure,
  SiGooglecloud,
  SiDigitalocean,
  SiCloudinary,
  SiKotlin,
  SiMongodb,
} from "react-icons/si";
import { FaAws, FaApple, FaGooglepay } from "react-icons/fa";
import Features from "../ui/Features";

import {
  FaSearch,
  FaLock,
  FaMobileAlt,
  FaBell,
  FaCommentDots,
  FaCreditCard,
  FaShareAlt,
  FaClock,
  FaUsers,
  FaBrain,
  FaChartLine,
  FaLanguage,
  FaLink,
  FaPenNib,
  FaChartBar,
  FaRobot,
  FaEye,
  FaSync,
  FaCogs,
} from "react-icons/fa";
import {
  SiOpenai,
  SiTensorflow,
  SiPytorch,
  SiPython,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import CTA from "./CTA";
import { BiLogoPostgresql } from "react-icons/bi";

const FEATURES = [
  {
    title: "Intelligent Workflow",
    // desc: " AI driven workflows streamline processes. They also reduce manual effort and ensure tasks are completed efficiently. Which means it keeps your business operations smooth.",
    icon: <FaCogs size={50} color="#F15C20" />,
  },
  {
    title: "AI driven Decision Engines",
    desc: "It uses predictive analytics and AI models to make faster and smarter decisions that bring growth. It improves accuracy and reduces operational risk.",
    icon: <FaBrain size={50} color="#F15C20" />,
  },
  {
    title: "Automated Data Processing",
    desc: "It automatically collects and cleans large datasets to save time. It improves accuracy and provides actionable insights without constant manual intervention.",
    icon: <FaChartLine size={50} color="#F15C20" />,
  },
  {
    title: "Analytics Dashboards",
    desc: "It has interactive dashboards that visualize critical metrics instantly. It empowers your team with insights that enable informed decisions across your business.",
    icon: <FaLanguage size={50} color="#F15C20" />,
  },
  {
    title: "Secure Integrations",
    desc: "It easily connects your AI apps with existing systems while keeping data safe. It ensures smooth and reliable operations across all tools and platforms.",
    icon: <FaLink size={50} color="#F15C20" />,
  },
];

const techData = {
  AI: [
    { name: "ChatGPT", icon: <SiOpenai /> },
    { name: "OpenAI APIs", icon: <SiOpenai /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "Natural Language Processing", icon: <FaLanguage /> },
    { name: "Computer Vision", icon: <FaEye /> },
    {
      name: "AI Automation",
      icon: <FaRobot />,
      link: "/technologies/ai-automation-services",
    },
  ],
  Backend: [
    { name: "Python", icon: <SiPython /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Ruby on Rails", icon: <SiRubyonrails /> },
  ],
  Data: [
    { name: "Pinecone", icon: <FaDatabase /> },
    { name: "Weaviate", icon: <FaDatabase /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> }, // Assume Postgres from metadata
    { name: "MongoDB", icon: <SiMongodb /> }, // Assume Mongo from metadata
  ],
  Cloud: [
    { name: "AWS", icon: <FaAws /> },
    { name: "Azure", icon: <FaMicrosoft /> },
    { name: "GCP", icon: <SiGooglecloud /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
  ],
};
const services = [
  {
    icon: "dev",
    icon2: "dev1",
    title: "Generative AI Development Solutions",
    description: (
      <>
        The developers are experts at designing advanced Generative AI models for high-quality outputs on different formats. They empower teams to reduce repetitive workloads.
      </>
    ),
  },
  {
    icon: "call",
    icon2: "call1",
    title: "AI Strategy and Consulting Services",
    description: (
      <>
     The AI consultants at Dignite Studios assess operations to formulate custom strategies. Working as an AI chatbot development services provider, we offer plans that work according to your goals.
      </>
    ),
  },
  {
    icon: "h",
    icon2: "h1",
    title: "AI Chatbots and Virtual Assistants",
    description: (
      <>
    The AI chatbot development service that we offer covers AI agents and copilots development. We train the agents to manage customer service and data entry with consistency. 
      </>
    ),
  },
  {
    icon: "set",
    icon2: "set1",
    title: "AI Integration and Automation",
    description: (
      <>
Our AI application development services connect AI tools to your current systems for improved functionality. The team optimizes outdated systems for better and more precise performance.
      </>
    ),
  },
  {
    icon: "w",
    icon2: "w1",
    title: "AI Product Design",
    description: (
      <>
     AI doesn’t really have to be complicated. The team designs products that are easy to use and actually helpful. Dignite Studios focuses on creating experiences that feel natural and practical. 
      </>
    ),
  },
  {
    icon: "bug",
    icon2: "bug1",
    title: "AI App Maintenance",
    description: (
      <>
    Building your AI app is just the beginning. Your app needs to keep up with user requirements and tech. Our goal is to make sure your AI stays reliable so your users get the best experience. 
      </>
    ),
  },
  {
    icon: "cloudes",
    icon2: "cloudes1",
    title: "AI Vision and Image Intelligence",
    description: (
      <>
    AI Vision and Image Intelligence is about teaching machines to understand and act on visual data. With us, you get AI solutions that can detect objects and extract insights from images and videos. 

      </>
    ),
  },
];

const highlights = [
  {
    icon: "/services/ai-dev/1.webp",
    title: "AI First Development Strategy",
    desc: "Our AI first approach ensures every project starts with intelligence at its core. It’s designing adaptive solutions that anticipate user needs.",
  },
  {
    icon: "/services/ai-dev/2.webp",
    title: "Proven AI Frameworks",
    desc: "We leverage industry proven AI frameworks and agile methodologies to offer ai chatbot development service. It transforms complex challenges that consistently deliver results.",
  },
  {
    icon: "/services/ai-dev/3.webp",
    title: "Enterprise Grade Security",
    desc: "Security and compliance are integrated into every solution. It keeps everything guarded and ensuring adherence to industry standards.",
  },
  {
    icon: "/services/ai-dev/4.webp",
    title: "Cross Industry Expertise",
    desc: "We apply tailored AI solutions that reflect the unique challenges and opportunities of each industry with experience across diverse sectors.",
  },
  {
    icon: "/services/ai-dev/5.webp",
    title: "Scalable AI App Solutions",
    desc: "Our AI applications are designed to grow with your business. It handles increasing data volumes and operational complexity without compromising performance.",
  },
  {
    icon: "/services/ai-dev/6.webp",
    title: "Continuous Support",
    desc: "We provide ongoing monitoring and updates. It continuously refines AI solutions to maximize efficiency. While also adapting to evolving needs.",
  },
];
const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "Being the best at ai application development services, we guide you through the whole process of building AI apps that meet the standards of HIPAA, completely prepared for the health sector.",
  },
  {
    title: "Fintech Apps",
    desc: "With our custom AI agent development services, you can plan launching secure fintech apps and payment mobile apps with multi-layer authentication.",
  },
  {
    title: "E-commerce & Retail Apps",
    desc: "Dignite Studios’ generative AI development services would gladly help you build ecommerce stores with storefront, inventory, and POS.",
  },
  {
    title: "Education & e-Learning Apps",
    desc: "The expert ai agent development services would help you build educational apps that are made for students and teachers.",
  },
  {
    title: "Real Estate Apps",
    desc: "Our AI application development consulting services would help you build property apps that include the features you need.",
  },
  {
    title: "Dating and Matchmaking Apps",
    desc: "The experts would help you plan an application that focuses on creating safe and engaging platforms with strong privacy controls and features.",
  },
];

const test = [
  {
    name: "Dr. Olivia Bennett",
    designation: "CTO, MediSure Health Systems",
    review:
      "“The team turned our AI concept into a fully functional app through AI Copilot development services that’s now central to our operations. Their process was smooth and collaborative.”",
  },
  {
    name: "Marcus Li",
    designation: "VP of Product, FinTrust Capital",
    review:
      "“They helped us embed advanced AI decision tools that transformed how we understand customer behavior. Truly outstanding work.”",
  },
  {
    name: "Emma Rodriguez",
    designation: "Head of Innovation, EduFlex Learning",
    review:
      "“Professional, responsive, and creative—the app they built now helps us automate processes we struggled with for years.”",
  },
  {
    name: "Samuel Okoye",
    designation: "COO, SwiftFleet Logistics",
    review:
      "“Great execution and communication. Their AI insights have made our logistics platform faster and more reliable.”",
  },
  {
    name: "Samantha Micheal",
    designation: "Product Director, StyleNest Retail",
    review:
      "“From ideation to launch, the team guided us at every step. Our users love the intuitive AI features they delivered.”",
  },
  {
    name: "Liam Gallagher",
    designation: "Head of Digital, AutoTech Manufacturing",
    review:
      "“They helped us integrate real-time predictive analytics that improved our production quality overnight.”",
  },
  {
    name: "Isabella Chen",
    designation: "CEO, GreenHome Solutions",
    review:
      "“Highly skilled and dependable team. The AI app they built scaled with our business exactly as promised.”",
  },
];

const BENEFITS = [
  {
    title: "Enhanced Operational Efficiency",
    desc: "Intelligent AI services usually help streamline workflows. It also automate repetitive tasks and free up resources through enterprise ai chatbot development service. Which means your team can now easily focus on high impact activities that provide better growth opportunities.",
    icon: <FaSync color="#F15C20" size={25} />,
  },
  {
    title: "Faster Decision Making",
    desc: "AI powered insights analyze data quickly. It means you can take faster and better decisions that improve business outcomes and keep you ahead of the competition.",
    icon: <FaChartLine color="#F15C20" size={25} />,
  },
  {
    title: "Cost Optimization and ROI Improvement",
    desc: "AI helps cut operational costs By automating processes and reducing errors. It also maximizes returns on technology investments through ai agent development services",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Scalable Applications",
    desc: "Enterprise ai chatbot development service that we build are designed to grow with your business. So you can now easily adapt to changing demands and evolving user needs.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Improved Customer Experience",
    desc: "AI Application would offer personalized recommendations and intelligent interactions. It also offers proactive support enhance user engagement and satisfaction. That gives your business a competitive edge.",
    icon: <FaShieldAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How much time does it usually take to build a AI mobile app?",
    answer:
      "Dignite Studios doesn’t provide a fixed, similar timeline for each AI mobile app during development. The time always depends on the complexity and features of every AI application. Usually, a mid level basic application would take up to 8-12 weeks, but it all depends, again. If you need a final cost and pricing estimate, contact our team and share your AI app idea.",
  },
  {
    id: 2,
    question: "Can you build iOS applications for Food delivery apps, too?",
    answer:
      "We’re experts, building both iOS and Android AI apps through AI Copilot development services. Hire AI app developer who creates high-performance applications for businesses. The AI developers can easily work with native and Swift to develop applications that feel simple while ensuring functionality.",
  },
  {
    id: 3,
    question: "Would you provide support after we’re done with our app launch?",
    answer:
      "Yes. It’s called post-launch support, and we definitely stay with you even when your AI app is launched. Providing proper post launch maintenance and updates about the AI application. So that we know that the AI app would stay aligned with the vision and users’ needs.",
  },
  {
    id: 4,
    question: "What if I have a rough idea? Can you guide me?",
    answer:
      "Here’s what happens: There’s no functional application that starts with the perfect, flawless idea. With this understanding, we show guidance through a free call or a consultation and explain the concepts in a much easier way. The AI app experts can help you out by adding practical aspects to your application and preparing it for the future.",
  },
  {
    id: 5,
    question: "How much do generative AI development services usually cost?",
    answer:
      "Basically, we don’t have fixed pricing rules for all kinds of applications. The cost completely depends on the features and the integrations you want your AI application to have. It’s up to your AI app’s vision, but at Dignite Studios, we keep pricing transparent with no hidden fees.",
  },
  {
    id: 6,
    question: "Are you currently working with startups, too, or just the enterprises?",
    answer:
      "The AI app development team works with both startups and enterprises. So, it doesn’t really matter if you’re a startup or enterprise; we would definitely work with you. Whether you’re building an MVP or scaling an existing AI application. We would look forward to building an amazing app together anyway.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Strategy",
    desc: "When the goals are clear, your AI chatbot development service for your business will turn out amazing, so in this phase, we align your business goals with the AI app’s vision and features.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "It is an AI app development process in which a preliminary visual mock-up has been created that shows the mobile app’s initial design.",
  },
  {
    step: "03",
    title: "Development Stage",
    desc: "The AI app development begins, and our professional app developers work according to your product roadmap and total execution time through generative ai development services. ",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "Conducting tests at every phase of the AI app development process helps keeping up with the latest status updates. ",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Your app deployment is where preparation connects performance, resulting in smooth operation across iOS and Android. ",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "Once we have launched your AI app, the developers’ focus shifts to checking performance and optimizing features based on user feedback.",
  },
];

const AiAppDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="About"
        heading2={"Dignite Studios"}
        para="AI is everywhere already, but our developers specialize in building something through Generative AI development services that’s actually useful with it. The demand keeps growing for more and better digital experiences. And it is a reason why every business across different industries wants to shift to AI to stay competitive. It also helps automate processes and better serve their customers. 
At Dignite Studios, we’re experts at what we do. You want to build an AI powered product from scratch? We’re the perfect choice. You just want to enhance an existing application? Our developers have got your back. 
The AI solutions we create at our company are designed in a way that it simplifies operations and enhances user experiences. With over 10 years of experience across different industries, we’ve worked with a variety of business models.
"
        button="Talk to Our AI Experts"
      />
      <Services
        services={services}
        header={"Custom Generative AI Development"}
        header2={"Services"}
        button={"Start Your AI App Project"}
        para={
          "Dignite Studios is a renowned AI development services provider in the USA, trusted worldwide for its automation solutions. The team is famous for developing artificial intelligence software and apps for businesses of all sizes to discard manual processes. The AI solutions we create are designed to streamline workflows and augment operations for measurable results without unnecessary delays."
        }
      />
      <TabularEcommerceTechs
        header={"Advanced Tech Behind AI"}
        header2={"Development Apps"}
        para={
          "Dignite Studios uses advanced AI tools and modern technology to build smooth apps through AI chatbot development services without a mess. We have developers who are experts at bringing your idea to reality in a way that your AI application runs smoothly and stays functional. We are simply using the best tech from our stack to build your AI apps."
        }
        techData={techData}
      />
      <Process
        steps={PROCESS_STEPS}
        header={"The Process Behind Reliable AI "}
        header2={"Development Services"}
        btn={"Start Your App Development"}
        para={
          "Every AI application we develop solves a problem. So, the team works with a structured approach that brings your required business idea to life. Different companies work with unique workflows, but when it comes to creating AI applications at our AI app development company, we utilize a perfectly structured approach of the best AI app development companies to ensure that we design applications that work the proper way. Here’s the structured workflow that turns visions into your apps. "
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why Businesses Should Choose "}
        header2={"Dignite Studios"}
        ctaHeader={"Ready to Bring Your AI App to Life?"}
        ctaPara={
          "With our AI app development services, your ideas can end up being fully functional apps. Talk to our expert developers today and see how we can build an AI application that works for your business."
        }
        ctaBtn={"Request Your AI App Quote"}
        cta={
          <div className="bg-transparent h-[500px] hover:scale-105 z-50 absolute text-white  opacity-100 transition-all ease-linear w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%] ">
            <div className="relative">
              <img
                src="/location/mobile-boston/cta-img.webp"
                className="w-full rounded-b-2xl bottom-3 relative bg-cover"
                alt="cta background"
              />
              <div className="md:w-[45%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center text-center">
                <h2 className="text-[45px] font-bold text-white leading-[45px]">
                  Ready to Bring Your AI App to Life?
                </h2>
                <p>
                  With our AI app development services, your ideas can end up
                  being fully functional apps. Talk to our expert developers
                  today.
                </p>
                <Link
                  href="/contact-us"
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Request Your AI App Quote
                  </button>
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                    <MdArrowOutward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
        button={"Get AI App Recommendations"}
        para={
          <>
   We are experts at building AI applications. Having a team of the <Link className="text-orange-600" href="/services/mobile-app-development">best developers and designers</Link>, we provide you with everything you need as a custom AI app development company. Dignite Studios consists of a team that takes the time to understand your audience and goals before the development stage for your AI application even begins. We deliver functional AI applications with clear communication and reliable solutions. 
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Specialized Generative AI Development Services for Different "}
        header2={"Industries"}
        para={
          "The expert developers at Dignite Studios offer ai development services according to your growth goals. Being one of the AI app developers, we don’t build one-size-fits-all solutions to all the AI applications because our experience stops us from offering the exact same solution for every industry and business. Offering ai agent development services for every industry is our speciality. Also, we believe, building AI apps around your industry needs gives you an advantage in the market and we’re here to guide you for that. "
        }
        button={"Let’s Talk Today"}
      />
      <MobileApp
        header={"Benefits of Custom AI Agent "}
        header2={"Development Services "}
        button={"Build Smarter Apps with AI"}
        para={
          <>
       There are several reasons why investing in custom generative AI development services before you start developing can increase the chances of your app’s success through AI chatbot development services. Because you can avoid costly mistakes only when you’ve the right guidance. The right guidance can make all the difference in how you choose to build a product that can compete in the market through ai application development services. 
          </>
        }
        cards={BENEFITS}
      />
      <Features
        header={"Key Features for a Successful AI Development App"}
        header2={""}
        para={
          <>
           Every AI app needs some mandatory features that are the must haves when you’re creating the AI applications. Features that make the whole experience simple and operations smooth cannot be treated as optional. Because there are features that’d make the whole experience smooth for users and help businesses attract and retain customers. 
          </>
        }
        features={FEATURES}
        button={"Get AI App Recommendations"}
      />
      <SuccessStories
        header={"The Success "}
        header2={"Stories"}
        para={
          "You can explore Dignite Studios’ case studies section and see how we serve the industries and businesses, helping them build AI applications through generative ai development services that just work perfectly for their industries and niche. The case studies we’re mentioning here highlight the challenges we dealt with and the app solutions we provided. "
        }
      />
      <CTA />
      <Testimonials
        test={test}
        header={"What Clients Say About Our AI Development"}
        header2={"Company"}
      />
      <Faq faqs={faqs} />
      <ContactUs
        img={"/services/ai-dev/c-img.webp"}
        pathname={"AI App dev"}
        header={"Ready to Bring Your AI App to Life?"}
        header2={""}
        para={
          " With our AI app development services, your ideas can end up being fully functional apps that you’ve always wanted. Our team is here to guide you every step of the way. Let’s create AI solutions that are smart and designed to grow with your business. "
        }
        btn={"Request Your AI App Quote"}
      />
    </div>
  );
};

export default AiAppDevelopment;

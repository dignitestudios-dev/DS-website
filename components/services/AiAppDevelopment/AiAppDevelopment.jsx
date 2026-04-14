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
    desc: "Every AI app we build includes intelligent workflows that automate complex processes and improve overall efficiency.",
    icon: <FaCogs size={50} color="#F15C20" />,
  },
  {
    title: "AI driven Decision Engines",
    desc: "Advanced decision engines powered by AI help your application make smarter choices in real-time.",
    icon: <FaBrain size={50} color="#F15C20" />,
  },
  {
    title: "Real-time Predictive Analytics",
    desc: "Incorporate predictive analytics to stay ahead of the curve and make data-driven decisions that impact your business.",
    icon: <FaChartLine size={50} color="#F15C20" />,
  },
  {
    title: "Natural Language Understanding",
    desc: "Leverage NLU to build applications that understand and respond to human language naturally.",
    icon: <FaLanguage size={50} color="#F15C20" />,
  },
  {
    title: "Seamless API Integrations",
    desc: "Integrate your AI application with existing systems and APIs to ensure a smooth and unified workflow.",
    icon: <FaLink size={50} color="#F15C20" />,
  },
  {
    title: "Automated Content Generation",
    desc: "Use AI to automate content creation, from text to images, saving you time and resources.",
    icon: <FaPenNib size={50} color="#F15C20" />,
  },
  {
    title: "Advanced Data Visualization",
    desc: "Visualize complex data in a way that’s easy to understand and provides actionable insights.",
    icon: <FaChartBar size={50} color="#F15C20" />,
  },
  {
    title: "Secure Multi-layer Authentication",
    desc: "Protect your data with multi-layer authentication and security features that ensure a safe experience.",
    icon: <FaShieldAlt size={50} color="#F15C20" />,
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
        We provide custom generative AI development services that include
        high-quality solutions for various business models. Our team builds AI
        applications that specifically target your business goals.
      </>
    ),
  },
  {
    icon: "call",
    icon2: "call1",
    title: "AI Strategy and Consulting Services",
    description: (
      <>
        Our experts provide AI strategy and consulting services to help you
        understand how AI can help your business. We help you identify the right
        opportunities and provide a roadmap.
      </>
    ),
  },
  {
    icon: "h",
    icon2: "h1",
    title: "AI Chatbots and Virtual Assistants",
    description: (
      <>
        We build custom AI chatbots and virtual assistants that help you
        automate customer support and provide a better experience. Our AI agents
        understand user intent.
      </>
    ),
  },
  {
    icon: "set",
    icon2: "set1",
    title: "AI Integration and Automation",
    description: (
      <>
        Our developers specialize in AI integration and automation services that
        help you integrate AI into your existing applications and automate your
        business processes.
      </>
    ),
  },
  {
    icon: "w",
    icon2: "w1",
    title: "AI Product Design",
    description: (
      <>
        We provide AI product design services that help you create amazing UI/UX
        designs for your AI applications. Our designers focus on intuitive and
        engaging interfaces.
      </>
    ),
  },
  {
    icon: "bug",
    icon2: "bug1",
    title: "AI App Maintenance",
    description: (
      <>
        We provide AI app maintenance services to ensure that your AI
        application stays functional and secure. Our team provides regular
        updates and support.
      </>
    ),
  },
  {
    icon: "cloudes",
    icon2: "cloudes1",
    title: "AI Vision and Image Intelligence",
    description: (
      <>
        We provide AI vision and image intelligence services that help you build
        applications that can understand and analyze images using advanced AI
        models.
      </>
    ),
  },
];

const highlights = [
  {
    icon: "/services/ai-dev/1.webp",
    title: "AI First Development Strategy",
    desc: "We prioritize AI in our development strategy, ensuring your application leverages the latest advancements to stay ahead.",
  },
  {
    icon: "/services/ai-dev/2.webp",
    title: "Proven AI Frameworks",
    desc: "We use established AI frameworks like TensorFlow and PyTorch to build reliable and high-performance AI solutions.",
  },
  {
    icon: "/services/ai-dev/3.webp",
    title: "Expert AI Engineers",
    desc: "Our team of expert AI engineers has the experience and skills to bring your most complex AI ideas to life.",
  },
  {
    icon: "/services/ai-dev/4.webp",
    title: "Focus on User Experience",
    desc: "We focus on creating intuitive and engaging AI experiences that resonate with your users and drive results.",
  },
  {
    icon: "/services/ai-dev/5.webp",
    title: "Secure and Scalable Solutions",
    desc: "Our AI solutions are built to be secure and scalable, ensuring they grow with your business and protect your data.",
  },
  {
    icon: "/services/ai-dev/6.webp",
    title: "Ongoing Support and Maintenance",
    desc: "We provide ongoing support and maintenance to ensure your AI application stays functional and competitive.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "Our AI applications help in patient data analysis and predictive diagnostics, ensuring compliance while improving outcomes.",
  },
  {
    title: "Fintech Apps",
    desc: "We build AI-powered fintech solutions for fraud detection, automated trading, and personalized financial advice.",
  },
  {
    title: "Retail and E-commerce Apps",
    desc: "Enhance your retail business with AI-driven recommendations, inventory management, and personalized shopping experiences.",
  },
  {
    title: "Educational Apps",
    desc: "AI-powered educational platforms that offer personalized learning paths and automated assessment tools for students.",
  },
  {
    title: "Real Estate Apps",
    desc: "We provide AI solutions for property evaluation, virtual tours, and automated management tools in the real estate sector.",
  },
  {
    title: "Logistics and Supply Chain",
    desc: "Optimize your supply chain with AI-driven predictive logistics, route optimization, and inventory forecasting.",
  },
];

const test = [
  {
    name: "Dr. Olivia Bennett",
    designation: "— Chief Technology Officer",
    review:
      "“The generative AI solutions developed by Dignite Studios have transformed our data processing workflows, delivering accuracy we didn't think was possible.”",
  },
  {
    name: "Marcus Li",
    designation: "— Innovation Lead",
    review:
      "“Working with their AI experts was a game changer. They didn't just build a tool; they helped us define our entire AI strategy.”",
  },
  {
    name: "Sarah Jensen",
    designation: "— Director of Digital Transformation",
    review:
      "“The custom AI agents have significantly improved our customer engagement metrics, providing personalized experiences at scale.”",
  },
  {
    name: "James Carter",
    designation: "— Head of Logistics",
    review:
      "“Predictive logistics powered by their AI models have saved us thousands in operational costs through better route optimization.”",
  },
  {
    name: "Elena Rodriguez",
    designation: "— Founder & CEO",
    review:
      "“From NLP to computer vision, their team's breadth of AI expertise is impressive. They delivered our MVP ahead of schedule.”",
  },
  {
    name: "David Lee",
    designation: "— Head of Data Science",
    review:
      "“Dignite Studios integrated complex AI models into our existing infrastructure seamlessly, ensuring scalability and security.”",
  },
  {
    name: "Sophia Martinez",
    designation: "— Operations Director",
    review:
      "“The automation solutions provided have freed up our team to focus on high-value tasks, significantly boosting our productivity.”",
  },
];

const BENEFITS = [
  {
    title: "Enhanced Operational Efficiency",
    desc: "AI automates repetitive tasks, allowing your team to focus on strategic growth and high-impact activities.",
    icon: <FaSync color="#F15C20" size={25} />,
  },
  {
    title: "Faster Decision Making",
    desc: "Real-time AI insights empower your business to make informed decisions quickly, giving you a competitive edge.",
    icon: <FaChartLine color="#F15C20" size={25} />,
  },
  {
    title: "Personalized Customer Experiences",
    desc: "Custom AI agents deliver tailored interactions that increase customer satisfaction and brand loyalty.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Cost Savings through Automation",
    desc: "Reducing manual effort through AI automation leads to significant long-term cost savings for your business.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "High Accuracy and Reliability",
    desc: "Our AI models are trained for precision, ensuring high accuracy and reliability across your application.",
    icon: <FaShieldAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "What is generative AI development?",
    answer:
      "Generative AI development involves building applications that can create new content, such as text, images, or code, using advanced machine learning models like LLMs.",
  },
  {
    id: 2,
    question: "How can AI help my business?",
    answer:
      "AI can help automate processes, provide data-driven insights, personalize customer experiences, and improve operational efficiency across various industries.",
  },
  {
    id: 3,
    question: "Do you build custom AI agents?",
    answer:
      "Yes, we specialize in building custom AI agents tailored to your specific business needs, from customer support chatbots to complex decision engines.",
  },
  {
    id: 4,
    question: "Is AI integration secure?",
    answer:
      "Security is our priority. We implement multi-layer authentication and data protection features to ensure that your AI integration is secure and compliant.",
  },
  {
    id: 5,
    question: "Which industries do you serve?",
    answer:
      "We provide AI development services for a wide range of industries including healthcare, fintech, retail, education, real estate, and logistics.",
  },
  {
    id: 6,
    question: "How long does it take to build an AI app?",
    answer:
      "The timeline depends on the complexity of the project. We follow a structured process to ensure timely delivery without compromising on quality.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and AI Strategy",
    desc: "We align your business goals with the right AI opportunities, creating a detailed roadmap for your application's success.",
  },
  {
    step: "02",
    title: "Data Engineering and Preparation",
    desc: "Our team prepares your data for AI training, ensuring it is clean, structured, and ready to provide accurate results.",
  },
  {
    step: "03",
    title: "AI Model Selection and Development",
    desc: "We select and fine-tune the best AI models for your specific needs, building a functional engine for your application.",
  },
  {
    step: "04",
    title: "Integration and UI/UX Design",
    desc: "We integrate the AI models into your application and design an intuitive interface for an amazing user experience.",
  },
  {
    step: "05",
    title: "Testing and Optimization",
    desc: "Thorough testing and optimization ensure your AI application is secure, reliable, and performs at its best.",
  },
  {
    step: "06",
    title: "Post-Launch and Scaling",
    desc: "We provide support after the launch and help you scale your AI application as your business grows.",
  },
];

const AiAppDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="About"
        heading2={"Dignite Studios"}
        para="AI is everywhere already, but our developers specialize in building something through Generative AI development services that’s actually useful with it. The demand keeps growing for more and better digital experiences. And it is a reason why every business across different industries wants to shift to AI to stay competitive. It also helps automate processes and better serve their customers. At Dignite Studios, we’re experts at what we do. You want to build an AI powered product from scratch? We’re the perfect choice. You just want to enhance an existing application? Our developers have got your back."
        button="Talk to Our AI Experts"
      />
      <Services
        services={services}
        header={"Generative AI Development"}
        header2={"Solutions"}
        button={"Build Smarter Apps with AI"}
        para={
          "We provide custom generative AI development services that include high-quality solutions for various business models. Our team builds AI applications that specifically target your business goals and ensure that your app provides amazing value to your audience."
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
        header={"The Process Behind Reliable AI Development Services"}
        para={
          "Every AI application we develop solves a problem. We follow a structured process through generative AI development services that ensures your AI application is built with quality and provides amazing value to your business."
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
            We are experts at building AI applications. Our generative AI
            development company consists of a team who takes the time to
            understand your goals before the development begins. We deliver
            functional applications with clear communication and reliable
            solutions. Our developers provide you with everything you need and
            build an application that just works.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Specialized Generative AI Development Services for Different "}
        header2={"Industries"}
        para={
          "The expert developers at Dignite Studios design AI applications according to your goals. Our expertise and experience prevent us from creating the exact same product for all the niches and industries through generative AI development services. Offering customized AI solutions for every industry is our specialty."
        }
        button={"Let’s Talk Today"}
      />
      <MobileApp
        header={"Benefits of Custom AI Agent Development Services "}
        header2={"for Your Business"}
        button={"Build Smarter Apps with AI"}
        para={
          <>
            There are several reasons why investing in custom generative AI
            development services is a smart move for your business. From
            improving operational efficiency to providing personalized customer
            experiences, custom AI solutions offer a competitive advantage.
          </>
        }
        cards={BENEFITS}
      />
      <Features
        header={"Key Features for a Successful AI Development App"}
        header2={""}
        para={
          <>
            Every AI app needs some mandatory features to ensure that it
            provides value to the users. Our generative AI development services
            focus on incorporating these essential features into your AI
            application to ensure that it delivers amazing performance.
          </>
        }
        features={FEATURES}
        button={"Get AI App Recommendations"}
      />
      <SuccessStories
        header={"The Success Stories"}
        header2={""}
        para={
          "You can explore Dignite Studios’ case studies section where we show you how we build AI applications through custom AI agent development services just from ideas. Each example highlights the unique challenges we faced and the custom solutions we implemented. So the results were impeccable."
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
        header={"Start Building Your AI App Today"}
        header2={""}
        para={
          "Share your project requirements with us and let our expert AI developers guide you through the process of building a successful AI application. "
        }
        btn={"Let’s Build Your AI App Today"}
      />
    </div>
  );
};

export default AiAppDevelopment;

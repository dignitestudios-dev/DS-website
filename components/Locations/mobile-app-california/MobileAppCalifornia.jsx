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
        The{" "}
        <Link href="/ios-app-development" className="underline">
          iOS / iPhone app development
        </Link>{" "}
        is the right choice if your target audience includes iOS users. Using
        Swift and SwiftUI, we develop iOS applications optimized for user
        experience. We focus on apps that excel in healthcare, fintech,
        wellness, and enterprise sectors.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        If you're seeking{" "}
        <Link href="/android-app-development" className="underline">
          Android app development services
        </Link>{" "}
        in California, you can trust us with your Android app development. We
        ensure applications are optimized for devices like Samsung, Pixel, and
        OnePlus.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Cross-Platform / Hybrid App Development",
    description: (
      <>
        Thanks to Flutter and React Native, we deliver up to 40% faster. Our{" "}
        <Link href="/hybrid-app-development" className="underline">
          hybrid mobile app development services
        </Link>{" "}
        keep your project running smoothly while delivering quality results
        without blowing the budget.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Custom Solutions / Native & Web Apps",
    description: (
      <>
        When it comes to building custom solutions, we are the best{" "}
        <Link href="/mobile-app-development" className="underline">
          mobile app development company
        </Link>{" "}
        in California. Our services include{" "}
        <Link href="/mobile-app-development" className="underline">
          mobile app development
        </Link>
        ,{" "}
        <Link href="/ui-ux-design" className="underline">
          UI/UX design
        </Link>
        ,{" "}
        <Link href="/pwa-development" className="underline">
          PWA development
        </Link>
        ,{" "}
        <Link href="/hybrid-app-development" className="underline">
          hybrid app development
        </Link>
        , and{" "}
        <Link href="/web-app-development" className="underline">
          web app development
        </Link>
        .
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "Design Services",
    description: (
      <>
        Make every tap count with our{" "}
        <Link href="/mobile-app-design" className="underline">
          mobile app design services
        </Link>{" "}
        including{" "}
        <Link href="/ios-app-design" className="underline">
          iOS app design
        </Link>{" "}
        and{" "}
        <Link href="/android-app-design" className="underline">
          Android app design services
        </Link>
        . We focus on user-centric interfaces and consistent branding to create
        engaging experiences.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance, Consulting & Testing",
    description: (
      <>
        We provide{" "}
        <Link href="/app-support" className="underline">
          mobile app support & maintenance services
        </Link>
        , mobile app consulting services, and app testing & QA services to
        ensure your app remains secure and up-to-date. We also support app
        launch and deployment to maximize ROI.
      </>
    ),
  },
];

const highlights = [
  {
    title: "12+ Years of Revenue-Driven App Development",
    desc: "For over a decade, we’ve helped businesses across California transform ideas into high-performing mobile apps. Every solution we deliver is built to create measurable business impact and long-term value.",
  },
  {
    title: "Silicon Valley-Level Expertise at Competitive Pricing",
    desc: "Get access to elite design, development, and innovation expertise—without Silicon Valley price tags. Our California mobile app development services are tailored to your market and business goals.",
  },
  {
    title: "Dedicated California-Based Project Managers",
    desc: "Your dedicated project manager ensures milestones are met, risks are addressed early, and your objectives guide every decision—providing clear communication and smooth execution throughout.",
  },
  {
    title: "100% Transparent Process & Weekly Sprints",
    desc: "No guessing, no jargon, and no hidden progress. We provide complete visibility into every stage of development through weekly sprints, ensuring accountability, adaptability, and timely delivery.",
  },
  {
    title: "Post-Launch Support & Continuous Growth",
    desc: "Launch is just the beginning. Our ongoing support, optimization, and scaling services ensure your app stays competitive and grows alongside your business in the California market.",
  },
  {
    title: "Custom Solutions Tailored to Your Business",
    desc: "Every app we build is custom-developed to align with your operational goals and market requirements. Partnering with a leading California mobile app development company ensures a solution that keeps you ahead of the competition.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "Let’s be honest. Let’s face it: a nice-looking app isn’t enough in healthcare. You need one that’s secure, compliant, and actually works. That’s why, as a Healthcare app development company we build HIPAA-ready apps. Telemedicine, patient portals, remote monitoring, you name it. And don’t worry, as the healthcare world spins forward, your app keeps up.",
  },
  {
    title: "Fintech Apps ",
    desc: "You already know that stability and trust are non-negotiable if you’re working in the fintech industry. We help you launch secure fintech apps and payment mobile apps with bank-grade encryption, multi-layer authentication, KYC/AML support, and real-time transaction management. You get a platform that protects sensitive data, handles large transaction volumes, and meets modern financial compliance standards. Whether you’re building digital banking, investment tools, or payment gateways, we give you the technical foundation that keeps your users confident and your business risk-free.",
  },
  {
    title: "E-commerce & Retail Apps ",
    desc: "Nobody likes a slow or complicated shopping app so we don’t build them. Our e-commerce and retail apps keep things quick, simple, and tailored to your customers. Storefront? Check. Inventory? Check. POS and loyalty? All covered. You get fewer cart abandonments and more happy buyers. Less cart abandonment, more customer satisfaction. Whether scaling or starting new, your tech stays quick and growth-ready.",
  },
  {
    title: "Education & e-Learning Apps ",
    desc: "Nobody wants an educational app to be difficult. Yes. We hate that too. That’s why we create apps that guide students step by step through courses, videos, quizzes while teachers get dashboards that actually help them do their job. And as your community grows, the app grows with it. No surprises, just smooth learning.",
  },
  {
    title: "Real Estate Apps",
    desc: "Your users need clarity and convenience. Our real estate apps and property tech apps include property listings, advanced filters, virtual tours, mortgage calculators, and lead management tools. From intuitive property exploration to a smart backend for listing management, our app leverages technology to make every interaction fast, reliable, and effortless. Elevate your leads and transactions with a system built for today’s real estate market.",
  },
  {
    title: "Logistics & On-Demand Apps",
    desc: "Imagine a day when every delivery just works. Drivers know exactly where to go, orders are managed automatically, payments are handled safely, and your customers are always in the loop. That’s what our logistics and on-demand apps do. We make logistics simple.",
  },
];

const test = [
  {
    name: "Los Angeles",
    designation: "— SaaS Founder",
    review:
      "“Dignite Studios helped us launch 3 months faster than expected. Their communication easily makes them the top mobile app developers California has to offer.” ",
  },
  {
    name: "San Diego",
    designation: "— E-Commerce CEO",
    review:
      "“Our ROI jumped significantly within the first quarter. The team understood our goals instantly.” ",
  },
  {
    name: "San Francisco",
    designation: "— Healthcare Startup",
    review:
      "“Professional and incredibly efficient. Their ability to deliver a smooth user experience was impressive.” ",
  },
  {
    name: "Silicon Valley",
    designation: "— Fintech Product Lead",
    review:
      "“ If you need the best mobile app developers in California, this is where you go.” ",
  },
];

const benefits = [
  {
    title: "Customer Retention",
    desc: "Mobile app lets you enhance customer retention by making your brand easily accessible.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility",
    desc: "Increased visibility leads to stronger connections with your audience, so stay top-of-mind with a branded app.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Drive Revenue",
    desc: "Mobile apps open new ways to grow your business through in-app purchases.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Actionable Insights",
    desc: "Built-in analytics help you understand user behavior and optimize the experience.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Competition",
    desc: "Having an app gives your business an innovative edge in the market.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How much does mobile app development cost in California?",
    answer:
      "Mobile app development costs vary based on features, platform, design complexity, and integrations. Simple apps cost less, while advanced and enterprise-grade applications require higher investment. Our mobile app developers in California provide transparent pricing after defining the project scope. Request a project estimate for exact numbers.",
  },
  {
    id: 2,
    question: "How long does it take to develop a mobile app in California?",
    answer:
      "Timelines depend on app complexity and features. A basic app can take a few weeks, while feature-rich applications may take several months. With our expert mobile app developers in California, you can move faster with a clear roadmap and start your app in as little as 7 days.",
  },
  {
    id: 3,
    question: "Do you develop apps for both iOS and Android?",
    answer:
      "Yes. Our professional mobile app developers in California build high-performance iOS and Android applications. We help you choose the right tech stack to ensure scalability, performance, and long-term reliability.",
  },
  {
    id: 4,
    question: "Can you build cross-platform mobile apps?",
    answer:
      "Absolutely. Our expert mobile app developers in California use Flutter and React Native to build cross-platform apps that feel fully native. This approach allows faster launches, lower costs, and wider audience reach without compromising performance.",
  },
  {
    id: 5,
    question: "Do you provide post-launch maintenance and support?",
    answer:
      "Yes. We offer ongoing post-launch maintenance, including updates, bug fixes, enhancements, and performance optimization. You can hire mobile app developers in California for a custom maintenance plan to ensure consistent performance.",
  },
  {
    id: 6,
    question: "Can you help refine my mobile app idea?",
    answer:
      "Definitely. Our strategists and skilled app developers in California help refine your idea, define features, and map user flows. We create a clear product roadmap so you can confidently start your app within 7 days.",
  },
  {
    id: 7,
    question: "What industries do you serve in California?",
    answer:
      "We serve a wide range of industries, including healthcare, fintech, retail, real estate, logistics, education, and more. Our California-based mobile app developers bring industry-specific expertise for both new builds and modernization projects.",
  },
  {
    id: 8,
    question: "Do you comply with HIPAA for healthcare apps?",
    answer:
      "Yes. Our mobile app developers in California follow HIPAA compliance standards, including PHI protection, encryption, and secure data handling. Healthcare apps are built with compliance and security from day one.",
  },
  {
    id: 9,
    question: "Can you integrate fintech payment gateways?",
    answer:
      "Yes. We integrate secure payment gateways such as Stripe, Plaid, PayPal, and bank-level systems. Our fintech app developers in California ensure compliance, security, and smooth transaction flows.",
  },
  {
    id: 10,
    question: "How do you ensure mobile app security?",
    answer:
      "Security is implemented at every stage of development. We use encryption, secure APIs, infrastructure hardening, and continuous testing. Our California app development agency follows enterprise-grade security standards to eliminate vulnerabilities.",
  },
];

const locations = [
  {
    id: 1,
    title: "Los Angeles",
    heading: "Mobile App Development Los Angeles",
    description:
      "Fast growth in LA isn’t easy but the right app makes it possible. Our team builds apps that scale, perform, and retain users. You get local expertise, instant communication, and solutions designed specifically for LA startups. No fluff. Just results.",
    pinPercent: { x: 19.5, y: 36.5 },
    cardPercent: { x: 21, y: 15 },
    direction: "up",
    cardPosition: { top: "12%", left: "20%" },
  },
  {
    id: 2,
    title: "San Francisco",
    heading: "Mobile App Development San Francisco",
    description:
      "For San Francisco-based founders, our App development company in San Diego brings the innovation your product needs. You get clean architecture, futuristic tech stacks, and product strategy influenced by one of the world’s top tech hubs.",
    pinPercent: { x: 45.5, y: 35 },
    cardPercent: { x: 49, y: 12 },
    direction: "up",
    cardPosition: { top: "9%", left: "48%" },
  },
  {
    id: 3,
    title: "San Diego",
    heading: "App Development Company in San Diego",
    description:
      "If you are operating in a calmer but fast-growing tech environment, our app development company in San Diego gives you development consistency, clear timelines, and user-focused execution without the noise of big-city churn.",
    pinPercent: { x: 58, y: 46 },
    cardPercent: { x: 56, y: 72 },
    direction: "down",
    cardPosition: { top: "69%", left: "34.5%" },
  },
  {
    id: 4,
    title: "Silicon Valley",
    heading: "Silicon Valley App Development Expertise",
    description:
      "With detailed Silicon Valley app development expertise, we help founders build smarter, faster, and more competitively. Our team brings the same mindset. Lean execution, rapid iterations, and market-ready solutions aligned with global startup standards.",
    pinPercent: { x: 67, y: 47 },
    cardPercent: { x: 70, y: 72 },
    direction: "down",
    cardPosition: { top: "69%", left: "69%" },
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We define business goals, user needs, and technical direction before writing a single line of code.",
  },
  {
    step: "02",
    title: "UI/UX Prototyping",
    desc: "Our design teams create clean and intuitive interfaces that improve usability and user engagement.",
  },
  {
    step: "03",
    title: "Agile Development & Sprints",
    desc: "Weekly builds and adaptive planning ensure steady progress with room for smart improvements.",
  },
  {
    step: "04",
    title: "QA Testing",
    desc: "Apps are thoroughly tested for performance, security, and cross-device compatibility before release.",
  },
  {
    step: "05",
    title: "App Launch & Deployment",
    desc: "We handle smooth publishing on the App Store and Google Play with complete technical support.",
  },
  {
    step: "06",
    title: "Post-Launch Optimization",
    desc: "Ongoing monitoring and updates help your app grow with evolving user demand and business needs.",
  },
];

const MobileAppCalifornia = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="About"
        heading2={"Dignite Studios"}
        para="Looking for a top mobile app company in California? That's us. Dignite Studios is a team of 200+ expert mobile app developers who work with startups and growing businesses and help them turn their ideas into scalable, high-performing mobile apps. Including strategy, UI/UX design with agile development and deployment, we make sure to build apps that are reliable, engaging, and built to grow with your business. With 5+ years of experience and an expert team of designers, project managers, and app developers California, we build apps exactly the way you envisioned."
        button="Talk to our California-based team"
      />
      <Services
        services={services}
        header={"Our Mobile App Development Services"}
        header2={"in California"}
        para={
          "When you work with Dignite Studios, you’re working with a partner who takes full ownership. We designed our mobile app development services according to your needs so that it can help you develop an app you envision."
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why California Businesses Choose"}
        header2={"Dignite Studios"}
        ctaHeader={"Still wondering if we're the right fit?"}
        ctaPara={
          "You’ve seen what sets us apart. Now let’s explore your app idea. We’ll discuss your app vision, technical roadmap, and long-term growth plans."
        }
        ctaBtn={"Book Free Consultation"}
        cta={
          <div className="bg-gradient-to-b hover:scale-105 z-50 absolute text-white  shadow-xl hover:shadow-orange-300 opacity-100 shadow-orange-200 transition-all ease-linear hover:shadow-2xl w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  from-[#f15b20] to-[#FF8F62]">
            <img src="/location/mobile-california/icons/lg2.png" alt="lggg" />
            <div className="md:w-[45%] mx-auto pb-8 -mt-40 space-y-4 flex flex-col items-center text-center">
              <h1 className="text-[45px] font-bold text-white leading-[45px]">
                Still wondering if we're the right fit?
              </h1>
              <p>
                You’ve seen what sets us apart. Now let’s explore your app idea.
                We’ll discuss your app vision, technical roadmap, and long-term
                growth plans.
              </p>
              <div className="flex items-center group justify-center ">
                <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                  Book Free Consultation
                </button>
                <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                  <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        }
        para={
          "Businesses in California turn to Dignite Studios because we bring them the results they want. We are not just some people claiming to be the Top mobile app development company; we have a team of the best mobile app developers in California. We are the top choice for businesses and founders who want growth."
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Specialized App Development for"}
        header2={"California Industries"}
        para={
          "At Dignite Studios, we don’t offer one-size-fits-all products. We build mobile app solutions shaped around your business model, compliance needs, and growth plans."
        }
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Our Mobile App Development Process"}
        para={
          "Our mobile app development agency articulates the brand’s voice and values through a systematic approach below:"
        }
      />
      <MobileApp
        header={"Benefits Of Mobile App Development In"}
        header2={"California"}
        para={
          "Partnering with reliable mobile app developers in California delivers long term value and competitive advantage for the modern businesses."
        }
        cards={benefits}
      />
      <SuccessStories
        header={"Success Stories with"}
        header2={"Dignite Studios"}
        para={
          "Curious how Dignite Studios works? Check out our case studies to see real projects, clever solutions, and apps we’ve built that actually make life easier for businesses like yours."
        }
      />
      <CTA />
      <TechAndTools />
      <SEO
        header={"California-Specific Coverage"}
        para={
          "Choosing the right partner in California can completely change the way your app performs in a competitive market. Every city here has its own rhythm, user behavior, and tech expectations, and your product needs to match that energy."
        }
        locations={locations}
      />
      <Testimonials
        test={test}
        header={"Client"}
        header2={"Testimonials"}
        para={
          "When you’re choosing a partner, hearing from others who’ve been in your shoes matters, as one of the best mobile app developers California companies work with, we focus on outcomes, not promises."
        }
      />
      <Faq faqs={faqs} />
      <ContactUs
        img={"/location/mobile-boston/c-img.png"}
        pathname={"Mobile Dev in California"}
        header={"Ready to build a high performance mobile application?"}
        header2={""}
        para={
          "Connect with the leading mobile app developers in California and start your project with clarity and confidence."
        }
        btn={"Talk with Experts"}
      />
    </div>
  );
};

export default MobileAppCalifornia;

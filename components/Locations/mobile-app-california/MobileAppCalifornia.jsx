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
        The iOS / iPhone app development is the right choice if your target
        audience includes iOS users. Using Swift and SwiftUI, we develop iOS
        applications optimized for user experience. We focus on apps that excel
        in healthcare, fintech, wellness, and enterprise sectors.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        If you’re seeking Android app development services in California, you
        can trust us with your Android app development. We make sure to develop
        Android applications that are fully optimized for devices like Samsung,
        Pixel, and OnePlus.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Cross-Platform / Hybrid App Development",
    description: (
      <>
        Thanks to Flutter and React Native, we can get it done up to 40% faster.
        Our Hybrid mobile app development services keep your project running
        smoothly, so if you’re all about quick results without blowing the
        budget, hybrid development is your perfect match.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Custom Solutions / Native & Web Apps",
    description: (
      <>
        When it comes to building custom solutions, we are the best custom
        mobile app development company in California. We provide custom mobile
        app development. Our offerings include native app development services,
        PWA development services, hybrid app development services, and web app
        development services.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "Design Services",
    description: (
      <>
        Make every tap count with our mobile app design services include iOS app
        design services and Android app design services, focusing on
        user-centric interfaces. The goal? Consistent branding. Every design is
        crafted to make your app engaging.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance, Consulting & Testing",
    description: (
      <>
        We provide mobile app support & maintenance services, mobile app
        consulting services, and app testing & QA services to ensure your app
        remains secure and up-to-date. We support your app launch & deployment
        to maximize ROI.
      </>
    ),
  },
];

const highlights = [
  {
    title: "12+ Years of Apps Development",
    desc: "For over a decade, we’ve guided businesses in mobile app development in California to turn concepts into high-performing apps.",
  },
  {
    title: "Silicon Valley-Level Expertise",
    desc: "Our California mobile app development services provide top-tier design and development.",
  },
  {
    title: "Dedicated Project Managers",
    desc: "Your project manager keeps the entire build on track, and you get smooth execution throughout.",
  },
  {
    title: "100% Transparent Process",
    desc: "We will share the updates. This way, we ensure accountability and adaptability according to your business.",
  },
  {
    title: "Post-Launch Support",
    desc: "Our support services ensure your app remains competitive, so you can easily rely on our California mobile app development services.",
  },
  {
    title: "Custom Solutions",
    desc: "Every app is built to meet your specific market requirements through Custom mobile app development California.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "As a Healthcare app development company, we build HIPAA-ready apps. Telemedicine, patient portals, remote monitoring, you name it.",
  },
  {
    title: "Fintech Apps",
    desc: "Through our fintech app development services, we help you launch secure fintech apps and payment mobile apps with multi-layer authentication, KYC/AML support, and transaction management.",
  },
  {
    title: "E-commerce & Retail Apps",
    desc: "Our ecommerce application development services keep things quick, simple, and tailored to your customers. Storefront? Check. Inventory? Check. POS and loyalty? All covered.",
  },
  {
    title: "Education & e-Learning Apps",
    desc: "We offer education app development services that guide students step by step through courses, videos, and quizzes, while teachers get dashboards that actually help them do their job.",
  },
  {
    title: "Real Estate Apps",
    desc: "Our real estate app development services offer property tech apps that include property listings, advanced filters, virtual tours, mortgage calculators, and lead management tools.",
  },
  {
    title: "Dating & Matchmaking Apps",
    desc: "Real connections come before features. Our approach prioritizes thoughtful matching, verified identities, and privacy controls that encourage genuine engagement.",
  },
];

const test = [
  {
    name: "Los Angeles",
    designation: "SaaS Founder",
    review:
      "Dignite Studios helped us launch 3 months faster than expected. Their communication easily makes them the top mobile app developers California has to offer.",
  },
  {
    name: "San Diego",
    designation: " E-Commerce CEO",
    review:
      "Our ROI jumped significantly within the first quarter. The team understood our goals instantly.",
  },
  {
    name: "San Francisco",
    designation: " Healthcare Startup",
    review:
      "Professional and incredibly efficient. Their ability to deliver a smooth user experience was impressive.",
  },
  {
    name: "Silicon Valley",
    designation: " Fintech Product Lead",
    review:
      "If you need the best mobile app developers in California, this is where you go.",
  },
];

const benefits = [
  {
    title: "1. Customer Retention",
    desc: "Mobile app lets you enhance customer retention by making your brand easily accessible. ",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "2. Brand Visibility",
    desc: "Increased visibility leads to stronger connections with your audience, so stay top-of-mind with a branded app. ",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "3. Drive Revenue",
    desc: "Mobile apps open new ways to grow your business through its mobile sales or in-app purchases",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "4. Actionable Insights",
    desc: "You need to make smarter business decisions, so the Built-in analytics in mobile apps help you understand user behavior and optimize the experience. ",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "5. Competition",
    desc: "Having an app gives you an edge and positions your business as innovative and accessible in the California market.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How long does it take to develop a mobile app in California?",
    answer:
      "Timelines vary by features and complexity. A simple build may take weeks, while feature-rich apps take longer. To understand your exact timeline, simply request a project estimate.",
  },
  {
    id: 2,
    question: "Do you develop apps for iOS and Android?",
    answer:
      "Yes. We’ve got the best Professional mobile app developers in California at Dignite Studios, ensuring that we build high-quality iOS and Android apps that work so smoothly.",
  },
  {
    id: 3,
    question: "Can you create cross-platform apps?",
    answer:
      "Absolutely. We are a team of expert mobile app developers in California who use Flutter app development and React Native to build cross-platform apps that feel fully native",
  },
  {
    id: 4,
    question: "Do you provide post-launch maintenance?",
    answer:
      "Yes. We support you long after launch. Our dedicated team of skilled app developers in California handles updates, fixes, enhancements, and ongoing optimization.",
  },
  {
    id: 5,
    question: "Can you help refine my app idea?",
    answer:
      "Definitely, when unsure where to start, discuss your idea or project plan with our strategists so that we can guide you through features and user flow.",
  },
  {
    id: 6,
    question: "What industries do you serve in California?",
    answer:
      "We offer our services in various sectors. The list continues with healthcare, fintech, retail, real estate, logistics, education, and more. To get access to the skilled team of app developers, contact us now!",
  },
];

const locations = [
  {
    id: 1,
    title: "Los Angeles",
    heading: "Mobile App Development Los Angeles",
    description:
      "Our team builds apps that perform and retain users. You get local expertise and solutions designed specifically for LA startups.",
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
      "Our App development company in San Diego brings clean architecture, a futuristic tech stack, and a product strategy.",
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
      "Our app development company in San Diego gives you clear timelines and user-focused execution.",
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
      "With detailed Silicon Valley app development expertise, we help founders build faster and more competitively.",
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
    desc: "Clear goals lead to better products. In this phase, we align your business objectives with the app’s vision, features, and technical foundation.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "It is a mobile app development process in which a preliminary visual mock-up look has been created that exhibits the mobile app’s initial design and purpose but does not hold functional code.",
  },
  {
    step: "03",
    title: "Sprint Planning",
    desc: "The sprint planning for app development starts here and our professional mobile app developers in California determine the product roadmap and analyze the total execution time.",
  },
  {
    step: "04",
    title: "Testing & Evaluation",
    desc: "Testing at all stages of the mobile app development process steps is the leading reassurance to eradicate serious bugs, stay up-to-date with the acquainted status, and make your esteem profound.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Your app’s journey is about to take off! Deployment is the moment where preparation meets performance. Packaging, configuring servers, and ensuring smooth operation across iOS, Android, and beyond.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "The developers’ emphasis shifts to monitoring performance, fixing bugs, and optimizing features based on user feedback after the launch.",
  },
];

const MobileAppCalifornia = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero
        h1="Mobile App Development Company in"
        spanTitle="California"
        description="Building a mobile app in California? You need a dedicated team of skilled app developers. Dignite Studios is a trusted mobile app development company in California that understands quality and market fit. We have a team of professional app developers California who develop the mobile apps for the future."
        ctaText="Book a Free Consultation"
      />
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
        ctaBtn={"Talk to Our Team"}
        cta={
          <div className="bg-gradient-to-b hover:scale-105 z-50 absolute text-white  shadow-xl hover:shadow-orange-300 opacity-100 shadow-orange-200 transition-all ease-linear hover:shadow-2xl w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  from-[#f15b20] to-[#FF8F62]">
            <img src="/location/mobile-california/icons/lg2.webp" alt="lggg" />
            <div className="md:w-[50%] mx-auto pb-8 -mt-40 space-y-4 flex flex-col items-center text-center">
              <h2 className="text-[45px] font-bold text-white leading-[45px]">
                Still wondering if we're the right fit?
              </h2>
              <p>
                You’ve seen what sets us apart. Now let’s explore your app idea.
                We’ll discuss your app vision, technical roadmap, and long-term
                growth plans.
              </p>
              <Link
                href={"/contact-us"}
                className="flex items-center group justify-center "
              >
                <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                  Talk to Our Team
                </button>
                <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                  <MdArrowOutward />
                </button>
              </Link>
            </div>
          </div>
        }
        para={
          "We are not just some people claiming to be the Top mobile app development company in California; we have a team of the best mobile app developers in California."
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
        header={"Our Proven Mobile App Development Process"}
        header2={""}
        para={
          "Every app has a story. At our California agency, we follow a structured, iterative approach that brings your idea to life fast, smart, and perfectly aligned with your business vision. Here’s the process that turns concepts into apps."
        }
      />
      <MobileApp
        header={"Why Your Business Needs"}
        header2={"a Mobile App"}
        para={
          "Here’s why investing in an app from a trusted mobile app development company in California is important:"
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
      <CTA
        heading="Be Our Next"
        spanText="Success"
        description="Every successful app starts with an idea and the right collaboration. Let’s discuss your vision, challenges, and build something as amazing as you imagined."
        buttonText="Start Your App Journey Now!"
      />
      <TechAndTools
        header={"Tools, Technologies & Frameworks "}
        para={
          "Do you ever wonder what exactly makes some apps feel so smooth while some apps look like a mess? Our mobile app development services make sure yours runs smoothly, every time."
        }
      />
      <SEO
        header={"California-Specific Coverage"}
        para={
          "Choosing the right partner in California can completely change the way your app performs in a competitive market."
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
        img={"/location/mobile-boston/c-img.webp"}
        pathname={"Mobile Dev in California"}
        header={"Ready to Build Your App? Let’s Talk"}
        header2={""}
        para={
          "Don’t compromise on your app's success. Gain a competitive edge. Our professional app developers California provide expertise, creativity, and reliability. Partner with a dedicated team of skilled app developers in California to launch your app faster and smarter."
        }
        btn={"Connect with Experts Now"}
      />
    </div>
  );
};

export default MobileAppCalifornia;
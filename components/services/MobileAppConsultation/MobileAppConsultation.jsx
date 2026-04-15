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
import { FaMicrosoft, FaPencilAlt, FaUser } from "react-icons/fa";
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
  SiFigma,
  SiSketch,
  SiAdobexd,
} from "react-icons/si";

import {
  FaKey,
  FaWifi,
  FaComments,
  FaUserFriends,
  FaSyncAlt,
} from "react-icons/fa";
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
} from "react-icons/fa";
import CTA from "./CTA";
import { TbDeviceAnalytics } from "react-icons/tb";

const FEATURES = [
  {
    title: "Responsive Design",
    desc: "We ensure your web application works perfectly on all screen sizes, providing a seamless user experience.",
    icon: <FaMobileAlt size={50} color="#F15C20" />,
  },
  {
    title: "Intuitive User Interface",
    desc: "Our designs focus on ease of use, ensuring that users can navigate your web app effortlessly.",
    icon: <FaPencilAlt size={50} color="#F15C20" />,
  },
  {
    title: "Robust Security",
    desc: "We integrate high-level security measures to protect sensitive data and prevent cyber threats.",
    icon: <FaLock size={50} color="#F15C20" />,
  },
  {
    title: "Scalability",
    desc: "We build web applications that can grow with your business, handling increased users and data.",
    icon: <IoGrid size={50} color="#F15C20" />,
  },
  {
    title: "Fast Loading Speed",
    desc: "Performance is our priority, ensuring your web app loads quickly for a better user experience.",
    icon: <FaClock size={50} color="#F15C20" />,
  },
  {
    title: "Integrations",
    desc: "We connect your web application with third-party tools and APIs to enhance functionality.",
    icon: <FaCode size={50} color="#F15C20" />,
  },
  {
    title: "Analytics",
    desc: "Gain valuable insights into user behavior with integrated analytics and reporting tools.",
    icon: <TbDeviceAnalytics size={50} color="#F15C20" />,
  },
  {
    title: "Custom Dashboards",
    desc: "We create personalized dashboards that allow you to manage and visualize your data effectively.",
    icon: <FaUser size={50} color="#F15C20" />,
  },
];

const techData = {
  Frontend: [
    { name: "React", icon: <SiReact /> },
    { name: "Vue.js", icon: <SiVuedotjs /> },
    { name: "Angular", icon: <SiAngular /> },
    {
      name: "Flutter",
      icon: <SiFlutter />,
      link: "/flutter-app-development", // Internal link
    },
    {
      name: "React Native",
      icon: <SiReact />,
      link: "/react-native-app-development", // Internal link
    },
    { name: "Next.js", icon: <SiNextdotjs /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Ruby on Rails", icon: <SiRubyonrails /> },
  ],
  Design: [
    { name: "Figma", icon: <SiFigma /> },
    { name: "Sketch", icon: <SiSketch /> },
    { name: "Adobe XD", icon: <SiAdobexd /> },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: <FaAws /> },
    { name: "Azure", icon: <FaMicrosoft /> },
    { name: "GCP", icon: <SiGooglecloud /> },
    { name: "DigitalOcean", icon: <SiDigitalocean /> },
    { name: "Cloudinary", icon: <SiCloudinary /> },
  ],
};
const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "Idea Validation and Strategy Development",
    description: (
      <>
        We’re the perfect choice if you need some validation and help with the
        strategy. We will research competitors and analyze trends before
        creating a strategy.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "UI/UX Consultation",
    description: (
      <>
        You wanna create a UI that’s easy to navigate and enjoyable to use? So,
        the team would help you plan your user journeys and create wireframes.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Technology Selection",
    description: (
      <>
        The team can easily recommend the best technology and platform for your
        app. Because we’d compare native and cross-platform options so you end
        up with the platform you need.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Mobile App Architecture Planning",
    description: (
      <>
        The professionals at our company would structure databases and code
        modules for you so your app works perfectly. This gives you a foundation
        that can grow and evolve over time.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "MVP Planning and Feature Prioritization",
    description: (
      <>
        Need help with identifying the core features your app needs? We’re here
        for you to plan releases step by step. It’s going to help you increase
        functionality and reduce cost.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Compliance Guidance",
    description: (
      <>
        Making sure your app keeps data safe and meets industry regulations is
        as important so our experts would guide on encryption and
        authentication. This builds trust with users
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Monetization Strategy",
    description: (
      <>
        We help you plan ways to earn revenue through in-app purchases,
        subscriptions, or ads. This ensures your app attracts the right audience
        and continues to grow while providing value to users.
      </>
    ),
  },
];

const highlights = [
  {
    title: "Consulting Experience",
    desc: "We bring over a decade of experience in mobile app consulting. It helps businesses create functional and scalable app solutions.",
    icon: "/services/mobile-cons/1.webp",
  },
  {
    title: "Strategic and Technical Expertise",
    desc: "We provide strong strategic direction along with deep technical knowledge to guide your decisions as a trusted consulting partner,",
    icon: "/services/mobile-cons/2.webp",
  },
  {
    title: "Dedicated Project Guidance",
    desc: "Our expert consultants and project managers ensure every step stays aligned with your goals for smooth execution.",
    icon: "/services/mobile-cons/3.webp",
  },
  {
    title: "100% Transparent Process",
    desc: "We keep you informed at every stage with honest insights so you can make more mature and informed decisions.",
    icon: "/services/mobile-cons/4.webp",
  },
  {
    title: "Ongoing Consultation Support",
    desc: "Our support continues even after planning. Helping you refine and improve your app in a competitive market.",
    icon: "/services/mobile-cons/5.webp",
  },
  {
    title: "Custom Consulting Solutions",
    desc: "Every recommendation we provide is customized to your business needs to ensure the best possible outcomes.",
    icon: "/services/mobile-cons/6.webp",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "Being the best at mobile app consulting, we guide you through the whole process of building apps that meet the standards of HIPAA, completely prepared for the health sector.",
  },
  {
    title: "Fintech Apps",
    desc: "With our mobile app development consulting, you can plan launching secure fintech apps and payment mobile apps with multi-layer authentication.",
  },
  {
    title: "E-commerce & Retail Apps",
    desc: "Dignite Studios’ application development consultant would gladly help you build ecommerce stores with storefront, inventory, and POS.",
  },
  {
    title: "Education & e-Learning Apps",
    desc: "The expert app development consultant would help you build educational apps that are made for students and teachers.",
  },
  {
    title: "Real Estate Apps",
    desc: "Our application development consulting services would help you build property apps that include the features you need.",
  },
  {
    title: "Dating and Matchmaking Apps",
    desc: "The experts would help you plan an application that focuses on creating safe and engaging platforms with strong privacy controls and features that encourage genuine connections.",
  },
];
const test = [
  {
    name: "Sarah Thompson",
    designation: "CEO of FinEdge Solutions",
    review:
      "Dignite Studios helped us validate our app idea and provided a clear roadmap through mobile app development consulting. Their insights were invaluable.",
  },
  {
    name: "Mark Reynolds",
    designation: "Founder of ShopEase Retail",
    review:
      "The team’s feature prioritization guidance was spot-on. We launched with the right functionality and received excellent user feedback.",
  },
  {
    name: "Charlotte Edward",
    designation: "CTO of HealthConnect Systems",
    review:
      "They recommended the perfect tech stack for our hybrid app. Our performance and scalability have improved dramatically.",
  },
  {
    name: "James Carter",
    designation: "Product Lead at Learnify Group",
    review:
      "Their consulting services made a real difference. From strategy to execution, we felt supported at every step.",
  },
  {
    name: "Lisa Martinez",
    designation: "Director of RealtyPro Apps",
    review:
      "The mobile app growth plan they created helped us attract and retain far more users than expected.",
  },
  {
    name: "Liam Zane",
    designation: "COO of MatchMakers Inc.",
    review:
      "Professional, reliable, and insightful. Dignite Studios truly understands how to make mobile apps successful.",
  },
  {
    name: "Elena Petrova",
    designation: "Head of Product at TrendyCart Solutions",
    review:
      "We gained actionable data-driven recommendations that improved decision-making and engagement for our app.",
  },
];
const BENEFITS = [
  {
    title: "Idea Validation",
    desc: "Through our expert mobile app development consulting, the consultants would carefully analyze your mobile app idea to validate its market potential and feasibility.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Optimized Feature Prioritization",
    desc: "When you contact our application development consultant, we make sure that you focus on what truly matters to users while avoiding unnecessary complexity.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Tech Stack Recommendations",
    desc: "With our application development consulting services, the team recommends the most suitable technology stack based on your app requirements and business goals.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Mobile App Growth Planning",
    desc: "Your mobile app needs a clear growth strategy that supports your app even after the launch that you can have with our mobile app consulting services.",
    icon: <FaLock color="#F15C20" size={25} />,
  },
  {
    title: "Customer Retention",
    desc: "Our consultants guide you in creating mobile app experiences that keep users engaged by helping you understand consumer behaviors through mobile app consulting services.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
];

const InstaFEATURES = [
  {
    title: "Smart Search",
    desc: "Enable users to quickly find relevant content with intelligent and responsive search functionality.",
    icon: <FaSearch size={50} color="#F15C20" />,
  },
  {
    title: "Passwordless Login",
    desc: "Allow secure and seamless authentication using OTPs or magic links without requiring passwords.",
    icon: <FaKey size={50} color="#F15C20" />,
  },
  {
    title: "Offline Access",
    desc: "Provide uninterrupted user experience by allowing access to key features even without an internet connection.",
    icon: <FaWifi size={50} color="#F15C20" />,
  },
  {
    title: "Push Notifications",
    desc: "Keep users engaged with real-time alerts, updates, and personalized notifications.",
    icon: <FaBell size={50} color="#F15C20" />,
  },
  {
    title: "In-App Chat",
    desc: "Enable seamless communication between users with built-in real-time chat functionality.",
    icon: <FaComments size={50} color="#F15C20" />,
  },
  {
    title: "Secure Payments",
    desc: "Integrate safe and reliable payment gateways for smooth and secure transactions.",
    icon: <FaCreditCard size={50} color="#F15C20" />,
  },
  {
    title: "Social Sign-In",
    desc: "Allow users to quickly sign in using their existing social media accounts for convenience.",
    icon: <FaUserFriends size={50} color="#F15C20" />,
  },
  {
    title: "Real-Time Updates",
    desc: "Ensure instant data synchronization and live updates for a dynamic user experience.",
    icon: <FaSyncAlt size={50} color="#F15C20" />,
  },
];

const faqs = [
  {
    id: 1,
    question:
      "Do you provide complete mobile app consulting services that actually helps?",
    answer:
      "Yes, we are expert consultants. We can take your mobile app from idea to launch. The consulting we offer would help you with validating concepts. You can get a growth strategy and a lot more. The team would provide clear guidance that aligns with your business goals.",
  },
  {
    id: 2,
    question: "How much time does your typical mobile app consulting take?",
    answer:
      "Honestly, it all depends on your app and business needs. Consulting usually lasts a few weeks to a few months. But if you need us to be, we’d be there for you during the development to clear up any confusions. By the end, you will have a clear plan and strategy.",
  },
  {
    id: 3,
    question:
      "If help is needed on MVP and feature prioritization, can you provide that?",
    answer:
      "Yes, gladly. We would love to help you launch an MVP and decide which features to build first. The main goal is to focus on what’s important to users and what’s not. So by reducing unnecessary work, we can definitely guarantee you that your app will deliver value quickly.",
  },
  {
    id: 4,
    question:
      "Can you provide assistance with the strategies even after we’re done launching?",
    answer:
      "Yes. Dignite Studios’ consulting service isn’t just limited to planning and helping beforehand. We’re experienced consultants and you’d get help with monitoring performance and growing your app after launch. This makes sure that your app is going to continue to attract users.",
  },
  {
    id: 5,
    question:
      "Do you also offer your consultation for both startups and enterprises?",
    answer:
      "Well, we work with businesses of all sizes gladly. The experts are there for startups and enterprises and every type of business whoever needs our help. You get guidance accordingly because consultation is tailored and every client receives practical solutions that match their needs and goals.",
  },
  {
    id: 6,
    question: "Can you help with technology and platform recommendations?",
    answer:
      "Of course. We can suggest the best technologies and platforms based on your growth plans. When it comes to guidance, we can assure that your app is efficient and secure. You get a solution that performs well across devices and it can adapt as your business and user base grow.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Strategy",
    desc: "In this phase, we align your business goals with the app’s vision and features because when the goals are clear, the product turns out amazing.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "It is an iOS app development process in which a preliminary visual mock-up has been created to show the mobile app’s initial design.",
  },
  {
    step: "03",
    title: "Development Phase ",
    desc: "The iOS development phase begins, and our expert mobile app developers starting working according to the product roadmap and total execution time.",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "Conducting tests at every stage of the iOS development process helps keeping up with the latest status updates.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "The deployment stage of the iOS application development is where preparation connects performance, resulting in smooth operation across iOS devices.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "Once the iOS app launch is done, the developers’ focus shifts to checking performance and optimizing features based on user feedback.",
  },
];

const MobileAppConsultation = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="Experienced App Development  "
        heading2={"Consultant"}
        para="Dignite Studios is more than just a name in the industry of mobile applications. Dignite Studios has delivered over 300+ projects globally to different clients, having over 10+ years of experience in different industries and multiple niches. The goal for us is to help businesses and startups in every way we can. And successfully, the team moves forward with our mission by offering mobile app consulting services. The team offers its expertise in strategic guidance and professional development so your app turns out as amazing as you imagined. Your amazing idea just needs some professional shaping from our experts to become a product everyone would want to use. "
        button="Get a Free Quote Today "
      />
      <Services
        services={services}
        header={"Top Mobile App Consulting"}
        header2={"Services"}
        button={"Get Our Services Today"}
        para={
          "When you are working with Dignite Studios for consulting services, you’re working with a team that adds commitment to the work ethic first. As an expert application development consultant, we have refined our consulting services to meet your needs. Working with us means you get strong commitments and mobile app consultation prepared by Dignite Studios. "
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why You Should Choose"}
        header2={"Dignite Studios"}
        ctaHeader={"Make the Best Choice"}
        ctaPara={
          "Dignite Studios is one of the leading web application development companies. Our developers are professional and deliver tailored to your business needs. The expert team combines agile processes to ensure timely delivery and ongoing support. Working with us comes with reliable web applications that drive growth."
        }
        ctaBtn={"Make the Best Choice"}
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
                  Make the Best Choice
                </h2>
                <p>
                  Dignite Studios is one of the leading web application
                  development companies. Our developers are professional and
                  deliver tailored to your business needs.
                </p>
                <Link
                  href="/contact-us"
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Make the Best Choice
                  </button>
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                    <MdArrowOutward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
        button={"Choose The Right Partner"}
        para={
          <>
            We’re experts at providing expert mobile app consulting services
            that are basically designed to help businesses build the right
            product the right way. Because we believe that it’s not mandatory
            for you to have a tech background in order to start building. Your
            idea just needs some shaping that our experts can help you with, so
            it becomes the perfect product.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Specialized Mobile App Consulting Services for Different"}
        header2={"Industries"}
        para={
          "The expert consultants at Dignite Studios offer mobile app consulting services according to your growth goals. Being one of the top app development consultant, we don’t offer one-size-fits-all advices to everyone because our experience stops us from offering the exact same solution for every industry. Offering consultation for every industry is our speciality. Also, we believe, building apps around your industry needs gives you an advantage in the market and we’re here to guide you for that.  "
        }
        button={" Let’s Talk Today"}
      />
      <MobileApp
        header={"Benefits of Mobile App "}
        header2={"Consultation"}
        para={
          <>
            There are several reasons why investing in professional mobile app
            consulting before you start developing can increase the chances of
            your app’s success through application development consulting
            services. Because you can avoid costly mistakes when you’ve the
            right guidance. The right guidance can make all the difference in
            how you build a product that can compete in the market.
          </>
        }
        button={" Discuss Your Idea Today"}
        cards={BENEFITS}
      />
      <Features
        header={" Top Features to Include in Your"}
        header2={"App"}
        para={
          "From a consulting perspective, the success of your mobile app relies more on strategic features than just attractive design. Choosing the features strategically through our mobile app consulting services helps you with engagement and retention. We guide you to include features as mobile app consultants that meet user expectations. The right set of features will help your app stay competitive and deliver value."
        }
        features={InstaFEATURES}
      />

      {/* <Process
        steps={PROCESS_STEPS}
        header={
          "Proven Process of an iOS Mobile App Development Company"
        }
        para={
          "Every application begins with an idea and a goal. So, Dignite Studios works with a structured approach and hire iOS app developers who turn your idea into a highly functional iOS application. Different companies work with different and unique workflows, but when it comes to creating mobile apps at our top iOS app development company, we utilize a perfectly structured approach of the best companies to ensure that we design apps that work the proper way. Here’s the process that turns ideas into apps."
        }
      /> */}

      <SuccessStories
        header={" Successful Mobile App Consulting Projects by "}
        header2={"Dignite Studios"}
        para={
          "Explore our case studies to see how Dignite Studios brought app ideas to life through strategies through mobile app consulting services. Each project highlights the challenges our clients faced and the customized consulting solutions we provided. See how our technical recommendations and growth planning helped businesses make better and aware decisions. "
        }
      />
      <CTA />
      <Testimonials
        test={test}
        para={""}
        header={" What Our Client Says About Our "}
        header2={" Services"}
      />
      <Faq header={"FAQ's"} faqs={faqs} />
      <ContactUs
        img={"/services/web-app/c-img.webp"}
        pathname={"Mobile App Consulting"}
        header={"Get Your Mobile App Consulting Quote"}
        header2={""}
        para={
          "You just need to share your app idea with us and let our experts provide personalized guidance. Fill out the form below to get a detailed consulting quote. Contact us today so the team helps you review your concept and outline an entire roadmap to help you build a successful and engaging mobile app."
        }
        btn={"Request Mobile App Consulting Quote "}
      />
    </div>
  );
};

export default MobileAppConsultation;

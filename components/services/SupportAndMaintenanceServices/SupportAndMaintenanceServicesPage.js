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
import { FaBug, FaMicrosoft, FaPalette, FaPencilAlt, FaShieldAlt, FaTachometerAlt, FaUser } from "react-icons/fa";
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
    title: "App Monitoring",
    description: (
      <>
        Ensure your app performs smoothly with monitoring services. We track
        performance and detect issues. That resolves potential problems before
        they impact users through mobile app maintenance services.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "App Performance Optimization",
    description: (
      <>
        Enhance your app’s efficiency with expert performance optimization. We
        refine and optimize code and provide an exceptional user experience
        across all devices.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "App Security Management",
    description: (
      <>
        Protect your app and the user data with comprehensive security
        management. We identify vulnerabilities to prevent threats. And it
        ensures your application remains safe.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "App UI/UX Update",
    description: (
      <>
        Keep your app engaging with professional UI/UX updates. We refresh
        designs and improve navigation. It enhances overall user experience to
        ensure your app remains visually appealing.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "App QA Testing",
    description: (
      <>
        Make sure your app is flawless with thorough QA testing. We verify
        functionality and validate performance across devices. It shows a
        reliable app that provides a smooth user experience.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "App Compliance Management",
    description: (
      <>
        It makes sure your app meets all industry regulations with comprehensive
        compliance management. We monitor legal requirements to keep your
        application secure.
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
    desc: "Being the best at providing mobile app support & maintenance services, we provide maintenance while guiding you through the whole process of building apps that meet the standards of HIPAA.",
  },
  {
    title: "Fintech Apps",
    desc: "With our app maintenance services, you can get support even after launch to get secure fintech apps and payment mobile apps with multi-layer authentication.",
  },
  {
    title: "E-commerce & Retail Apps",
    desc: "Dignite Studios’ application developers and maintenance providers would gladly help you build ecommerce stores with storefront, inventory, and POS.  ",
  },
  {
    title: "Education & e-Learning Apps",
    desc: "The expert app support providers would help you make perfect educational apps that are made for students and teachers.",
  },
  {
    title: "Real Estate Apps",
    desc: "DIgnite Studios’ services are meant to help you build and provide support services for the property apps that include the features you need.",
  },
  {
    title: "Dating and Matchmaking Apps",
    desc: "The experts would provide ongoing support for your application that focuses on creating safe and engaging platforms with strong privacy controls.",
  },
];
const test = [
  {
    name: "Sarah Thompson",
    designation: "CTO, MediCore Health",
    review:
      "Dignite Studios has been very helpful for us. Their app maintenance and support keep our healthcare app HIPAA compliant. We highly recommend them for any business.",
  },
  {
    name: "Jason Miller",
    designation: "Product Manager, FinPayy",
    review:
      "The team at Dignite Studios is proactive and detail oriented. They ensure our fintech app stays secure and fully supported even after launch.",
  },
  {
    name: "Emily Rivera",
    designation: "CEO, Trend-ECart",
    review:
      "Our e-commerce app has never been more stable. With Dignite Studios handling ongoing maintenance, our storefront runs smooth.",
  },
  {
    name: "Michael Johnson",
    designation: "Lead Developer, EduSphere",
    review:
      "Their team keeps our educational app reliable through performance optimization and security management. Amazing experience with Dignite Studios.",
  },
  {
    name: "Olivia Parker",
    designation: "Marketing Director, PropWise",
    review:
      "Their maintenance and support services have made managing our property app easier. Updates are seamless. The app remains responsive and fully functional for our users.",
  },
  {
    name: "Daniel Brooks",
    designation: "Founder, MatchMate",
    review:
      "We’ve partnered with several maintenance providers, but Dignite Studios was different. Their ongoing support ensures our dating app is secure and privacy focused.",
  },
];
const BENEFITS = [
  {
    title: "Proactive Issue Detection",
    desc: "Our team identifies the potential bugs and resolves performance issues before they impact users. It keeps your app stable.",
    icon: <FaBug color="#F15C20" size={25} />,
  },
  {
    title: "Performance Optimization",
    desc: "We continuously monitor your app to get you fast load times and a consistently excellent user experience.",
    icon: <FaTachometerAlt color="#F15C20" size={25} />,
  },
  {
    title: "Security and Compliance",
    desc: "With updated security measures, we protect user data. It maintains trust while keeping your app fully compliant.",
    icon: <FaShieldAlt color="#F15C20" size={25} />,
  },
  {
    title: "UI/UX Enhancements",
    desc: "Your app stays visually appealing and aligned with modern design standards. All because of our ongoing updates",
    icon: <FaPalette color="#F15C20" size={25} />,
  },
  {
    title: "Long-Term User Engagement",
    desc: "By maintaining performance and usability. Our support services help retain users while increasing satisfaction.",
    icon: <FaUsers color="#F15C20" size={25} />,
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
      "Yes, we are expert support providers. We can take your mobile app from idea to launch. The support we offer would help you remove potential bugs. You can get a growth strategy and a lot more with us. The team would provide clear guidance that aligns with your business plans.",
  },
  {
    id: 2,
    question:
      "How much time does your typical mobile app maintenance take?",
    answer:
      "Honestly, it all depends on your app and business needs. App maintenance services usually lasts a few weeks to a few months. But if you need us to be, we’d be there for you even after the development to clear up any confusion. By the end, you will have a perfect product.",
  },
  {
    id: 3,
    question:
      "If help is needed on MVP and feature prioritization, can you provide that?",
    answer:
      "Yes, gladly. We would love to help you launch an MVP through mobile app maintenance services and also decide which features to build first. The main plan is to focus on what’s important to users and what’s not. So by reducing bugs and unnecessary work, we can definitely guarantee you that your app will deliver value quickly.",
  },
  {
    id: 4,
    question:
      "Can you provide assistance with the strategies even after we’re done launching?",
    answer:
      "Yes. Dignite Studios’ mobile app maintenance services isn’t just limited to offering a little bit of support. We’re experienced service providers, and you’d get help with monitoring performance and growing your app after launch. This makes sure that your mobile app is going to continue to attract users.",
  },
  {
    id: 5,
    question:
      "Do you also offer your support for both startups and enterprises?",
    answer:
      "Well, we work with businesses of all sizes happily. The expert mobile app maintenance services providers are there for startups and enterprises and every type of business that needs our help. You get guidance accordingly because solutions are tailored and every client receives practical solutions that match their needs and goals.",
  },
  {
    id: 6,
    question: "Can you help with technology and platform recommendations?",
    answer:
      "Of course. We can recommend and suggest the best technologies and platforms based on your growth plans. When it comes to mobile app maintenance services, we make sure that your app is efficient and secure. You get a solution that performs well across devices, and it adapts as your business and user base grow.",
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

const SupportAndMaintenanceServicesPage = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="Experienced Mobile Application   "
        heading2={"Maintenance"}
        para="Dignite Studios is a reputable name in the industry of mobile applications. Dignite Studios has delivered over 150 projects globally to different types of clients, with a decade of experience in multiple industries and multiple niches. The goal for us is to help startups in every way we can through mobile app maintenance services. And successfully, the team moves forward with our mission by offering mobile application support & maintenance services. The team offers its expertise, ongoing maintenance, and dedicated support so your app turns out as amazing as you imagined. Your amazing application just needs some professional shaping from our experts to become a product everyone would want to use. "
        button="Get a Free Quote Today "
      />
      <Services
        services={services}
        header={"Expert Mobile App Maintenance"}
        header2={"Services"}
        button={"Get Our Services Today"}
        para={
          "When you are working with Dignite Studios for maintenance services, you’re working with a team that adds commitment to the work ethic first. As an expert in mobile app support & maintenance services, we have refined our services to meet your needs. Working with us means you get strong commitments and maintenance prepared by Dignite Studios.  "
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why Choose Us for Mobile Application Maintenance and Support"}
        header2={"Services"}
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
            We’re experts at providing expert mobile app maintenance services that are basically designed to help businesses get the right product. Because we believe that it’s not mandatory for you to have a tech background in order to have the perfect product. Your product might just needs some shaping that our experts can help you with, so it becomes the perfect product. 
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Specialized Mobile App Maintenance Services for Different"}
        header2={"Industries"}
        para={
          "The expert consultants at Dignite Studios offer support and services according to your growth goals. Being one of the top app development companies, we don’t offer one-size-fits-all support to everyone because our experience stops us from providing the same exact solution for every industry and business. Offering ongoing support for every industry is our specialty. Also, we believe, building apps around your industry requirements gives you an advantage in the market.  "
        }
        button={" Let’s Talk Today"}
      />
      <MobileApp
        header={"Benefits of Mobile App "}
        header2={"Maintenance and Support"}
        para={
          <>
      Professional mobile app maintenance and support keep your app reliable and secure. The consistent support and maintenance make your app competitive in today’s digital world. Regular maintenance optimizes performance and makes sure you get a simple experience for your users.
          </>
        }
        button={" Discuss Your Idea Today"}
        cards={BENEFITS}
      />
      {/* <Features
        header={" Top Features to Include in Your"}
        header2={"App"}
        para={
          "From a consulting perspective, the success of your mobile app relies more on strategic features than just attractive design. Choosing the features strategically through our mobile app consulting services helps you with engagement and retention. We guide you to include features as mobile app consultants that meet user expectations. The right set of features will help your app stay competitive and deliver value."
        }
        features={InstaFEATURES}
      /> */}

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
        header={"Successful Mobile App Projects by "}
        header2={"Dignite Studios"}
        para={
          "Explore our case studies to see how Dignite Studios brought the mobile applications ideas to life through strategies. Each project we mentioned here highlights the challenges our clients faced and the customized app solutions we provided. See how our technical recommendations and ongoing support helped businesses make better and more aware decisions."
        }
      />
      <CTA />
      <Testimonials
        test={test}
        para={""}
        button={"Work With Our Expert Team"}
        header={"Client’s Testimonials"}
        header2={" "}
      />
      <Faq header={"FAQ's"} faqs={faqs} />
      <ContactUs
        img={"/services/web-app/c-img.webp"}
        pathname={"Mobile App Maintenence"}
        header={"Get Expert App Maintenance Services Today"}
        header2={""}
        para={
          "Keep your app secure and reliable with professional maintenance and support services. Share your app idea with Dignite Studios, and our experts will provide a tailored plan. "
        }
        btn={"Request Mobile App Consulting Quote "}
      />
    </div>
  );
};

export default SupportAndMaintenanceServicesPage;

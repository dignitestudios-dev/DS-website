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
    icon: "icon",
    icon2: "icon4",
    title: "Custom Mobile App Development",
    description: (
      <>
        We build custom mobile apps based on your business needs. Many companies hire the mobilapp developer teams from us for flexible and scalable solutions.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "UI/UX Design for Mobile Apps",
    description: (
      <>
        Our designers produce clear, uncomplicated app interfaces. Businesses that hire the mobile app developer from our team that get better user engagement and smooth navigation.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Cross Platform App Development",
    description: (
      <>
        We develop apps which work across multiple platforms. Businesses can hire Mobile App Developers to reduce the cost and reach more users with the one solution.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "App Testing & Quality Assurance",
    description: (
      <>
        Our team tests every app carefully before the launch. Companies which hire a dedicated mobile app developer ensure bug free performance and smooth functionality.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "API & Backend Development",
    description: (
      <>
        We build strong backend systems which support mobile apps businesses often hire mobile app development company teams like ours for the secure and scalable integrations.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "App Maintenance & Support",
    description: (
      <>
        We provide ongoing support after launch. Companies which hire developers keep their apps updated, secure and running quite smoothly.
      </>
    ),
  },
];

const highlights = [
  {
    title: "Skilled Mobile App Developers",
    desc: "Our developers have a wealth of experience creating high performing apps for many platforms guaranteeing dependable and user friendly mobile solutions for your company’s requirements",
  },
  {
    title: "Adaptable Hiring Practices",
    desc: "To efficiently fit the scope and timeframe of your project, select from hourly, dedicated or the project based employment choices.",
  },
  {
    title: "Agile Development Process",
    desc: "Our teams follow the agile practices which deliver app quickly, adapt to the changes and maintain consistent project progress.",
  },
  {
    title: "Fast Onboarding",
    desc: "Developers integrate into your existing team rapidly, ensuring the minimal delays and faster project initiation or the immediate productivity.",
  },
  {
    title: "Transparent Communication",
    desc: "We keep the clients informed and involved at every level of the development process by communicating clearly and frequently",
  },
  {
    title: "Secure NDA & IP Protection",
    desc: "All projects are safeguarded with the NDAs and IP protection to ensure your ideas and data remain fully secure.",
  },
];
const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "As the best hybrid app development company in USA, we build apps that comply with HIPAA, completely prepared for the health sector.",
  },
  {
    title: "Fintech Apps",
    desc: "With our fintech development services, we provide support in launching secure fintech apps and payment mobile apps with multi-layer authentication.",
  },
  {
    title: "E-commerce & Retail Apps",
    desc: "Dignite Studios keeps everything simple through ecommerce services. Like, Storefront, Inventory, and POS? Already included.",
  },
  {
    title: "Educational Apps",
    desc: "We provide educational application development services that lead students step by step through courses and quizzes. That means providing teachers with dashboards too.",
  },
  {
    title: "Real Estate Apps",
    desc: "Dignite Studios offers property applications that include the following: Listings, virtual tours, mortgage calculators, and management tools.",
  },
  {
    title: "Dating and Matchmaking Apps",
    desc: "Helpful connections are more important than features. This approach prefers verified identities and controls that increase genuine engagement.",
  },
];

const test = [
  {
    name: "Emily Millers",
    designation: "— Founder – Prime Techs",
    review:
      "“The team helped us launch our app on both iOS and Android quickly. They were professional, responsive, and really understood our vision from start to finish.”",
  },
  {
    name: "Michael Wilson",
    designation: "— CEO – EeZshop Stores",
    review:
      "“Working with Dignite Studios was a game changer for us. Our users are much more engaged. Their guidance made the entire process easy.”",
  },
  {
    name: "Sofia David",
    designation: "— Co-Founder – TreX Labs",
    review:
      "“I loved their hands-on approach. They walked us through every step, and the final app works perfectly across all devices. Hire hybrid app developers! Much recommended.”",
  },
  {
    name: "Benjamin Martin",
    designation: "— Owner – QuickCon Solutions",
    review:
      "“From planning to launch, everything was seamless. Our app is secure, scalable, and our users love the experience. Truly impressive work.”",
  },
  {
    name: "Lewis William",
    designation: "— Product Manager – FinTrack Systems",
    review:
      "“They delivered exactly what we needed. The app’s performance and usability have improved our workflow and customer satisfaction dramatically.”",
  },
  {
    name: "Matthew Daniel",
    designation: "— Business Consultant – EdgE Advisors",
    review:
      "“Professional, efficient, and reliable. They exceeded our expectations and helped us reach more users than we anticipated.”",
  },
  {
    name: "Jacob Nathan",
    designation: "— Founder – FitLife Apps",
    review:
      "“If you want an app that works smoothly on any device, I highly recommend this team. Hire hybrid app developers from Dignite Studios. They are knowledgeable, responsive, and amazing to work with.”",
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
    question: "Do you build Hybrid apps?",
    answer:
      "Yes. Our hybrid mobile app development services create apps that grow with your business. We ensure smooth performance, fast loading and easy management so your app can handle more users and traffic while delivering a reliable and fluent experience across both iOS and Android devices.",
  },
  {
    id: 2,
    question: "How long does hybrid development take?",
    answer:
      "The timeline depends on your app’s complexity, features and integrations. Our hybrid app development agency follows a structured process to complete the project efficiently. We focus on quality, clear communication and timely delivery so your app launches on schedule and operates smoothly for your business.",
  },
  {
    id: 3,
    question: "Do you support hybrid app feature development?",
    answer:
      "Absolutely. With our hybrid mobile app development services, we create custom features and integrations for your app. These enhancements improve functionality, connect third-party tools, automate tasks, and deliver a seamless user experience across both iOS and Android.",
  },
  {
    id: 4,
    question: "Can you refine my Hybrid app idea?",
    answer:
      "Yes. Our hybrid development agency helps refine your app idea, plan features and implement the design. We guide you step by step to ensure your app is easy to use, scalable, visually appealing and aligned with your business goals and customer expectations.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. We work with businesses of all sizes. As a professional hybrid app development agency, we deliver tailored solutions for startups and large enterprises, ensuring your app is secure, scalable and optimized to grow your business while providing a smooth customer experience.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Strategy",
    desc: "When the strategy is clear, the product turns out great, so in this phase, we align your business goals with the app’s vision and features.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "It is a hybrid app development process in which a preliminary visual mock-up has been created that shows the mobile app’s initial design.",
  },
  {
    step: "03",
    title: "Sprint Planning",
    desc: "The sprint planning for hybrid development begins, and our professional app developers define the product roadmap and total execution time.",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "Conducting tests at every stage of the hybrid development process helps keep up with the latest status updates.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Deployment is where preparation connects performance, resulting in smooth operation across different platforms.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "Once the launch is done, the hybrid developers’ focus shifts to checking performance and optimizing features based on user feedback.",
  },
];

const MobAppDev = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="About Our Mobile App Developer"
        heading2={"Hiring Services "}
        para="Across all industries, the need for the mobile applications is rising quickly. Dignite studios allows businesses to hire Mobile App Developers instead of building an in-house team. Our team has been producing dependable apps for healthcare, e-commerce, finance, education, travel and logistics for more than ten years. Employing our committed developers guarantees access to knowledge experts with the expertise in cross-platform, iOS and Android development. Teams can be swiftly scaled by businesses without even sacrificing deadlines or quality. Dignite Studios is a reputable mobile app development company which offers quick onboarding, flexible hiring practices and a track record of developing scalable, high performing mobile apps. "
        button="Start Hiring Mobile App Developers"
      />

      <Bussiness
        bs={highlights}
        header={" Why Hire Mobile App Developers From"}
        header2={"Dignite Studios"}
        ctaHeader={"Choose The Right Team"}
        ctaPara={
          "We are experts at building mobile applications. Having a team of the best developers and designers, we provide you with everything you need as a custom mobile app development company. Dignite Studios consists of a team that takes the time to understand your audience before the development even begins. We deliver the functional applications with clear communication and reliable solutions."
        }
        ctaBtn={"Choose The Right Team"}
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
                  Choose The Right Team
                </h2>
                <p>
                  We are experts at building mobile applications. Having a team
                  of the best developers and designers, we provide you with
                  everything you need as a custom mobile app development
                  company.
                </p>
                <Link
                  href="/contact-us"
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Choose The Right Team
                  </button>
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                    <MdArrowOutward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
        button={"Hire Mobile App Developers  "}
        para={
          <>
            Hiring developers from Dignite Studios ensures access to skilled
            professionals who deliver the high quality, scalable apps. Our team
            provides fast onboarding, transparent communication and secure
            project management. Furthermore, companies can employ developers for
            cross platform, iOS and Android projects with assurance and
            dependable outcomes.
          </>
        }
      />
    <TabularTechs
        header={"Our Mobile App Development"}
        header2={"Expertise"}
        para={
          "Our developers specialize in creating high performance mobile applications across platforms. They are experts in iOS, Android, Cross platform, and backend technologies delivering scalable, secure and fast applications. Businesses can hire Mobile App secure and fast applications. Businesses can hire a mobile app developer skilled in the latest tools for reliable project execution. "
        }
        techData={techData}
        button={"Hire Mobile App Developers "}
      />
      <Services
        services={services}
        header={"Mobile App Solutions Delivered by Our"}
        header2={"Expert Developers"}
        button={"Hire Mobile App Developers "}
        para={
          "Our developers provide complete mobile app solutions for businesses of all sizes. You can hire Mobile app Developers to build, design, test and maintain the applications. We also support businesses of all sizes. You can also developers to build, design, test and maintain applications. We also support businesses that want to hire a mobile app developer for scalable high performance digital products.    "
        }
      />
  
      <HiringProcess />
      <Process
        steps={PROCESS_STEPS}
        header={"Proven Process of a Hybrid Mobile App Development Company"}
        para={
          "The development team works with a perfectly structured approach that brings your idea to life. Different hybrid development companies work with unique workflows, but when it comes to creating mobile apps at our company, we utilize an approach of the hybrid app development company USA approach to ensure that we design applications that work the proper way. Here’s the workflow. "
        }
      />

      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Expert Hybrid App Development For Different  "}
        header2={"Industries"}
        para={
          "We design hybrid apps according to your growth goals. Being one of the top mobile app development companies, our professionalism stops us from offering the exact same product for every industry. Offering custom solutions for every industry is our speciality. Also, building apps for your industry needs gives you an advantage in the market. "
        }
        button={"Let’s Talk Today"}
      />

      <MobileApp
        header={"Benefits of Having Your Hybrid  "}
        header2={"App"}
        para={
          <>
            There are several reasons why you should get your own app built from
            the best hybrid app development company in USA. .
          </>
        }
        cards={BENEFITS}
      />
      <Features
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
      />
      <SuccessStories
        header={"Successful Outcomes of Hybrid Mobile App "}
        header2={"Development Services"}
        para={
          "Check out our case studies to see how we created functional hybrid apps from ideas. every project we mentioned here shows the challenges our clients faced, the custom solutions we implemented, and the results we achieved as a team. See our development process and technologies that helped us build secure and engaging hybrid applications. "
        }
      />
      <CTA />
      <Testimonials
        test={test}
        header={"What Our Clients Say About"}
        header2={"Our Work"}
      />
      <Faq faqs={faqs} />
      <ContactUs
        img={"/services/hybrid-app/c-img.webp"}
        pathname={"Hybrid App Dev "}
        header={"You Could Be Our Next Success Story"}
        header2={""}
        para={
          "Your app idea deserves to shine. Partner with us to build a hybrid mobile app that delivers engages users and grows your business. Let’s change your vision into a powerful app that works flawless on both iOS and Android."
        }
        btn={"Let’s Create Your App"}
      />
    </div>
  );
};

export default MobAppDev;

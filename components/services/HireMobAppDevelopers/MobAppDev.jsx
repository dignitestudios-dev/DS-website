import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "./Services";
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
import FlexibleHiring from "../ui/FlexibleHiring";
import WhyChoose from "../ui/WhyChoose";
const features = [
  {
    number: "01",
    title: "Proven Development Expertise",
    description:
      "Our developers have extensive experience creating the apps across the platforms, ensuring the high performance and meeting client expectations consistently.",
  },
  {
    number: "02",
    title: "Transparent Communication",
    description:
      "We maintain the clear and regular updates, so clients who hire Mobile App Developers can track the progress and provide feedback throughout the development process.",
  },
  {
    number: "03",
    title: "Agile Methodology",
    description:
      "We use agile practices to adapt it quickly to changes. Businesses that hire Mobile App Developers from us to get the timely delivery while maintaining app quality and functionality.",
  },
  {
    number: "04",
    title: "Scalable Teams",
    description:
      "Our developers can expand or adjust team size to match project complexity and business growth requirements efficiently.",
  },
  {
    number: "05",
    title: "On Time Delivery",
    description:
      "Projects are completed within the agreed timelines without compromising the quality, ensuring apps are launched and operational as planned.",
  },
  {
    number: "06",
    title: "Long Term Technical Support",
    description:
      "We offer ongoing maintenance,updates and troubleshooting to keep your app performing smoothly after the launch.",
  },
];
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
    icon: "/location/mobile-california/icons/icon.webp",
    icon2: "/location/mobile-california/icons/icon4.webp",
    title: "Custom Mobile App Development",
    description: (
      <>
        We build custom mobile apps based on your business needs. Many companies hire the mobilapp developer teams from us for flexible and scalable solutions.
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/pen.webp",
    icon2: "/location/mobile-california/icons/pen5.webp",
    title: "UI/UX Design for Mobile Apps",
    description: (
      <>
        Our designers produce clear, uncomplicated app interfaces. Businesses that hire the mobile app developer from our team that get better user engagement and smooth navigation.
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/setting.webp",
    icon2: "/location/mobile-california/icons/setting2.webp",
    title: "Cross Platform App Development",
    description: (
      <>
        We develop apps which work across multiple platforms. Businesses can hire Mobile App Developers to reduce the cost and reach more users with the one solution.
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/pipe.webp",
    icon2: "/location/mobile-california/icons/pipe3.webp",
    title: "App Testing & Quality Assurance",
    description: (
      <>
        Our team tests every app carefully before the launch. Companies which hire a dedicated mobile app developer ensure bug free performance and smooth functionality.
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/database.webp",
    icon2: "/location/mobile-california/icons/database1.webp",
    title: "API & Backend Development",
    description: (
      <>
        We build strong backend systems which support mobile apps businesses often hire mobile app development company teams like ours for the secure and scalable integrations.
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/set.webp",
    icon2: "/location/mobile-california/icons/set1.webp",
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
    icon:"/services/mob-hire/1.webp",
    title: "Skilled Mobile App Developers",
    desc: "Our developers have a wealth of experience creating high performing apps for many platforms guaranteeing dependable and user friendly mobile solutions for your company’s requirements",
  },
  {
        icon:"/services/mob-hire/2.webp",
    title: "Adaptable Hiring Practices",
    desc: "To efficiently fit the scope and timeframe of your project, select from hourly, dedicated or the project based employment choices.",
  },
  {
        icon:"/services/mob-hire/3.webp",
    title: "Agile Development Process",
    desc: "Our teams follow the agile practices which deliver app quickly, adapt to the changes and maintain consistent project progress.",
  },
  {
        icon:"/services/mob-hire/4.webp",
    title: "Fast Onboarding",
    desc: "Developers integrate into your existing team rapidly, ensuring the minimal delays and faster project initiation or the immediate productivity.",
  },
  {
        icon:"/services/mob-hire/5.webp",
    title: "Transparent Communication",
    desc: "We keep the clients informed and involved at every level of the development process by communicating clearly and frequently",
  },
  {
        icon:"/services/mob-hire/6.webp",
    title: "Secure NDA & IP Protection",
    desc: "All projects are safeguarded with the NDAs and IP protection to ensure your ideas and data remain fully secure.",
  },
];
const VALUE_PROPOSITION = [
  {
    title: "Healthcare & Fitness",
    desc: "We develop secure and user friendly healthcare apps that support patient management, fitness tracking and wellness solutions for businesses and healthcare providers.",
  },
  {
    title: "Ecommerce & Retail",
    desc: "Our developers create shopping apps through the smooth checkout, inventory management and the scalable features. We hire mobile app development company for full support.",
  },
  {
    title: "Real Estate",
    desc: "We build apps for the property listings, virtual tours and client communication, helping real estate businesses improve the engagement and streamline operations effectively.",
  },
  {
    title: "Education & E-Learning",
    desc: "We design interactive learning apps, online course platforms and assessment systems which make learning convenient and accessible for the students and institutions.",
  },
  {
    title: "Travel & Hospitality",
    desc: "Our group creates travel management and reservation apps. To improve client satisfaction and expedite services, businesses can also employ mobile app developers.",
  },
  {
    title: "Food Delivery & Restaurants",
    desc: "We create apps for online ordering, delivery tracking and menu management. Businesses can also hire Mobile App Developer in usa for fast and reliable solutions.",
  },
  {
    title: "Fitness & Wellness",
    desc: "We build apps for personal trainers, gyms and wellness programs that track workouts, diet plans and user progress efficiently.",
  },
];
const test = [
  {
    name: "John Smith",
    designation: "— FitLife App",
    review:
      "“Our fitness app was delivered on schedule by the Dignite Studios developers. Their work was quite professional and they helped us enhance user engagement fluently”",
  },
  {
    name: "Sarah Lee",
    designation: "— EduLearn",
    review:
      "“Our Ecommerce app now runs faster and quite smoother. The team’s expertise allowed us to hire Mobile App Developer in usa which truly understood our needs”",
  },
  {
    name: "Michael Brown",
    designation: "— EduLearn",
    review:
      "“From Design to deployment the team was quite reliable. Their guidance and updates made the development process quite stress free and efficient for our educational platform”",
  },
  {
    name: "Emily Davis",
    designation: "— Travel Mate",
    review:
      "“The mobile app developers were quite responsive and professional. They delivered the high quality travel app which met all your requirements quite perfectly”",
  },
  {
    name: "David Wilson",
    designation: "— FoodieGo",
    review:
      "“We hire dedicated mobile app developers from Dignite Studios for ongoing support. Their team improved our app performance and maintained smooth operation consistently”",
  },
  {
    name: "Laura Thompson",
    designation: "— RealEstate Pro",
    review:
      "“The project was completed on schedule. Developers ensured all features worked perfectly and post launch support was quite helpful for our team”",
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
    question: "How much does it cost to hire mobile app developers?",
    answer:
      "The cost very much depends on the project scope, platform and complexity. You can also hire Developers on hourly, dedicated or the project based plans to match the budgets and ensure the optimal results.",
  },
  {
    id: 2,
    question: "How long does it take to onboard developers?",
    answer:
      "Onboarding is fast and smooth. After selecting your developer, they can start working on the project in a few days, it ensures immediate progress and quick integration within your team.",
  },
  {
    id: 3,
    question: "Can I Hire developers for short term projects?",
    answer:
      "Yes. Our hourly and project based hiring models also allow you to hire a mobile app developer for the short term projects, updates or specific tasks without committing to the long term contracts.",
  },
  {
    id: 4,
    question: "Do you provide post launch support?",
    answer:
      "Yes. Our developers offer continuous maintenance, performance monitoring and updates. They ensure your app runs smoothly while addressing issues promptly to maintain stability and user satisfaction.",
  },
  {
    id: 5,
    question: "Can I scale the development team later?",
    answer:
      "Absolutely. You can expand your team whenever required. Our flexible options let you hire the dedicated mobile app developers to handle the increased workload and support growing project demands efficiently.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "We are aware of your target audience, app needs and company objectives. This step helps create a clear plan before starting the development process.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "Our team designs simple and user-friendly interfaces. We focus on the clean layouts which improve user experience and make the app super easy to use.",
  },
  {
    step: "03",
    title: "App Development",
    desc: "Developers start building applications using modern technologies. We ensure the app is quite fast, secure and works smoothly across all the devices.",
  },
  {
    step: "04",
    title: "Testing",
    desc: "To find faults and defects, every functionality is thoroughly evaluated. This step ensures both the application’s correct operation and an intuitive user interface.",
  },
  {
    step: "05",
    title: "Quality Assurance",
    desc: "Our QA team verifies app performance, security and usability. This also ensures that app features meet quality standards before the final deployment.",
  },
  {
    step: "06",
    title: "Deployment",
    desc: "We launch the app on the required platforms. Our team also ensures proper configuration and smooth release so the application is fully ready for the users.",
  },
  {
    step: "07",
    title: "Post Launch Support",
    desc: "We offer ongoing upkeep and updates following deployment. Our team fixes issues, improves the features and ensures the app performs reliably quite over the time.",
  },
];
const steps = [
  {
    title: "Project Vision",
    description:
      "We discuss your project goals and requirements to understand the app needs clearly before selecting the right developers.",
    icon: "/services/mob-hire/hire/1.webp",
  },
  {
    title: "Expert Consultation",
    description:
      "Our team provides the advice on technology, platform and resources so that you can make the informed decisions for your mobile app.",
    icon: "/services/mob-hire/hire/2.webp",
  },
  {
    title: "Hiring Mobile App Developers",
    description:
      "Select skilled developers from our team to match your project requirements. You can also hire dedicated mobile app developers for the full time support.",
    icon: "/services/mob-hire/hire/3.webp",
  },
  {
    title: "Developer Biography",
    description:
      "We share detailed profiles, experience and previous projects of the developers which help you choose the perfect match for your app.",
    icon: "/services/mob-hire/hire/4.webp",
  },
  {
    title: "Meeting With the Developer & Collaboration",
    description:
      "Connect directly with your developer. Discuss project details, timelines and tasks which ensure the smooth collaboration from the day one.",
    icon: "/services/mob-hire/hire/5.webp",
  },
];

const cards = [
  {
    title: "Dedicated Developer",
    desc: "Hire the full time developer who works only on your project . This model is ideal for long term projects which need continuous development and focused attention.",
    icon: "/services/test.webp",
  },
  {
    title: "Hourly Hiring",
    desc: "Pay only for the hours worked by the developer. This option is quite suitable for the small tasks, updates, bug fixes and short term development needs.",
    icon: "/services/sb.webp",
    illustration: "hourly",
  },
  {
    title: "Project Based Hiring",
    desc: "Choose a fixed scope and budget for your project. This model is quite best for projects with clear requirements and defined timelines from the very start.",
    icon: "/services/mob.webp",
    illustration: "project",
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
  <FlexibleHiring cards={cards} header={"Choose the Right Hiring Model For "} header2={"Your Project"} para={"Businesses can choose the right hiring model based on their project size, timeline and budget. We help you hire Mobile App Developers in a way which fits your needs and ensures the smooth development without the delays. " }/>
  
      <Process
        steps={PROCESS_STEPS}
        header={"Our Step by Step Mobile App "}
        header2={" Development Approach"}
        para={
          "We follow a clear and structured process to build mobile applications. This helps businesses hire Developers with confidence and ensures eerie projects are delivered on time through the high quality and smooth performance. "
        }
      />

      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industries Our Mobile App Developers are"}
        header2={"specialized"}
        para={
          "Our team has extensive experience building mobile applications across multiple industries. Businesses choose to hire Mobile App Developer from us to create scalable and reliable apps for the different sectors. "
        }
        button={"Discuss Your Mobile App Idea "}
      />
  <SuccessStories
        header={"Our Successful Mobile App "}
        header2={" Projects "}
        para={
          "We have helped businesses build and launch the high performing mobile applications. Our portfolio highlights the real projects where apps improved user engagement, streamlined operations and achieved measurable growth. Explore our case studies and portfolio to see how our developers deliver reliable solutions."
        }
      />
            <Testimonials
        test={test}
        para={"Businesses trust us to deliver high quality mobile apps which meet their goals. Clients praise our development quality, communication and timely delivery. Here’s what they have to say about working with our team. "}
        header={"What Our Clients Say About Our Mobile"}
        header2={" App Developers"}
        button={"Get Free Consultation"}
      />
          <HiringProcess steps={steps} header2={"Hiring Works"} header={"How Our Mobile App Developer  "} para={"Hiring developers from Dignite Studios is simple and fast. Follow these steps to hire mern mobile app developer who can trust contributing to your project immediately."} button={"Hire Mobile App Developers "} />
      {/* <MobileApp
        header={"Benefits of Having Your Hybrid  "}
        header2={"App"}
        para={
          <>
            There are several reasons why you should get your own app built from
            the best hybrid app development company in USA. .
          </>
        }
        cards={BENEFITS}
      /> */}
      <WhyChoose header={"Why Companies Prefer Our Mobile  "} header2={"App Developers"} para={"Businesses choose Dignite Studios for our proven expertise, transparent communication and reliable solutions. Our companies hire Mobile App developers from our team to build high quality apps efficiently while maintaining the long term support for the scalable projects. "}
      features={features}
      />
      {/* <Features
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
      /> */}
    
      <CTA />

      <Faq faqs={faqs} />
      <ContactUs
        img={"/services/hybrid-app/c-img.webp"}
        pathname={"Hybrid App Dev "}
        header={"Hire Mobile App Developers Today"}
        header2={""}
        para={
          "Scale your team with skilled mobile app developers who deliver reliable results. We offer fast onboarding so you can start your project without delays. Our experts bring strong experience, clear communication and consistent quality. Build high performing apps and accelerate your business growth with a trusted development team. "
        }
        btn={"Get Started Today "}
      />
    </div>
  );
};

export default MobAppDev;

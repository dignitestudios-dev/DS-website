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
import { MdOutlinePeopleAlt, MdOutlineVisibility, MdAttachMoney, MdAnalytics, MdEmojiEvents } from "react-icons/md";

import MobileApp from "../ui/MobileApp";
import { FaMicrosoft, FaPencilAlt, FaUser } from "react-icons/fa";
import { IoGrid, IoWalletOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import SuccessStories from "../ui/SuccessStories";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import TabularEcommerceTechs from "../ui/TabularEcommerceTechs";
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
  SiApple,
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
} from "react-icons/fa";
import CTA from "./CTA";
import { TbDeviceAnalytics } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

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
      link: "/flutter-app-development",
    },
    {
      name: "React Native",
      icon: <SiReact />,
      link: "/react-native-app-development",
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

  Mobile: [
    { name: "AI Automation", icon: <GiArtificialIntelligence /> },
    { name: "iOS", icon: <SiApple /> },
    { name: "Android", icon: <SiAndroid /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React Native", icon: <SiReact /> },
  ],

  CMS: [
    { name: "WordPress", icon: <SiWordpress /> },
    {
      name: "Shopify",
      icon: <SiShopify />,
      link: "/shopify-app-development",
    },
    { name: "Webflow", icon: <SiWebflow /> },
    { name: "BigCommerce", icon: <SiBigcommerce /> },
    { name: "Squarespace", icon: <SiSquarespace /> },
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
    title: "Custom Native App Development",
    description: (
      <>
        We build Native applications that are adapted to your business needs.
        It means ensuring that the performance is highly functional and you
        get smooth user experience.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "iOS App Development",
    description: (
      <>
        The iPhone app development with native is the best choice if your
        audience is iOS users. Dignite Studios develops scalable iOS
        applications that deliver a sleek user experience.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Android App Development",
    description: (
      <>
        As a business owner, you can definitely rely on Dignite Studios with
        your Android app development because the team develops optimized
        applications for devices like Samsung and OnePlus.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "App Maintenance and Testing",
    description: (
      <>
        Dignite Studios provides mobile app <Link className="text-orange-600" href={"/services/mobile-application-support-and-maintenance-services"} ></Link> support & maintenance, and testing
        & QA services to make sure your app stays updated throughout.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "API & Third Party Integrations",
    description: (
      <>
        Our engineers combine the Native apps through the cloud platforms,
        analytics, CRMs and payment systems.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "NativeApp Consulting",
    description: (
      <>
        We provide expert Native guidance to optimize the app strategy,
        improve design and enhance the project outcomes.
      </>
    ),
  },
];

const highlights = [
  {
    title: "12+ Years of Development",
    desc: "We’re the best native app development company in USA with over 10+ years of experience, building high-performing apps.",
  },
  {
    title: "High Level Expertise",
    desc: "Being one of the top 10 native app development companies, we provide top-tier design and development.",
  },
  {
     icon:"/industries/food-industry/s3.webp",
    title: "Expert Project Managers",
    desc: "Our professional developers and project managers make sure to keep the entire build on track, providing smooth execution throughout.",
  },
  {
     icon:"/industries/food-industry/s4.webp",
    title: "100% Transparent Procedure",
    desc: "The development team shares the updates on time with you. Through updates, we ensure transparency to your business needs as one of the top native companies.",
  },
  {
    title: "Post-Launch Support",
    desc: "The support services we provide make your native app competitive, so you can easily depend on our native app development services.",
  },
  {
    title: "Custom Solutions",
    desc: "Every app we build is supposed to meet your requirements through custom native app development.",
  },
];
const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "As the best native app development company, we build apps that comply with HIPAA, completely prepared for the health sector.",
  },
  {
    title: "Fintech Apps",
    desc: "With our fintech app development services, we provide support in launching secure fintech native apps and payment mobile apps with multi-layer authentication.",
  },
  {
    title: "E-commerce & Retail Apps",
    desc: "Dignite Studios keeps everything simple through ecommerce native development services. Storefront, Inventory, and POS? Already included.",
  },
  {
    title: "Education & e-Learning Apps",
    desc: "We provide native education app development services that lead students step by step through courses and quizzes. That includes providing teachers with helpful dashboards too.",
  },
  {
    title: "Real Estate Apps",
    desc: "Dignite Studios offers native property apps that include the following: Listings, virtual tours, mortgage calculators, and management tools.",
  },
  {
    title: "Dating and Matchmaking Apps",
    desc: "Helpful connections are usually more than features in the dating industry. This approach provides verified identities and privacy controls that increase genuine engagement.",
  },
];
const test = [
  {
    name: "Christopher Thomas",
    designation: "— Product Manager, CorVision",
    review:
      "Working with this native app development team was a game-changer. Their attention to detail and performance optimization exceeded our expectations.",
  },
  {
    name: "Joshua Scott",
    designation: "— CTO, FinEdge Systems",
    review:
      "Their expertise as a native app development company helped us launch a seamless, high-performing app ahead of schedule.",
  },
  {
    name: "Emily Carter",
    designation: "— Head of Digital, BrightCore Media",
    review:
      "From concept to deployment, the process was smooth and transparent. Highly recommend their professional approach.",
  },
  {
    name: "Matthew Wilson",
    designation: "— CEO, MarketSphere Pvt Ltd",
    review:
      "They delivered a scalable mobile app that significantly improved our user engagement and retention.",
  },
  {
    name: "Jessica Wong",
    designation: "— Operations Lead, AceGlobal",
    review:
      "The team understood our vision perfectly and translated it into a powerful native mobile experience.",
  },
  {
    name: "James Brown",
    designation: "— Founder, PayCart",
    review:
      "Outstanding communication and technical skills. Our app performance improved drastically post-launch.",
  },
  {
    name: "Daniel Smith",
    designation: "— Director of Technology, UrbanLink Systems",
    review:
      "A reliable partner for any business looking to build robust native mobile applications.",
  },
];
const BENEFITS = [
  {
    title: "Customer Retention",
    desc: "It’s easier to enhance customer retention through native mobile applications by making your brand easily accessible.",
    icon: <MdOutlinePeopleAlt color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility",
    desc: "When visibility is stronger, stronger connections with your audience are formed, so stay in users’ minds with a branded native app.",
    icon: <MdOutlineVisibility color="#F15C20" size={25} />,
  },
  {
    title: "Increase Revenue",
    desc: "In-app purchases and mobile sales are the new ways to grow your business through native Mobile apps built by an expert native mobile app development company.",
    icon: <MdAttachMoney color="#F15C20" size={25} />,
  },
  {
    title: "Actionable info",
    desc: "Using native mobile app analytics is an easier way to understand user behavior, resulting in making smarter business decisions.",
    icon: <MdAnalytics color="#F15C20" size={25} />,
  },
  {
    title: "Competition",
    desc: "Having a mobile app built by the best native app development companies makes your business competitive and more accessible in the market while giving you an edge.",
    icon: <MdEmojiEvents color="#F15C20" size={25} />,
  },
];


const InstaFEATURES = [
  {
    title: "Swift-Based Performance",
    desc: "Our iOS apps are developed using Swift to ensure high performance, reliability, and smooth functionality across Apple devices.",
    icon: <FaMobileAlt size={50} color="#F15C20" />,
  },
  {
    title: "iOS Human Interface Guidelines Compliance",
    desc: "We follow Apple’s Human Interface Guidelines to create intuitive and visually consistent experiences for iOS users.",
    icon: <FaPencilAlt size={50} color="#F15C20" />,
  },
  {
    title: "Face ID & Touch ID Authentication",
    desc: "Secure authentication features like Face ID and Touch ID are integrated to protect user data and simplify login processes.",
    icon: <FaLock size={50} color="#F15C20" />,
  },
  {
    title: "Apple Pay Integration",
    desc: "Enable fast and secure mobile payments with seamless Apple Pay integration within your iOS application.",
    icon: <FaApple  size={50} color="#F15C20" />,
  },
  {
    title: "iCloud Sync",
    desc: "We integrate iCloud synchronization to keep user data updated across multiple Apple devices in real time.",
    icon: <FaClock size={50} color="#F15C20" />,
  },
  {
    title: "Push Notifications with APNs",
    desc: "Stay connected with users through Apple Push Notification Service (APNs) for real-time alerts and updates.",
    icon: <FaCode size={50} color="#F15C20" />,
  },
  {
    title: "Widget Support",
    desc: "Enhance user engagement with interactive iOS widgets that provide quick access to important app features.",
    icon: <TbDeviceAnalytics size={50} color="#F15C20" />,
  },
  {
    title: "Siri Shortcuts & Voice Commands",
    desc: "Integrate Siri shortcuts and voice commands to allow users to interact with your app using voice control.",
    icon: <FaUser size={50} color="#F15C20" />,
  },
];

const faqs = [
  {
    id: 1,
    question: "Do you build scalable Native apps?",
    answer:
      "Yes, we design Native apps using clean architecture, modular components and performance focused engineering. Unlike many native development companies, our team plans from day one, making sure that your product can handle the increasing users, new features and evolving business needs without slowing down or breaking it under the pressure.",
  },
  {
    id: 2,
    question: "How long does native app development take?",
    answer:
      "The timeline varies based on your app’s features, integrations and the complex designs. Simple native apps may even take a few weeks, meanwhile the advanced platforms require quite several months. As a top native app development company, we follow a structured process to deliver gradually. By keeping the communication transparent and avoiding unnecessary delays during the development.",
  },
  {
    id: 3,
    question: "Do you offer the post launch support?",
    answer:
      "Yes, our work continues even after launch. We provide ongoing monitoring, performance improvements, security updates and feature enhancements for native apps. This also makes sure that your native app remains stable, adapts according to the user feedback and continues to deliver value as your business grows over the time.",
  },
  {
    id: 4,
    question: "Can you refine my app idea?",
    answer:
      "Absolutely. We help turn the early ideas into clear, workable native app strategies. To create a targeted plan, our development team also examines objectives, users and features. This approach also reduces the risk, improves the decision making and the native app also solves the real problems before the development even begins.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes, we work with both the startups and established enterprises. Whether you’re validating the concept or scaling the existing product, our native development team also adapts its approach to match the goals, budget and technical needs. As a trusted native app development company, we maintain quality and long term performance at every stage.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Strategy",
    desc: "When the goals are clear, your native app will turn out amazing, so in this phase, we align your business goals with the app’s vision and features.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "In our native development services, a preliminary visual mock-up has been created that shows the mobile app’s initial design.",
  },
  {
    step: "03",
    title: "Development Stage",
    desc: "The app development begins, and our native mobile app development company works according to the product roadmap and total execution time.",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "Conducting tests at every stage of the native mobile app development services helps keep up with the latest status updates.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Deployment is where preparation connects performance, resulting in smooth operation across iOS and Android applications.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "Once the launch is done, the native developers’ focus shifts to checking performance and optimizing features based on user feedback.",
  },
];

const NativeAppDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="The BackStory of "
        heading2={"Dignite Studios"}
        para="With years of experience and success stories, Dignite Studios is the best native app development company. Having over 200+ trusted mobile app developers, we’ve worked on 50+ projects for startups and businesses and turned their ideas into functional native mobile apps. We begin with a strategy and stay with you even after the deployment through quick sprints and develop mobile apps that are designed to grow with your business. Scalability is not just a word for us; it’s our whole mindset when we develop your business apps. That’s how our experience with different niches and industries makes us unique among other companies."
        button="Contact us Today"
      />
      <Services
        services={services}
        header={" Expert Native Mobile App Development"}
        header2={"Services"}
        button={"Explore Our Native Services!"}
        para={
          "When you are working with Dignite Studios, the expert native app development company, you’re working with a team that adds commitment to the work ethic first. As custom native app developers, we have refined our native app development services to meet your needs. Working with our team means you get strong commitments and mobile app solutions prepared by Dignite Studios. "
        }
      />
      <TabularEcommerceTechs
        header={"Advanced Tools and Tech Behind "}
        header2={" Applications"}
        para={
          "Our team would use modern technology and advanced tools to build smooth native applications that just work without a mess. We have expert developers who can bring your plan to reality in a way that it runs smoothly and stays functional. We don’t develop apps that take time to load or feel too filled with features or messy, we simply use the best tech from our stack to build your mobile apps.  "
        }
        techData={techData}
      />

         <Process
        steps={PROCESS_STEPS}
        header={
          " Proven Process of a Custom Native App Development Company"
        }
        para={
          "Every native application begins with a visualization. So, the team works with a structured approach that brings your idea to life. Different companies work with unique workflows, but when it comes to creating mobile apps at our native app development company, we utilize a perfectly structured approach of the best native app development companies to ensure that we design applications that work the proper way. Here’s the whole workflow that turns visions into apps. "
        }
      />
      <Bussiness
        bs={  highlights}
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
        button={" Choose The Right Team "}
        para={
          <>
         We are one of the top 10 native app development companies at building mobile applications. Having a team of the <Link className="text-orange-600" href={"/services/hire-mobile-app-developers"}>best designers and developers</Link>, we provide you with everything you need as a custom native mobile app development company. Dignite Studios consists of a team that takes the time to understand your audience before your app development even begins. We deliver functional applications with clear communication and reliable solutions. 
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Expert Native App Development For Different "}
        header2={"Industries"}
        para={
          "We design native mobile apps according to your growth goals. Being one of the native mobile app companies, our experience stops us from offering the exact same product for all industries. Offering customized solutions for every industry is Dignite Studios' specialty. Also, building native apps around your industry needs gives you an advantage in the market.  "
        }
        button={" Let’s Talk Today"}
      />
   
      <MobileApp
        header={
          "Benefits of Having Your Own"
        }
        header2={"Native Mobile App"}
        para={
          <>
         There are several reasons why you should get your own native mobile app built from the best native app development company. 
          </>
        }
        cards={BENEFITS}
        button={"Get Your Mobile App "}
      />
   <SuccessStories
        header={"Successful Native Projects Executed by"}
        header2={"Dignite Studios"}
        para={
          "Check out the case studies to see how Dignite Studios created functional native apps just from ideas. Every project we shared here shows the challenges our clients had to deal with, the custom mobile app solutions we created and implemented. Also, the results we achieved as a team. See our native development process and the technologies that helped us build secure and engaging native applications."
        }
      />
          <CTA />
      {/* <Features header={"Essential Features Every iOS"} header2={"Should Have"} para={"Developing an iOS application is more than just creating attractive designs. The success of your custom iOS app development services depends on the features as well. It needs the right features to ensure performance and engagement. Every feature should enhance the user experience better. Your iOS app can boost user retention effectively by incorporating these essential features."} features={InstaFEATURES} /> */}
   
  
      <Testimonials
        test={test}
        para={"Working with this native app development team was a game-changer. Their attention to detail and performance optimization exceeded our expectations."}
        header={"Clients’ "}
        header2={"Testimonial"}
      />
      <Faq header={"FAQs"} faqs={faqs} />
      <ContactUs
        img={"/services/web-app/c-img.webp"}
        pathname={"Native App Development"}
        header={"Build Your Next Native Product "}
        header2={""}
        para={
          "Build your next native application with the professional expertise from the specialists delivering results across the markets through proven workflows and performance standards in the USA. As the trusted provider of native app development services. Dignite Studios helps brands to scale faster and smarter. "
        }
        btn={"Request Native App Quote"} 
      />
    </div>
  );
};

export default NativeAppDevelopment;

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
    title: "Custom iOS App Development",
    description: (
      <>
        The team creates iOS apps that meet your unique business needs.
        Prioritizing performance and smooth user experience through iOS
        application development.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "iOS App Consultation",
    description: (
      <>
        Hire iOS app developers because we provide professional iOS app
        consultation to guide strategy and optimize your app for maximum impact.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Cross-Platform Development",
    description: (
      <>
        With iOS app development, the team builds cross-platform apps that reduce
        costs and accelerate market growth without compromising performance.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "iOS Integration",
    description: (
      <>
        The developers can easily integrate your iOS apps with third-party
        services through custom iOS app development by integrating APIs and
        existing systems for enhanced functionality.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "UI/UX Design",
    description: (
      <>
        The designers at Dignite Studios would create visually appealing UI/UX
        designs that enhance user satisfaction and retention across all iOS
        devices.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "iOS App Testing",
    description: (
      <>
        The team would perform thorough iOS app testing to ensure your app is
        secure and delivers consistent performance across all devices through
        iOS application development.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "iOS App Maintenance",
    description: (
      <>
        Our team provides ongoing iOS app maintenance and support to keep your
        app secure and fully optimized.
      </>
    ),
  },
];

const highlights = [
  {
    title: "12+ Years of Development",
    desc: "We’re the best iOS app development team with over 10+ years of experience, building high-performing apps.",
  },
  {
    title: "High Level Expertise",
    desc: "Being one of the top iOS app development services providers, we deliver top-tier design and development.",
  },
  {
    title: "Expert Project Managers",
    desc: "Providing smooth execution throughout, our professional project managers ensure the entire build stays on track.",
  },
  {
    title: "100% Transparent Procedure",
    desc: "The development company shares updates on time. Through regular updates, we provide transparency and fulfill your business needs as one of the top app development companies.",
  },
  {
    title: "Post-Launch Support",
    desc: "You can rely on our iOS app development services because the support we offer keeps your app competitive in the long run.",
  },
  {
    title: "Custom Solutions",
    desc: "Every app we build is designed to meet your specific requirements through our iOS app development services.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "Providing the best iOS application development service, we build apps that comply with HIPAA and are fully prepared for the healthcare sector.",
  },
  {
    title: "Fintech Apps",
    desc: "With our fintech iOS application development service, we support launching secure fintech and payment mobile apps with multi-layer authentication.",
  },
  {
    title: "E-commerce & Retail Apps",
    desc: "Dignite Studios simplifies business operations through iOS ecommerce development services including inventory management, storefronts, and POS systems.",
  },
  {
    title: "E-Learning and Educational Apps",
    desc: "We provide education iOS app development services that guide students through courses and quizzes while giving teachers powerful dashboard tools.",
  },
  {
    title: "Real Estate Apps",
    desc: "Dignite Studios offers property apps for iOS devices including listings, mortgage calculators, virtual tours, and management tools.",
  },
  {
    title: "Dating and Matchmaking Apps",
    desc: "We focus on meaningful connections through verified identities and strong privacy controls that encourage genuine engagement.",
  },
];

const test = [
  {
    name: "Emily Anderson",
    designation: "— Dyn-AimIC Technologies",
    review:
      "Dignite Studios transformed our app idea into a seamless iOS application. Their team was professional, responsive, and delivered on time.",
  },
  {
    name: "Daniel Maxmillion",
    designation: "— Apex Inn",
    review:
      "The UI/UX design exceeded our expectations. User engagement has improved significantly thanks to their expertise in affordable iOS app development.",
  },
  {
    name: "Lina Clark",
    designation: "— Digititellect Solutions",
    review:
      "Our iOS app runs smoothly and efficiently. The team handled all technical challenges with ease.",
  },
  {
    name: "Robert Wills",
    designation: "— E-Core Stores",
    review:
      "From consultation to launch, Dignite Studios guided us at every step. Highly recommended for any iOS project.",
  },
  {
    name: "Samuel Phillips",
    designation: "— Stellar EventPlanners",
    review:
      "The push notification and in-app purchase features were implemented flawlessly, helping us boost revenue.",
  },
  {
    name: "Michael Carter",
    designation: "— Green Communications",
    review:
      "Their post-launch support has been outstanding. Any issue is resolved quickly, keeping our app updated and secure.",
  },
  {
    name: "Medison Halt",
    designation: "— Xplor Ltd.",
    review:
      "We wanted an app that stands out in the App Store. Dignite Studios delivered a visually stunning and functional iOS app.",
  },
  {
    name: "Travis Collins",
    designation: "— SumFinance Co.",
    review:
      "Working with Dignite Studios was a seamless experience. Our app is performing great, and users love it.",
  },
];
const BENEFITS = [
  {
    title: "Customer Retention",
    desc: "iOS apps make it easier to retain customers by keeping your brand accessible directly on their devices, encouraging repeated engagement and loyalty.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility",
    desc: "Stronger connections with your audience are formed when visibility increases, helping your brand stay in users’ minds with a dedicated app.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Increase Revenue",
    desc: "In-app purchases and mobile sales create new opportunities to grow your business through mobile applications.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Actionable Info",
    desc: "Mobile app analytics make it easier to understand user behavior and help businesses make better strategic decisions.",
    icon: <FaLock color="#F15C20" size={25} />,
  },
  {
    title: "Competition Advantage",
    desc: "Having an iOS mobile app built by top app development companies makes your business more competitive and accessible in the market.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
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
    icon: <IoGrid size={50} color="#F15C20" />,
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
    question: "Do you build iOS apps?",
    answer:
      "Yes. Our iOS app development services create apps that grow with your business. We ensure smooth performance and easy management so your iOS app can handle more users and traffic while delivering a reliable and fluent experience across iOS devices.",
  },
  {
    id: 2,
    question: "How long does iOS development take?",
    answer:
      "The timeline and iOS app development cost depend on your app’s complexity and integrations. Our iOS app development agency follows a structured process to complete projects efficiently while maintaining quality, clear communication, and timely delivery.",
  },
  {
    id: 3,
    question: "Do you support iOS app feature development?",
    answer:
      "Absolutely. With our iOS mobile app development services, we create custom features and integrations that improve functionality, connect third-party tools, automate tasks, and deliver a seamless user experience across iOS devices.",
  },
  {
    id: 4,
    question: "Can you refine my hybrid app idea?",
    answer:
      "Yes. Our iOS development agency helps refine your app idea, plan features, and implement the design. The team guides you step by step to ensure your app is easy to use, scalable, visually appealing, and aligned with business goals and customer expectations.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. Our team works with businesses of all sizes. As a professional custom iOS app development services provider, we deliver tailored solutions for startups and large enterprises, ensuring your app is secure, scalable, and optimized to grow your business.",
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
    title: "Sprint Planning",
    desc: "The sprint planning for iOS development begins, and our professional mobile app developers define the product roadmap and total execution time.",
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

const IOSAppDev = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="About "
        heading2={"Dignite Studios"}
        para="Having about 10+ years of experience, Dignite Studios is the best iOS mobile app development company in the USA. We worked on 50+ projects for startups and businesses and turned their ideas into functional mobile apps with around 200+ trusted app developers. We go from strategy to launch in quick, short sprints and develop iOS apps that are designed to grow with your business. Scalability is not just a term for us; it’s a whole mindset when we develop apps. That’s how our experience of working with different industries and services makes us unique among other companies."
        button="Find Your Team Today"
      />
      <Services
        services={services}
        header={" iOS Application Development"}
        header2={"Services"}
        button={"Book a Consultation"}
        para={
          "When you are working with Dignite Studios, you’re working with a team that is honest about the timelines and commitments. As a top iOS app development company, we have refined our iOS services to meet your needs. Working with Dignite Studios means you get strong commitments and mobile app solutions prepared by an expert company. "
        }
      />
      <TabularEcommerceTechs
        header={"Tech Stack Behind a Top iOS App"}
        header2={"Development Company"}
        para={
          "Dignite Studios uses modern technology and advanced tools to build smooth iOS applications without creating a mess. You can hire iOS app developers from an iOS mobile app development company who can bring your idea to reality in a way that it stays functional. We don’t just build apps that take a lot of time to load or feel too loaded with features or messy. Dignite Studios simply uses the best tech from our stack to build your mobile apps. "
        }
        techData={techData}
      />

         <Process
        steps={PROCESS_STEPS}
        header={
          "Proven Process of an iOS Mobile App Development Company"
        }
        para={
          "Every application begins with an idea and a goal. So, Dignite Studios works with a structured approach and hire iOS app developers who turn your idea into a highly functional iOS application. Different companies work with different and unique workflows, but when it comes to creating mobile apps at our top iOS app development company, we utilize a perfectly structured approach of the best companies to ensure that we design apps that work the proper way. Here’s the process that turns ideas into apps."
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why We’re the Right iOS App"}
        header2={"Development Partner"}
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
        button={"Choose Us for Your Project"}
        para={
          <>
            We are experts at building mobile applications that just feel right for iOS devices. You can hire ios app developer and designers. We provide you with the iOS app development services you need for your target audience. Dignite Studios consists of a team that takes the time to understand your audience before the development of the app even begins. We deliver the functional iOS applications with clear communication and reliable solutions. 
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Specialized iOS App Development Services Different"}
        header2={"Industries"}
        para={
          "We design iOS apps according to your goals. Being one of the top iOS app development companies, we hire hire ios app developer who prevent us from offering the exact same product for every industry and niche. Because offering customized solutions for every industry is our specialty. And building apps customized for your industry needs gives you an advantage in the market. "
        }
        button={" Let’s Discuss Today"}
      />
   
      <MobileApp
        header={
          "Advantages of Having Your"
        }
        header2={"iOS App"}
        para={
          <>
           There are many compelling reasons to have your own iOS app developed by a top iOS app development company. From enhancing customer retention and brand visibility to boosting revenue, it’s totally worth it if you hire iOS app developer who helps you in gaining actionable insights and staying ahead of competitors. 
          </>
        }
        cards={BENEFITS}
      />

      <Features header={"Essential Features Every iOS"} header2={"Should Have"} para={"Developing an iOS application is more than just creating attractive designs. The success of your custom iOS app development services depends on the features as well. It needs the right features to ensure performance and engagement. Every feature should enhance the user experience better. Your iOS app can boost user retention effectively by incorporating these essential features."} features={InstaFEATURES} />
      <SuccessStories
        header={" Projects Delivered by "}
        header2={"Dignite Studios"}
        para={
          "We highlighted the projects in the case studies section to see how Dignite Studios created functional iOS apps just from ideas. Every project and client we shared here shows the challenges and the custom solutions we created and implemented and the outcomes we achieved as a team together. You can see our development process and the technologies that helped us build secure and engaging iOS applications."
        }
      />
      <CTA />
      <Testimonials
        test={test}
        para={"Here’s what our clients have to say about working with Dignite Studios, a trusted iOS app development company:"}
        header={"Testimonials from Our Clients – Custom"}
        header2={"iOS App Development Services"}
      />
      <Faq header={" People Usually Ask"} faqs={faqs} />
      <ContactUs
        img={"/services/web-app/c-img.webp"}
        pathname={"Web App Development"}
        header={"Take Your iOS App Idea to the Next Level"}
        header2={""}
        para={
          "Don’t just imagine your iOS app, make it a reality. Partner with Dignite Studios to build a feature rich and high performance iOS app that brings engagement and long term success."
        }
        btn={"Start Your Project Today  "}
      />
    </div>
  );
};

export default IOSAppDev;

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
  SiMicrosoft,
  SiGooglecloud,
  SiDigitalocean,
  SiCloudinary,
  SiKotlin,
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

const FEATURES = [
  {
    title: "Material Design UI",
    desc: "Modern and intuitive interfaces built using Google’s Material Design guidelines to deliver a consistent and user-friendly Android experience.",
    icon: <MdDesignServices size={50} color="#F15C20" />,
  },
  {
    title: "Android Device Compatibility",
    desc: "Apps are developed to work smoothly across a wide range of Android devices, screen sizes, and OS versions.",
    icon: <FaMobileAlt size={50} color="#F15C20" />,
  },
  {
    title: "Google Play Store Integration",
    desc: "Seamless integration and deployment to the Google Play Store with proper optimization and compliance with Android publishing standards.",
    icon: <FaGooglePlay size={50} color="#F15C20" />,
  },
  {
    title: "Kotlin-Based Development",
    desc: "Modern Android apps built using Kotlin to ensure cleaner code, improved performance, and better scalability.",
    icon: <SiKotlin size={50} color="#F15C20" />,
  },
  {
    title: "Jetpack Libraries Support",
    desc: "Use of Android Jetpack libraries to build robust, maintainable, and high-performance Android applications.",
    icon: <FaLayerGroup size={50} color="#F15C20" />,
  },
  {
    title: "Push Notifications with Firebase",
    desc: "Real-time notifications implemented through Firebase Cloud Messaging to keep users informed and engaged.",
    icon: <FaBell size={50} color="#F15C20" />,
  },
  {
    title: "Android Security Framework",
    desc: "Advanced Android security features are implemented to protect user data and ensure safe app usage.",
    icon: <FaShieldAlt size={50} color="#F15C20" />,
  },
  {
    title: "Offline Mode with Local Data Storage",
    desc: "Enable offline functionality with local storage solutions so users can continue using important features without internet access.",
    icon: <FaDatabase size={50} color="#F15C20" />,
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
  Mobile: [
    { name: "AI Automation", icon: <FaApple /> }, // Placeholder icon
    { name: "iOS", icon: <SiIos /> },
    { name: "Android", icon: <SiAndroid /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React Native", icon: <SiReact /> },
  ],
  CMS: [
    { name: "Wordpress", icon: <SiWordpress /> },
    {
      name: "Shopify",
      icon: <SiShopify />,
      link: "/shopify-app-development", // Internal link
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
    icon: "dev",
    icon2: "dev1",
    title: "Custom Android App Development",
    description: (
      <>
        The team creates Android apps that meet your unique business needs,
        prioritizing performance and a smooth user experience through Android
        application development.
      </>
    ),
  },
  {
    icon: "call",
    icon2: "call1",
    title: "Android App Consultation",
    description: (
      <>
        Our developers provide professional Android app consultation to guide
        your strategy and optimize your app for maximum impact.
      </>
    ),
  },
  {
    icon: "h",
    icon2: "h1",
    title: "Multi-Platform Development",
    description: (
      <>
        With the best Android app development services, the team builds
        multi-platform apps that reduce costs and accelerate market growth
        without compromising performance.
      </>
    ),
  },
  {
    icon: "set",
    icon2: "set1",
    title: "Android Integration",
    description: (
      <>
        Our developers integrate Android apps with third-party services, APIs,
        and existing systems to enhance functionality through custom Android app
        development services.
      </>
    ),
  },
  {
    icon: "w",
    icon2: "w1",
    title: "Design Services",
    description: (
      <>
        The design team creates visually appealing UI/UX designs through Android
        mobile app development services that enhance user satisfaction and
        retention across all Android devices.
      </>
    ),
  },
  {
    icon: "bug",
    icon2: "bug1",
    title: "Android App Testing",
    description: (
      <>
        The team performs thorough Android app testing to ensure your app is
        secure and delivers consistent performance across all devices.
      </>
    ),
  },
  {
    icon: "mset",
    icon2: "mset1",
    title: "Android App Maintenance",
    description: (
      <>
        Our team provides ongoing Android app maintenance and support to keep
        your app secure, updated, and fully optimized.
      </>
    ),
  },
  {
    icon: "cloudes",
    icon2: "cloudes1",
    title: "MVP Development",
    description: (
      <>
        When you need to quickly validate a concept, our MVP Android app
        development services help deliver a reliable product that tests your
        idea in the market.
      </>
    ),
  },
];

const highlights = [
  {
    title: "10+ Years of Development",
    desc: "We’re the best Android app development team with over 10+ years of experience, building high-performing apps.",
  },
  {
    title: "High Level Expertise",
    desc: "Being one of the best Android app development companies, we provide top-tier design and development.",
  },
  {
    title: "Expert Project Managers",
    desc: "Providing smooth execution throughout, our expert project managers at our custom Android app development company keep the entire build on track.",
  },
  {
    title: "100% Transparent Procedure",
    desc: "The Android mobile app development company shares updates on time. Through regular updates, we offer transparency and fulfill your business needs.",
  },
  {
    title: "Post-Launch Support",
    desc: "You can easily depend on our Android app development services because the support services we offer make your app competitive in the long run.",
  },
  {
    title: "Custom Solutions",
    desc: "Every app we build is supposed to meet your requirements through Android app development services. ",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "Providing the best Android application development service, we build apps that comply with HIPAA, completely prepared for the health sector.",
  },
  {
    title: "Fintech Apps",
    desc: "With our fintech Android application development service, support is provided during the launch of secure fintech Android apps and payment mobile apps with multi-layer authentication.",
  },
  {
    title: "E-commerce & Retail Apps",
    desc: "The team keeps everything simple through Android ecommerce development services. POS, inventory, and storefront are all included.",
  },
  {
    title: "Educational Apps",
    desc: "We provide educational Android app development services that lead students step by step through courses and quizzes, while also providing teachers with dashboards.",
  },
  {
    title: "Real Estate Apps",
    desc: "Dignite Studios offers property apps for Android devices that include listings, mortgage calculators, virtual tours, and management tools.",
  },
  {
    title: "Dating and Matchmaking Apps",
    desc: "Features are important, but so are meaningful connections. This approach focuses on verified identities and privacy controls that increase genuine engagement.",
  },
];

const test = [
  {
    name: "Sarah Mitchell",
    designation: "— Founder, BrightStart Innovations",
    review:
      "“Dignite Studios turned our idea into a fully functional Android app in record time. The team was responsive, professional, and highly skilled in Android development.”",
  },
  {
    name: "Lawrence Steel",
    designation: "— E-Commerce Manager, ShopEase Online",
    review:
      "“From concept to launch, Dignite Studios guided us through the process seamlessly. Our Android app exceeded all expectations.”",
  },
  {
    name: "Mark Thompson",
    designation: "— CEO, HealthSync Technologies",
    review:
      "“The team built a secure, reliable Android app that improved our workflow and enhanced user engagement. Highly recommend their services.”",
  },
  {
    name: "Emily Lewis",
    designation: "— Product Manager, FinTrack Systems",
    review:
      "“Dignite Studios delivered a clean, intuitive Android app with excellent performance. Their attention to detail is unmatched.”",
  },
  {
    name: "Jack Buyers",
    designation: "— Owner, QuickLogistics Ltd.",
    review:
      "“Our Android app now runs smoothly across devices thanks to their expertise. The team handled everything professionally and efficiently.”",
  },
  {
    name: "Laura Chen",
    designation: "— CTO, EduSmart Learning",
    review:
      "“They transformed our education platform into a seamless Android app. The development process was transparent, and the results exceeded our expectations.”",
  },
  {
    name: "Michael Davis",
    designation: "— Operations Head, TravelMate Solutions",
    review:
      "“Dignite Studios created an engaging Android app that boosted our customer engagement. Their expertise in Android technologies is outstanding.”",
  },
];

const BENEFITS = [
  {
    title: "Customer Retention",
    desc: "Android apps make it simpler to retain customers by keeping your brand accessible directly on their devices. It increases repeated engagement and loyalty.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility",
    desc: "When visibility is stronger, better and stronger connections with your audience are formed. Getting an app helps you stay in users’ minds with a branded experience.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Increase Revenue",
    desc: "To increase revenue, in-app purchases and mobile sales are powerful ways to grow your business, which is possible through mobile apps.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Actionable Info",
    desc: "Using Android app analytics makes it easier to understand user behavior and helps businesses make better data-driven decisions.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Competition",
    desc: "Having an Android mobile app built by expert developers makes your business more competitive and accessible in the market.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "Do you build Android apps?",
    answer:
      "Absolutely. We’re professionals at building Android apps. Our development team creates applications that grow with your business. We focus on smooth performance, scalability, and easy management so your Android app can handle more users and traffic while delivering a reliable experience.",
  },
  {
    id: 2,
    question: "How long does Android development take?",
    answer:
      "The timeline and Android app development cost depend on your app’s complexity and integrations. Our Android app development team follows a structured process to complete projects efficiently, focusing on quality, clear communication, and timely delivery so your Android app launches on schedule.",
  },
  {
    id: 3,
    question: "Do you support Android app feature development?",
    answer:
      "Absolutely. With our Android app services, we create custom features and integrations for your app. These improvements enhance functionality, connect third-party tools, automate tasks, and provide a seamless user experience across Android devices.",
  },
  {
    id: 4,
    question: "Can you refine my Hybrid app idea for Android?",
    answer:
      "Yes. Our Android development team helps refine your app idea, plan features, and implement the design. We guide you step by step to ensure your app is easy to use, scalable, visually appealing, and aligned with your business goals and customer expectations.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. Our team works with businesses of all sizes. As a custom Android app development provider, we deliver tailored solutions for startups and enterprises, ensuring your app is secure, scalable, and optimized to support long-term growth.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Strategy",
    desc: "When the goals are clear, the product turns out amazing, so in this phase, we align your business goals with the app’s vision and features.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "It is a mobile app development process in which a preliminary visual mock-up has been created that shows the mobile app’s initial design.",
  },
  {
    step: "03",
    title: "Development Stage ",
    desc: "The Android app development begins, and our professional app developers begin the execution with the product roadmap.",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "Conducting tests at every stage of the development process helps keeping up with the latest status updates.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Deployment is where preparation connects performance, resulting in smooth operation across iOS and Android.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "Once the launch is done, the developers’ focus shifts to checking performance and optimizing features based on user feedback.",
  },
];

const AndroidAppDev = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="A Decade of Android"
        heading2={"Innovation"}
        para="Dignite Studios is an expert Android app development company with 10+ years of experience. We have successfully completed 300+ projects for startups and enterprises. Which means our Android app development services transform the ideas into highly functional Android apps with the help of 200+ trusted app developers. Our process is organized in fast, efficient sprints from strategy to launch. It means ensuring apps that are not just functional but built to grow with your business. Scalability is more than a word for us; it’s a mindset. Our extensive experience across industries and services makes us stand out among Android development companies."
        button="Get Your Team Today"
      />
      <Services
        services={services}
        header={"Custom Android App Development"}
        header2={"Services"}
        button={"Find Your Required Service"}
        para={
          "You’re working with a team that is transparent about timelines and commitments when you get mobile app development services for Android from Dignite Studios. As a top Android mobile app development company, we have refined our services to meet your specific business needs. So, working with us is the best idea for your business."
        }
      />
      <TabularEcommerceTechs
        header={"Advanced Tools for High-Performing"}
        header2={"Android Apps"}
        para={
          "We’re known for using modern technology and advanced tools in our custom Android app development services that build smooth applications without a single mess. We have a team of expert developers who can build an entire highly functional application just with your idea in a way that it runs smoothly and doesn’t cause hassle. We simply use the best tech from our stack to build your mobile apps. "
        }
        techData={techData}
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Proven Process of an Android Mobile App "}
        header2={"Development Company"}
        btn={"Initiate Your App Development"}
        para={
          "Every application begins with an idea and a goal, and Dignite Studios works with a structured approach that turns your idea into a highly functional Android application. Different Android app development companies work with unique workflows, but when it comes to creating mobile apps at our top Android app development services company, we provide the best Android app development services in USA to ensure that we design apps that work properly. Here’s our app development process. "
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why We’re The Top Android App "}
        header2={"Development Company"}
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
        button={"Share Your Idea"}
        para={
          <>
            At our custom Android app development company, we have a team of
            experts at building mobile applications that just feel right for
            Android devices. You can hire us for the Android app developers and
            designers. We provide you with the Android app development services
            you need for your target audience. Dignite Studios means a team that
            takes the time to understand your audience before the development of
            the Android app even begins. We deliver functional Android
            applications with clear communication and reliable solutions.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Specialized Android App Development for Different  "}
        header2={"Industries"}
        para={
          "The team designs Android apps according to your goals. Being one of the expert Android app development companies, our expertise and experience prevent us from creating the exact same product for all the niches and industries. Offering customized Android solutions for every industry is our specialty. And developing apps customized for your industry needs gives you a competitive advantage in the market.  "
        }
        button={"Let’s Discuss Today"}
      />
      <MobileApp
        header={"Benefits of Developing an Android App for Your "}
        header2={"Business"}
        button={"Get Your Android App"}
        para={
          <>
            There are many compelling reasons to have your own Android app
            developed by a top Android app development company. From enhancing
            customer retention and brand visibility to boosting revenue, it’s
            totally worth it if you get your app developed by the experts who
            help you in gaining actionable insights and staying ahead of
            competitors.
          </>
        }
        cards={BENEFITS}
      />
      <Features
        header={"Essential Features Every Successful Android App"}
        header2={"Should Have"}
        para={
          <>
            Developing an Android application at our Android app development
            services company is more than just creating colorful designs. The
            success of your Android application depends on the features as well
            because it needs the right options and features to ensure engagement
            and performance. Every feature should be able to enhance the user
            experience further. Your Android application could boost user
            retention effectively by incorporating these essential features.
          </>
        }
        features={FEATURES}
        button={"Get Feature Recommendations"}
      />
      <SuccessStories
        header={" Our Android App Development "}
        header2={"Success Stories"}
        para={
          "In our case studies section, we highlight how Dignite Studios creates highly functional Android applications just from ideas. Each example highlights the unique challenges we faced and the custom Android solutions we implemented. So the results were impeccable. You’ll also see our development approach and the technologies that enabled us to build fast and secure Android applications for businesses across industries"
        }
      />
      <CTA />
      <Testimonials
        test={test}
        header={"Feedback About Our Android App Development"}
        header2={"Services Company"}
      />
      <Faq faqs={faqs} />
      <ContactUs
        img={"/services/mobile-app/c-img.webp"}
        pathname={"Android App dev"}
        header={"Ready to Launch Your Android App?"}
        header2={""}
        para={
          "Your app shouldn’t wait anymore. Discuss your plan with Dignite Studios and get an app that delivers the outcomes your business needs. "
        }
        btn={"Start Your Android App Today "}
      />
    </div>
  );
};

export default AndroidAppDev;

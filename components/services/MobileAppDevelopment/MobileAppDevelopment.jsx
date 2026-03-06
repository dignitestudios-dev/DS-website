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
    title: "Smart Search",
    desc: "Included search bar that helps users find the information or product they are looking for efficiently.",
    icon: (
      <FaSearch
        color="transparent"
        stroke="#F15C20"
        strokeWidth={40}
        size={50}
      />
    ),
  },
  {
    title: "Passwordless Login",
    desc: "Secure login without passwords to make authentication simple and safe for users.",
    icon: (
      <FaLock color="transparent" stroke="#F15C20" strokeWidth={40} size={50} />
    ),
  },
  {
    title: "Offline Access",
    desc: "Mobile apps provide users with access to some features even without an internet connection.",
    icon: (
      <FaMobileAlt
        color="transparent"
        stroke="#F15C20"
        strokeWidth={40}
        size={50}
      />
    ),
  },
  {
    title: "Push Notifications",
    desc: "Keep users engaged by providing real-time updates and reminders directly on their screens.",
    icon: (
      <FaBell color="transparent" stroke="#F15C20" strokeWidth={40} size={50} />
    ),
  },
  {
    title: "In-App Chat",
    desc: "Provide real-time chat support to users for instant help and better user satisfaction.",
    icon: (
      <FaCommentDots
        color="transparent"
        stroke="#F15C20"
        strokeWidth={40}
        size={50}
      />
    ),
  },
  {
    title: "Secure Payments",
    desc: "High-level security is integrated to ensure safe transactions through the app.",
    icon: (
      <FaCreditCard
        color="transparent"
        stroke="#F15C20"
        strokeWidth={40}
        size={50}
      />
    ),
  },
  {
    title: "Social Sign-In",
    desc: "Allow users to easily sign in and share content through social media platforms.",
    icon: (
      <FaShareAlt
        color="transparent"
        stroke="#F15C20"
        strokeWidth={40}
        size={50}
      />
    ),
  },
  {
    title: "Real-Time Updates",
    desc: "Provide live updates to users instantly to keep them informed and engaged.",
    icon: (
      <FaClock
        color="transparent"
        stroke="#F15C20"
        strokeWidth={40}
        size={50}
      />
    ),
  },
  {
    title: "User Profiles",
    desc: "Users can create and manage profiles to personalize their experience within the app.",
    icon: (
      <FaUsers
        color="transparent"
        stroke="#F15C20"
        strokeWidth={40}
        size={50}
      />
    ),
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
    icon: "database",
    icon2: "database1",
    title: "iOS App Development",
    description: (
      <>
        The iPhone app development is the best choice if your audience is iOS
        users. Dignite Studios develops iOS applications that deliver a sleek
        user experience.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        You can definitely rely on Dignite Studios with your Android app
        development because the team develops applications that are optimized
        for devices like Samsung and OnePlus.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Hybrid App Development",
    description: (
      <>
        Hybrid mobile app development keeps your project smooth. So, if you care
        about fast results without breaking the budget, hybrid development is
        your match.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Native & Web Apps",
    description: (
      <>
        Building custom solutions? We are one of the best mobile app development
        companies. The services include native app development services and web
        app development services.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "Design Services",
    description: (
      <>
        Every click matters. So, in our mobile app design services, we include
        specialized iOS app design and Android app design services. Everything
        is designed to make your app attractive.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance and Testing",
    description: (
      <>
        Dignite Studios provides mobile app support & maintenance, consulting,
        and testing & QA services to make sure your app stays updated.
      </>
    ),
  },
];

const highlights = [
  {
    title: "12+ Years of Development",
    desc: "We’re the best mobile app development company USA with over 10+ years of experience, building high-performing apps.",
  },
  {
    title: "High Level Expertise",
    desc: "Being one of the top mobile app development companies, we provide top-tier design and development.",
  },
  {
    title: "Expert Project Managers",
    desc: "Our professional project managers make sure to keep the entire build on track, providing smooth execution throughout.",
  },
  {
    title: "100% Transparent Procedure",
    desc: "The development team shares the updates on time. Through updates, we ensure transparency to your business needs as one of the top mobile app development companies",
  },
  {
    title: "Post-Launch Support",
    desc: "The support services we provide make your app competitive, so you can easily depend on our mobile app development services.",
  },
  {
    title: "Custom Solutions",
    desc: "Every app we build is supposed to meet your requirements through custom app development.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "As the best mobile app development company USA, we build apps that comply with HIPAA, completely prepared for the health sector.",
  },
  {
    title: "Fintech Apps",
    desc: "With our fintech mobile app development services, we provide support in launching secure fintech apps and payment mobile apps with multi-layer authentication.",
  },
  {
    title: "Ecommerce & Retail Apps",
    desc: "Dignite Studios keeps everything simple through ecommerce development services. Storefront, Inventory, and POS? Already included.",
  },
  {
    title: "Education & E-learning apps",
    desc: "We provide education app development services that lead students step by step through courses and quizzes. That includes providing teachers with dashboards too.",
  },
  {
    title: "Real Estate Apps",
    desc: "Dignite Studios offers property apps that include the following: Listings, virtual tours, mortgage calculators, and management tools.",
  },
  {
    title: "Dating and Matchmaking Apps",
    desc: "Helpful connections matter more than features. This approach prefers verified identities and privacy controls that increase genuine engagement.",
  },
];

const test = [
  {
    name: "Samantha Micheal",
    designation: "— Founder, SwiftStart",
    review:
      "“Working with Dignite Studios was incredible. They assured me that I’d get a fully functional app faster than I expected. And honestly, they did. The team led me through every step and the end product exceeded my expectations.”",
  },
  {
    name: "James Roberts",
    designation: "— CEO, ShopEase",
    review:
      "“The recent shopping app has increased customer engagement. Their team understood our requirements perfectly and delivered a user-friendly app. Communication was clear throughout the entire process.”",
  },
  {
    name: "Priya Kapoor",
    designation: "— Entrepreneur, FinTrack",
    review:
      "“I appreciate how the developers suggested practical features to improve user experience. They built a secure application that aligns with my business goals. Highly recommended for anyone who’s looking for professional app development.”",
  },
  {
    name: "Michael Lee",
    designation: "— Product Manager, HealthSync",
    review:
      "“The team was professional and responsive. They developed a cross-platform app with flawless performance on both iOS and Android. Post-launch support has been fantastic too.”",
  },
  {
    name: "Ananya Singh",
    designation: "— CEO, RideNow",
    review:
      "“Their team handled everything smoothly. They built a visually appealing app that our users love. Their expertise in mobile app development is unmatched, literally.”",
  },
  {
    name: "David Thompson",
    designation: "— Founder, MedCare Solutions",
    review:
      "“We needed a safe and secure app for the healthcare platform. The team delivered beyond expectations. They added features and provided smooth functionality. Truly a great experience.”",
  },
  {
    name: "Rachel Parker",
    designation: "— CEO, QuickServe",
    review:
      "“The development process was smooth, and the team offered excellent suggestions for enhancing app usability. Our app launched successfully and received amazing user feedback right away.”",
  },
];

const BENEFITS = [
  {
    title: "Customer Retention",
    desc: "It’s easier to enhance customer retention through Mobile applications by making your brand easily accessible.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility",
    desc: "When visibility is stronger, stronger connections with your audience are formed, so stay in users’ minds with a branded app.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Increase Revenue",
    desc: "In-app purchases and mobile sales are the new ways to grow your business, which is only possible through Mobile apps.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Actionable info",
    desc: "Using mobile app analytics is an easier way to understand user behavior, resulting in making smarter business decisions.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Competition",
    desc: "Having a mobile app built by the best mobile app development companies makes your business competitive and more accessible in the market while giving you an edge.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How much time does it usually take to build a mobile app?",
    answer:
      "Dignite Studios doesn’t provide a fixed, similar timeline for each mobile app during development. The time always depends on the complexity and features of every application. Usually, a mid-level application would take up to 8-12 weeks, but it all depends. If you need a final cost estimate, contact our team and share your app idea.",
  },
  {
    id: 2,
    question: "Can you build iOS applications too?",
    answer:
      "We’re experts, building both iOS and Android apps. Our trusted developers create high-performance applications. The developers can easily work with native and Swift to develop applications that feel simple while ensuring functionality.",
  },
  {
    id: 3,
    question: "Would you provide support after we’re done with the launch?",
    answer:
      "Yes. It’s called post-launch support, and we definitely stay with you even when the app is launched. Providing proper post-launch maintenance and updates. So that we know that the app would stay aligned with the vision and users’ needs.",
  },
  {
    id: 4,
    question: "What if I have a rough idea? Can you guide me?",
    answer:
      "Here’s a thing: There’s no app that starts with the perfect idea. With this understanding, we show guidance through a free consultation and explain the concepts. The app experts can help you out by adding practical aspects to your application and preparing it for the future.",
  },
  {
    id: 5,
    question: "How much does a mobile application usually cost?",
    answer:
      "Basically, we don’t have the fixed pricing rules for all the applications. The cost completely depends on the features and the integrations you want your application to have. It’s up to your app’s vision, but at Dignite Studios, we keep pricing transparent with no hidden fees.",
  },
  {
    id: 6,
    question:
      "Are you currently working with startups, too, or just the enterprises?",
    answer:
      "The app development team works with both startups and enterprises. So, it doesn’t matter if you’re a startup or enterprise, we would definitely work with you. Whether you’re building an MVP or scaling an existing application. We would look forward to building an amazing app together either way.",
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
    title: "Sprint Planning",
    desc: "The sprint planning for app development begins, and our professional mobile app developers define the product roadmap and total execution time.",
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

const MobileAppDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="The BackStory"
        heading2={"of Dignite Studios"}
        para="With 10+ years of experience, Dignite Studios is the best mobile app development company in USA. With over 200+ trusted mobile app developers, we’ve worked on 50+ projects for startups and businesses and turned their ideas into functional mobile apps. We go from strategy to deployment in quick sprints and develop mobile apps that are designed to grow with your business. Scalability is not just a word for us; it’s a whole mindset when we develop apps. That’s how our experience with different industries and services makes us unique among other companies."
        button="Contact us Today"
      />
      <Services
        services={services}
        header={"Expert Mobile App Development"}
        header2={"Services"}
        button={"Explore Our Services Today!"}
        para={
          "When you are working with Dignite Studios, you’re working with a team that adds commitment to the work ethic first. As a custom mobile app development company, we have refined our mobile app development services to meet your needs. Working with us means you get strong commitments and mobile app solutions prepared by Dignite Studios."
        }
      />
      <TabularEcommerceTechs
        header={"Advanced Ecommerce App Development"}
        header2={"Technology Stack"}
        para={
          "We use modern tools and platforms to build scalable ecommerce apps. As the reliable ecommerce app development company in USA, we focus on performance, security and smooth mobile app solutions for modern businesses."
        }
        techData={techData}
      />
      <Bussiness
        bs={highlights}
        header={"Why You Should Choose "}
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
                src="/location/mobile-boston/cta-img.png"
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
        button={"Choose The Right Team "}
        para={
          <>
            We are experts at building mobile applications. Having a team of the
            best developers and designers, we provide you with everything you
            need as a custom mobile app development company. Dignite Studios
            consists of a team that takes the time to understand your audience
            before the development even begins. We deliver the functional
            applications with clear communication and reliable solutions.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Specialized Mobile App Development For Different "}
        header2={"Industries"}
        para={
          "We design mobile apps according to your growth goals. Being one of the top mobile app development companies, our experience stops us from offering the exact same product for every industry. Offering customized solutions for every industry is our speciality. Also, building apps around your industry needs gives you an advantage in the market. "
        }
        button={"Let’s Talk Today"}
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Proven Process of a Custom Mobile App Development Company"}
        para={
          "Every application begins with a visualization. So, the team works with a structured approach that brings your idea to life. Different companies work with unique workflows, but when it comes to creating mobile apps at our development company, we utilize a perfectly structured approach of the best mobile app development companies to ensure that we design applications that work the proper way. Here’s the workflow that turns visions into apps."
        }
      />
      <MobileApp
        header={"Benefits of Having Your Mobile "}
        header2={"App"}
        para={
          <>
            There are several reasons why you should get your own mobile app
            built from the best mobile app development company in USA.
          </>
        }
        cards={BENEFITS}
      />
      <Features
        header={"Must-Have Features in Your Mobile "}
        header2={"App"}
        para={
          <>
            Being one of the best app development companies, we make sure that
            your application matches the modern standards through must-have
            features.
          </>
        }
        features={FEATURES}
        button={"Get Feature Recommendations"}
      />
      <SuccessStories
        header={"Successful Projects Executed by "}
        header2={"Dignite Studios"}
        para={
          "Here’s the case studies section, showcasing the solutions and apps we built with our workflow, which actually make development easier."
        }
      />
      <CTA />
      <Testimonials
        test={test}
        header={"What Our Clients "}
        header2={"Say"}
        para={
          "Startups and growing businesses choose us. Our clients often describe us as the best mobile app development company in Boston for our ability to combine quality and measurable business outcomes."
        }
      />
      <Faq faqs={faqs} />
      <ContactUs
        img={"/services/mobile-app/c-img.png"}
        pathname={"Mobile Dev in Boston "}
        header={"Start Your Mobile App Project Today"}
        header2={""}
        para={
          "We build high-quality mobile apps, designed for performance and growth. Let’s take the first step toward building a successful mobile app."
        }
        btn={"Discuss Your Idea"}
      />
    </div>
  );
};

export default MobileAppDevelopment;

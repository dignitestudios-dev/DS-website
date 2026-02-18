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
        The iOS / iPhone app development is the perfect choice if your audience consists of iOS users. Dignite Studios develops iOS applications that are ready to deliver a smooth user experience.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        If you need Android mobile app development services in Texas, you can trust Dignite Studios with your Android app development. The team develops Android applications that are fully optimized for devices like Samsung and OnePlus.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Hybrid App Development",
    description: (
      <>
        Our Hybrid mobile app development Texas services keep your project running smoothly. So, if you care about quick results without ruining the budget, hybrid development is your perfect match.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Native & Web Apps",
    description: (
      <>
        When it comes to building custom solutions, we are the best custom mobile app development company in Texas. The offerings include native app development services and web app development services.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "Design Services",
    description: (
      <>
        Every click should matter. So, our mobile app design services include iOS app design and Android app design services with a focus on clear interfaces. The outcome is consistent branding. Everything is designed to make your app engaging.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance and Testing",
    description: (
      <>
        Dignite Studios is a team of app developers that provides mobile app support & maintenance, consulting, and testing & QA services to ensure your app remains up to date. Dignite Studios helps with the app launch & deployment.
      </>
    ),
  },
];


const highlights = [
  {
    title: "12+ Years of Development",
    desc: "We're the expert mobile app development companies in Texas with over 10 years of experience.",
  },
  {
    title: "High Level Expertise",
    desc: "Being a trusted app development company, our mobile app development in Texas provides top-tier design and development.",
  },
  {
    title: "Expert Project Managers",
    desc: "Our professional project managers keep the entire build on track, and you get smooth execution throughout.",
  },
  {
    title: "100% Transparent Procedure",
    desc: "The development team will share the updates. Through updates, we ensure accountability and adaptability to your business needs.",
  },
  {
    title: "Post-Launch Support",
    desc: "The support services make sure your app is competitive, so you can easily depend on our mobile app development Texas services.",
  },
  {
    title: "Custom Solutions",
    desc: "Every app is built to meet your market requirements through custom mobile app development.",
  },
];



const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "As a Healthcare App Development Company in the USA, we build HIPAA-ready apps that are prepared for the health sector.",
  },
  {
    title: "Fintech Apps",
    desc: "Through our fintech mobile app development services in Texas, we provide proper support in launching secure fintech apps and payment mobile apps with multi-layer authentication.",
  },
  {
    title: "E-commerce & Retail Apps",
    desc: "Dignite Studios keeps things simple through ecommerce application development services. Storefront, Inventory POS, and loyalty? All included.",
  },
  {
    title: "Education & e-Learning Apps",
    desc: "We provide education app development services in Texas that guide students step by step through courses and quizzes. Providing teachers with dashboards that help them do their job.",
  },
  {
    title: "Real Estate Apps",
    desc: "Our app development company offers property tech apps that include property listings, virtual tours, mortgage calculators, and lead management tools.",
  },
  {
    title: "Dating & Matchmaking Apps",
    desc: "Actual helpful connections matter more than features. Our approach prioritizes verified identities and privacy controls that increase genuine engagement.",
  },
];


const test = [
  {
    name: "Sarah Mitchell",
    designation: "Marketing Director, BrightCore Solutions",
    review:
      "“Working with this team delivered measurable ROI within the first quarter. The strategy was clear, execution was sharp, and results exceeded expectations.”",
  },
  {
    name: "Daniel Reed",
    designation: "Operations Manager, Northbridge Technologies",
    review:
      "“They moved incredibly fast without compromising quality. From kickoff to delivery, every milestone was met on time and with precision.”",
  },
  {
    name: "Priya Nair",
    designation: "Founder & CEO, Elevate Consulting Group",
    review:
      "“True professionals from start to finish. Communication was seamless, processes were transparent, and the final outcome reflected a high standard of excellence.”",
  },
];

const BENEFITS = [
  {
    title: "Customer Retention",
    desc: "Mobile applications make it easier for you to enhance customer retention by making your brand easily accessible.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility",
    desc: "Stronger visibility means stronger connections with your audience, so stay in users' minds with a branded app.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Increase Revenue",
    desc: "Mobile apps create new ways to grow your business through in-app purchases or mobile sales.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Actionable Info",
    desc: "You need to make smarter business decisions and analytics in mobile apps help you understand user behavior better.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Competition",
    desc: "Having a mobile app positions your business as accessible in the Texas market and gives you an edge.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];


const faqs = [
  {
    id: 1,
    question: "How much time does it usually take to build a mobile app development in Texas?",
    answer:
      "We don't provide a fixed, similar timeline for each mobile app during development. The time always depends on the features and the complexity of each application. Usually, a basic application would take up to 8-12 weeks, but it all depends. If you want a final estimate, contact our experts and discuss your app idea.",
  },
  {
    id: 2,
    question: "Can you build iOS applications too?",
    answer:
      "We're a team of experts building both iOS and Android apps. Our professional developers create high-performance applications. The developers can easily work with native and Swift to create applications that feel simple and smooth while ensuring functionality.",
  },
  {
    id: 3,
    question: "Would you provide support after we're done with the launch?",
    answer:
      "Yes. We call it post-launch support, and of course we stay with the client even when the app is launched—providing post-launch maintenance and updates. This ensures the app stays aligned with the vision and users' needs.",
  },
  {
    id: 4,
    question: "What if I have a rough idea? Can you guide me?",
    answer:
      "Here's a fact: No app starts with the perfect idea. With this understanding, we validate concepts and offer guidance through a free consultation. The experts help by adding practical aspects to your app and preparing it for the future.",
  },
  {
    id: 5,
    question: "How much does a mobile application usually cost in Texas?",
    answer:
      "Similarly, we don't have the same fixed pricing rules for all applications. The pricing and cost depend completely on the features and integrations you want your application to have. It's all based on your app's vision, but we keep pricing transparent with no hidden fees.",
  },
  {
    id: 6,
    question: "Are you currently working with startups, too, or just enterprises?",
    answer:
      "The development team works with both startups and enterprises across Texas. We would definitely work with you—whether you're building an MVP or scaling an existing application. We look forward to building something amazing together either way.",
  },
];




const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Strategy",
    desc: "When the goals are clear, the product turns out amazing, so in this phase, we align your business goals with the app's vision and features.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "It is a Texas-based mobile app development process in which a preliminary visual mock-up has been created that shows the mobile app's initial design.",
  },
  {
    step: "03",
    title: "Sprint Planning",
    desc: "The sprint planning for app development begins, and our professional mobile app developers define the product roadmap and total execution time.",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "Analyzing at every stage of the development process is the best way to reduce bugs. It helps with staying up to date with the latest status updates.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Deployment is where preparation merges with performance, ensuring smooth operation across iOS and Android.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "Once the launch has happened, the developers' focus shifts to checking performance and optimizing features based on user feedback.",
  },
];



const MobileAppTexas = () => {
  return (
    <div className="max-w-screen-2xl w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="The Story Behind "
        heading2={"Dignite Studios"}
        para="Looking for an expert mobile app development company in Texas? That's Dignite Studios. We're a team of 200+ trusted mobile app developers who work with startups and businesses to turn their ideas into functional mobile apps. From strategy to UI/UX design and agile development and deployment, we develop mobile apps in Texas that are reliable and designed to grow with your business. Being one of the best mobile app development Texas companies with 10+ years of experience and an expert team, we build apps exactly as you want."
        button="Talk to The Team"
      />
      <Services
        services={services}
        header={"Mobile App Development Services"}
        header2={"in Texas"}
        para={
          "When you work with Dignite Studios, we make sure you know our work ethic. Being a trusted app company, we refined our mobile app development in Texas to meet your needs and help your vision come true. Working with us means you get strong commitments. Mobile app solutions prepared by Dignite Studios cover every phase with technical expertise and a clear focus on your goals."
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why Texas Businesses Choose"}
        header2={"Dignite Studios"}
        ctaHeader={"Time to Choose The Right Team!"}
        ctaPara={
          "We just showed you what makes us different from other mobile app development companies. Now let's start working on your app idea. Discuss your app vision and long-term growth plans with the team."
        }
        ctaBtn={"Contact the Team Now!"}
        cta={
          <div className="bg-transparent overflow-hidden text-white hover:scale-105 z-50 absolute opacity-100 shadow-[#F15C2033] transition-all  w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  ">
            <div className="relative" >
            <img src="/location/mobile-texas/b-cta.png" className="w-full rounded-b-2xl bottom-3 relative bg-cover" alt="lggg" />
            <div className="md:w-[45%] absolute top-[45%] left-1/2 translate-x-[-50%] -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center text-center">
              <h1 className="text-[45px] font-bold text-white leading-[45px]">
                Time to Choose The Right Team!
              </h1>
              <p>
                We just showed you what makes us different from other mobile app development companies. Now let's start working on your app idea. Discuss your app vision and long-term growth plans with the team.
              </p>
              <Link
                href={"/contact-us"} className="flex items-center group justify-center ">
                <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                Contact the Team Now!
                </button>
                <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                  <MdArrowOutward />
                </button>
              </Link>
            </div>
            </div>
          </div>
        }
        para={
          <>
          We are not just random people; we are professionals in Texas. We have a team of the best developers and designers to provide you with everything you need as a trusted mobile app development company in Texas. A team who take the time to understand your goals and audience before the development starts. We deliver the best applications with clear communication and reliable solutions.  
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Specialized Mobile App Development"}
        header2={"in Texas For Industries"}
        para={
          "We don't believe in building the same kind of products for everyone at Dignite Studios. We design mobile app solutions around your growth goals. Being one of the expert mobile app development companies in Texas, we don't offer the exact same product for every industry. We build customized solutions for every industry. Also, building apps around your compliance needs gives you an advantage in the Texas market."
        }
      />
      <Process
      steps={PROCESS_STEPS}
        header={"Proven Workflow of Mobile App Development in Texas"}
        para={
          "Every app is built with a story. So, the team follows a structured approach that brings your idea to life. Different companies work with different workflows, but when it comes to developing applications at our mobile app development company, we use a perfectly structured approach to ensure that we design applications that work the way you envisioned. Here's the workflow that turns visions into apps."
        }
      />
      <MobileApp
        header={"Here's Why You Need"}
        header2={"a Mobile App"}
        para={
          "Here are the reasons why you should get an app built from a trusted mobile app development company."
        }
        cards={BENEFITS}
      />
      <SuccessStories header={"Successful Applications Built by"} header2={"Dignite Studios"} para={"Check out our case studies to see solutions and apps, along with our workflow, that actually make development easier."} />
      <CTA />
      <TechAndTools header={"Tools And Technologies"} para={"Do you ever see how some apps feel so smooth to use, while some apps are just simply a mess? Being a trusted app development company, we make sure your app runs perfectly every time. So, to make your app smooth and easy to use, we use modern technologies so the performance of your app is for the long term."}/>
      <Testimonials
        test={test}
        header={"What Clients Say About"}
        header2={"Dignite Studios"}
        para={""}
      />
      <Faq faqs={faqs} />
      <ContactUs
        pathname={"Mobile Dev in Texas"}
        header={"Take The Next Important Initiative Today!"}
        img={"/location/mobile-tampa/c-img.png"}
        header2={""}
        para={
          "Stop delaying your project. Contact us today and get your app built with professional app developers. We provide expertise and reliability through mobile app development in Texas. Get a dedicated team of app developers to launch your app faster."
        }
        btn={"Contact us Today!"}
      />
    </div>
  );
};

export default MobileAppTexas;

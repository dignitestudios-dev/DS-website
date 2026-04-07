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
  SiGooglecloud,
  SiDigitalocean,
  SiCloudinary,
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
    icon: "icon",
    icon2: "icon4",
    title: "Hybrid Consultation",
    description: (
      <>
        The hybrid mobile app development service also includes expert
        consultation to help you make the right decision. We take the time to
        understand your goals and business approach before recommending the most
        suitable development strategy.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "Hybrid UI/UX Design",
    description: (
      <>
        When building a hybrid app, appearance and user experience matter just
        as much as performance. Our team designs clean and intuitive interfaces
        that make navigation simple, engaging, and enjoyable for users.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Hybrid Maintenance & Support",
    description: (
      <>
        Keeping your app in top shape is easy with our hybrid development
        services. We provide ongoing maintenance and technical support so your
        application stays updated, secure, and optimized for performance.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Hybrid App Migration",
    description: (
      <>
        Want to upgrade your existing mobile application? Our hybrid app
        migration services help transform your current setup into a reliable
        hybrid solution without losing functionality or performance.
      </>
    ),
  },
];

const highlights = [
  {
    title: "12+ Years of Development",
    desc: "We’re the best hybrid app development company USA with over 10+ years of experience, building high-performing apps.",
  },
  {
    title: "High Level Expertise",
    desc: "Being one of the top app development companies, we provide top-tier design and development.",
  },
  {
    title: "Expert Project Managers",
    desc: "Our professional project managers make sure to keep the entire build on track, providing seamless execution throughout.",
  },
  {
    title: "100% Transparent Procedure",
    desc: "The hybrid mobile app development team shares the updates on time. Through updates, we ensure transparency to your business requirements as one of the top hybrid app development companies.",
  },
  {
    title: "Post-Launch Support",
    desc: "The support services we provide make your app competitive, so you can easily depend on our best hybrid mobile app development services.",
  },
  {
    title: "Custom Solutions",
    desc: "Every app we build through hybrid app development services is supposed to meet your requirements through hybrid app development.",
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

const HybridAppDev = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="What’s"
        heading2={"Dignite Studios"}
        para="We’re providing reliable hybrid mobile app development services with a team of 200+ developers. 10+ years of experience for us means Dignite Studios has worked on over 50+ projects for startups, businesses, and enterprises. By creating functional products from scratch, the team focuses on building secure mobile applications customized to your unique business needs. With a strong emphasis on the high performance of hybrid mobile applications. The team is great at building reliable mobile solutions. improving efficiency and user experience. The aim is to provide mobile apps that support long term business success and adapt to changing technological needs."
        button="Contact us Today"
      />
      <Services
        services={services}
        header={"Best Hybrid Mobile App Development"}
        header2={"Services"}
        button={"Explore Our Services Today"}
        para={
          "When you are working with Dignite Studios, you’re working with a hybrid mobile app company that adds commitment to the work ethic first. As experts, we have refined our hybrid mobile app development services to meet your needs. Working with us means you get transparency and expert mobile app solutions prepared by Dignite Studios. "
        }
      />
      <TabularEcommerceTechs
        header={"Expert Tools and Tech Behind"}
        header2={"Mobile  Apps"}
        para={
          "The team uses modern technology and advanced tools to build smooth applications without creating a mess. We have a team of expert developers who can bring your idea to reality in a way that it runs seamlessly across devices and stays functional. We don’t just build apps that take minutes to load or feel too loaded with features; we just use the best tech from our stack to build your mobile apps. "
        }
        techData={techData}
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Proven Process of a Hybrid Mobile App Development Company"}
        para={
          "The development team works with a perfectly structured approach that brings your idea to life. Different hybrid development companies work with unique workflows, but when it comes to creating mobile apps at our company, we utilize an approach of the hybrid app development company USA approach to ensure that we design applications that work the proper way. Here’s the workflow. "
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why Businesses Should Choose "}
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
        button={"Select The Right Team "}
        para={
          <>
            Dignite Studios is experts at building hybrid mobile applications.
            Having a team of the best developers and designers, we provide you
            with everything you need as a hybrid mobile app development company.
            Dignite Studios is a team that takes the time to understand your
            audience before the development even begins. We deliver functional
            applications with proper communication and reliable solutions.
          </>
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

export default HybridAppDev;

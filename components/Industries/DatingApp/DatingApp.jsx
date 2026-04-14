import React from "react";
import Hero from "./Hero";
import About from "../ui/About";

import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import {
  FaWordpress,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
import Industries from "../ui/Industries";
import SuccessStories from "../ui/SuccessStories";
import CTA from "./CTA";
import SEO from "../ui/SEO";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import Features from "../ui/Features";
import Process from "../ui/Process";
import MobileApp from "../ui/MobileApp";
import { FiSearch } from "react-icons/fi";
import { MdSpeed } from "react-icons/md";
import { HiTrendingUp } from "react-icons/hi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsBuildingGear } from "react-icons/bs";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiHandlebarsdotjs, SiGraphql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsTerminal } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineViewInAr } from "react-icons/md";
import { IoHardwareChipOutline } from "react-icons/io5";
import { TbView360 } from "react-icons/tb";
import { AiOutlinePicture } from "react-icons/ai";
import DeliveryFeatures from "./DeliveryFeatures";
import TabularTechs from "./TabularTechs";
// import ThirdPartyIntegration from "./ThirdPartyIntegration";
import Cost from "../ui/Cost";

import Services from "./Services";
import DeliveryApps from "./DeliveryApps";
import Niches from "./Niches";
import ThirdPartyIntegration from "./ThirdPartyIntegration";
import CTA2 from "./CTA2";
const services = [
  {
    icon: "1",
    icon2: "11",
    title: "Matchmaking App Development",
    description: (
      <>
        Our matchmaking app development service is designed to create platforms focused on meaningful and real relationships. We build advanced solutions using algorithm-based partner matching and AI-powered matchmaking to improve connection accuracy and relevance. Our team ensures strong user trust with detailed profiles and secure verification, delivering scalable and engaging platforms that encourage long-term connections.
      </>
    ),
  },
  {
    icon: "2",
    icon2: "22",
    title: "Casual Dating App Development",
    description: (
      <>
        Our casual dating app development services focus on building engaging platforms for effortless social connections. We implement swipe-based matching systems, fast onboarding, and instant messaging features. Location-based matching helps users connect nearby, while interactive features ensure high engagement and user retention for modern, flexible dating experiences.
      </>
    ),
  },
  {
    icon: "3",
    icon2: "33",
    title: "Niche Dating App Development",
    description: (
      <>
        We develop niche dating apps tailored for specific communities and lifestyles. These platforms include personalized matching algorithms, secure verification systems, and interest-based discovery features. Our goal is to create highly targeted apps that deliver smooth performance, strong engagement, and meaningful connections within specialized user groups.
      </>
    ),
  },
  {
    icon: "4",
    icon2: "44",
    title: "Matrimony App Development",
    description: (
      <>
        Our matrimony app development service focuses on serious relationships and marriage-oriented platforms. We build apps with advanced compatibility algorithms, detailed user profiles, and strict verification systems. Features like personality matching and location-based recommendations ensure trust, safety, and meaningful matchmaking experiences for families and individuals.
      </>
    ),
  },
  {
    icon: "5",
    icon2: "55",
    title: "Dating Web App Development",
    description: (
      <>
        We create responsive dating web applications that deliver seamless experiences across all browsers. These platforms include advanced matching systems, secure authentication, and interactive messaging features. With swipe-based and interest-driven matching, users enjoy fast, smooth, and engaging online dating experiences optimized for performance and scalability.
      </>
    ),
  },
  {
    icon: "6",
    icon2: "66",
    title: "Speed Dating App Development",
    description: (
      <>
        Our speed dating app solutions are built for fast and interactive user engagement. We design platforms with time-limited chats, swipe-based matching, and proximity-based discovery. These apps help users quickly connect, interact, and find compatible matches while maintaining secure profiles and smooth real-time performance.
      </>
    ),
  },
  {
    icon: "7",
    icon2: "77",
    title: "Elite Dating App Development",
    description: (
      <>
        We develop premium elite dating platforms designed for high-value users seeking meaningful connections. These apps include AI-powered matchmaking, personality-based compatibility, and curated recommendations. With elegant design and scalable architecture, we ensure exclusivity, engagement, and high-quality user interactions.
      </>
    ),
  },
  {
    icon: "8",
    icon2: "88",
    title: "Divorcee Dating App Development",
    description: (
      <>
        Our divorcee dating app development service creates supportive platforms for individuals seeking new beginnings. We focus on safe, respectful environments with verified profiles and intelligent matchmaking. These apps prioritize comfort, trust, and compatibility to help users build meaningful relationships after divorce.
      </>
    ),
  },
];
const defaultCards = [
  {
    label: "Simple Apps",
    range: " $15,000 to $30,000",
    detail:
      "If you’re going to create basic apps with essential features like profile creation and simple swipe, with simple payment options. These types of basic apps are ideal for startups and the dating app development cost is around 15-30k.",
  },
  {
    label: "Mid-Level Apps",
    range: " $30,000 to $70,000",
    detail:
      "A mid-level app that includes advanced features like video/voice chat, push notifications, multiple user panels, integration with payment gateways and social logins.",
  },
  {
    label: "Advanced Apps",
    range: " $70,000 to $150,000+",
    detail:
      "These advanced applications include AI matchmaking algorithms, complex analytics dashboards, multi-platform support, and video calling features for a full-scale dating experience.",
  },
];
const highlights = [
  {
    icon: "/industries/food-industry/s1.webp",
    title: "12+ Years of Development",
    desc: "We’re the best dating app development company providing dating application development services USA with over 10+ years of experience, building high-performing apps.",
  },
  {
    icon: "/industries/food-industry/s2.webp",
    title: "High Level Expertise",
    desc: "Being one of the best dating app developers, we provide top-tier design and development.",
  },
  {
    icon: "/industries/food-industry/s3.webp",
    title: "Expert Project Managers",
    desc: "Our professional project managers make sure the entire build of your dating app stays on track, ensuring smooth execution throughout.",
  },
  {
    icon: "/industries/food-industry/s4.webp",
    title: "100% Transparent Procedure",
    desc: "The dating app developers make sure you get timely updates. Through updates, we ensure transparency to your requirements and needs.",
  },
  {
    icon: "/industries/food-industry/s5.webp",
    title: "Post-Launch Support",
    desc: "The support services we provide make your dating app competitive, so you can easily depend on our dating app development services.",
  },
  {
    icon: "/industries/food-industry/s6.webp",
    title: "Custom Solutions",
    desc: "Every dating app we build is designed to meet your requirements through custom dating app development services.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Telehealth Applications",
    desc: "Dignite Studios builds telehealth apps. Apps that offer virtual consultations and make remote communication simple and reliable.",
  },
  {
    title: "Doctor On Demand Apps",
    desc: "The team would develop doctor on demand apps that allows patients to instantly connect with healthcare providers and manage consultations.",
  },
  {
    title: "Appointment Booking Apps",
    desc: "We create appointment booking apps. These apps make scheduling and automating reminders smooth. Also improves patient and clinic time management.",
  },
  {
    title: "Healthcare Marketplace Apps",
    desc: "The healthcare mobile app developers would design healthcare marketplace apps that can smoothly connect patients with pharmacies and laboratories.",
  },
  {
    title: "Medication Management Apps",
    desc: "The team at our healthcare app development company is an expert at developing medication management apps that help patients track prescriptions. It brings better outcomes.",
  },
  {
    title: "Fitness and Wellness Apps",
    desc: "Our custom healthcare app development company will build fitness and wellness apps that support healthy lifestyles. It works through activity tracking.",
  },
  {
    title: "Mental Health Apps",
    desc: "The team would create secure mental health apps for therapy and progress tracking to support better emotional wellbeing and care.",
  },
  {
    title: "Chronic Disease Apps",
    desc: "The team would develop apps that help monitor chronic conditions that result in better and improved long-term health management.",
  },
];

const PLATFORMS = [
  {
    title: "BigCommerce",
    desc: "We deliver reliable solutions which help businesses manage products efficiently and improve overall store operations.",
    logo: "/ecommerce/bc.webp", // your original logo mapping stays
  },
  {
    title: "Magento",
    desc: "We create custom features and integrations that increase flexibility and simplify Magento store management effectively.",
    logo: "/ecommerce/magento.webp",
  },
  {
    title: "WooCommerce",
    desc: "We build scalable solutions for WordPress stores with improved performance across platforms.",
    logo: "/ecommerce/woo.webp",
  },
  {
    title: "Salesforce Commerce",
    desc: "We develop enterprise apps that support large-scale ecommerce businesses through complex operations and reliable store management.",
    logo: "/ecommerce/sf.webp",
  },
  {
    title: "Squarespace",
    desc: "We create simple, modern ecommerce apps for businesses needing clean design and easy-to-use functionality.",
    logo: "/ecommerce/sp.webp",
  },
];
const test = [
  {
    name: "Jessica Reynolds",
    designation: "CEO, HeartConnect",
    review:
      "Dignite Studios exceeded our expectations. Their team delivered a dating app that was exactly what we envisioned. Communication was excellent, and they kept us updated throughout the process.",
  },
  {
    name: "Mark Simon",
    designation: "Founder, MatchMakers Inc.",
    review:
      "The team at Dignite Studios was professional and responsive. They understood our vision perfectly and delivered an application that was highly functional, on time.",
  },
  {
    name: "Rachel Smith",
    designation: "CTO, TruePair",
    review:
      "Working with Dignite Studios was smooth and simple. Highly recommended. We’d say it’s the top dating app development company considering how they delivered the application on time without creating any mess.",
  },
];
const BENEFITS = [
  {
    title: "Better Customer Experience",
    desc: "Apps provide smooth browsing, simple navigation and quick property search, helping users find and explore listings without confusion or delays.",
    icon: <FiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Faster Property Discovery",
    desc: "Users can quickly search and filter properties based on their needs, saving time and making the property discovery process easier and quite faster.",
    icon: <MdSpeed color="#F15C20" size={25} />,
  },
  {
    title: "Increased Sales Opportunities",
    desc: "Through improved user experience, apps enable businesses to reach more potential consumers, increase visibility and boost the likelihood that visitors will become customers.",
    icon: <HiTrendingUp color="#F15C20" size={25} />,
  },
  {
    title: "Direct Communication Between Buyers and Agents",
    desc: "Through the immediate chat or phone connections made possible by apps, buyers and agents can communicate more quickly and enhance the client experience in general.",
    icon: <BiMessageRoundedDots color="#F15C20" size={25} />,
  },
  {
    title: "Digital Transformation of Property Businesses",
    desc: "Apps help businesses move from the manual processes to digital systems using mobile app development for the real estate, improving the efficiency and long term growth.",
    icon: <BsBuildingGear color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How much time do your developers take to build a dating app?",
    answer:
      "Dignite Studios doesn’t provide a fixed, similar timeline for each dating app during development. The time always depends on the complexity and features of every dating application. Usually, a mid-level app would take up to 8–12 weeks, but it depends on requirements. If you need a final cost and pricing estimate for your app, contact our team and share your app idea.",
  },
  {
    id: 2,
    question: "Can you build iOS applications for dating and matchmaking apps, too?",
    answer:
      "We’re experts in building both iOS and Android dating apps. Hire dating app developers who create high-performance applications for businesses. The developers can easily work with native technologies and Swift to develop applications that feel simple while ensuring strong functionality.",
  },
  {
    id: 3,
    question: "Would you provide support after we’re done with the app launch?",
    answer:
      "Yes. It’s called post-launch support, and we definitely stay with you even after your dating app is launched. We provide proper maintenance and updates so that the app stays aligned with your vision and users’ needs.",
  },
  {
    id: 4,
    question: "What if I have a rough idea? Can your team guide me?",
    answer:
      "There’s no matchmaking app that starts with a perfect idea. We provide guidance through a free consultation and explain concepts in a simple way. Our dating app experts help you add practical features and prepare your application for the future.",
  },
  {
    id: 5,
    question: "How much does a dating application usually cost?",
    answer:
      "We don’t follow fixed pricing for all dating applications. The cost depends on the features and integrations you want in your dating application. At Dignite Studios, we maintain transparent pricing with no hidden fees.",
  },
  {
    id: 6,
    question: "Are you currently working with startups, too, or just enterprises?",
    answer:
      "Our dating app team works with both startups and enterprises. Whether you want to build an MVP or scale an existing application, we are ready to help you build a strong dating platform together.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Strategy",
    desc: "When the goals are clear, the dating app turns out amazing, so in this phase, we align your business goals with the dating app’s vision and features.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "It is a dating app development process in which a preliminary visual mock-up is created that shows the mobile app’s initial design.",
  },
  {
    step: "03",
    title: "Development Stage",
    desc: "The dating app development begins, and our professional mobile app developers work according to your product roadmap and total execution time.",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "Conducting tests at every phase of the matchmaking app development process helps maintain quality and keep up with the latest status updates.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Your app deployment is where preparation connects performance, resulting in smooth operation across iOS and Android platforms.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "Once we have launched your dating app, the developers’ focus shifts to monitoring performance and optimizing features based on user feedback.",
  },
];

const featureData = [
  {
    title: "Artificial Intelligence for Property Recommendations",
    desc: "AI improves discovery and boosts user engagement within the app by analysing user activity, prior searches and preferences to recommend properties which meet their needs.",
    icon: <GiArtificialIntelligence className="text-5xl text-[#F15C20]" />,
  },
  {
    title: "Augmented Reality for Virtual Tours",
    desc: "By providing virtual walkthroughs and precise room views, augmented reality (AR) allows the users to explore properties in a realistic manner without to physically visit locations",
    icon: <MdOutlineViewInAr className="text-5xl text-[#F15C20]" />,
  },
  {
    title: "Big Data for Market Insights",
    desc: "Big Data gathers and examines property, user and market data to produce useful insights that assist companies in making more informed marketing and investment choices.",
    icon: <FaDatabase className="text-5xl text-[#F15C20]" />,
  },
  {
    title: "IoT for Smart Property Management",
    desc: "IoT integration enables real estate apps to communicate with the smart devices in buildings, facilitating effective management of automation systems, utilities and security",
    icon: <IoHardwareChipOutline className="text-5xl text-[#F15C20]" />,
  },
  {
    title: "Virtual Reality for Immersive Experiences",
    desc: "Before physically seeing the property, consumers may visualise layouts, spaces and designs through completely immersive property tours made possible by virtual reality technology.",
    icon: <TbView360 className="text-5xl text-[#F15C20]" />,
  },
  {
    title: "Image Recognition for property Features",
    desc: "Image recognition enhances the accuracy of listings for the buyers and agents by identifying property features from uploaded photographs and automating categorisation",
    icon: <AiOutlinePicture className="text-5xl text-[#F15C20]" />,
  },
];

const techStackData = [
  {
    name: "Handlebars.js",
    icon: <SiHandlebarsdotjs />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "REST APIs",
    icon: <TbApi />,
  },
  {
    name: "GraphQL Storefront API",
    icon: <SiGraphql />,
  },
  {
    name: "BigCommerce Stencil CLI",
    icon: <BsTerminal />,
  },
];
const DatingApp = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        button="Talk to the Team "
        heading="What’s"
        heading2={"Dignite Studios"}
        para={
          <>
        Being the best dating app development company, the developers specialize in creating matchmaking applications that fulfill the evolving needs of this industry. The demand is growing for online connections. And startups and businesses are instantly shifting toward digital platforms to create meaningful user experiences. This means helping them meet customer demands and give a competitive advantage in the market. Our goal is to build apps that offer transformation.
The solutions we create while providing the trusted dating app development simplify user matching and enhance the overall user experience through improved engagement. Our apps are designed to make every interaction smooth through secure chats and profile management.  We work with a wide range of business models, including niche dating platforms, mainstream matchmaking, and community based social networks. 
The team is understanding and helps you overcome the unique challenges of each and deliver solutions that grow with your industry. We understand that every dating app needs to operate differently. Having 10+ years of experience in different industries, we combine our knowledge with modern technology, so we help you come up with a solution that’s fully functional and helps your business grow and get more users through providing smooth experiences. 


          </>
        }
      />
      <Services
        header="Expert Dating App Development"
        header2={"Services"}
        button={"Build My Dating App"}
        para="Providing a complete suite of services in the category of dating app development, our dating mobile app development company design applications that help startups and businesses build meaningful connections. Our custom dating app development services cover every aspect of app creation and custom development. The focus is on building dating apps that keep the customer engaged by providing a smooth experience.   "
        services={services}
      />
           <CTA />
        <SuccessStories
          header="The Success Stories of Top Dating App Development Company  "
          para="You can check out our case studies section and see how we, as the dating app development company work with the industries and businesses, helping them build applications that just work amazingly for their industries and niche. The case studies we’re highlighting here shows the challenges we dealt with and the solutions we provided.  "
        />
              <DeliveryFeatures />
                <DeliveryApps/>
                <ThirdPartyIntegration/>
                        <Process
        header="Proven Process of a Dating App Development Company"
        para="Every dating application we develop solves a problem. So, the team works with a structured approach that brings your dating app idea to life. Different matchmaking app development companies work with unique workflows, but when it comes to creating mobile apps at our development company, we utilize a perfectly structured approach of the best dating app development companies to ensure that we design applications that work the proper way. Here’s the structured workflow that turns visions into apps.   "
        steps={PROCESS_STEPS}
      />
      <CTA2/>
      <Cost cards={defaultCards}  title="Dating App Development Cost Industry-Wide" description={<>The cost of developing matchmaking, dating apps isn’t the same for every type. It varies widely. It mostly depends on usual factors like features, complexity, platform choice, third-party integrations. Dignite Studios can definitely just provide an average based on market research and studies. This doesn’t represent Dignite Studios’ pricing models, so if you need a more specific quote, <Link href="/contact-us" className="text-orange-600">contact our team today</Link></>}/>

         <Bussiness
        header="Why You Should Choose "
        header2={" Dignite Studios"}
        button=" Choose The Right Team  "
        para={
          <>
      We are experts at building healthcare applications. Having a team of the <Link href={"/services/hire-mobile-app-developers"}>best developers</Link> and designers, we provide you with everything you need as a custom dating mobile app development company. Dignite Studios consists of dating app developers that take the time to understand your audience and goals before the development even begins. We deliver the functional dating applications with clear communication and reliable solutions. 
          </>
        }
        bs={highlights}
      />
             <TabularTechs />
      {/* <Industries para={"Having an experience of 10+ years in different industries and niches, we assure you that the healthcare app solutions we provide through Healthcare Mobile App Development Services work for a variety of business models. We can work for anyone, whether it’s a clinic or a hospital. The healthcare apps we create are built to meet the unique needs of each niche."} header={"Healthcare Mobile App Development Company For Different"} header2={"Niches"} VALUE_PROPOSITION={VALUE_PROPOSITION} /> */}

 
      {/* <Niches/> */}
    
   

            
   
      {/* <MobileApp
        cards={BENEFITS}
        header2={"Real Estate Apps"}
        header=" Benefits of Investing in "
        para="Real Estate apps help businesses grow faster and manage daily operations easily. They boost productivity, facilitate automation and enhance the customer experience. Companies may also increase user reach, boost engagement and create scalable digital platforms which facilitate long term growth by investing in mobile app development for real estate.   "
        button=" Book a Free Consultation  "
      /> */}

      {/* <Features
        header="Cutting Edge Technologies for"
        header2={"Real eState Apps"}
        para="Utilising modern technologies, our real estate app development solutions also enhance productivity performance, and user experience. These tools support companies in data analysis, property management and client engagement.  "
        button={"Lets Grow Your Business "}
        // button="Get Feature Recommendations"
        features={featureData}
      /> */}

 
      {/* <Impact /> */}
      {/* <Industries
        header="Food Delivery App Development Services for Different "
        header2={" Niches"}
        para="Having an experience of 10+ years in different industries and niches, we assure you that the food delivery app solutions we provide work for a variety of business models. We can work for anyone, whether it’s a single restaurant or a multi-vendor platform. The apps we create are built to meet the unique needs of each niche. "
        VALUE_PROPOSITION={VALUE_PROPOSITION}
      />
      <Niches/>  */}

      {/* <TabularEcommerceTechs /> */}
      {/* <CTA2 header="Searching for a Team Who Builds Food Delivery App?" para="Your idea can become a powerful food delivery app with the right team. Dignite Studios builds solutions that make ordering simple and operations smooth. Our focus is on performance and reliability so your business can grow with confidence." btn="Get Started Today"/>
        <Monetization/>
   
     
     
      <ThirdPartyIntegration/>
      <DeliveryApps/> */}

      {/* <CTA2
        header="Start Your BigCommerce Project Today"
        para="If you want a reliable Ecommerce platform, our BigCommerce development Services can help. Our team builds secure, scalable and high performing online stores. We ensure every step supports business growth and better customer experience. "
        btn="Request BigCommerce Development Quote"
      /> */}
   
      <Testimonials
        header="What Our Clients Say "
        test={test}
        // button={"Talk to our Experts"}

        // button="Work With Our Expert Team"
      />
      <Faq faqs={faqs} header="Frequently Asked Questions" />
      <ContactUs
       pathname={"Dating App dev"}
        img={"/industries/healthcare/c-img.webp"}
        header={"Start Building Your Dating App Today"}
        para="Share your project requirements with our expert team and take the first step toward launching your feature-rich dating app. Submit your details below, and we’ll provide a personalized consultation to help you plan, design, and build your app successfully. "
        btn="Get Free Consultation "
      />
    </div>
  );
};

export default DatingApp;

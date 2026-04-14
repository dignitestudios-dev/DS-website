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
const services = [
  {
    icon: "/industries/healthcare/service/1.webp",
    icon2: "/industries/healthcare/service/11.webp",
    title: "Telehealth Applications",
    description: (
      <>
        Simple telehealth apps help patients and doctors connect quickly. It
        makes remote care faster and more convenient for everyone involved.
      </>
    ),
  },
  {
    icon: "/industries/healthcare/service/2.webp",
    icon2: "/industries/healthcare/service/22.webp",
    title: "Patient Portal App Development",
    description: (
      <>
        Patient portal apps allow patients to have easy access to records and
        appointments. It makes communication better with doctors anytime,
        anywhere.
      </>
    ),
  },
  {
    icon: "/industries/healthcare/service/3.webp",
    icon2: "/industries/healthcare/service/33.webp",
    title: "EHR/EMR healthcare Softwares",
    description: (
      <>
        Healthcare providers can better manage patient records. It can happen
        through EHR and EMR software, improving care efficiency.
      </>
    ),
  },
  {
    icon: "/industries/healthcare/service/4.webp",
    icon2: "/industries/healthcare/service/44.webp",
    title: "Remote Patient Monitoring Apps",
    description: (
      <>
        Remote patient monitoring apps track health data. It helps doctors
        provide timely care from anywhere.
      </>
    ),
  },
  {
    icon: "/industries/healthcare/service/5.webp",
    icon2: "/industries/healthcare/service/55.webp",
    title: "Medical Wearable App Integration",
    description: (
      <>
        Medical wearable app integration connects wearable devices with
        healthcare apps. It monitors health and tracks fitness.
      </>
    ),
  },
  {
    icon: "/industries/healthcare/service/6.webp",
    icon2: "/industries/healthcare/service/66.webp",
    title: "Healthcare CRM Solutions",
    description: (
      <>
        Medical providers can manage patient relationships more easily through
        Healthcare CRM solutions. It improves care and engagement.
      </>
    ),
  },
  {
    icon: "/industries/healthcare/service/7.webp",
    icon2: "/industries/healthcare/service/77.webp",
    title: "Pharmacy and ePrescription Apps",
    description: (
      <>
        Pharmacy and ePrescription applications make medication management
        easier. It allows patients to order prescriptions and connect with
        pharmacists.
      </>
    ),
  },
  {
    icon: "/industries/healthcare/service/8.webp",
    icon2: "/industries/healthcare/service/88.webp",
    title: "AI integrated Healthcare Apps",
    description: (
      <>
        Our expert healthcare development company uses artificial intelligence
        to enhance patient care. It helps predict health trends and streamline
        medical processes.
      </>
    ),
  },
];

const highlights = [
  {
    icon: "/industries/food-industry/s1.webp",
    title: "12+ Years of Development",
    desc: "We’re the best healthcare mobile app development company USA with over 10+ years of experience, building high-performing apps.",
  },
  {
    icon: "/industries/food-industry/s2.webp",
    title: "High Level Expertise",
    desc: "Being one of the top healthcare app development company, we provide top-tier design and development.",
  },
  {
    icon: "/industries/food-industry/s3.webp",
    title: "Expert Project Managers",
    desc: "Our professional project managers make sure to keep the entire build of your healthcare app is on track, providing smooth execution throughout.",
  },
  {
    icon: "/industries/food-industry/s4.webp",
    title: "100% Transparent Procedure",
    desc: "The healthcare app development team makes sure you get the updates on time. Through updates, we ensure transparency to your business needs.",
  },
  {
    icon: "/industries/food-industry/s5.webp",
    title: "Post-Launch Support",
    desc: "The support services we provide make your healthcare app competitive, so you can easily depend on our healthcare mobile app development services.",
  },
  {
    icon: "/industries/food-industry/s6.webp",
    title: "Custom Solutions",
    desc: "Every healthcare app we build at our healthcare mobile app development company is supposed to meet your requirements through custom healthcare app development company.",
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
    name: "Dr. Emily Carter",
    designation: "Chief Medical Officer, Greenfield Health Clinic",
    review:
      "Dignite Studios built a telehealth app for our clinic that’s intuitive and reliable. Patient engagement and appointment management have improved dramatically.",
  },
  {
    name: "Michael Thompson",
    designation: "Director of IT, Horizon Medical Center",
    review:
      "The AI-powered features in our healthcare app transformed our workflow. Doctors now provide faster, more accurate diagnoses, and patients love the convenience.",
  },
  {
    name: "Sarah Mitchell",
    designation: "Operations Manager, ClearView Health Solutions",
    review:
      "From design to deployment, the team delivered a seamless, secure, and user-friendly app. It simplified patient monitoring and improved operational efficiency.",
  },
  {
    name: "Dr. Jason Reynolds",
    designation: "Chief Pharmacist, WellCare Pharmacy Network",
    review:
      "Our medication management app helps patients stay on track effortlessly. The reminders and health tracking features have significantly increased adherence and satisfaction.",
  },
  {
    name: "Linda Brooks",
    designation: "Head of Digital Health, Summit Medical Group",
    review:
      "The integration with our EHR system was flawless. Our staff can access records quickly, appointments are easier to manage, and patient communication has improved.",
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
    question: "How much time does it usually take to build a healthcare mobile app?",
    answer:
      "Dignite Studios doesn’t provide a fixed, similar timeline for each healthcare mobile app during development. The time always depends on the complexity and features of every healthcare application. Generally, a mid-level application would take up to 8-12 weeks, but it all depends, again. If you need a final cost and pricing estimate for your app, contact our team and share your app idea.",
  },
  {
    id: 2,
    question: "Can you build iOS applications for healthcare apps, too?",
    answer:
      "We’re an expert healthcare mobile app development company USA, building both iOS and Android healthcare apps. Hire healthcare mobile app developers who create high-performance applications for businesses. The healthcare developers can easily work with native and Swift to develop applications that feel simple while ensuring functionality.",
  },
  {
    id: 3,
    question: "Would you provide support after we’re done with the app launch?",
    answer:
      "Yes. It’s called post-launch support, and we definitely stay with you even when your healthcare delivery app is launched. Providing proper post-launch maintenance and updates about the healthcare app. So that we know that the app would stay aligned with the vision and users’ needs.",
  },
  {
    id: 4,
    question: "What if I have a rough idea? Can you guide me?",
    answer:
      "Here’s a thing: There’s no app that starts with the perfect, flawless idea. With this understanding, we guide through a free consultation and explain the concepts in a much easier way. The healthcare app experts can help you out by adding practical aspects to your application and preparing it for the future.",
  },
  {
    id: 5,
    question: "How much does a healthcare application usually cost?",
    answer:
      "Basically, we don’t have fixed pricing rules for all the applications. The cost completely depends on the features and the integrations you want your healthcare application to have. It’s up to your healthcare app’s vision, but at Dignite Studios, we keep pricing transparent with no random hidden fees.",
  },
  {
    id: 6,
    question: "Are you currently working with startups, too, or just the enterprises?",
    answer:
      "The healthcare app development team works with both startups and enterprises. So, it doesn’t really matter if you’re a startup or an enterprise; we would definitely work with you. Whether you’re building an MVP or scaling an existing healthcare application. We would look forward to building an amazing healthcare app together either way.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Strategy",
    desc: "When the goals are clear, the app for your healthcare sector would turn out amazing, so in this phase, we align your business goals with the app’s vision.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "It is a healthcare app development process in which a preliminary visual mock-up has been created that shows the mobile app’s initial design.",
  },
  {
    step: "03",
    title: "Development Stage",
    desc: "The healthcare app development begins, and our professional mobile app developers work according to your product roadmap and total execution time.",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "Conducting tests at every phase of the healthcare app development process at our top healthcare app development company helps keep up with the latest status updates.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Healthcare app deployment is where preparation connects performance, resulting in smooth operation across iOS and Android.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "Once we have launched your healthcare app, the developers’ focus shifts to checking performance and optimizing features based on user feedback.",
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
const HealthcareAppDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        button="Talk to the Team "
        heading="What’s"
        heading2={"Dignite Studios"}
        para={
          <>
         The healthcare mobile app developers specialize in creating healthcare apps that fulfill the evolving needs of hospitals and medical institutions, while being one of the best healthcare app development companies. This means helping them improve patient engagement and streamline workflows.
The mobile app development for healthcare that we create while providing trusted healthcare app development simplifies patient care and improves daily operations.  
Our healthcare app development company understands and helps you overcome the unique challenges of each and deliver solutions that grow with your business. We understand that every healthcare business operates differently. Having 10+ years of experience across different industries, we combine our knowledge with modern technology, so we help you come up with a healthcare solution that’s fully functional. 

          </>
        }
      />
      <Services
        header="Leading Healthcare Mobile App Development "
        header2={"Services"}
        button={"Build My Digital Health App"}
        para="Providing a complete suite of services in the category of healthcare mobile app development, we design applications that help clinics and hospitals. Our healthcare services cover every aspect of app creation and custom development. The focus is on building healthcare apps that keep the customer engaged by providing a smooth experience.   "
        services={services}
      />
      <Industries para={"Having an experience of 10+ years in different industries and niches, we assure you that the healthcare app solutions we provide through Healthcare Mobile App Development Services work for a variety of business models. We can work for anyone, whether it’s a clinic or a hospital. The healthcare apps we create are built to meet the unique needs of each niche."} header={"Healthcare Mobile App Development Company For Different"} header2={"Niches"} VALUE_PROPOSITION={VALUE_PROPOSITION} />
      <DeliveryFeatures />
      <CTA />
      <Niches/>
      <DeliveryApps/>
           <Process
        header="Proven Process of a Healthcare App Development Company"
        para="Every healthcare application we develop at our healthcare app development company solves a problem. So, the team works with a structured approach that brings your app to life. Different healthcare app development companies work with unique workflows, but when it comes to creating healthcare apps at our development company, we utilize a perfectly structured approach of the best development companies to make sure that we design applications that work the proper way.   "
        steps={PROCESS_STEPS}
      />
       <TabularTechs />
            
      <Bussiness
        header="Why You Should Choose "
        header2={" Dignite Studios"}
        button=" Choose The Right Team  "
        para={
          <>
      We are experts at building healthcare applications. Having a team of the <Link href={"/services/hire-mobile-app-developers"}>best developers</Link> and designers in the healthcare industry, we provide you with everything you need as a custom healthcare app development company. Dignite Studios consists of a team that takes the time to understand your audience and goals before the development of your app even begins. We deliver functional applications with clear communication and reliable solutions. 
          </>
        }
        bs={highlights}
      />
      {/* <SuccessStories
        header="Real Estate App Development Case Studies  "
        para="We have delivered successful apps for property businesses. Our case studies show how our real estate app development solutions improved user experience, increased engagement and supported business growth. "
      /> */}
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
        header="Feedback From the Clients "
        test={test}
        button={"Talk to our Experts"}
        para={"Our clients trust us to deliver healthcare apps that truly make a difference. Their feedback highlights how our solutions improve patient care and enhance operational efficiency. These testimonials demonstrate reliability and the ability to meet unique healthcare needs, while helping organizations deliver more connected patient experiences. "}
        // button="Work With Our Expert Team"
      />
      <Faq faqs={faqs} header=" Commonly Asked Questions " />
      <ContactUs
       pathname={"Healthcare App dev"}
        img={"/industries/healthcare/c-img.webp"}
        header={"Ready to Avail our Healthcare Services?"}
        para=" Partner with us to build innovative, reliable healthcare apps that improve patient care, streamline operations, and deliver seamless experiences. Let’s create solutions tailored to your organization’s unique needs. "
        btn="Start Your Project Today "
      />
    </div>
  );
};

export default HealthcareAppDevelopment;

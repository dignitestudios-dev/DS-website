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
        For iPhone app development, using Swift UI works the best. As a result, we create applications that are smooth and high-performing. Whether it’s healthcare or fintech, the collaborative effort of the team delights the users.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        When it comes to Android app development services, we use Kotlin and Java. The apps work on all Android devices. The apps we build are created to perform and scale.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Cross-Platform",
    description: (
      <>
        Cross platform works with both Flutter and React Native. It’s basically an app built to work on both Android and iOS using a single code. This helps with cost reduction, ensuring consistent performance.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Native App Development",
    description: (
      <>
        Dignite Studio’s Native app development services include PWAs and custom mobile solutions. The mobile apps are designed for reliability.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "UI/UX Design Service",
    description: (
      <>
        The mobile app design service means both iOS app design services and Android app design services. The emphasis is on creating visually appealing apps so they can engage better with users.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance and Consulting",
    description: (
      <>
        The mobile app development Tampa team doesn’t just develop applications and disappear. The services include QA testing service, post-launch support, and MVP development service as well. Working with Dignite Studios? You never have to be careful about the “what ifs.”
      </>
    ),
  },
];


const highlights = [
  {
    title: "Custom Development",
    desc: "Applications are customized to the way your business requires.",
  },
  {
    title: "Tech Experts",
    desc: "The developers are professional, and the whole team is an expert at what it does.",
  },
  {
    title: "24/7 Availability",
    desc: "The assistance is available 24/7 at every stage of development",
  },
  {
    title: "Professional Teams",
    desc: "Dedicated teams are available to work on your project",
  },
  {
    title: "Flexible Models",
    desc: "We don’t believe in the “one size fits all” approach. So we offer flexible approaches.",
  },
  {
    title: "Transparency",
    desc: "Clear communication is prioritized to keep you in the loop.",
  },
];


const VALUE_PROPOSITION = [
  {
    title: "Healthcare Development",
    desc: "Healthcare development requires better care and operational efficiency. When working with us, you won’t have to worry about the security issues and patient data because we build HIPAA-compliant apps.",
  },
  {
    title: "Ecommerce Development",
    desc: "We are known as an ecommerce mobile app development company that creates apps with amazing shopping experiences and actually increases your sales because your shopping experience is what matters the most.",
  },
  {
    title: "Real Estate Development",
    desc: "The real estate iOS app development company in Tampa you need should solve the problem. So we integrate features like simplifying property listing and virtual tours, enhancing the app engagement.",
  },
  {
    title: "Education and E-learning",
    desc: "Searching a reliable mobile app developer Tampa isn’t as simple. But we provide education app development services that make the learning experience more engaging and accessible for students.",
  },
  {
    title: "Fintech and Logistics",
    desc: "For us, Fintech services mean reliable solutions. The developers integrate secure features for banking, payments, and supply chain operations.",
  },
];


const test = [
  {
    name: "Sarah Mitchell",
    designation: "— CEO, ShopEase",
    review:
      "“When we needed assistance to launch our e-commerce app, DS helped. The results were immediate, and our ROI exceeded expectations. Truly impressed by their expertise!”",
  },
  {
    name: "Elias Jonas",
    designation: "— Founder & CEO, Custom Labs",
    review:
      "“My fintech app was delivered without compromising quality. The team’s fast delivery and attention to detail made the process seamless.”",
  },
  {
    name: "Emily Thompson",
    designation: "— CEO, LearnSmart Inc.",
    review:
      "“Amazed to see that they were professional and highly skilled. The team guided us through every step of app development. We couldn’t be happier with the outcome.”",
  },
];

const BENEFITS = [
  {
    title: "Customer Retention",
    desc: "A mobile app can keep the users coming back through an amazing experience if the app is built by an expert mobile app developer Tampa.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility",
    desc: "Need to build better brand presence? Mobile apps are the perfect solution to strengthen the brand presence.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Increasing Revenue",
    desc: "Generating more revenue through subscriptions in a mobile app is the most convincing benefit of Mobile app development services in Tampa.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Access Analytics",
    desc: "Mobile apps would let you track user behavior. Which means better access to the analytics.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Competitive Advantage",
    desc: "Helping you stand out with our advanced solutions is the main goal of app development services in Tampa experts.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];


const faqs = [
  {
    id: 1,
    question: "Do you build both iOS and Android apps?",
    answer:
      "Yes. We are both an Android and iOS app development company in Tampa so when we discuss mobile app development services in Tampa, we mean both iOS and Android. Built through different technologies like Flutter and Swift, the apps are secure and highly functional.",
  },
  {
    id: 2,
    question: "How long do your developers take to build a mobile app?",
    answer:
      "It’s up to the project type, integrations, and features. Usually, app developers can build applications in 10-16 weeks. It can take longer if the project is more complex, but updates will be provided regularly for Tampa custom app development.",
  },
  {
    id: 3,
    question: "Can you help me with my idea?",
    answer:
      "Absolutely! We guide you from idea to execution, providing expert advice on feasibility, technology selection, and development approach to bring your app concept to life.",
  },
  {
    id: 4,
    question: "Does your team help us after launch?",
    answer:
      "Absolutely! The service doesn’t end at launch. We stay with you even after the launch to provide post-launch support and help you with updates and scalability.",
  },
  {
    id: 5,
    question: "What industries have you worked with?",
    answer:
      "Being experienced app developers, we have worked with multiple industries: Healthcare, Fintech, Ecommerce, Real Estate, Education, Logistics, and much more. We understand the compliance and standards of each industry.",
  },
];



const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover and Strategy",
    desc: "The overall process starts with the research. We begin by understanding your product goals and your business requirements.",
  },
  {
    step: "02",
    title: "Ui/UX, Prototyping",
    desc: "Once the team is done with the research, we move to building prototypes and app interfaces.",
  },
  {
    step: "03",
    title: "Sprint Planning",
    desc: "The next step is planning the sprint. It also includes the progress tracking for the app during development.",
  },
  {
    step: "04",
    title: "Quality Assurance",
    desc: "The QA team then tests everything in detail, making sure the app stays secure and reliable.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Once the product survives the testing phase, the team hits the deploy. The app is then launched on Google Play and App Store.",
  },
  {
    step: "06",
    title: "Post Launch",
    desc: "The support doesn’t end with the launch. Ongoing improvements and updates are always provided by us.",
  },
];



const MobileAppTampa = () => {
  return (
    <div className="max-w-screen-2xl flex flex-col mx-auto overflow-hidden">
      <Hero />
      <About
        heading="About "
        heading2={"Section"}
        para="Dignite Studios is a team of over 200+ professionals, having an experience of 5+ years. Being a trusted mobile app development company in Tampa, we are the experts at delivering the high performing mobile apps exactly the way you envisioned. 
We are a team including the developers, designers, project managers, and QA. To bring your idea to life, the whole team works together, handling every step of development so you can easily focus on growing your business. 
The Tampa-based team is ready to guide you through every step of the build, to improve transparency and keep things clear. 
"
        button="Explore the possibilities"
      />
      <Services
        services={services}
        header={"Tampa Mobile App Development"}
        header2={"Services"}
        para={
          "When it comes to building mobile applications, we’re experts at providing Tampa mobile app development solutions that are high-performing and scalable. Finding expert app developers wouldn’t be a struggle when you work with us. "
        }
      />
      <Bussiness
        bs={highlights}
        header={"Six Reasons to Choose"}
        header2={"Dignite Studios"}
        ctaHeader={"Ready to Talk With Our Experts? "}
        ctaPara={
          "Your idea deserves solid execution and responsive teams. Book a consultation and discuss your idea with our Knowledgeable professionals."
        }
        ctaBtn={"Schedule Your Consultation Now"}
        cta={
          <div className="bg-transparent overflow-hidden text-white hover:scale-105 z-50 absolute opacity-100 shadow-[#F15C2033] transition-all  w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  ">
            <div className="relative" >
            <img src="/location/mobile-tampa/b-cta.png" className="w-full rounded-b-2xl bottom-3 relative bg-cover" alt="lggg" />
            <div className="md:w-[45%] absolute top-[45%] left-[10%]  -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-start ">
              <h1 className="text-[45px] font-bold text-white leading-[45px]">
                Ready to Talk With Our Experts? 
              </h1>
              <p >
                Your idea deserves solid execution and responsive teams. Book a consultation and discuss your idea with our Knowledgeable professionals. 
              </p>
              <div className="flex items-center group justify-center ">
                <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                 Schedule Your Consultation Now
                </button>
                <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                  <MdArrowOutward />
                </button>
              </div>
            </div>
            <img src="/location/mobile-tampa/cc.png" className="absolute right-10 bottom-14 rounded-br-2xl" />
            </div>
          </div>
        }
        para={
          <>
           Finding expert app development services in Tampa is tiring and sometimes misleading but we’re not here to make misleading promises; we are here to work as a partner with you. 
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industries We Have "}
        header2={" Worked With"}
        para={
          "When you look for a trusted mobile app development company to get your app built, check out the industries the team has worked with. "
        }
      />
      <Process
      steps={PROCESS_STEPS}
        header={"The Way Mobile App Development Tampa Works"}
        para={
          "The team follows a proven mobile app development process that makes sure the productivity remains high and your app turns out functional. Here’s how we work. "
        }
      />
      <MobileApp
        header={"How Exactly Does a Mobile App "}
        header2={"Helps"}
        para={
          "Investing in custom app development Tampa might help your business grow more than you can imagine. Here’s what’s gonna happen when you avail our app development services in Tampa. "
        }
        cards={BENEFITS}
      />
      <SuccessStories header={"What App Developers in Tampa Have "} header2={"Built"} para={"Explore our portfolio of successful projects through custom app development Tampa and you’ll see how many businesses trusted us with their ideas and how we built them.  "} />
      <CTA />
      <TechAndTools />
      <SEO />
      <Testimonials
        test={test}
        header={"Testimonials"}
        header2={""}
        para={""}
      />
      <Faq faqs={faqs} />
      <ContactUs
        pathname={"Mobile Dev in Tampa "}
        header={"Connect With Our Experts Today! "}
        img={"/location/mobile-tampa/c-img.png"}
        header2={""}
        para={
          "Your idea shouldn’t wait any longer. Start your mobile app project today with us and get a custom build according to your business needs. "
        }
        btn={"Book a Consultation Now!"}
      />
      {/*     <Bussiness />
     <Industries />
      <Process />
    <MobileApp />
      <SuccessStories />
   <CTA />
          <TechAndTools />
       <SEO />
      <Testimonials />
      <ContactUs />
      <Faq />  */}
    </div>
  );
};

export default MobileAppTampa;

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
        Our team makes sure that we provide the best iOS app development services,
        so we use Swift and SwiftUI to create reliable iPhone apps. Apps that
        easily meet Apple’s performance standards. We focus on building smooth
        and reliable apps
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        When building Android apps, we make sure they’re built through Kotlin
        and Java. The QA team tests the application on different Android devices
        to ensure that your app works just as well in the practical world as it
        does in development. That’s how we make sure to provide you with the
        Android app development services.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Hybrid App Development",
    description: (
      <>
        The team uses Flutter and React Native to build apps for iOS and Android
        from a single codebase. This helps startups reduce development costs.
        Also while delivering a consistent user experience across platforms.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Native App Development",
    description: (
      <>
        For products that need deeper performance and control, we offer native
        app development services, including fully custom mobile apps and PWAs.
        This approach is ideal when your product needs tighter integrations,
        better speed, and long-term flexibility.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "UI/UX Design Services",
    description: (
      <>
        Choosing the UI/UX design? Dignite Studios’ mobile app design services
        focus on simple experiences that users actually enjoy. Our designers
        design user-friendly interfaces for both iOS and Android that support
        your product goals.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance & Consulting",
    description: (
      <>
        Launching is just the beginning. We support startups with MVP development
        services, ongoing post-launch support, and a reliable QA testing service
        to catch issues early and keep your app running smoothly. From
        performance improvements to feature updates, our experienced mobile app
        developers Boston founders trust work alongside you as your product
        evolves and scales.
      </>
    ),
  },
];


const highlights = [
  {
    title: "Custom Development",
    desc: "Custom solutions for your product goals and requirements.",
  },
  {
    title: "Skilled Teams",
    desc: "Dedicated mobile app developers Boston and project managers for your industry needs.",
  },
  {
    title: "24/7 Support",
    desc: "Continuous assistance to ensure stability, updates, and smooth performance.",
  },
  {
    title: "Skilled Technology Experts",
    desc: "A diverse team with proven experience across modern technologies.",
  },
  {
    title: "Flexible Engagement Models",
    desc: "Engagement options designed to adapt as your business grows.",
  },
  {
    title: "Transparent Process",
    desc: "Open communication and full project visibility.",
  },
];


const VALUE_PROPOSITION = [
  {
    title: "Healthcare Industry",
    desc: "Being an expert healthcare app development company, we provide HIPAA-compliant solutions through reliable healthcare mobile app development in Boston services designed for data security and operational efficiency for patients.",
  },
  {
    title: "Fintech Industry",
    desc: "For financial products, we operate as a results-driven fintech app development company, delivering reliable fintech app development services focused on security, regulatory standards, and high-performance user experiences.",
  },
  {
    title: "Ecommerce Industry",
    desc: "For online businesses, we support brands as an experienced ecommerce app development company, offering scalable ecommerce application development services that improve user journeys and conversions.",
  },
  {
    title: "Real Estate Industry",
    desc: "We also partner with property businesses as a dedicated real estate app development company, delivering tailored real estate app development solutions for listings, CRM, and user engagement.",
  },
  {
    title: "Education & E-learning apps",
    desc: "In education, we work as an e learning app development company, providing intuitive education app development services for schools, startups, and training platforms.",
  },
  {
    title: "Logistics Industry",
    desc: "Additionally, we build smart logistics app development solutions, offering end-to-end logistics app development services to improve tracking, coordination, and operational visibility across supply chains.",
  },
];

const test = [
  {
    name: "Sarah Mitchell",
    designation: "— Co-Founder, FinEdge",
    review:
      "“Dignite Studios was quicker than we expected, and the app started generating revenue in the first 3 months. The ROI was amazing.”",
  },
  {
    name: "Daniel Brooks",
    designation: "— Product Lead, HealthSync",
    review:
      "“The team was professional, responsive, and extremely organized. Our product was delivered on time without cutting corners.”",
  },
  {
    name: "Jason Lee",
    designation: "— CEO, UrbanCart",
    review:
      "“What stood out was their clarity and execution. They understood our vision and turned it into a stable, scalable app.”",
  },
];

const BENEFITS = [
  {
    title: "Customer Engagement",
    desc: "When you want the brand to be directly connected with the brand, mobile app is the best way to improve engagement and long-term retention through personalized experiences.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Increased Brand Visibility",
    desc: "When your app is installed on the users’ devices, your brand already stays top of mind. Building stronger loyalty with time.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Revenue Opportunities",
    desc: "Mobile apps development boston mean direct sales and in-app purchases. So it creates consistent revenue streams beyond traditional channels.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Actionable User Insights",
    desc: "Built-in analytics provide clear visibility to understand user behavior. Helping you optimize features and improve the overall experience.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Competitive Market Advantage",
    desc: "Investing in app development businesses rely on gives you an edge in crowded markets. At Dignite Studios, we help brands turn mobile apps into measurable growth drivers.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];


const faqs = [
  {
    id: 1,
    question: "What tools and technologies do you use to build mobile apps in Boston?",
    answer:
      "We keep our tech stack modern and flexible. Depending on your product, we provide Flutter app development services, React Native app development services, Kotlin app development services, and Firebase development services. For mobile application development Boston teams can depend on, we offer a wide range of tools and tech.",
  },
  {
    id: 2,
    question: "How much time does it take to build an application?",
    answer:
      "A simple MVP can take around 2 or 3 months. If the features are heavy, apps take longer. For mobile application development in Boston, we divide the work into easy steps, so you always know what’s happening and when.",
  },
  {
    id: 3,
    question: "How can I schedule a consultation with Dignite Studios?",
    answer:
      "You don’t need a detailed plan to start. Just book a call with us. We’d listen to your idea and guide you on the next steps. We are experts at mobile application development Boston for a reason, so you no longer have to figure things out on your own. Just contact us!",
  },
  {
    id: 4,
    question: "How much should I expect to spend on a mobile app?",
    answer:
      "There’s really not a “one price fits all” rule when it comes to developing an app. Because mobile application development in Boston means that pricing usually depends on features and timelines. And for that, we’d need to understand your idea to prepare a clear number for you so contact our experts today to get a cost estimate!",
  },
  {
    id: 5,
    question: "What are the services in mobile app development services are you offering?",
    answer:
      "At Dignite Studios, we’re offering end-to-end services. This includes strategy, UI/UX design, iOS and Android development, cross-platform apps, testing, and post-launch support. Our mobile application development Boston services are designed to support startups and growing businesses at every stage.",
  },
];



const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We begin by aligning on your goals, users, and app requirements. Through this step, the strategy helps create the product direction.",
  },
  {
    step: "02",
    title: "UI/UX Prototyping",
    desc: "Before Dignite Studios’ developers begin the development, our design team creates wireframes and clickable prototypes so you can experience the app before it’s even developed.",
  },
  {
    step: "03",
    title: "Agile Development & Sprints",
    desc: "We build in structured agile cycles with clear sprint planning for app development. You’ll see progress every week, review features as they’re completed, and adjust priorities when needed.",
  },
  {
    step: "04",
    title: "QA Testing",
    desc: "We assign a QA team to ensure that you’re getting the perfect quality at every stage of our development process so the QA team checks performance and functionality to ensure the app works smoothly on every device.",
  },
  {
    step: "05",
    title: "App Launch & Deployment",
    desc: "We manage the app release and publish it on the App Store and Google Play once everything is ready. To make the launch process smooth.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "After launch, we help track performance using apps for tracking progress and roll out improvements over time. As a trusted partner for mobile application development Boston, we support updates, optimizations, and long-term growth.",
  },
];


const MobileAppBoston = () => {
  return (
       <div className="max-w-screen-2xl flex flex-col mx-auto overflow-hidden">
      <Hero />
       <About
        heading="What’s Dignite"
        heading2={"Studios?"}
        para="Looking for mobile app development services Boston? We are reputed mobile app development company in Boston. We help startups and growing businesses by listening to their app ideas. We provide the practical guidance they need and create mobile applications that are exactly what they imagined. With over 10 years of hands-on experience in the local Boston market, we understand what it takes to build apps that scale, perform, and compete.
We have a whole team of skilled developers, UI/UX designers, and project managers working with you and for you to deliver secure, user-focused mobile solutions using modern technologies.

"
        button=""
      />
  <Services
        services={services}
        header={"Mobile App Development Services In"}
        header2={"Boston"}
        para={
          "As a go-to team for mobile app development Boston founders rely on, we’re proud to be part of the growing Boston mobile app development ecosystem."
        }
      />
        <Bussiness
        bs={highlights}
        header={"Why Teams Choose"}
        header2={"Dignite Studios"}
        ctaHeader={" Still Deciding If We’re the Right Fit?"}
        ctaPara={
          "It’s completely fair to overthink your decision because choosing a mobile application development Boston team is a big decision. Let’s talk through if you have questions or concerns before moving forward."
        }
        ctaBtn={"Talk to Our Team"}
        cta={
             <div className="bg-transparent h-[500px] hover:scale-105 z-50 absolute text-white  opacity-100 transition-all ease-linear w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%] ">
                     <div className="relative" >
                     <img src="/location/mobile-boston/cta-img.png" className="w-full rounded-b-2xl bottom-3 relative bg-cover" alt="lggg" />
                     <div className="md:w-[45%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center text-center">
                       <h1 className="text-[45px] font-bold text-white leading-[45px]">
                        Still Deciding If We’re the Right Fit?
                       </h1>
                       <p>
                        It’s completely fair to overthink your decision because choosing a mobile application development Boston team is a big decision. Let’s talk through if you have questions or concerns before moving forward. 
                       </p>
                       <div className="flex items-center group justify-center ">
                         <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                          Talk to Our Team
                         </button>
                         <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                           <MdArrowOutward />
                         </button>
                       </div>
                     </div>
                     </div>
                   </div>
        }
        para={
          <>
        Dignite Studios focuses on building reliable, scalable products for businesses that value long-term impact. For companies seeking dependable mobile apps development Boston teams, we bring structure, experience, and a clear delivery process to every engagement.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industry-Focused Mobile App Development in "}
        header2={"Boston"}
        para={
          "We provide customized solutions through mobile application development Boston businesses trust. "
        }
      />
      <Process
      steps={PROCESS_STEPS}
        header={"Boston Mobile App Development Process"}
        para={
          "We believe a strong process makes everything else easier. That’s why our mobile app development process steps are built to keep things clear, collaborative, and moving forward without unnecessary complexity."
        }
      />
      <MobileApp
        header={"Benefits of Having a Mobile "}
        header2={"App"}
        para={
          "A mobile app is basically a direct channel to engage users, strengthen brand value, and drive measurable returns for your business."
        }
        cards={BENEFITS}
      />
      <SuccessStories
      header={"Real-life Success "}
      header2={"Stories"}
      para={"Want to see how things actually get done? Our case studies walk you through live projects, practical solutions, and apps we’ve delivered. Showing why many founders consider us the best mobile app development Boston."}
       />
      <CTA />
      <TechAndTools />
      <SEO  header={"Focused Mobile Application Development Boston"} para={"Choosing the right partner in Boston can completely change the way your app performs in a competitive market."}/>
      <Testimonials
        test={test}
        header={"What Our Clients "}
        header2={"Say"}
        para={"Startups and growing businesses choose us. Our clients often describe us as the best mobile app development company in Boston for our ability to combine quality and measurable business outcomes."}
      />
        <Faq faqs={faqs} /> 
      <ContactUs
      img={"/location/mobile-boston/c-img.png"}
        pathname={"Mobile Dev in Boston "}
        header={"You’re Closer Than You Think to Getting Started"}
        header2={""}
        para={
          "We get that you’re doubting, but you don’t need to figure out everything first to get started. Our team is here to guide you with experience and honest execution. You just need to talk to us!"
        }
        btn={"Get Your Free Consultation"}
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
  )
}

export default MobileAppBoston
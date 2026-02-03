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
        If you’re going Apple-first, we’ve got you. Being one of the mobile app
        development companies in New York, we build apps that work smoothly on
        iPhones. Our{" "}
        <Link
          href="/services/ios-app-development-services"
          className="underline text-[#F15C20] group-hover:text-white"
        >
          iOS app development
        </Link>{" "}
        and iPhone app development services focus on clean performance and a
        smooth user experience.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        For Android, we handle full{" "}
        <Link
          href="/services/android-app-development-services"
          className="underline text-[#F15C20] group-hover:text-white"
        >
          Android app development
        </Link>{" "}
        using Kotlin and Java. When we offer our Android app development
        service, we make sure your app runs smoothly across Pixel, Samsung, and
        OnePlus — without weird bugs.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Cross-Platform App Development",
    description: (
      <>
        Looking for faster delivery and cost efficiency? You need{" "}
        <Link
          href="/services/hybrid-app-development-services"
          className="underline text-[#F15C20] group-hover:text-white"
        >
          cross-platform app development
        </Link>
        . We build apps with Flutter and React Native, so you get iOS and
        Android apps from a single codebase.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Native App Development",
    description: (
      <>
        When you want full control, our{" "}
        <Link
          href="/services/native-app-development-services"
          className="underline text-[#F15C20] group-hover:text-white"
        >
          native app development services
        </Link>{" "}
        are the best choice. As a native mobile app development company, we
        build custom native apps and{" "}
        <Link
          href="/services/pwa-development-services"
          className="underline text-[#F15C20] group-hover:text-white"
        >
          PWAs
        </Link>{" "}
        that scale with you.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Web App Development",
    description: (
      <>
        We also handle{" "}
        <Link
          href="/services/web-application-development-services"
          className="underline text-[#F15C20] group-hover:text-white"
        >
          web app development
        </Link>{" "}
        services when your product lives in the browser. Our custom web app
        development services in New York plug right into your mobile product
        without friction.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "UI/UX Design Services",
    description: (
      <>
        Good design makes everything easier. Our{" "}
        <Link
          href="/services/mobile-app-design-services"
          className="underline text-[#F15C20] group-hover:text-white"
        >
          mobile app design services
        </Link>
        , including{" "}
        <Link
          href="https://www.dignitestudios.com/services/ios-app-design-services"
          className="underline text-[#F15C20] group-hover:text-white"
        >
          iOS app design services
        </Link>{" "}
        and{" "}
        <Link
          href="/services/android-mobile-app-design-services"
          className="underline text-[#F15C20] group-hover:text-white"
        >
          Android app design services
        </Link>
        , focus on clarity, flow, and keeping users happy.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance, Testing & Consulting",
    description: (
      <>
        We don’t disappear after launch. From MVP development and post-launch
        support to QA testing and{" "}
        <Link
          href="/services/mobile-app-consulting-services"
          className="underline text-[#F15C20] group-hover:text-white"
        >
          mobile app consulting services
        </Link>
        , we help you fix, improve, and scale without starting over.
      </>
    ),
  },
];

const highlights = [
  {
    title: "100% Custom Development",
    desc: "No templates, no shortcuts. Every product is built specifically for your goals, users, and growth plans.",
  },
  {
    title: "Specialized Engineering Teams",
    desc: "You get engineers, designers, and PMs matched to your product, not a random bench.",
  },
  {
    title: "24/7 Support",
    desc: "Questions, fixes, updates — we’re available whenever you need us, not just during office hours.",
  },
  {
    title: "200+ Skilled Technology Experts",
    desc: "A deep talent pool that helps us scale fast without compromising quality.",
  },
  {
    title: "Flexible Engagement Models",
    desc: "Fixed scope, dedicated teams, or long-term partnerships — you choose what works.",
  },
  {
    title: "Transparent Process",
    desc: "Clear timelines, regular updates, and zero guesswork from day one.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "As a Healthcare app development company in New York, we build HIPAA-ready apps. Telemedicine, patient portals, remote monitoring, you name it.",
  },
  {
    title: "Fintech Apps",
    desc: "Through our fintech app development services, we help you launch secure fintech apps and payment mobile apps with multi-layer authentication, KYC/AML support, and transaction management.",
  },
  {
    title: "E-commerce & Retail Apps",
    desc: "Our ecommerce application development services in New York keep things quick, simple, and tailored to your customers. Storefront? Check. Inventory? Check. POS and loyalty? All covered.",
  },
  {
    title: "Education & e-Learning Apps",
    desc: "We offer education app development services that guide students step by step through courses, videos, and quizzes, while teachers get dashboards that actually help them do their job.",
  },
  {
    title: "Real Estate Apps",
    desc: "Our real estate app development services offer property tech apps that include property listings, advanced filters, virtual tours, mortgage calculators, and lead management tools.",
  },
  {
    title: "Dating & Matchmaking Apps",
    desc: "Real connections come before features. Our approach for New York prioritizes thoughtful matching, verified identities, and privacy controls that encourage genuine engagement.",
  },
];

const test = [
  {
    name: "Jason Miller",
    designation: "— Founder, FinEdge NYC",
    review:
      "“Dignite Studios helped us launch our mobile app ahead of schedule, and the ROI exceeded expectations within the first few months. Their New York mobile app development team understood our market and delivered with precision.”",
  },
  {
    name: "Amanda Lopez",
    designation: "— Product Lead, UrbanCart",
    review:
      "“What impressed us most was the speed and structure. The mobile app was delivered fast without cutting corners. Clear communication, weekly updates, and zero surprises throughout the process.”",
  },
  {
    name: "Daniel Roberts",
    designation: "— CTO, HealthBridge Solutions",
    review:
      "“Working with Dignite Studios was an amazing experience to be honest. It felt like having our own app team right here in New York. They were super professional, easy to work with, and always on the same page.”",
  },
];

const BENEFITS = [
  {
    title: "Customer Retention",
    desc: "The mobile app lets you enhance customer retention by making your brand more accessible.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility",
    desc: "Improved visibility leads to stronger connections with your audience, so stay top-of-mind with a branded app.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Drive Revenue",
    desc: "Mobile apps open new ways to grow your business through mobile sales or in-app purchases.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Actionable Insights",
    desc: "Built-in analytics in mobile apps help you understand user behavior, make smarter business decisions, and optimize the experience.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Competition",
    desc: "Having an app gives you an advantage and positions your business as innovative and accessible in the New York mobile app development market.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "What technologies do you work with?",
    answer:
      "We use modern, proven tech. Flutter. React Native. Swift. Kotlin. Node JS. As one of the reliable mobile app development companies in New York, we choose what fits your product best.",
  },
  {
    id: 2,
    question: "Can I hire you for just iOS or Android?",
    answer:
      "Yes. iOS, Android, or cross-platform. Our app development New York team helps you pick the right setup and builds it properly from day one.",
  },
  {
    id: 3,
    question: "Do you handle backend and cloud as well?",
    answer:
      "We do. Our mobile application development New York services include backend systems, real-time databases, and cloud infrastructure. Everything your app needs to scale smoothly.",
  },
  {
    id: 4,
    question: "How do you keep projects moving on time?",
    answer:
      "Clear sprints. Clear timelines. Regular updates. During the development, you will always be aware of what’s happening and what’s coming next.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "Both. MVPs. Growing products. Complex platforms. We scale the team and process based on your goals.",
  },
  {
    id: 6,
    question: "What happens after launch?",
    answer:
      "We stay involved. Updates. Improvements. Performance checks. Your app keeps getting better over time.",
  },
  {
    id: 7,
    question: "Why work with a New York-based team?",
    answer:
      "Faster communication. Better collaboration. A team that understands your market and treats your product seriously.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "In this phase, we align your business objectives with the app’s vision, features, and technical foundation because clear goals lead to better products.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "It is a mobile app development New York process in which a visual mock-up is created that displays the mobile app’s initial design and purpose but does not hold functional code.",
  },
  {
    step: "03",
    title: "Sprint Planning",
    desc: "The sprint planning for app development starts here, and our professional mobile app developers in New York determine the product roadmap and analyze the total execution time.",
  },
  {
    step: "04",
    title: "Testing & Evaluation",
    desc: "Testing at all stages of the mobile app development process is the best assurance to eliminate serious bugs, stay up-to-date with the current status, and build your esteem.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Your app’s journey is finally about to take off. Deployment is the moment where preparation meets performance, including packaging, configuring servers, and ensuring smooth operation across iOS, Android, and beyond.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "After launch, the developers’ focus shifts to monitoring performance, fixing bugs, and optimizing features based on user feedback.",
  },
];

const MobileAppMiami = () => {
  return (
    <div className="max-w-screen-2xl flex flex-col mx-auto overflow-hidden">
      <Hero />
      <About
        heading="The"
        heading2={"BackStory"}
        para="You’re reading about a Mobile App Development Company New York Brands Trust. With 5+ years of experience and 15+ projects delivered, we’re one of the best mobile app development companies in New York, focused on building high-performance apps for real-world use.
Dignite Studios is a team of 200+ expert mobile app developers in New York who work with startups and growing businesses and help them turn their ideas into scalable, high-performing mobile apps. 
Including strategy, UI/UX design with agile development and deployment, we make sure to build apps that are reliable, engaging, and built to grow with your business. 
"
        button=""
      />
      <Services
        services={services}
        header={"Mobile App Development Services In"}
        header2={"New York"}
        para={
          "We are the trusted mobile app development company New York that offers end-to-end services because sometimes, building a mobile application can feel overwhelming. But it doesn’t have to. Every service is focused on performance and long-term growth. "
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why Teams Choose"}
        header2={"Dignite Studios"}
        ctaHeader={"Ready To Work With The Right Team?"}
        ctaPara={
          "Choosing a development partner is a big decision, and you’ve seen how we work and what we value. Now let’s discuss your product goals, technical needs"
        }
        ctaBtn={"Let’s Talk About Your Idea"}
        cta={
           <div className="bg-black  overflow-hidden hover:scale-105 z-50 absolute text-white   opacity-100  transition-all ease-linear  w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  from-[#f15b20] to-[#FF8F62]">
                    <div className="relative  overflow-hidden" >
                    <img src="/location/mobile-miami/b-cta.png" className="w-full h-[500px] rounded-b-2xl bottom-0 relative bg-cover" alt="lggg" />
                    {/* <img width={250} height={250} src="/location/mobile-chicago/cta-inner-m.png" className=" rounded-b-2xl bottom-14  right-10 absolute " alt="lggg" /> */}
                    <div className="md:w-[45%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center text-center">
                      <h1 className="text-[45px] font-bold text-white leading-[45px]">
                        Ready To Work With The Right Team?
                      </h1>
                      <p>
                        Choosing a development partner is a big decision, and you’ve
                        seen how we work and what we value. Now let’s discuss your
                        product goals, technical needs
                      </p>
                      <div className="flex items-center group justify-center ">
                        <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                          Let’s Talk About Your Idea
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
            Choosing a mobile app development company New York is a big call,
            and we don’t take that lightly. At Dignite Studios, we focus on
            doing the work right, keeping things transparent, and building
            products that actually hold up after launch. You need to look for a
            company that provides you clarity, collaboration, and long-term
            value when you’re looking for mobile application development in New
            York. When it comes to working with founders, product teams, and
            growing businesses, our{" "}
            <Link
              href={"/services/hire-mobile-app-developers"}
              className="underline"
            >
              {" "}
              experienced mobile app developers
            </Link>{" "}
            in New York bring structure, speed, and accountability to every
            project. This is why many clients consider us the{" "}
            <Link
              className="underline"
              href={"/services/mobile-app-development-services"}
            >
              {" "}
              best mobile app development company New York{" "}
            </Link>{" "}
            to work with.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Specialized App Development for"}
        header2={" New York  Industries"}
        para={
          "At Dignite Studios, we don’t offer one-size-fits-all products. We build mobile app solutions shaped around your business model, compliance needs, and growth p."
        }
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Our Proven Mobile App Development Process"}
        para={
          "Every app has a story. At our mobile app development company in New York, we follow a structured approach that brings your idea to life. It’s fast and perfectly aligned with your business vision. Here’s the process that turns concepts into apps."
        }
      />
      <MobileApp
        header={"Why Mobile App is a Competitive "}
        header2={"Advantage"}
        para={
          "Here’s why investing in an app from the best mobile app development company in New York is essential:"
        }
        cards={BENEFITS}
      />
      <SuccessStories />
      <CTA />
      <TechAndTools />
      <SEO />
      <Testimonials
        test={test}
        header={"Hear From Our New York"}
        header2={"Clients"}
        para={""}
      />
      <Faq faqs={faqs} />
      <ContactUs
        img={"/location/mobile-boston/c-img.png"}
        pathname={"Mobile Dev in New York "}
        header={"Start Your App Journey with Our NYC Team "}
        header2={""}
        para={
          "Work with a team that understands your goals. Our New York-based experts take care of development, design, and deployment so your product has a strong market presence. "
        }
        btn={"Schedule a Free Call"}
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

export default MobileAppMiami;

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
        The iOS / iPhone app development is the right choice if your target
        audience in Charlotte consists of iOS users. We develop iOS applications, ready for a
        smooth user experience using Swift in NC. We focus on apps that excel.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        If you're seeking an Android mobile app development agency Charlotte, you
        can trust us with your Android app development. The team makes sure to
        create Android app that are optimized for all Android devices.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Hybrid App Development",
    description: (
      <>
        Our Hybrid mobile app development services keep your project running smoothly, so if you're all about quick results without blowing the budget, hybrid development is your perfect match.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Custom Solutions / Native & Web Apps",
    description: (
      <>
        When it comes to building custom solutions, we provide the best custom mobile app development Charlotte. Our offerings
        include native app development services, PWA development services,
        hybrid app development services, and web app development services.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "Design Services",
    description: (
      <>
        Our mobile app design services include iOS and Android app design services. The outcome is consistent branding. Every design
        is created to make your app engaging through Charlotte mobile app development.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance, Consulting & Testing",
    description: (
      <>
        The developers in DC provide mobile app support &
        maintenance services, mobile app consulting services, and QA services, including mobile app development services Charlotte. We help with the app launch & deployment to maximize ROI.
      </>
    ),
  },
];

const highlights = [
  {
    title: "12+ Years of Apps Development",
    desc: "We're one of the expert companies with over 10 years of experience offering custom mobile app development Charlotte NC.",
  },
  {
    title: "Silicon Valley-Level Expertise",
    desc: "Being a trusted mobile app development agency Charlotte, our development services provide top-tier design and development.",
  },
  {
    title: "Dedicated Project Managers",
    desc: "The project manager keeps the entire build on track, and you get smooth execution throughout.",
  },
  {
    title: "100% Transparent Process",
    desc: "The mobile app development Charlotte NC team will share the updates. This way, we ensure accountability according to your business.",
  },
  {
    title: "Post-Launch Support",
    desc: "The support ensures your app remains competitive, so you can easily rely on our Charlotte app development services.",
  },
  {
    title: "Custom Solutions",
    desc: "Every app is built to meet your specific market requirements through Custom mobile app development in Charlotte.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "As a Healthcare App Development Company in NC, we build HIPAA-ready apps. Prepared for the health sector.",
  },
  {
    title: "Fintech Apps",
    desc: "Through our fintech app development services in NC, we help you in launching secure fintech apps and payment mobile apps with multi-layer authentication.",
  },
  {
    title: "E-commerce & Retail Apps",
    desc: "We keep things quick and simple through ecommerce application development in Charlotte. Storefront? Check. Inventory? Check. POS and loyalty? All included.",
  },
  {
    title: "Education & e-Learning Apps",
    desc: "We provide education app development services in NC that guide students step by step through courses and quizzes, while teachers have dashboards that actually help them do their job.",
  },
  {
    title: "Real Estate Apps",
    desc: "Our app development company in Charlotte offers property tech apps that include property listings, advanced filters, virtual tours, mortgage calculators, and lead management tools.",
  },
  {
    title: "Dating & Matchmaking Apps",
    desc: "Real connections mean more than features. Our approach prioritizes verified identities with privacy controls that encourage genuine engagement.",
  },
];

const test = [
  {
    name: "Michael Tran",
    designation: "— CEO, NovaFin Technologies",
    review:
      "“Dignite Studios delivered our fintech app ahead of schedule, and the ROI exceeded our expectations within the first six months. Their California team understood our vision and turned it into a scalable, high-performing product.”",
  },
  {
    name: "Sarah Patel",
    designation: "— Founder, UrbanCart Marketplace",
    review:
      "“Our mobile commerce app was launched in record time without compromising quality. The team's structured process and rapid development approach helped us start generating revenue faster than projected.”",
  },
  {
    name: "David Ramirez",
    designation: "— Director of Operations, BrightPath Solutions",
    review:
      "“From strategy to deployment, Dignite Studios demonstrated true professionalism. Clear communication, technical expertise, and on-time delivery made the entire process seamless and stress-free.”",
  },
];

const BENEFITS = [
  {
    title: "Customer Retention",
    desc: "Mobile app makes it easier for you to enhance customer retention by making your brand easily accessible.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility",
    desc: "Better visibility leads to stronger connections with your audience, so stay top of mind with a branded app.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Drive Revenue",
    desc: "Mobile apps bring new ways to grow your business through mobile sales or in-app purchases",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Actionable Insights",
    desc: "You need to make smarter business decisions, and built-in analytics in mobile apps help you understand user behavior.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Competition",
    desc: "Having an app gives you an edge and positions your business as accessible in the Charlotte, NC market.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question:
      "How much time does it usually take to build a mobile app in Charlotte?",
    answer:
      "It always depends on the features, the integrations, and the complexity of each application. There's no single timeline for each mobile app during development. A simple basic application can take around 8-12 weeks, but it all depends on the application. If you want a final estimate, contact our experts and discuss your app plan.",
  },
  {
    id: 2,
    question: "Can you build iOS applications as well?",
    answer:
      "We are a team of experts, building iOS and Android apps. The team creates applications that are secure and perform well. The team can work with native and Swift to create applications that feel smooth while ensuring functionality.",
  },
  {
    id: 3,
    question: "Would you provide support after we're done with the launch?",
    answer:
      "Yes. It's known as post-launch support, and we continue to support the client even when the app is launched. Dignite Studios provides post-launch maintenance and updates. So that we know that the app is optimized and aligned with the vision and users' needs.",
  },
  {
    id: 4,
    question: "What if I have a rough idea? Can you guide me?",
    answer:
      "Trust us, not even a single app starts with the perfect idea. With this understanding, we validate the concepts and provide guidance through a free consultation. We can help you out by adding practical aspects to your app idea and preparing it for the future.",
  },
  {
    id: 5,
    question:
      "How much does a mobile application usually cost in Charlotte, NC?",
    answer:
      "Dignite Studios doesn't have fixed pricing rules. The pricing usually depends on the features, the integrations, and how complex you want your application to be. It's upto your app idea, but we keep the pricing simple and transparent, adding no hidden fees.",
  },
  {
    id: 6,
    question:
      "Are you currently working with startups, too, or just the enterprises in NC?",
    answer:
      "The development team at Dignite Studios works with both startups and enterprises across Charlotte, NC. It really doesn't make much difference for us whether you're building an MVP or scaling an existing application. We would look forward to building something amazing together either way.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "Clear goals mean amazing products. At this stage, we align your business objectives with the app's vision and features.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "It is a Charlotte-based mobile app development process in which a preliminary visual mock-up has been created that exhibits the mobile app's initial design and purpose.",
  },
  {
    step: "03",
    title: "Sprint Planning",
    desc: "The sprint planning for the app starts here, and our mobile app developers in NC determine the product roadmap and analyze the total execution time.",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "Testing at every stage is the perfect way to remove bugs from the development process. It helps stay updated with the latest status.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Deployment is where preparation leads to performance. Packaging and ensuring smooth operation across iOS and Android.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "Once the app launch is done, the developers' focus shifts to monitoring performance and optimizing features based on user feedback.",
  },
];

const MobileAppCharlotte = () => {
  return (
    <div className="max-w-screen-2xl w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="The Backstory of the Best Mobile App Development Agency "
        heading2={"Charlotte"}
        para="Looking for a top mobile app development company Charlotte? That's us. Dignite Studios is an app development company with 200+ trusted mobile app experts who work with startups and growing businesses to turn their ideas into high-performing mobile apps. From UI/UX to startegy and design, agile development and deployment, we offer mobile app development Charlotte that is reliable and designed to grow with your business. Being one of the best mobile app development companies in Charlotte, with 10+ years of experience and an expert team, we build apps the way you envision."
        button="Talk to Your Local Team"
      />
      <Services
        services={services}
        header={"Our Mobile App Development Services"}
        header2={"Charlotte"}
        para={
          "When you work with us, we make sure you're aware of our work ethic. Being an expert mobile app development company Charlotte NC, we designed our app development services to meet your needs and build the app for you, exactly the way you envisioned. Working with Dignite Studios means strong commitments. Mobile app solutions prepared by us cover every stage with technical expertise and a clear focus on your goals."
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why We're The Best Charlotte Mobile App"}
        header2={"Development Company"}
        ctaHeader={"Searching for the Right Team?"}
        ctaPara={
          "You've seen what makes us unique from other mobile app development companies in Charlotte. Now let's work on your project. We'll talk about your app vision and long-term growth plans."
        }
        ctaBtn={"Consult With Us!"}
        cta={
          <div className=" overflow-hidden   text-white hover:scale-105 z-50 absolute opacity-100 shadow-[#F15C2033] transition-all  w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  ">
            <div className="relative h-[500px]  ">
              <img
                src="/location/mobile-charlotte/b-cta.png"
                className="w-full  rounded-b-2xl bottom-0  absolute bg-cover"
                alt="lggg"
              />
              <div className="md:w-[45%] absolute top-1/2 text-start left-20  -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-start ">
                <h1 className="text-[45px] font-bold text-white leading-[45px]">
                  Searching for the Right Team?
                </h1>
                <p>
                  You've seen what makes us unique from other mobile app
                  development companies in Charlotte. Now let's work on your project. We'll talk about your app
                  vision and long-term growth
                  plans.
                </p>
                <Link
                  href={"/contact-us"}
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Consult With Us!
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
            Businesses in Charlotte turn to Dignite Studios because we bring them the results they want.  We are not just some people claiming to be the top mobile app development company Charlotte NC; we have the best mobile app developers who take the time to understand your goals and audience before the development starts. It ensures that we are delivering the best execution with clear communication and reliable solutions.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Specialized Mobile App Development Charlotte NC"}
        header2={"Industries"}
        para={
          "At Dignite Studios, we don't think building the same kind of products for everyone is fair. We design mobile app solutions around your business and growth plans. At our Charlotte mobile app development company, we simply don't work on building one-size-fits-all products. We build customized solutions for everyone. Also, building mobile apps around your compliance needs and growth plans gives you an advantage in the Charlotte market from day one."
        }
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Proven Mobile App Development Charlotte Process"}
        para={
          "Every app has a story. At our mobile app development company in Charlotte, we follow a structured approach that brings your idea to life. Multiple companies work with different processes of development, but when it comes to creating applications at Dignite Studios, we use a structured approach to ensure that we develop applications that work the way you envisioned. Here's the workflow that turns concepts into apps."
        }
      />
      <MobileApp
        header={"Why Your Business Requires"}
        header2={"a Mobile App"}
        para={
          "Here's why investing in an app from a trusted mobile app development company in Charlotte NC, is important."
        }
        cards={BENEFITS}
      />
      <SuccessStories
        header={"Successful Apps"}
        header2={"Dignite Studios Built"}
        para={
          "See how Dignite Studios works by checking out our case studies to see solutions and apps we've built that actually make life easier."
        }
      />
      <CTA />
      <TechAndTools header={"Technologies & Frameworks"} para={"Do you ever think about what makes some apps feel so smooth, while some of those apps look like chaos? Being a trusted app development company, we ensure your app works smoothly every time. To create your app smoothly and easily to use, we use modern technologies so that the app’s performance is not affected and works for long term. "} />
      {/* <SEO /> */}
      <Testimonials
        test={test}
        header={"What Clients Say"}
        header2={"About Us"}
        para={""}
      />
      <Faq faqs={faqs} />
      <ContactUs
        pathname={"Mobile Dev in Charlotte"}
        header={"It's Time to Work on Your Project"}
        img={"/location/mobile-charlotte/c-img.png"}
        header2={""}
        para={
          "Our professional app developers in Charlotte, NC provide reliability. Connect with us and get a dedicated team of skilled developers to launch your app smarter."
        }
        btn={"Connect with Us Today!"}
      />
    </div>
  );
};

export default MobileAppCharlotte;

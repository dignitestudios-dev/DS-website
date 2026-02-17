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
        audience consists of iOS users. We develop iOS applications, ready for a
        smooth user experience using Swift. We focus on apps that excel.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        If you're seeking Android app development services in Washington DC, you
        can trust us with your Android app development. The team makes sure to
        develop Android applications that are fully optimized for devices like
        Samsung, Pixel, and OnePlus.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Hybrid App Development",
    description: (
      <>
        Our Hybrid mobile app development services for Washington DC keep your
        project running smoothly, so if you're all about quick results without
        blowing the budget, hybrid development is your perfect match.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Custom Solutions / Native & Web Apps",
    description: (
      <>
        When it comes to building custom solutions, we are one of the best
        custom mobile app development companies in Washington DC. Our offerings
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
        Make click count with our mobile app design services include iOS app
        design services and Android app design services, focusing on
        user-centric interfaces. The outcome? Consistent branding. Every design
        is created to make your app engaging.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance, Consulting & Testing",
    description: (
      <>
        The team of app developers in DC provides mobile app support &
        maintenance services, mobile app consulting services, and app testing &
        QA services to ensure your app remains secure and updated. We help with
        the app launch & deployment to maximize ROI.
      </>
    ),
  },
];

const highlights = [
  {
    title: "12+ Years of Apps Development",
    desc: "We're one of the expert mobile app development companies Washington with over 10 years of experience.",
  },
  {
    title: "Silicon Valley-Level Expertise",
    desc: "Being a trusted app development company Washington DC, our mobile app development services provide top-tier design and development.",
  },
  {
    title: "Dedicated Project Managers",
    desc: "The project manager keeps the entire build on track, and you get smooth execution throughout.",
  },
  {
    title: "100% Transparent Process",
    desc: "The team will share the updates. This way, we ensure accountability and adaptability according to your business.",
  },
  {
    title: "Post-Launch Support",
    desc: "The support services ensure your app remains competitive, so you can easily rely on our Washington DC mobile app development services.",
  },
  {
    title: "Custom Solutions",
    desc: "Every app is built to meet your specific market requirements through Custom mobile app development Washington.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps",
    desc: "As a Healthcare App Development Company Washington DC, we build HIPAA-ready apps. Prepared for the health sectors.",
  },
  {
    title: "Fintech Apps",
    desc: "Through our fintech app development services in DC, we support you in launching secure fintech apps and payment mobile apps with multi-layer authentication.",
  },
  {
    title: "E-commerce & Retail Apps",
    desc: "We keep things quick and simple through ecommerce application development services. Storefront? Check. Inventory? Check. POS and loyalty? All included.",
  },
  {
    title: "Education & e-Learning Apps",
    desc: "We provide education app development services in DC that guide students step by step through courses and quizzes, while teachers have dashboards that actually help them do their job.",
  },
  {
    title: "Real Estate Apps",
    desc: "Our app development company Washington DC offer property tech apps that include property listings, advanced filters, virtual tours, mortgage calculators, and lead management tools.",
  },
  {
    title: "Dating & Matchmaking Apps",
    desc: "Real connections matter more than features. Our approach prioritizes verified identities and privacy controls that encourage genuine engagement.",
  },
];

const test = [
  {
    name: "Michael Carter",
    designation: "— CEO, FinEdge Solutions",
    review:
      "“Working with this team was one of the best decisions we made. Our app launched seamlessly, and ROI exceeded expectations within the first quarter.”",
  },
  {
    name: "Samantha Lee",
    designation: "— Product Manager, UrbanFleet Technologies",
    review:
      "“They delivered ahead of schedule without compromising quality. The turnaround time and structured workflow made the entire process smooth and efficient.”",
  },
  {
    name: "David Ramirez",
    designation: "— Founder, HealthSync Labs",
    review:
      "“Exceptional professionalism from start to finish. Clear communication, transparent pricing, and strong technical expertise make them a standout among app developers in dc.”",
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
    desc: "Having an app gives you an edge and positions your business as accessible in the Washington DC market.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question:
      "How much time does it usually take to build a mobile app in Washington DC?",
    answer:
      "There's no fixed timeline for each mobile app during development. It always depends on the features, the integrations, and the complexity of each application. A simple basic application can take up to 8-12 weeks, but it all depends on each application. If you want a perfect estimate, contact our experts and discuss your app plan.",
  },
  {
    id: 2,
    question: "Can you build iOS applications too?",
    answer:
      "Dignite Studios is a team of experts at building both iOS and Android apps. The team of developers creates applications that are high-performing and secure. The team can easily work with native and Swift to create applications that feel smooth while ensuring functionality.",
  },
  {
    id: 3,
    question: "Would you provide support after we're done with the launch?",
    answer:
      "Yes. It's known as post-launch support, and we stay with the client even when the app is launched. We provide post-launch maintenance and updates. So that we know that the app stays optimized and aligned with the vision and users' needs.",
  },
  {
    id: 4,
    question: "What if I have a rough idea? Can you guide me?",
    answer:
      "Trust us, no app starts with the perfect idea. Understanding this, we validate the concepts and provide guidance through complementary consultation. The experts can help you out by adding practical aspects to your app idea and preparing it for the future.",
  },
  {
    id: 5,
    question:
      "How much does a mobile application usually cost in Washington DC?",
    answer:
      "We don't have the fixed pricing rules. The pricing and cost usually depend on the features, the integrations, and how complex you want your application to be. It's upto your app idea, but we keep the pricing transparent, adding no hidden fees.",
  },
  {
    id: 6,
    question:
      "Are you currently working with startups, too, or just the enterprises?",
    answer:
      "The development team at Dignite Studios works with both startups and enterprises across Washington, DC. We would love to work with you. It really doesn't make a difference for us whether you're building an MVP or scaling an existing application. We would look forward to building something amazing together either way.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "Clear goals mean better products. In this phase, we align your business objectives with the app's vision and features.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "It is a Washington-based mobile app development process in which a preliminary visual mock-up has been created that exhibits the mobile app's initial design and purpose.",
  },
  {
    step: "03",
    title: "Sprint Planning",
    desc: "The sprint planning for app development starts here and our professional mobile app developers in DC determine the product roadmap and analyze the total execution time.",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "Checking at every stage of the development process is the best way to remove bugs. It helps with staying up to date with the latest status.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Deployment is where preparation connects with performance. Packaging and ensuring smooth operation across iOS and Android.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "Once the launch is done, the developers' focus shifts to monitoring performance and optimizing features based on user feedback.",
  },
];

const MobileAppWashington = () => {
  return (
    <div className="max-w-screen-2xl w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="About Dignite "
        heading2={"Studios"}
        para="Looking for a top app development company Washington DC? That's us. Dignite Studios is a team of 200+ trusted mobile app experts who work with startups and growing businesses and help them turn their ideas into high-performing mobile apps. From strategy to UI/UX design and agile development and deployment, we offer mobile app development Washington DC that are reliable and designed to grow with your business. Being one of the best mobile app development companies Washington, with 10+ years of experience and an expert team, we build apps exactly as you envision."
        button="Talk to Your Local Team"
      />
      <Services
        services={services}
        header={"Our Mobile App Development Services"}
        header2={"in Washington"}
        para={
          "When you work with Dignite Studios, we make sure you're aware of our work ethic. Being an expert app development company Washington DC, we designed our app development services to meet your needs and help you build the app you envision. Working with us means strong commitments. Mobile app solutions prepared by Dignite Studios cover every stage with technical expertise and a clear focus on your goals."
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why Washington Businesses Choose"}
        header2={"Dignite Studios"}
        ctaHeader={"Choose The Right Team For Your App!"}
        ctaPara={
          "You've seen what makes us different from other mobile app development companies Washington. Now let's work on your app idea. We'll discuss your app vision and long-term growth plans."
        }
        ctaBtn={"Connect With Us!"}
        cta={
          <div className=" overflow-hidden   text-white hover:scale-105 z-50 absolute opacity-100 shadow-[#F15C2033] transition-all  w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  ">
            <div className="relative h-[500px]  ">
              <img
                src="/location/mobile-washington/b-cta.png"
                className="w-full  rounded-b-2xl bottom-0  absolute bg-cover"
                alt="lggg"
              />
              <div className="md:w-[45%] absolute top-1/2 text-center left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center ">
                <h1 className="text-[45px] font-bold text-white leading-[45px]">
                  Choose The Right Team For Your App!
                </h1>
                <p>
                  You've seen what makes us different from other mobile app
                  development companies Washington. Now let's work on your app
                  idea. We'll discuss your app vision and long-term growth
                  plans.
                </p>
                <Link
                  href={"/contact-us"}
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Connect With Us!
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
            Businesses in Washington turn to Dignite Studios because we bring
            them the results they want. We are not just some people claiming to
            be one of the top mobile app development companies in Washington DC;
            we have a team of the best mobile app developers who take the time
            to understand your goals and audience before the development starts.
            We deliver best execution with clear communication and reliable
            solutions.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Specialized Mobile App Development"}
        header2={"Washington DC Industries"}
        para={
          "At Dignite Studios, we don't believe in building the same kind of products for everyone. We design mobile app solutions shaped around your business and growth plans. At our app development company, we simply don't offer one-size-fits-all products. We build tailored solutions for everyone. Also, building mobile app solutions around your compliance needs and growth plans, giving you an advantage in the Washington market from day one."
        }
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Proven Mobile App Development Washington DC Process"}
        para={
          "Every app has a back story. At our mobile app development company in Washington DC, we follow a structured approach that brings your idea to life. Different companies work with different processes of development, but when it comes to developing applications at Dignite Studios, we use a perfectly structured approach to ensure that we develop applications that work the way you envisioned. Here's the process that turns concepts into apps."
        }
      />
      <MobileApp
        header={"Why Your Business Needs"}
        header2={"a Mobile App"}
        para={
          "Here's why investing in an app from a trusted mobile app development company Washington Dc is important."
        }
        cards={BENEFITS}
      />
      <SuccessStories
        header={"Successful Projects of"}
        header2={"Dignite Studios"}
        para={
          "Wanna know how Dignite Studios works? Check out our case studies to see solutions and apps we've built that actually make life easier."
        }
      />
      <CTA />
      <TechAndTools header={"Tools, Technologies & Frameworks "} para={"Do you ever think about what makes some apps feel so smooth to use, while some apps look like a mess? Being a trusted app development company Washington DC, we ensure your app runs smoothly every time. To make your app smooth and easy to use, we use modern technologies so that the performance of your application is not affected and works for long term. "} />
      {/* <SEO /> */}
      <Testimonials
        test={test}
        header={"What Clients Say"}
        header2={"About Us"}
        para={""}
      />
      <Faq faqs={faqs} />
      <ContactUs
        pathname={"Mobile Dev in Washington DC"}
        header={"Ready to Work on Your Dream Project With Us?"}
        img={"/location/mobile-washington/c-img.png"}
        header2={""}
        para={
          "You no longer have to compromise on your app's success. Our professional app developers in Washington DC provide expertise and reliability. Work with us and get a dedicated team of skilled app developers to launch your app faster and smarter."
        }
        btn={"Connect with Us Today!"}
      />
    </div>
  );
};

export default MobileAppWashington;

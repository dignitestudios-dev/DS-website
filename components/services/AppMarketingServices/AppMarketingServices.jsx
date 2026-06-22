import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Signs from "../ui/Signs";
import Services from "../ui/Services";
import DevelopmentApproach from "../ui/DevelopmentApproach";
import ToolsAndTech from "../ui/ToolsAndTech";
import Process from "../ui/Process";
import MetricsCarousel from "./MetricsCarousel";
import Comparison from "../ui/Comparison";
import WhyChoose from "../ui/WhyChoose";
import Bussiness from "../ui/Bussiness";
import Industries from "../ui/Industries";
import MobileApp from "../ui/MobileApp";
import SuccessStories from "../ui/SuccessStories";
import WebDesignCTA from "../ui/WebDesignCTA";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import Link from "next/link";
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiLaravel,
    SiWordpress,
    SiShopify,
    SiWebflow,
    SiGooglecloud,
    SiMongodb,
    SiPostgresql,
    SiGoogleads,
    SiSemrush
} from "react-icons/si";
import { FaAws, FaMicrosoft, FaGlobe, FaSyncAlt, FaChartBar, FaUserCheck, FaChartLine, FaRocket } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import AppMarketingServicesCTA from "../ui/AppMarketingServicesCTA";

const signsItems = [
    {
        title: "Your Page Load Speed is Clearly Slow",
        desc: "The visitors on your page might leave instantly if the website is taking too long to load. A 1 sec delay in load speed reduces your conversions by up to 7%.",
    },
    {
        title: "Your Website Doesn’t Respond Well on Mobile",
        desc: "You need to find out if your mobile users are struggling with your website? A poor mobile experience can affect your business because around 60% of global web traffic is driven from smartphones.",
    },
    {
        title: "You’re Getting Traffic but Not Conversion",
        desc: "Traffic with no conversions is just lost opportunities. There might be some issues with your conversion paths or your visitors might be facing navigation problems if they are not taking action.",
    },
    {
        title: "Your Web Design is Comparatively Outdated",
        desc: "Your website is mostly the first impression of your business. Your impression is formed within milliseconds, literally. An outdated design can make people question your entire brand credibility.",
    },
    {
        title: "Your Content Management Takes Too Long",
        desc: "You feel like your website is taking too much time whenever you update content. It can affect your entire marketing efforts. Keeping your content updated on your website should not be requiring technical support.",
    },
    {
        title: "Your Website Ranking is Lower on Search Engines",
        desc: "Your website is having technical issues if your website is no longer ranking as well as before. Your digital presence might be suffering in this condition. Improvement in these areas attracts more traffic.",
    },
];

const webDesignServices = [
    {
        title: "App Store Optimization (ASO)",
        description: "Improve organic visibility, keyword rankings, and website authority through technical SEO, content optimization, local SEO, and strategic link-building initiatives.",
        icon: "ams1",
        icon2: "ams1.1",
    },
    {
        title: "App Launch Marketing",
        description: "Build brand awareness and customer engagement through targeted campaigns on Facebook, Instagram, LinkedIn, TikTok, and other social platforms.",
        icon: "ams2.1",
        icon2: "ams2",
    },
    {
        title: "User Acquisition Strategy",
        description: "Create valuable content strategies that attract, educate, and convert audiences while strengthening search visibility and brand authority.",
        icon: "ams3.1",
        icon2: "ams3",
    },
    {
        title: "App Reputation Management",
        description: "Develop personalized email campaigns, automation workflows, and customer nurturing sequences that increase engagement and conversions.",
        icon: "ams4",
        icon2: "ams4.1",
    },

];

const devApproachItems = [
    {
        title: "Custom Development",
        description: "Custom web development services is the best for full control over their website. You can build features based on your exact requirements without limitations.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.5312 0C33.7445 0 25 8.74453 25 19.5312V0H0V5.46875C0 16.2555 8.74453 25 19.5312 25H0V50H5.46875C16.2555 50 25 41.2555 25 30.4688V50H50V44.5312C50 33.7445 41.2555 25 30.4688 25H50V0H44.5312Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: "Low Code Development",
        description: "Low code development is perfect if you want to launch without heavy coding. It works well when where speed is more than just customization.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.46875 0C16.2555 0 25 8.74453 25 19.5312C25 8.74453 33.7445 0 44.5312 0H50V30.4688C50 41.2555 41.2555 50 30.4688 50H19.5312C8.74453 50 0 41.2555 0 30.4688V0H5.46875Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: "Full Stack Development",
        description: "Full stack development services is best for complex websites that require both frontend and backend expertise.This approach is suitable for scalable products.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 37.5V50H12.5977L6.25 43.5547L0 37.5V25H12.5L25 37.5ZM50 37.5V50H37.5977L31.25 43.5547L25 37.5V25H37.5L50 37.5ZM25 12.5V25H12.5977L6.25 18.5547L0 12.5V0H12.5L25 12.5ZM50 12.5V25H37.5977L31.25 18.5547L25 12.5V0H37.5L50 12.5Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: "Headless CMS Development",
        description: "Headless CMS development is the best one for businesses that need flexible content management with multi channel delivery. It simply separates the content from frontend.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.75 31.25C47.2012 31.25 50 28.4512 50 25C50 21.5488 47.2012 18.75 43.75 18.75C40.2988 18.75 37.5 21.5488 37.5 25C37.5 28.4512 40.2988 31.25 43.75 31.25ZM25 31.25C28.4512 31.25 31.25 28.4512 31.25 25C31.25 21.5488 28.4512 18.75 25 18.75C21.5488 18.75 18.75 21.5488 18.75 25C18.75 28.4512 21.5488 31.25 25 31.25ZM6.25 31.25C9.70117 31.25 12.5 28.4512 12.5 25C12.5 21.5488 9.70117 18.75 6.25 18.75C2.79883 18.75 0 21.5488 0 25C0 28.4512 2.79883 31.25 6.25 31.25ZM43.75 50C47.2012 50 50 47.2012 50 43.75C50 40.2988 47.2012 37.5 43.75 37.5C40.2988 37.5 37.5 40.2988 37.5 43.75C37.5 47.2012 40.2988 50 43.75 50ZM25 50C28.4512 50 31.25 47.2012 31.25 43.75C31.25 40.2988 28.4512 37.5 25 37.5C21.5488 37.5 18.75 40.2988 18.75 43.75C18.75 47.2012 21.5488 50 25 50ZM6.25 50C9.70117 50 12.5 47.2012 12.5 43.75C12.5 40.2988 9.70117 37.5 6.25 37.5C2.79883 37.5 0 40.2988 0 43.75C0 47.2012 2.79883 50 6.25 50ZM43.75 12.5C47.2012 12.5 50 9.70117 50 6.25C50 2.79883 47.2012 0 43.75 0C40.2988 0 37.5 2.79883 37.5 6.25C37.5 9.70117 40.2988 12.5 43.75 12.5ZM25 12.5C28.4512 12.5 31.25 9.70117 31.25 6.25C31.25 2.79883 28.4512 0 25 0C21.5488 0 18.75 2.79883 18.75 6.25C18.75 9.70117 21.5488 12.5 25 12.5ZM6.25 12.5C9.70117 12.5 12.5 9.70117 12.5 6.25C12.5 2.79883 9.70117 0 6.25 0C2.79883 0 0 2.79883 0 6.25C0 9.70117 2.79883 12.5 6.25 12.5Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: "Progressive Web Applications",
        description: "Progressive web apps are built to focus on mobile without building native apps. PWAs load quickly and smoothly work on different devices.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0C11.192 0 0 11.192 0 25C0 38.808 11.192 50 25 50C38.808 50 50 38.808 50 25C50 11.192 38.808 0 25 0ZM25 12.5C31.9037 12.5 37.5 18.0963 37.5 25C37.5 31.9037 31.9037 37.5 25 37.5C18.0963 37.5 12.5 31.9037 12.5 25C12.5 18.0963 18.0963 12.5 25 12.5Z" fill="currentColor" />
            </svg>
        ),
    },
];

const toolsData = [
    {
        name: "Google Play Console",
        icon: "/services/app-marketing-services/gc.webp"
    },
    {
        name: "Apple Ads", icon: "/services/app-marketing-services/ap.webp"
    },
    {
        name: "Firebase", icon: "/services/app-marketing-services/f.webp"
    },
    {
        name: "AppsFlyer", icon: "/services/app-marketing-services/af.webp"
    },
    { name: "Google Trends", icon: "/services/app-marketing-services/gt.webp" },
    { name: "Google Analytics 4", icon: "/services/app-marketing-services/g.webp" },
    { name: "App Radar", icon: "/services/app-marketing-services/r.webp" },
    { name: "Google Ads", icon: "/services/app-marketing-services/ga.webp" },
    { name: "Meta Ads Manager", icon: "/services/app-marketing-services/ma.webp" },
    { name: "TikTok Ads Manager", icon: "/services/app-marketing-services/t.webp" },
    { name: "YouTube Ads", icon: "/services/app-marketing-services/y.webp" },
    { name: "App Tweak", icon: "/services/app-marketing-services/at.webp" },
];

const webDesignProcess = [
    {
        step: "01",
        title: "Branding planning & research",
        desc: "Mobile app branding plays a vital role in the creation of the app’s specifications in terms of tone, voice, design, icons, and visuals. It requires careful consideration of the connection between the users and the app. According to the statistics from Zippia, 33% of the revenue will be increased if the presentation of a brand is consistent and meets all the requirements. So, here our team collaborates effectively with the client to adhere to whether the brand reflects the core value of the app.",
    },
    {
        step: "02",
        title: "Sprint Planning foundation & UX",
        desc: "By sprint planning developers determine the product roadmap and analyze the total execution time. Our skillful scrum team reviews the backlog and prioritizes tasks to create a project management plan. Here, a mobile application agency assigns several tasks to team members as per their expertise and tracks the entire progress accordingly.",
    },
    {
        step: "03",
        title: "Prototyping user interface design",
        desc: "It is a process in which a preliminary visual mock-up look has been created that exhibits the mobile app’s initial design and purpose but does not hold functional code. And likewise, by implementing different types of prototypes it helps to test your app idea. Therefore, it is necessary to apply prototypes in the early stages of app development to rectify the concept and its process.",
    },
    {
        step: "04",
        title: "Iteration development",
        desc: "While conducting mobile app development, the experts of Dignite Studios will implement the best possible way to break down the project into smaller cycles to analyze planning, coding, testing, designing, and reviewing the app features and its functionality. Our development team proceeds with valuable feedback from stakeholders and executes the next iteration accordingly.",
    },
    {
        step: "05",
        title: "Testing testing & evaluation",
        desc: "Testing at all stages of the mobile app development process is the leading reassurance to eradicate serious bugs, stay up-to-date with the acquainted status, and make your esteem profound. There are multiple testing strategies that the Dignite development team performs during the development cycle of mobile apps.",
    },
    {
        step: "06",
        title: "Deployment go live",
        desc: "Mobile app deployment is not a singular event, but it consists of several steps. That includes preparing the app for distribution, packaging, setting up servers, and configuration to ensure that the app is ready for the intended platforms like iOS, Android, or another mobile operating system. Dignite Studios also verifies the process of updating and releasing new features, fixing bugs, or improving performances according to proven methods.",
    },
];

const metricsHighlights = [
    {
        icon: "/location/mobile-california/icons/ast.webp",
        title: "App Store Rankings",
        description: "Improve keyword visibility and category positioning to help users discover your app more easily within app marketplaces."
    },
    {
        icon: "/location/mobile-california/icons/opd.webp",
        title: "Organic App Downloads",
        description: "Increase organic installs through ASO optimization, stronger app store presence, and improved discoverability."
    },
    {
        icon: "/location/mobile-california/icons/cpi.webp",
        title: "Cost Per Install (CPI)",
        description: "Reduce acquisition costs by optimizing audience targeting, campaign performance, and conversion-focused app promotion"
    },
    {
        icon: "/location/mobile-california/icons/urr.webp",
        title: "User Retention Rate",
        description: "Standardizes data exchange across healthcare systems for seamless interoperability."
    },
    {
        icon: "/location/mobile-california/icons/arr.webp",
        title: "App Ratings & Reviews",
        description: "Enables secure data exchange with hospital and third-party systems."
    },
    {
        icon: "/location/mobile-california/icons/clv.webp",
        title: "Customer Lifetime Value (LTV)",
        description: "Encrypts patient data during storage and transmission."
    }
];

const whyChooseHighlights = [
    {
        icon: "/services/app-marketing-services/1.webp",
        number: "01",
        title: "Data-Driven App Growth Strategies",
        desc: "Every decision is guided by data, audience insights, and performance metrics to maximize campaign effectiveness and business growth."
    },
    {
        icon: "/services/app-marketing-services/2.webp",

        number: "02",
        title: "Expertise Across iOS & Android Platforms",
        desc: "We apply tested marketing frameworks that improve lead generation, customer acquisition, and overall campaign performance across industries."
    },
    {
        icon: "/services/app-marketing-services/3.webp",
        number: "03",
        title: "Proven User Acquisition Frameworks",
        desc: "Our specialists manage integrated campaigns across SEO, PPC, social media, content marketing, and other high-performing digital channels."
    },
    {
        icon: "/services/app-marketing-services/4.webp",
        number: "04",
        title: "ASO & App Visibility Specialists",
        desc: "Work with experienced professionals focused on understanding your goals, optimizing campaigns, and delivering measurable business outcomes."
    },
    {
        icon: "/services/app-marketing-services/5.webp",
        number: "05",
        title: "Reputation & Retention Focused Approach",
        desc: "Our strategies are designed to grow with your business, supporting expansion while maintaining efficiency and marketing performance."
    },
    {
        icon: "/services/app-marketing-services/6.webp",
        number: "06",
        title: "Transparent Reporting",
        desc: "Unlike many digital marketing agencies, we continuously refine campaigns and provide transparent reporting to improve ROI and long-term results."
    }
];

const industriesValueProps = [
    {
        title: "Healthcare",
        desc: "Healthcare businesses require the type of websites where patients and clients can easily book appointments. Get a team that build secure websites to improve accessibility.",
    },
    {
        title: "Ecommerce",
        desc: "E commerce websites are built to sell products online and manage inventory while providing smooth shopping experiences. Build scalable and smooth online stores with us.",
    },
    {
        title: "Real Estate Industry",
        desc: "Real estate websites are built so that buyers and sellers can explore and sell properties. While connecting with agents. We create websites with property listings, search functionality, lead generation features.",
    },
    {
        title: "Education & EdTech",
        desc: "EdTech organizational websites make learning resources accessible. We develop digital platforms that support student interactions, course delivery, admissions, communication.",
    },
    {
        title: "Travel & Hospitality",
        desc: "Travel websites showcase destinations, accommodations, services. All while making bookings accessible for customers. Build websites with us that provide clear information.",
    },
    {
        title: "Food & Restaurant Businesses",
        desc: "Food and restaurant websites offer menus, orders placement, reservations. Build websites with us that improve customer convenience while helping restaurants increase visibility.",
    },
    {
        title: "SaaS & Technology",
        desc: "SaaS and tech companies need websites that can clearly communicate their products and features. So, with us develop websites that support lead generation and product growth.",
    },
    {
        title: "Matchmaking & Dating",
        desc: "Matchmaking and dating platforms need secure websites that encourage smoother interactions. Build websites with us that that support user registration, profile management, communication.",
    },
];

const mobileAppBenefits = [
    {
        title: "Better User Experience",
        desc: "Offering better user experience means your visitors can easily understand your website. A website that is responsive and easy to use keeps users engaged for longer.",
        icon: <FaGlobe color="#F15C20" size={25} />,
    },
    {
        title: "Better Brand Credibility",
        desc: "Stronger brand credibility requires a professional looking website that shows the quality of your business. Visitors are going to judge a company from its online presence.",
        icon: <FaSyncAlt color="#F15C20" size={25} />,
    },
    {
        title: "Search Visibility",
        desc: "Improved search visibility means your website can be easily found online by your potential customers. Professional website development improves website speed and mobile responsiveness.",
        icon: <FaChartBar color="#F15C20" size={25} />,
    },
    {
        title: "Higher Conversion Rates",
        desc: "Higher conversion rates mean more website visitors take valuable actions. Professional website development improves page structure and CTAs.",
        icon: <FaUserCheck color="#F15C20" size={25} />,
    },
    {
        title: "Enhanced Website Security",
        desc: "Better website security protects your website, customer information and business data from potential threats. Professional development includes all the required security measures.",
        icon: <FaChartLine color="#F15C20" size={25} />,
    },
];

const testimonialsData = [
    {
        name: "James Carter",
        designation: "— Marketing Director, BrightEdge Solutions",
        review: "“Our website is faster now and infact, quite easier for customers to use. We’ve literally seen better inquiries too.”",
    },
    {
        name: "Harvey Frank",
        designation: "— CEO, Nova Retail Group",
        review: "“The team honestly understood the assignment and got us a website that fits our business perfectly.”",
    },
    {
        name: "Michael Brown",
        designation: "— Operations Manager, CoreTech Systems",
        review: "“We were dealing with some performance issues, but the new website they built runs smoothly and feels a lot more reliable.”",
    },
    {
        name: "Emily Johnson",
        designation: "— Founder, UrbanNest Realty",
        review: "“The design is clean and simple, and our customers find it much easier to navigate now.”",
    },
    {
        name: "Daniel Kim",
        designation: "— Product Manager, Nexa Digital",
        review: "“They were easy to work with and delivered exactly what we asked for without any confusion.”",
    },
    {
        name: "Ana Cater",
        designation: "— Business Head, Horizon Wellness",
        review: "“Our website finally feels modern and stable. It’s definitely helping us reach more customers online.”",
    }
];

const faqsData = [
    {
        id: 1,
        question: "What are website design and development services?",
        answer: "Through the website design and development services, you can build websites with the help of experts that create an online presence for your business. Design focuses on how the website looks and the development focuses on how it works. These websites that are built through custom web development services are used for generating leads."
    },
    {
        id: 2,
        question: "How much longer does it take for building a website?",
        answer: "The timeline is usually highly dependent on the business and features requirements. A simple, basic website can take a few weeks or days. It can also take several months if you’re going for custom or ecommerce websites. Each stage takes time to ensure quality and usability. When requirements are clear and feedback is quick, faster timelines are possible."
    },
    {
        id: 3,
        question: "An existing website can be redesigned?",
        answer: "Yes. An existing website can be fully redesigned. You can improve an existing website’s design and performance. Basically, a website redesign include the updates in layout, navigation, mobile responsiveness. A redesign can also fix usability issues. Speed, update technology, alignment with new business goals can be done. Businesses usually choose to redesign a website when it looks outdated."
    },
    {
        id: 4,
        question: "How to know if your business website needs a redesign?",
        answer: "Your website needs a redesign if it feels outdated and slow. More clear signs include poor mobile experience, low engagement, declining traffic, weak conversion rates. It is going to to affect your growth if your website no longer reflects your brand or business goals. A redesign is also needed when competitors have better performing websites."
    },
    {
        id: 5,
        question: "What to choose between custom web development services or a no code platform?",
        answer: "Custom development and no code platforms are built for different business needs. Custom development is perfect for businesses that need long term flexibility. While the no code platforms are better for simple websites and MVPs. However, no code platforms have limitations in functionality. Simply, making a choice depends on your goals and budget."
    },
    {
        id: 6,
        question: "What makes a website successful in 2026?",
        answer: "In 2026 your website should be mobile friendly and highly secure. It should be focusing on user experience. Your website should load in secs, work smoothly and make it easy for the users to take action. Your website’s success in 2026 is highly dependant on how well it adapts to changing digital trends and customer expectations. Find out more through our web development consulting."
    },
    {
        id: 7,
        question: "Can website improve or impact lead generation?",
        answer: "Your website has a major impact on your entire process of lead generation. Through effective web development, you can create websites that guide users toward taking action. So, a well built website improves user experience through clear navigation. Mobile friendly design and optimized layouts increase engagement. When your website is actually focused on conversions, it can turns visitors into leads."
    }
];

const AppMarketingServices = () => {
    return (
        <div className="max-w-screen-2xl mx-auto gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
            <Hero />
            <About
                heading="Accelerate Mobile Growth with Expert App"
                heading2="Marketing"
                para={
                    <>At Dignite Studios, we help businesses maximize app performance through data-driven app marketing services designed to increase downloads, visibility, and user engagement. With over 10 years of experience in digital growth and performance marketing, our team creates tailored strategies for both Android and iOS applications. From user acquisition and app store optimization to retention campaigns and reputation management, we focus on driving measurable results at every stage of the user journey. Our proven approach helps brands improve discoverability, boost engagement, increase retention, and achieve stronger ROI through sustainable mobile growth strategies that turn installs into loyal users.

                    </>
                }
                button="Talk to Our App Marketing Experts"
            />

            <Services
                header="Comprehensive App Marketing  "
                header2="Services"
                para="Our team also delivers the modern mobile products which are built with the flutter for the speed, performance and the scalability. Dignite studios designs the top flutter app development services for the startups and enterprises that want the long term value and reliable cross platform experiences."
                button="Start Growing Your App"
                services={webDesignServices}
            />
            <MetricsCarousel
                header="Key App Growth Metrics We Help "
                header2="Improve"
                button="Improve Your App Performance"
                para="Successful app marketing is driven by measurable growth. We focus on improving the metrics that directly impact app visibility, acquisition, engagement, retention, and long-term revenue performance."
                data={metricsHighlights}
            />
            <ToolsAndTech
                header="App Marketing Tools & Platforms We "
                header2="Use"
                subtitle="Dignite Studios leverages industry-leading app marketing platforms, analytics tools, attribution software, and optimization technologies to help mobile applications achieve sustainable growth and measurable performance."
                tools={toolsData}
            />
            <Process
                steps={webDesignProcess}
                header="Proven App Marketing "
                header2="Process"
                btn={'Get a Free Consultation'}

                para="Our Miami mobile app development process follows structured steps designed for speed clarity and measurable outcomes for every project."
            />

            {/* <Comparison /> */}
            <Bussiness
                header="Why Choose "
                header2="Dignite Studios?"
                button="Partner With Dignite Studios"
                para="As a leading digital marketing services company, we combine strategy, creativity, and analytics to deliver measurable growth. Our team helps businesses outperform competitors with some of the best digital marketing services, backed by proven results and industry expertise."
                bs={whyChooseHighlights}
            />
            <Industries
                header="Paid Advertising Solutions Across  "
                header2="Industries"
                para="We design Top Flutter solutions across the multiple business sectors with the performance and also compliance in mind."
                VALUE_PROPOSITION={industriesValueProps}
                button={" Discuss Your App Growth Goals"}
            />
            <MobileApp
                cards={mobileAppBenefits}
                header="Benefits of App  "
                header2="Marketing"
                para="Flutter apps help businesses grow faster through better user engagement and performance."
                button="Discuss your website requirements."
            />
            <SuccessStories
                header="App Marketing "
                header2="Success Stories"
                para="Built by the top flutter app development company, these projects show how smart an execution, clean design and scalable engineering which help businesses which improve performance, user engagement and the long term product growth across the industries. "
            />
            <AppMarketingServicesCTA />
            <Testimonials
                header2="Services"
                header="What Clients Say About Our App Marketing "
                test={testimonialsData}
                button="Work With Our App Growth Experts"
                para="Businesses trust the Dignite Studios for the clarity, performance and delivery. From the startups to enterprises, our clients share how our Flutter solutions improved speed, scalability and the real business outcomes compared to other flutter app development companies across the different industries. "
            />
            <Faq faqs={faqsData} header="FAQs " para={'Quick answers to common questions around pricing, timelines, engagement models, confidentiality, and technical expertise—designed to give clarity upfront and make the collaboration process smooth and transparent.'} />
            <ContactUs
                img="/services/web-design/ccta.webp"
                pathname="Web Design"
                header="Your Website Needs This Upgrade!"
                para="Talk to our experts and tell us more about your project. So we build exactly what you need. The team is trained to convert the information in a customized website strategy."
                btn="Get Free Consultation"
            />
        </div>
    );
};

export default AppMarketingServices;

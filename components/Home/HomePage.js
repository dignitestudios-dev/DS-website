"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect, useState, lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import GlobalLoader from "@/components/global/GlobalLoader";

// Above the fold: server-rendered on purpose. With `ssr: false` the <h1> only
// existed once JS had run, which is what pushed LCP's render delay to 2.3s and
// caused the layout shift as the placeholder was replaced. These two render
// identically either way — neither touches window/document, and the heading is
// not inside an animated wrapper, so the markup is the same, just earlier.
const Hero = dynamic(() => import("@/components/Home/Hero"));
const MobileAppServices = dynamic(() => import("@/components/Home/MobileAppServices"));

// Below the fold stays client-only: it keeps their JS off the critical path.

const SuccessStories = dynamic(() => import("./SuccessStories"), { ssr: false });
const Bussiness = dynamic(() => import("./Bussiness"), { ssr: false });
const Process = dynamic(() => import("./Process"), { ssr: false });
const Industries = dynamic(() => import("./Industries"), { ssr: false });
const TechTools = dynamic(() => import("./TechTools"), { ssr: false });
const Impact = dynamic(() => import("./Impact"), { ssr: false });
const Testimonials = dynamic(() => import("./Testimonials"), { ssr: false });
const ProductDesign = dynamic(() => import("./ProductDesign"), { ssr: false });
const GlobalPresence = dynamic(() => import("./GlobalPresence"), { ssr: false });
const Faq = dynamic(() => import("@/components/Home/Faq"), { ssr: false });
const ContactUs = dynamic(() => import("./ContactUs"), { ssr: false });

const LoadingFallback = () => <div className="w-full min-h-[400px]" />;

export default function HomePage() {
  const { palette, theme } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <GlobalLoader />}
      <div className="w-full max-w-screen-2xl mx-auto h-auto flex flex-col items-center justify-center gap-20 md:gap-28 pb-20" style={{ overflowAnchor: 'none' }}>
        <Hero />
        <MobileAppServices />
        {/* <Suspense fallback={<LoadingFallback />}> */}
        <SuccessStories />
        {/* </Suspense> */}
        {/* <Suspense fallback={<LoadingFallback />}> */}
        <Bussiness />
        {/* </Suspense> */}
        {/* <Suspense fallback={<LoadingFallback />}> */}
        <Process />
        {/* </Suspense> */}
        {/* <Suspense fallback={<LoadingFallback />}> */}
        <Industries />
        {/* </Suspense> */}
        {/* <Suspense fallback={<LoadingFallback />}> */}
        <TechTools />
        {/* </Suspense> */}
        {/* <Suspense fallback={<LoadingFallback />}> */}
        <Impact />
        {/* </Suspense> */}
        {/* <Suspense fallback={<LoadingFallback />}> */}
        <Testimonials />
        {/* </Suspense> */}
        {/* <Suspense fallback={<LoadingFallback />}> */}
        <ProductDesign />
        {/* </Suspense> */}
        {/* <Suspense fallback={<LoadingFallback />}> */}
        <GlobalPresence />
        {/* </Suspense> */}
        {/* <Suspense fallback={<LoadingFallback />}> */}
        <Faq />
        {/* </Suspense> */}
        {/* <Suspense fallback={<LoadingFallback />}> */}
        <ContactUs header={"Your Next Big Project is Just a Call Away!"} para={"Big ideas deserve expert execution. Connect with our team and take the first step toward launching your amazing project."} img="/cc.webp" btn={"Schedule a Call"} />
        {/* </Suspense> */}
      </div>
    </>
  );
}

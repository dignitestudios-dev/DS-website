"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect, lazy, Suspense } from "react";
import Hero from "@/components/Home/Hero";
import MobileAppServices from "@/components/Home/MobileAppServices";

const SuccessStories = lazy(() => import("./SuccessStories"));
const Bussiness = lazy(() => import("./Bussiness"));
const Process = lazy(() => import("./Process"));
const Industries = lazy(() => import("./Industries"));
const TechTools = lazy(() => import("./TechTools"));
const Impact = lazy(() => import("./Impact"));
const Testimonials = lazy(() => import("./Testimonials"));
const ProductDesign = lazy(() => import("./ProductDesign"));
const GlobalPresence = lazy(() => import("./GlobalPresence"));
const Faq = lazy(() => import("@/components/Home/Faq"));
const ContactUs = lazy(() => import("./ContactUs"));

const LoadingFallback = () => <div className="w-full min-h-[400px]" />;

export default function HomePage() {
  const { palette, theme } = useContext(GlobalContext);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  
  return (
    <div className="w-full max-w-screen-2xl mx-auto h-auto flex flex-col items-center justify-center  pb-32" style={{ overflowAnchor: 'none' }}>
      <Hero />
      <MobileAppServices />
      <Suspense fallback={<LoadingFallback />}>
        <SuccessStories />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Bussiness />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Process />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Industries />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TechTools />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Impact />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ProductDesign />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <GlobalPresence />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Faq />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ContactUs header={"Your Next Big Project is Just a Call Away!"} para={"Big ideas deserve expert execution. Connect with our team and take the first step toward launching your amazing project."} img="/cc.png" btn={"Schedule a Call"} />
      </Suspense>
    </div>
  );
}

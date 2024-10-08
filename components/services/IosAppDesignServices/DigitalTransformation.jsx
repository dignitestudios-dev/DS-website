import ContactButton from "@/components/global/ContactButton";
import Script from "next/script";
import React from "react";

const DigitalTransformation = () => {
  return (
    <div className="w-full global-padding-horizontal py-10 lg:py-20">
      <div className="w-full flex flex-wrap gap-y-10">
        <div className="w-full lg:w-[60%]">
          <h2 className="headings-size my-4">
            <div className="flex flex-col leading-none mb-5">
              <span className="text-[#F15C20] text-[20px] mb-1 tracking-normal font-bold uppercase">
                digital
              </span>
              <img
                src="/digital-lines.webp"
                alt="lines"
                width={"81px"}
                height={"auto"}
              />
            </div>
            Transformation Agency
          </h2>
          <p className="text-sm md:text-[18px] font-normal leading-[26.46px]">
            With years of experience, our top-notch iOS app design services
            establish a well-organized platform for your app idea. We value
            credibility, believability, and innovation in your application for
            prevailing modernized tools and technologies.
          </p>

          <div className="mt-5">
            <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex justify-center">
          <div className="w-[295px] h-[539px] relative">
            <img
              src="/ios-app-mobile-sketch.png"
              alt="ios app mobile sketch"
              width={295}
              height={399}
              className="mx-auto h-[539px] object-contain absolute inset-0 z-20 overflow-hidden"
            />
            <video
              className="bg-transparent absolute inset-0 h-[97%] z-10 top-2"
              width={295}
              height={399}
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              preload="auto"
              poster="/ios-mobile-app-mobile-video-thumbnail.webp"
            >
              <source src="/final-web-vid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Script
        type="application/ld+json"
        id="video-schema-ios"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "ios mobile app call receiving",
            description: "ios mobile app call receiving transaction video",
            thumbnailUrl:
              "https://www.dignitestudios.com/ios-mobile-app-mobile-video-thumbnail.webp",
            uploadDate: "2024-09-01",
            duration: "PT0M14S",
            contentUrl: "https://www.dignitestudios.com/final-web-vid.mp4",
          }),
        }}
      />
    </div>
  );
};

export default DigitalTransformation;

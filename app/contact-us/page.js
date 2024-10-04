import ContactUsPage from "@/components/ContactUs/ContactUsPage";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Contact Us | Dignite Studios",
  description:
    "Get a quick consultation over your mobile app development idea with Dignite's aspiring team.",
};

const page = () => {
  return (
    <>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="canonical"
          href="https://www.dignitestudios.com/contact-us"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.dignitestudios.com/contact-us"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.dignitestudios.com/contact-us"
        />
        <link
          rel="alternate"
          hreflang="en-gb"
          href="https://www.dignitestudios.com/contact-us"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.dignitestudios.com/contact-us"
        />
        <meta http-equiv="content-language" content="en-us" />
        <meta http-equiv="content-language" content="en-ca" />
        <meta http-equiv="content-language" content="en-gb" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1" />
        <meta name="bingbot" content="index, follow, max-snippet: -1 " />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dignite Studios" />
        <meta property="og:title" content="Contact Us | Dignite Studios" />
        <meta
          property="og:description"
          content="Get a quick consultation over your project idea with Dignite's aspiring team."
        />
        <meta
          property="og:url"
          content="https://www.dignitestudios.com/contact-us"
        />
        <meta
          property="og:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-contact-us.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact Us - Dignite Studios" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Dignite Studios" />
        <meta name="twitter:site" content="@dignitestudios" />
        <meta
          name="twitter:description"
          content="Get a quick consultation over your project idea with Dignite's aspiring team."
        />
        <meta
          name="twitter:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-contact-us.webp"
        />
        <meta name="twitter:image:alt" content="Contact Us - Dignite Studios" />
      </head>
      <div>
        <GlobalLayout page={<ContactUsPage />} />
      </div>
    </>
  );
};

export default page;

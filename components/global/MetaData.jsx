// components/MetaLayout.js
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const MetaData = ({ children, pageTitle, pageDescription }) => {
  const router = useRouter();
  const canonicalUrl = `https://www.dignitestudios.com${router.asPath}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Add other common meta tags here */}
      </Head>
      {children}
    </>
  );
};

export default MetaData;

import PrivacyPolicyPage from "@/components/PrivacyPolicy/PrivacyPolicyPage";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Privacy Policy | Dignite Studios",
  description:
    "This Privacy Policy strictly implements to secure the shared data of our valuable clients by all means.",
};

const page = () => {
  return <GlobalLayout page={<PrivacyPolicyPage />} />;
};

export default page;

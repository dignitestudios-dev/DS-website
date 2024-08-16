import TermsPage from "@/components/TermsAndConditions/TermsPage";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Terms And Conditions | Dignite Studios",
  description:
    "Dignite's terms and conditions signifies the rules we follow to maintain vulnerability of the development process for our clients and users.",
};

const page = () => {
  return <GlobalLayout page={<TermsPage />} />;
};

export default page;

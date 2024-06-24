import React from "react";
import InfluentialHero from "./InfluentialHero";
import OurValueExpeditionSection from "./OurValueExpeditionSection";
import ConsultingStrategiesSection from "./ConsultingStrategiesSection";
import DevelopmentConsultingStrategies from "./DevelopmentConsultingStrategies";
import MobileAppDesignCaseStudies from "../MobileAppDesignServices/MobileAppDesignCaseStudies";
import DriveBusiness from "./DriveBusiness";
import InfluentialFaqs from "./InfluentialFaqs";
import InfluentialChooseUs from "./InfluentialChooseUs";

const InfluentialMobileAppConsultingServicesPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <InfluentialHero />
      <OurValueExpeditionSection />
      <ConsultingStrategiesSection />
      <DevelopmentConsultingStrategies />
      <MobileAppDesignCaseStudies />
      <InfluentialChooseUs/>
      <DriveBusiness />
      <InfluentialFaqs />
    </div>
  );
};

export default InfluentialMobileAppConsultingServicesPage;

import React from 'react';
import { Poppins } from 'next/font/google';
import Hero from './Hero';
import Discovery from './Discovery';
import Research from './Research';
import Challenges from './Challenges';
import Solutions from './Solutions';
import Wireframes from './Wireframes';
import BrandIdentity from './BrandIdentity';
import TechStack from './TechStack';
import LandingPage from './LandingPage';
import Results from './Results';
import CTA from './CTA';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
});

const RightAway = () => {
  return (
    <div className={`w-full bg-[#151515] gap-10 flex flex-col lg:gap-32 -mt-40 overflow-x-hidden ${poppins.variable} font-poppins`}>
  

      <Hero />
      <Discovery />
      <Research />
      <Challenges />
      <Wireframes />
      <BrandIdentity />
      <TechStack />
      <LandingPage />
      <Solutions />
      {/* <Results /> */}
      <CTA />
    </div>
  );
};

export default RightAway;

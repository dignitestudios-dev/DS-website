import Link from "next/link";

const services = [
  {
    icon: "database",
    icon2: "database1",
    title: <Link href="/services/ios-app-development-services" className="underline">iOS App Development</Link>,
    description: (
      <>
        Our <Link href="/services/ios-app-development-services" className="underline">iOS</Link> team delivers smooth and secure applications for iPhone and iPad
        users through advanced practices as a mobile app development company in
        Chicago, focused on speed, stability, and a premium user experience.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: <Link href="/services/android-app-development-services" className="underline">Android App Development</Link>,
    description: (
      <>
        We build scalable and reliable mobile products as a trusted <Link href="/services/mobile-app-development-services" className="underline">mobile app
        development company</Link> in Chicago, ensuring consistent performance across
        different screen sizes, user behaviors, and real-world conditions.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: <Link href="/technologies/cross-platform-app-development" className="underline">Cross-Platform / Hybrid Development</Link>,
    description: (
      <>
        As a trusted mobile app development company in Chicago, we create
        <Link href="/technologies/cross-platform-app-development" className="underline"> cross-platform applications</Link> from a single codebase to reduce time to
        market while maintaining native-level performance.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: <Link href="/services/native-app-development-services" className="underline">Native App Development</Link>,
    description: (
      <>
        Our engineers focus on performance and device-level optimization by
        following professional <Link href="/services/native-app-development-services" className="underline">native mobile app development</Link> standards for
        complex business applications.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: <Link href="/services/mobile-app-design-services" className="underline">UI/UX Design Services</Link>,
    description: (
      <>
        We design engaging interfaces through research-driven <Link href="/services/mobile-app-design-services" className="underline">mobile app design
        services</Link> that improve usability, user retention, and visual consistency
        across platforms.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: <Link href="/services/mobile-app-consulting-services" className="underline">Maintenance & Consulting</Link>,
    description: (
      <>
        From strategy to long-term scaling, our team provides expert <Link href="/services/mobile-app-consulting-services" className="underline">mobile app
        development consulting</Link> through testing, updates, and post-launch
        performance improvements.
      </>
    ),
  },
];

export default services;
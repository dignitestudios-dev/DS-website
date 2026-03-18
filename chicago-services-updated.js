import Link from "next/link";

const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "iOS App Development",
    description: (
      <>
        Our iOS team delivers smooth and secure applications for iPhone and iPad
        users through advanced practices as a mobile app development company in
        Chicago, focused on speed, stability, and a premium user experience with our{" "}
        <Link href="/services/ios-app-development-services" className="underline">
          iOS app development services
        </Link>
        .
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        We build scalable and reliable mobile products as a trusted mobile app
        development company in Chicago, ensuring consistent performance across
        different screen sizes, user behaviors, and real-world conditions through our{" "}
        <Link href="/services/android-app-development-services" className="underline">
          Android app development services
        </Link>
        .
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Cross-Platform / Hybrid Development",
    description: (
      <>
        As a trusted mobile app development company in Chicago, we create
        cross-platform applications from a single codebase to reduce time to
        market while maintaining native-level performance with our{" "}
        <Link href="/technologies/cross-platform-app-development" className="underline">
          cross-platform app development
        </Link>{" "}
        and{" "}
        <Link href="/services/hybrid-app-development-services" className="underline">
          hybrid app development services
        </Link>
        .
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Native App Development",
    description: (
      <>
        Our engineers focus on performance and device-level optimization by
        following professional{" "}
        <Link href="/services/native-app-development-services" className="underline">
          native mobile app development
        </Link>{" "}
        standards for complex business applications.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "UI/UX Design Services",
    description: (
      <>
        We design engaging interfaces through research-driven{" "}
        <Link href="/services/mobile-app-design-services" className="underline">
          mobile app design services
        </Link>{" "}
        that improve usability, user retention, and visual consistency
        across platforms.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance & Consulting",
    description: (
      <>
        From strategy to long-term scaling, our team provides expert{" "}
        <Link href="/services/mobile-app-consulting-services" className="underline">
          mobile app development consulting
        </Link>{" "}
        through testing, updates, and{" "}
        <Link href="/services/mobile-application-support-and-maintenance-services" className="underline">
          post-launch performance improvements
        </Link>
        .
      </>
    ),
  },
];

export default services;
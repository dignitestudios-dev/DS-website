import Link from "next/link";

const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "iOS App Development",
    description: (
      <>
        Our team makes sure that we provide the best{" "}
        <Link href="/services/ios-app-development-services" className="underline">
          iOS app development services
        </Link>
        , so we use Swift and SwiftUI to create reliable iPhone apps.
        Apps that easily meet Apple's performance standards. We focus on
        building smooth and reliable apps
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        When building Android apps, we make sure they're built through Kotlin
        and Java. The QA team tests the application on different Android devices
        to ensure that your app works just as well in the practical world as it
        does in development. That's how we make sure to provide you with the{" "}
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
    title: "Hybrid App Development",
    description: (
      <>
        The team uses Flutter and React Native to build apps for iOS and Android
        from a single codebase. This helps startups reduce development costs.
        Also while delivering a consistent user experience across platforms with our{" "}
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
        For products that need deeper performance and control, we offer{" "}
        <Link href="/services/native-app-development-services" className="underline">
          native app development services
        </Link>
        , including fully custom mobile apps and PWAs.
        This approach is ideal when your product needs tighter integrations,
        better speed, and long-term flexibility.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "UI/UX Design Services",
    description: (
      <>
        Choosing the UI/UX design? Dignite Studios'{" "}
        <Link href="/services/mobile-app-design-services" className="underline">
          mobile app design services
        </Link>{" "}
        focus on simple experiences that users actually enjoy. Our designers
        design user-friendly interfaces for both iOS and Android that support
        your product goals.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance & Consulting",
    description: (
      <>
        Launching is just the beginning. We support startups with MVP
        development services, ongoing post-launch support, and a reliable QA
        testing service to catch issues early and keep your app running
        smoothly. From performance improvements to feature updates, our
        experienced mobile app developers Boston founders trust work alongside
        you as your product evolves and scales with our{" "}
        <Link href="/services/mobile-app-consulting-services" className="underline">
          mobile app consulting services
        </Link>{" "}
        and{" "}
        <Link href="/services/mobile-application-support-and-maintenance-services" className="underline">
          maintenance services
        </Link>
        .
      </>
    ),
  },
];

export default services;
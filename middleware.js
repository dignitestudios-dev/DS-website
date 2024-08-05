import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Define an array of paths that should be redirected
  const redirects = [
    { oldPath: "/flutter-gray.webp", newPath: "/" },
    { oldPath: "/flutter-color.webp", newPath: "/" },
    {
      oldPath: "/services/web-app-development-services",
      newPath: "/services/web-application-development-services",
    },
    { oldPath: "/our-vision-value", newPath: "/about-us" },
    { oldPath: "/get-quote", newPath: "/contact-us" },
    {
      oldPath: "/app-development",
      newPath: "/services/mobile-app-development-services",
    },
    {
      oldPath: "/web-designing",
      newPath: "/services/mobile-app-design-services",
    },
    // New redirects
    { oldPath: "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2", newPath: "/" },
    { oldPath: "/case-study-4", newPath: "/" },
    { oldPath: "/case-study-3", newPath: "/" },
    { oldPath: "/comments/feed", newPath: "/" },
    { oldPath: "/blog/category/branding/feed", newPath: "/" },
    {
      oldPath:
        "/blog/monetization-for-your-mobile-app-strategies-and-best-practices",
      newPath: "/",
    },
    { oldPath: "/blog/category/branding", newPath: "/" },
    { oldPath: "/case-study-8", newPath: "/" },
    {
      oldPath: "/blog/ai-content-writing-tools-top-5-best-and-their-impacts",
      newPath: "/",
    },
    {
      oldPath:
        "/blog/the-revolution-of-3d-printing-from-prototyping-to-mass-production",
      newPath: "/",
    },
    { oldPath: "/case-study-2", newPath: "/" },
    { oldPath: "/?s=%7Bsearch_term_string%7D", newPath: "/" },
    { oldPath: "/add-video", newPath: "/" },
    { oldPath: "/blog/category/app-design", newPath: "/" },
    {
      oldPath: "/blog/the-ultimate-guide-to-hybrid-mobile-app-development",
      newPath: "/",
    },
    { oldPath: "/case-study-5", newPath: "/" },
    { oldPath: "/case-study-1", newPath: "/" },
    { oldPath: "/graphic-videos", newPath: "/" },
    { oldPath: "/blog/category/uncategorized", newPath: "/" },
    { oldPath: "/blog/2023/01/05", newPath: "/" },
    {
      oldPath:
        "/blog/personal-branding-in-the-digital-age-building-an-online-presence",
      newPath: "/",
    },
    { oldPath: "/case-study-7", newPath: "/" },
    { oldPath: "/blog/category/graphic-design", newPath: "/" },
    { oldPath: "/blog/category/web-design", newPath: "/" },
    {
      oldPath: "/blog/cloud-computing-the-advantages-disadvantages",
      newPath: "/",
    },
    { oldPath: "/blog/2023/05/30", newPath: "/" },
    { oldPath: "/blog/category/marketing", newPath: "/" },
    { oldPath: "/prototyping", newPath: "/" },
    { oldPath: "/faq", newPath: "/" },
    {
      oldPath: "/blog/10-types-of-software-development-you-need-to-know",
      newPath: "/",
    },
    { oldPath: "/branding", newPath: "/" },
    { oldPath: "/our-journey", newPath: "/" },
    {
      oldPath:
        "/blog/monetization-for-your-mobile-app-strategies-and-best-practices/feed",
      newPath: "/",
    },
    { oldPath: "/process", newPath: "/" },
    { oldPath: "/our-awards", newPath: "/" },
    { oldPath: "/blog", newPath: "/" },
    { oldPath: "/sales-marketing", newPath: "/" },
    {
      oldPath:
        "/blog/the-revolution-of-3d-printing-from-prototyping-to-mass-production/feed",
      newPath: "/",
    },
    {
      oldPath: "/blog/app-development-trends-will-make-you-stand-out-in-2023",
      newPath: "/",
    },
    {
      oldPath: "/blog/ui-design-how-your-business-can-benefit-from-it",
      newPath: "/",
    },
    {
      oldPath: "/blog/what-is-visual-hierarchy-and-why-is-it-important",
      newPath: "/",
    },
    { oldPath: "/wp-json/elementskit/v1", newPath: "/" },
    {
      oldPath: "/blog/is-getting-a-ccna-certification-worth-2023/feed",
      newPath: "/",
    },
    { oldPath: "/blog/2022/11/19", newPath: "/" },

    {
      oldPath: "/services/android-app-development",
      newPath: "/lp/android-app-development",
    },
    {
      oldPath: "/services/web-app-development",
      newPath: "/lp/web-app-development",
    },
    {
      oldPath: "/services/mobile-app-development",
      newPath: "/lp/mobile-app-development",
    },
    {
      oldPath: "/services/ios-app-development",
      newPath: "/lp/ios-app-development",
    },
    {
      oldPath: "/sitemap.xml",
      newPath: "/sitemap_index.xml",
    },
    {
      oldPath: "/web-development",
      newPath: "/services/web-application-development-services",
    },
    {
      oldPath: "/mobile-development",
      newPath: "/services/mobile-app-development-services",
    },
    {
      oldPath: "/case-study-6",
      newPath: "services/mobile-app-development-services",
    },
    {
      oldPath: "/blog/is-getting-a-ccna-certification-worth-2023",
      newPath: "/services/android-app-development-services",
    },
  ];

  // Find the redirect that matches the current pathname
  const redirect = redirects.find((r) => r.oldPath === pathname);

  if (redirect) {
    // Redirect to the new URL
    return NextResponse.redirect(new URL(redirect.newPath, request.url));
  }

  // Allow other requests to proceed as normal
  return NextResponse.next();
}

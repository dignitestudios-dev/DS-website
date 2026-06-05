export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/db";
import BlogPost from "@/lib/BlogPost";

const WEBSITE_URL = "https://www.dignitestudios.com";

const STATIC_PAGES = [
  { url: "/", priority: 1.0, changeFrequency: "daily" },
  { url: "/about-us", priority: 0.8 },
  { url: "/contact-us", priority: 0.8 },
  { url: "/faqs", priority: 0.8 },
  { url: "/case-studies", priority: 0.8 },
  { url: "/case-studies/harmonious-learning", priority: 0.8 },
  { url: "/case-studies/bioyap", priority: 0.8 },
  { url: "/case-studies/wing", priority: 0.8 },
  { url: "/case-studies/home-hero", priority: 0.8 },
  { url: "/case-studies/crew-roomz", priority: 0.8 },
  { url: "/case-studies/games-4-fun", priority: 0.8 },
  { url: "/blogs", priority: 0.9, changeFrequency: "daily" },
  // Services
  { url: "/services/mobile-app-development", priority: 0.8 },
  { url: "/services/web-app-development", priority: 0.8 },
  { url: "/services/progressive-web-app-development", priority: 0.8 },
  { url: "/services/android-app-development", priority: 0.8 },
  { url: "/services/ios-app-development", priority: 0.8 },
  { url: "/services/native-app-development", priority: 0.8 },
  { url: "/services/mobile-application-support-and-maintenance-services", priority: 0.8 },
  { url: "/services/mobile-app-consultation", priority: 0.8 },
  { url: "/services/hybrid-app-development", priority: 0.8 },
  { url: "/services/generative-ai-development", priority: 0.8 },
  { url: "/services/hire-mobile-application-developers", priority: 0.8 },
  { url: "/services/hire-android-application-developers", priority: 0.8 },
  { url: "/services/hire-ios-application-developers", priority: 0.8 },
  { url: "/services/mobile-app-testing-services", priority: 0.8 },
  { url: "/services/top-mobile-app-development", priority: 0.8 },
  // Technologies
  { url: "/technologies/react-native-app-development", priority: 0.8 },
  { url: "/technologies/flutter-app-development", priority: 0.8 },
  { url: "/technologies/cross-platform-app-development", priority: 0.8 },
  { url: "/technologies/ai-automation-services", priority: 0.8 },
  // Industries
  { url: "/industries/food-industry", priority: 0.8 },
  { url: "/industries/real-estate-app-development", priority: 0.8 },
  { url: "/industries/healthcare-app-development", priority: 0.8 },
  { url: "/industries/dating-app-development", priority: 0.8 },
  { url: "/industries/entertainment-app-development", priority: 0.8 },
  // Locations
  { url: "/locations/mobile-app-development-new-york", priority: 0.8 },
  { url: "/locations/mobile-app-development-california", priority: 0.8 },
  { url: "/locations/mobile-app-development-seattle", priority: 0.8 },
  { url: "/locations/mobile-app-development-miami", priority: 0.8 },
  { url: "/locations/mobile-app-development-tampa", priority: 0.8 },
  { url: "/locations/mobile-app-development-chicago", priority: 0.8 },
  { url: "/locations/mobile-app-development-boston", priority: 0.8 },
  { url: "/locations/mobile-app-development-washington", priority: 0.8 },
  { url: "/locations/mobile-app-development-charlotte", priority: 0.8 },
  { url: "/locations/mobile-app-development-texas", priority: 0.8 },
  // Ecommerce
  { url: "/ecommerce/shopify-app-development", priority: 0.8 },
  { url: "/ecommerce/ecommerce-app-development", priority: 0.8 },
  { url: "/ecommerce/shopify-store-development", priority: 0.8 },
  { url: "/ecommerce/woo-commerce-development", priority: 0.8 },
  { url: "/ecommerce/big-commerce-development", priority: 0.8 },
  { url: "/ecommerce/shopify-integration-development", priority: 0.8 },
  { url: "/ecommerce/shopify-migration-services", priority: 0.8 },
  // Legal
  { url: "/terms-and-conditions", priority: 0.4 },
  { url: "/privacy-policy", priority: 0.4 },
  { url: "/cookie-policy", priority: 0.4 },
];

export default async function sitemap() {
  let blogUrls = [];

  try {
    await connectDB();
    const posts = await BlogPost.find({ status: "published" })
      .select("slug updatedAt publishedAt")
      .lean();

    blogUrls = posts.map((post) => ({
      url: `${WEBSITE_URL}/blogs/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt || Date.now()),
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  } catch {
    // If DB is unavailable, return only static pages
  }

  const staticUrls = STATIC_PAGES.map(({ url, priority = 0.8, changeFrequency = "monthly" }) => ({
    url: `${WEBSITE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  return [...staticUrls, ...blogUrls];
}

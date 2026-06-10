import connectToDatabase from '@/lib/mongoose';
import BlogPost from '@/models/BlogPost';

export const revalidate = 3600; // Revalidate every hour

export default async function sitemap() {
  const baseUrl = 'https://dignitestudios.com';

  // Comprehensive static routes (migrated from old public/sitemap.xml)
  const routes = [
    '',
    '/case-studies',
    '/contact-us',
    '/services/mobile-app-development',
    '/services/web-app-development',
    '/services/progressive-web-app-development',
    '/services/android-app-development',
    '/services/ios-app-development',
    '/services/native-app-development',
    '/services/mobile-application-support-and-maintenance-services',
    '/services/mobile-app-consultation',
    '/services/hybrid-app-development',
    '/services/generative-ai-development',
    '/services/hire-mobile-application-developers',
    '/services/hire-android-application-developers',
    '/services/hire-ios-application-developers',
    '/technologies/react-native-app-development',
    '/technologies/flutter-app-development',
    '/technologies/cross-platform-app-development',
    '/technologies/ai-automation-services',
    '/industries/food-industry',
    '/industries/real-estate-app-development',
    '/industries/healthcare-app-development',
    '/industries/dating-app-development',
    '/industries/entertainment-app-development',
    '/locations/mobile-app-development-new-york',
    '/locations/mobile-app-development-california',
    '/locations/mobile-app-development-seattle',
    '/locations/mobile-app-development-miami',
    '/locations/mobile-app-development-tampa',
    '/locations/mobile-app-development-chicago',
    '/locations/mobile-app-development-boston',
    '/locations/mobile-app-development-washington',
    '/locations/mobile-app-development-charlotte',
    '/locations/mobile-app-development-texas',
    '/ecommerce/shopify-app-development',
    '/ecommerce/ecommerce-app-development',
    '/ecommerce/shopify-store-development',
    '/ecommerce/woo-commerce-development',
    '/ecommerce/big-commerce-development',
    '/ecommerce/shopify-integration-development',
    '/ecommerce/shopify-migration-services',
    '/about-us',
    '/case-studies/harmonious-learning',
    '/case-studies/bioyap',
    '/case-studies/wing',
    '/case-studies/home-hero',
    '/case-studies/crew-roomz',
    '/case-studies/games-4-fun',
    '/faqs',
    '/terms-and-conditions',
    '/privacy-policy',
    '/services/mobile-app-testing-services',
    '/services/top-mobile-app-development',
    '/blog', // The new blog index
  ];

  const staticSitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  try {
    await connectToDatabase();
    
    // Fetch all published blogs
    const blogs = await BlogPost.find({ status: 'published' })
      .select('slug updatedAt')
      .lean();

    const blogSitemap = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.updatedAt || new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    return [...staticSitemap, ...blogSitemap];
  } catch (error) {
    console.error('Failed to generate dynamic blog sitemap:', error);
    // Fallback to returning just the static routes if DB connection fails
    return staticSitemap;
  }
}

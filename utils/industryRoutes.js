// Industry title to route mapping
export const getIndustryRoute = (title) => {
  const titleLower = title.toLowerCase();
  
  // Healthcare variations
  if (titleLower.includes('healthcare') || titleLower.includes('health')) {
    return '/industries/healthcare-app-development';
  }
  
  // Dating/Matchmaking variations
  if (titleLower.includes('dating') || titleLower.includes('matchmaking')) {
    return '/industries/dating-app-development';
  }
  
  // Real Estate variations
  if (titleLower.includes('real estate') || titleLower.includes('property')) {
    return '/industries/real-estate-app-development';
  }
  
  // Food/Restaurant variations
  if (titleLower.includes('food') || titleLower.includes('restaurant') || titleLower.includes('delivery')) {
    return '/industries/food-industry';
  }
  
  // Entertainment variations
  if (titleLower.includes('entertainment') || titleLower.includes('media') || titleLower.includes('gaming')) {
    return '/industries/entertainment-app-development';
  }
  
  // E-commerce variations
  if (titleLower.includes('ecommerce') || titleLower.includes('e-commerce') || titleLower.includes('retail') || titleLower.includes('shopping')) {
    return '/ecommerce/ecommerce-app-development';
  }
  
  // Default fallback to contact page if no match found
  return '/contact-us';
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable Next.js built-in image optimization to improve LCP/FCP.
    // Images served from /public will be optimized automatically.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // One minute meant the optimizer re-encoded images for almost every
    // visitor. The URLs are content-hashed by the build id, so a long TTL is
    // safe — a changed image gets a new URL.
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion', 'swiper'],
    optimizeCss: true,
  },
  trailingSlash: false,
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  // NOTE: the custom splitChunks override was removed here. Its `commons`
  // group used minChunks:2 with no `chunks: "async"`, so every module shared by
  // two others — including the lazily-loaded homepage sections — was hoisted
  // into a single eagerly-loaded chunk. That chunk reached 1 MB uncompressed
  // and was 91% unused on the homepage, which defeated the dynamic imports.
  // Next's default chunking keeps async boundaries intact.
};

module.exports = nextConfig;

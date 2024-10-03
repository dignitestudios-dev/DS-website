/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    path: "https://dignitestudios.com/",
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Apply these headers to all routes
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self';",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

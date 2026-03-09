/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    path: "https://dignitestudios.com/",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  swcMinify: true,
};

module.exports = nextConfig;

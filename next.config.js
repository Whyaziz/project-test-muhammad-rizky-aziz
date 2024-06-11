/** @type {import('next').NextConfig} */

const { createProxyMiddleware } = require("http-proxy-middleware");
const nextConfig = {
  images: {
    domains: ["placehold.co", "assets.suitdev.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ideas",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

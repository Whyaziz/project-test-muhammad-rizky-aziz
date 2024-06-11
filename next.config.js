/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co"],
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

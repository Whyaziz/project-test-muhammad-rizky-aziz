/** @type {import('next').NextConfig} */
const nextConfig = {
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

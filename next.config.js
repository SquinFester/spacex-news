/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/feed/tech",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/feed/tech",
        permanent: true,
      },
      {
        source: "/explore",
        destination: "/explore/tech",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

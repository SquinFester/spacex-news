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
    ];
  },
};

module.exports = nextConfig;

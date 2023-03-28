/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",

  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

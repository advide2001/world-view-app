/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/w320/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/commons/thumb/**",
      },
    ],
  },
};

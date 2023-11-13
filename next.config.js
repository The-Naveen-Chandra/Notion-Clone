/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["files.edgestore.dev"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

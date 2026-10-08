/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-images-1.medium.com"],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    // Old resume URLs from both portfolios point to the hosted PDF
    return ["/resume.pdf", "/Aryan-Agarwal-Resume.pdf"].map((source) => ({
      source,
      destination:
        "https://cdn.jsdelivr.net/gh/aryankush25/aryankush25@main/Aryan_Agarwal_Resume.pdf",
      permanent: false,
    }));
  },
};

module.exports = nextConfig;

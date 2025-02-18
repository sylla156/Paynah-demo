import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    // add also the  vercel domains
    // add also the  vercel domains
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
  // Ensure proper handling of file watching in Docker
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

module.exports = nextConfig;

export default nextConfig;

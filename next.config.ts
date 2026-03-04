import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Trailing slash false (default)
  trailingSlash: false,
};

export default nextConfig;

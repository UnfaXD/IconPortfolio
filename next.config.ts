import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "assets.aceternity.com", pathname: "/**", protocol: "https" },
      { hostname: "images.unsplash.com", pathname: "/**", protocol: "https" },
      { hostname: "tailwindui.com", pathname: "/**", protocol: "https" },
      { hostname: "cdn.dribbble.com", pathname: "/**", protocol: "https" },
      { hostname: "media.licdn.com", pathname: "/**", protocol: "https" },
      { hostname: "api.microlink.io", pathname: "/**", protocol: "https" },
    ],
  },
};

export default nextConfig;
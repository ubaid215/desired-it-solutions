import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["uncured-snowshoe-trusting.ngrok-free.dev"], // add this line
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow development from local network IP
  allowedDevOrigins: ['192.168.1.189'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

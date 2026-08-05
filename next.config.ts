import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats — AVIF for best compression, WebP as fallback
    formats: ["image/avif", "image/webp"],
    // Responsive breakpoints matching common mobile/tablet/desktop widths
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    qualities: [75, 80, 85, 100],
    remotePatterns: [],
  },
};

export default nextConfig;

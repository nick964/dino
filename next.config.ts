import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allowed values for next/image `quality` prop (Next 16 requires this).
    qualities: [75, 85],
  },
};

export default nextConfig;

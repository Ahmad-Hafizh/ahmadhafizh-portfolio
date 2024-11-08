import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // config next/Image for using https
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
};

export default nextConfig;

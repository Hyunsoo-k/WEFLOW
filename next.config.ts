import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  useFileSystemPublicRoutes: false,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spinnaker.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

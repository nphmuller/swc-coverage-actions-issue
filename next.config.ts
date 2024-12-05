import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    swcPlugins: [["swc-plugin-coverage-instrument", {}]],
  },
};

export default nextConfig;

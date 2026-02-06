import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/shoe-fit-biomechanics",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

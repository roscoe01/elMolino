import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/elMolino",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/elMolino",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
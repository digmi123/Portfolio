// next.config.ts
import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const repoName = "Portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Required for static export
  images: {
    unoptimized: true, // Disable default image optimization (needed for `next export`)
  },
  assetPrefix: isProd ? `/${repoName}/` : "",
  basePath: isProd ? `/${repoName}` : "",

  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;

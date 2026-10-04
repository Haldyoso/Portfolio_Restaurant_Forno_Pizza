import type { NextConfig } from "next";

const pages = process.env.GITHUB_PAGES === "true";
const basePath = pages
  ? process.env.NEXT_PUBLIC_BASE_PATH || "/Portfolio_Restaurant_Forno_Pizza"
  : "";

const nextConfig: NextConfig = {
  devIndicators: false,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(pages && {
    output: "export",
    trailingSlash: true,
    images: {
      loader: "custom",
      loaderFile: "./src/lib/static-image-loader.ts",
    },
  }),
};

export default nextConfig;

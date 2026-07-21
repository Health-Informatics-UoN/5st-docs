import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: "out",
  output: "export",
  basePath: "",
  assetPrefix: "",
};

// Set up Nextra with its configuration
const withNextra = nextra({
  search: false,
});

// Export the final Next.js config with Nextra included
export default withNextra({
  ...nextConfig,
});

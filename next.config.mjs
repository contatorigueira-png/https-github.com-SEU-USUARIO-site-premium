/** @type {import('next').NextConfig} */

// When BUILD_STATIC=true (used by the GitHub Pages workflow) we emit a fully
// static export. basePath/assetPrefix are derived from the repo name so the
// site works under https://<owner>.github.io/<repo>/ without 404s on assets.
const isStatic = process.env.BUILD_STATIC === "true";
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isStatic
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
        basePath,
        assetPrefix: basePath || undefined,
      }
    : {}),
};

export default nextConfig;

import type { NextConfig } from "next";

// Fully static site: `next build` writes plain HTML/CSS/JS to ./out (no Node server needed).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  // Branded, localized 404 (src/app/global-not-found.tsx); needed because the only root layout is [lang].
  experimental: { globalNotFound: true },
};

// Build workers re-load this file and inherit env, so the flag keeps the warning to one line.
if (!process.env.NEXT_PUBLIC_SITE_URL?.trim() && !process.env.MP_SITE_URL_WARNED) {
  process.env.MP_SITE_URL_WARNED = "1";
  console.warn("⚠ NEXT_PUBLIC_SITE_URL is not set — canonical, hreflang, og:url/og:image and JSON-LD url are omitted. Set it before deploying.");
}

export default nextConfig;

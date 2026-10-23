import type { MetadataRoute } from "next";

// Project detail pages are still WIP, so only the main pages are listed
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/projects", "/contact"].map((path) => ({
    url: `https://www.braydenbarter.dev${path}`,
  }));
}

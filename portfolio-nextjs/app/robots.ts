import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/readme/",
    },
    sitemap: "https://kennedymerrelose.vercel.app/sitemap.xml",
  };
}

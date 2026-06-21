import { APP_URL } from "@/lib/constants";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/api/", "/admin/", "/r/"],
    },
    sitemap: `${APP_URL}/sitemap.xml`,
  };
}

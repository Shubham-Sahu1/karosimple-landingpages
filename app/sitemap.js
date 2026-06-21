import { APP_URL } from "@/lib/constants";

export default async function sitemap() {
  const routes = ["", "/pricing", "/about", "/contact", "/privacy", "/terms", "/refund-policy", "/grievance"].map(
    (route) => ({
      url: `${APP_URL}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route === "" || route === "/pricing" ? "daily" : "weekly",
      priority: route === "" ? 1.0 : route === "/pricing" ? 0.8 : 0.5,
    })
  );

  return routes;
}

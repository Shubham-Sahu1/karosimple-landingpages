/**
 * SoftwareApplication schema for Karo Simple
 * Enables star rating display in Google SERP for the app
 * Add to Homepage and Pricing page
 */
export const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Karo Simple",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  url: "https://karosimple.in",
  description:
    "QR-based multi-platform review and reputation management platform for Indian businesses. Grow reviews on Google, Zomato, Swiggy, Justdial, and more.",
  offers: [
    {
      "@type": "Offer",
      name: "Free Plan",
      price: "0",
      priceCurrency: "INR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://karosimple.in/pricing",
    },
    {
      "@type": "Offer",
      name: "Starter Plan",
      price: "999",
      priceCurrency: "INR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://karosimple.in/pricing",
    },
    {
      "@type": "Offer",
      name: "Pro Plan",
      price: "2499",
      priceCurrency: "INR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://karosimple.in/pricing",
    },
    {
      "@type": "Offer",
      name: "Agency Plan",
      price: "6999",
      priceCurrency: "INR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://karosimple.in/pricing",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
};

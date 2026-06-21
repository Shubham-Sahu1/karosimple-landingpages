/**
 * Organization schema for Karo Simple
 * Add to root layout or homepage
 * Enables Google Knowledge Panel
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Karo Simple",
  url: "https://karosimple.in",
  logo: "https://karosimple.in/logo.svg",
  description:
    "AI-powered Google review management platform for Indian businesses. Helps SMBs collect more 5-star reviews using QR codes.",
  foundingDate: "2024",
  areaServed: "IN",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@karosimple.in",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.instagram.com/karosimple",
    "https://www.linkedin.com/company/karosimple",
  ],
};

import { homeFAQs, billingFAQs } from "@/data/faq";

/**
 * FAQPage schema — creates expandable FAQ section in Google Search results
 * This is the highest-ROI schema for a marketing site (20-30% more CTR)
 */
export function buildFaqPageSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Pre-built schemas for each FAQ context
export const homeFaqSchema = buildFaqPageSchema(homeFAQs);
export const billingFaqSchema = buildFaqPageSchema(billingFAQs);

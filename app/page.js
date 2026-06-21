import React from "react";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProblemStorySection } from "@/components/sections/ProblemStorySection";
import { PainComparisonSection } from "@/components/sections/PainComparisonSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { PlatformIntegrations } from "@/components/sections/PlatformIntegrations";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ROICalculatorSection } from "@/components/sections/ROICalculatorSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingPreviewSection } from "@/components/sections/PricingPreviewSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/components/seo/schemas/organization";
import { softwareAppSchema } from "@/components/seo/schemas/softwareApp";
import { homeFaqSchema } from "@/components/seo/schemas/faqPage";

export const metadata = {
  title: "Karo Simple - Turn Every Happy Customer Into a 5-Star Review Automatically",
  description:
    "QR-based review routing for Indian businesses. Direct happy customers to post reviews on Google, Zomato, Swiggy, Justdial, and more in seconds. Private feedback forms protect your reputation.",
  alternates: {
    canonical: "https://karosimple.in",
  },
  openGraph: {
    title: "Karo Simple - Turn Every Happy Customer Into a 5-Star Review Automatically",
    description:
      "QR-based review routing for Indian businesses. Direct happy customers to post reviews on Google, Zomato, Swiggy, Justdial, and more in seconds. Private feedback forms protect your reputation.",
    url: "https://karosimple.in",
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <JsonLd data={organizationSchema} />
      <JsonLd data={softwareAppSchema} />
      <JsonLd data={homeFaqSchema} />

      {/* Navigation Header */}
      <MarketingNav />

      {/* Main Persuasion Funnel Layout */}
      <main className="flex-grow">
        {/* SECTION 2: HERO */}
        <HeroSection />

        {/* SECTION 3: STATS STRIP */}
        <StatsStrip />

        {/* SECTION 4: FEATURES */}
        <FeaturesSection />

        {/* SECTION 5: PROBLEM STORY */}
        <ProblemStorySection />

        {/* SECTION 6: PAIN COMPARISON */}
        <PainComparisonSection />

        {/* SECTION 7: HOW IT WORKS */}
        <HowItWorksSection />

        {/* SECTION 8: BEFORE VS AFTER REVIEWS */}
        <BeforeAfterSection />

        {/* SECTION 9: PLATFORM INTEGRATIONS */}
        <PlatformIntegrations />

        {/* SECTION 10: INDUSTRIES */}
        <IndustriesSection />

        {/* SECTION 11: ROI CALCULATOR */}
        <ROICalculatorSection />

        {/* SECTION 12: WHO IT IS FOR (TESTIMONIALS PLACEHOLDER) */}
        <TestimonialsSection />

        {/* SECTION 13: PRICING PREVIEW */}
        <PricingPreviewSection />

        {/* SECTION 14: FAQ ACCORDION */}
        <FAQSection />

        {/* SECTION 15: FINAL CTA */}
        <CTABannerSection />
      </main>

      {/* Footer Details */}
      <MarketingFooter />
    </>
  );
}

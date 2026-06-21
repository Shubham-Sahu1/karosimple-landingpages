import React from "react";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointSection } from "@/components/sections/PainPointSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SocialProofStrip } from "@/components/sections/SocialProofStrip";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingPreviewSection } from "@/components/sections/PricingPreviewSection";
import { TrustBarSection } from "@/components/sections/TrustBarSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/components/seo/schemas/organization";
import { softwareAppSchema } from "@/components/seo/schemas/softwareApp";
import { homeFaqSchema } from "@/components/seo/schemas/faqPage";

export const metadata = {
  title: "Karo Simple - Get 5-Star Reviews on Google, Zomato, Swiggy & More",
  description:
    "QR-based review routing for Indian businesses. Direct happy customers to post reviews on Google, Zomato, Swiggy, Justdial, and more in seconds. Free to start.",
  alternates: {
    canonical: "https://karosimple.in",
  },
  openGraph: {
    title: "Karo Simple - Get 5-Star Reviews on Google, Zomato, Swiggy & More",
    description:
      "QR-based review routing for Indian businesses. Direct happy customers to post reviews on Google, Zomato, Swiggy, Justdial, and more in seconds. Free to start.",
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
        {/* GRAB ATTENTION */}
        <HeroSection />

        {/* NAME THE PAIN */}
        <PainPointSection />

        {/* SHOW THE PROCESS */}
        <HowItWorksSection />

        {/* LIST FEATURES */}
        <FeaturesSection />

        {/* BUILD NUMERICAL PROOF */}
        <SocialProofStrip />

        {/* SHOW SOCIAL PROOF TESTIMONIALS */}
        <TestimonialsSection />

        {/* PRICING PREVIEW — ANCHOR FOR DECISION */}
        <PricingPreviewSection />

        {/* TRUST BAR — CITY COVERAGE + COMPLIANCE */}
        <TrustBarSection />

        {/* RESOLVE OBJECTIONS */}
        <FAQSection />

        {/* CLOSE THE DEAL */}
        <CTABannerSection />
      </main>

      {/* Footer Details */}
      <MarketingFooter />
    </>
  );
}

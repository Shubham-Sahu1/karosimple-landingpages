import React from "react";
import { FeatureCategoriesSection } from "@/components/sections/FeatureCategoriesSection";
import { FeatureCompareTable } from "@/components/sections/FeatureCompareTable";
import { AddOnsSection } from "@/components/sections/AddOnsSection";
import { REGISTER_URL } from "@/lib/constants";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";

export const metadata = {
  title: "Features — Karo Simple | Everything Your Reputation Needs",
  description:
    "From the QR code your customer scans to the 5-star review that shows up on Google — Karo Simple handles the whole thing. See every feature that makes it work.",
};

// How It Works steps
const steps = [
  {
    number: "01",
    icon: "📱",
    heading: "Customer scans your QR code",
    body: "They pull out their phone, scan the code at your counter or table, and land on a clean, branded page. No app to download, no account to create.",
  },
  {
    number: "02",
    icon: "⭐",
    heading: "Happy ones go straight to Google",
    body: "Customers who rate you 4 or 5 stars get taken directly to your Google listing to post their review. Karo Simple shows them a review suggestion so the words come easily.",
  },
  {
    number: "03",
    icon: "🔒",
    heading: "Unhappy ones come to you privately",
    body: "Ratings of 1 to 3 stars never reach Google. The customer gets a private form instead, and you get notified so you can follow up and resolve it.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <MarketingNav />
      <main>
      {/* ── SECTION 1: HERO ── */}
      <section className="bg-[#1B2A4A] pt-24 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

          {/* Eyebrow badge */}
          <span className="inline-block bg-[rgba(61,170,114,0.15)] text-[#3DAA72] text-[0.75rem] font-semibold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-6">
            Everything your reputation needs, in one place
          </span>

          {/* H1 */}
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            One platform to collect, manage
            <br />
            <span className="text-[#3DAA72]">and grow your reviews.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[1.125rem] text-white/75 max-w-[600px] mx-auto leading-relaxed mb-10">
            From the QR code your customer scans to the 5-star review that shows up on Google — Karo Simple handles the whole thing. Here is every feature that makes it work.
          </p>

          {/* CTA */}
          <a
            href={REGISTER_URL}
            className="inline-flex items-center gap-2 bg-[#3DAA72] hover:bg-[#2D8A5A] text-white font-semibold text-[1rem]
                       px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_4px_20px_rgba(61,170,114,0.35)]"
          >
            Start Free, No Card Needed →
          </a>
        </div>
      </section>

      {/* ── SECTION 2: HOW IT WORKS STRIP ── */}
      <section className="bg-[#253559] py-16 border-y border-[#3D4F72]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative pl-5 border-l-[3px] border-[#3DAA72]">
                {/* Faint background number */}
                <span className="absolute -top-2 -left-1 text-[4rem] font-extrabold text-[#3D4F72]/30 leading-none select-none pointer-events-none">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <span className="text-3xl mb-3 block">{step.icon}</span>
                  <h3 className="text-[1.375rem] font-semibold text-white mb-2 leading-snug">
                    {step.heading}
                  </h3>
                  <p className="text-[1rem] text-[#CBD5E1] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FEATURE CATEGORIES ── */}
      <FeatureCategoriesSection />

      {/* ── SECTION 4: FULL COMPARISON TABLE ── */}
      <FeatureCompareTable />

      {/* ── SECTION 5: ADD-ONS ── */}
      <AddOnsSection />

      {/* ── SECTION 6: BOTTOM CTA ── */}
      <section className="bg-[#1B2A4A] py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-[1.75rem] md:text-[2.75rem] font-extrabold text-white max-w-[640px] mx-auto leading-tight mb-5">
            You have seen every feature. Now see what it does for your rating.
          </h2>
          <p className="text-[1.125rem] text-white/70 max-w-[480px] mx-auto mb-8">
            Free to start. Takes 5 minutes to set up. Your first customers can be scanning today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={REGISTER_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3DAA72] hover:bg-[#2D8A5A]
                         text-white font-semibold text-[1rem] px-8 py-4 rounded-full transition-all duration-200
                         hover:shadow-[0_4px_20px_rgba(61,170,114,0.35)]"
            >
              Start Free, No Card Needed
            </a>
            <a
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                         border border-white/30 hover:bg-white/8 text-white font-semibold text-[1rem]
                         px-8 py-4 rounded-full transition-all duration-200"
            >
              Compare Plans →
            </a>
          </div>
          <p className="mt-7 text-[0.875rem] text-white/50">
            Free plan available forever · Cancel paid plans anytime · 100% Google-compliant
          </p>
        </div>
      </section>
    </main>
      <MarketingFooter />
    </>
  );
}

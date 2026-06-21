"use client";

import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { pricingPlans } from "@/data/pricing";
import { PricingCard } from "@/components/ui/PricingCard";
import { BillingToggle } from "@/components/ui/BillingToggle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGSAPReveal } from "@/hooks/useGSAPReveal";

export function PricingPreviewSection() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const sectionRef = useRef(null);

  useGSAPReveal(sectionRef, { stagger: 0.1, y: 40 });

  return (
    <section
      id="pricing-preview"
      ref={sectionRef}
      className="py-14 md:py-24 bg-ks-off-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center space-y-6 mb-12" data-reveal>
          <SectionHeading
            overline="Flexible Plans"
            title="Pricing That Grows With You"
            description="Start for free and upgrade as your review count grows. No hidden fees, no lock-in."
          />

          {/* Billing Toggle */}
          <div className="pt-2">
            <BillingToggle
              billingPeriod={billingPeriod}
              onChange={setBillingPeriod}
            />
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              monthlyPrice={plan.monthlyPrice}
              annualPriceMonthly={plan.annualPriceMonthly}
              description={plan.description}
              badge={plan.badge}
              features={plan.features}
              ctaText={plan.ctaText}
              isPopular={plan.isPopular}
              billingPeriod={billingPeriod}
            />
          ))}
        </div>

        {/* View full pricing CTA */}
        <div className="text-center" data-reveal>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 type-body-sm font-bold text-ks-green hover:text-ks-green-dark transition-colors group"
          >
            View Full Pricing & Feature Comparison
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
export default PricingPreviewSection;

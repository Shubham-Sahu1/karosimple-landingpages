"use client";

import React, { useState } from "react";
import { REGISTER_URL } from "@/lib/constants";

export function PricingPreviewSection() {
  const [cycle, setCycle] = useState("monthly");

  const plans = [
    {
      name: "Free",
      description: "Perfect to get started",
      price: {
        "monthly": 0,
        "half-yearly": 0,
        "annual": 0
      },
      features: [
        "1 Business Location",
        "1 Smart QR Code",
        "Up to 25 reviews/month",
        "Google Integration",
        "Basic Dashboard"
      ],
      ctaText: "Start Free",
      ctaHref: REGISTER_URL,
      isPopular: false,
    },
    {
      name: "Starter",
      description: "For growing businesses",
      price: {
        "monthly": 499,
        "half-yearly": 424,
        "annual": 374
      },
      features: [
        "1 Business Location",
        "3 Smart QR Codes",
        "Up to 100 reviews/month",
        "All Platforms Support",
        "Private Feedback Filter",
        "AI Review Suggestions"
      ],
      ctaText: "Get Started →",
      ctaHref: REGISTER_URL,
      isPopular: false,
    },
    {
      name: "Pro",
      description: "For serious growth",
      price: {
        "monthly": 999,
        "half-yearly": 849,
        "annual": 749
      },
      features: [
        "Up to 3 Locations",
        "Unlimited QR Codes",
        "Unlimited Reviews",
        "Advanced Analytics",
        "Review Response AI",
        "Priority Support",
        "WhatsApp Chat Support"
      ],
      ctaText: "Get Started →",
      ctaHref: REGISTER_URL,
      isPopular: true,
    },
    {
      name: "Agency",
      description: "For agencies & franchise chains",
      price: {
        "monthly": "Custom",
        "half-yearly": "Custom",
        "annual": "Custom"
      },
      features: [
        "Unlimited Sub-Businesses",
        "Shared Resource Pool",
        "Super-Admin Dashboard",
        "White-Label Option",
        "Dedicated Account Manager",
        "Custom Integrations"
      ],
      ctaText: "Talk to Us",
      ctaHref: "/contact",
      isPopular: false,
    }
  ];

  return (
    <section id="pricing" className="w-full bg-[#1B2A4A] py-20 md:py-28 px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
            PRICING
          </span>
          <h2 className="font-sans font-bold text-[2rem] md:text-[3rem] leading-tight text-white">
            Start free. Scale when you’re ready.
          </h2>
          <p className="font-sans text-[1.1rem] text-[#CBD5E1] max-w-[620px] mx-auto leading-relaxed">
            No credit card required. Cancel anytime. All plans include QR code + Google integration.
          </p>
        </div>

        {/* Billing Toggle (3 Pill Buttons) */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center bg-[#253559] border border-[#3D4F72] p-2 rounded-[20px] sm:rounded-full items-center gap-1 max-w-full mx-auto">
            <button
              onClick={() => setCycle("monthly")}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full font-sans font-bold text-[11px] sm:text-xs transition-colors duration-200 cursor-pointer outline-none ${
                cycle === "monthly"
                  ? "bg-[#3DAA72] text-white"
                  : "text-[#CBD5E1] hover:text-white bg-transparent"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setCycle("half-yearly")}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full font-sans font-bold text-[11px] sm:text-xs transition-colors duration-200 cursor-pointer outline-none ${
                cycle === "half-yearly"
                  ? "bg-[#3DAA72] text-white"
                  : "text-[#CBD5E1] hover:text-white bg-transparent"
              }`}
            >
              Half-Yearly (Save 15%)
            </button>
            <button
              onClick={() => setCycle("annual")}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full font-sans font-bold text-[11px] sm:text-xs transition-colors duration-200 cursor-pointer outline-none ${
                cycle === "annual"
                  ? "bg-[#3DAA72] text-white"
                  : "text-[#CBD5E1] hover:text-white bg-transparent"
              }`}
            >
              Annual (Save 25%)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-8">
          {plans.map((plan, i) => {
            const isCustom = plan.price[cycle] === "Custom";
            const priceDisplay = isCustom ? "Custom" : `₹${plan.price[cycle]}`;

            return (
              <div
                key={i}
                className={`bg-[#253559] border border-[#3D4F72] rounded-2xl p-6 lg:p-8 flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.02] ${
                  plan.isPopular
                    ? "border-[#3DAA72] shadow-[0_0_40px_rgba(61,170,114,0.08)]"
                    : "shadow-card"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-[#3DAA72] text-white font-sans font-bold text-[0.7rem] px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow">
                    ⭐ Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header info */}
                  <div className="space-y-2">
                    <span className="text-[0.75rem] font-bold text-[#6B7A99] uppercase tracking-wider">
                      {plan.name}
                    </span>
                    <div className="flex items-baseline gap-1 text-white">
                      <span className="font-sans font-extrabold text-[2.2rem] leading-none">
                        {priceDisplay}
                      </span>
                      {!isCustom && (
                        <span className="text-sm text-[#6B7A99] font-medium font-sans">/mo</span>
                      )}
                    </div>
                    <p className="font-sans text-[0.82rem] text-[#CBD5E1]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-b border-[#3D4F72]" />

                  {/* Features list */}
                  <ul className="space-y-3 font-sans text-[0.85rem] text-[#CBD5E1]">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#3DAA72] font-bold shrink-0">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  {plan.isPopular ? (
                    <a
                      href={plan.ctaHref}
                      className="block w-full text-center font-sans font-semibold text-[0.95rem] text-white bg-[#3DAA72] py-3.5 rounded-full hover:scale-[1.01] transition-transform shadow-[0_4px_12px_rgba(61,170,114,0.3)] hover:bg-[#2D8A5A]"
                    >
                      {plan.ctaText}
                    </a>
                  ) : (
                    <a
                      href={plan.ctaHref}
                      className="block w-full text-center font-sans font-semibold text-[0.95rem] text-[#F1F5F9] bg-transparent border border-[#3D4F72] py-3.5 rounded-full hover:border-[#CBD5E1] hover:bg-[#1B2A4A] transition-all duration-300"
                    >
                      {plan.ctaText}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingPreviewSection;

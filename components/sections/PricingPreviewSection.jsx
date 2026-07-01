"use client";

import React, { useState } from "react";
import Link from "next/link";
import { REGISTER_URL } from "@/lib/constants";

export function PricingPreviewSection() {
  const [cycle, setCycle] = useState("annual");

  const plans = [
    {
      name: "Free",
      description: "Perfect to get started",
      price: {
        "monthly": 0,
        "half-yearly": 0,
        "annual": 0
      },
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
      ctaText: "Get Started →",
      ctaHref: REGISTER_URL,
      isPopular: false,
    },
    {
      name: "Pro",
      description: "For serious growth",
      price: {
        "monthly": 1499,
        "half-yearly": 1274,
        "annual": 1124
      },
      ctaText: "Get Started →",
      ctaHref: REGISTER_URL,
      isPopular: true,
    },
    {
      name: "Agency",
      description: "For agencies & franchise chains",
      price: {
        "monthly": 4999,
        "half-yearly": 4249,
        "annual": 3749
      },
      ctaText: "Get Started →",
      ctaHref: REGISTER_URL,
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
          {/* <p className="font-sans text-[1.1rem] text-[#CBD5E1] max-w-[620px] mx-auto leading-relaxed">
            No credit card required. 
          </p> */}
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
            const priceDisplay = `₹${plan.price[cycle].toLocaleString("en-IN")}`;

            return (
              <Link
                key={i}
                href="/pricing"
                className={`bg-[#253559] border border-[#3D4F72] rounded-2xl p-6 lg:p-8 flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.02] cursor-pointer group/card ${
                  plan.isPopular
                    ? "border-[#3DAA72] shadow-[0_0_40px_rgba(61,170,114,0.08)] hover:shadow-[0_0_40px_rgba(61,170,114,0.2)]"
                    : "shadow-card hover:border-[#CBD5E1]"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-[#3DAA72] text-white font-sans font-bold text-[0.7rem] px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow">
                    ⭐ Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  {/* Header info */}
                  <div className="space-y-2">
                    <span className="text-[0.75rem] font-bold text-[#6B7A99] uppercase tracking-wider">
                      {plan.name}
                    </span>
                    <div className="flex items-baseline gap-1 text-white">
                      <span className="font-sans font-extrabold text-[2.2rem] leading-none">
                        {priceDisplay}
                      </span>
                      <span className="text-sm text-[#6B7A99] font-medium font-sans">/mo</span>
                    </div>
                    <p className="font-sans text-[0.82rem] text-[#CBD5E1]">
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  {plan.isPopular ? (
                    <div
                      className="block w-full text-center font-sans font-semibold text-[0.95rem] text-white bg-[#3DAA72] py-3.5 rounded-full group-hover/card:scale-[1.02] transition-transform shadow-[0_4px_12px_rgba(61,170,114,0.3)]"
                    >
                      {plan.ctaText}
                    </div>
                  ) : (
                    <div
                      className="block w-full text-center font-sans font-semibold text-[0.95rem] text-[#F1F5F9] bg-transparent border border-[#3D4F72] py-3.5 rounded-full group-hover/card:border-[#CBD5E1] group-hover/card:bg-[#1B2A4A] transition-all duration-300"
                    >
                      {plan.ctaText}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Compare Plans Link Button */}
        <div className="text-center pt-10">
          <Link
            href="/pricing"
            className="inline-block font-sans font-semibold text-[0.95rem] text-[#3DAA72] hover:text-white bg-transparent hover:bg-[#3DAA72] border border-[#3DAA72] px-8 py-3.5 rounded-full transition-all duration-300 transform hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(61,170,114,0.25)] outline-none"
          >
            Compare the plans
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PricingPreviewSection;

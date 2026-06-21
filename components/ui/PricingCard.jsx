"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { useRazorpay } from "@/hooks/useRazorpay";
import { REGISTER_URL } from "@/lib/constants";

export function PricingCard({
  name,
  monthlyPrice,
  annualPriceMonthly,
  description,
  badge,
  features,
  ctaText,
  isPopular,
  billingPeriod,
}) {
  const { processPayment, loading } = useRazorpay();

  const price = billingPeriod === "annual" ? annualPriceMonthly : monthlyPrice;

  const handleCtaClick = () => {
    if (price === 0) {
      // Direct deep link to register for free plan
      if (typeof window !== "undefined") {
        window.location.href = REGISTER_URL;
      }
      return;
    }
    // Launch Razorpay checkout overlay
    processPayment(name, price);
  };

  return (
    <div
      className={`relative bg-ks-white rounded-2xl p-8 flex flex-col justify-between border transition-all duration-300 h-full ${
        isPopular
          ? "border-ks-green shadow-pricing ring-1 ring-ks-green scale-102 z-10"
          : "border-ks-border shadow-sm hover:shadow-card hover:-translate-y-1"
      }`}
      data-reveal
    >
      {badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-ks-green text-ks-white text-[10px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-20">
          {badge}
        </span>
      )}

      <div className="space-y-6 text-left">
        <div>
          <h3 className="type-h3 text-ks-navy font-bold mb-1">{name}</h3>
          <p className="type-body-sm text-ks-muted min-h-[40px] leading-relaxed">{description}</p>
        </div>

        <div className="flex items-baseline text-ks-navy">
          <span className="type-price font-extrabold">₹{price}</span>
          <span className="type-body-sm text-ks-muted ml-2 font-semibold">
            /month
          </span>
        </div>

        {billingPeriod === "annual" && price > 0 && (
          <p className="type-body-sm text-ks-green font-semibold">
            Billed annually (₹{price * 12}/yr)
          </p>
        )}

        <hr className="border-ks-border" />

        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start space-x-3">
              {feature.included ? (
                <Check className="w-5 h-5 text-ks-green shrink-0 mt-0.5" />
              ) : (
                <X className="w-5 h-5 text-ks-red shrink-0 mt-0.5" />
              )}
              <span
                className={`type-body-sm leading-snug ${
                  feature.included ? "text-ks-navy" : "text-ks-muted line-through"
                }`}
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-4">
        <CTAButton
          variant={isPopular ? "primary" : "outline"}
          onClick={handleCtaClick}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Processing..." : ctaText}
        </CTAButton>
      </div>
    </div>
  );
}
export default PricingCard;

"use client";

import React, { useState } from "react";
import { pricingPlans } from "@/data/pricing";
import { pricingFAQs } from "@/data/faq";
import { FeatureCompareTable } from "@/components/sections/FeatureCompareTable";
import { AddOnsSection } from "@/components/sections/AddOnsSection";
import { REGISTER_URL, WHATSAPP_LINK } from "@/lib/constants";
import { ChevronDown, Check, ShieldCheck } from "lucide-react";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";

// ── Billing toggle options ──────────────────────────────────────────────────
const BILLING_OPTIONS = [
  { key: "monthly", label: "Monthly" },
  { key: "halfYearly", label: "Half-Yearly", badge: "Save 15%" },
  { key: "annual", label: "Annual", badge: "Save 25%" },
];

// ── Savings callout values ──────────────────────────────────────────────────
const SAVINGS_CALLOUT = {
  halfYearly: "Switch to half-yearly and save up to 15% vs monthly",
  annual: "Switch to annual and save up to 25% vs monthly",
};

// ── Single pricing card ─────────────────────────────────────────────────────
function PricingCard({ plan, billing }) {
  const priceData = plan[billing];
  const isMonthly = billing === "monthly";

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02]
        ${plan.isPopular
          ? "border-2 border-[#3DAA72] shadow-[0_0_40px_rgba(61,170,114,0.08)] bg-[#253559]"
          : "border-[#3D4F72] bg-[#253559]"
        }`}
    >
      {/* Most Popular badge */}
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-[#3DAA72] text-white text-[0.75rem] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow whitespace-nowrap">
            ⭐ Most Popular
          </span>
        </div>
      )}

      {/* Let's Talk badge for Custom */}
      {plan.isCustom && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-[#3DAA72] text-white text-[0.75rem] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow whitespace-nowrap">
            Let's Talk
          </span>
        </div>
      )}

      {/* Plan tier label */}
      <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#94A3B8]">
        {plan.name}
      </p>

      {/* Price block */}
      <div className="mb-2">
        {plan.isCustom ? (
          <p className="text-4xl font-extrabold text-white">Let's Talk</p>
        ) : (
          <>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-extrabold text-white">
                {isMonthly ? priceData.display : priceData.perMonth?.split("/")[0]}
              </span>
              {priceData.price !== null && priceData.price !== undefined && priceData.price > 0 && (
                <span className="text-[#94A3B8] text-lg mb-1.5">/mo</span>
              )}
            </div>
            {/* Billed as note */}
            {!isMonthly && priceData.billedAs && (
              <p className="text-[0.8125rem] text-[#94A3B8] mt-1">{priceData.billedAs}</p>
            )}
            {/* Annual bonus */}
            {billing === "annual" && plan.annualBonusAI && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {plan.annualBonusQR && (
                  <span className="text-[0.7rem] font-semibold bg-[rgba(61,170,114,0.15)] text-[#3DAA72] border border-[#3DAA72]/20 px-2 py-0.5 rounded-full">
                    🎁 {plan.annualBonusQR}
                  </span>
                )}
                {plan.annualBonusAI && (
                  <span className="text-[0.7rem] font-semibold bg-[rgba(61,170,114,0.15)] text-[#3DAA72] border border-[#3DAA72]/20 px-2 py-0.5 rounded-full">
                    🎁 {plan.annualBonusAI}
                  </span>
                )}
                {plan.annualBonusStaff && (
                  <span className="text-[0.7rem] font-semibold bg-[rgba(61,170,114,0.15)] text-[#3DAA72] border border-[#3DAA72]/20 px-2 py-0.5 rounded-full">
                    🎁 {plan.annualBonusStaff}
                  </span>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Ideal for */}
      <p className="text-[0.875rem] mb-5 text-[#CBD5E1]">
        {plan.idealFor}
      </p>

      <hr className="mb-5 border-[#3D4F72]" />

      {/* Feature list */}
      <ul className="space-y-2.5 flex-1 mb-7">
        {plan.highlights.map((feat, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check
              size={16}
              strokeWidth={2.5}
              className="mt-0.5 flex-shrink-0 text-[#3DAA72]"
            />
            <span className="text-[0.9rem] leading-snug text-[#CBD5E1]">
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={plan.isCustom ? "/contact" : REGISTER_URL}
        className={`w-full text-center font-semibold text-[0.95rem] py-3.5 rounded-full transition-all duration-300
          ${plan.isPopular
            ? "bg-[#3DAA72] text-white hover:bg-[#2D8A5A] shadow-[0_4px_12px_rgba(61,170,114,0.3)]"
            : "border border-[#3D4F72] text-[#F1F5F9] hover:border-[#CBD5E1] hover:bg-[#1B2A4A]"
          }`}
      >
        {plan.ctaText}
      </a>
    </div>
  );
}

// ── FAQ Item ────────────────────────────────────────────────────────────────
function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="bg-[#253559] border border-[#3D4F72] rounded-xl overflow-hidden transition-all duration-300">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[0.95rem] text-[#F1F5F9] hover:text-[#3DAA72] cursor-pointer transition-colors duration-200 outline-none select-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="pr-4">{item.question}</span>
        <ChevronDown
          size={20}
          className={`text-[#3DAA72] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 border-t border-[#3D4F72]/50 pt-4">
          <p className="text-[0.92rem] text-[#CBD5E1] leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Main Pricing Page ───────────────────────────────────────────────────────

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");
  const [openFAQ, setOpenFAQ] = useState("pfaq-1");

  const toggleFAQ = (id) => setOpenFAQ((prev) => (prev === id ? null : id));

  const standardPlans = pricingPlans.filter((p) => p.id !== "custom");
  const customPlan = pricingPlans.find((p) => p.id === "custom");

  const totalSavings = {
    halfYearly: "₹4,500",
    annual: "₹14,988",
  };

  return (
    <>
      <MarketingNav />
      <main>
      {/* ── SECTION 1: HERO ── */}
      <section className="bg-[#1B2A4A] pt-24 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

          {/* Eyebrow */}
          <span className="inline-block bg-[rgba(61,170,114,0.15)] text-[#3DAA72] text-[0.75rem] font-semibold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-6">
            Simple, honest pricing
          </span>

          {/* H1 */}
          <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-5">
            Start free.
            <br />
            Pay only when you are ready to grow.
          </h1>

          {/* Subheadline */}
          <p className="text-[1.125rem] text-white/75 max-w-[560px] mx-auto leading-relaxed mb-10">
            No hidden fees. No lock-in. All plans include your QR code and Google integration from day one.
          </p>

          {/* 3-option billing toggle */}
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center bg-[#253559] border border-[#3D4F72] p-2 rounded-[20px] sm:rounded-full items-center gap-1 max-w-full mx-auto">
              {BILLING_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setBilling(opt.key)}
                  className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-[11px] sm:text-xs transition-all duration-200 cursor-pointer outline-none flex items-center gap-1.5
                    ${billing === opt.key
                      ? "bg-[#3DAA72] text-white"
                      : "text-[#CBD5E1] hover:text-white bg-transparent"
                    }`}
                >
                  {opt.label}
                  {opt.badge && (
                    <span className={`text-[0.6rem] sm:text-[0.68rem] font-bold px-1.5 py-0.5 rounded-full
                      ${billing === opt.key ? "bg-white/20 text-white" : "bg-white/10 text-[#CBD5E1]"}`}>
                      {opt.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Savings callout pill */}
          {billing !== "monthly" && (
            <div className="mt-4">
              <span className="inline-block bg-[rgba(61,170,114,0.15)] text-[#3DAA72] border border-[#3DAA72]/20 text-sm font-semibold px-4 py-1.5 rounded-full">
                {SAVINGS_CALLOUT[billing]}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 2: PRICING CARDS ── */}
      <section className="bg-[#1B2A4A] py-16 border-t border-[#3D4F72]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {standardPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} billing={billing} />
            ))}
          </div>

          {/* Custom plan horizontal card */}
          {customPlan && (
            <div className="mt-8 bg-[#253559] border border-[#3D4F72] rounded-2xl p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 hover:scale-[1.01] transition-all duration-300">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-[#3DAA72] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full shadow shrink-0">
                    Let's Talk
                  </span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">{customPlan.name}</h3>
                </div>
                <p className="text-[0.9rem] text-[#CBD5E1] max-w-2xl font-medium">
                  {customPlan.idealFor} · {customPlan.highlights[5]}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2.5 mt-2">
                  {customPlan.highlights.slice(0, 5).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#3DAA72] shrink-0" />
                      <span className="text-[0.875rem] text-[#CBD5E1] leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-between sm:justify-start gap-4">
                <div className="text-left lg:text-right">
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#94A3B8] block mb-1">Pricing</span>
                  <span className="text-3xl font-extrabold text-white">Let's Talk</span>
                </div>
                <a
                  href="/contact"
                  className="w-full sm:w-auto text-center font-semibold text-[0.95rem] px-8 py-3.5 rounded-full transition-all duration-300 border border-[#3D4F72] text-[#F1F5F9] hover:border-[#CBD5E1] hover:bg-[#1B2A4A]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 3: FEATURE COMPARE TABLE ── */}
      <FeatureCompareTable />

      {/* ── SECTION 4: ADD-ONS ── */}
      <AddOnsSection />

      {/* ── SECTION 5: PRICING FAQ ── */}
      <section className="py-24 bg-[#1B2A4A] border-t border-[#3D4F72]/30">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 space-y-16">
          <div className="text-center space-y-4">
            <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
              FAQ
            </span>
            <h2 className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight">
              Questions people ask before signing up
            </h2>
            <p className="text-[1.1rem] text-[#CBD5E1] max-w-[620px] mx-auto leading-relaxed">
              If your question is not here, write to us on WhatsApp.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {pricingFAQs.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openFAQ === item.id}
                onToggle={() => toggleFAQ(item.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: BOTTOM CTA ── */}
      <section className="bg-[#1B2A4A] py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-[1.75rem] md:text-[2.75rem] font-extrabold text-white max-w-[580px] mx-auto leading-tight mb-5">
            Still unsure? Start free and see it working in your business today.
          </h2>
          <p className="text-[1.125rem] text-white/70 max-w-[480px] mx-auto mb-8">
            No credit card. No commitment. If it works (and it will), upgrading takes 30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={REGISTER_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#3DAA72] hover:bg-[#2D8A5A]
                         text-white font-semibold text-[1rem] px-8 py-4 rounded-full
                         transition-all duration-200 hover:shadow-[0_4px_20px_rgba(61,170,114,0.35)]"
            >
              Start Free Now
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                         border border-white/30 hover:bg-white/8 text-white font-semibold text-[1rem]
                         px-8 py-4 rounded-full transition-all duration-200"
            >
              <span>💬</span> Talk to Us on WhatsApp
            </a>
          </div>
          <p className="mt-7 text-[0.875rem] text-white/50">
            Trusted by businesses across India · Payments secured by Razorpay · Cancel anytime
          </p>
        </div>
      </section>
    </main>
      <MarketingFooter />
    </>
  );
}

"use client";

import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ShieldCheck, Lock, HelpCircle } from "lucide-react";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { pricingPlans } from "@/data/pricing";
import { billingFAQs } from "@/data/faq";
import { PricingCard } from "@/components/ui/PricingCard";
import { BillingToggle } from "@/components/ui/BillingToggle";
import { FAQItem } from "@/components/ui/FAQItem";
import { WHATSAPP_LINK } from "@/lib/constants";
import { CTAButton } from "@/components/ui/CTAButton";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const comparisonFeatures = [
    { name: "Active QR Code Stands", free: "1", starter: "1 Branded", pro: "Up to 5", agency: "Unlimited" },
    { name: "Scans & Clicks", free: "50/mo", starter: "Unlimited", pro: "Unlimited", agency: "Unlimited" },
    { name: "Review Filtering Shield", free: "Yes", starter: "Yes", pro: "Yes", agency: "Yes" },
    { name: "AI Review Suggestions", free: "No", starter: "No", pro: "Yes", agency: "Yes" },
    { name: "WhatsApp Notifications", free: "No", starter: "Yes", pro: "Yes", agency: "Yes" },
    { name: "Staff Tracking Analytics", free: "No", starter: "No", pro: "Yes", agency: "Yes" },
    { name: "Multi-branch Management", free: "No", starter: "No", pro: "Yes (5 branches)", agency: "Yes (Unlimited)" },
    { name: "Grievance / Priority Support", free: "Email Only", starter: "Priority WhatsApp", pro: "24/7 Dedicated Account Manager", agency: "24/7 Dedicated Account Manager" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-ks-off-white">
      {/* Navigation */}
      <MarketingNav />

      {/* Main Container */}
      <main className="flex-grow pt-28 pb-16">
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center space-y-6 mb-16">
          <span className="type-label text-ks-green font-bold block">
            Transparent Subscriptions
          </span>
          <h1 className="type-h1 text-ks-navy md:text-5xl font-extrabold tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="type-body-lg text-ks-muted max-w-2xl mx-auto">
            Start free forever. Upgrade or cancel your subscription at any time. No hidden fees, setup costs, or contracts.
          </p>

          {/* Toggle */}
          <div className="pt-4">
            <BillingToggle
              billingPeriod={billingPeriod}
              onChange={setBillingPeriod}
            />
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
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
        </div>

        {/* Risk-removal banner */}
        <div className="max-w-5xl mx-auto px-4 mb-20">
          <div className="bg-ks-green-light rounded-2xl p-6 border border-ks-green/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-ks-green text-ks-white rounded-xl">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="text-left space-y-1">
                <h4 className="type-body font-bold text-ks-navy">7-Day Money-Back Guarantee</h4>
                <p className="type-body-sm text-ks-muted leading-relaxed">
                  Try any paid plan risk-free. Cancel within 7 days of subscribing for a full, hassle-free refund.
                </p>
              </div>
            </div>
            
            {/* Razorpay Trust padlock */}
            <div className="flex items-center space-x-2 text-ks-muted text-xs font-semibold uppercase tracking-wider shrink-0 bg-ks-white px-4 py-2 rounded-xl border border-ks-border shadow-sm">
              <Lock className="w-4 h-4 text-ks-navy" />
              <span>Razorpay Secured</span>
            </div>
          </div>
        </div>

        {/* Feature Compare Table */}
        <div className="max-w-6xl mx-auto px-4 mb-24 hidden md:block">
          <div className="text-center space-y-4 mb-10">
            <h3 className="type-h2 text-ks-navy font-bold">Compare Plan Features</h3>
            <p className="type-body text-ks-muted">See a detailed breakdown to find the perfect plan for your business scale.</p>
          </div>

          <div className="bg-ks-white rounded-2xl border border-ks-border shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-ks-navy text-ks-white">
                  <th className="p-5 font-bold text-sm uppercase tracking-wider">Features</th>
                  <th className="p-5 font-bold text-sm uppercase tracking-wider text-center">Free</th>
                  <th className="p-5 font-bold text-sm uppercase tracking-wider text-center">Starter</th>
                  <th className="p-5 font-bold text-sm uppercase tracking-wider text-center bg-ks-navy-mid border-x border-ks-navy-light">Pro</th>
                  <th className="p-5 font-bold text-sm uppercase tracking-wider text-center">Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ks-border">
                {comparisonFeatures.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-ks-off-white/50 transition-colors">
                    <td className="p-5 type-body-sm font-semibold text-ks-navy">{feat.name}</td>
                    <td className="p-5 type-body-sm text-ks-muted text-center">{feat.free}</td>
                    <td className="p-5 type-body-sm text-ks-navy text-center">{feat.starter}</td>
                    <td className="p-5 type-body-sm text-ks-navy text-center bg-ks-off-white/40 border-x border-ks-border font-semibold">{feat.pro}</td>
                    <td className="p-5 type-body-sm text-ks-navy text-center">{feat.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Billing FAQ */}
        <div className="max-w-4xl mx-auto px-4 mb-20 text-center space-y-12">
          <div className="space-y-3">
            <span className="type-label text-ks-green font-bold block">Subscriptions Help</span>
            <h3 className="type-h2 text-ks-navy font-bold">Billing FAQ</h3>
            <p className="type-body text-ks-muted">Common questions about local tax billing, invoices, upgrades, and processing.</p>
          </div>

          <Accordion.Root
            type="single"
            collapsible
            className="space-y-4 max-w-3xl mx-auto text-left"
          >
            {billingFAQs.map((faq) => (
              <FAQItem
                key={faq.id}
                value={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Accordion.Root>
        </div>

        {/* Contact WhatsApp Help Call */}
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <p className="type-body text-ks-navy font-semibold">Still unsure which plan fits your business scale?</p>
          <div className="flex justify-center">
            <CTAButton href={WHATSAPP_LINK} variant="whatsapp" target="_blank" rel="noopener noreferrer">
              Chat with us on WhatsApp &rarr;
            </CTAButton>
          </div>
        </div>

      </main>

      {/* Footer */}
      <MarketingFooter />
    </div>
  );
}

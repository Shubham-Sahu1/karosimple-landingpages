"use client";

import React, { useState } from "react";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { CTAButton } from "@/components/ui/CTAButton";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { PricingCard } from "@/components/ui/PricingCard";
import { Loader } from "@/components/ui/Loader";

export default function DesignSystemPage() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const colors = [
    { name: "Primary Green", hex: "#3DAA72", property: "bg-ks-green", text: "text-ks-white" },
    { name: "Dark Green", hex: "#2D8A5A", property: "bg-ks-green-dark", text: "text-ks-white" },
    { name: "Light Green", hex: "#EFF6F1", property: "bg-ks-green-light", text: "text-ks-green-dark border border-ks-green/10" },
    { name: "Primary Navy", hex: "#1B2A4A", property: "bg-ks-navy", text: "text-ks-white" },
    { name: "Navy Mid", hex: "#253559", property: "bg-ks-navy-mid", text: "text-ks-white" },
    { name: "Navy Light", hex: "#3D4F72", property: "bg-ks-navy-light", text: "text-ks-white" },
    { name: "Off-White", hex: "#F5F7FA", property: "bg-ks-off-white", text: "text-ks-navy border border-ks-border" },
    { name: "Border Grey", hex: "#EEF1F5", property: "bg-ks-border", text: "text-ks-navy" },
    { name: "Soft Red", hex: "#FEF2F2", property: "bg-ks-red-soft", text: "text-ks-red" },
    { name: "Negative Red", hex: "#EF4444", property: "bg-ks-red", text: "text-ks-white" },
  ];

  const demoFeatures = [
    { name: "1 Active QR Code", included: true },
    { name: "Unlimited Scans & Clicks", included: true },
    { name: "Google Review Redirection", included: true },
    { name: "Standard Analytics Reports", included: true },
    { name: "Negative Feedback Shield", included: true },
    { name: "WhatsApp Alerts (Instant)", included: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-ks-off-white">
      {/* Navbar Header */}
      <MarketingNav />

      {/* Main Showcase Panel */}
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-left space-y-16">
          
          {/* Headline intro */}
          <div className="space-y-4">
            <span className="type-label text-ks-green font-bold">Interactive Showcase</span>
            <h1 className="type-h1 text-ks-navy md:text-5xl font-extrabold tracking-tight">
              Design System Showcase
            </h1>
            <p className="type-body-lg text-ks-muted max-w-3xl leading-relaxed">
              This interactive dashboard showcases the typography rules, color palettes, button options, loading spinners, and layout cards configured inside the Karo Simple Marketing Frontend.
            </p>
          </div>

          <hr className="border-[#EEF1F5]" />

          {/* Section 1: Colors */}
          <div className="space-y-6">
            <h2 className="type-h2 text-ks-navy font-bold">1. Color Palette Swatches</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {colors.map((color, idx) => (
                <div key={idx} className="bg-ks-white border border-[#EEF1F5] rounded-2xl p-4 shadow-sm space-y-3">
                  <div className={`w-full h-16 rounded-xl ${color.property}`} />
                  <div>
                    <h4 className="type-body-sm font-bold text-ks-navy">{color.name}</h4>
                    <code className="text-xs text-ks-muted block mt-1">{color.hex}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Typography */}
          <div className="space-y-6">
            <h2 className="type-h2 text-ks-navy font-bold">2. Typography Hierarchy</h2>
            <div className="bg-ks-white border border-[#EEF1F5] rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
              <div className="border-b border-[#EEF1F5] pb-4">
                <span className="text-[10px] text-ks-muted font-bold block mb-1">--type-hero (Desktop, 56px)</span>
                <span className="type-hero text-ks-navy">Get Reviews</span>
              </div>
              <div className="border-b border-[#EEF1F5] pb-4">
                <span className="text-[10px] text-ks-muted font-bold block mb-1">--type-h1 (44px)</span>
                <span className="type-h1 text-ks-navy block">Simple, Transparent Pricing</span>
              </div>
              <div className="border-b border-[#EEF1F5] pb-4">
                <span className="text-[10px] text-ks-muted font-bold block mb-1">--type-h2 (32px)</span>
                <span className="type-h2 text-ks-navy block">How Karo Simple Works</span>
              </div>
              <div className="border-b border-[#EEF1F5] pb-4">
                <span className="text-[10px] text-ks-muted font-bold block mb-1">--type-h3 (22px)</span>
                <span className="type-h3 text-ks-navy block">Negative Feedback Shield</span>
              </div>
              <div>
                <span className="text-[10px] text-ks-muted font-bold block mb-1">--type-body (16px)</span>
                <p className="type-body text-ks-muted leading-relaxed">
                  Your happy customers scan a QR code and post a 5-star review on Google in 10 seconds. Unhappy ones submit their complaints to your private inbox.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Buttons */}
          <div className="space-y-6">
            <h2 className="type-h2 text-ks-navy font-bold">3. Interactive Button Variants</h2>
            <div className="bg-ks-white border border-[#EEF1F5] rounded-2xl p-6 md:p-8 shadow-sm flex flex-wrap items-center gap-4">
              <CTAButton variant="primary" fullWidthMobile={false}>
                Primary Button →
              </CTAButton>
              <CTAButton variant="outline" fullWidthMobile={false}>
                Outline Button
              </CTAButton>
              <CTAButton variant="whatsapp" fullWidthMobile={false}>
                WhatsApp Connect
              </CTAButton>
              <CTAButton variant="primary" disabled={true} fullWidthMobile={false}>
                <Loader size="sm" color="white" className="mr-2" />
                Loading State
              </CTAButton>
            </div>
          </div>

          {/* Section 4: Loaders */}
          <div className="space-y-6">
            <h2 className="type-h2 text-ks-navy font-bold">4. Spinner Loaders</h2>
            <div className="bg-ks-white border border-[#EEF1F5] rounded-2xl p-6 md:p-8 shadow-sm flex items-center space-x-12">
              <div className="flex flex-col items-center space-y-2">
                <Loader size="sm" color="green" />
                <span className="text-xs text-ks-muted font-semibold">Small (Green)</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Loader size="md" color="navy" />
                <span className="text-xs text-ks-muted font-semibold">Medium (Navy)</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Loader size="lg" color="green" />
                <span className="text-xs text-ks-muted font-semibold">Large (Green)</span>
              </div>
            </div>
          </div>

          {/* Section 5: Component Cards */}
          <div className="space-y-6">
            <h2 className="type-h2 text-ks-navy font-bold">5. Component Card Templates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
              {/* Feature Card */}
              <div className="space-y-2 flex flex-col">
                <span className="text-[10px] text-ks-muted font-bold block mb-1">Feature Card</span>
                <div className="flex-grow">
                  <FeatureCard
                    iconName="ShieldCheck"
                    title="Negative Feedback Shield"
                    description="Low ratings (1-3 stars) trigger a private feedback form instead of a Google redirect, helping you resolve complaints internally."
                  />
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="space-y-2 flex flex-col">
                <span className="text-[10px] text-ks-muted font-bold block mb-1">Testimonial Card</span>
                <div className="flex-grow">
                  <TestimonialCard
                    name="Ramesh Agarwal"
                    role="Owner"
                    businessName="Agarwal Hair Salon"
                    city="Raipur, CG"
                    quote="We went from 3.4 to 4.7 stars in 2 months. Every customer who walks in now scans the QR and leaves a review."
                    stars={5}
                    initials="RA"
                  />
                </div>
              </div>

              {/* Pricing Card */}
              <div className="space-y-2 flex flex-col">
                <span className="text-[10px] text-ks-muted font-bold block mb-1">Pricing Card (Starter)</span>
                <div className="flex-grow">
                  <PricingCard
                    name="Starter Plan"
                    monthlyPrice={999}
                    annualPriceMonthly={799}
                    description="Ideal for single-location restaurants, salons, and dental clinics"
                    badge="Affordable Choice"
                    features={demoFeatures}
                    ctaText="Choose Starter"
                    isPopular={false}
                    billingPeriod={billingPeriod}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <MarketingFooter />
    </div>
  );
}

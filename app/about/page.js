import React from "react";
import { ShieldCheck, Heart, Users, Award } from "lucide-react";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { StatCard } from "@/components/ui/StatCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTABannerSection } from "@/components/sections/CTABannerSection";

export const metadata = {
  title: "About Karo Simple - Our Mission for Indian SMBs",
  description: "Learn how Karo Simple helps Indian businesses grow their online reputation with effortless QR-based Google review management.",
  alternates: { canonical: "https://karosimple.in/about" },
  openGraph: {
    title: "About Karo Simple - Our Mission for Indian SMBs",
    description: "Learn how Karo Simple helps Indian businesses grow online reputation.",
    url: "https://karosimple.in/about",
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: "Heart",
      title: "Simple & Frictionless",
      desc: "Local merchants and their customers are busy. We design tools that work instantly in 10 seconds without any app downloads or logins.",
    },
    {
      icon: "ShieldCheck",
      title: "Built on Trust",
      desc: "We stand for authentic, real reviews. We never generate fake ratings and aim to protect honest merchants from unfair digital penalties.",
    },
    {
      icon: "Award",
      title: "India-First Design",
      desc: "Our platform is fully localized, works seamlessly on 4G in Tier 2/3 cities, and fits the budget constraints of Indian SMBs.",
    },
    {
      icon: "Users",
      title: "Empowering Local Commerce",
      desc: "From local tea stalls and salons to clinics and dining outlets, we believe small businesses deserve the same digital presence as large brands.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-ks-off-white">
      {/* Navigation */}
      <MarketingNav />

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Navy Hero Section */}
        <section className="bg-ks-navy pt-28 pb-20 text-center text-ks-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-6 relative z-10">
            <span className="type-label text-ks-green font-bold tracking-wider block">
              Our Vision
            </span>
            <h1 className="type-h1 md:text-5xl text-ks-white font-extrabold leading-tight">
              Helping Indian Businesses Grow Through Digital Trust
            </h1>
            <p className="type-body-lg text-ks-white/80 max-w-2xl mx-auto leading-relaxed">
              Designed in India, built for India. We are leveling the playing field for local merchants, one 5-star review at a time.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-ks-white border-b border-ks-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Story */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="type-label text-ks-green font-bold block">
                  Why We Exist
                </span>
                <h3 className="type-h2 text-ks-navy font-bold leading-tight">
                  The Story Behind Karo Simple
                </h3>
                <p className="type-body text-ks-muted leading-relaxed">
                  Every evening, millions of local restaurant owners, salon operators, and medical practitioners across India serve their neighborhoods with dedication. Yet, their digital growth is often cut short by a single disgruntled reviewer or a rating system that is too complicated for their happiest regulars to navigate.
                </p>
                <p className="type-body text-ks-muted leading-relaxed">
                  Happy customers leave smiling but rarely think to search for a business on Google Maps just to leave a review. On the other hand, unhappy customers are highly motivated to write public complaints. This creates an unfair rating bias that harms honest businesses.
                </p>
                <p className="type-body text-ks-muted leading-relaxed">
                  We built **Karo Simple** to solve this. By placing a QR code stand at checkout, local merchants can capture customer satisfaction in a single scan. Happy reviews reach Google in seconds, and private concerns reach the owner immediately before becoming public.
                </p>
              </div>

              {/* Right Column Stat Box */}
              <div className="lg:col-span-5 bg-ks-navy rounded-2xl p-8 space-y-6 text-ks-white shadow-pricing text-left relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-ks-white/5" />
                <h4 className="type-h3 text-ks-green font-extrabold">Our Mission Metrics</h4>
                <div className="divide-y divide-ks-navy-mid space-y-4">
                  <div className="pt-2">
                    <span className="type-price text-ks-green font-bold block">₹799</span>
                    <span className="type-body-sm text-ks-white/70">Starter pricing, making software affordable for local shops</span>
                  </div>
                  <div className="pt-4">
                    <span className="type-price text-ks-white font-bold block">10s</span>
                    <span className="type-body-sm text-ks-white/70">Average customer scan-to-submit time, zero friction</span>
                  </div>
                  <div className="pt-4">
                    <span className="type-price text-ks-green font-bold block">100%</span>
                    <span className="type-body-sm text-ks-white/70">Data safety hosted inside local Indian cloud zones</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Problem Callout Box */}
        <section className="py-16 bg-ks-off-white border-b border-ks-border">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-ks-white rounded-2xl p-8 md:p-10 border border-ks-border shadow-sm flex flex-col md:flex-row items-start gap-6 text-left">
              <div className="p-4 bg-ks-red-soft text-ks-red rounded-xl shrink-0">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div className="space-y-3">
                <h4 className="type-h3 text-ks-navy font-bold">The Ratings Trap Local Businesses Face</h4>
                <p className="type-body text-ks-muted leading-relaxed">
                  Search rankings dictate customer visits. If a restaurant has a 3.8 rating because only unhappy people took the effort to write reviews, they lose out on Google search clicks to a competitor rated 4.5. Karo Simple ensures your rating reflects the true satisfaction of your entire client base, not just a vocal minority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-ks-white border-b border-ks-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center space-y-16">
            <div className="max-w-3xl mx-auto space-y-3">
              <span className="type-label text-ks-green font-bold block">Core Pillars</span>
              <h3 className="type-h2 text-ks-navy font-bold">The Values That Drive Us</h3>
              <p className="type-body text-ks-muted">Our guiding principles dictate how we build our dashboard, write our analytics scripts, and structure pricing.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="bg-ks-off-white rounded-2xl p-6 border border-ks-border text-left space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-ks-green-light text-ks-green flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <h4 className="type-body font-bold text-ks-navy">{val.title}</h4>
                  <p className="type-body-sm text-ks-muted leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder details */}
        <section className="py-20 bg-ks-off-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
            <div className="space-y-3">
              <span className="type-label text-ks-green font-bold block">Our Team</span>
              <h3 className="type-h2 text-ks-navy font-bold">Meet the Founders</h3>
              <p className="type-body text-ks-muted">We are a small, mission-driven team of engineers and product designers working out of Noida, UP.</p>
            </div>

            <div className="bg-ks-white rounded-2xl p-8 border border-ks-border shadow-sm flex flex-col sm:flex-row items-center gap-8 text-left max-w-2xl mx-auto">
              <div className="w-24 h-24 rounded-full bg-ks-navy text-ks-green flex items-center justify-center font-extrabold text-3xl shrink-0 select-none shadow-md">
                KS
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="type-h3 text-ks-navy font-bold">Kartik Sharma</h4>
                  <p className="type-body-sm text-ks-green font-semibold">Founder & Lead Engineer</p>
                </div>
                <p className="type-body-sm text-ks-muted leading-relaxed">
                  Kartik spent 5 years designing performant interfaces for Indian startup ecosystems. He founded Karo Simple with the goal of creating accessible, high-performance SaaS tools tailored directly for local Indian business budgets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Close conversion CTA */}
        <CTABannerSection />

      </main>

      {/* Footer */}
      <MarketingFooter />
    </div>
  );
}

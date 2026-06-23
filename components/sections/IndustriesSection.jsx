"use client";

import React from "react";

export function IndustriesSection() {
  const industries = [
    {
      icon: "🍽️",
      name: "Restaurants & Dhabas",
      tagline: "Get reviews while the meal is still fresh in their mind",
    },
    {
      icon: "💇",
      name: "Salons & Spas",
      tagline: "Happy customers walk out glowing: remind them to say it online",
    },
    {
      icon: "🩺",
      name: "Clinics & Hospitals",
      tagline: "Build credibility where patients choose their doctor",
    },
    {
      icon: "🏋️",
      name: "Gyms & Studios",
      tagline: "Turn members' transformation into your best marketing",
    },
    {
      icon: "🛒",
      name: "Retail Shops",
      tagline: "Compete with e-commerce by owning local trust",
    },
    {
      icon: "🏨",
      name: "Hotels & Guest Houses",
      tagline: "Reviews drive 80% of hotel bookings. Own them.",
    },
    {
      icon: "🔧",
      name: "Auto & Repair Shops",
      tagline: "Trust is everything in your industry. Reviews build it.",
    },
    {
      icon: "📚",
      name: "Coaching & Education",
      tagline: "Parents choose based on reputation. Make yours visible.",
    },
  ];

  return (
    <section
      id="industries"
      className="w-full bg-[#253559] border-t border-b border-[#3D4F72] py-20 md:py-28 px-4 md:px-8 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
            WHO IT’S FOR
          </span>
          <h2 className="font-sans font-bold text-[2rem] md:text-[3rem] leading-tight text-white">
            Built for every Indian business
          </h2>
          <p className="font-sans text-[1.1rem] text-[#CBD5E1] max-w-[620px] mx-auto leading-relaxed">
            If you have customers, you need reviews. If you need reviews, you need Karo Simple.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, index) => (
            <div
              key={index}
              className="bg-[#1B2A4A] border border-[#3D4F72] hover:border-[#3DAA72] hover:bg-[rgba(61,170,114,0.06)] rounded-2xl p-6 text-center cursor-default transition-all duration-250 transform hover:-translate-y-1 shadow-card"
            >
              <div className="text-[2.2rem] mb-4 select-none">{ind.icon}</div>
              <h3 className="font-sans font-bold text-[0.95rem] text-white mb-2">
                {ind.name}
              </h3>
              <p className="font-sans text-[0.8rem] text-[#CBD5E1] leading-relaxed">
                {ind.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;

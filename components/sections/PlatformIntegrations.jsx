"use client";

import React from "react";

export function PlatformIntegrations() {
  const platforms = [
    { name: "Google Business", icon: "🔍", color: "#4285F4" },
    { name: "Zomato", icon: "🍕", color: "#CB202D" },
    { name: "Swiggy", icon: "🍔", color: "#FC8019" },
    { name: "Justdial", icon: "📞", color: "#0078FF" },
    { name: "TripAdvisor", icon: "✈️", color: "#34E0A1" },
    { name: "Practo", icon: "🩺", color: "#2A9DF4" },
    { name: "OYO", icon: "🏨", color: "#EE2E24" },
    { name: "Custom Platform", icon: "⚙️", color: "#6B7A99" },
  ];

  return (
    <section className="w-full bg-[#1B2A4A] py-20 md:py-28 px-4 md:px-8 lg:px-16 text-center">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
            INTEGRATIONS
          </span>
          <h2 className="font-sans font-bold text-[2rem] md:text-[3rem] leading-tight text-white">
            Works where your customers already are
          </h2>
          <p className="font-sans text-[1.1rem] text-[#CBD5E1] max-w-[620px] mx-auto leading-relaxed">
            One QR code. Multiple platforms. You choose exactly where reviews land.
          </p>
        </div>

        {/* Platforms List */}
        <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-[#253559] border border-[#3D4F72] hover:border-[#3DAA72] rounded-xl px-7 py-4 flex items-center gap-3 font-sans font-semibold text-[0.95rem] text-[#F1F5F9] cursor-default transition-all duration-200 hover:-translate-y-0.5 shadow-card"
            >
              <span className="text-xl">{platform.icon}</span>
              <span>{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformIntegrations;

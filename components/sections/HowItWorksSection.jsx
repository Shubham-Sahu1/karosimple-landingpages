"use client";

import React from "react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: "⚡",
      title: "Create Your Account & Add Your Business",
      body: "Sign up free, enter your business name and Google listing. Karo Simple connects to your Google Business Profile in seconds. No technical knowledge needed.",
    },
    {
      number: "02",
      icon: "📱",
      title: "Get Your Smart QR Code & Display It",
      body: "Download your unique QR code and place it wherever your customers are: table tent, counter card, receipt, or your WhatsApp business message. Print it, display it digitally, done.",
    },
    {
      number: "03",
      icon: "🌟",
      title: "Customers Scan → Reviews Appear on Google",
      body: "Happy customers scan, write a real review in 45 seconds. Unhappy ones see a private feedback form. You get notified. Your rating climbs. Your competitors wonder what happened.",
    },
  ];

  return (
    <section
      id="process"
      className="w-full bg-[#1B2A4A] py-20 md:py-28 px-4 md:px-8 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
            THE PROCESS
          </span>
          <h2 className="font-sans font-bold text-[2rem] md:text-[3rem] leading-tight text-white">
            How Karo Simple Works
          </h2>
          <p className="font-sans text-[1.1rem] text-[#CBD5E1] max-w-[620px] mx-auto leading-relaxed">
            Three steps. Five minutes to set up. Reviews flowing within the hour.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-[#253559] border border-[#3D4F72] hover:border-[#3DAA72] rounded-2xl p-8 lg:p-10 flex flex-col items-start transition-all duration-300 transform hover:-translate-y-1 shadow-card overflow-hidden"
            >
              {/* Glowing Top Gradient Border (rendered on hover) */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#3DAA72] to-[#253559] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Watermark Step Number */}
              <div className="absolute top-4 right-6 font-sans font-extrabold text-[4.5rem] text-[#3D4F72] group-hover:text-[rgba(61,170,114,0.06)] leading-none select-none transition-colors duration-300">
                {step.number}
              </div>

              {/* Emoji Icon */}
              <div className="text-4xl mb-6 relative z-10">{step.icon}</div>

              {/* Title */}
              <h3 className="font-sans font-bold text-[1.25rem] text-white leading-tight mb-4 relative z-10">
                {step.title}
              </h3>

              {/* Body */}
              <p className="font-sans text-[0.92rem] text-[#CBD5E1] leading-relaxed relative z-10">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;

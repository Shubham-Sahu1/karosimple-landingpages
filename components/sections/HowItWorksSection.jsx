"use client";

import React, { useRef } from "react";
import { QrCode, Smartphone, Star, BarChart3 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { useGSAPReveal } from "@/hooks/useGSAPReveal";

export function HowItWorksSection() {
  const sectionRef = useRef(null);
  
  // Attach scroll reveal
  useGSAPReveal(sectionRef, { stagger: 0.12 });

  const steps = [
    {
      number: "01",
      icon: <QrCode className="w-8 h-8 text-ks-white" />,
      title: "Get Custom QR Code",
      desc: "Place your branded QR code table-stands at billing counters, tables, or reception areas.",
    },
    {
      number: "02",
      icon: <Smartphone className="w-8 h-8 text-ks-white" />,
      title: "Customer Scans",
      desc: "Customer scans using their default phone camera. No app download or sign-in needed.",
    },
    {
      number: "03",
      icon: <Star className="w-8 h-8 text-ks-white" />,
      title: "Smart Split Route",
      desc: "Happy ratings (4-5★) route to Google, Zomato, Swiggy, or any platform you choose. Unhappy ones route privately to you.",
    },
    {
      number: "04",
      icon: <BarChart3 className="w-8 h-8 text-ks-white" />,
      title: "Track Performance",
      desc: "Monitor scans, track daily reviews, and reward staff who capture the most ratings.",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-24 bg-ks-white border-b border-ks-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center space-y-16">
        
        {/* Section Heading */}
        <SectionHeading
          overline="Simple 4-Step Process"
          title="How Karo Simple Works"
          description="A friction-free experience designed for budget-conscious Indian merchants and fast-moving local consumers."
        />

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Connecting line on desktop (hidden on mobile/tablet) */}
          <div className="hidden lg:block absolute top-[56px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-ks-green-light -z-0" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 relative z-10"
              data-reveal
            >
              {/* Step Circle Header */}
              <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-ks-navy flex items-center justify-center border-4 border-ks-white shadow-md group-hover:bg-ks-green transition-colors duration-300">
                  {step.icon}
                </div>
                {/* Step Index Badge */}
                <span className="absolute -top-1 -right-1.5 w-6 h-6 rounded-full bg-ks-green text-ks-white font-extrabold text-[11px] flex items-center justify-center border-2 border-ks-white shadow-sm">
                  {step.number}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 max-w-[260px]">
                <h3 className="type-h3 text-ks-navy font-bold leading-snug">
                  {step.title}
                </h3>
                <p className="type-body-sm text-ks-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default HowItWorksSection;

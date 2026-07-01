"use client";

import React from "react";
import { REGISTER_URL } from "@/lib/constants";

export function CTABannerSection() {
  return (
    <section
      id="cta-banner"
      className="w-full bg-[#1B2A4A] border-t border-[#3D4F72] py-24 md:py-32 px-4 md:px-8 lg:px-16 text-center relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 50% 0%, rgba(61,170,114,0.1) 0%, transparent 70%),
          radial-gradient(ellipse at 50% 100%, rgba(37,53,89,0.3) 0%, transparent 70%)
        `,
      }}
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 space-y-8">
        
        {/* Urgency Pill */}
        <div className="inline-flex items-center gap-2 bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] text-[#EF4444] text-[0.82rem] font-semibold px-5 py-2 rounded-full uppercase tracking-wider">
          <span>⚠</span> Your competitors are collecting reviews right now
        </div>

        {/* Headline */}
        <h2 className="font-sans font-extrabold text-[2.2rem] md:text-[3.2rem] lg:text-[4rem] leading-[1.1] tracking-tight text-white max-w-[700px]">
          Don’t let a bad rating
          <br />
          <span className="text-[#3DAA72]">
            cost you & your business.
          </span>
        </h2>

        {/* Subtext */}
        <p className="font-sans text-[1.1rem] text-[#CBD5E1] max-w-[480px] leading-relaxed">
          Every day you wait is another day your competitor pulls ahead on Google. Start free in 5 minutes (no credit card, no lock-in).
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href={REGISTER_URL}
            className="flex w-full sm:w-auto items-center justify-center font-sans font-semibold text-[0.95rem] sm:text-[1.05rem] text-white bg-[#3DAA72] px-6 py-4 sm:px-[40px] sm:py-[17px] rounded-full transform hover:scale-[1.01] transition-transform shadow-[0_4px_15px_rgba(61,170,114,0.3)] hover:bg-[#2D8A5A]"
          >
            Start Free Today (No Credit Card) →
          </a>
          <a
            href="#pricing"
            className="flex w-full sm:w-auto items-center justify-center font-sans font-semibold text-[0.95rem] sm:text-[1rem] text-[#F1F5F9] bg-transparent border border-[#3D4F72] px-6 py-4 sm:px-[32px] sm:py-[17px] rounded-full hover:border-[#CBD5E1] hover:bg-[#253559] transition-all duration-300"
          >
            See Pricing Plans
          </a>
        </div>

        {/* Trust Strip */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-8 text-[#CBD5E1] font-sans font-medium text-[0.82rem]">
          <span>✅ Trusted by businesses across India</span>
          <span>✅ Simple dashboard, easy to manage</span>
          <span>✅ Scale features as your business grows</span>
          <span>✅ Seamless integration with your workflow</span>
        </div>
      </div>
    </section>
  );
}

export default CTABannerSection;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldAlert, Clock, ShieldCheck } from "lucide-react";

export function ReviewShieldSection() {
  return (
    <section className="relative w-full bg-[#1B2A4A] py-16 lg:py-24 border-b border-[#253559] overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[rgba(239,68,68,0.04)] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[rgba(61,170,114,0.06)] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-[60px] relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-[16px] h-[2px] bg-[#3DAA72] inline-block" />
            <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
              Negative Review Shield
            </span>
            <span className="w-[16px] h-[2px] bg-[#3DAA72] inline-block" />
          </div>
          <h2 className="font-sans font-extrabold text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.1] text-white">
            Stop Bad Reviews <span className="text-[#3DAA72]">Before They Go Public</span>
          </h2>
          <p className="font-sans text-[1rem] sm:text-[1.08rem] text-[#CBD5E1] leading-relaxed">
            Our Negative Review Shield automatically redirects 1-3 star feedback to a private form, giving you the chance to solve the issue before it hurts your reputation.
          </p>
        </div>

        {/* 50-50 Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Benefits & CTA */}
          <div className="space-y-8 text-left">
            {/* Core benefits list */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-2 rounded-lg bg-[rgba(61,170,114,0.1)] border border-[rgba(61,170,114,0.2)] text-[#3DAA72] shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-[1.05rem] text-white">
                    Private Feedback Loop
                  </h4>
                  <p className="font-sans text-[0.92rem] text-[#94A3B8] leading-relaxed max-w-md">
                    Discontented customers message you directly, not the internet.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-2 rounded-lg bg-[rgba(245,166,35,0.1)] border border-[rgba(245,166,35,0.2)] text-[#F5A623] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-[1.05rem] text-white">
                    Time to Resolve
                  </h4>
                  <p className="font-sans text-[0.92rem] text-[#94A3B8] leading-relaxed max-w-md">
                    Connect with customers, fix the problem, and turn a critic into a fan.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-2 rounded-lg bg-[rgba(61,170,114,0.1)] border border-[rgba(61,170,114,0.2)] text-[#3DAA72] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-[1.05rem] text-white">
                    Reputation Protection
                  </h4>
                  <p className="font-sans text-[0.92rem] text-[#94A3B8] leading-relaxed max-w-md">
                    Keep your 5-star rating high while improving your service behind the scenes.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/pricing"
                className="group relative inline-flex items-center justify-center font-sans font-semibold text-[1rem] text-[#FFFFFF] bg-[#3DAA72] px-[36px] py-[15px] rounded-full transform hover:scale-[1.02] hover:-translate-y-[2px] transition-all duration-300 shadow-[0_4px_12px_rgba(61,170,114,0.3)] hover:shadow-[0_8px_32px_rgba(61,170,114,0.45)] whitespace-nowrap"
              >
                Protect Brand Reputation Now →
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Shield with Red-to-Green Glow Border */}
          <div className="flex justify-center items-center w-full">
            <div className="relative w-full max-w-[480px] rounded-[2rem] p-[1.5px] bg-gradient-to-tr from-[#EF4444] via-[#3DAA72] to-[#3DAA72] shadow-pricing group">
              
              {/* Glowing Background Blur Effect */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#EF4444]/20 via-[#3DAA72]/20 to-transparent blur-xl opacity-80 pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Inner container */}
              <div className="w-full bg-[#1b253b] rounded-[2rem] overflow-hidden flex items-center justify-center">
                <Image
                  src="/Home Negative Shield.png"
                  alt="Negative Review Shield Illustration"
                  width={480}
                  height={336}
                  className="w-full h-auto object-cover rounded-[2rem]"
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ReviewShieldSection;

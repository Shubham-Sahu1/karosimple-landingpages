"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PainComparisonSection() {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const vsRef = useRef(null);

  useGSAP(() => {
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Asymmetric parallax vertical translation
    gsap.fromTo(
      leftCardRef.current,
      { y: 35 },
      {
        y: -35,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      rightCardRef.current,
      { y: -35 },
      {
        y: 35,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      }
    );

    // Rotate VS badge slowly on scroll
    gsap.fromTo(
      vsRef.current,
      { rotate: -35 },
      {
        rotate: 35,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full bg-[rgba(239,68,68,0.02)] border-t border-b border-[#253559] py-20 md:py-28 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans font-bold text-[0.75rem] text-[#EF4444] uppercase tracking-[2px] bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] px-4 py-1.5 rounded-full">
            THE GOOGLE REALITY
          </span>
          <h2 className="font-sans font-bold text-[2rem] md:text-[3rem] leading-tight text-white max-w-3xl mx-auto">
            Your customers are choosing between you and your competitor, right now.
          </h2>
          <p className="font-sans text-[1.1rem] text-[#CBD5E1] max-w-[620px] mx-auto leading-relaxed">
            Every day someone searches for what you offer in your local area. This is exactly what they see.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Card - Loser */}
          <div
            ref={leftCardRef}
            className="lg:col-span-5 bg-[#253559] border border-[rgba(239,68,68,0.4)] rounded-2xl p-6 md:p-8 space-y-6 relative hover:scale-[1.01] transition-transform duration-300"
          >
            <span className="inline-block bg-[rgba(239,68,68,0.1)] text-[#EF4444] text-[0.75rem] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              ❌ Without Karo Simple
            </span>
            <div className="space-y-1">
              <h4 className="font-sans text-[1.35rem] font-bold text-[#4285F4]">
                Sharma's Barbershop
              </h4>
              <div className="flex items-center gap-2 text-sm text-[#CBD5E1]">
                <span className="text-yellow-500 text-lg">★★★☆☆</span>
                <span>3.6</span>
                <span>(14 reviews)</span>
              </div>
            </div>

            {/* Bad Review */}
            <div className="border-l-2 border-[#EF4444] pl-3 py-1 space-y-1 bg-[rgba(239,68,68,0.03)] pr-2 rounded-r">
              <div className="text-[#EF4444] text-[0.8rem] font-bold flex items-center gap-1">
                ★ 1-Star Review
              </div>
              <p className="text-[#EF4444] text-[0.85rem] italic leading-relaxed">
                "Waited 40 minutes, no apology from the owner. Will not return."
              </p>
            </div>

            <div className="text-[0.85rem] text-[#CBD5E1] border-t border-[#3D4F72] pt-4 leading-relaxed">
              <span className="font-bold text-[#6B7A99]">Other reviews: </span>
              "Nice", "Good", "ok service": vague, low-quality phrases that Google's algorithm filters out.
            </div>

            {/* Footer warning */}
            <div className="bg-[rgba(239,68,68,0.08)] text-[#EF4444] text-center font-bold text-[0.85rem] py-2.5 rounded-lg border border-[rgba(239,68,68,0.15)] flex items-center justify-center gap-2">
              <span>⚠️</span> Most people skip this listing
            </div>
          </div>

          {/* VS Divider */}
          <div className="lg:col-span-2 flex justify-center z-10">
            <div
              ref={vsRef}
              className="w-[54px] h-[54px] bg-[#1B2A4A] border-2 border-[#3D4F72] text-[#6B7A99] font-sans font-extrabold text-[1.1rem] flex items-center justify-center rounded-full shadow-lg"
            >
              VS
            </div>
          </div>

          {/* Right Card - Winner */}
          <div
            ref={rightCardRef}
            className="lg:col-span-5 bg-[#253559] border border-[rgba(61,170,114,0.4)] rounded-2xl p-6 md:p-8 space-y-6 relative hover:scale-[1.01] transition-transform duration-300 shadow-[0_0_40px_rgba(61,170,114,0.05)]"
          >
            <span className="inline-block bg-[rgba(61,170,114,0.1)] text-[#3DAA72] text-[0.75rem] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              ✅ With Karo Simple
            </span>
            <div className="space-y-1">
              <h4 className="font-sans text-[1.35rem] font-bold text-[#4285F4]">
                Verma's Barbershop
              </h4>
              <div className="flex items-center gap-2 text-sm text-[#CBD5E1]">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="text-white font-bold">4.8</span>
                <span>(187 reviews)</span>
              </div>
            </div>

            {/* Good Review */}
            <div className="border-l-2 border-[#3DAA72] pl-3 py-1 space-y-1 bg-[rgba(61,170,114,0.03)] pr-2 rounded-r">
              <div className="text-[#3DAA72] text-[0.8rem] font-bold flex items-center gap-1.5">
                ★★★★★ 5-Stars
                <span className="text-[0.7rem] text-[#CBD5E1] font-normal">3 hours ago</span>
              </div>
              <p className="text-white text-[0.85rem] leading-relaxed">
                "Amazing haircut, precise beard trim, very friendly staff. Highly recommend!"
              </p>
            </div>

            <div className="text-[0.85rem] text-[#CBD5E1] border-t border-[#3D4F72] pt-4 leading-relaxed">
              <span className="font-bold text-[#3DAA72]">Other reviews: </span>
              Consistent 5-star reviews with detailed, genuine feedback added every single week.
            </div>

            {/* Footer success */}
            <div className="bg-[rgba(61,170,114,0.08)] text-[#3DAA72] text-center font-bold text-[0.85rem] py-2.5 rounded-lg border border-[rgba(61,170,114,0.15)] flex items-center justify-center gap-2">
              <span>✓</span> 9 out of 10 customers click this listing
            </div>
          </div>
        </div>

        {/* Closing Question Block */}
        <div className="w-full max-w-4xl mx-auto bg-[#253559] border border-[#3D4F72] rounded-3xl p-8 md:p-10 text-center mt-14 space-y-6 shadow-pricing">
          <div className="space-y-4">
            <h3 className="font-sans font-bold text-[1.8rem] md:text-[2.2rem] text-white">
              Which business are your customers choosing?
            </h3>
            <p className="font-sans text-[1rem] text-[#CBD5E1] max-w-lg mx-auto">
              The answer is obvious. The question is: which one represents your business?
            </p>
          </div>
          <div className="flex justify-center pt-2">
            <Link
              href="/pricing"
              className="group relative inline-flex items-center justify-center font-sans font-semibold text-[0.9rem] sm:text-[1rem] text-[#FFFFFF] bg-[#3DAA72] px-6 sm:px-[36px] py-[15px] rounded-full transform hover:scale-[1.02] hover:-translate-y-[2px] transition-all duration-300 shadow-[0_4px_12px_rgba(61,170,114,0.3)] hover:shadow-[0_8px_32px_rgba(61,170,114,0.45)] whitespace-nowrap"
            >
              Stop Waiting, Start Winning
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PainComparisonSection;

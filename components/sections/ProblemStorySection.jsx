"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProblemStorySection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const frames = gsap.utils.toArray(".story-frame");

    /*
     * Card-over-card stacking:
     * - All 3 cards start at the same absolute position.
     * - Card 1 is at z-10, Card 2 at z-20, Card 3 at z-30.
     * - Cards 2 and 3 start fully off-screen BELOW (yPercent: 105).
     * - As user scrolls:
     *   1. Card 2 slides UP from below and lands over Card 1.
     *   2. Card 3 slides UP from below and lands over Card 2.
     * This creates the "next card comes on top" deck effect.
     */
    gsap.set(frames[1], { yPercent: 105, rotate: 0 });
    gsap.set(frames[2], { yPercent: 105, rotate: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        pin: ".sticky-wrapper",
        pinSpacing: true,
      },
    });

    // Phase 1: Card 2 slides in from below over Card 1
    tl.to(frames[1], {
      yPercent: 0,
      duration: 1,
      ease: "power2.out",
    })
      // Brief pause
      .to({}, { duration: 0.2 })
      // Phase 2: Card 3 slides in from below over Card 2
      .to(frames[2], {
        yPercent: 0,
        duration: 1,
        ease: "power2.out",
      })
      // Final pause — last card is visible
      .to({}, { duration: 0.2 });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="problem-story"
      className="pinned-story-section relative w-full bg-[#1B2A4A] lg:h-[300vh]"
    >
      <div className="sticky-wrapper w-full lg:h-screen flex flex-col justify-center py-20 lg:py-0 px-4 md:px-8 lg:px-[60px] overflow-hidden">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:justify-center h-full">

          {/* Section Header */}
          <div className="mb-10 lg:mb-12 shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-[24px] h-[3px] bg-[#3DAA72] inline-block" />
              <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
                THE REAL PROBLEM
              </span>
            </div>
            <h2 className="font-sans font-bold text-[2rem] md:text-[3rem] leading-tight text-white mb-4">
              Here&rsquo;s what&rsquo;s silently killing your business rating
            </h2>
            <p className="font-sans text-[1.1rem] text-[#CBD5E1] max-w-[720px] leading-relaxed">
              Every satisfied customer who walks out without leaving a review is
              a missed opportunity your competitor is winning.
            </p>
          </div>

          {/* Cards Deck Container */}
          <div className="relative w-full h-auto lg:h-[480px] shrink-0">

            {/* ─── Card 1: The Reality (bottom of stack) ─── */}
            <div className="story-frame relative lg:absolute lg:inset-0 z-10 w-full bg-[#253559] border border-[#3D4F72] rounded-3xl p-6 md:p-10 lg:p-12 shadow-pricing overflow-hidden min-h-[400px] flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                <div className="space-y-5">
                  <span className="inline-block px-4 py-1.5 rounded-full text-[0.75rem] font-bold uppercase tracking-[1.2px] bg-[rgba(61,170,114,0.12)] text-[#3DAA72]">
                    THE REALITY
                  </span>
                  <h3 className="font-sans font-bold text-[1.8rem] md:text-[2.2rem] leading-tight text-white">
                    Happy customers forget.{" "}
                    <span className="text-[#EF4444]">Angry ones never do.</span>
                  </h3>
                  <p className="font-sans text-[1rem] text-[#CBD5E1] leading-relaxed">
                    A satisfied customer finishes their meal, gets their haircut,
                    leaves your clinic — and thinks{" "}
                    <em>"I should leave a review."</em> But life gets in the
                    way. They forget. That review? Gone forever. Meanwhile, one
                    bad experience and an angry customer is pulling out their
                    phone before they even reach their car.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-full max-w-[420px] bg-[#1B2A4A] border border-[#3D4F72] rounded-2xl p-6 md:p-8 min-h-[220px] flex flex-col justify-center items-center shadow-sm">
                    <div className="text-center space-y-4 w-full">
                      <div className="text-5xl animate-bounce">😊</div>
                      <div className="text-[#CBD5E1] font-medium text-[0.95rem] italic">
                        "That was great, I'll leave a review later..."
                      </div>
                      <div className="flex items-center justify-center gap-4 text-[#3D4F72] text-xl">
                        <span>📱</span>
                        <span>➔</span>
                        <span className="text-2xl animate-pulse">💤</span>
                      </div>
                      <div className="text-[#3D4F72] text-[0.85rem] font-bold uppercase tracking-wider">
                        Later never comes.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Card 2: The Math (comes OVER Card 1) ─── */}
            <div className="story-frame relative lg:absolute lg:inset-0 z-20 w-full bg-[#253559] border border-[#3D4F72] rounded-3xl p-6 md:p-10 lg:p-12 shadow-pricing overflow-hidden min-h-[400px] flex items-center mt-6 lg:mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                <div className="space-y-5 lg:order-2">
                  <span className="inline-block px-4 py-1.5 rounded-full text-[0.75rem] font-bold uppercase tracking-[1.2px] bg-[rgba(239,68,68,0.12)] text-[#EF4444]">
                    THE MATH IS BRUTAL
                  </span>
                  <h3 className="font-sans font-bold text-[1.8rem] md:text-[2.2rem] leading-tight text-white">
                    1 negative review needs{" "}
                    <span className="text-[#EF4444]">15</span> positive ones to
                    recover.
                  </h3>
                  <p className="font-sans text-[1rem] text-[#CBD5E1] leading-relaxed">
                    Google's algorithm weighs negative reviews heavily. One
                    1-star review drags down your average so much that you need
                    15 five-star reviews just to recover. And vague "Nice place"
                    reviews? Google treats them as spam signals. You need real,
                    detailed reviews — consistently.
                  </p>
                </div>
                <div className="flex justify-center lg:order-1">
                  <div className="w-full max-w-[420px] bg-[#1B2A4A] border border-[#3D4F72] rounded-2xl p-6 md:p-8 min-h-[220px] flex flex-col justify-center items-center shadow-sm">
                    <div className="w-full space-y-5 text-center">
                      <div className="font-sans font-extrabold text-[4rem] text-[#EF4444] leading-none drop-shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                        1★
                      </div>
                      <div className="text-white font-semibold text-[0.95rem]">
                        = 15 five-star reviews just to get back to your average
                        rating
                      </div>
                      <div className="bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] rounded-lg p-3 text-left">
                        <div className="text-[#EF4444] text-[0.75rem] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <span>⚠️</span> ALGORITHM ALERT
                        </div>
                        <div className="text-[#CBD5E1] text-[0.8rem] leading-snug">
                          Positive reviews that say only "Nice" or "Good" are
                          flagged as low quality. Google may suppress them.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Card 3: The Solution (comes OVER Card 2) ─── */}
            <div className="story-frame relative lg:absolute lg:inset-0 z-30 w-full bg-[#253559] border border-[#3DAA72]/30 rounded-3xl p-6 md:p-10 lg:p-12 shadow-pricing overflow-hidden min-h-[400px] flex items-center mt-6 lg:mt-0">
              {/* Green top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#3DAA72] to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                <div className="space-y-5">
                  <span className="inline-block px-4 py-1.5 rounded-full text-[0.75rem] font-bold uppercase tracking-[1.2px] bg-[rgba(61,170,114,0.12)] text-[#3DAA72]">
                    THE SOLUTION
                  </span>
                  <h3 className="font-sans font-bold text-[1.8rem] md:text-[2.2rem] leading-tight text-white">
                    One QR code.{" "}
                    <span className="text-[#3DAA72]">Real reviews.</span> On
                    autopilot.
                  </h3>
                  <p className="font-sans text-[1rem] text-[#CBD5E1] leading-relaxed">
                    Place a Karo Simple QR code at your counter, on your table,
                    or in your invoice. Happy customers scan and get prompted to
                    write a detailed review on Google. Karo Simple even helps
                    them write it better. Unhappy customers get a private
                    feedback form — their complaint comes to you, not the
                    internet.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-full max-w-[420px] bg-[#1B2A4A] border border-[#3D4F72] rounded-2xl p-6 md:p-8 min-h-[220px] flex flex-col justify-center items-center shadow-sm">
                    <div className="w-full flex flex-col items-center text-center space-y-4">
                      {/* Glowy QR simulation */}
                      <div className="w-[100px] h-[100px] border-2 border-[#3DAA72] rounded-lg flex items-center justify-center p-2 bg-[#1B2A4A] relative shadow-[0_0_20px_rgba(61,170,114,0.25)] animate-pulse">
                        <div className="grid grid-cols-3 gap-1 w-full h-full opacity-80">
                          <div className="border border-white bg-white" />
                          <div />
                          <div className="border border-white bg-white" />
                          <div />
                          <div className="border border-white bg-white" />
                          <div />
                          <div className="border border-white bg-white" />
                          <div />
                          <div className="border border-white bg-white" />
                        </div>
                        <div className="absolute -bottom-3 bg-[#3DAA72] text-white font-bold text-[0.6rem] px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                          SCAN
                        </div>
                      </div>

                      <div className="text-[1.2rem] text-yellow-400 font-bold tracking-widest mt-2">
                        ★★★★★
                      </div>

                      <div className="bg-[rgba(61,170,114,0.08)] border border-[rgba(61,170,114,0.2)] rounded-full py-2 px-4 inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#3DAA72] animate-ping" />
                        <span className="text-[#3DAA72] text-[0.8rem] font-bold">
                          Review posted on Google · 45 seconds ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemStorySection;

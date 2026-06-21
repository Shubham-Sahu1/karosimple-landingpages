"use client";

import React from "react";

export function TestimonialsSection() {
  const cards = [
    {
      icon: "🍽️",
      title: "Restaurant / Dhaba Owner",
      pain: "You serve 80 customers a day and your food is genuinely great. But your Google rating is 3.9 because one bad review dragged everything down and your happy customers never bothered to write anything.",
      outcome: "Karo Simple gets you consistent 5-star reviews from real diners every single week.",
    },
    {
      icon: "💇",
      title: "Salon / Parlour Owner",
      pain: "Your clients love their results and always say they'll recommend you. But when someone searches for a salon in your area, your competitor with more Google reviews comes up first.",
      outcome: "Karo Simple turns every happy client into a visible 5-star review that brings in the next one.",
    },
    {
      icon: "🩺",
      title: "Clinic / Doctor",
      pain: "Your patients trust you completely and outcomes are great. But one anonymous 1-star review (probably from a competitor or a dissatisfied patient you had no control over) is hurting your credibility online.",
      outcome: "Karo Simple floods your profile with real, detailed positive reviews while routing complaints to you privately.",
    },
  ];

  return (
    <section className="w-full bg-[#1B2A4A] py-20 md:py-28 px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
            WHO IT’S FOR
          </span>
          <h2 className="font-sans font-bold text-[2rem] md:text-[3rem] leading-tight text-white max-w-4xl mx-auto">
            Built for business owners who know their service is good — but their rating doesn’t show it.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#253559] border border-[#3D4F72] hover:border-[#3DAA72] rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-card"
            >
              <div className="space-y-4">
                <div className="text-4xl select-none">{card.icon}</div>
                <h3 className="font-sans font-bold text-[1.25rem] text-white leading-tight">
                  {card.title}
                </h3>
                <p className="font-sans text-[0.92rem] text-[#CBD5E1] leading-relaxed">
                  {card.pain}
                </p>
              </div>

              {/* Outcome block */}
              <div className="mt-6 pt-6 border-t border-[#3D4F72]">
                <div className="text-[#3DAA72] text-[0.85rem] font-bold uppercase tracking-wide mb-1 flex items-center gap-1.5">
                  <span>✓</span> Karo Simple Outcome
                </div>
                <p className="font-sans text-[0.9rem] text-[#F1F5F9] font-medium leading-relaxed">
                  {card.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

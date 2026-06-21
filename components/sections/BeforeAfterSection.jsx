"use client";

import React from "react";

export function BeforeAfterSection() {
  const beforeReviews = [
    {
      reviewer: "Amit S.",
      time: "2 months ago",
      rating: "★★★★★",
      text: "“Nice place.”",
      warning: "⚠ Low quality — Google may suppress",
      isNegative: false,
    },
    {
      reviewer: "Priya M.",
      time: "3 months ago",
      rating: "★★★★☆",
      text: "“Good food.”",
      warning: "⚠ Treated as spam signal",
      isNegative: false,
    },
    {
      reviewer: "Rohan T.",
      time: "4 months ago",
      rating: "★☆☆☆☆",
      text: "“Pathetic service. Waited 1 hour. Never coming back.”",
      warning: "⚠ Now destroying your rating",
      isNegative: true,
    },
  ];

  const afterReviews = [
    {
      reviewer: "Suresh K.",
      time: "2 hours ago",
      rating: "★★★★★",
      text: "“Visited for lunch today and was blown away. The dal tadka was absolutely authentic, reminded me of home-cooked food. Staff was warm and the service was quick despite being busy. Will definitely be coming back with family!”",
    },
    {
      reviewer: "Neha R.",
      time: "Yesterday",
      rating: "★★★★★",
      text: "“Best experience I’ve had in a while. Everything from the ambience to the food quality was top-notch. The owner was personally attentive. Recommend to anyone looking for authentic flavours in the area.”",
    },
  ];

  return (
    <section className="w-full bg-[#1B2A4A] py-20 md:py-28 px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
            BEFORE VS AFTER
          </span>
          <h2 className="font-sans font-bold text-[2rem] md:text-[3rem] leading-tight text-white">
            The difference Karo Simple makes
          </h2>
          <p className="font-sans text-[1.1rem] text-[#CBD5E1] max-w-[620px] mx-auto leading-relaxed">
            Real review quality — the type that actually builds trust and ranks you higher on search engines.
          </p>
        </div>

        {/* Before vs After Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Before */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.15)] text-[#EF4444] px-4 py-2 rounded-full font-sans font-bold text-[0.85rem] uppercase tracking-wider">
              ❌ Before Karo Simple
            </div>
            
            <div className="space-y-4">
              {beforeReviews.map((review, i) => (
                <div
                  key={i}
                  className={`bg-[#253559] border border-[rgba(239,68,68,0.25)] rounded-2xl p-5 space-y-3 ${
                    review.isNegative ? "border-[rgba(239,68,68,0.45)]" : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#3D4F72] flex items-center justify-center text-xs font-bold text-[#CBD5E1]">
                        {review.reviewer[0]}
                      </div>
                      <div>
                        <div className="text-[#F1F5F9] text-xs font-bold">{review.reviewer}</div>
                        <div className="text-[#6B7A99] text-[0.7rem]">{review.time}</div>
                      </div>
                    </div>
                    <div className={review.isNegative ? "text-[#EF4444] text-xs" : "text-yellow-600 text-xs"}>
                      {review.rating}
                    </div>
                  </div>

                  <p className={`text-[0.88rem] leading-relaxed ${review.isNegative ? "text-[#EF4444]" : "text-[#6B7A99] italic"}`}>
                    {review.text}
                  </p>

                  <div className="text-[0.75rem] font-bold text-[#EF4444] bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.1)] py-1.5 px-3.5 rounded-full flex items-center gap-1.5 w-fit">
                    {review.warning}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - After */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[rgba(61,170,114,0.08)] border border-[rgba(61,170,114,0.15)] text-[#3DAA72] px-4 py-2 rounded-full font-sans font-bold text-[0.85rem] uppercase tracking-wider">
              ✅ After Karo Simple
            </div>

            <div className="space-y-4">
              {afterReviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-[#253559] border border-[rgba(61,170,114,0.25)] rounded-2xl p-5 space-y-3 shadow-[0_0_20px_rgba(61,170,114,0.03)]"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {/* Gradient avatar using green/navy scheme */}
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3DAA72] to-[#253559] flex items-center justify-center text-xs font-bold text-white">
                        {review.reviewer[0]}
                      </div>
                      <div>
                        <div className="text-[#F1F5F9] text-xs font-bold">{review.reviewer}</div>
                        <div className="text-[#6B7A99] text-[0.7rem]">{review.time}</div>
                      </div>
                    </div>
                    <div className="text-yellow-400 text-xs font-bold">
                      {review.rating}
                    </div>
                  </div>

                  <p className="text-[#F1F5F9] text-[0.88rem] leading-relaxed">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfterSection;

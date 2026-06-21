"use client";

import React, { useRef } from "react";
import { AlertCircle, EyeOff, ShieldAlert } from "lucide-react";
import { useGSAPReveal } from "@/hooks/useGSAPReveal";

export function PainPointSection() {
  const sectionRef = useRef(null);
  
  // Attach scroll reveal
  useGSAPReveal(sectionRef, { stagger: 0.1 });

  const painPoints = [
    {
      icon: <AlertCircle className="w-8 h-8 text-ks-red" />,
      stat: "67%",
      title: "Check Reviews First",
      desc: "Nearly 67% of customers check Google reviews before visiting a local shop, restaurant, or clinic in India.",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-ks-red" />,
      stat: "Permanent",
      title: "Permanent Impact",
      desc: "One single negative review stays on your Google Business Profile forever, lowering your score and reputation daily.",
    },
    {
      icon: <EyeOff className="w-8 h-8 text-ks-red" />,
      stat: "Silent Loss",
      title: "Silent Customer Losses",
      desc: "Most unhappy business clients simply leave silently and go to your competitors, without ever telling you why.",
    },
  ];

  return (
    <section
      id="pain-points"
      ref={sectionRef}
      className="bg-ks-red-soft py-16 md:py-24 border-y border-ks-red/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center space-y-12">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="type-label text-ks-red font-bold block" data-reveal>
            The Reputation Trap
          </span>
          <h2 className="type-h2 md:text-4xl text-ks-navy font-bold leading-tight text-balance" data-reveal>
            One bad Google review can cost you 10 new customers. You deserve a fair chance.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="bg-ks-white rounded-2xl p-6 lg:p-8 border-l-4 border-ks-red shadow-sm text-left space-y-4 hover:shadow-md transition-shadow duration-300"
              data-reveal
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-ks-red/5 rounded-xl">
                  {item.icon}
                </div>
                <span className="type-h2 text-ks-red font-black leading-none select-none">
                  {item.stat}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="type-h3 text-ks-navy font-extrabold">{item.title}</h3>
                <p className="type-body-sm text-ks-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge text link */}
        <div className="pt-4" data-reveal>
          <a
            href="#how-it-works"
            className="type-body-lg font-bold text-ks-navy hover:text-ks-green inline-flex items-center gap-1.5 transition-colors group"
          >
            Karo Simple fixes all three. Here&apos;s how
            <span className="group-hover:translate-y-1 transition-transform duration-300 block">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
export default PainPointSection;

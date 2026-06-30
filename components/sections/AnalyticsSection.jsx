"use client";

import React, { useRef } from "react";
import { TrendingUp, Users, Clock } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AnalyticsSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".analytics-content, .analytics-image", { opacity: 1, x: 0 });
        return;
      }

      // Content slide-in from left
      gsap.fromTo(
        ".analytics-content",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Image slide-in from right
      gsap.fromTo(
        ".analytics-image",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="analytics"
      ref={sectionRef}
      className="w-full bg-[#253559] border-t border-b border-[#3D4F72] py-20 md:py-28 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="analytics-content lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px] block">
                Complete Analytics
              </span>
              <h2 className="font-sans font-bold text-[2rem] md:text-[2.75rem] leading-tight text-white tracking-tight">
                Go beyond reviews with{" "}
                <span className="text-[#3DAA72]">Complete Analytics</span>
              </h2>
              <p className="font-sans text-[1rem] md:text-[1.05rem] text-[#CBD5E1] leading-relaxed">
                We don't just provide review suggestions; we give you a 360° view of your business reputation. Track when, where, and how your customers and employees are engaging.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="flex items-center justify-center rounded-xl p-2.5 bg-[rgba(61,170,114,0.12)] text-[#3DAA72] w-11 h-11 shrink-0 mr-4">
                  <TrendingUp className="w-6 h-6" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white text-base mb-1">
                    Keyword Intelligence
                  </h4>
                  <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                    See which keywords are ranking in your reviews to understand customer sentiment.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="flex items-center justify-center rounded-xl p-2.5 bg-[rgba(61,170,114,0.12)] text-[#3DAA72] w-11 h-11 shrink-0 mr-4">
                  <Users className="w-6 h-6" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white text-base mb-1">
                    Employee Performance
                  </h4>
                  <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                    Identify which staff members are driving the most reviews and who needs more training.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="flex items-center justify-center rounded-xl p-2.5 bg-[rgba(61,170,114,0.12)] text-[#3DAA72] w-11 h-11 shrink-0 mr-4">
                  <Clock className="w-6 h-6" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white text-base mb-1">
                    Trend Analysis
                  </h4>
                  <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                    Detailed reports on when people respond, identifying peak hours for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="analytics-image lg:col-span-6 w-full flex justify-center">
            <div className="relative w-full max-w-[500px] lg:max-w-full rounded-2xl overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.05)]">
              <Image
                src="/features/features-analytics.webp"
                alt="Go beyond reviews with Complete Analytics"
                width={640}
                height={360}
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AnalyticsSection;

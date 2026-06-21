"use client";

import React, { useRef } from "react";
import { REGISTER_URL } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CTAButton } from "../ui/CTAButton";

export function CTABannerSection() {
  const bannerRef = useRef(null);

  useGSAP(
    () => {
      // Handle user motion preference
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        gsap.set(bannerRef.current, { opacity: 1, scale: 1 });
        return;
      }

      // Entrance animation: scale bounce on scroll
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            // Initiate pulsing action after banner has settled
            gsap.to(".pulse-action-btn", {
              scale: 1.04,
              duration: 1.2,
              yoyo: true,
              repeat: -1,
              ease: "power1.inOut",
            });
          },
        }
      );
    },
    { scope: bannerRef }
  );

  return (
    <section className="py-16 md:py-24 bg-ks-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div
          ref={bannerRef}
          className="bg-ks-green rounded-3xl py-16 px-6 md:px-12 text-center text-ks-white shadow-pricing relative overflow-hidden opacity-0"
        >
          {/* Subtle background abstract circles */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-ks-white/5 border border-ks-white/10" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-ks-white/5 border border-ks-white/10" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="type-h2 md:text-5xl text-ks-white font-extrabold leading-tight">
              Your competitors are already getting reviews.
            </h2>
            <p className="type-body-lg text-ks-white/90 font-medium">
              Start free today &mdash; setup takes 5 minutes, no credit card required.
            </p>

            <div className="pt-4 flex flex-col items-center">
              <CTAButton
                href={REGISTER_URL}
                variant="secondary"
                className="pulse-action-btn text-ks-green bg-ks-white hover:bg-ks-off-white hover:text-ks-green-dark border-none shadow-lg px-10 py-4.5 text-base md:text-lg"
              >
                Create Free Account &rarr;
              </CTAButton>
            </div>

            <p className="text-xs text-ks-white/70 font-semibold tracking-wide uppercase pt-2">
              Join 500+ Indian businesses using Karo Simple
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTABannerSection;

"use client";

import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { REGISTER_URL } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CTAButton } from "../ui/CTAButton";
import { VideoModal } from "../ui/VideoModal";

// Dynamically import ThreeJS Scene with no SSR for performance and safety
const HeroScene = dynamic(() => import("../three/HeroScene"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-ks-navy" />,
});

export function HeroSection() {
  const containerRef = useRef(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const headlineText = "Get 5-Star Reviews on Google, Zomato, Justdial & More";
  const words = headlineText.split(" ");

  useGSAP(() => {
    // Check user motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(".reveal-word, .reveal-item", { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline();

    tl.to(".reveal-word", {
      opacity: 1,
      y: 0,
      stagger: 0.04,
      duration: 0.5,
      ease: "power4.out",
      delay: 0.2,
    })
      .fromTo(
        ".reveal-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .fromTo(
        ".reveal-canvas",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
        "-=0.6"
      );

    // Infinite chevron bounce
    gsap.to(".scroll-indicator", {
      y: 8,
      duration: 0.8,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, { scope: containerRef });

  return (
    <>
      <section
        id="hero"
        ref={containerRef}
        className="relative min-h-[90vh] lg:min-h-screen bg-ks-navy pt-24 pb-16 flex items-center overflow-hidden"
      >
        {/* Background canvas container */}
        <div className="absolute inset-0 z-0 reveal-canvas opacity-0 hidden lg:block">
          <HeroScene />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Content Column */}
            <div className="lg:col-span-7 text-left space-y-6 max-w-2xl">
              <span className="type-label text-ks-green inline-block tracking-wider reveal-item opacity-0">
                AI-Powered Review System for Indian Businesses
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ks-white leading-[1.1] tracking-tight">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="inline-block opacity-0 translate-y-8 reveal-word mr-2 md:mr-3"
                  >
                    {word}
                  </span>
                ))}
              </h1>
              
              <p className="type-body-lg text-ks-white/80 leading-relaxed reveal-item opacity-0">
                Your happy customers scan a custom QR code and post 5-star reviews on Google, Zomato, Swiggy, Justdial, Play Store, Flipkart, IndiaMART, or Blinkit in seconds. Unhappy clients route to your private inbox so you can fix issues privately.
              </p>
              
              {/* Buttons Row */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 reveal-item opacity-0">
                <CTAButton href={REGISTER_URL} variant="primary" className="shadow-cta">
                  Start Free Today <ArrowRight className="w-5 h-5 ml-2" />
                </CTAButton>
                <CTAButton variant="secondary" onClick={() => setVideoOpen(true)}>
                  <Play className="w-4 h-4 mr-2 fill-current" /> Watch Demo
                </CTAButton>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-xs font-semibold text-ks-white/60 reveal-item opacity-0">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ks-green mr-1.5 shrink-0" />
                  Free to start
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ks-green mr-1.5 shrink-0" />
                  Works on any mobile phone
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ks-green mr-1.5 shrink-0" />
                  Setup in 5 minutes
                </span>
              </div>
            </div>

            {/* Right Mobile Visual (For aesthetic spacing on desktop, hidden on mobile) */}
            <div className="hidden lg:block lg:col-span-5 relative reveal-item opacity-0">
              {/* Elegant glassmorphic showcase representing scanned QR rating */}
              <div className="bg-ks-white/10 backdrop-blur-md rounded-2xl p-8 border border-ks-white/20 shadow-pricing max-w-sm mx-auto text-left space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-ks-green flex items-center justify-center text-ks-white font-extrabold text-sm">
                    KS
                  </div>
                  <div>
                    <h4 className="type-body font-bold text-ks-white">Smart Review Router</h4>
                    <p className="type-body-sm text-ks-white/60">Multi-Platform Live Router</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="type-body-sm text-ks-white/90">Rate your experience:</p>
                  <div className="flex space-x-2 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl animate-pulse">★</span>
                    ))}
                  </div>
                </div>
                <div className="bg-ks-green/10 text-ks-green text-xs font-bold p-3 rounded-lg border border-ks-green/20">
                  🚀 Routed instantly to your chosen platform!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bounce scroll chevron */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
          <a href="#pain-points" className="scroll-indicator text-ks-white/40 hover:text-ks-green transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Demo Video Modal */}
      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Karo Simple — How It Works in 60 Seconds"
      />
    </>
  );
}
export default HeroSection;

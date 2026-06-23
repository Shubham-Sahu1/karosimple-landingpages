"use client";

import React, { useEffect, useRef, useState } from "react";
import { REGISTER_URL } from "@/lib/constants";
import { VideoModal } from "../ui/VideoModal";

export function HeroSection() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let stars = [];
    const starCount = 180;
    const mouse = { x: -1000, y: -1000, active: false };

    const resizeCanvas = () => {
      canvas.width = containerRef.current?.offsetWidth || window.innerWidth;
      canvas.height = containerRef.current?.offsetHeight || window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const width = canvas.width;
      const height = canvas.height;

      for (let i = 0; i < starCount; i++) {
        // Color distribution: 20% Brand Green (#3DAA72), 80% White (#FFFFFF)
        const randColor = Math.random();
        let color = "#FFFFFF";
        if (randColor < 0.2) {
          color = "#3DAA72";
        }

        const size = 0.6 + Math.random() * 1.5;

        // Slow float speed
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.1 + Math.random() * 0.2;

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          currX: 0,
          currY: 0,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: size,
          color: color,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.008 + Math.random() * 0.015,
        });

        stars[i].currX = stars[i].x;
        stars[i].currY = stars[i].y;
      }
    };

    const drawCircleStar = (c, cx, cy, size, opacity, color) => {
      c.save();
      c.globalAlpha = opacity;
      c.fillStyle = color;
      c.beginPath();
      c.arc(cx, cy, size, 0, Math.PI * 2);
      c.fill();
      c.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;

      stars.forEach((star) => {
        // float speed
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        star.phase += star.twinkleSpeed;
        const opacity = 0.15 + Math.abs(Math.sin(star.phase)) * 0.75;

        let targetX = star.x;
        let targetY = star.y;

        if (mouse.active) {
          const dx = mouse.x - star.x;
          const dy = mouse.y - star.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDisplacement = 40;
          const attractionRadius = 130;

          if (dist < attractionRadius) {
            const force = (attractionRadius - dist) / attractionRadius;
            const pullDistance = force * maxDisplacement;
            const angle = Math.atan2(dy, dx);
            
            targetX = star.x + Math.cos(angle) * pullDistance;
            targetY = star.y + Math.sin(angle) * pullDistance;

            star.currX += (targetX - star.currX) * 0.12;
            star.currY += (targetY - star.currY) * 0.12;
          } else {
            star.currX += (star.x - star.currX) * 0.06;
            star.currY += (star.y - star.currY) * 0.06;
          }
        } else {
          star.currX += (star.x - star.currX) * 0.06;
          star.currY += (star.y - star.currY) * 0.06;
        }

        drawCircleStar(ctx, star.currX, star.currY, star.size, opacity, star.color);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    containerRef.current?.addEventListener("mousemove", handleMouseMove);
    containerRef.current?.addEventListener("mouseleave", handleMouseLeave);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <section
        id="hero"
        ref={containerRef}
        className="relative min-h-screen bg-[#1B2A4A] flex items-center justify-center overflow-hidden pt-28 pb-16"
      >
        {/* Canvas Background with Twinkling Stars */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 pointer-events-none w-full h-full"
        />

        {/* Ambient Glow Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(61,170,114,0.06)] blur-[100px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgba(37,53,89,0.3)] blur-[90px] rounded-full pointer-events-none z-0" />

        {/* Content Container */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center z-10 relative flex flex-col items-center">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 bg-[rgba(61,170,114,0.1)] border border-[rgba(61,170,114,0.3)] text-[#3DAA72] text-[0.78rem] font-semibold px-4 py-1.5 rounded-full uppercase tracking-[0.8px] mb-7">
            ⭐ India’s Smartest Review Management Platform
          </div>

          {/* Heading H1 (Inter 800) */}
          <h1 className="font-sans font-extrabold text-[2.6rem] md:text-[3.8rem] lg:text-[4.8rem] leading-[1.1] tracking-tight text-white max-w-[840px] mb-6">
            Turn Every Happy Customer
            <br />
            <span className="text-[#3DAA72]">
              Into a 5-Star Review
            </span>
            <br />
            Automatically.
          </h1>

          {/* Subheading */}
          <p className="font-sans text-[1.12rem] text-[#CBD5E1] max-w-[580px] leading-relaxed mb-10">
            Customers scan a QR code and leave a real review in seconds.{" "}
            <span className="text-[#FFFFFF] font-bold">
              Unhappy ones get routed to private feedback, before they go public.
            </span>
          </p>

          {/* Call to Actions Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Primary CTA (Green Pill) */}
            <a
              href={REGISTER_URL}
              className="group relative inline-flex items-center justify-center font-sans font-semibold text-[1rem] text-[#FFFFFF] bg-[#3DAA72] px-[36px] py-[15px] rounded-full transform hover:scale-[1.02] hover:-translate-y-[2px] transition-all duration-300 shadow-[0_4px_12px_rgba(61,170,114,0.3)] hover:shadow-[0_8px_32px_rgba(61,170,114,0.45)]"
            >
              Start Free Today →
            </a>

            {/* Secondary CTA */}
            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center justify-center font-sans font-semibold text-[1rem] text-[#FFFFFF] bg-transparent border border-[#3D4F72] px-[28px] py-[15px] rounded-full hover:border-[#CBD5E1] hover:bg-[#253559] transition-all duration-300 cursor-pointer"
            >
              ▶ Watch Demo Video
            </button>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 mt-14 text-[#CBD5E1] font-sans font-medium text-[0.85rem]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3DAA72] shadow-[0_0_8px_#3DAA72]" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3DAA72] shadow-[0_0_8px_#3DAA72]" />
              <span>Works on phone</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3DAA72] shadow-[0_0_8px_#3DAA72]" />
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3DAA72] shadow-[0_0_8px_#3DAA72]" />
              <span>No app or login needed for customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Modal */}
      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        videoUrl="https://www.youtube.com/embed/DenulBBZ56I"
        title="Karo Simple: How It Works in 60 Seconds"
      />
    </>
  );
}

export default HeroSection;

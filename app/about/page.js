import React from "react";
import Image from "next/image";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { REGISTER_URL } from "@/lib/constants";

export const metadata = {
  title: "The Story Behind Karo Simple: Our Mission & Founders",
  description:
    "We did not build Karo Simple from an idea. We built it from a problem we could not stop thinking about. Meet Shubham and Chandan, the founders behind the review platform.",
  alternates: { canonical: "https://karosimple.in/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Navigation */}
      <MarketingNav />

      <main className="bg-[#1B2A4A] text-white">
        
        {/* ── SECTION 1: ABOUT PAGE HERO ── */}
        <section className="pt-32 pb-24 text-center">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 space-y-6">
            {/* Eyebrow badge */}
            <span className="inline-flex bg-[rgba(61,170,114,0.15)] border border-[#3DAA72]/30 text-[#3DAA72] text-[0.75rem] font-semibold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full">
              The story behind Karo Simple
            </span>

            {/* H1 */}
            <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-[760px] mx-auto">
              On a mission to help Indian businesses grow through trust.
            </h1>

            {/* Intro paragraph */}
            <p className="text-[1.125rem] text-white/75 max-w-[640px] mx-auto leading-relaxed pt-4">
              We're building the infrastructure of credibility for the next generation of Indian entrepreneurs.
            </p>
          </div>
        </section>

        {/* ── SECTION 2: THE PROBLEM WE LIVED ── */}
        <section className="py-24 bg-[#1B2A4A] border-t border-[#3D4F72]/30">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            
            {/* Section Header */}
            <div className="text-center mb-20 space-y-3">
              <span className="text-[0.75rem] font-semibold text-[#3DAA72] uppercase tracking-[2px]">
                The problem that started everything
              </span>
              <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-white leading-tight">
                We were in that room with business owners every week. We saw exactly what was going wrong.
              </h2>
            </div>

            {/* Grid Container for Problem Copy and Overlay Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="space-y-4 text-[1.05rem] text-[#CBD5E1] leading-relaxed">
                  <p>
                    For millions of small and medium businesses in India, the biggest barrier to growth isn't talent or capital—it's trust. In a digital-first economy, a customer's first interaction often happens on a screen.
                  </p>
                  <p>
                    We saw honest local businesses struggling because they didn't have the tools to capture and showcase the incredible work they were doing. Word of mouth was powerful but local, while the digital world was noisy and often misleading.
                  </p>
                  <p>
                    Karo Simple was born to bridge this gap. We created a platform that makes review collection as easy as a WhatsApp message, turning satisfied customers into a brand's most powerful growth engine.
                  </p>
                </div>
              </div>

              {/* Right: Image Card with Glassmorphic Overlay */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-[1.4] lg:aspect-auto lg:h-[350px]">
                  {/* Image container with rounded corners and overflow hidden */}
                  <div className="w-full h-full rounded-3xl overflow-hidden border border-[#3D4F72]/30 shadow-card bg-[#253559] relative">
                    <Image
                      src="/solving-review-problem.png"
                      alt="Solving the review problem for SMBs"
                      fill
                      sizes="(max-width: 640px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Floating Glassmorphic Badge - positioned to hang off bottom-left on larger viewports */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-[-24px] sm:bottom-[-24px] sm:top-auto bg-[rgba(37,53,89,0.85)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-2xl p-4 flex items-center gap-3 shadow-2xl select-none z-10">
                    <svg
                      className="w-10 h-10 text-[#3DAA72] shrink-0 drop-shadow-[0_2px_8px_rgba(61,170,114,0.3)]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12z" />
                      <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white" />
                    </svg>
                    <div className="text-left">
                      <div className="text-white font-bold text-sm leading-snug">Verified Trust</div>
                      <div className="text-[#CBD5E1] text-[0.75rem] leading-none mt-0.5">Building digital credibility</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 3: WHAT WE DECIDED TO DO ABOUT IT ── */}
        <section className="py-24 bg-[#253559] border-y border-[#3D4F72]/30">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            
            {/* Header */}
            <div className="text-center mb-12 space-y-3">
              <span className="text-[0.75rem] font-semibold text-[#3DAA72] uppercase tracking-[2px]">
                What we decided to do about it
              </span>
              <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-white leading-tight">
                We talked to hundreds of business owners before we wrote a single line of code.
              </h2>
            </div>

            {/* Paragraph stack */}
            <div className="space-y-6 text-[1.05rem] text-[#CBD5E1] leading-relaxed text-center">
              <p>
                Restaurants, salons, clinics, gyms, retail shops: the story was the same everywhere. Happy customers walking out without saying anything. Unhappy ones making noise online. Business owners stuck managing this manually, chasing reviews on WhatsApp, watching their rating drift down and not knowing how to stop it.
              </p>
              <p>
                We built Karo Simple because the solution was actually straightforward. Get in front of the happy customer right when they are happy (right at the counter, right after the service) and make leaving a review the easiest thing in the world to do. And if the customer was not happy, route that conversation privately so the business owner can fix it before it becomes a public problem.
              </p>
              <p>
                A QR code. A smart routing system. AI that helps customers say what they actually felt, in their own language. A dashboard that shows you what is working. That is Karo Simple. Built by two people who have been in that room with business owners and know exactly what the problem costs them.
              </p>
            </div>

            {/* Mission statement card */}
            <div className="bg-[#1B2A4A] border-l-4 border-[#3DAA72] rounded-r-2xl p-6 md:p-8 mt-10 shadow-sm max-w-2xl mx-auto">
              <p className="italic font-semibold text-lg md:text-xl text-white leading-relaxed">
                “Karo Simple exists so that every business owner in India can let their real reputation speak for itself, without chasing customers for reviews or watching bad ones pile up unchallenged.”
              </p>
            </div>

          </div>
        </section>

        {/* ── SECTION 4: THE FOUNDERS ── */}
        <section className="py-24 bg-[#1B2A4A] border-b border-[#3D4F72]/30">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            
            {/* Section Header */}
            <div className="text-center mb-20 space-y-3">
              <span className="text-[0.75rem] font-semibold text-[#38BDF8] uppercase tracking-[2px]">
                The minds behind the mission
              </span>
              <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-white leading-tight">
                Two people. Two roles. The same frustration every single time.
              </h2>
            </div>

            {/* Shubham Sahu Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24">
              {/* Left: Image Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative aspect-[3/4] w-full max-w-[340px] rounded-3xl overflow-hidden border border-[#38BDF8]/30 shadow-[0_0_35px_rgba(56,189,248,0.25)] bg-[#253559]">
                  <Image
                    src="/Team Image/Shubham.png"
                    alt="Shubham Sahu"
                    fill
                    sizes="(max-width: 640px) 100vw, 340px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/95 via-[#1B2A4A]/20 to-transparent" />
                </div>
              </div>

              {/* Right: Bio & Stats */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    Shubham
                  </h3>
                  <p className="text-[#38BDF8] text-[0.875rem] font-bold uppercase tracking-widest">
                    Founder, Software Developer & Digital Marketing Specialist
                  </p>
                </div>
                <div className="space-y-4 text-[0.975rem] text-[#CBD5E1] leading-relaxed">
                  <p>
                    I used to think about this specific moment a lot. A business owner runs an ad, spends real money to get a new customer through the door, that customer has a perfectly good experience — and then nothing. No review. No trace that they were ever there.
                  </p>
                  <p>
                    But when something goes wrong, even slightly, that same customer pulls out their phone before they have left the building. One bad review goes up. It sits there. And now the next person who finds the business through that same ad sees it and talks themselves out of going.
                  </p>
                  <p>
                    The business owner is losing customers they never even knew they had. Every single day.
                  </p>
                </div>

                {/* Pull Quote */}
                <div className="border-l-4 border-[#38BDF8] pl-4 py-2 italic text-[0.975rem] text-[#CBD5E1] bg-[#253559]/20 rounded-r-2xl">
                  “You spend money bringing someone in. Then one old bad review sends them somewhere else. That is not a marketing problem. It is a reputation problem that nobody was solving.”
                </div>

                {/* Social Media Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  {/* Instagram */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-2xl p-4 text-center space-y-2 block transition-all duration-300 hover:scale-[1.05] hover:border-[#38BDF8]/60 hover:bg-[#253559]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] cursor-pointer"
                  >
                    <div className="flex justify-center text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors duration-200">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div className="text-[11px] text-[#94A3B8] group-hover:text-white font-bold uppercase tracking-wider transition-colors duration-200">
                      Instagram
                    </div>
                  </a>
                  {/* Facebook */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-2xl p-4 text-center space-y-2 block transition-all duration-300 hover:scale-[1.05] hover:border-[#38BDF8]/60 hover:bg-[#253559]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] cursor-pointer"
                  >
                    <div className="flex justify-center text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors duration-200">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <div className="text-[11px] text-[#94A3B8] group-hover:text-white font-bold uppercase tracking-wider transition-colors duration-200">
                      Facebook
                    </div>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-2xl p-4 text-center space-y-2 block transition-all duration-300 hover:scale-[1.05] hover:border-[#38BDF8]/60 hover:bg-[#253559]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] cursor-pointer"
                  >
                    <div className="flex justify-center text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors duration-200">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div className="text-[11px] text-[#94A3B8] group-hover:text-white font-bold uppercase tracking-wider transition-colors duration-200">
                      LinkedIn
                    </div>
                  </a>
                  {/* GitHub */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-2xl p-4 text-center space-y-2 block transition-all duration-300 hover:scale-[1.05] hover:border-[#38BDF8]/60 hover:bg-[#253559]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] cursor-pointer"
                  >
                    <div className="flex justify-center text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors duration-200">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                    <div className="text-[11px] text-[#94A3B8] group-hover:text-white font-bold uppercase tracking-wider transition-colors duration-200">
                      GitHub
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Chandan Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left: Bio & Stats */}
              <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    Chandan
                  </h3>
                  <p className="text-[#3DAA72] text-[0.875rem] font-bold uppercase tracking-widest">
                    Founder, Digital Marketing Specialist
                  </p>
                </div>
                <div className="space-y-4 text-[0.975rem] text-[#CBD5E1] leading-relaxed">
                  <p>
                    Managing SEO for a business and watching it slide because of the review section is a specific kind of helpless. You do everything right — the listing is optimised, the content is good, the location data is clean. And then someone leaves a 1-star review and the whole thing starts unravelling.
                  </p>
                  <p>
                    Google’s crawler reads negative reviews. It reads the bounce rate when customers see those reviews and leave. It reads the lower engagement. And slowly, your ranking drops. The business owner asks why. You explain. They feel helpless. You feel helpless. Nobody wins.
                  </p>
                  <p>
                    Plenty of agencies knew about this problem and said nothing. We decided to say something — and then build a fix.
                  </p>
                </div>

                {/* Pull Quote */}
                <div className="border-l-4 border-[#3DAA72] pl-4 py-2 italic text-[0.975rem] text-[#CBD5E1] bg-[#253559]/20 rounded-r-2xl">
                  “We have seen agencies let businesses fall apart rather than admit the review problem existed. We are not that agency. We built the tool we wish we had had from day one.”
                </div>

                {/* Social Media Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                  {/* Instagram */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-2xl p-4 text-center space-y-2 block transition-all duration-300 hover:scale-[1.05] hover:border-[#3DAA72]/60 hover:bg-[#253559]/40 hover:shadow-[0_0_20px_rgba(61,170,114,0.15)] cursor-pointer"
                  >
                    <div className="flex justify-center text-[#94A3B8] group-hover:text-[#3DAA72] transition-colors duration-200">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div className="text-[11px] text-[#94A3B8] group-hover:text-white font-bold uppercase tracking-wider transition-colors duration-200">
                      Instagram
                    </div>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-2xl p-4 text-center space-y-2 block transition-all duration-300 hover:scale-[1.05] hover:border-[#3DAA72]/60 hover:bg-[#253559]/40 hover:shadow-[0_0_20px_rgba(61,170,114,0.15)] cursor-pointer"
                  >
                    <div className="flex justify-center text-[#94A3B8] group-hover:text-[#3DAA72] transition-colors duration-200">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div className="text-[11px] text-[#94A3B8] group-hover:text-white font-bold uppercase tracking-wider transition-colors duration-200">
                      LinkedIn
                    </div>
                  </a>
                  {/* Facebook */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-2xl p-4 text-center space-y-2 block transition-all duration-300 hover:scale-[1.05] hover:border-[#3DAA72]/60 hover:bg-[#253559]/40 hover:shadow-[0_0_20px_rgba(61,170,114,0.15)] cursor-pointer"
                  >
                    <div className="flex justify-center text-[#94A3B8] group-hover:text-[#3DAA72] transition-colors duration-200">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <div className="text-[11px] text-[#94A3B8] group-hover:text-white font-bold uppercase tracking-wider transition-colors duration-200">
                      Facebook
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Image Card */}
              <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                <div className="relative aspect-[3/4] w-full max-w-[340px] rounded-3xl overflow-hidden border border-[#3DAA72]/30 shadow-[0_0_35px_rgba(61,170,114,0.25)] bg-[#253559]">
                  <Image
                    src="/Team Image/Chandan.png"
                    alt="Chandan"
                    fill
                    sizes="(max-width: 640px) 100vw, 340px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/95 via-[#1B2A4A]/20 to-transparent" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 4.5: TEAM MEMBERS ── */}
        <section className="py-24 bg-[#1B2A4A] border-t border-[#3D4F72]/30">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div className="space-y-3 text-left">
                <h2 className="text-[2.25rem] font-extrabold text-white leading-tight">
                  Behind the Screen
                </h2>
                <p className="text-[1.05rem] text-[#CBD5E1] max-w-xl leading-relaxed">
                  Our team is a blend of industry veterans and disruptive young talent, all focused on one goal: making business simpler for you.
                </p>
              </div>
              <a
                href="#"
                className="text-[#3DAA72] hover:text-[#2D8A5A] font-semibold flex items-center gap-1.5 transition-colors group shrink-0"
              >
                View Careers
                <svg
                  className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
              {[
                {
                  name: "Kunal",
                  role: "Developer",
                  bio: "Passionate developer specialized in Next.js and high-performance frontend interfaces.",
                  image: "/Team Image/Kunal.png"
                },
                {
                  name: "Gulshan",
                  role: "Developer",
                  bio: "Passionate developer specialized in Next.js and high-performance frontend interfaces.",
                  image: "/Team Image/Gulshan.jpeg"
                }
              ].map((member, index) => (
                <div key={index} className="space-y-4 text-left group">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[#3D4F72]/30 shadow-md bg-[#253559] transition-all duration-300 group-hover:border-[#3DAA72]/50 group-hover:shadow-[0_0_20px_rgba(61,170,114,0.15)]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 340px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 via-transparent to-transparent" />
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-[1.15rem] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-[#3DAA72] text-[0.82rem] font-bold uppercase tracking-wider mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-[#CBD5E1] text-[0.875rem] leading-relaxed mt-2">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: MISSION & VISION ── */}
        <section className="py-24 bg-[#1B2A4A] border-t border-[#3D4F72]/30">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              
              {/* Mission Column */}
              <div className="bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-3xl p-8 md:p-10 space-y-4 hover:border-[#3DAA72]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(61,170,114,0.08)]">
                <span className="text-[0.75rem] font-semibold text-[#3DAA72] uppercase tracking-[2px] block">
                  Why Karo Simple exists
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Our Mission
                </h3>
                <p className="text-[0.975rem] text-[#CBD5E1] leading-relaxed">
                  Most businesses in India lose customers silently — not because their service is bad, but because their reputation online does not reflect how good they actually are. We built Karo Simple so that gap closes. Every business owner who works hard deserves to have that work show up where customers are looking.
                </p>
              </div>

              {/* Vision Column */}
              <div className="bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-3xl p-8 md:p-10 space-y-4 hover:border-[#38BDF8]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.08)]">
                <span className="text-[0.75rem] font-semibold text-[#38BDF8] uppercase tracking-[2px] block">
                  Where we are going
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Our Vision
                </h3>
                <p className="text-[0.975rem] text-[#CBD5E1] leading-relaxed">
                  A future where no good business in India goes unnoticed because of a handful of bad reviews or the silence of happy customers. We want to be the reputation layer that every local business runs on — from the single-owner dhaba in Raipur to the franchise chain with fifty locations.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 6: THE PILLARS OF OUR PURPOSE ── */}
        <section className="py-24 bg-[#1B2A4A] border-t border-[#3D4F72]/30">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            
            {/* Section Header */}
              <div className="text-center mb-16 space-y-4 mx-auto">
              <h2 className="text-[2.25rem] font-extrabold text-white leading-tight">
                The Pillars of Our Purpose
              </h2>
              <p className="text-[1.05rem] text-[#CBD5E1] max-w-xl leading-relaxed mx-auto">
                Everything we build at Karo Simple is guided by these four foundational principles.
               </p>
              </div>


            {/* Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Card 1: Radical Efficiency (Wide) */}
              <div className="lg:col-span-8 bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-3xl p-8 flex flex-col justify-between hover:border-[#3DAA72]/40 transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#3DAA72]/10 text-[#3DAA72] border border-[#3DAA72]/20 flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Radical Efficiency</h3>
                    <p className="text-[1rem] text-[#CBD5E1] leading-relaxed max-w-2xl">
                      Time is the most valuable asset for any business owner. Our UI is stripped of fluff, designed for 3-tap actions that complete tasks in seconds, not minutes.
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <a href="#" className="inline-flex items-center text-[#3DAA72] font-semibold hover:text-[#2D8A5A] transition-colors duration-200 gap-1.5 group">
                    Learn about our UX approach <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Built on Trust (Narrow) */}
              <div className="lg:col-span-4 bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-3xl p-8 flex flex-col justify-between hover:border-[#3DAA72]/40 transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#3DAA72]/10 text-[#3DAA72] border border-[#3DAA72]/20 flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 11l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Built on Trust</h3>
                    <p className="text-[1rem] text-[#CBD5E1] leading-relaxed">
                      Data security isn't a feature; it's our baseline. We implement enterprise-grade encryption for every single SMB.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Localized Context (Narrow) */}
              <div className="lg:col-span-4 bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-3xl p-8 flex flex-col justify-between hover:border-[#3DAA72]/40 transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#3DAA72]/10 text-[#3DAA72] border border-[#3DAA72]/20 flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Localized Context</h3>
                    <p className="text-[1rem] text-[#CBD5E1] leading-relaxed">
                      Designed specifically for the Indian market, integrating natively with WhatsApp and local payment rails.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Global Standards, Local Soul (Wide with mockup) */}
              <div className="lg:col-span-8 bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-3xl p-8 hover:border-[#3DAA72]/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 h-full">
                  <div className="space-y-4 md:w-3/5">
                    <h3 className="text-2xl font-bold text-white">Global Standards, Local Soul</h3>
                    <p className="text-[1rem] text-[#CBD5E1] leading-relaxed">
                      We bring Silicon Valley technology to the neighborhood shops of Mumbai, Delhi, and Bangalore. Our engineering is world-class, our heart is local.
                    </p>
                  </div>

                  {/* Wireframe Mockup Dashboard Card */}
                  <div className="w-full md:w-2/5 aspect-[1.6] bg-[#1B2A4A] rounded-2xl border border-[#3D4F72]/30 p-4 flex flex-col justify-between shrink-0 shadow-lg">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-3/4 bg-[#3D4F72]/40 rounded"></div>
                      <div className="h-2 w-1/2 bg-[#3D4F72]/40 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-1/3 bg-[#3DAA72]/20 border border-[#3DAA72]/30 rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#3DAA72] rounded-full"></div>
                      </div>
                      <div className="h-8 w-2/3 bg-[#3D4F72]/30 border border-[#3D4F72]/20 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 7: VALUES THAT DRIVE US ── */}
        <section className="py-24 bg-[#1B2A4A] border-t border-[#3D4F72]/30">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            
            {/* Section Header */}
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-[2.25rem] font-extrabold text-white leading-tight">
                Values that drive us
              </h2>
              <p className="text-[1.05rem] text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
                Our culture is built on four core principles that guide every feature we build and every customer we support.
              </p>
            </div>

            {/* Cards Grid with glowing effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Simple (Green theme glow) */}
              <div className="bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-3xl p-8 space-y-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#3DAA72]/60 hover:bg-[#253559]/30 hover:shadow-[0_10px_30px_rgba(61,170,114,0.15)] group">
                <div className="w-12 h-12 rounded-2xl bg-[#3DAA72]/10 text-[#3DAA72] border border-[#3DAA72]/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#3DAA72]/20">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#3DAA72]">Simple</h3>
                  <p className="text-[0.95rem] text-[#CBD5E1] leading-relaxed">
                    Technology should work for people, not against them. We prioritize clarity above all.
                  </p>
                </div>
              </div>

              {/* Card 2: Trustworthy (Blue theme glow) */}
              <div className="bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-3xl p-8 space-y-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/60 hover:bg-[#253559]/30 hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)] group">
                <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#38BDF8]/20">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#38BDF8]">Trustworthy</h3>
                  <p className="text-[0.95rem] text-[#CBD5E1] leading-relaxed">
                    Authenticity is our currency. We build products that foster genuine human connections.
                  </p>
                </div>
              </div>

              {/* Card 3: India-First (Green theme glow) */}
              <div className="bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-3xl p-8 space-y-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#3DAA72]/60 hover:bg-[#253559]/30 hover:shadow-[0_10px_30px_rgba(61,170,114,0.15)] group">
                <div className="w-12 h-12 rounded-2xl bg-[#3DAA72]/10 text-[#3DAA72] border border-[#3DAA72]/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#3DAA72]/20">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#3DAA72]">India-First</h3>
                  <p className="text-[0.95rem] text-[#CBD5E1] leading-relaxed">
                    Optimized for local nuances, from WhatsApp integration to regional language support.
                  </p>
                </div>
              </div>

              {/* Card 4: Empowering (Blue theme glow) */}
              <div className="bg-[#253559]/20 backdrop-blur-sm border border-[#3D4F72]/40 rounded-3xl p-8 space-y-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/60 hover:bg-[#253559]/30 hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)] group">
                <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#38BDF8]/20">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#38BDF8]">Empowering</h3>
                  <p className="text-[0.95rem] text-[#CBD5E1] leading-relaxed">
                    We succeed only when our users grow their business and reach their full potential.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 8: BOTTOM CTA ── */}
        <section className="bg-[#1B2A4A] py-24 border-t border-[#3D4F72]/30">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="bg-[#399465] rounded-[2rem] p-8 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
              
              {/* Background glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <h2 className="text-[2rem] md:text-[2.75rem] font-extrabold text-white max-w-[680px] mx-auto leading-tight">
                  If this sounds like the problem your business is dealing with, you are in the right place.
                </h2>
                <p className="text-[1.125rem] text-white/90 max-w-[500px] mx-auto leading-relaxed">
                  Try Karo Simple free. No card, no commitment. See what consistent 5-star reviews actually do for a business.
                </p>
                <div className="pt-2">
                  <a
                    href={REGISTER_URL}
                    className="inline-flex items-center justify-center bg-white hover:bg-slate-100
                               text-[#3DAA72] font-semibold text-[1rem] px-8 py-4 rounded-full transition-all duration-200
                               hover:shadow-[0_4px_25px_rgba(255,255,255,0.25)]"
                  >
                    Start Free Today →
                  </a>
                </div>
                <p className="text-[0.8125rem] text-white/70">
                  Built for local shops & online sellers alike &bull; Simple dashboard, easy to manage &bull; Setup in minutes, no hassle &bull; Support that understands your business
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <MarketingFooter />
    </>
  );
}

import React from "react";
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
              We did not build this from an idea. We built it from a problem we could not stop thinking about.
            </h1>

            {/* Intro paragraph */}
            <p className="text-[1.125rem] text-white/75 max-w-[640px] mx-auto leading-relaxed pt-4">
              Shubham and Chandan spent years helping businesses grow online. And they kept running into the same wall: customers who were genuinely happy with the service but never said so anywhere it counted. This is what they decided to do about it.
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
              <p className="text-[1.05rem] text-[#CBD5E1] max-w-[560px] mx-auto leading-relaxed">
                Two people. Two roles. The same frustration every single time.
              </p>
            </div>

            {/* Shubham Sahu Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24">
              {/* Left: Image Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative aspect-[3/4] w-full max-w-[340px] rounded-3xl overflow-hidden border border-[#38BDF8]/30 shadow-[0_0_35px_rgba(56,189,248,0.25)] bg-[#253559]">
                  <img
                    src="/Team Image/Shubham.png"
                    alt="Shubham Sahu"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/95 via-[#1B2A4A]/20 to-transparent" />
                </div>
              </div>

              {/* Right: Bio & Stats */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    Shubham Sahu
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
                  <img
                    src="/Team Image/Chandan.jpeg"
                    alt="Chandan"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/95 via-[#1B2A4A]/20 to-transparent" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 3: WHAT WE BUILT AND WHY ── */}
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

        {/* ── SECTION 4: MISSION & VISION ── */}
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

        {/* ── SECTION 5: BOTTOM CTA ── */}
        <section className="bg-[#253559] py-20 text-center border-t border-[#3D4F72]/30">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <h2 className="text-[2rem] md:text-[2.75rem] font-extrabold text-white max-w-[560px] mx-auto leading-tight mb-5">
              If this sounds like the problem your business is dealing with, you are in the right place.
            </h2>
            <p className="text-[1.125rem] text-white/70 max-w-[460px] mx-auto mb-8 leading-relaxed">
              Try Karo Simple free. No card, no commitment. See what consistent 5-star reviews actually do for a business.
            </p>
            <div>
              <a
                href={REGISTER_URL}
                className="inline-flex items-center justify-center bg-[#3DAA72] hover:bg-[#2D8A5A]
                           text-white font-semibold text-[1rem] px-8 py-4 rounded-full transition-all duration-200
                           hover:shadow-[0_4px_20px_rgba(61,170,114,0.35)]"
              >
                Start Free Today →
              </a>
            </div>
            <p className="mt-5 text-[0.8125rem] text-[#94A3B8]">
              Free plan available forever. Takes 5 minutes to set up.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MarketingFooter />
    </>
  );
}

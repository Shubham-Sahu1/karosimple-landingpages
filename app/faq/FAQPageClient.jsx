"use client";

import React from "react";
import { faqCategories } from "@/data/faqData";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function FAQPageClient() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for sticky navbar header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update browser URL hash quietly
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
      {/* Page Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
        <span className="inline-block bg-[rgba(61,170,114,0.15)] border border-[#3DAA72]/30 text-[#3DAA72] text-[0.75rem] font-semibold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full">
          Help & Documentation
        </span>
        <h1 className="text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] font-extrabold text-white leading-[1.1] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-[1.125rem] text-white/75 leading-relaxed pt-2">
          Everything you need to know about our review routing system, QR codes, AI features, multi-branch plans, and support options.
        </p>
      </div>

      {/* Main Grid Layout (Sticky Sidebar + Accordions) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Sticky Category Navigation (lg:col-span-3) */}
        <aside className="lg:col-span-3 sticky top-28 hidden lg:block border-l border-[#3D4F72]/30 pl-6 space-y-3">
          <p className="text-[0.7rem] font-bold text-[#3DAA72] uppercase tracking-[1.5px] mb-4">
            Categories
          </p>
          <nav className="flex flex-col space-y-2.5">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={(e) => handleScroll(e, cat.id)}
                className="text-[0.9rem] text-[#94A3B8] hover:text-[#3DAA72] transition-colors duration-200 font-medium text-left cursor-pointer"
              >
                {cat.name}
              </a>
            ))}
          </nav>
        </aside>

        {/* Right Column: Grouped FAQ lists (lg:col-span-9) */}
        <div className="lg:col-span-9 space-y-16">
          {faqCategories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-24 space-y-6">
              {/* Category Header */}
              <div className="border-b border-[#3D4F72]/30 pb-3">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-[#3DAA72]">#</span> {cat.name}
                </h2>
              </div>

              {/* Collapsible Accordion Group */}
              <FAQAccordion items={cat.faqs} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default FAQPageClient;

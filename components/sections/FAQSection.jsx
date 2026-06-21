"use client";

import React, { useState } from "react";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Will my customers actually scan the QR code?",
      answer: "Absolutely — QR code usage in India has exploded since UPI payments made scanning second nature. If your customers can pay via PhonePe or Paytm QR, they'll scan your review QR without a second thought. Most businesses see 60–80% of engaged customers scan within the first week."
    },
    {
      question: "What happens if a customer is unhappy?",
      answer: "Unhappy customers are shown a private feedback form instead of being directed to Google. Their complaint comes straight to your dashboard, giving you a chance to resolve the issue before it becomes a public 1-star review. This alone saves many businesses from reputation damage every week."
    },
    {
      question: "Is this allowed by Google? Will reviews get removed?",
      answer: "100% Google-compliant. Karo Simple does not generate fake reviews. We help real customers who genuinely visited your business write better and more detailed reviews. Every review is authentic. We also help them avoid the vague 1–2 word reviews that Google's algorithm may suppress."
    },
    {
      question: "How long does setup take?",
      answer: "Under 5 minutes from signup to having your QR code ready to print. You don't need a developer, technical knowledge, or even a laptop — our mobile-friendly dashboard handles everything. Most business owners set it up themselves during their lunch break."
    },
    {
      question: "Can I manage multiple branches or locations?",
      answer: "Yes — the PRO plan supports up to 3 locations, and our Agency plan is purpose-built for businesses with many branches or agencies managing multiple clients. Each location gets its own QR code, dashboard, and review tracking."
    },
    {
      question: "What if I don't have any reviews yet?",
      answer: "That's actually the best time to start. Building from zero is far easier than recovering from negative reviews. Many of our best-performing customers started with 0 reviews and hit 50+ five-star reviews within their first month."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // SEO Schema
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="w-full bg-[#1B2A4A] py-20 md:py-28 px-4 md:px-8 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="w-full max-w-4xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
            FAQ
          </span>
          <h2 className="font-sans font-bold text-[2rem] md:text-[3rem] leading-tight text-white">
            Questions we hear all the time
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-[#253559] border border-[#3D4F72] rounded-[14px] overflow-hidden transition-all duration-300"
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between p-5 md:p-6 font-sans font-semibold text-[0.95rem] text-[#F1F5F9] hover:text-[#3DAA72] cursor-pointer transition-colors duration-200 outline-none select-none"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`text-[#3DAA72] text-2xl font-normal leading-none transform transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-[#3D4F72]" : "max-h-0"
                  }`}
                >
                  <p className="p-5 md:p-6 font-sans text-[0.92rem] text-[#CBD5E1] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

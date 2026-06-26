"use client";

import React, { useState } from "react";

export function FAQAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((faq, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="bg-[#253559]/40 border border-[#3D4F72]/50 rounded-[14px] overflow-hidden transition-all duration-300"
          >
            {/* Header Row */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex items-center justify-between p-5 md:p-6 font-sans font-semibold text-[0.95rem] text-[#F1F5F9] hover:text-[#3DAA72] cursor-pointer transition-colors duration-200 outline-none select-none"
            >
              <span className="pr-4">{faq.question}</span>
              <span
                className={`text-[#3DAA72] text-2xl font-normal leading-none transform transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>

            {/* Content Panel */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[500px] border-t border-[#3D4F72]/40" : "max-h-0"
              }`}
            >
              <p className="p-5 md:p-6 font-sans text-[0.92rem] text-[#CBD5E1] leading-relaxed whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;

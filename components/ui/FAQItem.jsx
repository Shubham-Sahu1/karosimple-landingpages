"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FAQItem({ value, question, answer }) {
  return (
    <Accordion.Item
      value={value}
      className="bg-ks-white rounded-xl border border-ks-border shadow-sm overflow-hidden transition-all duration-300"
    >
      <Accordion.Header className="flex">
        <Accordion.Trigger className="flex flex-1 items-center justify-between px-6 py-4.5 text-left type-body font-bold text-ks-navy hover:text-ks-green transition-colors duration-300 group outline-none cursor-pointer">
          {question}
          <ChevronDown className="w-5 h-5 text-ks-muted group-hover:text-ks-green transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0 ml-4" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden transition-all duration-300 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        <div className="px-6 pb-5 pt-1 type-body text-ks-muted leading-relaxed">
          {answer}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
export default FAQItem;

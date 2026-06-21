"use client";

import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export function BillingToggle({ billingPeriod, onChange }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <ToggleGroup.Root
        type="single"
        value={billingPeriod}
        onValueChange={(value) => {
          if (value) onChange(value);
        }}
        className="inline-flex bg-ks-border p-1 rounded-full border border-ks-border outline-none"
        aria-label="Billing Period Toggle"
      >
        <ToggleGroup.Item
          value="monthly"
          className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer outline-none data-[state=on]:bg-ks-green data-[state=on]:text-ks-white data-[state=off]:text-ks-muted hover:text-ks-navy"
        >
          Monthly
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="annual"
          className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer outline-none data-[state=on]:bg-ks-green data-[state=on]:text-ks-white data-[state=off]:text-ks-muted hover:text-ks-navy flex items-center gap-2"
        >
          Annual
          <span className="bg-ks-green text-ks-white text-[10px] font-extrabold px-2 py-0.5 rounded-full tracking-wide">
            Save 20%
          </span>
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}
export default BillingToggle;

"use client";

import React, { useState } from "react";

export function ROICalculatorSection() {
  const [monthlyCustomers, setMonthlyCustomers] = useState(200);
  const [avgSpend, setAvgSpend] = useState(500);
  const [currentRating, setCurrentRating] = useState(3.8);

  // Calculations
  const extraCustomers = Math.round(monthlyCustomers * 0.19);
  const extraRevenue = extraCustomers * avgSpend;
  const annualGain = extraRevenue * 12;
  const netGain = extraRevenue - 999;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="w-full bg-[#253559] border-t border-b border-[#3D4F72] py-20 md:py-28 px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
            ROI CALCULATOR
          </span>
          <h2 className="font-sans font-bold text-[2rem] md:text-[3rem] leading-tight text-white">
            See exactly how much a better rating is worth to you
          </h2>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          
          {/* Left Column - Sliders */}
          <div className="space-y-8">
            {/* Slider 1: Monthly Customers */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="text-[#CBD5E1] font-medium">Monthly customers</span>
                <span className="text-[#3DAA72] font-bold text-lg">{monthlyCustomers}</span>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={monthlyCustomers}
                onChange={(e) => setMonthlyCustomers(Number(e.target.value))}
                className="w-full h-[5px] bg-[#3D4F72] rounded-lg appearance-none cursor-pointer accent-[#3DAA72]"
              />
            </div>

            {/* Slider 2: Average Spend */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="text-[#CBD5E1] font-medium">Average spend per customer (₹)</span>
                <span className="text-[#3DAA72] font-bold text-lg">₹{formatCurrency(avgSpend)}</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={avgSpend}
                onChange={(e) => setAvgSpend(Number(e.target.value))}
                className="w-full h-[5px] bg-[#3D4F72] rounded-lg appearance-none cursor-pointer accent-[#3DAA72]"
              />
            </div>

            {/* Slider 3: Current Google Rating */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="text-[#CBD5E1] font-medium">Your current Google rating</span>
                <span className="text-[#3DAA72] font-bold text-lg">{currentRating} ★</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="4.9"
                step="0.1"
                value={currentRating}
                onChange={(e) => setCurrentRating(Number(e.target.value))}
                className="w-full h-[5px] bg-[#3D4F72] rounded-lg appearance-none cursor-pointer accent-[#3DAA72]"
              />
            </div>

            {/* Helper note */}
            <div className="text-[0.8rem] text-[#6B7A99] leading-relaxed font-sans pt-2">
              💡 Studies show businesses going from 3.5★ to 4.5★ see an average of 19% more customers choosing them over competitors.
            </div>
          </div>

          {/* Right Column - Output Card */}
          <div className="bg-[#1B2A4A] border border-[rgba(61,170,114,0.25)] rounded-[20px] p-6 md:p-8 text-center space-y-6 shadow-pricing relative overflow-hidden">
            
            <div className="space-y-1">
              <div className="text-[0.82rem] font-bold text-[#CBD5E1] uppercase tracking-wider">
                EXTRA REVENUE PER MONTH IF YOU FIX YOUR RATING
              </div>
              <div className="font-sans font-extrabold text-[2.8rem] md:text-[3.5rem] text-[#3DAA72] leading-none">
                ₹{formatCurrency(extraRevenue)}
              </div>
              <div className="text-sm text-[#CBD5E1] font-sans">
                by improving your rating to 4.5★ or above
              </div>
            </div>

            {/* Breakdown table */}
            <div className="border-t border-[#3D4F72] pt-2 text-sm font-sans">
              <div className="flex justify-between py-3 border-b border-[#3D4F72]">
                <span className="text-[#CBD5E1]">Customers you could be gaining</span>
                <span className="text-[#F1F5F9] font-bold">+{extraCustomers}/month</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[#3D4F72]">
                <span className="text-[#CBD5E1]">Extra revenue annually</span>
                <span className="text-[#F1F5F9] font-bold">₹{formatCurrency(annualGain)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[#3D4F72]">
                <span className="text-[#CBD5E1]">Karo Simple PRO plan cost</span>
                <span className="text-[#3DAA72] font-bold">₹999/month</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-[#CBD5E1] font-bold">Net gain after plan cost</span>
                <span className="text-[#3DAA72] font-bold text-base">₹{formatCurrency(netGain)}/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ROICalculatorSection;

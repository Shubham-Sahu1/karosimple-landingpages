"use client";

import React, { useState } from "react";
import { featureTableGroups } from "@/data/featureCompareTable";

const CHECK = () => (
  <span className="text-[#3DAA72] font-bold text-base" aria-label="Included">✓</span>
);
const CROSS = () => (
  <span className="text-[#EF4444] font-bold text-base" aria-label="Not included">✗</span>
);

function CellValue({ value }) {
  if (value === "✓") return <CHECK />;
  if (value === "✗") return <CROSS />;
  return <span className="text-[#CBD5E1] text-sm">{value}</span>;
}

export function FeatureCompareTable({ condensed = false }) {
  const [openGroups, setOpenGroups] = useState(() =>
    featureTableGroups.map(() => true)
  );

  const toggleGroup = (i) => {
    setOpenGroups((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  const groups = condensed
    ? featureTableGroups.slice(0, 5)
    : featureTableGroups;

  return (
    <section id="compare" className="py-24 bg-[#1B2A4A]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[1.875rem] md:text-[2rem] font-bold text-white mb-3">
            Every feature, side by side
          </h2>
          <p className="text-[1rem] text-[#94A3B8]">
            Compare what each plan includes.
          </p>
        </div>

        {/* Table wrapper — horizontal scroll on mobile */}
        <div className="overflow-x-auto rounded-2xl border border-[#3D4F72] shadow-sm">
          <table className="w-full min-w-[680px] border-collapse">

            {/* Header */}
            <thead>
              <tr className="bg-[#1B2A4A] text-white">
                <th className="text-left px-5 py-4 text-sm font-semibold w-[40%] sticky left-0 bg-[#1B2A4A] z-10 border-b border-[#3D4F72]">
                  Feature
                </th>
                {["FREE", "STARTER", "PRO", "AGENCY"].map((plan) => (
                  <th
                    key={plan}
                    className={`text-center px-4 py-4 text-sm font-semibold w-[15%] border-b border-[#3D4F72] ${
                      plan === "PRO"
                        ? "border-b-2 border-b-[#3DAA72] text-[#3DAA72]"
                        : ""
                    }`}
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {groups.map((group, gi) => (
                <React.Fragment key={group.groupName}>
                  {/* Group divider row */}
                  <tr
                    className="bg-[#253559] hover:bg-[#2e3f66] cursor-pointer select-none border-b border-[#3D4F72]/50"
                    onClick={() => toggleGroup(gi)}
                  >
                    <td
                      colSpan={5}
                      className="px-5 py-3 text-[0.75rem] font-semibold text-[#3DAA72] uppercase tracking-wider"
                    >
                      <span className="flex items-center gap-2">
                        <span className={`transition-transform duration-200 ${openGroups[gi] ? "rotate-90" : ""}`}>▶</span>
                        {group.groupName}
                      </span>
                    </td>
                  </tr>

                  {/* Data rows */}
                  {openGroups[gi] &&
                    group.rows.map((row, ri) => (
                      <tr
                        key={row.feature}
                        className={`${ri % 2 === 0 ? "bg-[#1B2A4A]" : "bg-[#253559]"} border-b border-[#3D4F72]/30`}
                      >
                        <td className="px-5 py-3.5 text-sm text-[#CBD5E1] sticky left-0 bg-inherit font-medium">
                          {row.feature}
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <CellValue value={row.free} />
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <CellValue value={row.starter} />
                        </td>
                        <td className="px-4 py-3.5 text-center border-x border-[#3D4F72]/50">
                          <CellValue value={row.pro} />
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <CellValue value={row.agency} />
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {condensed && (
          <div className="text-center mt-8">
            <a
              href="/features#compare"
              className="inline-flex items-center gap-2 text-[#3DAA72] font-semibold hover:text-[#2D8A5A] transition-colors"
            >
              View full comparison →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeatureCompareTable;

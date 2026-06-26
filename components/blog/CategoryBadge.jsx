export default function CategoryBadge({ label }) {
  return (
    <span className="inline-block bg-[rgba(61,170,114,0.15)] border border-[#3DAA72]/20 text-[#3DAA72] text-[0.7rem] font-semibold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
      {label}
    </span>
  )
}

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function SectionHeading({
  overline,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}) {
  return (
    <div
      className={twMerge(
        clsx(
          "max-w-3xl flex flex-col space-y-3",
          align === "center" ? "mx-auto text-center items-center" : "text-left items-start",
          className
        )
      )}
    >
      <span className="type-label text-ks-green block" data-reveal>
        {overline}
      </span>
      <h2
        className={clsx(
          "type-h2 md:text-4xl text-balance",
          theme === "light" ? "text-ks-navy" : "text-ks-white"
        )}
        data-reveal
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "type-body-lg max-w-2xl text-balance",
            theme === "light" ? "text-ks-muted" : "text-ks-white/80"
          )}
          data-reveal
        >
          {description}
        </p>
      )}
    </div>
  );
}
export default SectionHeading;

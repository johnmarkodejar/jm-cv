"use client";

import { useId } from "react";

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  variant?: "jm" | "code";
}

export default function Logo({ size = 34, showWordmark = false, variant = "jm" }: LogoProps) {
  const id = useId().replace(/:/g, "");
  const gradId = `lg-${id}`;

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="JM logo mark"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Rounded square background */}
        <rect width="36" height="36" rx="9" fill={`url(#${gradId})`} />

        {variant === "code" ? (
          <>
            {/* < bracket */}
            <path
              d="M 13 10 L 6 18 L 13 26"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* / slash */}
            <path
              d="M 22 10 L 14 26"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />
            {/* > bracket */}
            <path
              d="M 23 10 L 30 18 L 23 26"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </>
        ) : (
          <>
            {/* J — top bar + vertical + bottom hook */}
            <path
              d="M 8 10 L 14 10 M 11.5 10 L 11.5 23 Q 11.5 27.5 7 27.5"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* M — left vertical, peak, right vertical */}
            <path
              d="M 16.5 27 L 16.5 10 L 23 19.5 L 29.5 10 L 29.5 27"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </>
        )}
      </svg>

      {showWordmark && (
        <span className="font-heading font-semibold text-white text-sm tracking-tight leading-none">
          JM Reyes
        </span>
      )}
    </span>
  );
}

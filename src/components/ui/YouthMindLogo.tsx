import React from "react";
import Image from "next/image";

interface YouthMindLogoProps {
  variant?: "horizontal" | "vertical" | "iconOnly";
  className?: string;
  size?: "sm" | "md" | "lg";
  showBadge?: boolean;
}

export const YouthMindLogo: React.FC<YouthMindLogoProps> = ({
  variant = "horizontal",
  className = "",
  size = "md",
  showBadge = false,
}) => {
  /* ── icon-only ─────────────────────────────────────────────────── */
  if (variant === "iconOnly") {
    const px = { sm: 32, md: 40, lg: 52 };
    return (
      <div className={`inline-flex ${className}`}>
        <div className="relative" style={{ width: px[size], height: px[size] }}>
          <Image
            src="/assets/logo.jpg"
            alt="YouthMind Logo"
            fill
            quality={100}
            className="object-contain rounded-full"
            style={{ mixBlendMode: "screen" }}
            priority
          />
        </div>
      </div>
    );
  }

  /* ── vertical ───────────────────────────────────────────────────── */
  if (variant === "vertical") {
    const heights = { sm: 80, md: 100, lg: 130 };
    const widths = { sm: 72, md: 90, lg: 115 };
    return (
      <div className={`inline-flex flex-col items-center gap-1 ${className}`}>
        <div style={{ width: widths[size], height: heights[size], position: "relative" }}>
          <Image
            src="/assets/logo.png"
            alt="YouthMind Company"
            fill
            quality={100}
            className="object-contain"
            style={{ mixBlendMode: "screen" }}
            priority
          />
        </div>
        {showBadge && (
          <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-teal-400/80 px-2 py-0.5 rounded-full border border-teal-500/20 bg-teal-500/5">
            Student Co.
          </span>
        )}
      </div>
    );
  }

  /* ── horizontal (navbar default) ───────────────────────────────── */
  const iconPx = { sm: 36, md: 44, lg: 54 };
  const px = iconPx[size];

  return (
    <div className={`inline-flex items-center gap-0 ${className}`}>
      {/* Logo mark — JPG dark bg blended via screen so bg disappears */}
      <div
        className="relative flex-shrink-0"
        style={{ width: px, height: px }}
      >
        <Image
          src="/assets/logo.jpg"
          alt="YouthMind"
          fill
          quality={100}
          className="object-contain"
          style={{ mixBlendMode: "screen" }}
          priority
        />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none -ml-0.5">
        <span
          className={`font-black tracking-tight text-white ${
            size === "sm"
              ? "text-base"
              : size === "md"
              ? "text-[17px]"
              : "text-[20px]"
          }`}
          style={{ fontFamily: "var(--font-fredoka), sans-serif" }}
        >
          Youth<span className="text-[#4BA0A4]">Mind</span>
        </span>
        {showBadge && (
          <span
            className={`font-semibold tracking-[0.15em] uppercase text-teal-400/70 ${
              size === "sm" ? "text-[7px]" : size === "md" ? "text-[8px]" : "text-[9px]"
            }`}
          >
            Student&nbsp;Company
          </span>
        )}
      </div>
    </div>
  );
};

export default YouthMindLogo;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/components/theme/ThemeProvider";

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
  const [mounted, setMounted] = useState(false);
  let isLight = false;

  try {
    const { theme } = useTheme();
    isLight = theme === "light";
  } catch {
    // Fallback if not inside ThemeProvider
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && isLight ? "/assets/logo-ym-light.png?v=2" : "/assets/logo-ym.png?v=2";

  /* ── icon-only ─────────────────────────────────────────────────── */
  if (variant === "iconOnly") {
    const px = { sm: 32, md: 40, lg: 48 };
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <div className="relative transition-all duration-300" style={{ width: px[size], height: px[size] }}>
          <Image
            src={logoSrc}
            alt="YouthMind Logo"
            fill
            quality={90}
            sizes="48px"
            className="object-contain filter drop-shadow-sm transition-all duration-300"
            priority
          />
        </div>
      </div>
    );
  }

  /* ── vertical ───────────────────────────────────────────────────── */
  if (variant === "vertical") {
    const sizes = { sm: 70, md: 90, lg: 110 };
    const sz = sizes[size];
    return (
      <div className={`inline-flex flex-col items-center gap-1 ${className}`}>
        <div style={{ width: sz, height: sz, position: "relative" }}>
          <Image
            src={logoSrc}
            alt="YouthMind Company"
            fill
            quality={90}
            sizes="110px"
            className="object-contain filter drop-shadow-sm transition-all duration-300"
            priority
          />
        </div>
        {showBadge && (
          <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-teal-600 dark:text-teal-400/80 px-2 py-0.5 rounded-full border border-teal-500/20 bg-teal-500/10 dark:bg-teal-500/5">
            Student Co.
          </span>
        )}
      </div>
    );
  }

  /* ── horizontal (navbar default) ───────────────────────────────── */
  const iconPx = { sm: 36, md: 44, lg: 52 };
  const px = iconPx[size];

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {/* Logo mark */}
      <div
        className="relative flex-shrink-0 transition-all duration-300"
        style={{ width: px, height: px }}
      >
        <Image
          src={logoSrc}
          alt="YouthMind"
          fill
          quality={90}
          sizes="52px"
          className="object-contain filter drop-shadow-sm transition-all duration-300"
          priority
        />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-black tracking-tight text-ym-heading ${
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
            className={`font-semibold tracking-[0.15em] uppercase text-teal-600/80 dark:text-teal-400/70 ${
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
